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
}catch (e26715){if((e26715 instanceof Error)){
var e = e26715;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e26715;

}
}});
app.simulator.cached_submit_job_BANG_ = (function app$simulator$cached_submit_job_BANG_(data,callback){
var c__26508__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26732){
var state_val_26733 = (state_26732[(1)]);
if((state_val_26733 === (1))){
var inst_26717 = (state_26732[(7)]);
var inst_26717__$1 = app.db.hash_key(data);
var inst_26718 = app.db.get_cache(inst_26717__$1);
var state_26732__$1 = (function (){var statearr_26734 = state_26732;
(statearr_26734[(7)] = inst_26717__$1);

return statearr_26734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26732__$1,(2),inst_26718);
} else {
if((state_val_26733 === (2))){
var inst_26720 = (state_26732[(8)]);
var inst_26720__$1 = (state_26732[(2)]);
var state_26732__$1 = (function (){var statearr_26735 = state_26732;
(statearr_26735[(8)] = inst_26720__$1);

return statearr_26735;
})();
if(cljs.core.truth_(inst_26720__$1)){
var statearr_26736_27033 = state_26732__$1;
(statearr_26736_27033[(1)] = (3));

} else {
var statearr_26737_27034 = state_26732__$1;
(statearr_26737_27034[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (3))){
var inst_26720 = (state_26732[(8)]);
var inst_26722 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_26723 = [true,inst_26720];
var inst_26724 = cljs.core.PersistentHashMap.fromArrays(inst_26722,inst_26723);
var inst_26725 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26724) : callback.call(null,inst_26724));
var state_26732__$1 = state_26732;
var statearr_26738_27035 = state_26732__$1;
(statearr_26738_27035[(2)] = inst_26725);

(statearr_26738_27035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (4))){
var inst_26717 = (state_26732[(7)]);
var inst_26720 = (state_26732[(8)]);
var inst_26727 = (function (){var k = inst_26717;
var cached = inst_26720;
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
var inst_26728 = app.worker_pool.submit_job_BANG_(data,inst_26727);
var state_26732__$1 = state_26732;
var statearr_26739_27036 = state_26732__$1;
(statearr_26739_27036[(2)] = inst_26728);

(statearr_26739_27036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26733 === (5))){
var inst_26730 = (state_26732[(2)]);
var state_26732__$1 = state_26732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26732__$1,inst_26730);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto__ = null;
var app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto____0 = (function (){
var statearr_26740 = [null,null,null,null,null,null,null,null,null];
(statearr_26740[(0)] = app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto__);

(statearr_26740[(1)] = (1));

return statearr_26740;
});
var app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto____1 = (function (state_26732){
while(true){
var ret_value__26487__auto__ = (function (){try{while(true){
var result__26488__auto__ = switch__26485__auto__(state_26732);
if(cljs.core.keyword_identical_QMARK_(result__26488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26488__auto__;
}
break;
}
}catch (e26741){var ex__26489__auto__ = e26741;
var statearr_26742_27037 = state_26732;
(statearr_26742_27037[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26732[(4)]))){
var statearr_26743_27038 = state_26732;
(statearr_26743_27038[(1)] = cljs.core.first((state_26732[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27039 = state_26732;
state_26732 = G__27039;
continue;
} else {
return ret_value__26487__auto__;
}
break;
}
});
app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto__ = function(state_26732){
switch(arguments.length){
case 0:
return app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto____0.call(this);
case 1:
return app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto____1.call(this,state_26732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto____0;
app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto____1;
return app$simulator$cached_submit_job_BANG__$_state_machine__26486__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26744 = f__26509__auto__();
(statearr_26744[(6)] = c__26508__auto__);

return statearr_26744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));

return c__26508__auto__;
});
app.simulator.submit_simulation_jobs_BANG_ = (function app$simulator$submit_simulation_jobs_BANG_(config,all_accepted,families,results,completed,total,start_time){
app.worker_pool.clear_queue_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
var seq__26745 = cljs.core.seq(families);
var chunk__26746 = null;
var count__26747 = (0);
var i__26748 = (0);
while(true){
if((i__26748 < count__26747)){
var fam = chunk__26746.cljs$core$IIndexed$_nth$arity$2(null,i__26748);
var fam_kw_27040 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26815_27041 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27040)));
var chunk__26816_27042 = null;
var count__26817_27043 = (0);
var i__26818_27044 = (0);
while(true){
if((i__26818_27044 < count__26817_27043)){
var vec__26829_27045 = chunk__26816_27042.cljs$core$IIndexed$_nth$arity$2(null,i__26818_27044);
var idx_27046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829_27045,(0),null);
var rec_27047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829_27045,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27047,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27046 * (7919)))], null),((function (seq__26815_27041,chunk__26816_27042,count__26817_27043,i__26818_27044,seq__26745,chunk__26746,count__26747,i__26748,vec__26829_27045,idx_27046,rec_27047,fam_kw_27040,fam){
return (function (p__26832){
var map__26833 = p__26832;
var map__26833__$1 = cljs.core.__destructure_map(map__26833);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26833__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26833__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26833__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27040,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26815_27041,chunk__26816_27042,count__26817_27043,i__26818_27044,seq__26745,chunk__26746,count__26747,i__26748,vec__26829_27045,idx_27046,rec_27047,fam_kw_27040,fam))
);


var G__27048 = seq__26815_27041;
var G__27049 = chunk__26816_27042;
var G__27050 = count__26817_27043;
var G__27051 = (i__26818_27044 + (1));
seq__26815_27041 = G__27048;
chunk__26816_27042 = G__27049;
count__26817_27043 = G__27050;
i__26818_27044 = G__27051;
continue;
} else {
var temp__5825__auto___27052 = cljs.core.seq(seq__26815_27041);
if(temp__5825__auto___27052){
var seq__26815_27053__$1 = temp__5825__auto___27052;
if(cljs.core.chunked_seq_QMARK_(seq__26815_27053__$1)){
var c__5694__auto___27054 = cljs.core.chunk_first(seq__26815_27053__$1);
var G__27055 = cljs.core.chunk_rest(seq__26815_27053__$1);
var G__27056 = c__5694__auto___27054;
var G__27057 = cljs.core.count(c__5694__auto___27054);
var G__27058 = (0);
seq__26815_27041 = G__27055;
chunk__26816_27042 = G__27056;
count__26817_27043 = G__27057;
i__26818_27044 = G__27058;
continue;
} else {
var vec__26834_27059 = cljs.core.first(seq__26815_27053__$1);
var idx_27060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26834_27059,(0),null);
var rec_27061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26834_27059,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27061,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27060 * (7919)))], null),((function (seq__26815_27041,chunk__26816_27042,count__26817_27043,i__26818_27044,seq__26745,chunk__26746,count__26747,i__26748,vec__26834_27059,idx_27060,rec_27061,seq__26815_27053__$1,temp__5825__auto___27052,fam_kw_27040,fam){
return (function (p__26837){
var map__26838 = p__26837;
var map__26838__$1 = cljs.core.__destructure_map(map__26838);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26838__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26838__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26838__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27040,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26815_27041,chunk__26816_27042,count__26817_27043,i__26818_27044,seq__26745,chunk__26746,count__26747,i__26748,vec__26834_27059,idx_27060,rec_27061,seq__26815_27053__$1,temp__5825__auto___27052,fam_kw_27040,fam))
);


var G__27062 = cljs.core.next(seq__26815_27053__$1);
var G__27063 = null;
var G__27064 = (0);
var G__27065 = (0);
seq__26815_27041 = G__27062;
chunk__26816_27042 = G__27063;
count__26817_27043 = G__27064;
i__26818_27044 = G__27065;
continue;
}
} else {
}
}
break;
}


var G__27066 = seq__26745;
var G__27067 = chunk__26746;
var G__27068 = count__26747;
var G__27069 = (i__26748 + (1));
seq__26745 = G__27066;
chunk__26746 = G__27067;
count__26747 = G__27068;
i__26748 = G__27069;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26745);
if(temp__5825__auto__){
var seq__26745__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26745__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26745__$1);
var G__27070 = cljs.core.chunk_rest(seq__26745__$1);
var G__27071 = c__5694__auto__;
var G__27072 = cljs.core.count(c__5694__auto__);
var G__27073 = (0);
seq__26745 = G__27070;
chunk__26746 = G__27071;
count__26747 = G__27072;
i__26748 = G__27073;
continue;
} else {
var fam = cljs.core.first(seq__26745__$1);
var fam_kw_27074 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26839_27075 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27074)));
var chunk__26840_27076 = null;
var count__26841_27077 = (0);
var i__26842_27078 = (0);
while(true){
if((i__26842_27078 < count__26841_27077)){
var vec__26853_27079 = chunk__26840_27076.cljs$core$IIndexed$_nth$arity$2(null,i__26842_27078);
var idx_27080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853_27079,(0),null);
var rec_27081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853_27079,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27081,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27080 * (7919)))], null),((function (seq__26839_27075,chunk__26840_27076,count__26841_27077,i__26842_27078,seq__26745,chunk__26746,count__26747,i__26748,vec__26853_27079,idx_27080,rec_27081,fam_kw_27074,fam,seq__26745__$1,temp__5825__auto__){
return (function (p__26856){
var map__26857 = p__26856;
var map__26857__$1 = cljs.core.__destructure_map(map__26857);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26857__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26857__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26857__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27074,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26839_27075,chunk__26840_27076,count__26841_27077,i__26842_27078,seq__26745,chunk__26746,count__26747,i__26748,vec__26853_27079,idx_27080,rec_27081,fam_kw_27074,fam,seq__26745__$1,temp__5825__auto__))
);


var G__27082 = seq__26839_27075;
var G__27083 = chunk__26840_27076;
var G__27084 = count__26841_27077;
var G__27085 = (i__26842_27078 + (1));
seq__26839_27075 = G__27082;
chunk__26840_27076 = G__27083;
count__26841_27077 = G__27084;
i__26842_27078 = G__27085;
continue;
} else {
var temp__5825__auto___27086__$1 = cljs.core.seq(seq__26839_27075);
if(temp__5825__auto___27086__$1){
var seq__26839_27087__$1 = temp__5825__auto___27086__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26839_27087__$1)){
var c__5694__auto___27088 = cljs.core.chunk_first(seq__26839_27087__$1);
var G__27089 = cljs.core.chunk_rest(seq__26839_27087__$1);
var G__27090 = c__5694__auto___27088;
var G__27091 = cljs.core.count(c__5694__auto___27088);
var G__27092 = (0);
seq__26839_27075 = G__27089;
chunk__26840_27076 = G__27090;
count__26841_27077 = G__27091;
i__26842_27078 = G__27092;
continue;
} else {
var vec__26858_27093 = cljs.core.first(seq__26839_27087__$1);
var idx_27094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_27093,(0),null);
var rec_27095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_27093,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27095,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27094 * (7919)))], null),((function (seq__26839_27075,chunk__26840_27076,count__26841_27077,i__26842_27078,seq__26745,chunk__26746,count__26747,i__26748,vec__26858_27093,idx_27094,rec_27095,seq__26839_27087__$1,temp__5825__auto___27086__$1,fam_kw_27074,fam,seq__26745__$1,temp__5825__auto__){
return (function (p__26861){
var map__26862 = p__26861;
var map__26862__$1 = cljs.core.__destructure_map(map__26862);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26862__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27074,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26839_27075,chunk__26840_27076,count__26841_27077,i__26842_27078,seq__26745,chunk__26746,count__26747,i__26748,vec__26858_27093,idx_27094,rec_27095,seq__26839_27087__$1,temp__5825__auto___27086__$1,fam_kw_27074,fam,seq__26745__$1,temp__5825__auto__))
);


var G__27096 = cljs.core.next(seq__26839_27087__$1);
var G__27097 = null;
var G__27098 = (0);
var G__27099 = (0);
seq__26839_27075 = G__27096;
chunk__26840_27076 = G__27097;
count__26841_27077 = G__27098;
i__26842_27078 = G__27099;
continue;
}
} else {
}
}
break;
}


