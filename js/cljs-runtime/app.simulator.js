goog.provide('app.simulator');
app.simulator.log = (function app$simulator$log(msg){
return console.log("[Main Simulator]",msg);
});
app.simulator.init_BANG_ = (function app$simulator$init_BANG_(){
return app.simulator.log("Simulator init. Pyodide removed. Ready.");
});
app.simulator.run_stage1_BANG_ = (function app$simulator$run_stage1_BANG_(family,cfg){
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
return app.regal_fit.prefilter.apply_prefilter_weibull(cfg);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
return app.regal_fit.prefilter.apply_prefilter_cure(cfg);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
return app.regal_fit.prefilter.apply_prefilter_leaky(cfg);
} else {
return null;
}
}
}
}catch (e28338){if((e28338 instanceof Error)){
var e = e28338;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e28338;

}
}});
app.simulator.submit_simulation_jobs_BANG_ = (function app$simulator$submit_simulation_jobs_BANG_(config,all_accepted,families,results,completed,total,start_time){
app.worker_pool.clear_queue_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
var seq__28339 = cljs.core.seq(families);
var chunk__28340 = null;
var count__28341 = (0);
var i__28342 = (0);
while(true){
if((i__28342 < count__28341)){
var fam = chunk__28340.cljs$core$IIndexed$_nth$arity$2(null,i__28342);
var fam_kw_28520 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__28396_28521 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_28520)));
var chunk__28397_28522 = null;
var count__28398_28523 = (0);
var i__28399_28524 = (0);
while(true){
if((i__28399_28524 < count__28398_28523)){
var vec__28410_28525 = chunk__28397_28522.cljs$core$IIndexed$_nth$arity$2(null,i__28399_28524);
var idx_28526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410_28525,(0),null);
var rec_28527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410_28525,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_28527,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_28526 * (7919)))], null),((function (seq__28396_28521,chunk__28397_28522,count__28398_28523,i__28399_28524,seq__28339,chunk__28340,count__28341,i__28342,vec__28410_28525,idx_28526,rec_28527,fam_kw_28520,fam){
return (function (p__28413){
var map__28414 = p__28413;
var map__28414__$1 = cljs.core.__destructure_map(map__28414);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28414__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_28520,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__28396_28521,chunk__28397_28522,count__28398_28523,i__28399_28524,seq__28339,chunk__28340,count__28341,i__28342,vec__28410_28525,idx_28526,rec_28527,fam_kw_28520,fam))
);


var G__28529 = seq__28396_28521;
var G__28530 = chunk__28397_28522;
var G__28531 = count__28398_28523;
var G__28532 = (i__28399_28524 + (1));
seq__28396_28521 = G__28529;
chunk__28397_28522 = G__28530;
count__28398_28523 = G__28531;
i__28399_28524 = G__28532;
continue;
} else {
var temp__5825__auto___28533 = cljs.core.seq(seq__28396_28521);
if(temp__5825__auto___28533){
var seq__28396_28534__$1 = temp__5825__auto___28533;
if(cljs.core.chunked_seq_QMARK_(seq__28396_28534__$1)){
var c__5548__auto___28535 = cljs.core.chunk_first(seq__28396_28534__$1);
var G__28536 = cljs.core.chunk_rest(seq__28396_28534__$1);
var G__28537 = c__5548__auto___28535;
var G__28538 = cljs.core.count(c__5548__auto___28535);
var G__28539 = (0);
seq__28396_28521 = G__28536;
chunk__28397_28522 = G__28537;
count__28398_28523 = G__28538;
i__28399_28524 = G__28539;
continue;
} else {
var vec__28415_28540 = cljs.core.first(seq__28396_28534__$1);
var idx_28541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415_28540,(0),null);
var rec_28542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415_28540,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_28542,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_28541 * (7919)))], null),((function (seq__28396_28521,chunk__28397_28522,count__28398_28523,i__28399_28524,seq__28339,chunk__28340,count__28341,i__28342,vec__28415_28540,idx_28541,rec_28542,seq__28396_28534__$1,temp__5825__auto___28533,fam_kw_28520,fam){
return (function (p__28418){
var map__28419 = p__28418;
var map__28419__$1 = cljs.core.__destructure_map(map__28419);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28419__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28419__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28419__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_28520,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__28396_28521,chunk__28397_28522,count__28398_28523,i__28399_28524,seq__28339,chunk__28340,count__28341,i__28342,vec__28415_28540,idx_28541,rec_28542,seq__28396_28534__$1,temp__5825__auto___28533,fam_kw_28520,fam))
);


var G__28543 = cljs.core.next(seq__28396_28534__$1);
var G__28544 = null;
var G__28545 = (0);
var G__28546 = (0);
seq__28396_28521 = G__28543;
chunk__28397_28522 = G__28544;
count__28398_28523 = G__28545;
i__28399_28524 = G__28546;
continue;
}
} else {
}
}
break;
}


