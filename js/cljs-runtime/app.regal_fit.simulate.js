goog.provide('app.regal_fit.simulate');
/**
 * Counts events at IA, UPD, and PR3 timepoints.
 */
app.regal_fit.simulate.count_events_at_times = (function app$regal_fit$simulate$count_events_at_times(config,enroll_times,survival_times,n_total){
var counts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n-ia","n-ia",440915214),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"n-up","n-up",1244727544),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
var n__5616__auto___29163 = n_total;
var i_29164 = (0);
while(true){
if((i_29164 < n__5616__auto___29163)){
var enroll_29165 = (enroll_times[i_29164]);
var survival_29166 = (survival_times[i_29164]);
if((survival_29166 <= Math.max((new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config) - enroll_29165),0.0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"n-ia","n-ia",440915214).cljs$core$IFn$_invoke$arity$1(counts),cljs.core.inc);
} else {
}

if((survival_29166 <= Math.max((new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config) - enroll_29165),0.0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"n-up","n-up",1244727544).cljs$core$IFn$_invoke$arity$1(counts),cljs.core.inc);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config))){
if((survival_29166 <= Math.max((new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config) - enroll_29165),0.0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282).cljs$core$IFn$_invoke$arity$1(counts),cljs.core.inc);
} else {
}
} else {
}

var G__29167 = (i_29164 + (1));
i_29164 = G__29167;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n-ia","n-ia",440915214),cljs.core.deref(new cljs.core.Keyword(null,"n-ia","n-ia",440915214).cljs$core$IFn$_invoke$arity$1(counts)),new cljs.core.Keyword(null,"n-up","n-up",1244727544),cljs.core.deref(new cljs.core.Keyword(null,"n-up","n-up",1244727544).cljs$core$IFn$_invoke$arity$1(counts)),new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282),cljs.core.deref(new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282).cljs$core$IFn$_invoke$arity$1(counts))], null);
});
/**
 * Checks if event counts are within configured tolerances.
 */
app.regal_fit.simulate.pass_events_tolerance_QMARK_ = (function app$regal_fit$simulate$pass_events_tolerance_QMARK_(config,p__29037){
var map__29038 = p__29037;
var map__29038__$1 = cljs.core.__destructure_map(map__29038);
var n_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29038__$1,new cljs.core.Keyword(null,"n-ia","n-ia",440915214));
var n_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29038__$1,new cljs.core.Keyword(null,"n-up","n-up",1244727544));
var n_pr3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29038__$1,new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282));
var keep_ia = (Math.abs((n_ia - new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(config))) <= new cljs.core.Keyword(null,"tol-ia","tol-ia",-1881927450).cljs$core$IFn$_invoke$arity$1(config));
var keep_up = (Math.abs((n_up - new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config))) <= new cljs.core.Keyword(null,"tol-upd","tol-upd",1256937940).cljs$core$IFn$_invoke$arity$1(config));
var increment_ia_up = (n_up - n_ia);
var target_increment = (new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config) - new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(config));
var diff_increment = Math.abs((increment_ia_up - target_increment));
var pass_pr3 = ((cljs.core.not(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config)))?true:(((Math.abs((n_pr3 - new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801).cljs$core$IFn$_invoke$arity$1(config))) <= new cljs.core.Keyword(null,"tol-pr3","tol-pr3",-858714798).cljs$core$IFn$_invoke$arity$1(config))) && ((Math.abs(((n_pr3 - n_up) - (new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801).cljs$core$IFn$_invoke$arity$1(config) - new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config)))) <= new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216).cljs$core$IFn$_invoke$arity$1(config)))));
return ((keep_ia) && (((keep_up) && ((((diff_increment <= new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879).cljs$core$IFn$_invoke$arity$1(config))) && (pass_pr3))))));
});
/**
 * Extracts data for interim analysis.
 */
