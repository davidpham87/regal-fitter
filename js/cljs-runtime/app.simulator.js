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
}catch (e27638){if((e27638 instanceof Error)){
var e = e27638;
console.error("Stage 1 Error:",e);

throw e;
} else {
throw e27638;

}
}});
app.simulator.cached_submit_job_BANG_ = (function app$simulator$cached_submit_job_BANG_(data,callback){
var c__27565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27566__auto__ = (function (){var switch__27542__auto__ = (function (state_27657){
var state_val_27658 = (state_27657[(1)]);
if((state_val_27658 === (1))){
var inst_27640 = (state_27657[(7)]);
var inst_27640__$1 = app.db.hash_key(data);
var inst_27641 = app.db.get_cache(inst_27640__$1);
var state_27657__$1 = (function (){var statearr_27660 = state_27657;
(statearr_27660[(7)] = inst_27640__$1);

return statearr_27660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27657__$1,(2),inst_27641);
} else {
if((state_val_27658 === (2))){
var inst_27643 = (state_27657[(8)]);
var inst_27643__$1 = (state_27657[(2)]);
var state_27657__$1 = (function (){var statearr_27661 = state_27657;
(statearr_27661[(8)] = inst_27643__$1);

return statearr_27661;
})();
if(cljs.core.truth_(inst_27643__$1)){
var statearr_27662_27901 = state_27657__$1;
(statearr_27662_27901[(1)] = (3));

} else {
var statearr_27663_27902 = state_27657__$1;
(statearr_27663_27902[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (3))){
var inst_27643 = (state_27657[(8)]);
var inst_27645 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_27646 = [true,inst_27643];
var inst_27647 = cljs.core.PersistentHashMap.fromArrays(inst_27645,inst_27646);
var inst_27648 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_27647) : callback.call(null,inst_27647));
var state_27657__$1 = state_27657;
var statearr_27682_27903 = state_27657__$1;
(statearr_27682_27903[(2)] = inst_27648);

(statearr_27682_27903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (4))){
var inst_27640 = (state_27657[(7)]);
var inst_27643 = (state_27657[(8)]);
var inst_27650 = (function (){var k = inst_27640;
var cached = inst_27643;
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
var inst_27651 = app.worker_pool.submit_job_BANG_(data,inst_27650);
var state_27657__$1 = state_27657;
var statearr_27683_27904 = state_27657__$1;
(statearr_27683_27904[(2)] = inst_27651);

(statearr_27683_27904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (5))){
var inst_27653 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27657__$1,inst_27653);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto__ = null;
var app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto____0 = (function (){
var statearr_27688 = [null,null,null,null,null,null,null,null,null];
(statearr_27688[(0)] = app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto__);

(statearr_27688[(1)] = (1));

return statearr_27688;
});
var app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto____1 = (function (state_27657){
while(true){
var ret_value__27544__auto__ = (function (){try{while(true){
var result__27545__auto__ = switch__27542__auto__(state_27657);
if(cljs.core.keyword_identical_QMARK_(result__27545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27545__auto__;
}
break;
}
}catch (e27689){var ex__27546__auto__ = e27689;
var statearr_27690_27905 = state_27657;
(statearr_27690_27905[(2)] = ex__27546__auto__);


if(cljs.core.seq((state_27657[(4)]))){
var statearr_27691_27906 = state_27657;
(statearr_27691_27906[(1)] = cljs.core.first((state_27657[(4)])));

} else {
throw ex__27546__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27907 = state_27657;
state_27657 = G__27907;
continue;
} else {
return ret_value__27544__auto__;
}
break;
}
});
app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto__ = function(state_27657){
switch(arguments.length){
case 0:
return app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto____0.call(this);
case 1:
return app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto____1.call(this,state_27657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto____0;
app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto____1;
return app$simulator$cached_submit_job_BANG__$_state_machine__27543__auto__;
})()
})();
var state__27567__auto__ = (function (){var statearr_27692 = f__27566__auto__();
(statearr_27692[(6)] = c__27565__auto__);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27567__auto__);
}));

return c__27565__auto__;
});
app.simulator.submit_simulation_jobs_BANG_ = (function app$simulator$submit_simulation_jobs_BANG_(config,all_accepted,families,results,completed,total,start_time){
app.worker_pool.clear_queue_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,(0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
var seq__27696 = cljs.core.seq(families);
var chunk__27697 = null;
var count__27698 = (0);
var i__27699 = (0);
while(true){
if((i__27699 < count__27698)){
var fam = chunk__27697.cljs$core$IIndexed$_nth$arity$2(null,i__27699);
var fam_kw_27908 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__27750_27909 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27908)));
var chunk__27751_27910 = null;
var count__27752_27911 = (0);
var i__27753_27912 = (0);
while(true){
if((i__27753_27912 < count__27752_27911)){
var vec__27765_27913 = chunk__27751_27910.cljs$core$IIndexed$_nth$arity$2(null,i__27753_27912);
var idx_27914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765_27913,(0),null);
var rec_27915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765_27913,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27915,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27914 * (7919)))], null),((function (seq__27750_27909,chunk__27751_27910,count__27752_27911,i__27753_27912,seq__27696,chunk__27697,count__27698,i__27699,vec__27765_27913,idx_27914,rec_27915,fam_kw_27908,fam){
return (function (p__27768){
var map__27769 = p__27768;
var map__27769__$1 = cljs.core.__destructure_map(map__27769);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27769__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27769__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27769__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27908,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27750_27909,chunk__27751_27910,count__27752_27911,i__27753_27912,seq__27696,chunk__27697,count__27698,i__27699,vec__27765_27913,idx_27914,rec_27915,fam_kw_27908,fam))
);


var G__27916 = seq__27750_27909;
var G__27917 = chunk__27751_27910;
var G__27918 = count__27752_27911;
var G__27919 = (i__27753_27912 + (1));
seq__27750_27909 = G__27916;
chunk__27751_27910 = G__27917;
count__27752_27911 = G__27918;
i__27753_27912 = G__27919;
continue;
} else {
var temp__5825__auto___27920 = cljs.core.seq(seq__27750_27909);
if(temp__5825__auto___27920){
var seq__27750_27921__$1 = temp__5825__auto___27920;
if(cljs.core.chunked_seq_QMARK_(seq__27750_27921__$1)){
var c__5694__auto___27922 = cljs.core.chunk_first(seq__27750_27921__$1);
var G__27923 = cljs.core.chunk_rest(seq__27750_27921__$1);
var G__27924 = c__5694__auto___27922;
var G__27925 = cljs.core.count(c__5694__auto___27922);
var G__27926 = (0);
seq__27750_27909 = G__27923;
chunk__27751_27910 = G__27924;
count__27752_27911 = G__27925;
i__27753_27912 = G__27926;
continue;
} else {
var vec__27770_27927 = cljs.core.first(seq__27750_27921__$1);
var idx_27928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27770_27927,(0),null);
var rec_27929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27770_27927,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27929,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27928 * (7919)))], null),((function (seq__27750_27909,chunk__27751_27910,count__27752_27911,i__27753_27912,seq__27696,chunk__27697,count__27698,i__27699,vec__27770_27927,idx_27928,rec_27929,seq__27750_27921__$1,temp__5825__auto___27920,fam_kw_27908,fam){
return (function (p__27773){
var map__27774 = p__27773;
var map__27774__$1 = cljs.core.__destructure_map(map__27774);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27774__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27774__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27774__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27908,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27750_27909,chunk__27751_27910,count__27752_27911,i__27753_27912,seq__27696,chunk__27697,count__27698,i__27699,vec__27770_27927,idx_27928,rec_27929,seq__27750_27921__$1,temp__5825__auto___27920,fam_kw_27908,fam))
);


var G__27930 = cljs.core.next(seq__27750_27921__$1);
var G__27931 = null;
var G__27932 = (0);
var G__27933 = (0);
seq__27750_27909 = G__27930;
chunk__27751_27910 = G__27931;
count__27752_27911 = G__27932;
i__27753_27912 = G__27933;
continue;
}
} else {
}
}
break;
}


var G__27934 = seq__27696;
var G__27935 = chunk__27697;
var G__27936 = count__27698;
var G__27937 = (i__27699 + (1));
seq__27696 = G__27934;
chunk__27697 = G__27935;
count__27698 = G__27936;
i__27699 = G__27937;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27696);
if(temp__5825__auto__){
var seq__27696__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27696__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27696__$1);
var G__27938 = cljs.core.chunk_rest(seq__27696__$1);
var G__27939 = c__5694__auto__;
var G__27940 = cljs.core.count(c__5694__auto__);
var G__27941 = (0);
seq__27696 = G__27938;
chunk__27697 = G__27939;
count__27698 = G__27940;
i__27699 = G__27941;
continue;
} else {
var fam = cljs.core.first(seq__27696__$1);
var fam_kw_27942 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam);
var seq__27775_27943 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_accepted,fam_kw_27942)));
var chunk__27776_27944 = null;
var count__27777_27945 = (0);
var i__27778_27946 = (0);
while(true){
if((i__27778_27946 < count__27777_27945)){
var vec__27801_27947 = chunk__27776_27944.cljs$core$IIndexed$_nth$arity$2(null,i__27778_27946);
var idx_27948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27947,(0),null);
var rec_27949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27947,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27949,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27948 * (7919)))], null),((function (seq__27775_27943,chunk__27776_27944,count__27777_27945,i__27778_27946,seq__27696,chunk__27697,count__27698,i__27699,vec__27801_27947,idx_27948,rec_27949,fam_kw_27942,fam,seq__27696__$1,temp__5825__auto__){
return (function (p__27804){
var map__27805 = p__27804;
var map__27805__$1 = cljs.core.__destructure_map(map__27805);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27805__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27805__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27805__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27942,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27775_27943,chunk__27776_27944,count__27777_27945,i__27778_27946,seq__27696,chunk__27697,count__27698,i__27699,vec__27801_27947,idx_27948,rec_27949,fam_kw_27942,fam,seq__27696__$1,temp__5825__auto__))
);


var G__27950 = seq__27775_27943;
var G__27951 = chunk__27776_27944;
var G__27952 = count__27777_27945;
var G__27953 = (i__27778_27946 + (1));
seq__27775_27943 = G__27950;
chunk__27776_27944 = G__27951;
count__27777_27945 = G__27952;
i__27778_27946 = G__27953;
continue;
} else {
var temp__5825__auto___27954__$1 = cljs.core.seq(seq__27775_27943);
if(temp__5825__auto___27954__$1){
var seq__27775_27955__$1 = temp__5825__auto___27954__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27775_27955__$1)){
var c__5694__auto___27956 = cljs.core.chunk_first(seq__27775_27955__$1);
var G__27957 = cljs.core.chunk_rest(seq__27775_27955__$1);
var G__27958 = c__5694__auto___27956;
var G__27959 = cljs.core.count(c__5694__auto___27956);
var G__27960 = (0);
seq__27775_27943 = G__27957;
chunk__27776_27944 = G__27958;
count__27777_27945 = G__27959;
i__27778_27946 = G__27960;
continue;
} else {
var vec__27809_27961 = cljs.core.first(seq__27775_27955__$1);
var idx_27962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27809_27961,(0),null);
var rec_27963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27809_27961,(1),null);
app.simulator.cached_submit_job_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rec","rec",-651838357),rec_27963,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459),config,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + (idx_27962 * (7919)))], null),((function (seq__27775_27943,chunk__27776_27944,count__27777_27945,i__27778_27946,seq__27696,chunk__27697,count__27698,i__27699,vec__27809_27961,idx_27962,rec_27963,seq__27775_27955__$1,temp__5825__auto___27954__$1,fam_kw_27942,fam,seq__27696__$1,temp__5825__auto__){
return (function (p__27812){
var map__27813 = p__27812;
var map__27813__$1 = cljs.core.__destructure_map(map__27813);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27813__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27813__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27813__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.deref(completed));

if(cljs.core.truth_((function (){var and__5160__auto__ = success_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return result;
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(results,cljs.core.update,fam_kw_27942,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed),total)){
app.simulator.log((""+"All simulations done in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((Date.now() - start_time) / (1000)))+"s"));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.deref(results),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113)], 0));
} else {
return null;
}
});})(seq__27775_27943,chunk__27776_27944,count__27777_27945,i__27778_27946,seq__27696,chunk__27697,count__27698,i__27699,vec__27809_27961,idx_27962,rec_27963,seq__27775_27955__$1,temp__5825__auto___27954__$1,fam_kw_27942,fam,seq__27696__$1,temp__5825__auto__))
);


