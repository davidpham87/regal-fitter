goog.provide('app.regal_fit.simulate');
/**
 * Counts events at IA, UPD, and PR3 timepoints.
 */
app.regal_fit.simulate.count_events_at_times = (function app$regal_fit$simulate$count_events_at_times(config,enroll_times,survival_times,n_total){
var counts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n-ia","n-ia",440915214),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"n-up","n-up",1244727544),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
var n__5762__auto___27385 = n_total;
var i_27386 = (0);
while(true){
if((i_27386 < n__5762__auto___27385)){
var enroll_27387 = (enroll_times[i_27386]);
var survival_27388 = (survival_times[i_27386]);
if((survival_27388 <= Math.max((new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config) - enroll_27387),0.0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"n-ia","n-ia",440915214).cljs$core$IFn$_invoke$arity$1(counts),cljs.core.inc);
} else {
}

if((survival_27388 <= Math.max((new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config) - enroll_27387),0.0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"n-up","n-up",1244727544).cljs$core$IFn$_invoke$arity$1(counts),cljs.core.inc);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config))){
if((survival_27388 <= Math.max((new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config) - enroll_27387),0.0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282).cljs$core$IFn$_invoke$arity$1(counts),cljs.core.inc);
} else {
}
} else {
}

var G__27389 = (i_27386 + (1));
i_27386 = G__27389;
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
app.regal_fit.simulate.pass_events_tolerance_QMARK_ = (function app$regal_fit$simulate$pass_events_tolerance_QMARK_(config,p__27228){
var map__27229 = p__27228;
var map__27229__$1 = cljs.core.__destructure_map(map__27229);
var n_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27229__$1,new cljs.core.Keyword(null,"n-ia","n-ia",440915214));
var n_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27229__$1,new cljs.core.Keyword(null,"n-up","n-up",1244727544));
var n_pr3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27229__$1,new cljs.core.Keyword(null,"n-pr3","n-pr3",-1020311282));
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
var n__5762__auto___27391 = n_total;
var i_27392 = (0);
while(true){
if((i_27392 < n__5762__auto___27391)){
var fu_ia_27393 = Math.max((new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config) - (enroll_times[i_27392])),0.0);
var fu_up_27394 = Math.max((new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config) - (enroll_times[i_27392])),0.0);
var survival_27395 = (survival_times[i_27392]);
var arm_27396 = (arms_array[i_27392]);
(time_ia[i_27392] = Math.min(survival_27395,fu_ia_27393));

(event_ia[i_27392] = (((survival_27395 <= fu_ia_27393))?(1):(0)));

if((survival_27395 > fu_up_27394)){
if((arm_27396 === (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(alive_bat,cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(alive_gps,cljs.core.inc);
}
} else {
}

var G__27398 = (i_27392 + (1));
i_27392 = G__27398;
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
var map__27248 = app.regal_fit.simulate.interim_analysis_data(config,enroll_times,survival_times,arms_array,n_total);
var map__27248__$1 = cljs.core.__destructure_map(map__27248);
var time_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318));
var event_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"event-ia","event-ia",-188145433));
var alive_bat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"alive-bat","alive-bat",-575070135));
var alive_gps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27248__$1,new cljs.core.Keyword(null,"alive-gps","alive-gps",-1734044909));
var vec__27249 = app.regal_fit.stats.logrank_z((cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(time_ia) : cljs.numpy.array.call(null,time_ia)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(event_ia) : cljs.numpy.array.call(null,event_ia)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(arms_array) : cljs.numpy.array.call(null,arms_array)));
var z_ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27249,(0),null);
var hr_ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27249,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-ia","z-ia",-1345120916),z_ia,new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309),hr_ia,new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318),time_ia,new cljs.core.Keyword(null,"ev-ia","ev-ia",1539100546),event_ia,new cljs.core.Keyword(null,"alive-bat","alive-bat",-575070135),alive_bat,new cljs.core.Keyword(null,"alive-gps","alive-gps",-1734044909),alive_gps], null);
});
/**
 * Checks interim results against futility and efficacy gates.
 */