app.regal_fit.simulate.interim_analysis_data = (function app$regal_fit$simulate$interim_analysis_data(config,enroll_times,survival_times,arms_array,n_total){
var time_ia = (new Float64Array(n_total));
var event_ia = (new Int32Array(n_total));
var alive_bat = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var alive_gps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var n__5616__auto___29168 = n_total;
var i_29169 = (0);
while(true){
if((i_29169 < n__5616__auto___29168)){
var fu_ia_29170 = Math.max((new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config) - (enroll_times[i_29169])),0.0);
var fu_up_29171 = Math.max((new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config) - (enroll_times[i_29169])),0.0);
var survival_29172 = (survival_times[i_29169]);
var arm_29173 = (arms_array[i_29169]);
(time_ia[i_29169] = Math.min(survival_29172,fu_ia_29170));

(event_ia[i_29169] = (((survival_29172 <= fu_ia_29170))?(1):(0)));

if((survival_29172 > fu_up_29171)){
if((arm_29173 === (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(alive_bat,cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(alive_gps,cljs.core.inc);
}
} else {
}

var G__29175 = (i_29169 + (1));
i_29169 = G__29175;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318),time_ia,new cljs.core.Keyword(null,"event-ia","event-ia",-188145433),event_ia,new cljs.core.Keyword(null,"alive-bat","alive-bat",-575070135),cljs.core.deref(alive_bat),new cljs.core.Keyword(null,"alive-gps","alive-gps",-1734044909),cljs.core.deref(alive_gps)], null);
});
/**
 * Performs log-rank analysis for the interim analysis (IA).
 */
app.regal_fit.simulate.analyze_interim = (function app$regal_fit$simulate$analyze_interim(config,enroll_times,survival_times,arms_array,n_total){
var map__29039 = app.regal_fit.simulate.interim_analysis_data(config,enroll_times,survival_times,arms_array,n_total);
var map__29039__$1 = cljs.core.__destructure_map(map__29039);
var time_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318));
var event_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"event-ia","event-ia",-188145433));
var alive_bat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"alive-bat","alive-bat",-575070135));
var alive_gps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"alive-gps","alive-gps",-1734044909));
var vec__29040 = app.regal_fit.stats.logrank_z((cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(time_ia) : cljs.numpy.array.call(null,time_ia)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(event_ia) : cljs.numpy.array.call(null,event_ia)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(arms_array) : cljs.numpy.array.call(null,arms_array)));
var z_ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29040,(0),null);
var hr_ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29040,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-ia","z-ia",-1345120916),z_ia,new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309),hr_ia,new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318),time_ia,new cljs.core.Keyword(null,"ev-ia","ev-ia",1539100546),event_ia,new cljs.core.Keyword(null,"alive-bat","alive-bat",-575070135),alive_bat,new cljs.core.Keyword(null,"alive-gps","alive-gps",-1734044909),alive_gps], null);
});
/**
 * Checks interim results against futility and efficacy gates.
 */
