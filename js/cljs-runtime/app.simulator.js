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
}catch (e26662){if((e26662 instanceof Error)){
var e = e26662;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e26662;

}
}});
app.simulator.cached_submit_job_BANG_ = (function app$simulator$cached_submit_job_BANG_(data,callback){
var c__26508__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26509__auto__ = (function (){var switch__26481__auto__ = (function (state_26684){
var state_val_26685 = (state_26684[(1)]);
if((state_val_26685 === (1))){
var inst_26666 = (state_26684[(7)]);
var inst_26666__$1 = app.db.hash_key(data);
var inst_26667 = app.db.get_cache(inst_26666__$1);
var state_26684__$1 = (function (){var statearr_26686 = state_26684;
(statearr_26686[(7)] = inst_26666__$1);

return statearr_26686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26684__$1,(2),inst_26667);
} else {
if((state_val_26685 === (2))){
var inst_26669 = (state_26684[(8)]);
var inst_26669__$1 = (state_26684[(2)]);
var state_26684__$1 = (function (){var statearr_26687 = state_26684;
(statearr_26687[(8)] = inst_26669__$1);

return statearr_26687;
})();
if(cljs.core.truth_(inst_26669__$1)){
var statearr_26688_26974 = state_26684__$1;
(statearr_26688_26974[(1)] = (3));

} else {
var statearr_26689_26975 = state_26684__$1;
(statearr_26689_26975[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (3))){
var inst_26669 = (state_26684[(8)]);
var inst_26674 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_26675 = [true,inst_26669];
var inst_26676 = cljs.core.PersistentHashMap.fromArrays(inst_26674,inst_26675);
var inst_26677 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26676) : callback.call(null,inst_26676));
var state_26684__$1 = state_26684;
var statearr_26691_26976 = state_26684__$1;
(statearr_26691_26976[(2)] = inst_26677);

(statearr_26691_26976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (4))){
var inst_26666 = (state_26684[(7)]);
var inst_26669 = (state_26684[(8)]);
var inst_26679 = (function (){var k = inst_26666;
var cached = inst_26669;
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
var inst_26680 = app.worker_pool.submit_job_BANG_(data,inst_26679);
var state_26684__$1 = state_26684;
var statearr_26693_26977 = state_26684__$1;
(statearr_26693_26977[(2)] = inst_26680);

(statearr_26693_26977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26685 === (5))){
var inst_26682 = (state_26684[(2)]);
var state_26684__$1 = state_26684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26684__$1,inst_26682);
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
var statearr_26694 = [null,null,null,null,null,null,null,null,null];
(statearr_26694[(0)] = app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__);

(statearr_26694[(1)] = (1));

return statearr_26694;
});
var app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____1 = (function (state_26684){
while(true){
var ret_value__26483__auto__ = (function (){try{while(true){
var result__26484__auto__ = switch__26481__auto__(state_26684);
if(cljs.core.keyword_identical_QMARK_(result__26484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26484__auto__;
}
break;
}
}catch (e26697){var ex__26485__auto__ = e26697;
var statearr_26698_26978 = state_26684;
(statearr_26698_26978[(2)] = ex__26485__auto__);


if(cljs.core.seq((state_26684[(4)]))){
var statearr_26699_26979 = state_26684;
(statearr_26699_26979[(1)] = cljs.core.first((state_26684[(4)])));

} else {
throw ex__26485__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26980 = state_26684;
state_26684 = G__26980;
continue;
} else {
return ret_value__26483__auto__;
}
break;
}
});
app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__ = function(state_26684){
switch(arguments.length){
case 0:
return app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____0.call(this);
case 1:
return app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____1.call(this,state_26684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____0;
app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto____1;
return app$simulator$cached_submit_job_BANG__$_state_machine__26482__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26700 = f__26509__auto__();
(statearr_26700[(6)] = c__26508__auto__);

return statearr_26700;
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
var seq__26703 = cljs.core.seq(families);
var chunk__26704 = null;
var count__26705 = (0);
var i__26706 = (0);
while(true){
if((i__26706 < count__26705)){
var fam = chunk__26704.cljs$core$IIndexed$_nth$arity$2(null,i__26706);
var fam_kw_26981 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26756_26982 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_26981)));
var chunk__26757_26983 = null;
var count__26758_26984 = (0);
var i__26759_26985 = (0);
while(true){
if((i__26759_26985 < count__26758_26984)){
var vec__26770_26986 = chunk__26757_26983.cljs$core$IIndexed$_nth$arity$2(null,i__26759_26985);
var idx_26987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770_26986,(0),null);
var rec_26988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770_26986,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_26988,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_26987 * (7919)))], null),((function (seq__26756_26982,chunk__26757_26983,count__26758_26984,i__26759_26985,seq__26703,chunk__26704,count__26705,i__26706,vec__26770_26986,idx_26987,rec_26988,fam_kw_26981,fam){
return (function (p__26773){
var map__26774 = p__26773;
var map__26774__$1 = cljs.core.__destructure_map(map__26774);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26774__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26774__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26774__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_26981,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26756_26982,chunk__26757_26983,count__26758_26984,i__26759_26985,seq__26703,chunk__26704,count__26705,i__26706,vec__26770_26986,idx_26987,rec_26988,fam_kw_26981,fam))
);


var G__26989 = seq__26756_26982;
var G__26990 = chunk__26757_26983;
var G__26991 = count__26758_26984;
var G__26992 = (i__26759_26985 + (1));
seq__26756_26982 = G__26989;
chunk__26757_26983 = G__26990;
count__26758_26984 = G__26991;
i__26759_26985 = G__26992;
continue;
} else {
var temp__5825__auto___26993 = cljs.core.seq(seq__26756_26982);
if(temp__5825__auto___26993){
var seq__26756_26994__$1 = temp__5825__auto___26993;
if(cljs.core.chunked_seq_QMARK_(seq__26756_26994__$1)){
var c__5694__auto___26995 = cljs.core.chunk_first(seq__26756_26994__$1);
var G__26996 = cljs.core.chunk_rest(seq__26756_26994__$1);
var G__26997 = c__5694__auto___26995;
var G__26998 = cljs.core.count(c__5694__auto___26995);
var G__26999 = (0);
seq__26756_26982 = G__26996;
chunk__26757_26983 = G__26997;
count__26758_26984 = G__26998;
i__26759_26985 = G__26999;
continue;
} else {
var vec__26775_27000 = cljs.core.first(seq__26756_26994__$1);
var idx_27001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26775_27000,(0),null);
var rec_27002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26775_27000,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27002,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27001 * (7919)))], null),((function (seq__26756_26982,chunk__26757_26983,count__26758_26984,i__26759_26985,seq__26703,chunk__26704,count__26705,i__26706,vec__26775_27000,idx_27001,rec_27002,seq__26756_26994__$1,temp__5825__auto___26993,fam_kw_26981,fam){
return (function (p__26778){
var map__26779 = p__26778;
var map__26779__$1 = cljs.core.__destructure_map(map__26779);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_26981,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26756_26982,chunk__26757_26983,count__26758_26984,i__26759_26985,seq__26703,chunk__26704,count__26705,i__26706,vec__26775_27000,idx_27001,rec_27002,seq__26756_26994__$1,temp__5825__auto___26993,fam_kw_26981,fam))
);


var G__27003 = cljs.core.next(seq__26756_26994__$1);
var G__27004 = null;
var G__27005 = (0);
var G__27006 = (0);
seq__26756_26982 = G__27003;
chunk__26757_26983 = G__27004;
count__26758_26984 = G__27005;
i__26759_26985 = G__27006;
continue;
}
} else {
}
}
break;
}


var G__27007 = seq__26703;
var G__27008 = chunk__26704;
var G__27009 = count__26705;
var G__27010 = (i__26706 + (1));
seq__26703 = G__27007;
chunk__26704 = G__27008;
count__26705 = G__27009;
i__26706 = G__27010;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26703);
if(temp__5825__auto__){
var seq__26703__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26703__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26703__$1);
var G__27011 = cljs.core.chunk_rest(seq__26703__$1);
var G__27012 = c__5694__auto__;
var G__27013 = cljs.core.count(c__5694__auto__);
var G__27014 = (0);
seq__26703 = G__27011;
chunk__26704 = G__27012;
count__26705 = G__27013;
i__26706 = G__27014;
continue;
} else {
var fam = cljs.core.first(seq__26703__$1);
var fam_kw_27015 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__26780_27016 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27015)));
var chunk__26781_27017 = null;
var count__26782_27018 = (0);
var i__26783_27019 = (0);
while(true){
if((i__26783_27019 < count__26782_27018)){
var vec__26794_27020 = chunk__26781_27017.cljs$core$IIndexed$_nth$arity$2(null,i__26783_27019);
var idx_27021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26794_27020,(0),null);
var rec_27022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26794_27020,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27022,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27021 * (7919)))], null),((function (seq__26780_27016,chunk__26781_27017,count__26782_27018,i__26783_27019,seq__26703,chunk__26704,count__26705,i__26706,vec__26794_27020,idx_27021,rec_27022,fam_kw_27015,fam,seq__26703__$1,temp__5825__auto__){
return (function (p__26797){
var map__26798 = p__26797;
var map__26798__$1 = cljs.core.__destructure_map(map__26798);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26798__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26798__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26798__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27015,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26780_27016,chunk__26781_27017,count__26782_27018,i__26783_27019,seq__26703,chunk__26704,count__26705,i__26706,vec__26794_27020,idx_27021,rec_27022,fam_kw_27015,fam,seq__26703__$1,temp__5825__auto__))
);


var G__27023 = seq__26780_27016;
var G__27024 = chunk__26781_27017;
var G__27025 = count__26782_27018;
var G__27026 = (i__26783_27019 + (1));
seq__26780_27016 = G__27023;
chunk__26781_27017 = G__27024;
count__26782_27018 = G__27025;
i__26783_27019 = G__27026;
continue;
} else {
var temp__5825__auto___27027__$1 = cljs.core.seq(seq__26780_27016);
if(temp__5825__auto___27027__$1){
var seq__26780_27028__$1 = temp__5825__auto___27027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26780_27028__$1)){
var c__5694__auto___27029 = cljs.core.chunk_first(seq__26780_27028__$1);
var G__27030 = cljs.core.chunk_rest(seq__26780_27028__$1);
var G__27031 = c__5694__auto___27029;
var G__27032 = cljs.core.count(c__5694__auto___27029);
var G__27033 = (0);
seq__26780_27016 = G__27030;
chunk__26781_27017 = G__27031;
count__26782_27018 = G__27032;
i__26783_27019 = G__27033;
continue;
} else {
var vec__26799_27034 = cljs.core.first(seq__26780_27028__$1);
var idx_27035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799_27034,(0),null);
var rec_27036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799_27034,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27036,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27035 * (7919)))], null),((function (seq__26780_27016,chunk__26781_27017,count__26782_27018,i__26783_27019,seq__26703,chunk__26704,count__26705,i__26706,vec__26799_27034,idx_27035,rec_27036,seq__26780_27028__$1,temp__5825__auto___27027__$1,fam_kw_27015,fam,seq__26703__$1,temp__5825__auto__){
return (function (p__26802){
var map__26803 = p__26802;
var map__26803__$1 = cljs.core.__destructure_map(map__26803);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26803__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26803__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26803__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27015,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__26780_27016,chunk__26781_27017,count__26782_27018,i__26783_27019,seq__26703,chunk__26704,count__26705,i__26706,vec__26799_27034,idx_27035,rec_27036,seq__26780_27028__$1,temp__5825__auto___27027__$1,fam_kw_27015,fam,seq__26703__$1,temp__5825__auto__))
);


var G__27037 = cljs.core.next(seq__26780_27028__$1);
var G__27038 = null;
var G__27039 = (0);
var G__27040 = (0);
seq__26780_27016 = G__27037;
chunk__26781_27017 = G__27038;
count__26782_27018 = G__27039;
i__26783_27019 = G__27040;
continue;
}
} else {
}
}
break;
}


