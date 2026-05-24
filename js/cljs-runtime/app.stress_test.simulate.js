goog.provide('app.stress_test.simulate');
app.stress_test.simulate.uniform_draw = (function app$stress_test$simulate$uniform_draw(min,max){
return (min + (Math.random() * (max - min)));
});
/**
 * Generate enrollment times for n-sims trials.
 */
app.stress_test.simulate.generate_enrollment = (function app$stress_test$simulate$generate_enrollment(n_sims,n_total,bands){
var enroll = (new Float64Array((n_sims * n_total)));
var col = (0);
var remaining_bands = bands;
while(true){
if(cljs.core.seq(remaining_bands)){
var vec__29287 = cljs.core.first(remaining_bands);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29287,(2),null);
if((n > (0))){
var n__5616__auto___29316 = n_sims;
var s_29317 = (0);
while(true){
if((s_29317 < n__5616__auto___29316)){
var n__5616__auto___29318__$1 = n;
var i_29319 = (0);
while(true){
if((i_29319 < n__5616__auto___29318__$1)){
(enroll[(((s_29317 * n_total) + col) + i_29319)] = app.stress_test.simulate.uniform_draw(lo,hi));

var G__29320 = (i_29319 + (1));
i_29319 = G__29320;
continue;
} else {
}
break;
}

var G__29321 = (s_29317 + (1));
s_29317 = G__29321;
continue;
} else {
}
break;
}

var G__29322 = (col + n);
var G__29323 = cljs.core.rest(remaining_bands);
col = G__29322;
remaining_bands = G__29323;
continue;
} else {
var G__29324 = col;
var G__29325 = cljs.core.rest(remaining_bands);
col = G__29324;
remaining_bands = G__29325;
continue;
}
} else {
var n__5616__auto___29326 = n_sims;
var s_29327 = (0);
while(true){
if((s_29327 < n__5616__auto___29326)){
var start_29328 = (s_29327 * n_total);
var end_29329 = (start_29328 + n_total);
var sim_enroll_29330 = enroll.slice(start_29328,end_29329);
sim_enroll_29330.sort(((function (s_29327,col,remaining_bands,start_29328,end_29329,sim_enroll_29330,n__5616__auto___29326,enroll){
return (function (a,b){
return (a - b);
});})(s_29327,col,remaining_bands,start_29328,end_29329,sim_enroll_29330,n__5616__auto___29326,enroll))
);

enroll.set(sim_enroll_29330,start_29328);

var G__29331 = (s_29327 + (1));
s_29327 = G__29331;
continue;
} else {
}
break;
}

return enroll;
}
break;
}
});
/**
 * Calculates KM survival at target time for a single trial.
 */
app.stress_test.simulate.km_survival_single = (function app$stress_test$simulate$km_survival_single(obs_t_arr,is_ev_arr,target_time){
var n = obs_t_arr.length;
if((n === (0))){
return 1.0;
} else {
var indices = (new Int32Array(n));
var n__5616__auto___29333 = n;
var i_29334 = (0);
while(true){
if((i_29334 < n__5616__auto___29333)){
(indices[i_29334] = i_29334);

var G__29335 = (i_29334 + (1));
i_29334 = G__29335;
continue;
} else {
}
break;
}

indices.sort((function (a,b){
return ((obs_t_arr[a]) - (obs_t_arr[b]));
}));

var i = (0);
var surv = 1.0;
while(true){
if((i < n)){
var idx = (indices[i]);
var t = (obs_t_arr[idx]);
var is_ev = ((is_ev_arr[idx]) === (1));
var n_at_risk = (n - i);
if(((is_ev) && ((t <= target_time)))){
var G__29336 = (i + (1));
var G__29337 = (surv * (1.0 - (1.0 / n_at_risk)));
i = G__29336;
surv = G__29337;
continue;
} else {
if((t > target_time)){
return surv;
} else {
var G__29338 = (i + (1));
var G__29339 = surv;
i = G__29338;
surv = G__29339;
continue;
}
}
} else {
return surv;
}
break;
}
}
});
app.stress_test.simulate.shuffle_array = (function app$stress_test$simulate$shuffle_array(arr){
var n = arr.length;
var i = (n - (1));
while(true){
if((i > (0))){
var j = Math.floor((Math.random() * (i + (1))));
var tmp = (arr[i]);
(arr[i] = (arr[j]));

(arr[j] = tmp);

var G__29343 = (i - (1));
i = G__29343;
continue;
} else {
return null;
}
break;
}
});
app.stress_test.simulate.weibull_scale_from_median = (function app$stress_test$simulate$weibull_scale_from_median(median,shape){
return (median / Math.pow(Math.log(2.0),(1.0 / shape)));
});
/**
 * Simulates a single (mOS, k) combination.
 */