var G__28547 = seq__28339;
var G__28548 = chunk__28340;
var G__28549 = count__28341;
var G__28550 = (i__28342 + (1));
seq__28339 = G__28547;
chunk__28340 = G__28548;
count__28341 = G__28549;
i__28342 = G__28550;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28339);
if(temp__5825__auto__){
var seq__28339__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28339__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28339__$1);
var G__28551 = cljs.core.chunk_rest(seq__28339__$1);
var G__28552 = c__5548__auto__;
var G__28553 = cljs.core.count(c__5548__auto__);
var G__28554 = (0);
seq__28339 = G__28551;
chunk__28340 = G__28552;
count__28341 = G__28553;
i__28342 = G__28554;
continue;
} else {
var fam = cljs.core.first(seq__28339__$1);
var fam_kw_28555 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__28420_28556 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_28555)));
var chunk__28421_28557 = null;
var count__28422_28558 = (0);
var i__28423_28559 = (0);
while(true){
if((i__28423_28559 < count__28422_28558)){
var vec__28434_28560 = chunk__28421_28557.cljs$core$IIndexed$_nth$arity$2(null,i__28423_28559);
var idx_28561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434_28560,(0),null);
var rec_28562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434_28560,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_28562,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_28561 * (7919)))], null),((function (seq__28420_28556,chunk__28421_28557,count__28422_28558,i__28423_28559,seq__28339,chunk__28340,count__28341,i__28342,vec__28434_28560,idx_28561,rec_28562,fam_kw_28555,fam,seq__28339__$1,temp__5825__auto__){
return (function (p__28437){
var map__28438 = p__28437;
var map__28438__$1 = cljs.core.__destructure_map(map__28438);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28438__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28438__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28438__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_28555,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__28420_28556,chunk__28421_28557,count__28422_28558,i__28423_28559,seq__28339,chunk__28340,count__28341,i__28342,vec__28434_28560,idx_28561,rec_28562,fam_kw_28555,fam,seq__28339__$1,temp__5825__auto__))
);


var G__28563 = seq__28420_28556;
var G__28564 = chunk__28421_28557;
var G__28565 = count__28422_28558;
var G__28566 = (i__28423_28559 + (1));
seq__28420_28556 = G__28563;
chunk__28421_28557 = G__28564;
count__28422_28558 = G__28565;
i__28423_28559 = G__28566;
continue;
} else {
var temp__5825__auto___28567__$1 = cljs.core.seq(seq__28420_28556);
if(temp__5825__auto___28567__$1){
var seq__28420_28568__$1 = temp__5825__auto___28567__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28420_28568__$1)){
var c__5548__auto___28569 = cljs.core.chunk_first(seq__28420_28568__$1);
var G__28570 = cljs.core.chunk_rest(seq__28420_28568__$1);
var G__28571 = c__5548__auto___28569;
var G__28572 = cljs.core.count(c__5548__auto___28569);
var G__28573 = (0);
seq__28420_28556 = G__28570;
chunk__28421_28557 = G__28571;
count__28422_28558 = G__28572;
i__28423_28559 = G__28573;
continue;
} else {
var vec__28439_28575 = cljs.core.first(seq__28420_28568__$1);
var idx_28576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28439_28575,(0),null);
var rec_28577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28439_28575,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_28577,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_28576 * (7919)))], null),((function (seq__28420_28556,chunk__28421_28557,count__28422_28558,i__28423_28559,seq__28339,chunk__28340,count__28341,i__28342,vec__28439_28575,idx_28576,rec_28577,seq__28420_28568__$1,temp__5825__auto___28567__$1,fam_kw_28555,fam,seq__28339__$1,temp__5825__auto__){
return (function (p__28442){
var map__28443 = p__28442;
var map__28443__$1 = cljs.core.__destructure_map(map__28443);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_28555,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__28420_28556,chunk__28421_28557,count__28422_28558,i__28423_28559,seq__28339,chunk__28340,count__28341,i__28342,vec__28439_28575,idx_28576,rec_28577,seq__28420_28568__$1,temp__5825__auto___28567__$1,fam_kw_28555,fam,seq__28339__$1,temp__5825__auto__))
);


var G__28578 = cljs.core.next(seq__28420_28568__$1);
var G__28579 = null;
var G__28580 = (0);
var G__28581 = (0);
seq__28420_28556 = G__28578;
chunk__28421_28557 = G__28579;
count__28422_28558 = G__28580;
i__28423_28559 = G__28581;
continue;
}
} else {
}
}
break;
}


