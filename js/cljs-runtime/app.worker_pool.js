goog.provide('app.worker_pool');
app.worker_pool.pool = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.worker_pool.job_queue = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.worker_pool.busy_workers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
app.worker_pool.job_callbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.worker_pool.job_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.worker_pool.create_worker_BANG_ = (function app$worker_pool$create_worker_BANG_(){
var worker = (new Worker("js/worker.js"));
(worker.onmessage = (function (event){
var data = event.data;
var job_id = data.id;
var type = data.type;
var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data.result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var success_QMARK_ = data.success;
var error = data.error;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"SIMULATION_RESULT")){
var temp__5825__auto___25292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.worker_pool.job_callbacks),job_id);
if(cljs.core.truth_(temp__5825__auto___25292)){
var cb_25293 = temp__5825__auto___25292;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.job_callbacks,cljs.core.dissoc,job_id);

var G__25115_25294 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
(cb_25293.cljs$core$IFn$_invoke$arity$1 ? cb_25293.cljs$core$IFn$_invoke$arity$1(G__25115_25294) : cb_25293.call(null,G__25115_25294));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.busy_workers,cljs.core.disj,worker);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.pool,cljs.core.conj,worker);

return (app.worker_pool.process_queue_BANG_.cljs$core$IFn$_invoke$arity$0 ? app.worker_pool.process_queue_BANG_.cljs$core$IFn$_invoke$arity$0() : app.worker_pool.process_queue_BANG_.call(null));
} else {
return null;
}
}));

(worker.onerror = (function (err){
console.error("Worker error:",err.message);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.busy_workers,cljs.core.disj,worker);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.pool,cljs.core.conj,worker);

return (app.worker_pool.process_queue_BANG_.cljs$core$IFn$_invoke$arity$0 ? app.worker_pool.process_queue_BANG_.cljs$core$IFn$_invoke$arity$0() : app.worker_pool.process_queue_BANG_.call(null));
}));

return worker;
});
app.worker_pool.init_pool_BANG_ = (function app$worker_pool$init_pool_BANG_(size){
var actual_size = (cljs.core.truth_((function (){var and__5160__auto__ = size;
if(cljs.core.truth_(and__5160__auto__)){
return (size > (0));
} else {
return and__5160__auto__;
}
})())?size:Math.max((1),(navigator.hardwareConcurrency - (1))));
console.log("Initializing worker pool of size:",actual_size);

return cljs.core.reset_BANG_(app.worker_pool.pool,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(actual_size,app.worker_pool.create_worker_BANG_)));
});
app.worker_pool.process_queue_BANG_ = (function app$worker_pool$process_queue_BANG_(){
if(((cljs.core.seq(cljs.core.deref(app.worker_pool.job_queue))) && (cljs.core.seq(cljs.core.deref(app.worker_pool.pool))))){
var worker = cljs.core.peek(cljs.core.deref(app.worker_pool.pool));
var job = cljs.core.first(cljs.core.deref(app.worker_pool.job_queue));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.worker_pool.pool,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.worker_pool.job_queue,cljs.core.rest);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.busy_workers,cljs.core.conj,worker);

var job_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.worker_pool.job_counter,cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.worker_pool.job_callbacks,cljs.core.assoc,job_id,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(job));

return worker.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),job_id,new cljs.core.Keyword(null,"type","type",1174270348),"RUN_SIMULATION",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(job)], null)));
} else {
return null;
}
});
app.worker_pool.submit_job_BANG_ = (function app$worker_pool$submit_job_BANG_(data,callback){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.worker_pool.job_queue,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"callback","callback",-705136228),callback], null));

return app.worker_pool.process_queue_BANG_();
});
app.worker_pool.clear_queue_BANG_ = (function app$worker_pool$clear_queue_BANG_(){
cljs.core.reset_BANG_(app.worker_pool.job_queue,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(app.worker_pool.job_callbacks,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=app.worker_pool.js.map
