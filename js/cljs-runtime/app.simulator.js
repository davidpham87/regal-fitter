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
}catch (e27632){if((e27632 instanceof Error)){
var e = e27632;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e27632;

}
}});
app.simulator.cached_submit_job_BANG_ = (function app$simulator$cached_submit_job_BANG_(data,callback){
var c__27559__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27560__auto__ = (function (){var switch__27536__auto__ = (function (state_27650){
var state_val_27652 = (state_27650[(1)]);
if((state_val_27652 === (1))){
var inst_27634 = (state_27650[(7)]);
var inst_27634__$1 = app.db.hash_key(data);
var inst_27635 = app.db.get_cache(inst_27634__$1);
var state_27650__$1 = (function (){var statearr_27653 = state_27650;
(statearr_27653[(7)] = inst_27634__$1);

return statearr_27653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27650__$1,(2),inst_27635);
} else {
if((state_val_27652 === (2))){
var inst_27637 = (state_27650[(8)]);
var inst_27637__$1 = (state_27650[(2)]);
var state_27650__$1 = (function (){var statearr_27654 = state_27650;
(statearr_27654[(8)] = inst_27637__$1);

return statearr_27654;
})();
if(cljs.core.truth_(inst_27637__$1)){
var statearr_27655_27881 = state_27650__$1;
(statearr_27655_27881[(1)] = (3));

} else {
var statearr_27656_27882 = state_27650__$1;
(statearr_27656_27882[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (3))){
var inst_27637 = (state_27650[(8)]);
var inst_27639 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_27640 = [true,inst_27637];
var inst_27641 = cljs.core.PersistentHashMap.fromArrays(inst_27639,inst_27640);
var inst_27642 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_27641) : callback.call(null,inst_27641));
var state_27650__$1 = state_27650;
var statearr_27657_27883 = state_27650__$1;
(statearr_27657_27883[(2)] = inst_27642);

(statearr_27657_27883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (4))){
var inst_27634 = (state_27650[(7)]);
var inst_27637 = (state_27650[(8)]);
var inst_27644 = (function (){var k = inst_27634;
var cached = inst_27637;
return (function (res){
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res);
} else {
return and__5160__auto__;
}
})())){
app.db.set_cache(k,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(res));
} else {
}

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(res) : callback.call(null,res));
});
})();
var inst_27645 = app.worker_pool.submit_job_BANG_(data,inst_27644);
var state_27650__$1 = state_27650;
var statearr_27658_27886 = state_27650__$1;
(statearr_27658_27886[(2)] = inst_27645);

(statearr_27658_27886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27652 === (5))){
var inst_27647 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27650__$1,inst_27647);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__ = null;
var app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____0 = (function (){
var statearr_27659 = [null,null,null,null,null,null,null,null,null];
(statearr_27659[(0)] = app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__);

(statearr_27659[(1)] = (1));

return statearr_27659;
});
var app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____1 = (function (state_27650){
while(true){
var ret_value__27538__auto__ = (function (){try{while(true){
var result__27539__auto__ = switch__27536__auto__(state_27650);
if(cljs.core.keyword_identical_QMARK_(result__27539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27539__auto__;
}
break;
}
}catch (e27660){var ex__27540__auto__ = e27660;
var statearr_27661_27894 = state_27650;
(statearr_27661_27894[(2)] = ex__27540__auto__);


if(cljs.core.seq((state_27650[(4)]))){
var statearr_27662_27895 = state_27650;
(statearr_27662_27895[(1)] = cljs.core.first((state_27650[(4)])));

} else {
throw ex__27540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27896 = state_27650;
state_27650 = G__27896;
continue;
} else {
return ret_value__27538__auto__;
}
break;
}
});
app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__ = function(state_27650){
switch(arguments.length){
case 0:
return app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____0.call(this);
case 1:
return app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____1.call(this,state_27650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____0;
app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____1;
return app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__;
})()
})();
var state__27561__auto__ = (function (){var statearr_27663 = f__27560__auto__();
(statearr_27663[(6)] = c__27559__auto__);

return statearr_27663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27561__auto__);
}));

return c__27559__auto__;
});
app.simulator.submit_simulation_jobs_BANG_ = (function app$simulator$submit_simulation_jobs_BANG_(config,all_accepted,families,results,completed,total,start_time){
app.worker_pool.clear_queue_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
var seq__27665 = cljs.core.seq(families);
var chunk__27666 = null;
var count__27667 = (0);
var i__27668 = (0);
while(true){
if((i__27668 < count__27667)){
var fam = chunk__27666.cljs$core$IIndexed$_nth$arity$2(null,i__27668);
var fam_kw_27898 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__27719_27899 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27898)));
var chunk__27720_27900 = null;
var count__27721_27901 = (0);
var i__27722_27902 = (0);
while(true){
if((i__27722_27902 < count__27721_27901)){
var vec__27733_27903 = chunk__27720_27900.cljs$core$IIndexed$_nth$arity$2(null,i__27722_27902);
var idx_27904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733_27903,(0),null);
var rec_27905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733_27903,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27905,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27904 * (7919)))], null),((function (seq__27719_27899,chunk__27720_27900,count__27721_27901,i__27722_27902,seq__27665,chunk__27666,count__27667,i__27668,vec__27733_27903,idx_27904,rec_27905,fam_kw_27898,fam){
return (function (p__27736){
var map__27737 = p__27736;
var map__27737__$1 = cljs.core.__destructure_map(map__27737);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27898,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27719_27899,chunk__27720_27900,count__27721_27901,i__27722_27902,seq__27665,chunk__27666,count__27667,i__27668,vec__27733_27903,idx_27904,rec_27905,fam_kw_27898,fam))
);


var G__27911 = seq__27719_27899;
var G__27912 = chunk__27720_27900;
var G__27913 = count__27721_27901;
var G__27914 = (i__27722_27902 + (1));
seq__27719_27899 = G__27911;
chunk__27720_27900 = G__27912;
count__27721_27901 = G__27913;
i__27722_27902 = G__27914;
continue;
} else {
var temp__5825__auto___27915 = cljs.core.seq(seq__27719_27899);
if(temp__5825__auto___27915){
var seq__27719_27919__$1 = temp__5825__auto___27915;
if(cljs.core.chunked_seq_QMARK_(seq__27719_27919__$1)){
var c__5694__auto___27920 = cljs.core.chunk_first(seq__27719_27919__$1);
var G__27922 = cljs.core.chunk_rest(seq__27719_27919__$1);
var G__27923 = c__5694__auto___27920;
var G__27924 = cljs.core.count(c__5694__auto___27920);
var G__27925 = (0);
seq__27719_27899 = G__27922;
chunk__27720_27900 = G__27923;
count__27721_27901 = G__27924;
i__27722_27902 = G__27925;
continue;
} else {
var vec__27738_27926 = cljs.core.first(seq__27719_27919__$1);
var idx_27927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738_27926,(0),null);
var rec_27928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738_27926,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27928,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27927 * (7919)))], null),((function (seq__27719_27899,chunk__27720_27900,count__27721_27901,i__27722_27902,seq__27665,chunk__27666,count__27667,i__27668,vec__27738_27926,idx_27927,rec_27928,seq__27719_27919__$1,temp__5825__auto___27915,fam_kw_27898,fam){
return (function (p__27741){
var map__27742 = p__27741;
var map__27742__$1 = cljs.core.__destructure_map(map__27742);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27742__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27742__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27742__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27898,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27719_27899,chunk__27720_27900,count__27721_27901,i__27722_27902,seq__27665,chunk__27666,count__27667,i__27668,vec__27738_27926,idx_27927,rec_27928,seq__27719_27919__$1,temp__5825__auto___27915,fam_kw_27898,fam))
);


var G__27932 = cljs.core.next(seq__27719_27919__$1);
var G__27933 = null;
var G__27934 = (0);
var G__27935 = (0);
seq__27719_27899 = G__27932;
chunk__27720_27900 = G__27933;
count__27721_27901 = G__27934;
i__27722_27902 = G__27935;
continue;
}
} else {
}
}
break;
}