var G__27964 = cljs.core.next(seq__27775_27955__$1);
var G__27965 = null;
var G__27966 = (0);
var G__27967 = (0);
seq__27775_27943 = G__27964;
chunk__27776_27944 = G__27965;
count__27777_27945 = G__27966;
i__27778_27946 = G__27967;
continue;
}
} else {
}
}
break;
}


var G__27968 = cljs.core.next(seq__27696__$1);
var G__27969 = null;
var G__27970 = (0);
var G__27971 = (0);
seq__27696 = G__27968;
chunk__27697 = G__27969;
count__27698 = G__27970;
i__27699 = G__27971;
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

var c__27565__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27566__auto__ = (function (){var switch__27542__auto__ = (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (1))){
var inst_27814 = cljs.core.async.timeout((50));
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27844__$1,(2),inst_27814);
} else {
if((state_val_27845 === (2))){
var inst_27816 = (state_27844[(2)]);
var state_27844__$1 = (function (){var statearr_27851 = state_27844;
(statearr_27851[(7)] = inst_27816);

return statearr_27851;
})();
var statearr_27852_27972 = state_27844__$1;
(statearr_27852_27972[(2)] = null);

(statearr_27852_27972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (3))){
var _ = (function (){var statearr_27853 = state_27844;
(statearr_27853[(4)] = cljs.core.cons((6),(state_27844[(4)])));

return statearr_27853;
})();
var inst_27825 = (function (){return (function (acc,fam){
app.simulator.log((""+"Running Stage 1 for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)));

var accepted = app.simulator.run_stage1_BANG_(fam,config);
app.simulator.log((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fam)+" accepted: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(accepted))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fam),accepted);
});
})();
var inst_27826 = cljs.core.PersistentHashMap.EMPTY;
var inst_27827 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_27825,inst_27826,families);
var inst_27828 = cljs.core.vals(inst_27827);
var inst_27829 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,inst_27828);
var inst_27830 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,inst_27829);
var inst_27831 = [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"completed","completed",-486056503)];
var inst_27832 = [inst_27830,(0)];
var inst_27833 = cljs.core.PersistentHashMap.fromArrays(inst_27831,inst_27832);
var inst_27834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"progress","progress",244323547),inst_27833], 0));
var inst_27835 = cljs.core.PersistentHashMap.EMPTY;
var inst_27836 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_27835);
var inst_27837 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var inst_27838 = Date.now();
var inst_27839 = app.simulator.submit_simulation_jobs_BANG_(config,inst_27827,families,inst_27836,inst_27837,inst_27830,inst_27838);
var ___$1 = (function (){var statearr_27857 = state_27844;
(statearr_27857[(4)] = cljs.core.rest((state_27844[(4)])));

return statearr_27857;
})();
var state_27844__$1 = (function (){var statearr_27858 = state_27844;
(statearr_27858[(8)] = inst_27834);

return statearr_27858;
})();
var statearr_27859_27975 = state_27844__$1;
(statearr_27859_27975[(2)] = inst_27839);

