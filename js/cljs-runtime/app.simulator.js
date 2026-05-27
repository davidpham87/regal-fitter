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
}catch (e27633){if((e27633 instanceof Error)){
var e = e27633;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e27633;

}
}});
app.simulator.cached_submit_job_BANG_ = (function app$simulator$cached_submit_job_BANG_(data,callback){
var c__27559__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27560__auto__ = (function (){var switch__27536__auto__ = (function (state_27652){
var state_val_27653 = (state_27652[(1)]);
if((state_val_27653 === (1))){
var inst_27637 = (state_27652[(7)]);
var inst_27637__$1 = app.db.hash_key(data);
var inst_27638 = app.db.get_cache(inst_27637__$1);
var state_27652__$1 = (function (){var statearr_27654 = state_27652;
(statearr_27654[(7)] = inst_27637__$1);

return statearr_27654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27652__$1,(2),inst_27638);
} else {
if((state_val_27653 === (2))){
var inst_27640 = (state_27652[(8)]);
var inst_27640__$1 = (state_27652[(2)]);
var state_27652__$1 = (function (){var statearr_27655 = state_27652;
(statearr_27655[(8)] = inst_27640__$1);

return statearr_27655;
})();
if(cljs.core.truth_(inst_27640__$1)){
var statearr_27656_27843 = state_27652__$1;
(statearr_27656_27843[(1)] = (3));

} else {
var statearr_27657_27844 = state_27652__$1;
(statearr_27657_27844[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (3))){
var inst_27640 = (state_27652[(8)]);
var inst_27642 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_27643 = [true,inst_27640];
var inst_27644 = cljs.core.PersistentHashMap.fromArrays(inst_27642,inst_27643);
var inst_27645 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_27644) : callback.call(null,inst_27644));
var state_27652__$1 = state_27652;
var statearr_27659_27845 = state_27652__$1;
(statearr_27659_27845[(2)] = inst_27645);

(statearr_27659_27845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (4))){
var inst_27637 = (state_27652[(7)]);
var inst_27640 = (state_27652[(8)]);
var inst_27647 = (function (){var k = inst_27637;
var cached = inst_27640;
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
var inst_27648 = app.worker_pool.submit_job_BANG_(data,inst_27647);
var state_27652__$1 = state_27652;
var statearr_27660_27846 = state_27652__$1;
(statearr_27660_27846[(2)] = inst_27648);

(statearr_27660_27846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (5))){
var inst_27650 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27652__$1,inst_27650);
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
var statearr_27661 = [null,null,null,null,null,null,null,null,null];
(statearr_27661[(0)] = app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__);

(statearr_27661[(1)] = (1));

return statearr_27661;
});
var app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____1 = (function (state_27652){
while(true){
var ret_value__27538__auto__ = (function (){try{while(true){
var result__27539__auto__ = switch__27536__auto__(state_27652);
if(cljs.core.keyword_identical_QMARK_(result__27539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27539__auto__;
}
break;
}
}catch (e27662){var ex__27540__auto__ = e27662;
var statearr_27663_27847 = state_27652;
(statearr_27663_27847[(2)] = ex__27540__auto__);


if(cljs.core.seq((state_27652[(4)]))){
var statearr_27664_27848 = state_27652;
(statearr_27664_27848[(1)] = cljs.core.first((state_27652[(4)])));

} else {
throw ex__27540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27849 = state_27652;
state_27652 = G__27849;
continue;
} else {
return ret_value__27538__auto__;
}
break;
}
});
app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__ = function(state_27652){
switch(arguments.length){
case 0:
return app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____0.call(this);
case 1:
return app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____1.call(this,state_27652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____0;
app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto____1;
return app$simulator$cached_submit_job_BANG__$_state_machine__27537__auto__;
})()
})();
var state__27561__auto__ = (function (){var statearr_27665 = f__27560__auto__();
(statearr_27665[(6)] = c__27559__auto__);

return statearr_27665;
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
var seq__27666 = cljs.core.seq(families);
var chunk__27667 = null;
var count__27668 = (0);
var i__27669 = (0);
while(true){
if((i__27669 < count__27668)){
var fam = chunk__27667.cljs$core$IIndexed$_nth$arity$2(null,i__27669);
var fam_kw_27850 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__27719_27851 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27850)));
var chunk__27720_27852 = null;
var count__27721_27853 = (0);
var i__27722_27854 = (0);
while(true){
if((i__27722_27854 < count__27721_27853)){
var vec__27733_27855 = chunk__27720_27852.cljs$core$IIndexed$_nth$arity$2(null,i__27722_27854);
var idx_27856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733_27855,(0),null);
var rec_27857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733_27855,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27857,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27856 * (7919)))], null),((function (seq__27719_27851,chunk__27720_27852,count__27721_27853,i__27722_27854,seq__27666,chunk__27667,count__27668,i__27669,vec__27733_27855,idx_27856,rec_27857,fam_kw_27850,fam){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27850,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27719_27851,chunk__27720_27852,count__27721_27853,i__27722_27854,seq__27666,chunk__27667,count__27668,i__27669,vec__27733_27855,idx_27856,rec_27857,fam_kw_27850,fam))
);


var G__27858 = seq__27719_27851;
var G__27859 = chunk__27720_27852;
var G__27860 = count__27721_27853;
var G__27861 = (i__27722_27854 + (1));
seq__27719_27851 = G__27858;
chunk__27720_27852 = G__27859;
count__27721_27853 = G__27860;
i__27722_27854 = G__27861;
continue;
} else {
var temp__5825__auto___27862 = cljs.core.seq(seq__27719_27851);
if(temp__5825__auto___27862){
var seq__27719_27863__$1 = temp__5825__auto___27862;
if(cljs.core.chunked_seq_QMARK_(seq__27719_27863__$1)){
var c__5694__auto___27864 = cljs.core.chunk_first(seq__27719_27863__$1);
var G__27865 = cljs.core.chunk_rest(seq__27719_27863__$1);
var G__27866 = c__5694__auto___27864;
var G__27867 = cljs.core.count(c__5694__auto___27864);
var G__27868 = (0);
seq__27719_27851 = G__27865;
chunk__27720_27852 = G__27866;
count__27721_27853 = G__27867;
i__27722_27854 = G__27868;
continue;
} else {
var vec__27738_27869 = cljs.core.first(seq__27719_27863__$1);
var idx_27870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738_27869,(0),null);
var rec_27871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27738_27869,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27871,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27870 * (7919)))], null),((function (seq__27719_27851,chunk__27720_27852,count__27721_27853,i__27722_27854,seq__27666,chunk__27667,count__27668,i__27669,vec__27738_27869,idx_27870,rec_27871,seq__27719_27863__$1,temp__5825__auto___27862,fam_kw_27850,fam){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27850,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27719_27851,chunk__27720_27852,count__27721_27853,i__27722_27854,seq__27666,chunk__27667,count__27668,i__27669,vec__27738_27869,idx_27870,rec_27871,seq__27719_27863__$1,temp__5825__auto___27862,fam_kw_27850,fam))
);


var G__27872 = cljs.core.next(seq__27719_27863__$1);
var G__27873 = null;
var G__27874 = (0);
var G__27875 = (0);
seq__27719_27851 = G__27872;
chunk__27720_27852 = G__27873;
count__27721_27853 = G__27874;
i__27722_27854 = G__27875;
continue;
}
} else {
}
}
break;
}


var G__27876 = seq__27666;
var G__27877 = chunk__27667;
var G__27878 = count__27668;
var G__27879 = (i__27669 + (1));
seq__27666 = G__27876;
chunk__27667 = G__27877;
count__27668 = G__27878;
i__27669 = G__27879;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27666);
if(temp__5825__auto__){
var seq__27666__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27666__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27666__$1);
var G__27880 = cljs.core.chunk_rest(seq__27666__$1);
var G__27881 = c__5694__auto__;
var G__27882 = cljs.core.count(c__5694__auto__);
var G__27883 = (0);
seq__27666 = G__27880;
chunk__27667 = G__27881;
count__27668 = G__27882;
i__27669 = G__27883;
continue;
} else {
var fam = cljs.core.first(seq__27666__$1);
var fam_kw_27884 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__27743_27885 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27884)));
var chunk__27744_27886 = null;
var count__27745_27887 = (0);
var i__27746_27888 = (0);
while(true){
if((i__27746_27888 < count__27745_27887)){
var vec__27757_27889 = chunk__27744_27886.cljs$core$IIndexed$_nth$arity$2(null,i__27746_27888);
var idx_27890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757_27889,(0),null);
var rec_27891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757_27889,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27891,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27890 * (7919)))], null),((function (seq__27743_27885,chunk__27744_27886,count__27745_27887,i__27746_27888,seq__27666,chunk__27667,count__27668,i__27669,vec__27757_27889,idx_27890,rec_27891,fam_kw_27884,fam,seq__27666__$1,temp__5825__auto__){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27884,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27743_27885,chunk__27744_27886,count__27745_27887,i__27746_27888,seq__27666,chunk__27667,count__27668,i__27669,vec__27757_27889,idx_27890,rec_27891,fam_kw_27884,fam,seq__27666__$1,temp__5825__auto__))
);


