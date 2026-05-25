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
}catch (e26700){if((e26700 instanceof Error)){
var e = e26700;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e26700;

}
}});
app.simulator.cached_submit_job_BANG_ = (function app$simulator$cached_submit_job_BANG_(data,callback){
var c__26504__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26505__auto__ = (function (){var switch__26481__auto__ = (function (state_26724){
var state_val_26725 = (state_26724[(1)]);
if((state_val_26725 === (1))){
var inst_26708 = (state_26724[(7)]);
var inst_26708__$1 = app.db.hash_key(data);
var inst_26709 = app.db.get_cache(inst_26708__$1);
var state_26724__$1 = (function (){var statearr_26728 = state_26724;
(statearr_26728[(7)] = inst_26708__$1);

return statearr_26728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26724__$1,(2),inst_26709);
} else {
if((state_val_26725 === (2))){
var inst_26711 = (state_26724[(8)]);
var inst_26711__$1 = (state_26724[(2)]);
var state_26724__$1 = (function (){var statearr_26729 = state_26724;
(statearr_26729[(8)] = inst_26711__$1);

return statearr_26729;
})();
if(cljs.core.truth_(inst_26711__$1)){
var statearr_26732_26972 = state_26724__$1;
(statearr_26732_26972[(1)] = (3));

} else {
var statearr_26733_26973 = state_26724__$1;
(statearr_26733_26973[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (3))){
var inst_26711 = (state_26724[(8)]);
var inst_26714 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_26715 = [true,inst_26711];
var inst_26716 = cljs.core.PersistentHashMap.fromArrays(inst_26714,inst_26715);
var inst_26717 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26716) : callback.call(null,inst_26716));
var state_26724__$1 = state_26724;
var statearr_26734_26974 = state_26724__$1;
(statearr_26734_26974[(2)] = inst_26717);

(statearr_26734_26974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (4))){
var inst_26708 = (state_26724[(7)]);
var inst_26711 = (state_26724[(8)]);
var inst_26719 = (function (){var k = inst_26708;
var cached = inst_26711;
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
var inst_26720 = app.worker_pool.submit_job_BANG_(data,inst_26719);
var state_26724__$1 = state_26724;
var statearr_26738_26975 = state_26724__$1;
(statearr_26738_26975[(2)] = inst_26720);

(statearr_26738_26975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (5))){
var inst_26722 = (state_26724[(2)]);
var state_26724__$1 = state_26724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26724__$1,inst_26722);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__ = null;
var app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____0 = (function (){
var statearr_26739 = [null,null,null,null,null,null,null,null,null];
(statearr_26739[(0)] = app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__);

(statearr_26739[(1)] = (1));

return statearr_26739;
});
var app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____1 = (function (state_26724){
while(true){
var ret_value__26483__auto__ = (function (){try{while(true){
var result__26484__auto__ = switch__26481__auto__(state_26724);
if(cljs.core.keyword_identical_QMARK_(result__26484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26484__auto__;
}
break;
}
}catch (e26740){var ex__26485__auto__ = e26740;
var statearr_26741_26976 = state_26724;
(statearr_26741_26976[(2)] = ex__26485__auto__);


if(cljs.core.seq((state_26724[(4)]))){
var statearr_26742_26977 = state_26724;
(statearr_26742_26977[(1)] = cljs.core.first((state_26724[(4)])));

} else {
throw ex__26485__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26978 = state_26724;
state_26724 = G__26978;
continue;
} else {
return ret_value__26483__auto__;
}
break;
}
});
app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__ = function(state_26724){
switch(arguments.length){
case 0:
return app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____0.call(this);
case 1:
return app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____1.call(this,state_26724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____0;
app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____1;
return app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__;
})()
})();
var state__26506__auto__ = (function (){var statearr_26743 = f__26505__auto__();
(statearr_26743[(6)] = c__26504__auto__);

return statearr_26743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26506__auto__);
}));

return c__26504__auto__;
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
var fam_kw_26979 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26815_26980 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_26979)));
var chunk__26816_26981 = null;
var count__26817_26982 = (0);
var i__26818_26983 = (0);
while(true){
if((i__26818_26983 < count__26817_26982)){
var vec__26829_26984 = chunk__26816_26981.cljs$core$IIndexed$_nth$arity$2(null,i__26818_26983);
var idx_26985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829_26984,(0),null);
var rec_26986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829_26984,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_26986,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_26985 * (7919)))], null),((function (seq__26815_26980,chunk__26816_26981,count__26817_26982,i__26818_26983,seq__26745,chunk__26746,count__26747,i__26748,vec__26829_26984,idx_26985,rec_26986,fam_kw_26979,fam){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_26979,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26815_26980,chunk__26816_26981,count__26817_26982,i__26818_26983,seq__26745,chunk__26746,count__26747,i__26748,vec__26829_26984,idx_26985,rec_26986,fam_kw_26979,fam))
);


var G__26987 = seq__26815_26980;
var G__26988 = chunk__26816_26981;
var G__26989 = count__26817_26982;
var G__26990 = (i__26818_26983 + (1));
seq__26815_26980 = G__26987;
chunk__26816_26981 = G__26988;
count__26817_26982 = G__26989;
i__26818_26983 = G__26990;
continue;
} else {
var temp__5825__auto___26991 = cljs.core.seq(seq__26815_26980);
if(temp__5825__auto___26991){
var seq__26815_26992__$1 = temp__5825__auto___26991;
if(cljs.core.chunked_seq_QMARK_(seq__26815_26992__$1)){
var c__5694__auto___26993 = cljs.core.chunk_first(seq__26815_26992__$1);
var G__26994 = cljs.core.chunk_rest(seq__26815_26992__$1);
var G__26995 = c__5694__auto___26993;
var G__26996 = cljs.core.count(c__5694__auto___26993);
var G__26997 = (0);
seq__26815_26980 = G__26994;
chunk__26816_26981 = G__26995;
count__26817_26982 = G__26996;
i__26818_26983 = G__26997;
continue;
} else {
var vec__26834_26998 = cljs.core.first(seq__26815_26992__$1);
var idx_26999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26834_26998,(0),null);
var rec_27000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26834_26998,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27000,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_26999 * (7919)))], null),((function (seq__26815_26980,chunk__26816_26981,count__26817_26982,i__26818_26983,seq__26745,chunk__26746,count__26747,i__26748,vec__26834_26998,idx_26999,rec_27000,seq__26815_26992__$1,temp__5825__auto___26991,fam_kw_26979,fam){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_26979,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26815_26980,chunk__26816_26981,count__26817_26982,i__26818_26983,seq__26745,chunk__26746,count__26747,i__26748,vec__26834_26998,idx_26999,rec_27000,seq__26815_26992__$1,temp__5825__auto___26991,fam_kw_26979,fam))
);


var G__27001 = cljs.core.next(seq__26815_26992__$1);
var G__27002 = null;
var G__27003 = (0);
var G__27004 = (0);
seq__26815_26980 = G__27001;
chunk__26816_26981 = G__27002;
count__26817_26982 = G__27003;
i__26818_26983 = G__27004;
continue;
}
} else {
}
}
break;
}