app.stress_test.simulate.simulate_one_combo = (function app$stress_test$simulate$simulate_one_combo(p__29306){
var map__29307 = p__29306;
var map__29307__$1 = cljs.core.__destructure_map(map__29307);
var mos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,new cljs.core.Keyword(null,"mos","mos",1902052264));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29307__$1,new cljs.core.Keyword(null,"config","config",994861415));
var scale = app.stress_test.simulate.weibull_scale_from_median(mos,k);
var n_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29295_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29295_SHARP_,(2));
}),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(config)));
var n_per_arm = cljs.core.quot(n_total,(2));
var enroll_arr = app.stress_test.simulate.generate_enrollment(n_sims,n_total,new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(config));
var ev_ia = (new Int32Array(n_sims));
var ev_upd = (new Int32Array(n_sims));
var ev_pr3 = (new Int32Array(n_sims));
var gps_ev_ia = (new Int32Array(n_sims));
var pass_pool = (new Uint8Array(n_sims));
var t_ia = new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config);
var t_upd = new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config);
var t_pr3 = new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config);
var pool_mos_min = new cljs.core.Keyword(null,"pool-mos-min","pool-mos-min",-1242053139).cljs$core$IFn$_invoke$arity$1(config);
var inv_k = (1.0 / k);
var n__5616__auto___29344 = n_sims;
var s_29345 = (0);
while(true){
if((s_29345 < n__5616__auto___29344)){
var offset_29346 = (s_29345 * n_total);
var trial_obs_t_29347 = (new Float64Array(n_total));
var trial_is_ev_29348 = (new Int8Array(n_total));
var is_gps_29349 = (new Int8Array(n_total));
var n__5616__auto___29350__$1 = n_per_arm;
var i_29351 = (0);
while(true){
if((i_29351 < n__5616__auto___29350__$1)){
(is_gps_29349[i_29351] = (1));

var G__29352 = (i_29351 + (1));
i_29351 = G__29352;
continue;
} else {
}
break;
}

app.stress_test.simulate.shuffle_array(is_gps_29349);

var n__5616__auto___29353__$1 = n_total;
var i_29354 = (0);
while(true){
if((i_29354 < n__5616__auto___29353__$1)){
var idx_29355 = (offset_29346 + i_29354);
var e_val_29356 = (enroll_arr[idx_29355]);
var s_val_29357 = (scale * Math.pow((- Math.log((1.0 - Math.random()))),inv_k));
var f_ia_29358 = Math.max((t_ia - e_val_29356),0.0);
var f_upd_29359 = Math.max((t_upd - e_val_29356),0.0);
var f_pr3_29360 = Math.max((t_pr3 - e_val_29356),0.0);
if((s_val_29357 <= f_ia_29358)){
(ev_ia[s_29345] = ((ev_ia[s_29345]) + (1)));

if(((is_gps_29349[i_29354]) === (1))){
(gps_ev_ia[s_29345] = ((gps_ev_ia[s_29345]) + (1)));
} else {
}
} else {
}

if((s_val_29357 <= f_upd_29359)){
(ev_upd[s_29345] = ((ev_upd[s_29345]) + (1)));
} else {
}

if((s_val_29357 <= f_pr3_29360)){
(ev_pr3[s_29345] = ((ev_pr3[s_29345]) + (1)));
} else {
}

(trial_obs_t_29347[i_29354] = Math.min(s_val_29357,f_ia_29358));

(trial_is_ev_29348[i_29354] = (((s_val_29357 <= f_ia_29358))?(1):(0)));

var G__29361 = (i_29354 + (1));
i_29354 = G__29361;
continue;
} else {
}
break;
}

var s_at_12_29362 = app.stress_test.simulate.km_survival_single(trial_obs_t_29347,trial_is_ev_29348,pool_mos_min);
if((s_at_12_29362 > 0.5)){
(pass_pool[s_29345] = (1));
} else {
}

var G__29363 = (s_29345 + (1));
s_29345 = G__29363;
continue;
} else {
}
break;
}