var G__27892 = seq__27743_27885;
var G__27893 = chunk__27744_27886;
var G__27894 = count__27745_27887;
var G__27895 = (i__27746_27888 + (1));
seq__27743_27885 = G__27892;
chunk__27744_27886 = G__27893;
count__27745_27887 = G__27894;
i__27746_27888 = G__27895;
continue;
} else {
var temp__5825__auto___27896__$1 = cljs.core.seq(seq__27743_27885);
if(temp__5825__auto___27896__$1){
var seq__27743_27897__$1 = temp__5825__auto___27896__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27743_27897__$1)){
var c__5694__auto___27898 = cljs.core.chunk_first(seq__27743_27897__$1);
var G__27899 = cljs.core.chunk_rest(seq__27743_27897__$1);
var G__27900 = c__5694__auto___27898;
var G__27901 = cljs.core.count(c__5694__auto___27898);
var G__27902 = (0);
seq__27743_27885 = G__27899;
chunk__27744_27886 = G__27900;
count__27745_27887 = G__27901;
i__27746_27888 = G__27902;
continue;
} else {
var vec__27762_27903 = cljs.core.first(seq__27743_27897__$1);
var idx_27904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27762_27903,(0),null);
var rec_27905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27762_27903,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27905,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27904 * (7919)))], null),((function (seq__27743_27885,chunk__27744_27886,count__27745_27887,i__27746_27888,seq__27666,chunk__27667,count__27668,i__27669,vec__27762_27903,idx_27904,rec_27905,seq__27743_27897__$1,temp__5825__auto___27896__$1,fam_kw_27884,fam,seq__27666__$1,temp__5825__auto__){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27884,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27743_27885,chunk__27744_27886,count__27745_27887,i__27746_27888,seq__27666,chunk__27667,count__27668,i__27669,vec__27762_27903,idx_27904,rec_27905,seq__27743_27897__$1,temp__5825__auto___27896__$1,fam_kw_27884,fam,seq__27666__$1,temp__5825__auto__))
);