var G__27005 = seq__26745;
var G__27006 = chunk__26746;
var G__27007 = count__26747;
var G__27008 = (i__26748 + (1));
seq__26745 = G__27005;
chunk__26746 = G__27006;
count__26747 = G__27007;
i__26748 = G__27008;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26745);
if(temp__5825__auto__){
var seq__26745__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26745__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26745__$1);
var G__27009 = cljs.core.chunk_rest(seq__26745__$1);
var G__27010 = c__5694__auto__;
var G__27011 = cljs.core.count(c__5694__auto__);
var G__27012 = (0);
seq__26745 = G__27009;
chunk__26746 = G__27010;
count__26747 = G__27011;
i__26748 = G__27012;
continue;
} else {
var fam = cljs.core.first(seq__26745__$1);
var fam_kw_27013 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26840_27014 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27013)));
var chunk__26841_27015 = null;
var count__26842_27016 = (0);
var i__26843_27017 = (0);
while(true){
if((i__26843_27017 < count__26842_27016)){
var vec__26858_27018 = chunk__26841_27015.cljs$core$IIndexed$_nth$arity$2(null,i__26843_27017);
var idx_27019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_27018,(0),null);
var rec_27020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_27018,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27020,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27019 * (7919)))], null),((function (seq__26840_27014,chunk__26841_27015,count__26842_27016,i__26843_27017,seq__26745,chunk__26746,count__26747,i__26748,vec__26858_27018,idx_27019,rec_27020,fam_kw_27013,fam,seq__26745__$1,temp__5825__auto__){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27013,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26840_27014,chunk__26841_27015,count__26842_27016,i__26843_27017,seq__26745,chunk__26746,count__26747,i__26748,vec__26858_27018,idx_27019,rec_27020,fam_kw_27013,fam,seq__26745__$1,temp__5825__auto__))
);