app.regal_fit.simulate.pass_interim_gates_QMARK_ = (function app$regal_fit$simulate$pass_interim_gates_QMARK_(config,p__29043){
var map__29044 = p__29043;
var map__29044__$1 = cljs.core.__destructure_map(map__29044);
var hr_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309));
var time_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318));
var ev_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29044__$1,new cljs.core.Keyword(null,"ev-ia","ev-ia",1539100546));
var time_nd = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(time_ia) : cljs.numpy.array.call(null,time_ia));
var ev_nd = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(ev_ia) : cljs.numpy.array.call(null,ev_ia));
var and__5023__auto__ = (hr_ia < new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522).cljs$core$IFn$_invoke$arity$1(config));
if(and__5023__auto__){
var and__5023__auto____$1 = (hr_ia > new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202).cljs$core$IFn$_invoke$arity$1(config));
if(and__5023__auto____$1){
var and__5023__auto____$2 = (((new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config) > (0)))?(app.regal_fit.stats.km_survival_at_time(time_nd,ev_nd,new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config)) > 0.5):true);
if(and__5023__auto____$2){
if((new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298).cljs$core$IFn$_invoke$arity$1(config) > (0))){
var median_fu = (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(time_nd) : cljs.numpy.median.call(null,time_nd));
return (Math.abs((median_fu - new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298).cljs$core$IFn$_invoke$arity$1(config))) <= new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134).cljs$core$IFn$_invoke$arity$1(config));
} else {
return true;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
/**
 * Calculates survival and event status at T80.
 */
app.regal_fit.simulate.calculate_final_times = (function app$regal_fit$simulate$calculate_final_times(t80,n_total,enroll_times,survival_times){
var time_fin = (new Float64Array(n_total));
var ev_fin = (new Int32Array(n_total));
var n__5616__auto___29176 = n_total;
var i_29177 = (0);
while(true){
if((i_29177 < n__5616__auto___29176)){
var f_29178 = Math.max((t80 - (enroll_times[i_29177])),0.0);
var s_29179 = (survival_times[i_29177]);
(time_fin[i_29177] = Math.min(s_29179,f_29178));

(ev_fin[i_29177] = (((s_29179 <= f_29178))?(1):(0)));

var G__29180 = (i_29177 + (1));
i_29177 = G__29180;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time-fin","time-fin",-811075357),time_fin,new cljs.core.Keyword(null,"ev-fin","ev-fin",675117895),ev_fin], null);
});
/**
 * Performs final analysis once target events are reached.
 */
app.regal_fit.simulate.analyze_final = (function app$regal_fit$simulate$analyze_final(config,enroll_times,survival_times,arms_array,n_total){
var valid_deaths = (new Array());
var n__5616__auto___29181 = n_total;
var i_29182 = (0);
while(true){
if((i_29182 < n__5616__auto___29181)){
var d_29183 = ((enroll_times[i_29182]) + (survival_times[i_29182]));
if(cljs.core.truth_(Number.isFinite(d_29183))){
valid_deaths.push(d_29183);
} else {
}

var G__29184 = (i_29182 + (1));
i_29182 = G__29184;
continue;
} else {
}
break;
}

valid_deaths.sort((function (a,b){
return (a - b);
}));

var reached = (valid_deaths.length >= new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316).cljs$core$IFn$_invoke$arity$1(config));
var t80 = ((reached)?(valid_deaths[(new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316).cljs$core$IFn$_invoke$arity$1(config) - (1))]):NaN);
var today = (cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5023__auto__)){
return reached;
} else {
return and__5023__auto__;
}
})())?(t80 >= ((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"t-now","t-now",-1553436397).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (63);
}
})() - new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086).cljs$core$IFn$_invoke$arity$1(config))):true);
if((!(((reached) && (today))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reached","reached",826384279),false,new cljs.core.Keyword(null,"t80","t80",-1773986369),t80,new cljs.core.Keyword(null,"hr-final","hr-final",226930306),NaN,new cljs.core.Keyword(null,"z-final","z-final",1830128043),NaN], null);
} else {
var map__29048 = app.regal_fit.simulate.calculate_final_times(t80,n_total,enroll_times,survival_times);
var map__29048__$1 = cljs.core.__destructure_map(map__29048);
var time_fin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29048__$1,new cljs.core.Keyword(null,"time-fin","time-fin",-811075357));
var ev_fin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29048__$1,new cljs.core.Keyword(null,"ev-fin","ev-fin",675117895));
var vec__29050 = app.regal_fit.stats.logrank_z((cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(time_fin) : cljs.numpy.array.call(null,time_fin)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(ev_fin) : cljs.numpy.array.call(null,ev_fin)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(arms_array) : cljs.numpy.array.call(null,arms_array)));
var z_fin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(0),null);
var hr_fin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29050,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reached","reached",826384279),true,new cljs.core.Keyword(null,"t80","t80",-1773986369),t80,new cljs.core.Keyword(null,"hr-final","hr-final",226930306),hr_fin,new cljs.core.Keyword(null,"z-final","z-final",1830128043),z_fin], null);
}
});
/**
 * Computes all statistics for a successfully screened trial.
 */