(statearr_27859_27975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (4))){
var inst_27842 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (5))){
var inst_27817 = (state_27844[(2)]);
var inst_27818 = inst_27817.message;
var inst_27819 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-message","error-message",1756021561),inst_27818], 0));
var state_27844__$1 = state_27844;
var statearr_27861_27978 = state_27844__$1;
(statearr_27861_27978[(2)] = inst_27819);

(statearr_27861_27978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (6))){
var _ = (function (){var statearr_27862 = state_27844;
(statearr_27862[(4)] = cljs.core.rest((state_27844[(4)])));

return statearr_27862;
})();
var state_27844__$1 = state_27844;
var ex27860 = (state_27844__$1[(2)]);
var statearr_27863_27980 = state_27844__$1;
(statearr_27863_27980[(5)] = ex27860);


if((ex27860 instanceof Error)){
var statearr_27864_27981 = state_27844__$1;
(statearr_27864_27981[(1)] = (5));

(statearr_27864_27981[(5)] = null);

} else {
throw ex27860;

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
var app$simulator$start_simulation_BANG__$_state_machine__27543__auto__ = null;
var app$simulator$start_simulation_BANG__$_state_machine__27543__auto____0 = (function (){
var statearr_27865 = [null,null,null,null,null,null,null,null,null];
(statearr_27865[(0)] = app$simulator$start_simulation_BANG__$_state_machine__27543__auto__);

(statearr_27865[(1)] = (1));

return statearr_27865;
});
var app$simulator$start_simulation_BANG__$_state_machine__27543__auto____1 = (function (state_27844){
while(true){
var ret_value__27544__auto__ = (function (){try{while(true){
var result__27545__auto__ = switch__27542__auto__(state_27844);
if(cljs.core.keyword_identical_QMARK_(result__27545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27545__auto__;
}
break;
}
}catch (e27866){var ex__27546__auto__ = e27866;
var statearr_27867_27990 = state_27844;
(statearr_27867_27990[(2)] = ex__27546__auto__);


if(cljs.core.seq((state_27844[(4)]))){
var statearr_27868_27991 = state_27844;
(statearr_27868_27991[(1)] = cljs.core.first((state_27844[(4)])));

} else {
throw ex__27546__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27844;
state_27844 = G__27992;
continue;
} else {
return ret_value__27544__auto__;
}
break;
}
});
app$simulator$start_simulation_BANG__$_state_machine__27543__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return app$simulator$start_simulation_BANG__$_state_machine__27543__auto____0.call(this);
case 1:
return app$simulator$start_simulation_BANG__$_state_machine__27543__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$simulator$start_simulation_BANG__$_state_machine__27543__auto__.cljs$core$IFn$_invoke$arity$0 = app$simulator$start_simulation_BANG__$_state_machine__27543__auto____0;
app$simulator$start_simulation_BANG__$_state_machine__27543__auto__.cljs$core$IFn$_invoke$arity$1 = app$simulator$start_simulation_BANG__$_state_machine__27543__auto____1;
return app$simulator$start_simulation_BANG__$_state_machine__27543__auto__;
})()
})();
var state__27567__auto__ = (function (){var statearr_27869 = f__27566__auto__();
(statearr_27869[(6)] = c__27565__auto__);

return statearr_27869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27567__auto__);
}));

