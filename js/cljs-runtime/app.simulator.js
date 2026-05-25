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
}catch (e26793){if((e26793 instanceof Error)){
var e = e26793;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e26793;

}
}});
app.simulator.submit_simulation_jobs_BANG_ = (function app$simulator$submit_simulation_jobs_BANG_(config,all_accepted,families,results,completed,total,start_time){
app.worker_pool.clear_queue_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
var seq__26798 = cljs.core.seq(families);
var chunk__26799 = null;
var count__26800 = (0);
var i__26801 = (0);
while(true){
if((i__26801 < count__26800)){
var fam = chunk__26799.cljs$core$IIndexed$_nth$arity$2(null,i__26801);
var fam_kw_27033 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26867_27034 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27033)));
var chunk__26868_27035 = null;
var count__26869_27036 = (0);
var i__26870_27037 = (0);
while(true){
if((i__26870_27037 < count__26869_27036)){
var vec__26886_27038 = chunk__26868_27035.cljs$core$IIndexed$_nth$arity$2(null,i__26870_27037);
var idx_27039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26886_27038,(0),null);
var rec_27040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26886_27038,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27040,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27039 * (7919)))], null),((function (seq__26867_27034,chunk__26868_27035,count__26869_27036,i__26870_27037,seq__26798,chunk__26799,count__26800,i__26801,vec__26886_27038,idx_27039,rec_27040,fam_kw_27033,fam){
return (function (p__26889){
var map__26890 = p__26889;
var map__26890__$1 = cljs.core.__destructure_map(map__26890);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26890__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26890__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26890__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27033,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26867_27034,chunk__26868_27035,count__26869_27036,i__26870_27037,seq__26798,chunk__26799,count__26800,i__26801,vec__26886_27038,idx_27039,rec_27040,fam_kw_27033,fam))
);


var G__27041 = seq__26867_27034;
var G__27042 = chunk__26868_27035;
var G__27043 = count__26869_27036;
var G__27044 = (i__26870_27037 + (1));
seq__26867_27034 = G__27041;
chunk__26868_27035 = G__27042;
count__26869_27036 = G__27043;
i__26870_27037 = G__27044;
continue;
} else {
var temp__5825__auto___27045 = cljs.core.seq(seq__26867_27034);
if(temp__5825__auto___27045){
var seq__26867_27046__$1 = temp__5825__auto___27045;
if(cljs.core.chunked_seq_QMARK_(seq__26867_27046__$1)){
var c__5548__auto___27047 = cljs.core.chunk_first(seq__26867_27046__$1);
var G__27048 = cljs.core.chunk_rest(seq__26867_27046__$1);
var G__27049 = c__5548__auto___27047;
var G__27050 = cljs.core.count(c__5548__auto___27047);
var G__27051 = (0);
seq__26867_27034 = G__27048;
chunk__26868_27035 = G__27049;
count__26869_27036 = G__27050;
i__26870_27037 = G__27051;
continue;
} else {
var vec__26893_27052 = cljs.core.first(seq__26867_27046__$1);
var idx_27053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893_27052,(0),null);
var rec_27054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893_27052,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27054,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27053 * (7919)))], null),((function (seq__26867_27034,chunk__26868_27035,count__26869_27036,i__26870_27037,seq__26798,chunk__26799,count__26800,i__26801,vec__26893_27052,idx_27053,rec_27054,seq__26867_27046__$1,temp__5825__auto___27045,fam_kw_27033,fam){
return (function (p__26896){
var map__26897 = p__26896;
var map__26897__$1 = cljs.core.__destructure_map(map__26897);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26897__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26897__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26897__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27033,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26867_27034,chunk__26868_27035,count__26869_27036,i__26870_27037,seq__26798,chunk__26799,count__26800,i__26801,vec__26893_27052,idx_27053,rec_27054,seq__26867_27046__$1,temp__5825__auto___27045,fam_kw_27033,fam))
);


var G__27055 = cljs.core.next(seq__26867_27046__$1);
var G__27056 = null;
var G__27057 = (0);
var G__27058 = (0);
seq__26867_27034 = G__27055;
chunk__26868_27035 = G__27056;
count__26869_27036 = G__27057;
i__26870_27037 = G__27058;
continue;
}
} else {
}
}
break;
}