var G__28582 = cljs.core.next(seq__28339__$1);
var G__28583 = null;
var G__28584 = (0);
var G__28585 = (0);
seq__28339 = G__28582;
chunk__28340 = G__28583;
count__28341 = G__28584;
i__28342 = G__28585;
continue;
}
} else {
return null;
}
}
break;
}
}
});
app.simulator.start_simulation_BANG_ = (function app$simulator$start_simulation_BANG_(){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var families = new cljs.core.Keyword(null,"families","families",255079231).cljs$core$IFn$_invoke$arity$1(config);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage1","running-stage1",1345324298),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], 0));

var c__28264__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28265__auto__ = (function (){var switch__28241__auto__ = (function (state_28474){
var state_val_28475 = (state_28474[(1)]);
if((state_val_28475 === (1))){
var inst_28444 = cljs.core.async.timeout((50));
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28474__$1,(2),inst_28444);
} else {
if((state_val_28475 === (2))){
var inst_28446 = (state_28474[(2)]);
var state_28474__$1 = (function (){var statearr_28476 = state_28474;
(statearr_28476[(7)] = inst_28446);

return statearr_28476;
})();
var statearr_28477_28586 = state_28474__$1;
(statearr_28477_28586[(2)] = null);

(statearr_28477_28586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (3))){
var _ = (function (){var statearr_28478 = state_28474;
(statearr_28478[(4)] = cljs.core.cons((6),(state_28474[(4)])));

return statearr_28478;
})();
var inst_28455 = (function (){return (function (acc,fam){
app.simulator.log(["Running Stage 1 for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)].join(''));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)," accepted: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))].join(''));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_28456 = cljs.core.PersistentHashMap.EMPTY;
var inst_28457 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_28455,inst_28456,families);
var inst_28458 = cljs.core.vals(inst_28457);
var inst_28459 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_28458);
var inst_28460 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_28459);
var inst_28461 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_28462 = [inst_28460,(0)];
var inst_28463 = cljs.core.PersistentHashMap.fromArrays(inst_28461,inst_28462);
var inst_28464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_28463], 0));
var inst_28465 = cljs.core.PersistentHashMap.EMPTY;
var inst_28466 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_28465);
var inst_28467 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_28468 = Date.now();
var inst_28469 = app.simulator.submit_simulation_jobs_BANG_(config,inst_28457,families,inst_28466,inst_28467,inst_28460,inst_28468);
var ___$1 = (function (){var statearr_28479 = state_28474;
(statearr_28479[(4)] = cljs.core.rest((state_28474[(4)])));

return statearr_28479;
})();
var state_28474__$1 = (function (){var statearr_28480 = state_28474;
(statearr_28480[(8)] = inst_28464);

return statearr_28480;
})();
var statearr_28481_28587 = state_28474__$1;
(statearr_28481_28587[(2)] = inst_28469);

(statearr_28481_28587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (4))){
var inst_28472 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28474__$1,inst_28472);
} else {
if((state_val_28475 === (5))){
var inst_28447 = (state_28474[(2)]);
var inst_28448 = inst_28447.message;
var inst_28449 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_28448], 0));
var state_28474__$1 = state_28474;
var statearr_28483_28588 = state_28474__$1;
(statearr_28483_28588[(2)] = inst_28449);