var G__27021 = seq__26840_27014;
var G__27022 = chunk__26841_27015;
var G__27023 = count__26842_27016;
var G__27024 = (i__26843_27017 + (1));
seq__26840_27014 = G__27021;
chunk__26841_27015 = G__27022;
count__26842_27016 = G__27023;
i__26843_27017 = G__27024;
continue;
} else {
var temp__5825__auto___27025__$1 = cljs.core.seq(seq__26840_27014);
if(temp__5825__auto___27025__$1){
var seq__26840_27026__$1 = temp__5825__auto___27025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26840_27026__$1)){
var c__5694__auto___27027 = cljs.core.chunk_first(seq__26840_27026__$1);
var G__27028 = cljs.core.chunk_rest(seq__26840_27026__$1);
var G__27029 = c__5694__auto___27027;
var G__27030 = cljs.core.count(c__5694__auto___27027);
var G__27031 = (0);
seq__26840_27014 = G__27028;
chunk__26841_27015 = G__27029;
count__26842_27016 = G__27030;
i__26843_27017 = G__27031;
continue;
} else {
var vec__26865_27032 = cljs.core.first(seq__26840_27026__$1);
var idx_27033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26865_27032,(0),null);
var rec_27034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26865_27032,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27034,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27033 * (7919)))], null),((function (seq__26840_27014,chunk__26841_27015,count__26842_27016,i__26843_27017,seq__26745,chunk__26746,count__26747,i__26748,vec__26865_27032,idx_27033,rec_27034,seq__26840_27026__$1,temp__5825__auto___27025__$1,fam_kw_27013,fam,seq__26745__$1,temp__5825__auto__){
return (function (p__26868){
var map__26872 = p__26868;
var map__26872__$1 = cljs.core.__destructure_map(map__26872);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26872__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26872__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26872__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27013,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26840_27014,chunk__26841_27015,count__26842_27016,i__26843_27017,seq__26745,chunk__26746,count__26747,i__26748,vec__26865_27032,idx_27033,rec_27034,seq__26840_27026__$1,temp__5825__auto___27025__$1,fam_kw_27013,fam,seq__26745__$1,temp__5825__auto__))
);


var G__27035 = cljs.core.next(seq__26840_27026__$1);
var G__27036 = null;
var G__27037 = (0);
var G__27038 = (0);
seq__26840_27014 = G__27035;
chunk__26841_27015 = G__27036;
count__26842_27016 = G__27037;
i__26843_27017 = G__27038;
continue;
}
} else {
}
}
break;
}


var G__27039 = cljs.core.next(seq__26745__$1);
var G__27040 = null;
var G__27041 = (0);
var G__27042 = (0);
seq__26745 = G__27039;
chunk__26746 = G__27040;
count__26747 = G__27041;
i__26748 = G__27042;
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