var G__27100 = cljs.core.next(seq__26745__$1);
var G__27101 = null;
var G__27102 = (0);
var G__27103 = (0);
seq__26745 = G__27100;
chunk__26746 = G__27101;
count__26747 = G__27102;
i__26748 = G__27103;
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

var c__26508__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26485__auto__ = (function (state_26915){
var state_val_26916 = (state_26915[(1)]);
if((state_val_26916 === (1))){
var inst_26869 = cljs.core.async.timeout((50));
var state_26915__$1 = state_26915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26915__$1,(2),inst_26869);
} else {
if((state_val_26916 === (2))){
var inst_26871 = (state_26915[(2)]);
var state_26915__$1 = (function (){var statearr_26929 = state_26915;
(statearr_26929[(7)] = inst_26871);

return statearr_26929;
})();
var statearr_26930_27104 = state_26915__$1;
(statearr_26930_27104[(2)] = null);

(statearr_26930_27104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (3))){
var _ = (function (){var statearr_26935 = state_26915;
(statearr_26935[(4)] = cljs.core.cons((6),(state_26915[(4)])));

return statearr_26935;
})();
var inst_26891 = (function (){return (function (acc,fam){
app.simulator.log((""+"Running Stage 1 for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)+" accepted: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_26892 = cljs.core.PersistentHashMap.EMPTY;
var inst_26893 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_26891,inst_26892,families);
var inst_26894 = cljs.core.vals(inst_26893);
var inst_26895 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_26894);
var inst_26896 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_26895);
var inst_26897 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_26898 = [inst_26896,(0)];
var inst_26899 = cljs.core.PersistentHashMap.fromArrays(inst_26897,inst_26898);
var inst_26900 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_26899], 0));
var inst_26902 = cljs.core.PersistentHashMap.EMPTY;
var inst_26903 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_26902);
var inst_26904 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_26905 = Date.now();
var inst_26906 = app.simulator.submit_simulation_jobs_BANG_(config,inst_26893,families,inst_26903,inst_26904,inst_26896,inst_26905);
var ___$1 = (function (){var statearr_26950 = state_26915;
(statearr_26950[(4)] = cljs.core.rest((state_26915[(4)])));

return statearr_26950;
})();
var state_26915__$1 = (function (){var statearr_26951 = state_26915;
(statearr_26951[(8)] = inst_26900);

return statearr_26951;
})();
var statearr_26956_27105 = state_26915__$1;
(statearr_26956_27105[(2)] = inst_26906);

(statearr_26956_27105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (4))){
var inst_26909 = (state_26915[(2)]);
var state_26915__$1 = state_26915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26915__$1,inst_26909);
} else {
if((state_val_26916 === (5))){
var inst_26873 = (state_26915[(2)]);
var inst_26877 = inst_26873.message;
var inst_26878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_26877], 0));
var state_26915__$1 = state_26915;
var statearr_26964_27106 = state_26915__$1;
(statearr_26964_27106[(2)] = inst_26878);