(statearr_28483_28588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (6))){
var _ = (function (){var statearr_28484 = state_28474;
(statearr_28484[(4)] = cljs.core.rest((state_28474[(4)])));

return statearr_28484;
})();
var state_28474__$1 = state_28474;
var ex28482 = (state_28474__$1[(2)]);
var statearr_28485_28589 = state_28474__$1;
(statearr_28485_28589[(5)] = ex28482);


if((ex28482 instanceof Error)){
var statearr_28486_28590 = state_28474__$1;
(statearr_28486_28590[(1)] = (5));

(statearr_28486_28590[(5)] = null);

} else {
throw ex28482;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var app$simulator$start_simulation_BANG__$_state_machine__28242__auto__ = null;
var app$simulator$start_simulation_BANG__$_state_machine__28242__auto____0 = (function (){
var statearr_28487 = [null,null,null,null,null,null,null,null,null];
(statearr_28487[(0)] = app$simulator$start_simulation_BANG__$_state_machine__28242__auto__);

(statearr_28487[(1)] = (1));

return statearr_28487;
});
var app$simulator$start_simulation_BANG__$_state_machine__28242__auto____1 = (function (state_28474){
while(true){
var ret_value__28243__auto__ = (function (){try{while(true){
var result__28244__auto__ = switch__28241__auto__(state_28474);
if(cljs.core.keyword_identical_QMARK_(result__28244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28244__auto__;
}
break;
}
}catch (e28488){var ex__28245__auto__ = e28488;
var statearr_28489_28591 = state_28474;
(statearr_28489_28591[(2)] = ex__28245__auto__);


if(cljs.core.seq((state_28474[(4)]))){
var statearr_28490_28592 = state_28474;
(statearr_28490_28592[(1)] = cljs.core.first((state_28474[(4)])));

} else {
throw ex__28245__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28593 = state_28474;
state_28474 = G__28593;
continue;
} else {
return ret_value__28243__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__28242__auto__ = function(state_28474){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__28242__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__28242__auto____1.call(this,state_28474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__28242__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__28242__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__28242__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__28242__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__28242__auto__;
})()
})();
var state__28266__auto__ = (function (){var statearr_28491 = f__28265__auto__();
(statearr_28491[(6)] = c__28264__auto__);

return statearr_28491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28266__auto__);
}));

return c__28264__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__28492 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28492) : cljs.numpy.array.call(null,G__28492));
})();
var bat_shape_arr = (function (){var G__28493 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28493) : cljs.numpy.array.call(null,G__28493));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__28494 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28494) : cljs.numpy.array.call(null,G__28494));
})();
var gps_shape_arr = (function (){var G__28495 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28495) : cljs.numpy.array.call(null,G__28495));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__28496 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28496) : cljs.numpy.array.call(null,G__28496));
})();
var unc_shape_arr = (function (){var G__28497 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28497) : cljs.numpy.array.call(null,G__28497));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__28498 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28498) : cljs.numpy.array.call(null,G__28498));
})();
var unc_shape_arr = (function (){var G__28499 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28499) : cljs.numpy.array.call(null,G__28499));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape,new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545),new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)], 0));
} else {
return null;
}
}
}
});
app.simulator.run_discovery_simulation_BANG_ = (function app$simulator$run_discovery_simulation_BANG_(family,params){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var rec = app.simulator.build_discovery_rec(family,params);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215)], null),new cljs.core.Keyword(null,"running","running",1554969103));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], null),null);