app.regal_fit.simulate.calculate_trial_stats = (function app$regal_fit$simulate$calculate_trial_stats(config,enroll_times,survival_times,arms_array,n_total){
var counts = app.regal_fit.simulate.count_events_at_times(config,enroll_times,survival_times,n_total);
if(app.regal_fit.simulate.pass_events_tolerance_QMARK_(config,counts)){
var interim_res = app.regal_fit.simulate.analyze_interim(config,enroll_times,survival_times,arms_array,n_total);
if(app.regal_fit.simulate.pass_interim_gates_QMARK_(config,interim_res)){
var final_res = app.regal_fit.simulate.analyze_final(config,enroll_times,survival_times,arms_array,n_total);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hr-final","hr-final",226930306),new cljs.core.Keyword(null,"z-final","z-final",1830128043),new cljs.core.Keyword(null,"z-ia","z-ia",-1345120916),new cljs.core.Keyword(null,"reached-80","reached-80",356081933),new cljs.core.Keyword(null,"gps-alive-upd","gps-alive-upd",-597652562),new cljs.core.Keyword(null,"bat-alive-upd","bat-alive-upd",-948525808),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339),new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673),new cljs.core.Keyword(null,"t80","t80",-1773986369)],[new cljs.core.Keyword(null,"hr-final","hr-final",226930306).cljs$core$IFn$_invoke$arity$1(final_res),new cljs.core.Keyword(null,"z-final","z-final",1830128043).cljs$core$IFn$_invoke$arity$1(final_res),new cljs.core.Keyword(null,"z-ia","z-ia",-1345120916).cljs$core$IFn$_invoke$arity$1(interim_res),new cljs.core.Keyword(null,"reached","reached",826384279).cljs$core$IFn$_invoke$arity$1(final_res),new cljs.core.Keyword(null,"alive-gps","alive-gps",-1734044909).cljs$core$IFn$_invoke$arity$1(interim_res),new cljs.core.Keyword(null,"alive-bat","alive-bat",-575070135).cljs$core$IFn$_invoke$arity$1(interim_res),new cljs.core.Keyword(null,"n-ia","n-ia",440915214).cljs$core$IFn$_invoke$arity$1(counts),new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309).cljs$core$IFn$_invoke$arity$1(interim_res),new cljs.core.Keyword(null,"n-up","n-up",1244727544).cljs$core$IFn$_invoke$arity$1(counts),new cljs.core.Keyword(null,"t80","t80",-1773986369).cljs$core$IFn$_invoke$arity$1(final_res)]),(cljs.core.truth_(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801),new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282).cljs$core$IFn$_invoke$arity$1(counts)], null):null)], 0));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Assigns arms to subjects based on assignment order.
 */
app.regal_fit.simulate.assign_arms = (function app$regal_fit$simulate$assign_arms(arms_array,assignment_order,n_per_arm){
var n__5616__auto__ = cljs.core.count(assignment_order);
var i = (0);
while(true){
if((i < n__5616__auto__)){
if((i < n_per_arm)){
(arms_array[(assignment_order[i])] = (1));
} else {
}

var G__29188 = (i + (1));
i = G__29188;
continue;
} else {
return null;
}
break;
}
});
/**
 * Fills survival times based on arm assignment.
 */
app.regal_fit.simulate.populate_survival_times = (function app$regal_fit$simulate$populate_survival_times(n_total,arms,bat_draws,gps_draws,survival){
var i = (0);
var b = (0);
var g = (0);
while(true){
if((i < n_total)){
if(((arms[i]) === (0))){
(survival[i] = (bat_draws[b]));

var G__29189 = (i + (1));
var G__29190 = (b + (1));
var G__29191 = g;
i = G__29189;
b = G__29190;
g = G__29191;
continue;
} else {
(survival[i] = (gps_draws[g]));

var G__29192 = (i + (1));
var G__29193 = b;
var G__29194 = (g + (1));
i = G__29192;
b = G__29193;
g = G__29194;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Generates enrollment times, arm assignments, and survival times for one trial.
 */
app.regal_fit.simulate.generate_trial_data = (function app$regal_fit$simulate$generate_trial_data(record,config,random_gen,n_total,n_per_arm,bands){
var enroll = (new Float64Array(n_total));
var arms = (new Int8Array(n_total));
var survival = (new Float64Array(n_total));
var raw_enroll = (new Array());
var seq__29056_29195 = cljs.core.seq(bands);
var chunk__29057_29196 = null;
var count__29058_29197 = (0);
var i__29059_29198 = (0);
while(true){
if((i__29059_29198 < count__29058_29197)){
var vec__29103_29199 = chunk__29057_29196.cljs$core$IIndexed$_nth$arity$2(null,i__29059_29198);
var lo_29200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29103_29199,(0),null);
var hi_29201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29103_29199,(1),null);
var n_29202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29103_29199,(2),null);
if((n_29202 > (0))){
var seq__29107_29203 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_29200,hi_29201,n_29202)));
var chunk__29108_29204 = null;
var count__29109_29205 = (0);
var i__29110_29206 = (0);
while(true){
if((i__29110_29206 < count__29109_29205)){
var r_29207 = chunk__29108_29204.cljs$core$IIndexed$_nth$arity$2(null,i__29110_29206);
raw_enroll.push(r_29207);


var G__29208 = seq__29107_29203;
var G__29209 = chunk__29108_29204;
var G__29210 = count__29109_29205;
var G__29211 = (i__29110_29206 + (1));
seq__29107_29203 = G__29208;
chunk__29108_29204 = G__29209;
count__29109_29205 = G__29210;
i__29110_29206 = G__29211;
continue;
} else {
var temp__5825__auto___29212 = cljs.core.seq(seq__29107_29203);
if(temp__5825__auto___29212){
var seq__29107_29213__$1 = temp__5825__auto___29212;
if(cljs.core.chunked_seq_QMARK_(seq__29107_29213__$1)){
var c__5548__auto___29214 = cljs.core.chunk_first(seq__29107_29213__$1);
var G__29215 = cljs.core.chunk_rest(seq__29107_29213__$1);
var G__29216 = c__5548__auto___29214;
var G__29217 = cljs.core.count(c__5548__auto___29214);
var G__29218 = (0);
seq__29107_29203 = G__29215;
chunk__29108_29204 = G__29216;
count__29109_29205 = G__29217;
i__29110_29206 = G__29218;
continue;
} else {
var r_29219 = cljs.core.first(seq__29107_29213__$1);
raw_enroll.push(r_29219);


var G__29220 = cljs.core.next(seq__29107_29213__$1);
var G__29221 = null;
var G__29222 = (0);
var G__29223 = (0);
seq__29107_29203 = G__29220;
chunk__29108_29204 = G__29221;
count__29109_29205 = G__29222;
i__29110_29206 = G__29223;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__29224 = seq__29056_29195;
var G__29225 = chunk__29057_29196;
var G__29226 = count__29058_29197;
var G__29227 = (i__29059_29198 + (1));
seq__29056_29195 = G__29224;
chunk__29057_29196 = G__29225;
count__29058_29197 = G__29226;
i__29059_29198 = G__29227;
continue;
} else {
var temp__5825__auto___29228 = cljs.core.seq(seq__29056_29195);
if(temp__5825__auto___29228){
var seq__29056_29229__$1 = temp__5825__auto___29228;
if(cljs.core.chunked_seq_QMARK_(seq__29056_29229__$1)){
var c__5548__auto___29230 = cljs.core.chunk_first(seq__29056_29229__$1);
var G__29231 = cljs.core.chunk_rest(seq__29056_29229__$1);
var G__29232 = c__5548__auto___29230;
var G__29233 = cljs.core.count(c__5548__auto___29230);
var G__29234 = (0);
seq__29056_29195 = G__29231;
chunk__29057_29196 = G__29232;
count__29058_29197 = G__29233;
i__29059_29198 = G__29234;
continue;
} else {
var vec__29117_29235 = cljs.core.first(seq__29056_29229__$1);
var lo_29236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29117_29235,(0),null);
var hi_29237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29117_29235,(1),null);
var n_29238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29117_29235,(2),null);
if((n_29238 > (0))){
var seq__29120_29239 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_29236,hi_29237,n_29238)));
var chunk__29121_29240 = null;
var count__29122_29241 = (0);
var i__29123_29242 = (0);
while(true){
if((i__29123_29242 < count__29122_29241)){
var r_29243 = chunk__29121_29240.cljs$core$IIndexed$_nth$arity$2(null,i__29123_29242);
raw_enroll.push(r_29243);


var G__29244 = seq__29120_29239;
var G__29245 = chunk__29121_29240;
var G__29246 = count__29122_29241;
var G__29247 = (i__29123_29242 + (1));
seq__29120_29239 = G__29244;
chunk__29121_29240 = G__29245;
count__29122_29241 = G__29246;
i__29123_29242 = G__29247;
continue;
} else {
var temp__5825__auto___29248__$1 = cljs.core.seq(seq__29120_29239);
if(temp__5825__auto___29248__$1){
var seq__29120_29249__$1 = temp__5825__auto___29248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29120_29249__$1)){
var c__5548__auto___29250 = cljs.core.chunk_first(seq__29120_29249__$1);
var G__29251 = cljs.core.chunk_rest(seq__29120_29249__$1);
var G__29252 = c__5548__auto___29250;
var G__29253 = cljs.core.count(c__5548__auto___29250);
var G__29254 = (0);
seq__29120_29239 = G__29251;
chunk__29121_29240 = G__29252;
count__29122_29241 = G__29253;
i__29123_29242 = G__29254;
continue;
} else {
var r_29255 = cljs.core.first(seq__29120_29249__$1);
raw_enroll.push(r_29255);


var G__29256 = cljs.core.next(seq__29120_29249__$1);
var G__29257 = null;
var G__29258 = (0);
var G__29259 = (0);
seq__29120_29239 = G__29256;
chunk__29121_29240 = G__29257;
count__29122_29241 = G__29258;
i__29123_29242 = G__29259;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__29260 = cljs.core.next(seq__29056_29229__$1);
var G__29261 = null;
var G__29262 = (0);
var G__29263 = (0);
seq__29056_29195 = G__29260;
chunk__29057_29196 = G__29261;
count__29058_29197 = G__29262;
i__29059_29198 = G__29263;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort((function (a,b){
return (a - b);
}));

var assignment_order_29264 = cljs.numpy.nd_to_array((function (){var G__29124 = cljs.numpy_random.random(random_gen,n_total);
return (cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1(G__29124) : cljs.numpy.argsort.call(null,G__29124));
})());
var n__5616__auto___29265 = n_total;
var i_29266 = (0);
while(true){
if((i_29266 < n__5616__auto___29265)){
(enroll[i_29266] = (raw_enroll[i_29266]));

var G__29268 = (i_29266 + (1));
i_29266 = G__29268;
continue;
} else {
}
break;
}

app.regal_fit.simulate.assign_arms(arms,assignment_order_29264,n_per_arm);

var num_gps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,arms);
var num_bat = (n_total - num_gps);
var bat_draws = cljs.numpy.nd_to_array(app.regal_fit.random.draw_bat_times(record,num_bat,random_gen));
var gps_draws = cljs.numpy.nd_to_array(app.regal_fit.random.draw_gps_times(record,num_gps,random_gen));
app.regal_fit.simulate.populate_survival_times(n_total,arms,bat_draws,gps_draws,survival);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enroll-times","enroll-times",-796557014),enroll,new cljs.core.Keyword(null,"arms-array","arms-array",-819399838),arms,new cljs.core.Keyword(null,"survival-times","survival-times",1104744121),survival], null);
});
/**
 * Simulates a single trial and returns whether it passed screening and its stats.
 */
app.regal_fit.simulate.simulate_one_trial = (function app$regal_fit$simulate$simulate_one_trial(record,config,random_gen,n_total,n_per_arm,bands){
var map__29128 = app.regal_fit.simulate.generate_trial_data(record,config,random_gen,n_total,n_per_arm,bands);
var map__29128__$1 = cljs.core.__destructure_map(map__29128);
var enroll_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,new cljs.core.Keyword(null,"enroll-times","enroll-times",-796557014));
var arms_array = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,new cljs.core.Keyword(null,"arms-array","arms-array",-819399838));
var survival_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29128__$1,new cljs.core.Keyword(null,"survival-times","survival-times",1104744121));
var counts = app.regal_fit.simulate.count_events_at_times(config,enroll_times,survival_times,n_total);
var passed_screening = app.regal_fit.simulate.pass_events_tolerance_QMARK_(config,counts);
var stats = ((passed_screening)?app.regal_fit.simulate.calculate_trial_stats(config,enroll_times,survival_times,arms_array,n_total):null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"passed-screening","passed-screening",-970442882),passed_screening,new cljs.core.Keyword(null,"stats","stats",-85643011),stats], null);
});
/**
 * Runs a chunk of simulations for a single combination.
 */
app.regal_fit.simulate.run_sim_chunk = (function app$regal_fit$simulate$run_sim_chunk(record,config,n_sims,random_gen){
var results = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return app.regal_fit.simulate.simulate_one_trial(record,config,random_gen,new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(config));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_sims));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stats","stats",-85643011),results),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29129_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"passed-screening","passed-screening",-970442882).cljs$core$IFn$_invoke$arity$1(p1__29129_SHARP_))){
return (1);
} else {
return (0);
}
}),results))], null);
});
/**
 * Helper to build the aggregate statistics map.
 */