app.regal_fit.simulate.pass_interim_gates_QMARK_ = (function app$regal_fit$simulate$pass_interim_gates_QMARK_(config,p__27262){
var map__27263 = p__27262;
var map__27263__$1 = cljs.core.__destructure_map(map__27263);
var hr_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309));
var time_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"time-ia","time-ia",-1902843318));
var ev_ia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"ev-ia","ev-ia",1539100546));
var time_nd = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(time_ia) : cljs.numpy.array.call(null,time_ia));
var ev_nd = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(ev_ia) : cljs.numpy.array.call(null,ev_ia));
var and__5160__auto__ = (hr_ia < new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522).cljs$core$IFn$_invoke$arity$1(config));
if(and__5160__auto__){
var and__5160__auto____$1 = (hr_ia > new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202).cljs$core$IFn$_invoke$arity$1(config));
if(and__5160__auto____$1){
var and__5160__auto____$2 = (((new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config) > (0)))?(app.regal_fit.stats.km_survival_at_time(time_nd,ev_nd,new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config)) > 0.5):true);
if(and__5160__auto____$2){
if((new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298).cljs$core$IFn$_invoke$arity$1(config) > (0))){
var median_fu = (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(time_nd) : cljs.numpy.median.call(null,time_nd));
return (Math.abs((median_fu - new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298).cljs$core$IFn$_invoke$arity$1(config))) <= new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134).cljs$core$IFn$_invoke$arity$1(config));
} else {
return true;
}
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
/**
 * Calculates survival and event status at T80.
 */