var G__27906 = cljs.core.next(seq__27743_27897__$1);
var G__27907 = null;
var G__27908 = (0);
var G__27909 = (0);
seq__27743_27885 = G__27906;
chunk__27744_27886 = G__27907;
count__27745_27887 = G__27908;
i__27746_27888 = G__27909;
continue;
}
} else {
}
}
break;
}


var G__27910 = cljs.core.next(seq__27666__$1);
var G__27911 = null;
var G__27912 = (0);
var G__27913 = (0);
seq__27666 = G__27910;
chunk__27667 = G__27911;
count__27668 = G__27912;
i__27669 = G__27913;
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
var statearr_27800_27920 = state_27797__$1;
(statearr_27800_27920[(2)] = null);

(statearr_27800_27920[(1)] = (3));


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
var statearr_27804_27921 = state_27797__$1;
(statearr_27804_27921[(2)] = inst_27792);

(statearr_27804_27921[(1)] = (4));


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
var statearr_27806_27922 = state_27797__$1;
(statearr_27806_27922[(2)] = inst_27772);

(statearr_27806_27922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27798 === (6))){
var _ = (function (){var statearr_27807 = state_27797;
(statearr_27807[(4)] = cljs.core.rest((state_27797[(4)])));

return statearr_27807;
})();
var state_27797__$1 = state_27797;
var ex27805 = (state_27797__$1[(2)]);
var statearr_27808_27924 = state_27797__$1;
(statearr_27808_27924[(5)] = ex27805);


if((ex27805 instanceof Error)){
var statearr_27809_27927 = state_27797__$1;
(statearr_27809_27927[(1)] = (5));

(statearr_27809_27927[(5)] = null);

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
var statearr_27812_27929 = state_27797;
(statearr_27812_27929[(2)] = ex__27540__auto__);


if(cljs.core.seq((state_27797[(4)]))){
var statearr_27813_27930 = state_27797;
(statearr_27813_27930[(1)] = cljs.core.first((state_27797[(4)])));

} else {
throw ex__27540__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27931 = state_27797;
state_27797 = G__27931;
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
var G__27940 = (curr + step);
var G__27941 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__27940;
acc = G__27941;
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

var G__27952 = (i__27829 + (1));
i__27829 = G__27952;
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
var G__27954 = cljs.core.rest(s__27826__$1);
s__27826__$1 = G__27954;
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
return (function (p__27839){
var map__27840 = p__27839;
var map__27840__$1 = cljs.core.__destructure_map(map__27840);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27840__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27840__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27840__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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


var G__27955 = seq__27831;
var G__27956 = chunk__27832;
var G__27957 = count__27833;
var G__27958 = (i__27834 + (1));
seq__27831 = G__27955;
chunk__27832 = G__27956;
count__27833 = G__27957;
i__27834 = G__27958;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27831);
if(temp__5825__auto__){
var seq__27831__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27831__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27831__$1);
var G__27959 = cljs.core.chunk_rest(seq__27831__$1);
var G__27960 = c__5694__auto__;
var G__27961 = cljs.core.count(c__5694__auto__);
var G__27962 = (0);
seq__27831 = G__27959;
chunk__27832 = G__27960;
count__27833 = G__27961;
i__27834 = G__27962;
continue;
} else {
var combo = cljs.core.first(seq__27831__$1);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27831,chunk__27832,count__27833,i__27834,combo,seq__27831__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27841){
var map__27842 = p__27841;
var map__27842__$1 = cljs.core.__destructure_map(map__27842);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27842__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27842__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27842__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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


var G__27967 = cljs.core.next(seq__27831__$1);
var G__27968 = null;
var G__27969 = (0);
var G__27970 = (0);
seq__27831 = G__27967;
chunk__27832 = G__27968;
count__27833 = G__27969;
i__27834 = G__27970;
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
