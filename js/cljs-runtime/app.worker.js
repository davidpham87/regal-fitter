goog.provide('app.worker');
console.log("CLJS Worker: Initializing");
(self.onmessage = (function (event){
var data = event.data;
var id = data.id;
var type = data.type;
var payload = data.data;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"RUN_SIMULATION")){
try{var args = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(payload,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var res = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(args),"RUN_STRESS_TEST"))?app.stress_test.simulate.simulate_one_combo(args):app.regal_fit.simulate.simulate_one_combo(args));
var clj_res = (cljs.core.truth_(res)?clojure.walk.keywordize_keys(res):null);
return self.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"SIMULATION_RESULT",new cljs.core.Keyword(null,"result","result",1415092211),clj_res,new cljs.core.Keyword(null,"success","success",1890645906),true], null)));
}catch (e29404){if((e29404 instanceof Error)){
var e = e29404;
console.error("Worker error:",e);

return self.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"SIMULATION_RESULT",new cljs.core.Keyword(null,"error","error",-978969032),e.message,new cljs.core.Keyword(null,"success","success",1890645906),false], null)));
} else {
throw e29404;

}
}} else {
return null;
}
}));

//# sourceMappingURL=app.worker.js.map