app.regal_fit.simulate.build_aggregate_map = (function app$regal_fit$simulate$build_aggregate_map(all_stats,num_attempts,num_pass_events,record,to_nd,finite_t80,hr_final_arr,num_success,num_accepted){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([record,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"p-hr-below-threshold","p-hr-below-threshold",-221516288),new cljs.core.Keyword(null,"median-bat-alive-upd","median-bat-alive-upd",-1793961887),new cljs.core.Keyword(null,"n-accepted","n-accepted",-1920065151),new cljs.core.Keyword(null,"p-no-readout","p-no-readout",1519656388),new cljs.core.Keyword(null,"p-success-overall","p-success-overall",-477143706),new cljs.core.Keyword(null,"median-hr-ia","median-hr-ia",-584537370),new cljs.core.Keyword(null,"n-pass-futility","n-pass-futility",-1718782803),new cljs.core.Keyword(null,"median-gps-alive-upd","median-gps-alive-upd",1199822000),new cljs.core.Keyword(null,"median-z-ia","median-z-ia",276344881),new cljs.core.Keyword(null,"n-pass-events","n-pass-events",1361985171),new cljs.core.Keyword(null,"median-t80-months","median-t80-months",-1483725195),new cljs.core.Keyword(null,"median-hr-final","median-hr-final",809702905),new cljs.core.Keyword(null,"acceptance-rate","acceptance-rate",653141244),new cljs.core.Keyword(null,"p-reach80","p-reach80",-1229152388),new cljs.core.Keyword(null,"n-attempts","n-attempts",-2026068801)],[((cljs.core.empty_QMARK_(hr_final_arr))?NaN:(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29130_SHARP_){
return (p1__29130_SHARP_ < 0.636);
}),hr_final_arr)) / cljs.core.count(hr_final_arr))),(function (){var G__29136 = (function (){var G__29137 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat-alive-upd","bat-alive-upd",-948525808),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__29137) : to_nd.call(null,G__29137));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__29136) : cljs.numpy.median.call(null,G__29136));
})(),num_accepted,(1.0 - (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reached-80","reached-80",356081933),all_stats)) / num_accepted)),(num_success / num_accepted),(function (){var G__29138 = (function (){var G__29139 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__29139) : to_nd.call(null,G__29139));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__29138) : cljs.numpy.median.call(null,G__29138));
})(),num_accepted,(function (){var G__29140 = (function (){var G__29142 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gps-alive-upd","gps-alive-upd",-597652562),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__29142) : to_nd.call(null,G__29142));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__29140) : cljs.numpy.median.call(null,G__29140));
})(),(function (){var G__29143 = (function (){var G__29144 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z-ia","z-ia",-1345120916),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__29144) : to_nd.call(null,G__29144));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__29143) : cljs.numpy.median.call(null,G__29143));
})(),num_pass_events,((cljs.core.empty_QMARK_(finite_t80))?NaN:(function (){var G__29145 = (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(finite_t80) : to_nd.call(null,finite_t80));
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__29145) : cljs.numpy.median.call(null,G__29145));
})()),((cljs.core.empty_QMARK_(hr_final_arr))?NaN:(function (){var G__29146 = (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(hr_final_arr) : to_nd.call(null,hr_final_arr));
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__29146) : cljs.numpy.median.call(null,G__29146));
})()),(num_accepted / num_attempts),(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reached-80","reached-80",356081933),all_stats)) / num_accepted),num_attempts])], 0));
});
/**
 * Aggregates statistics across all accepted simulations for a combo.
 */
app.regal_fit.simulate.summarize_results = (function app$regal_fit$simulate$summarize_results(all_stats,num_attempts,num_pass_events,record){
var num_accepted = cljs.core.count(all_stats);
var finite_t80 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29151_SHARP_){
return cljs.core.not(Number.isNaN(p1__29151_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"t80","t80",-1773986369),all_stats));
var hr_final_arr = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29152_SHARP_){
return cljs.core.not(Number.isNaN(p1__29152_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hr-final","hr-final",226930306),all_stats));
var num_success = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29153_SHARP_){
var and__5023__auto__ = new cljs.core.Keyword(null,"reached-80","reached-80",356081933).cljs$core$IFn$_invoke$arity$1(p1__29153_SHARP_);
if(cljs.core.truth_(and__5023__auto__)){
return (new cljs.core.Keyword(null,"hr-final","hr-final",226930306).cljs$core$IFn$_invoke$arity$1(p1__29153_SHARP_) < 0.636);
} else {
return and__5023__auto__;
}
}),all_stats));
var to_nd = (function (coll){
var G__29154 = cljs.core.to_array(coll);
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__29154) : cljs.numpy.array.call(null,G__29154));
});
return app.regal_fit.simulate.build_aggregate_map(all_stats,num_attempts,num_pass_events,record,to_nd,finite_t80,hr_final_arr,num_success,num_accepted);
});
/**
 * Simulates multiple trials for a single scenario combination.
 */