var c__26504__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26505__auto__ = (function (){var switch__26481__auto__ = (function (state_26910){
var state_val_26911 = (state_26910[(1)]);
if((state_val_26911 === (1))){
var inst_26876 = cljs.core.async.timeout((50));
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26910__$1,(2),inst_26876);
} else {
if((state_val_26911 === (2))){
var inst_26878 = (state_26910[(2)]);
var state_26910__$1 = (function (){var statearr_26914 = state_26910;
(statearr_26914[(7)] = inst_26878);

return statearr_26914;
})();
var statearr_26919_27043 = state_26910__$1;
(statearr_26919_27043[(2)] = null);

(statearr_26919_27043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (3))){
var _ = (function (){var statearr_26920 = state_26910;
(statearr_26920[(4)] = cljs.core.cons((6),(state_26910[(4)])));

return statearr_26920;
})();
var inst_26889 = (function (){return (function (acc,fam){
app.simulator.log((""+"Running Stage 1 for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)+" accepted: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_26890 = cljs.core.PersistentHashMap.EMPTY;
var inst_26891 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_26889,inst_26890,families);
var inst_26892 = cljs.core.vals(inst_26891);
var inst_26893 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_26892);
var inst_26894 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_26893);
var inst_26895 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_26896 = [inst_26894,(0)];
var inst_26897 = cljs.core.PersistentHashMap.fromArrays(inst_26895,inst_26896);
var inst_26898 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_26897], 0));
var inst_26899 = cljs.core.PersistentHashMap.EMPTY;
var inst_26900 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_26899);
var inst_26901 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_26902 = Date.now();
var inst_26903 = app.simulator.submit_simulation_jobs_BANG_(config,inst_26891,families,inst_26900,inst_26901,inst_26894,inst_26902);
var ___$1 = (function (){var statearr_26923 = state_26910;
(statearr_26923[(4)] = cljs.core.rest((state_26910[(4)])));

return statearr_26923;
})();
var state_26910__$1 = (function (){var statearr_26924 = state_26910;
(statearr_26924[(8)] = inst_26898);

return statearr_26924;
})();
var statearr_26925_27044 = state_26910__$1;
(statearr_26925_27044[(2)] = inst_26903);

(statearr_26925_27044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (4))){
var inst_26908 = (state_26910[(2)]);
var state_26910__$1 = state_26910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26910__$1,inst_26908);
} else {
if((state_val_26911 === (5))){
var inst_26879 = (state_26910[(2)]);
var inst_26882 = inst_26879.message;
var inst_26883 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_26882], 0));
var state_26910__$1 = state_26910;
var statearr_26929_27045 = state_26910__$1;
(statearr_26929_27045[(2)] = inst_26883);

(statearr_26929_27045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26911 === (6))){
var _ = (function (){var statearr_26930 = state_26910;
(statearr_26930[(4)] = cljs.core.rest((state_26910[(4)])));

return statearr_26930;
})();
var state_26910__$1 = state_26910;
var ex26926 = (state_26910__$1[(2)]);
var statearr_26931_27046 = state_26910__$1;
(statearr_26931_27046[(5)] = ex26926);


if((ex26926 instanceof Error)){
var statearr_26932_27047 = state_26910__$1;
(statearr_26932_27047[(1)] = (5));

(statearr_26932_27047[(5)] = null);

} else {
throw ex26926;

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
var app$simulator$start_simulation_BANG__$_state_machine__26482__auto__ = null;
var app$simulator$start_simulation_BANG__$_state_machine__26482__auto____0 = (function (){
var statearr_26933 = [null,null,null,null,null,null,null,null,null];
(statearr_26933[(0)] = app$simulator$start_simulation_BANG__$_state_machine__26482__auto__);

(statearr_26933[(1)] = (1));

return statearr_26933;
});
var app$simulator$start_simulation_BANG__$_state_machine__26482__auto____1 = (function (state_26910){
while(true){
var ret_value__26483__auto__ = (function (){try{while(true){
var result__26484__auto__ = switch__26481__auto__(state_26910);
if(cljs.core.keyword_identical_QMARK_(result__26484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26484__auto__;
}
break;
}
}catch (e26934){var ex__26485__auto__ = e26934;
var statearr_26935_27048 = state_26910;
(statearr_26935_27048[(2)] = ex__26485__auto__);


if(cljs.core.seq((state_26910[(4)]))){
var statearr_26936_27049 = state_26910;
(statearr_26936_27049[(1)] = cljs.core.first((state_26910[(4)])));

} else {
throw ex__26485__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27050 = state_26910;
state_26910 = G__27050;
continue;
} else {
return ret_value__26483__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__26482__auto__ = function(state_26910){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__26482__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__26482__auto____1.call(this,state_26910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__26482__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__26482__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__26482__auto__;
})()
})();
var state__26506__auto__ = (function (){var statearr_26937 = f__26505__auto__();
(statearr_26937[(6)] = c__26504__auto__);

return statearr_26937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26506__auto__);
}));

return c__26504__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__26938 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26938) : cljs.numpy.array.call(null,G__26938));
})();
var bat_shape_arr = (function (){var G__26939 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26939) : cljs.numpy.array.call(null,G__26939));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__26940 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26940) : cljs.numpy.array.call(null,G__26940));
})();
var gps_shape_arr = (function (){var G__26941 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26941) : cljs.numpy.array.call(null,G__26941));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__26942 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26942) : cljs.numpy.array.call(null,G__26942));
})();
var unc_shape_arr = (function (){var G__26943 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26943) : cljs.numpy.array.call(null,G__26943));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__26944 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26944) : cljs.numpy.array.call(null,G__26944));
})();
var unc_shape_arr = (function (){var G__26945 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26945) : cljs.numpy.array.call(null,G__26945));
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
})(),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__26951){
var map__26952 = p__26951;
var map__26952__$1 = cljs.core.__destructure_map(map__26952);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__27051 = (curr + step);
var G__27052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__27051;
acc = G__27052;
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
var combos = (function (){var iter__5649__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__26953(s__26954){
return (new cljs.core.LazySeq(null,(function (){
var s__26954__$1 = s__26954;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26954__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__26954__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__26953_$_iter__26955(s__26956){
return (new cljs.core.LazySeq(null,((function (s__26954__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__26956__$1 = s__26956;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__26956__$1);
if(temp__5825__auto____$1){
var s__26956__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26956__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__26956__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__26958 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__26957 = (0);
while(true){
if((i__26957 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__26957);
cljs.core.chunk_append(b__26958,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__27053 = (i__26957 + (1));
i__26957 = G__27053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26958),app$simulator$start_stress_test_BANG__$_iter__26953_$_iter__26955(cljs.core.chunk_rest(s__26956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26958),null);
}
} else {
var k = cljs.core.first(s__26956__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__26953_$_iter__26955(cljs.core.rest(s__26956__$2)));
}
} else {
return null;
}
break;
}
});})(s__26954__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__26954__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(k_vals));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$simulator$start_stress_test_BANG__$_iter__26953(cljs.core.rest(s__26954__$1)));
} else {
var G__27054 = cljs.core.rest(s__26954__$1);
s__26954__$1 = G__27054;
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
var seq__26960 = cljs.core.seq(combos);
var chunk__26961 = null;
var count__26962 = (0);
var i__26963 = (0);
while(true){
if((i__26963 < count__26962)){
var combo = chunk__26961.cljs$core$IIndexed$_nth$arity$2(null,i__26963);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__26960,chunk__26961,count__26962,i__26963,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__26968){
var map__26969 = p__26968;
var map__26969__$1 = cljs.core.__destructure_map(map__26969);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26969__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26969__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26969__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__26960,chunk__26961,count__26962,i__26963,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27055 = seq__26960;
var G__27056 = chunk__26961;
var G__27057 = count__26962;
var G__27058 = (i__26963 + (1));
seq__26960 = G__27055;
chunk__26961 = G__27056;
count__26962 = G__27057;
i__26963 = G__27058;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26960);
if(temp__5825__auto__){
var seq__26960__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26960__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26960__$1);
var G__27059 = cljs.core.chunk_rest(seq__26960__$1);
var G__27060 = c__5694__auto__;
var G__27061 = cljs.core.count(c__5694__auto__);
var G__27062 = (0);
seq__26960 = G__27059;
chunk__26961 = G__27060;
count__26962 = G__27061;
i__26963 = G__27062;
continue;
} else {
var combo = cljs.core.first(seq__26960__$1);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__26960,chunk__26961,count__26962,i__26963,combo,seq__26960__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__26970){
var map__26971 = p__26970;
var map__26971__$1 = cljs.core.__destructure_map(map__26971);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26971__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26971__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26971__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__26960,chunk__26961,count__26962,i__26963,combo,seq__26960__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27063 = cljs.core.next(seq__26960__$1);
var G__27064 = null;
var G__27065 = (0);
var G__27066 = (0);
seq__26960 = G__27063;
chunk__26961 = G__27064;
count__26962 = G__27065;
i__26963 = G__27066;
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