app.regal_fit.simulate.calculate_final_times = (function app$regal_fit$simulate$calculate_final_times(t80,n_total,enroll_times,survival_times){
var time_fin = (new Float64Array(n_total));
var ev_fin = (new Int32Array(n_total));
var n__5762__auto___27399 = n_total;
var i_27400 = (0);
while(true){
if((i_27400 < n__5762__auto___27399)){
var f_27401 = Math.max((t80 - (enroll_times[i_27400])),0.0);
var s_27402 = (survival_times[i_27400]);
(time_fin[i_27400] = Math.min(s_27402,f_27401));

(ev_fin[i_27400] = (((s_27402 <= f_27401))?(1):(0)));

var G__27403 = (i_27400 + (1));
i_27400 = G__27403;
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
var n__5762__auto___27404 = n_total;
var i_27405 = (0);
while(true){
if((i_27405 < n__5762__auto___27404)){
var d_27406 = ((enroll_times[i_27405]) + (survival_times[i_27405]));
if(cljs.core.truth_(Number.isFinite(d_27406))){
valid_deaths.push(d_27406);
} else {
}

var G__27407 = (i_27405 + (1));
i_27405 = G__27407;
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
var today = (cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5160__auto__)){
return reached;
} else {
return and__5160__auto__;
}
})())?(t80 >= ((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"t-now","t-now",-1553436397).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (63);
}
})() - new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086).cljs$core$IFn$_invoke$arity$1(config))):true);
if((!(((reached) && (today))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reached","reached",826384279),false,new cljs.core.Keyword(null,"t80","t80",-1773986369),t80,new cljs.core.Keyword(null,"hr-final","hr-final",226930306),NaN,new cljs.core.Keyword(null,"z-final","z-final",1830128043),NaN], null);
} else {
var map__27297 = app.regal_fit.simulate.calculate_final_times(t80,n_total,enroll_times,survival_times);
var map__27297__$1 = cljs.core.__destructure_map(map__27297);
var time_fin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27297__$1,new cljs.core.Keyword(null,"time-fin","time-fin",-811075357));
var ev_fin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27297__$1,new cljs.core.Keyword(null,"ev-fin","ev-fin",675117895));
var vec__27298 = app.regal_fit.stats.logrank_z((cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(time_fin) : cljs.numpy.array.call(null,time_fin)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(ev_fin) : cljs.numpy.array.call(null,ev_fin)),(cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(arms_array) : cljs.numpy.array.call(null,arms_array)));
var z_fin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27298,(0),null);
var hr_fin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27298,(1),null);
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
var n__5762__auto__ = cljs.core.count(assignment_order);
var i = (0);
while(true){
if((i < n__5762__auto__)){
if((i < n_per_arm)){
(arms_array[(assignment_order[i])] = (1));
} else {
}

var G__27410 = (i + (1));
i = G__27410;
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

var G__27411 = (i + (1));
var G__27412 = (b + (1));
var G__27413 = g;
i = G__27411;
b = G__27412;
g = G__27413;
continue;
} else {
(survival[i] = (gps_draws[g]));

var G__27415 = (i + (1));
var G__27416 = b;
var G__27417 = (g + (1));
i = G__27415;
b = G__27416;
g = G__27417;
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
var seq__27318_27418 = cljs.core.seq(bands);
var chunk__27319_27419 = null;
var count__27320_27420 = (0);
var i__27321_27421 = (0);
while(true){
if((i__27321_27421 < count__27320_27420)){
var vec__27337_27423 = chunk__27319_27419.cljs$core$IIndexed$_nth$arity$2(null,i__27321_27421);
var lo_27424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27337_27423,(0),null);
var hi_27425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27337_27423,(1),null);
var n_27426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27337_27423,(2),null);
if((n_27426 > (0))){
var seq__27340_27427 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_27424,hi_27425,n_27426)));
var chunk__27341_27428 = null;
var count__27342_27429 = (0);
var i__27343_27430 = (0);
while(true){
if((i__27343_27430 < count__27342_27429)){
var r_27431 = chunk__27341_27428.cljs$core$IIndexed$_nth$arity$2(null,i__27343_27430);
raw_enroll.push(r_27431);


var G__27432 = seq__27340_27427;
var G__27433 = chunk__27341_27428;
var G__27434 = count__27342_27429;
var G__27435 = (i__27343_27430 + (1));
seq__27340_27427 = G__27432;
chunk__27341_27428 = G__27433;
count__27342_27429 = G__27434;
i__27343_27430 = G__27435;
continue;
} else {
var temp__5825__auto___27436 = cljs.core.seq(seq__27340_27427);
if(temp__5825__auto___27436){
var seq__27340_27437__$1 = temp__5825__auto___27436;
if(cljs.core.chunked_seq_QMARK_(seq__27340_27437__$1)){
var c__5694__auto___27438 = cljs.core.chunk_first(seq__27340_27437__$1);
var G__27439 = cljs.core.chunk_rest(seq__27340_27437__$1);
var G__27440 = c__5694__auto___27438;
var G__27441 = cljs.core.count(c__5694__auto___27438);
var G__27442 = (0);
seq__27340_27427 = G__27439;
chunk__27341_27428 = G__27440;
count__27342_27429 = G__27441;
i__27343_27430 = G__27442;
continue;
} else {
var r_27443 = cljs.core.first(seq__27340_27437__$1);
raw_enroll.push(r_27443);


var G__27444 = cljs.core.next(seq__27340_27437__$1);
var G__27445 = null;
var G__27446 = (0);
var G__27447 = (0);
seq__27340_27427 = G__27444;
chunk__27341_27428 = G__27445;
count__27342_27429 = G__27446;
i__27343_27430 = G__27447;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__27448 = seq__27318_27418;
var G__27449 = chunk__27319_27419;
var G__27450 = count__27320_27420;
var G__27451 = (i__27321_27421 + (1));
seq__27318_27418 = G__27448;
chunk__27319_27419 = G__27449;
count__27320_27420 = G__27450;
i__27321_27421 = G__27451;
continue;
} else {
var temp__5825__auto___27452 = cljs.core.seq(seq__27318_27418);
if(temp__5825__auto___27452){
var seq__27318_27453__$1 = temp__5825__auto___27452;
if(cljs.core.chunked_seq_QMARK_(seq__27318_27453__$1)){
var c__5694__auto___27454 = cljs.core.chunk_first(seq__27318_27453__$1);
var G__27455 = cljs.core.chunk_rest(seq__27318_27453__$1);
var G__27456 = c__5694__auto___27454;
var G__27457 = cljs.core.count(c__5694__auto___27454);
var G__27458 = (0);
seq__27318_27418 = G__27455;
chunk__27319_27419 = G__27456;
count__27320_27420 = G__27457;
i__27321_27421 = G__27458;
continue;
} else {
var vec__27344_27459 = cljs.core.first(seq__27318_27453__$1);
var lo_27460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27344_27459,(0),null);
var hi_27461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27344_27459,(1),null);
var n_27462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27344_27459,(2),null);
if((n_27462 > (0))){
var seq__27347_27463 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_27460,hi_27461,n_27462)));
var chunk__27348_27464 = null;
var count__27349_27465 = (0);
var i__27350_27466 = (0);
while(true){
if((i__27350_27466 < count__27349_27465)){
var r_27467 = chunk__27348_27464.cljs$core$IIndexed$_nth$arity$2(null,i__27350_27466);
raw_enroll.push(r_27467);


var G__27468 = seq__27347_27463;
var G__27469 = chunk__27348_27464;
var G__27470 = count__27349_27465;
var G__27471 = (i__27350_27466 + (1));
seq__27347_27463 = G__27468;
chunk__27348_27464 = G__27469;
count__27349_27465 = G__27470;
i__27350_27466 = G__27471;
continue;
} else {
var temp__5825__auto___27476__$1 = cljs.core.seq(seq__27347_27463);
if(temp__5825__auto___27476__$1){
var seq__27347_27477__$1 = temp__5825__auto___27476__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27347_27477__$1)){
var c__5694__auto___27478 = cljs.core.chunk_first(seq__27347_27477__$1);
var G__27479 = cljs.core.chunk_rest(seq__27347_27477__$1);
var G__27480 = c__5694__auto___27478;
var G__27481 = cljs.core.count(c__5694__auto___27478);
var G__27482 = (0);
seq__27347_27463 = G__27479;
chunk__27348_27464 = G__27480;
count__27349_27465 = G__27481;
i__27350_27466 = G__27482;
continue;
} else {
var r_27483 = cljs.core.first(seq__27347_27477__$1);
raw_enroll.push(r_27483);


var G__27484 = cljs.core.next(seq__27347_27477__$1);
var G__27485 = null;
var G__27486 = (0);
var G__27487 = (0);
seq__27347_27463 = G__27484;
chunk__27348_27464 = G__27485;
count__27349_27465 = G__27486;
i__27350_27466 = G__27487;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__27488 = cljs.core.next(seq__27318_27453__$1);
var G__27489 = null;
var G__27490 = (0);
var G__27491 = (0);
seq__27318_27418 = G__27488;
chunk__27319_27419 = G__27489;
count__27320_27420 = G__27490;
i__27321_27421 = G__27491;
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

var assignment_order_27492 = cljs.numpy.nd_to_array((function (){var G__27356 = cljs.numpy_random.random(random_gen,n_total);
return (cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.argsort.cljs$core$IFn$_invoke$arity$1(G__27356) : cljs.numpy.argsort.call(null,G__27356));
})());
var n__5762__auto___27493 = n_total;
var i_27494 = (0);
while(true){
if((i_27494 < n__5762__auto___27493)){
(enroll[i_27494] = (raw_enroll[i_27494]));

var G__27495 = (i_27494 + (1));
i_27494 = G__27495;
continue;
} else {
}
break;
}

app.regal_fit.simulate.assign_arms(arms,assignment_order_27492,n_per_arm);

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
var map__27357 = app.regal_fit.simulate.generate_trial_data(record,config,random_gen,n_total,n_per_arm,bands);
var map__27357__$1 = cljs.core.__destructure_map(map__27357);
var enroll_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27357__$1,new cljs.core.Keyword(null,"enroll-times","enroll-times",-796557014));
var arms_array = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27357__$1,new cljs.core.Keyword(null,"arms-array","arms-array",-819399838));
var survival_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27357__$1,new cljs.core.Keyword(null,"survival-times","survival-times",1104744121));
var counts = app.regal_fit.simulate.count_events_at_times(config,enroll_times,survival_times,n_total);
var passed_screening = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"ignore-prefilter?","ignore-prefilter?",-2127173175).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return app.regal_fit.simulate.pass_events_tolerance_QMARK_(config,counts);
}
})();
var stats = (cljs.core.truth_(passed_screening)?app.regal_fit.simulate.calculate_trial_stats(config,enroll_times,survival_times,arms_array,n_total):null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"passed-screening","passed-screening",-970442882),passed_screening,new cljs.core.Keyword(null,"stats","stats",-85643011),stats], null);
});
/**
 * Runs a chunk of simulations for a single combination.
 */
