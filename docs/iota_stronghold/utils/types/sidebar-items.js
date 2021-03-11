initSidebarItems({"enum":[["Location","A `Location` type used to specify where in the `Stronghold` a piece of data should be stored. A generic location specifies a non-versioned location while a counter location specifies a versioned location. The Counter location can be used to get the head of the version chain by passing in `None` as the counter index. Otherwise, counter records are referenced through their associated index.  On Read, the `None` location is the latest record in the version chain while on Write, the `None` location is the next record in the version chain."],["ResultMessage","Return value used for Actor Messages.  Can specify an Error or an Ok result."],["StrongholdFlags","Policy options for modifying an entire Stronghold.  Must be specified on creation."],["VaultFlags","Policy options for for a specific vault.  Must be specified on creation."]],"type":[["StatusMessage","A type alias for the empty `ResultMessage<()>` type."]]});