var obs_ev_ia = new cljs.core.Keyword(null,"obs-ev-ia","obs-ev-ia",1576216630).cljs$core$IFn$_invoke$arity$1(config);
var obs_inc_upd = new cljs.core.Keyword(null,"obs-inc-upd","obs-inc-upd",-964876304).cljs$core$IFn$_invoke$arity$1(config);
var obs_inc_pr3 = new cljs.core.Keyword(null,"obs-inc-pr3","obs-inc-pr3",10060315).cljs$core$IFn$_invoke$arity$1(config);
var futility_hr_max = new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522).cljs$core$IFn$_invoke$arity$1(config);
var joint_pass_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var total_passed_ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var total_ev_ia_le_60 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var total_inc_upd_le_12 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var total_inc_pr3_le_6 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sum_ev_ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sum_inc_upd = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sum_inc_pr3 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var n__5616__auto___29364 = n_sims;
var s_29365 = (0);
while(true){
if((s_29365 < n__5616__auto___29364)){
var e_ia_29366 = (ev_ia[s_29365]);
var e_upd_29367 = (ev_upd[s_29365]);
var e_pr3_29368 = (ev_pr3[s_29365]);
var g_ia_29369 = (gps_ev_ia[s_29365]);
var p_pool_29370 = ((pass_pool[s_29365]) === (1));
var i_upd_29371 = (e_upd_29367 - e_ia_29366);
var i_pr3_29372 = (e_pr3_29368 - e_upd_29367);
var pass_hr_29373 = (g_ia_29369 < (futility_hr_max * (e_ia_29366 / (futility_hr_max + (1)))));
var passed_ia_29374 = ((pass_hr_29373) && (p_pool_29370));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_ev_ia,cljs.core._PLUS_,e_ia_29366);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_upd,cljs.core._PLUS_,i_upd_29371);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_pr3,cljs.core._PLUS_,i_pr3_29372);

if(passed_ia_29374){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_passed_ia,cljs.core.inc);
} else {
}

var c1_29375 = (e_ia_29366 <= obs_ev_ia);
var c2_29376 = (i_upd_29371 <= obs_inc_upd);
var c3_29377 = (i_pr3_29372 <= obs_inc_pr3);
if(c1_29375){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_ev_ia_le_60,cljs.core.inc);
} else {
}

if(c2_29376){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_upd_le_12,cljs.core.inc);
} else {
}

if(c3_29377){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_pr3_le_6,cljs.core.inc);
} else {
}

if(((passed_ia_29374) && (((c1_29375) && (((c2_29376) && (c3_29377))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(joint_pass_count,cljs.core.inc);
} else {
}

var G__29378 = (s_29365 + (1));
s_29365 = G__29378;
continue;
} else {
}
break;
}

var exp_ev_ia = (cljs.core.deref(sum_ev_ia) / n_sims);
var exp_inc_upd = (cljs.core.deref(sum_inc_upd) / n_sims);
var exp_inc_pr3 = (cljs.core.deref(sum_inc_pr3) / n_sims);
var residual = Math.max(Math.abs((exp_ev_ia - obs_ev_ia)),Math.abs((exp_inc_upd - obs_inc_upd)),Math.abs((exp_inc_pr3 - obs_inc_pr3)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"p_inc_upd_le_12","p_inc_upd_le_12",-642152286),new cljs.core.Keyword(null,"p_pass_ia","p_pass_ia",-1033186493),new cljs.core.Keyword(null,"residual","residual",2138156039),new cljs.core.Keyword(null,"expected_inc_upd","expected_inc_upd",111886599),new cljs.core.Keyword(null,"p_inc_pr3_le_6","p_inc_pr3_le_6",-150583961),new cljs.core.Keyword(null,"mos","mos",1902052264),new cljs.core.Keyword(null,"expected_ev_ia","expected_ev_ia",-70245782),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"p_joint","p_joint",1098754735),new cljs.core.Keyword(null,"p_ev_ia_le_60","p_ev_ia_le_60",939381615),new cljs.core.Keyword(null,"expected_inc_pr3","expected_inc_pr3",1043830871)],[(cljs.core.deref(total_inc_upd_le_12) / n_sims),(cljs.core.deref(total_passed_ia) / n_sims),residual,exp_inc_upd,(cljs.core.deref(total_inc_pr3_le_6) / n_sims),mos,exp_ev_ia,k,(cljs.core.deref(joint_pass_count) / n_sims),(cljs.core.deref(total_ev_ia_le_60) / n_sims),exp_inc_pr3]);
});

//# sourceMappingURL=app.stress_test.simulate.js.map