(statearr_26964_27106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26916 === (6))){
var _ = (function (){var statearr_26965 = state_26915;
(statearr_26965[(4)] = cljs.core.rest((state_26915[(4)])));

return statearr_26965;
})();
var state_26915__$1 = state_26915;
var ex26958 = (state_26915__$1[(2)]);
var statearr_26966_27107 = state_26915__$1;
(statearr_26966_27107[(5)] = ex26958);


if((ex26958 instanceof Error)){
var statearr_26975_27108 = state_26915__$1;
(statearr_26975_27108[(1)] = (5));

(statearr_26975_27108[(5)] = null);

} else {
throw ex26958;

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
var app$simulator$start_simulation_BANG__$_state_machine__26486__auto__ = null;
var app$simulator$start_simulation_BANG__$_state_machine__26486__auto____0 = (function (){
var statearr_26976 = [null,null,null,null,null,null,null,null,null];
(statearr_26976[(0)] = app$simulator$start_simulation_BANG__$_state_machine__26486__auto__);

(statearr_26976[(1)] = (1));

return statearr_26976;
});
var app$simulator$start_simulation_BANG__$_state_machine__26486__auto____1 = (function (state_26915){
while(true){
var ret_value__26487__auto__ = (function (){try{while(true){
var result__26488__auto__ = switch__26485__auto__(state_26915);
if(cljs.core.keyword_identical_QMARK_(result__26488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26488__auto__;
}
break;
}
}catch (e26977){var ex__26489__auto__ = e26977;
var statearr_26978_27109 = state_26915;
(statearr_26978_27109[(2)] = ex__26489__auto__);


if(cljs.core.seq((state_26915[(4)]))){
var statearr_26979_27110 = state_26915;
(statearr_26979_27110[(1)] = cljs.core.first((state_26915[(4)])));

} else {
throw ex__26489__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27111 = state_26915;
state_26915 = G__27111;
continue;
} else {
return ret_value__26487__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__26486__auto__ = function(state_26915){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__26486__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__26486__auto____1.call(this,state_26915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__26486__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__26486__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__26486__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__26486__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26985 = f__26509__auto__();
(statearr_26985[(6)] = c__26508__auto__);

return statearr_26985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));

return c__26508__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__27001 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27001) : cljs.numpy.array.call(null,G__27001));
})();
var bat_shape_arr = (function (){var G__27002 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27002) : cljs.numpy.array.call(null,G__27002));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__27003 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27003) : cljs.numpy.array.call(null,G__27003));
})();
var gps_shape_arr = (function (){var G__27008 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27008) : cljs.numpy.array.call(null,G__27008));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__27009 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27009) : cljs.numpy.array.call(null,G__27009));
})();
var unc_shape_arr = (function (){var G__27010 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27010) : cljs.numpy.array.call(null,G__27010));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__27011 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27011) : cljs.numpy.array.call(null,G__27011));
})();
var unc_shape_arr = (function (){var G__27012 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27012) : cljs.numpy.array.call(null,G__27012));
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
})(),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__27013){
var map__27014 = p__27013;
var map__27014__$1 = cljs.core.__destructure_map(map__27014);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__27112 = (curr + step);
var G__27113 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__27112;
acc = G__27113;
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
var combos = (function (){var iter__5649__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__27015(s__27016){
return (new cljs.core.LazySeq(null,(function (){
var s__27016__$1 = s__27016;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27016__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__27016__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__27015_$_iter__27017(s__27018){
return (new cljs.core.LazySeq(null,((function (s__27016__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__27018__$1 = s__27018;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27018__$1);
if(temp__5825__auto____$1){
var s__27018__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27018__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27018__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27020 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27019 = (0);
while(true){
if((i__27019 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__27019);
cljs.core.chunk_append(b__27020,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__27114 = (i__27019 + (1));
i__27019 = G__27114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27020),app$simulator$start_stress_test_BANG__$_iter__27015_$_iter__27017(cljs.core.chunk_rest(s__27018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27020),null);
}
} else {
var k = cljs.core.first(s__27018__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__27015_$_iter__27017(cljs.core.rest(s__27018__$2)));
}
} else {
return null;
}
break;
}
});})(s__27016__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__27016__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(k_vals));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$simulator$start_stress_test_BANG__$_iter__27015(cljs.core.rest(s__27016__$1)));
} else {
var G__27115 = cljs.core.rest(s__27016__$1);
s__27016__$1 = G__27115;
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
var seq__27021 = cljs.core.seq(combos);
var chunk__27022 = null;
var count__27023 = (0);
var i__27024 = (0);
while(true){
if((i__27024 < count__27023)){
var combo = chunk__27022.cljs$core$IIndexed$_nth$arity$2(null,i__27024);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27021,chunk__27022,count__27023,i__27024,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27029){
var map__27030 = p__27029;
var map__27030__$1 = cljs.core.__destructure_map(map__27030);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__27021,chunk__27022,count__27023,i__27024,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27116 = seq__27021;
var G__27117 = chunk__27022;
var G__27118 = count__27023;
var G__27119 = (i__27024 + (1));
seq__27021 = G__27116;
chunk__27022 = G__27117;
count__27023 = G__27118;
i__27024 = G__27119;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27021);
if(temp__5825__auto__){
var seq__27021__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27021__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27021__$1);
var G__27120 = cljs.core.chunk_rest(seq__27021__$1);
var G__27121 = c__5694__auto__;
var G__27122 = cljs.core.count(c__5694__auto__);
var G__27123 = (0);
seq__27021 = G__27120;
chunk__27022 = G__27121;
count__27023 = G__27122;
i__27024 = G__27123;
continue;
} else {
var combo = cljs.core.first(seq__27021__$1);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27021,chunk__27022,count__27023,i__27024,combo,seq__27021__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27031){
var map__27032 = p__27031;
var map__27032__$1 = cljs.core.__destructure_map(map__27032);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__27021,chunk__27022,count__27023,i__27024,combo,seq__27021__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27124 = cljs.core.next(seq__27021__$1);
var G__27125 = null;
var G__27126 = (0);
var G__27127 = (0);
seq__27021 = G__27124;
chunk__27022 = G__27125;
count__27023 = G__27126;
i__27024 = G__27127;
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