return c__27565__auto__;
});
app.simulator.build_discovery_rec = (function app$simulator$build_discovery_rec(family,params){
var bat_med_arr = (function (){var G__27870 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27870) : cljs.numpy.array.call(null,G__27870));
})();
var bat_shape_arr = (function (){var G__27871 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27871) : cljs.numpy.array.call(null,G__27871));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr).item((0));
var bat_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
var rec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull")){
var gps_med_arr = (function (){var G__27872 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27872) : cljs.numpy.array.call(null,G__27872));
})();
var gps_shape_arr = (function (){var G__27873 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27873) : cljs.numpy.array.call(null,G__27873));
})();
var gps_scale = app.regal_fit.survival.weibull_scale_from_median(gps_med_arr,gps_shape_arr).item((0));
var gps_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure")){
var unc_med_arr = (function (){var G__27874 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27874) : cljs.numpy.array.call(null,G__27874));
})();
var unc_shape_arr = (function (){var G__27875 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27875) : cljs.numpy.array.call(null,G__27875));
})();
var unc_scale = app.regal_fit.survival.weibull_scale_from_median(unc_med_arr,unc_shape_arr).item((0));
var unc_shape = new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rec,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky")){
var unc_med_arr = (function (){var G__27876 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27876) : cljs.numpy.array.call(null,G__27876));
})();
var unc_shape_arr = (function (){var G__27878 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27878) : cljs.numpy.array.call(null,G__27878));
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
})(),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config)], null),(function (p__27879){
var map__27880 = p__27879;
var map__27880__$1 = cljs.core.__destructure_map(map__27880);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__28008 = (curr + step);
var G__28009 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,curr);
curr = G__28008;
acc = G__28009;
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
var combos = (function (){var iter__5649__auto__ = (function app$simulator$start_stress_test_BANG__$_iter__27883(s__27884){
return (new cljs.core.LazySeq(null,(function (){
var s__27884__$1 = s__27884;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27884__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var mos = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__27884__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function app$simulator$start_stress_test_BANG__$_iter__27883_$_iter__27885(s__27886){
return (new cljs.core.LazySeq(null,((function (s__27884__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals){
return (function (){
var s__27886__$1 = s__27886;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27886__$1);
if(temp__5825__auto____$1){
var s__27886__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27886__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27886__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27888 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27887 = (0);
while(true){
if((i__27887 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__27887);
cljs.core.chunk_append(b__27888,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null));

var G__28015 = (i__27887 + (1));
i__27887 = G__28015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27888),app$simulator$start_stress_test_BANG__$_iter__27883_$_iter__27885(cljs.core.chunk_rest(s__27886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27888),null);
}
} else {
var k = cljs.core.first(s__27886__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"RUN_STRESS_TEST",new cljs.core.Keyword(null,"mos","mos",1902052264),mos,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"seed","seed",68613327),(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config) + Math.floor((Math.random() * (100000)))),new cljs.core.Keyword(null,"config","config",994861415),config], null),app$simulator$start_stress_test_BANG__$_iter__27883_$_iter__27885(cljs.core.rest(s__27886__$2)));
}
} else {
return null;
}
break;
}
});})(s__27884__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
,null,null));
});})(s__27884__$1,mos,xs__6385__auto__,temp__5825__auto__,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(k_vals));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$simulator$start_stress_test_BANG__$_iter__27883(cljs.core.rest(s__27884__$1)));
} else {
var G__28017 = cljs.core.rest(s__27884__$1);
s__27884__$1 = G__28017;
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
var seq__27889 = cljs.core.seq(combos);
var chunk__27890 = null;
var count__27891 = (0);
var i__27892 = (0);
while(true){
if((i__27892 < count__27891)){
var combo = chunk__27890.cljs$core$IIndexed$_nth$arity$2(null,i__27892);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27889,chunk__27890,count__27891,i__27892,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27897){
var map__27898 = p__27897;
var map__27898__$1 = cljs.core.__destructure_map(map__27898);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27898__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27898__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27898__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__27889,chunk__27890,count__27891,i__27892,combo,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__28026 = seq__27889;
var G__28027 = chunk__27890;
var G__28028 = count__27891;
var G__28029 = (i__27892 + (1));
seq__27889 = G__28026;
chunk__27890 = G__28027;
count__27891 = G__28028;
i__27892 = G__28029;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27889);
if(temp__5825__auto__){
var seq__27889__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27889__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__27889__$1);
var G__28030 = cljs.core.chunk_rest(seq__27889__$1);
var G__28031 = c__5694__auto__;
var G__28032 = cljs.core.count(c__5694__auto__);
var G__28033 = (0);
seq__27889 = G__28030;
chunk__27890 = G__28031;
count__27891 = G__28032;
i__27892 = G__28033;
continue;
} else {
var combo = cljs.core.first(seq__27889__$1);
app.simulator.cached_submit_job_BANG_(combo,((function (seq__27889,chunk__27890,count__27891,i__27892,combo,seq__27889__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos){
return (function (p__27899){
var map__27900 = p__27899;
var map__27900__$1 = cljs.core.__destructure_map(map__27900);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27900__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27900__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27900__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
});})(seq__27889,chunk__27890,count__27891,i__27892,combo,seq__27889__$1,temp__5825__auto__,completed,results,start_time,main_config,stress_config,config,mos_grid_cfg,k_grid_cfg,mos_vals,k_vals,combos,total_combos))
);


var G__28039 = cljs.core.next(seq__27889__$1);
var G__28040 = null;
var G__28041 = (0);
var G__28042 = (0);
seq__27889 = G__28039;
chunk__27890 = G__28040;
count__27891 = G__28041;
i__27892 = G__28042;
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