return app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__28500){
var map__28501 = p__28500;
var map__28501__$1 = cljs.core.__destructure_map(map__28501);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28501__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28501__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28501__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(success_QMARK_)){
if(cljs.core.truth_(result)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215)], null),new cljs.core.Keyword(null,"done","done",-889844188));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], null),result);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215)], null),new cljs.core.Keyword(null,"failed-prefilter","failed-prefilter",-1329347155));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], null),null);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215)], null),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], null),error);
}
}));
});
app.simulator.arange = (function app$simulator$arange(start,stop,step){
var eps = 1.0E-9;
var curr = start;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((curr < (stop - eps))){
var G__28596 = (curr + step);
var G__28597 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__28596;
acc = G__28597;
continue;
} else {
return acc;
}
break;
}
});
app.simulator.start_stress_test_BANG_ = (function app$simulator$start_stress_test_BANG_(){
var config = new cljs.core.Keyword(null,"stress-test-config","stress-test-config",-854703202).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var mos_grid_cfg = new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778).cljs$core$IFn$_invoke$arity$1(config);
var k_grid_cfg = new cljs.core.Keyword(null,"k-grid","k-grid",-887124116).cljs$core$IFn$_invoke$arity$1(config);
var mos_vals = app.simulator.arange(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mos_grid_cfg,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mos_grid_cfg,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mos_grid_cfg,(2)));
var k_vals = app.simulator.arange(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(k_grid_cfg,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(k_grid_cfg,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(k_grid_cfg,(2)));
var combos = (function (){var iter__5503__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__28502(s__28503){
return (new cljs.core.LazySeq(null,(function (){
var s__28503__$1 = s__28503;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28503__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__28503__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__28502_$_iter__28504(s__28505){
return (new cljs.core.LazySeq(null,((function (s__28503__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__28505__$1 = s__28505;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28505__$1);
if(temp__5825__auto____$1){
var s__28505__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28505__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28505__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28507 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28506 = (0);
while(true){
if((i__28506 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__28506);
cljs.core.chunk_append(b__28507,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__28598 = (i__28506 + (1));
i__28506 = G__28598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28507),app$simulator$start_stress_test_BANG__$_iter__28502_$_iter__28504(cljs.core.chunk_rest(s__28505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28507),null);
}
} else {
var k = cljs.core.first(s__28505__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__28502_$_iter__28504(cljs.core.rest(s__28505__$2)));
}
} else {
return null;
}
break;
}
});})(s__28503__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__28503__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(k_vals));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$simulator$start_stress_test_BANG__$_iter__28502(cljs.core.rest(s__28503__$1)));
} else {
var G__28599 = cljs.core.rest(s__28503__$1);
s__28503__$1 = G__28599;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(mos_vals);
})();
var total_combos = cljs.core.count(combos);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733),new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stress-test-results","stress-test-results",-127451651),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"stress-test-progress","stress-test-progress",1552934606),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),total_combos,new cljs.core.Keyword(null,"completed","completed",-486056503),(0)], null),new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], 0));

app.worker_pool.clear_queue_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_combos,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733),new cljs.core.Keyword(null,"done","done",-889844188));
} else {
var completed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var start_time = Date.now();
var seq__28508 = cljs.core.seq(combos);
var chunk__28509 = null;
var count__28510 = (0);
var i__28511 = (0);
while(true){
if((i__28511 < count__28510)){
var combo = chunk__28509.cljs$core$IIndexed$_nth$arity$2(null,i__28511);
app.worker_pool.submit_job_BANG_(combo,((function (seq__28508,chunk__28509,count__28510,i__28511,combo,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__28516){
var map__28517 = p__28516;
var map__28517__$1 = cljs.core.__destructure_map(map__28517);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28517__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28517__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28517__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stress-test-progress","stress-test-progress",1552934606),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total_combos)){
app.simulator.log(["Stress test simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stress-test-results","stress-test-results",-127451651),cljs.core.deref(results)], 0));
} else {
return null;
}
});})(seq__28508,chunk__28509,count__28510,i__28511,combo,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__28607 = seq__28508;
var G__28608 = chunk__28509;
var G__28609 = count__28510;
var G__28610 = (i__28511 + (1));
seq__28508 = G__28607;
chunk__28509 = G__28608;
count__28510 = G__28609;
i__28511 = G__28610;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28508);
if(temp__5825__auto__){
var seq__28508__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28508__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28508__$1);
var G__28611 = cljs.core.chunk_rest(seq__28508__$1);
var G__28612 = c__5548__auto__;
var G__28613 = cljs.core.count(c__5548__auto__);
var G__28614 = (0);
seq__28508 = G__28611;
chunk__28509 = G__28612;
count__28510 = G__28613;
i__28511 = G__28614;
continue;
} else {
var combo = cljs.core.first(seq__28508__$1);
app.worker_pool.submit_job_BANG_(combo,((function (seq__28508,chunk__28509,count__28510,i__28511,combo,seq__28508__$1,temp__5825__auto__,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__28518){
var map__28519 = p__28518;
var map__28519__$1 = cljs.core.__destructure_map(map__28519);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28519__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28519__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28519__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stress-test-progress","stress-test-progress",1552934606),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total_combos)){
app.simulator.log(["Stress test simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stress-test-results","stress-test-results",-127451651),cljs.core.deref(results)], 0));
} else {
return null;
}
});})(seq__28508,chunk__28509,count__28510,i__28511,combo,seq__28508__$1,temp__5825__auto__,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__28617 = cljs.core.next(seq__28508__$1);
var G__28618 = null;
var G__28619 = (0);
var G__28620 = (0);
seq__28508 = G__28617;
chunk__28509 = G__28618;
count__28510 = G__28619;
i__28511 = G__28620;
continue;
}
} else {
return null;
}
}
break;
}
}
});

//# sourceMappingURL=app.simulator.js.map