var G__27059 = seq__26798;
var G__27060 = chunk__26799;
var G__27061 = count__26800;
var G__27062 = (i__26801 + (1));
seq__26798 = G__27059;
chunk__26799 = G__27060;
count__26800 = G__27061;
i__26801 = G__27062;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26798);
if(temp__5825__auto__){
var seq__26798__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26798__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__26798__$1);
var G__27063 = cljs.core.chunk_rest(seq__26798__$1);
var G__27064 = c__5548__auto__;
var G__27065 = cljs.core.count(c__5548__auto__);
var G__27066 = (0);
seq__26798 = G__27063;
chunk__26799 = G__27064;
count__26800 = G__27065;
i__26801 = G__27066;
continue;
} else {
var fam = cljs.core.first(seq__26798__$1);
var fam_kw_27069 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26898_27070 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27069)));
var chunk__26899_27071 = null;
var count__26900_27072 = (0);
var i__26901_27073 = (0);
while(true){
if((i__26901_27073 < count__26900_27072)){
var vec__26912_27074 = chunk__26899_27071.cljs$core$IIndexed$_nth$arity$2(null,i__26901_27073);
var idx_27075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912_27074,(0),null);
var rec_27076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26912_27074,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27076,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27075 * (7919)))], null),((function (seq__26898_27070,chunk__26899_27071,count__26900_27072,i__26901_27073,seq__26798,chunk__26799,count__26800,i__26801,vec__26912_27074,idx_27075,rec_27076,fam_kw_27069,fam,seq__26798__$1,temp__5825__auto__){
return (function (p__26915){
var map__26916 = p__26915;
var map__26916__$1 = cljs.core.__destructure_map(map__26916);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26916__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26916__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26916__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27069,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26898_27070,chunk__26899_27071,count__26900_27072,i__26901_27073,seq__26798,chunk__26799,count__26800,i__26801,vec__26912_27074,idx_27075,rec_27076,fam_kw_27069,fam,seq__26798__$1,temp__5825__auto__))
);


var G__27077 = seq__26898_27070;
var G__27078 = chunk__26899_27071;
var G__27079 = count__26900_27072;
var G__27080 = (i__26901_27073 + (1));
seq__26898_27070 = G__27077;
chunk__26899_27071 = G__27078;
count__26900_27072 = G__27079;
i__26901_27073 = G__27080;
continue;
} else {
var temp__5825__auto___27081__$1 = cljs.core.seq(seq__26898_27070);
if(temp__5825__auto___27081__$1){
var seq__26898_27082__$1 = temp__5825__auto___27081__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26898_27082__$1)){
var c__5548__auto___27083 = cljs.core.chunk_first(seq__26898_27082__$1);
var G__27084 = cljs.core.chunk_rest(seq__26898_27082__$1);
var G__27085 = c__5548__auto___27083;
var G__27086 = cljs.core.count(c__5548__auto___27083);
var G__27087 = (0);
seq__26898_27070 = G__27084;
chunk__26899_27071 = G__27085;
count__26900_27072 = G__27086;
i__26901_27073 = G__27087;
continue;
} else {
var vec__26917_27088 = cljs.core.first(seq__26898_27082__$1);
var idx_27089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917_27088,(0),null);
var rec_27090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917_27088,(1),null);
app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27090,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27089 * (7919)))], null),((function (seq__26898_27070,chunk__26899_27071,count__26900_27072,i__26901_27073,seq__26798,chunk__26799,count__26800,i__26801,vec__26917_27088,idx_27089,rec_27090,seq__26898_27082__$1,temp__5825__auto___27081__$1,fam_kw_27069,fam,seq__26798__$1,temp__5825__auto__){
return (function (p__26920){
var map__26921 = p__26920;
var map__26921__$1 = cljs.core.__destructure_map(map__26921);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26921__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26921__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26921__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5023__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return result;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27069,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log(["All simulations done in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000))),"s"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26898_27070,chunk__26899_27071,count__26900_27072,i__26901_27073,seq__26798,chunk__26799,count__26800,i__26801,vec__26917_27088,idx_27089,rec_27090,seq__26898_27082__$1,temp__5825__auto___27081__$1,fam_kw_27069,fam,seq__26798__$1,temp__5825__auto__))
);


var G__27093 = cljs.core.next(seq__26898_27082__$1);
var G__27094 = null;
var G__27095 = (0);
var G__27096 = (0);
seq__26898_27070 = G__27093;
chunk__26899_27071 = G__27094;
count__26900_27072 = G__27095;
i__26901_27073 = G__27096;
continue;
}
} else {
}
}
break;
}


var G__27097 = cljs.core.next(seq__26798__$1);
var G__27098 = null;
var G__27099 = (0);
var G__27100 = (0);
seq__26798 = G__27097;
chunk__26799 = G__27098;
count__26800 = G__27099;
i__26801 = G__27100;
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

var c__26618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26621__auto__ = (function (){var switch__26594__auto__ = (function (state_26972){
var state_val_26973 = (state_26972[(1)]);
if((state_val_26973 === (1))){
var inst_26925 = cljs.core.async.timeout((50));
var state_26972__$1 = state_26972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26972__$1,(2),inst_26925);
} else {
if((state_val_26973 === (2))){
var inst_26927 = (state_26972[(2)]);
var state_26972__$1 = (function (){var statearr_26974 = state_26972;
(statearr_26974[(7)] = inst_26927);

return statearr_26974;
})();
var statearr_26975_27101 = state_26972__$1;
(statearr_26975_27101[(2)] = null);

(statearr_26975_27101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (3))){
var _ = (function (){var statearr_26976 = state_26972;
(statearr_26976[(4)] = cljs.core.cons((6),(state_26972[(4)])));

return statearr_26976;
})();
var inst_26949 = (function (){return (function (acc,fam){
app.simulator.log(["Running Stage 1 for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)].join(''));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)," accepted: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))].join(''));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_26950 = cljs.core.PersistentHashMap.EMPTY;
var inst_26951 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_26949,inst_26950,families);
var inst_26952 = cljs.core.vals(inst_26951);
var inst_26953 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_26952);
var inst_26954 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_26953);
var inst_26956 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_26957 = [inst_26954,(0)];
var inst_26958 = cljs.core.PersistentHashMap.fromArrays(inst_26956,inst_26957);
var inst_26959 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_26958], 0));
var inst_26960 = cljs.core.PersistentHashMap.EMPTY;
var inst_26961 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_26960);
var inst_26962 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_26963 = Date.now();
var inst_26964 = app.simulator.submit_simulation_jobs_BANG_(config,inst_26951,families,inst_26961,inst_26962,inst_26954,inst_26963);
var ___$1 = (function (){var statearr_26977 = state_26972;
(statearr_26977[(4)] = cljs.core.rest((state_26972[(4)])));

return statearr_26977;
})();
var state_26972__$1 = (function (){var statearr_26978 = state_26972;
(statearr_26978[(8)] = inst_26959);

return statearr_26978;
})();
var statearr_26979_27111 = state_26972__$1;
(statearr_26979_27111[(2)] = inst_26964);

(statearr_26979_27111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (4))){
var inst_26967 = (state_26972[(2)]);
var state_26972__$1 = state_26972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26972__$1,inst_26967);
} else {
if((state_val_26973 === (5))){
var inst_26928 = (state_26972[(2)]);
var inst_26936 = inst_26928.message;
var inst_26937 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_26936], 0));
var state_26972__$1 = state_26972;
var statearr_26981_27114 = state_26972__$1;
(statearr_26981_27114[(2)] = inst_26937);