app.regal_fit.simulate.run_sim_chunk = (function app$regal_fit$simulate$run_sim_chunk(record,config,n_sims,random_gen){
var results = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return app.regal_fit.simulate.simulate_one_trial(record,config,random_gen,new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(config));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_sims));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stats","stats",-85643011),results),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27359_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"passed-screening","passed-screening",-970442882).cljs$core$IFn$_invoke$arity$1(p1__27359_SHARP_))){
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([record,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"p-hr-below-threshold","p-hr-below-threshold",-221516288),new cljs.core.Keyword(null,"median-bat-alive-upd","median-bat-alive-upd",-1793961887),new cljs.core.Keyword(null,"n-accepted","n-accepted",-1920065151),new cljs.core.Keyword(null,"p-no-readout","p-no-readout",1519656388),new cljs.core.Keyword(null,"p-success-overall","p-success-overall",-477143706),new cljs.core.Keyword(null,"median-hr-ia","median-hr-ia",-584537370),new cljs.core.Keyword(null,"n-pass-futility","n-pass-futility",-1718782803),new cljs.core.Keyword(null,"median-gps-alive-upd","median-gps-alive-upd",1199822000),new cljs.core.Keyword(null,"median-z-ia","median-z-ia",276344881),new cljs.core.Keyword(null,"n-pass-events","n-pass-events",1361985171),new cljs.core.Keyword(null,"median-t80-months","median-t80-months",-1483725195),new cljs.core.Keyword(null,"median-hr-final","median-hr-final",809702905),new cljs.core.Keyword(null,"acceptance-rate","acceptance-rate",653141244),new cljs.core.Keyword(null,"p-reach80","p-reach80",-1229152388),new cljs.core.Keyword(null,"n-attempts","n-attempts",-2026068801)],[((cljs.core.empty_QMARK_(hr_final_arr))?NaN:(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27360_SHARP_){
return (p1__27360_SHARP_ < 0.636);
}),hr_final_arr)) / cljs.core.count(hr_final_arr))),(function (){var G__27361 = (function (){var G__27362 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bat-alive-upd","bat-alive-upd",-948525808),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__27362) : to_nd.call(null,G__27362));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__27361) : cljs.numpy.median.call(null,G__27361));
})(),num_accepted,(1.0 - (cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reached-80","reached-80",356081933),all_stats)) / num_accepted)),(num_success / num_accepted),(function (){var G__27363 = (function (){var G__27364 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hr-ia","hr-ia",608696309),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__27364) : to_nd.call(null,G__27364));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__27363) : cljs.numpy.median.call(null,G__27363));
})(),num_accepted,(function (){var G__27365 = (function (){var G__27366 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gps-alive-upd","gps-alive-upd",-597652562),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__27366) : to_nd.call(null,G__27366));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__27365) : cljs.numpy.median.call(null,G__27365));
})(),(function (){var G__27367 = (function (){var G__27368 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z-ia","z-ia",-1345120916),all_stats);
return (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(G__27368) : to_nd.call(null,G__27368));
})();
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__27367) : cljs.numpy.median.call(null,G__27367));
})(),num_pass_events,((cljs.core.empty_QMARK_(finite_t80))?NaN:(function (){var G__27369 = (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(finite_t80) : to_nd.call(null,finite_t80));
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__27369) : cljs.numpy.median.call(null,G__27369));
})()),((cljs.core.empty_QMARK_(hr_final_arr))?NaN:(function (){var G__27370 = (to_nd.cljs$core$IFn$_invoke$arity$1 ? to_nd.cljs$core$IFn$_invoke$arity$1(hr_final_arr) : to_nd.call(null,hr_final_arr));
return (cljs.numpy.median.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.median.cljs$core$IFn$_invoke$arity$1(G__27370) : cljs.numpy.median.call(null,G__27370));
})()),(num_accepted / num_attempts),(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reached-80","reached-80",356081933),all_stats)) / num_accepted),num_attempts])], 0));
});
/**
 * Aggregates statistics across all accepted simulations for a combo.
 */
