(function() {var implementors = {};
implementors["iota_stronghold"] = [{"text":"impl Clone for SLIP10DeriveInput","synthetic":false,"types":[]},{"text":"impl Clone for Procedure","synthetic":false,"types":[]},{"text":"impl Clone for ProcResult","synthetic":false,"types":[]},{"text":"impl Clone for SerdeProcResult","synthetic":false,"types":[]},{"text":"impl Clone for SHRequest","synthetic":false,"types":[]},{"text":"impl Clone for SHResults","synthetic":false,"types":[]},{"text":"impl Clone for InternalMsg","synthetic":false,"types":[]},{"text":"impl Clone for InternalResults","synthetic":false,"types":[]},{"text":"impl Clone for SMsg","synthetic":false,"types":[]},{"text":"impl Clone for Provider","synthetic":false,"types":[]},{"text":"impl Clone for Client","synthetic":false,"types":[]},{"text":"impl Clone for ClientMsg","synthetic":false,"types":[]},{"text":"impl Clone for Snapshot","synthetic":false,"types":[]},{"text":"impl Clone for SnapshotState","synthetic":false,"types":[]},{"text":"impl Clone for ClientId","synthetic":false,"types":[]},{"text":"impl Clone for VaultId","synthetic":false,"types":[]},{"text":"impl Clone for ID","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for ResultMessage&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Location","synthetic":false,"types":[]}];
implementors["runtime"] = [{"text":"impl Clone for Prot","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Bytes&gt; Clone for Boxed&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Bytes&gt; Clone for Guarded&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Bytes&gt; Clone for Ref&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Bytes&gt; Clone for GuardedVec&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Bytes&gt; Clone for Ref&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["snapshot"] = [{"text":"impl Clone for Duplicate","synthetic":false,"types":[]}];
implementors["store"] = [{"text":"impl&lt;K:&nbsp;Clone, V:&nbsp;Clone&gt; Clone for Cache&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Value&lt;T&gt;","synthetic":false,"types":[]}];
implementors["stronghold_communication"] = [{"text":"impl Clone for PermissionValue","synthetic":false,"types":[]},{"text":"impl Clone for PermissionSum","synthetic":false,"types":[]},{"text":"impl Clone for RequestDirection","synthetic":false,"types":[]},{"text":"impl Clone for FirewallPermission","synthetic":false,"types":[]},{"text":"impl Clone for FirewallRule","synthetic":false,"types":[]},{"text":"impl Clone for FirewallConfiguration","synthetic":false,"types":[]},{"text":"impl Clone for RelayConfig","synthetic":false,"types":[]},{"text":"impl Clone for KeepAlive","synthetic":false,"types":[]},{"text":"impl&lt;Req:&nbsp;Clone, ClientMsg:&nbsp;Clone + Message&gt; Clone for CommunicationRequest&lt;Req, ClientMsg&gt;","synthetic":false,"types":[]},{"text":"impl Clone for FirewallBlocked","synthetic":false,"types":[]},{"text":"impl Clone for RequestMessageError","synthetic":false,"types":[]},{"text":"impl Clone for EstablishedConnection","synthetic":false,"types":[]},{"text":"impl&lt;Res:&nbsp;Clone&gt; Clone for CommunicationResults&lt;Res&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ConnectPeerError","synthetic":false,"types":[]},{"text":"impl&lt;ClientMsg:&nbsp;Clone&gt; Clone for CommunicationActorConfig&lt;ClientMsg&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ClientMsg: Message,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for MessageProtocol","synthetic":false,"types":[]},{"text":"impl&lt;Req:&nbsp;Clone, Res:&nbsp;Clone&gt; Clone for MessageCodec&lt;Req, Res&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Req:&nbsp;Clone + Debug + Serialize + DeserializeOwned&gt; Clone for RequestEnvelope&lt;Req&gt;","synthetic":false,"types":[]},{"text":"impl Clone for P2PMdnsEvent","synthetic":false,"types":[]},{"text":"impl Clone for P2PIdentifyInfo","synthetic":false,"types":[]},{"text":"impl Clone for P2PProtocolsHandlerUpgrErr","synthetic":false,"types":[]},{"text":"impl Clone for P2PIdentifyEvent","synthetic":false,"types":[]},{"text":"impl Clone for P2POutboundFailure","synthetic":false,"types":[]},{"text":"impl Clone for P2PInboundFailure","synthetic":false,"types":[]},{"text":"impl&lt;Req:&nbsp;Clone, Res:&nbsp;Clone&gt; Clone for P2PReqResEvent&lt;Req, Res&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Req:&nbsp;Clone, Res:&nbsp;Clone&gt; Clone for P2PEvent&lt;Req, Res&gt;","synthetic":false,"types":[]},{"text":"impl Clone for BehaviourConfig","synthetic":false,"types":[]}];
implementors["vault"] = [{"text":"impl&lt;T:&nbsp;BoxProvider&gt; Clone for Key&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for TransactionType","synthetic":false,"types":[]},{"text":"impl Clone for Transaction","synthetic":false,"types":[]},{"text":"impl Clone for RecordHint","synthetic":false,"types":[]},{"text":"impl Clone for Val","synthetic":false,"types":[]},{"text":"impl Clone for ChainId","synthetic":false,"types":[]},{"text":"impl Clone for TransactionId","synthetic":false,"types":[]},{"text":"impl Clone for BlobId","synthetic":false,"types":[]},{"text":"impl Clone for Kind","synthetic":false,"types":[]},{"text":"impl Clone for ReadRequest","synthetic":false,"types":[]},{"text":"impl Clone for ReadResult","synthetic":false,"types":[]},{"text":"impl Clone for WriteRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteRequest","synthetic":false,"types":[]},{"text":"impl Clone for RecordId","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()