var G__27938 = seq__27665;
var G__27939 = chunk__27666;
var G__27940 = count__27667;
var G__27941 = (i__27668 + (1));
seq__27665 = G__27938;
chunk__27666 = G__27939;
count__27667 = G__27940;
i__27668 = G__27941;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27665);
if(temp__5825__auto__){
var seq__27665__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27665__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27665__$1);
var G__27944 = cljs.core.chunk_rest(seq__27665__$1);
var G__27945 = c__5694__auto__;
var G__27946 = cljs.core.count(c__5694__auto__);
var G__27947 = (0);
seq__27665 = G__27944;
chunk__27666 = G__27945;
count__27667 = G__27946;
i__27668 = G__27947;
continue;
} else {
var fam = cljs.core.first(seq__27665__$1);
var fam_kw_27948 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__27743_27949 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27948)));
var chunk__27744_27950 = null;
var count__27745_27951 = (0);
var i__27746_27952 = (0);
while(true){
if((i__27746_27952 < count__27745_27951)){
var vec__27757_27953 = chunk__27744_27950.cljs$core$IIndexed$_nth$arity$2(null,i__27746_27952);
var idx_27954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757_27953,(0),null);
var rec_27955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757_27953,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27955,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27954 * (7919)))], null),((function (seq__27743_27949,chunk__27744_27950,count__27745_27951,i__27746_27952,seq__27665,chunk__27666,count__27667,i__27668,vec__27757_27953,idx_27954,rec_27955,fam_kw_27948,fam,seq__27665__$1,temp__5825__auto__){
return (function (p__27760){
var map__27761 = p__27760;
var map__27761__$1 = cljs.core.__destructure_map(map__27761);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27948,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27743_27949,chunk__27744_27950,count__27745_27951,i__27746_27952,seq__27665,chunk__27666,count__27667,i__27668,vec__27757_27953,idx_27954,rec_27955,fam_kw_27948,fam,seq__27665__$1,temp__5825__auto__))
);


var G__27965 = seq__27743_27949;
var G__27966 = chunk__27744_27950;
var G__27967 = count__27745_27951;
var G__27968 = (i__27746_27952 + (1));
seq__27743_27949 = G__27965;
chunk__27744_27950 = G__27966;
count__27745_27951 = G__27967;
i__27746_27952 = G__27968;
continue;
} else {
var temp__5825__auto___27969__$1 = cljs.core.seq(seq__27743_27949);
if(temp__5825__auto___27969__$1){
var seq__27743_27970__$1 = temp__5825__auto___27969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27743_27970__$1)){
var c__5694__auto___27973 = cljs.core.chunk_first(seq__27743_27970__$1);
var G__27974 = cljs.core.chunk_rest(seq__27743_27970__$1);
var G__27975 = c__5694__auto___27973;
var G__27976 = cljs.core.count(c__5694__auto___27973);
var G__27977 = (0);
seq__27743_27949 = G__27974;
chunk__27744_27950 = G__27975;
count__27745_27951 = G__27976;
i__27746_27952 = G__27977;
continue;
} else {
var vec__27762_27978 = cljs.core.first(seq__27743_27970__$1);
var idx_27979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27762_27978,(0),null);
var rec_27980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27762_27978,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27980,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27979 * (7919)))], null),((function (seq__27743_27949,chunk__27744_27950,count__27745_27951,i__27746_27952,seq__27665,chunk__27666,count__27667,i__27668,vec__27762_27978,idx_27979,rec_27980,seq__27743_27970__$1,temp__5825__auto___27969__$1,fam_kw_27948,fam,seq__27665__$1,temp__5825__auto__){
return (function (p__27765){
var map__27766 = p__27765;
var map__27766__$1 = cljs.core.__destructure_map(map__27766);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27948,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27743_27949,chunk__27744_27950,count__27745_27951,i__27746_27952,seq__27665,chunk__27666,count__27667,i__27668,vec__27762_27978,idx_27979,rec_27980,seq__27743_27970__$1,temp__5825__auto___27969__$1,fam_kw_27948,fam,seq__27665__$1,temp__5825__auto__))
);


var G__27986 = cljs.core.next(seq__27743_27970__$1);
var G__27987 = null;
var G__27988 = (0);
var G__27989 = (0);
seq__27743_27949 = G__27986;
chunk__27744_27950 = G__27987;
count__27745_27951 = G__27988;
i__27746_27952 = G__27989;
continue;
}
} else {
}
}
break;
}