(statearr_26981_27114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26973 === (6))){
var _ = (function (){var statearr_26982 = state_26972;
(statearr_26982[(4)] = cljs.core.rest((state_26972[(4)])));

return statearr_26982;
})();
var state_26972__$1 = state_26972;
var ex26980 = (state_26972__$1[(2)]);
var statearr_26983_27116 = state_26972__$1;
(statearr_26983_27116[(5)] = ex26980);


if((ex26980 instanceof Error)){
var statearr_26984_27117 = state_26972__$1;
(statearr_26984_27117[(1)] = (5));

(statearr_26984_27117[(5)] = null);

} else {
throw ex26980;

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
var app$simulator$start_simulation_BANG__$_state_machine__26595__auto__ = null;
var app$simulator$start_simulation_BANG__$_state_machine__26595__auto____0 = (function (){
var statearr_26985 = [null,null,null,null,null,null,null,null,null];
(statearr_26985[(0)] = app$simulator$start_simulation_BANG__$_state_machine__26595__auto__);

(statearr_26985[(1)] = (1));

return statearr_26985;
});
var app$simulator$start_simulation_BANG__$_state_machine__26595__auto____1 = (function (state_26972){
while(true){
var ret_value__26596__auto__ = (function (){try{while(true){
var result__26597__auto__ = switch__26594__auto__(state_26972);
if(cljs.core.keyword_identical_QMARK_(result__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26597__auto__;
}
break;
}
}catch (e26986){var ex__26598__auto__ = e26986;
var statearr_26987_27129 = state_26972;
(statearr_26987_27129[(2)] = ex__26598__auto__);


if(cljs.core.seq((state_26972[(4)]))){
var statearr_26988_27130 = state_26972;
(statearr_26988_27130[(1)] = cljs.core.first((state_26972[(4)])));

} else {
throw ex__26598__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26596__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27132 = state_26972;
state_26972 = G__27132;
continue;
} else {
return ret_value__26596__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__26595__auto__ = function(state_26972){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__26595__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__26595__auto____1.call(this,state_26972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__26595__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__26595__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__26595__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__26595__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__26595__auto__;
})()
})();
var state__26622__auto__ = (function (){var statearr_26989 = f__26621__auto__();
(statearr_26989[(6)] = c__26618__auto__);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26622__auto__);
}));

return c__26618__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__26990 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26990) : cljs.numpy.array.call(null,G__26990));
})();
var bat_shape_arr = (function (){var G__26991 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26991) : cljs.numpy.array.call(null,G__26991));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__26992 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26992) : cljs.numpy.array.call(null,G__26992));
})();
var gps_shape_arr = (function (){var G__26993 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26993) : cljs.numpy.array.call(null,G__26993));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__26994 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26994) : cljs.numpy.array.call(null,G__26994));
})();
var unc_shape_arr = (function (){var G__26995 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26995) : cljs.numpy.array.call(null,G__26995));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__26996 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26996) : cljs.numpy.array.call(null,G__26996));
})();
var unc_shape_arr = (function (){var G__26997 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26997) : cljs.numpy.array.call(null,G__26997));
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