app.regal_fit.simulate.summarize_results = (function app$regal_fit$simulate$summarize_results(all_stats,num_attempts,num_pass_events,record){
var num_accepted = cljs.core.count(all_stats);
var finite_t80 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27372_SHARP_){
return cljs.core.not(Number.isNaN(p1__27372_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"t80","t80",-1773986369),all_stats));
var hr_final_arr = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27373_SHARP_){
return cljs.core.not(Number.isNaN(p1__27373_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hr-final","hr-final",226930306),all_stats));
var num_success = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27374_SHARP_){
var and__5160__auto__ = new cljs.core.Keyword(null,"reached-80","reached-80",356081933).cljs$core$IFn$_invoke$arity$1(p1__27374_SHARP_);
if(cljs.core.truth_(and__5160__auto__)){
return (new cljs.core.Keyword(null,"hr-final","hr-final",226930306).cljs$core$IFn$_invoke$arity$1(p1__27374_SHARP_) < 0.636);
} else {
return and__5160__auto__;
}
}),all_stats));
var to_nd = (function (coll){
var G__27375 = cljs.core.to_array(coll);
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27375) : cljs.numpy.array.call(null,G__27375));
});
return app.regal_fit.simulate.build_aggregate_map(all_stats,num_attempts,num_pass_events,record,to_nd,finite_t80,hr_final_arr,num_success,num_accepted);
});
/**
 * Simulates multiple trials for a single scenario combination.
 */
app.regal_fit.simulate.simulate_one_combo = (function app$regal_fit$simulate$simulate_one_combo(p__27376){
var map__27377 = p__27376;
var map__27377__$1 = cljs.core.__destructure_map(map__27377);
var rec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword(null,"rec","rec",-651838357));
var cfg_dict = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword(null,"cfg-dict","cfg-dict",1695845459));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var random_gen = cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1(seed);
var config = cfg_dict;
var n_screen = Math.min(new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219).cljs$core$IFn$_invoke$arity$1(config),n_sims);
var vec__27378 = app.regal_fit.simulate.run_sim_chunk(rec,config,n_screen,random_gen);
var screen_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378,(0),null);
var screen_pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378,(1),null);
if((cljs.core.count(screen_stats) >= new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113).cljs$core$IFn$_invoke$arity$1(config))){
var remaining = (n_sims - n_screen);
var vec__27382 = (((remaining > (0)))?app.regal_fit.simulate.run_sim_chunk(rec,config,remaining,random_gen):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null));
var more_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27382,(0),null);
var more_pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27382,(1),null);
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
