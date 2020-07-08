use vault::{BoxProvider, DBWriter, Id, IndexHint, Key};

use crate::{
    connection::{send_until_success, CRequest},
    line_error, State,
};

use std::cell::RefCell;

pub struct Client<P: BoxProvider> {
    pub id: Id,
    pub db: Db<P>,
}

pub struct Db<P: BoxProvider> {
    key: Key<P>,
    db: RefCell<Option<vault::DBView<P>>>,
}

impl<P: BoxProvider + Send + Sync + 'static> Client<P> {
    pub fn create_chain(key: Key<P>, id: Id) -> Client<P> {
        let req = DBWriter::<P>::create_chain(&key.clone(), id);
        send_until_success(CRequest::Write(req.clone()));

        let client = Self {
            id: id,
            db: Db::<P>::new(key),
        };

        client
    }

    pub fn create_entry(&self, payload: Vec<u8>) {
        self.db.take(|db| {
            let (id, req) = db
                .writer(self.id)
                .write(&payload, IndexHint::new(b"").expect(line_error!()))
                .expect(line_error!());

            req.into_iter().for_each(|req| {
                send_until_success(CRequest::Write(req));
            });
        });
    }

    pub fn revoke_entry(&self, id: Id) {
        self.db.take(|db| {
            let (to_write, to_delete) = db.writer(self.id).revoke(id).expect(line_error!());

            send_until_success(CRequest::Write(to_write));
            send_until_success(CRequest::Delete(to_delete));
        });
    }

    pub fn perform_gc(&self) {
        self.db.take(|db| {
            let (to_write, to_delete) = db.writer(self.id).gc().expect(line_error!());
            to_write.into_iter().for_each(|req| {
                send_until_success(CRequest::Write(req.clone()));
            });
            to_delete.into_iter().for_each(|req| {
                send_until_success(CRequest::Delete(req.clone()));
            });
        });
    }
}

impl<P: BoxProvider> Db<P> {
    pub fn new(key: Key<P>) -> Self {
        let req = send_until_success(CRequest::List).list();
        let db = vault::DBView::load(key.clone(), req).expect(line_error!());
        Self {
            key,
            db: RefCell::new(Some(db)),
        }
    }

    pub fn take<T>(&self, f: impl FnOnce(vault::DBView<P>) -> T) -> T {
        let mut _db = self.db.borrow_mut();
        let db = _db.take().expect(line_error!());
        let retval = f(db);

        let req = send_until_success(CRequest::List).list();
        *_db = Some(vault::DBView::load(self.key.clone(), req).expect(line_error!()));
        retval
    }
}