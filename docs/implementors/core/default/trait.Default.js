(function() {var implementors = {};
implementors["iota_stronghold"] = [{"text":"impl Default for SnapshotState","synthetic":false,"types":[]},{"text":"impl Default for ClientId","synthetic":false,"types":[]},{"text":"impl Default for ID","synthetic":false,"types":[]}];
implementors["store"] = [{"text":"impl&lt;K:&nbsp;Hash + Eq, V:&nbsp;Clone + Debug&gt; Default for Cache&lt;K, V&gt;","synthetic":false,"types":[]}];
implementors["stronghold_communication"] = [{"text":"impl Default for FirewallConfiguration","synthetic":false,"types":[]},{"text":"impl&lt;Req, Res&gt; Default for MessageCodec&lt;Req, Res&gt;","synthetic":false,"types":[]},{"text":"impl Default for BehaviourConfig","synthetic":false,"types":[]}];
implementors["vault"] = [{"text":"impl Default for Transaction","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()