var G__27994 = cljs.core.next(seq__27665__$1);
var G__27995 = null;
var G__27996 = (0);
var G__27997 = (0);
seq__27665 = G__27994;
chunk__27666 = G__27995;
count__27667 = G__27996;
i__27668 = G__27997;
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

var c__27559__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27560__auto__ = (function (){var switch__27536__auto__ = (function (state_27797){
var state_val_27798 = (state_27797[(1)]);
if((state_val_27798 === (1))){
var inst_27767 = cljs.core.async.timeout((50));
var state_27797__$1 = state_27797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27797__$1,(2),inst_27767);
} else {
if((state_val_27798 === (2))){
var inst_27769 = (state_27797[(2)]);
var state_27797__$1 = (function (){var statearr_27799 = state_27797;
(statearr_27799[(7)] = inst_27769);

return statearr_27799;
})();
var statearr_27800_28003 = state_27797__$1;
(statearr_27800_28003[(2)] = null);

(statearr_27800_28003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (3))){
var _ = (function (){var statearr_27801 = state_27797;
(statearr_27801[(4)] = cljs.core.cons((6),(state_27797[(4)])));

return statearr_27801;
})();
var inst_27778 = (function (){return (function (acc,fam){
app.simulator.log((""+"Running Stage 1 for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)+" accepted: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_27779 = cljs.core.PersistentHashMap.EMPTY;
var inst_27780 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_27778,inst_27779,families);
var inst_27781 = cljs.core.vals(inst_27780);
var inst_27782 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_27781);
var inst_27783 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_27782);
var inst_27784 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_27785 = [inst_27783,(0)];
var inst_27786 = cljs.core.PersistentHashMap.fromArrays(inst_27784,inst_27785);
var inst_27787 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_27786], 0));
var inst_27788 = cljs.core.PersistentHashMap.EMPTY;
var inst_27789 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_27788);
var inst_27790 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_27791 = Date.now();
var inst_27792 = app.simulator.submit_simulation_jobs_BANG_(config,inst_27780,families,inst_27789,inst_27790,inst_27783,inst_27791);
var ___$1 = (function (){var statearr_27802 = state_27797;
(statearr_27802[(4)] = cljs.core.rest((state_27797[(4)])));

return statearr_27802;
})();
var state_27797__$1 = (function (){var statearr_27803 = state_27797;
(statearr_27803[(8)] = inst_27787);

return statearr_27803;
})();
var statearr_27804_28009 = state_27797__$1;
(statearr_27804_28009[(2)] = inst_27792);

(statearr_27804_28009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (4))){
var inst_27795 = (state_27797[(2)]);
var state_27797__$1 = state_27797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27797__$1,inst_27795);
} else {
if((state_val_27798 === (5))){
var inst_27770 = (state_27797[(2)]);
var inst_27771 = inst_27770.message;
var inst_27772 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_27771], 0));
var state_27797__$1 = state_27797;
var statearr_27806_28010 = state_27797__$1;
(statearr_27806_28010[(2)] = inst_27772);

(statearr_27806_28010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (6))){
var _ = (function (){var statearr_27807 = state_27797;
(statearr_27807[(4)] = cljs.core.rest((state_27797[(4)])));

return statearr_27807;
})();
var state_27797__$1 = state_27797;
var ex27805 = (state_27797__$1[(2)]);
var statearr_27808_28011 = state_27797__$1;
(statearr_27808_28011[(5)] = ex27805);


if((ex27805 instanceof Error)){
var statearr_27809_28012 = state_27797__$1;
(statearr_27809_28012[(1)] = (5));

(statearr_27809_28012[(5)] = null);

} else {
throw ex27805;

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
var app$simulator$start_simulation_BANG__$_state_machine__27537__auto__ = null;
var app$simulator$start_simulation_BANG__$_state_machine__27537__auto____0 = (function (){
var statearr_27810 = [null,null,null,null,null,null,null,null,null];
(statearr_27810[(0)] = app$simulator$start_simulation_BANG__$_state_machine__27537__auto__);

(statearr_27810[(1)] = (1));

return statearr_27810;
});
var app$simulator$start_simulation_BANG__$_state_machine__27537__auto____1 = (function (state_27797){
while(true){
var ret_value__27538__auto__ = (function (){try{while(true){
var result__27539__auto__ = switch__27536__auto__(state_27797);
if(cljs.core.keyword_identical_QMARK_(result__27539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27539__auto__;
}
break;
}
}catch (e27811){var ex__27540__auto__ = e27811;
var statearr_27812_28013 = state_27797;
(statearr_27812_28013[(2)] = ex__27540__auto__);


if(cljs.core.seq((state_27797[(4)]))){
var statearr_27813_28014 = state_27797;
(statearr_27813_28014[(1)] = cljs.core.first((state_27797[(4)])));

} else {
throw ex__27540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28015 = state_27797;
state_27797 = G__28015;
continue;
} else {
return ret_value__27538__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__27537__auto__ = function(state_27797){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__27537__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__27537__auto____1.call(this,state_27797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__27537__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__27537__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__27537__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__27537__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__27537__auto__;
})()
})();
var state__27561__auto__ = (function (){var statearr_27814 = f__27560__auto__();
(statearr_27814[(6)] = c__27559__auto__);

return statearr_27814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27561__auto__);
}));

return c__27559__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__27815 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27815) : cljs.numpy.array.call(null,G__27815));
})();
var bat_shape_arr = (function (){var G__27816 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27816) : cljs.numpy.array.call(null,G__27816));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__27817 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27817) : cljs.numpy.array.call(null,G__27817));
})();
var gps_shape_arr = (function (){var G__27818 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27818) : cljs.numpy.array.call(null,G__27818));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__27819 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27819) : cljs.numpy.array.call(null,G__27819));
})();
var unc_shape_arr = (function (){var G__27820 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27820) : cljs.numpy.array.call(null,G__27820));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__27821 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27821) : cljs.numpy.array.call(null,G__27821));
})();
var unc_shape_arr = (function (){var G__27822 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27822) : cljs.numpy.array.call(null,G__27822));
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