var G__27041 = cljs.core.next(seq__26703__$1);
var G__27042 = null;
var G__27043 = (0);
var G__27044 = (0);
seq__26703 = G__27041;
chunk__26704 = G__27042;
count__26705 = G__27043;
i__26706 = G__27044;
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
var f__26509__auto__ = (function (){var switch__26481__auto__ = (function (state_26834){
var state_val_26835 = (state_26834[(1)]);
if((state_val_26835 === (1))){
var inst_26804 = cljs.core.async.timeout((50));
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26834__$1,(2),inst_26804);
} else {
if((state_val_26835 === (2))){
var inst_26806 = (state_26834[(2)]);
var state_26834__$1 = (function (){var statearr_26836 = state_26834;
(statearr_26836[(7)] = inst_26806);

return statearr_26836;
})();
var statearr_26837_27045 = state_26834__$1;
(statearr_26837_27045[(2)] = null);

(statearr_26837_27045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (3))){
var _ = (function (){var statearr_26838 = state_26834;
(statearr_26838[(4)] = cljs.core.cons((6),(state_26834[(4)])));

return statearr_26838;
})();
var inst_26815 = (function (){return (function (acc,fam){
app.simulator.log((""+"Running Stage 1 for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)+" accepted: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_26816 = cljs.core.PersistentHashMap.EMPTY;
var inst_26817 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_26815,inst_26816,families);
var inst_26818 = cljs.core.vals(inst_26817);
var inst_26819 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_26818);
var inst_26820 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_26819);
var inst_26821 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_26822 = [inst_26820,(0)];
var inst_26823 = cljs.core.PersistentHashMap.fromArrays(inst_26821,inst_26822);
var inst_26824 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_26823], 0));
var inst_26825 = cljs.core.PersistentHashMap.EMPTY;
var inst_26826 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_26825);
var inst_26827 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_26828 = Date.now();
var inst_26829 = app.simulator.submit_simulation_jobs_BANG_(config,inst_26817,families,inst_26826,inst_26827,inst_26820,inst_26828);
var ___$1 = (function (){var statearr_26839 = state_26834;
(statearr_26839[(4)] = cljs.core.rest((state_26834[(4)])));

return statearr_26839;
})();
var state_26834__$1 = (function (){var statearr_26840 = state_26834;
(statearr_26840[(8)] = inst_26824);

return statearr_26840;
})();
var statearr_26841_27046 = state_26834__$1;
(statearr_26841_27046[(2)] = inst_26829);

(statearr_26841_27046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (4))){
var inst_26832 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26834__$1,inst_26832);
} else {
if((state_val_26835 === (5))){
var inst_26807 = (state_26834[(2)]);
var inst_26808 = inst_26807.message;
var inst_26809 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_26808], 0));
var state_26834__$1 = state_26834;
var statearr_26843_27047 = state_26834__$1;
(statearr_26843_27047[(2)] = inst_26809);

(statearr_26843_27047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (6))){
var _ = (function (){var statearr_26844 = state_26834;
(statearr_26844[(4)] = cljs.core.rest((state_26834[(4)])));

return statearr_26844;
})();
var state_26834__$1 = state_26834;
var ex26842 = (state_26834__$1[(2)]);
var statearr_26845_27048 = state_26834__$1;
(statearr_26845_27048[(5)] = ex26842);


if((ex26842 instanceof Error)){
var statearr_26846_27049 = state_26834__$1;
(statearr_26846_27049[(1)] = (5));

(statearr_26846_27049[(5)] = null);

} else {
throw ex26842;

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
var statearr_26847 = [null,null,null,null,null,null,null,null,null];
(statearr_26847[(0)] = app$simulator$start_simulation_BANG__$_state_machine__26482__auto__);

(statearr_26847[(1)] = (1));

return statearr_26847;
});
var app$simulator$start_simulation_BANG__$_state_machine__26482__auto____1 = (function (state_26834){
while(true){
var ret_value__26483__auto__ = (function (){try{while(true){
var result__26484__auto__ = switch__26481__auto__(state_26834);
if(cljs.core.keyword_identical_QMARK_(result__26484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26484__auto__;
}
break;
}
}catch (e26848){var ex__26485__auto__ = e26848;
var statearr_26849_27050 = state_26834;
(statearr_26849_27050[(2)] = ex__26485__auto__);


if(cljs.core.seq((state_26834[(4)]))){
var statearr_26850_27051 = state_26834;
(statearr_26850_27051[(1)] = cljs.core.first((state_26834[(4)])));

} else {
throw ex__26485__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_26834;
state_26834 = G__27052;
continue;
} else {
return ret_value__26483__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__26482__auto__ = function(state_26834){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__26482__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__26482__auto____1.call(this,state_26834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__26482__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__26482__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__26482__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__26482__auto__;
})()
})();
var state__26510__auto__ = (function (){var statearr_26851 = f__26509__auto__();
(statearr_26851[(6)] = c__26508__auto__);

return statearr_26851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26510__auto__);
}));

return c__26508__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__26852 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26852) : cljs.numpy.array.call(null,G__26852));
})();
var bat_shape_arr = (function (){var G__26853 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26853) : cljs.numpy.array.call(null,G__26853));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__26854 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26854) : cljs.numpy.array.call(null,G__26854));
})();
var gps_shape_arr = (function (){var G__26855 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26855) : cljs.numpy.array.call(null,G__26855));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__26856 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26856) : cljs.numpy.array.call(null,G__26856));
})();
var unc_shape_arr = (function (){var G__26857 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26857) : cljs.numpy.array.call(null,G__26857));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__26863 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26863) : cljs.numpy.array.call(null,G__26863));
})();
var unc_shape_arr = (function (){var G__26865 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26865) : cljs.numpy.array.call(null,G__26865));
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
})(),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__26877){
var map__26878 = p__26877;
var map__26878__$1 = cljs.core.__destructure_map(map__26878);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26878__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26878__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26878__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__27055 = (curr + step);
var G__27056 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__27055;
acc = G__27056;
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
var combos = (function (){var iter__5649__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__26909(s__26910){
return (new cljs.core.LazySeq(null,(function (){
var s__26910__$1 = s__26910;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26910__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__26910__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__26909_$_iter__26912(s__26913){
return (new cljs.core.LazySeq(null,((function (s__26910__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__26913__$1 = s__26913;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__26913__$1);
if(temp__5825__auto____$1){
var s__26913__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26913__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__26913__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__26915 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__26914 = (0);
while(true){
if((i__26914 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__26914);
cljs.core.chunk_append(b__26915,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__27060 = (i__26914 + (1));
i__26914 = G__27060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26915),app$simulator$start_stress_test_BANG__$_iter__26909_$_iter__26912(cljs.core.chunk_rest(s__26913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26915),null);
}
} else {
var k = cljs.core.first(s__26913__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__26909_$_iter__26912(cljs.core.rest(s__26913__$2)));
}
} else {
return null;
}
break;
}
});})(s__26910__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__26910__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(k_vals));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$simulator$start_stress_test_BANG__$_iter__26909(cljs.core.rest(s__26910__$1)));
} else {
var G__27062 = cljs.core.rest(s__26910__$1);
s__26910__$1 = G__27062;
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
var seq__26953 = cljs.core.seq(combos);
var chunk__26954 = null;
var count__26955 = (0);
var i__26956 = (0);
while(true){
if((i__26956 < count__26955)){
var combo = chunk__26954.cljs$core$IIndexed$_nth$arity$2(null,i__26956);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__26953,chunk__26954,count__26955,i__26956,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
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
});})(seq__26953,chunk__26954,count__26955,i__26956,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27063 = seq__26953;
var G__27064 = chunk__26954;
var G__27065 = count__26955;
var G__27066 = (i__26956 + (1));
seq__26953 = G__27063;
chunk__26954 = G__27064;
count__26955 = G__27065;
i__26956 = G__27066;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26953);
if(temp__5825__auto__){
var seq__26953__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26953__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__26953__$1);
var G__27067 = cljs.core.chunk_rest(seq__26953__$1);
var G__27068 = c__5694__auto__;
var G__27069 = cljs.core.count(c__5694__auto__);
var G__27070 = (0);
seq__26953 = G__27067;
chunk__26954 = G__27068;
count__26955 = G__27069;
i__26956 = G__27070;
continue;
} else {
var combo = cljs.core.first(seq__26953__$1);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__26953,chunk__26954,count__26955,i__26956,combo,seq__26953__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__26972){
var map__26973 = p__26972;
var map__26973__$1 = cljs.core.__destructure_map(map__26973);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__26953,chunk__26954,count__26955,i__26956,combo,seq__26953__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__27071 = cljs.core.next(seq__26953__$1);
var G__27072 = null;
var G__27073 = (0);
var G__27074 = (0);
seq__26953 = G__27071;
chunk__26954 = G__27072;
count__26955 = G__27073;
i__26956 = G__27074;
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