return app.worker_pool.submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__26998){
var map__26999 = p__26998;
var map__26999__$1 = cljs.core.__destructure_map(map__26999);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__27146 = (curr + step);
var G__27147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__27146;
acc = G__27147;
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
var combos = (function (){var iter__5503__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__27000(s__27001){
return (new cljs.core.LazySeq(null,(function (){
var s__27001__$1 = s__27001;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27001__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__27001__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__27000_$_iter__27002(s__27003){
return (new cljs.core.LazySeq(null,((function (s__27001__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__27003__$1 = s__27003;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27003__$1);
if(temp__5825__auto____$1){
var s__27003__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27003__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27003__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27005 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27004 = (0);
while(true){
if((i__27004 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__27004);
cljs.core.chunk_append(b__27005,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__27151 = (i__27004 + (1));
i__27004 = G__27151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27005),app$simulator$start_stress_test_BANG__$_iter__27000_$_iter__27002(cljs.core.chunk_rest(s__27003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27005),null);
}
} else {
var k = cljs.core.first(s__27003__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__27000_$_iter__27002(cljs.core.rest(s__27003__$2)));
}
} else {
return null;
}
break;
}
});})(s__27001__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__27001__$1,mos,xs__6385__auto__,temp__5825__auto__,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(k_vals));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$simulator$start_stress_test_BANG__$_iter__27000(cljs.core.rest(s__27001__$1)));
} else {
var G__27153 = cljs.core.rest(s__27001__$1);
s__27001__$1 = G__27153;
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
var seq__27018 = cljs.core.seq(combos);
var chunk__27019 = null;
var count__27020 = (0);
var i__27021 = (0);
while(true){
if((i__27021 < count__27020)){
var combo = chunk__27019.cljs$core$IIndexed$_nth$arity$2(null,i__27021);
app.worker_pool.submit_job_BANG_(combo,((function (seq__27018,chunk__27019,count__27020,i__27021,combo,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27029){
var map__27030 = p__27029;
var map__27030__$1 = cljs.core.__destructure_map(map__27030);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__27018,chunk__27019,count__27020,i__27021,combo,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27158 = seq__27018;
var G__27159 = chunk__27019;
var G__27160 = count__27020;
var G__27161 = (i__27021 + (1));
seq__27018 = G__27158;
chunk__27019 = G__27159;
count__27020 = G__27160;
i__27021 = G__27161;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27018);
if(temp__5825__auto__){
var seq__27018__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27018__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__27018__$1);
var G__27162 = cljs.core.chunk_rest(seq__27018__$1);
var G__27163 = c__5548__auto__;
var G__27164 = cljs.core.count(c__5548__auto__);
var G__27165 = (0);
seq__27018 = G__27162;
chunk__27019 = G__27163;
count__27020 = G__27164;
i__27021 = G__27165;
continue;
} else {
var combo = cljs.core.first(seq__27018__$1);
app.worker_pool.submit_job_BANG_(combo,((function (seq__27018,chunk__27019,count__27020,i__27021,combo,seq__27018__$1,temp__5825__auto__,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27031){
var map__27032 = p__27031;
var map__27032__$1 = cljs.core.__destructure_map(map__27032);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__27018,chunk__27019,count__27020,i__27021,combo,seq__27018__$1,temp__5825__auto__,completed,results,start_time,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27178 = cljs.core.next(seq__27018__$1);
var G__27179 = null;
var G__27180 = (0);
var G__27181 = (0);
seq__27018 = G__27178;
chunk__27019 = G__27179;
count__27020 = G__27180;
i__27021 = G__27181;
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
