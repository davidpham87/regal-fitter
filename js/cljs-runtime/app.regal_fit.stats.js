goog.provide('app.regal_fit.stats');
/**
 * Computes number at risk in experimental and control groups at each time point.
 */
app.regal_fit.stats.compute_risk_sets = (function app$regal_fit$stats$compute_risk_sets(groups_array){
var is_experimental_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28899_SHARP_){
if((p1__28899_SHARP_ === (1))){
return 1.0;
} else {
return 0.0;
}
}),groups_array);
var reverse_accumulation = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accumulator,is_exp){
var prev = (function (){var or__5025__auto__ = cljs.core.last(accumulator);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sum-exp","sum-exp",-2061498251),0.0,new cljs.core.Keyword(null,"sum-control","sum-control",-918014575),0.0], null);
}
})();
var curr_exp = (new cljs.core.Keyword(null,"sum-exp","sum-exp",-2061498251).cljs$core$IFn$_invoke$arity$1(prev) + (((is_exp === 1.0))?1.0:0.0));
var curr_control = (new cljs.core.Keyword(null,"sum-control","sum-control",-918014575).cljs$core$IFn$_invoke$arity$1(prev) + (((is_exp === 1.0))?0.0:1.0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accumulator,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sum-exp","sum-exp",-2061498251),curr_exp,new cljs.core.Keyword(null,"sum-control","sum-control",-918014575),curr_control], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse(is_experimental_seq));
var risk_seq = cljs.core.reverse(reverse_accumulation);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sum-exp","sum-exp",-2061498251),risk_seq)),cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sum-control","sum-control",-918014575),risk_seq)),cljs.core.to_array(is_experimental_seq)], null);
});
/**
 * Updates logrank statistics for a set of events at the same time point.
 */
app.regal_fit.stats.update_logrank_stats = (function app$regal_fit$stats$update_logrank_stats(p__28902,index_list,n_exp_arr,n_control_arr,is_exp_arr){
var map__28903 = p__28902;
var map__28903__$1 = cljs.core.__destructure_map(map__28903);
var u = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"v","v",21465059));
var log_hr_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"log-hr-num","log-hr-num",-863400848));
var log_hr_den = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"log-hr-den","log-hr-den",-376003383));
var first_idx = cljs.core.first(index_list);
var n_exp = (n_exp_arr[first_idx]);
var n_control = (n_control_arr[first_idx]);
var n_total = (n_exp + n_control);
if((n_total < (2))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"u","u",-1156634785),u,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"log-hr-num","log-hr-num",-863400848),log_hr_num,new cljs.core.Keyword(null,"log-hr-den","log-hr-den",-376003383),log_hr_den], null);
} else {
var events_exp = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28901_SHARP_){
return (is_exp_arr[p1__28901_SHARP_]);
}),index_list));
var events_total = cljs.core.count(index_list);
var expected_exp = ((n_exp * events_total) / n_total);
var v_increment = ((((n_control * n_exp) * events_total) * (n_total - events_total)) / ((n_total * n_total) * (n_total - (1))));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"u","u",-1156634785),(u + (events_exp - expected_exp)),new cljs.core.Keyword(null,"v","v",21465059),(((n_total > (1)))?(v + v_increment):v),new cljs.core.Keyword(null,"log-hr-num","log-hr-num",-863400848),(log_hr_num + (events_exp - expected_exp)),new cljs.core.Keyword(null,"log-hr-den","log-hr-den",-376003383),(log_hr_den + (expected_exp * (n_control / n_total)))], null);
}
});
/**
 * Computes the log-rank test Z-score and hazard ratio.
 */
app.regal_fit.stats.logrank_z = (function app$regal_fit$stats$logrank_z(times,events,groups){
if(((cljs.numpy.sum.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$1(events) : cljs.numpy.sum.call(null,events)) < (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null);
} else {
var order = (cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1(times) : cljs.numpy.argsort.call(null,times));
var times_arr = times.take(order).toArray();
var events_arr = events.take(order).toArray();
var groups_arr = groups.take(order).toArray();
var vec__28912 = app.regal_fit.stats.compute_risk_sets(groups_arr);
var n_exp_arr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(0),null);
var n_control_arr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(1),null);
var is_exp_arr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28912,(2),null);
var event_indices = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_(e)){
return i;
} else {
return null;
}
}),events_arr);
if(cljs.core.empty_QMARK_(event_indices)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null);
} else {
var grouped_indices = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__28904_SHARP_){
return (times_arr[p1__28904_SHARP_]);
}),event_indices);
var initial_stats = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"u","u",-1156634785),0.0,new cljs.core.Keyword(null,"v","v",21465059),0.0,new cljs.core.Keyword(null,"log-hr-num","log-hr-num",-863400848),0.0,new cljs.core.Keyword(null,"log-hr-den","log-hr-den",-376003383),0.0], null);
var results = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28905_SHARP_,p2__28906_SHARP_){
return app.regal_fit.stats.update_logrank_stats(p1__28905_SHARP_,p2__28906_SHARP_,n_exp_arr,n_control_arr,is_exp_arr);
}),initial_stats,grouped_indices);
if((new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(results) <= (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- new cljs.core.Keyword(null,"u","u",-1156634785).cljs$core$IFn$_invoke$arity$1(results)) / Math.sqrt(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(results))),(((new cljs.core.Keyword(null,"log-hr-den","log-hr-den",-376003383).cljs$core$IFn$_invoke$arity$1(results) > (0)))?Math.exp((new cljs.core.Keyword(null,"log-hr-num","log-hr-num",-863400848).cljs$core$IFn$_invoke$arity$1(results) / new cljs.core.Keyword(null,"log-hr-den","log-hr-den",-376003383).cljs$core$IFn$_invoke$arity$1(results))):1.0)], null);
}
}
}
});
/**
 * Calculates the Kaplan-Meier survival probability estimate at a specific time T.
 */
app.regal_fit.stats.km_survival_at_time = (function app$regal_fit$stats$km_survival_at_time(time_observed,event_flag,target_time){
var n_subjects = time_observed.size;
if((n_subjects === (0))){
return 1.0;
} else {
var order = (cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1(time_observed) : cljs.numpy.argsort.call(null,time_observed));
var times_arr = time_observed.take(order).toArray();
var events_arr = event_flag.take(order).toArray();
var relevant_events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28920){
var vec__28921 = p__28920;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(2),null);
var and__5023__auto__ = ev;
if(cljs.core.truth_(and__5023__auto__)){
return (t <= target_time);
} else {
return and__5023__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,times_arr,events_arr,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_subjects)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (multiplier,p__28924){
var vec__28925 = p__28924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(1),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(2),null);
return (multiplier * (1.0 - (1.0 / (n_subjects - i))));
}),1.0,relevant_events);
}
});

//# sourceMappingURL=app.regal_fit.stats.js.map