app.regal_fit.simulate.simulate_one_combo = (function app$regal_fit$simulate$simulate_one_combo(p__29155){
var map__29156 = p__29155;
var map__29156__$1 = cljs.core.__destructure_map(map__29156);
var rec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29156__$1,new cljs.core.Keyword(null,"rec","rec",-651838357));
var cfg_dict = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29156__$1,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29156__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29156__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var random_gen = cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1(seed);
var config = cfg_dict;
var n_screen = Math.min(new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219).cljs$core$IFn$_invoke$arity$1(config),n_sims);
var vec__29157 = app.regal_fit.simulate.run_sim_chunk(rec,config,n_screen,random_gen);
var screen_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(0),null);
var screen_pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(1),null);
if((cljs.core.count(screen_stats) >= new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113).cljs$core$IFn$_invoke$arity$1(config))){
var remaining = (n_sims - n_screen);
var vec__29160 = (((remaining > (0)))?app.regal_fit.simulate.run_sim_chunk(rec,config,remaining,random_gen):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null));
var more_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(0),null);
var more_pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(1),null);
var all_stats = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(screen_stats,more_stats);
if(cljs.core.empty_QMARK_(all_stats)){
return null;
} else {
return app.regal_fit.simulate.summarize_results(all_stats,n_sims,(screen_pass + more_pass),rec);
}
} else {
return null;
}
});

//# sourceMappingURL=app.regal_fit.simulate.js.map