return app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"ignore-prefilter?","ignore-prefilter?",-2127173175),true),new cljs.core.Keyword(null,"n-sims","n-sims",979948804),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config);
}
})(),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__27823){
var map__27824 = p__27823;
var map__27824__$1 = cljs.core.__destructure_map(map__27824);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27824__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27824__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27824__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__28016 = (curr + step);
var G__28017 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__28016;
acc = G__28017;
continue;
} else {
return acc;
}
break;
}
});
app.simulator.start_stress_test_BANG_ = (function app$simulator$start_stress_test_BANG_(form_values){
var main_config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var stress_config = form_values;
var config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([main_config,stress_config,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"obs-ev-ia","obs-ev-ia",1576216630),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(main_config),new cljs.core.Keyword(null,"obs-inc-upd","obs-inc-upd",-964876304),(new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(main_config) - new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(main_config)),new cljs.core.Keyword(null,"obs-inc-pr3","obs-inc-pr3",10060315),(new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801).cljs$core$IFn$_invoke$arity$1(main_config) - new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(main_config))], null)], 0));
var mos_grid_cfg = new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778).cljs$core$IFn$_invoke$arity$1(config);
var k_grid_cfg = new cljs.core.Keyword(null,"k-grid","k-grid",-887124116).cljs$core$IFn$_invoke$arity$1(config);
var mos_vals = app.simulator.arange(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mos_grid_cfg,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mos_grid_cfg,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(mos_grid_cfg,(2)));
var k_vals = app.simulator.arange(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(k_grid_cfg,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(k_grid_cfg,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(k_grid_cfg,(2)));
var combos = (function (){var iter__5649__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__27825(s__27826){
return (new cljs.core.LazySeq(null,(function (){
var s__27826__$1 = s__27826;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27826__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__27826__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__27825_$_iter__27827(s__27828){
return (new cljs.core.LazySeq(null,((function (s__27826__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__27828__$1 = s__27828;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27828__$1);
if(temp__5825__auto____$1){
var s__27828__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27828__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27828__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27830 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27829 = (0);
while(true){
if((i__27829 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__27829);
cljs.core.chunk_append(b__27830,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__28018 = (i__27829 + (1));
i__27829 = G__28018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27830),app$simulator$start_stress_test_BANG__$_iter__27825_$_iter__27827(cljs.core.chunk_rest(s__27828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27830),null);
}
} else {
var k = cljs.core.first(s__27828__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__27825_$_iter__27827(cljs.core.rest(s__27828__$2)));
}
} else {
return null;
}
break;
}
});})(s__27826__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__27826__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(k_vals));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$simulator$start_stress_test_BANG__$_iter__27825(cljs.core.rest(s__27826__$1)));
} else {
var G__28019 = cljs.core.rest(s__27826__$1);
s__27826__$1 = G__28019;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(mos_vals);
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
var seq__27831 = cljs.core.seq(combos);
var chunk__27832 = null;
var count__27833 = (0);
var i__27834 = (0);
while(true){
if((i__27834 < count__27833)){
var combo = chunk__27832.cljs$core$IIndexed$_nth$arity$2(null,i__27834);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27831,chunk__27832,count__27833,i__27834,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27848){
var map__27850 = p__27848;
var map__27850__$1 = cljs.core.__destructure_map(map__27850);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stress-test-progress","stress-test-progress",1552934606),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total_combos)){
app.simulator.log((""+"Stress test simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stress-test-results","stress-test-results",-127451651),cljs.core.deref(results)], 0));
} else {
return null;
}
});})(seq__27831,chunk__27832,count__27833,i__27834,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__28020 = seq__27831;
var G__28021 = chunk__27832;
var G__28022 = count__27833;
var G__28023 = (i__27834 + (1));
seq__27831 = G__28020;
chunk__27832 = G__28021;
count__27833 = G__28022;
i__27834 = G__28023;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27831);
if(temp__5825__auto__){
var seq__27831__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27831__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27831__$1);
var G__28024 = cljs.core.chunk_rest(seq__27831__$1);
var G__28025 = c__5694__auto__;
var G__28026 = cljs.core.count(c__5694__auto__);
var G__28027 = (0);
seq__27831 = G__28024;
chunk__27832 = G__28025;
count__27833 = G__28026;
i__27834 = G__28027;
continue;
} else {
var combo = cljs.core.first(seq__27831__$1);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27831,chunk__27832,count__27833,i__27834,combo,seq__27831__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27862){
var map__27864 = p__27862;
var map__27864__$1 = cljs.core.__destructure_map(map__27864);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stress-test-progress","stress-test-progress",1552934606),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,result);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total_combos)){
app.simulator.log((""+"Stress test simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stress-test-results","stress-test-results",-127451651),cljs.core.deref(results)], 0));
} else {
return null;
}
});})(seq__27831,chunk__27832,count__27833,i__27834,combo,seq__27831__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__28028 = cljs.core.next(seq__27831__$1);
var G__28029 = null;
var G__28030 = (0);
var G__28031 = (0);
seq__27831 = G__28028;
chunk__27832 = G__28029;
count__27833 = G__28030;
i__27834 = G__28031;
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
