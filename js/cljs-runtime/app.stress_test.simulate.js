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
var vec__28495 = cljs.core.first(remaining_bands);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(2),null);
if((n > (0))){
var n__5762__auto___28522 = n_sims;
var s_28523 = (0);
while(true){
if((s_28523 < n__5762__auto___28522)){
var n__5762__auto___28524__$1 = n;
var i_28525 = (0);
while(true){
if((i_28525 < n__5762__auto___28524__$1)){
(enroll[(((s_28523 * n_total) + col) + i_28525)] = app.stress_test.simulate.uniform_draw(lo,hi));

var G__28526 = (i_28525 + (1));
i_28525 = G__28526;
continue;
} else {
}
break;
}

var G__28527 = (s_28523 + (1));
s_28523 = G__28527;
continue;
} else {
}
break;
}

var G__28528 = (col + n);
var G__28529 = cljs.core.rest(remaining_bands);
col = G__28528;
remaining_bands = G__28529;
continue;
} else {
var G__28530 = col;
var G__28531 = cljs.core.rest(remaining_bands);
col = G__28530;
remaining_bands = G__28531;
continue;
}
} else {
var n__5762__auto___28532 = n_sims;
var s_28533 = (0);
while(true){
if((s_28533 < n__5762__auto___28532)){
var start_28534 = (s_28533 * n_total);
var end_28535 = (start_28534 + n_total);
var sim_enroll_28536 = enroll.slice(start_28534,end_28535);
sim_enroll_28536.sort(((function (s_28533,col,remaining_bands,start_28534,end_28535,sim_enroll_28536,n__5762__auto___28532,enroll){
return (function (a,b){
return (a - b);
});})(s_28533,col,remaining_bands,start_28534,end_28535,sim_enroll_28536,n__5762__auto___28532,enroll))
);

enroll.set(sim_enroll_28536,start_28534);

var G__28537 = (s_28533 + (1));
s_28533 = G__28537;
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
var n__5762__auto___28538 = n;
var i_28539 = (0);
while(true){
if((i_28539 < n__5762__auto___28538)){
(indices[i_28539] = i_28539);

var G__28540 = (i_28539 + (1));
i_28539 = G__28540;
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
var G__28541 = (i + (1));
var G__28542 = (surv * (1.0 - (1.0 / n_at_risk)));
i = G__28541;
surv = G__28542;
continue;
} else {
if((t > target_time)){
return surv;
} else {
var G__28543 = (i + (1));
var G__28544 = surv;
i = G__28543;
surv = G__28544;
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

var G__28545 = (i - (1));
i = G__28545;
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
app.stress_test.simulate.simulate_one_combo = (function app$stress_test$simulate$simulate_one_combo(p__28512){
var map__28513 = p__28512;
var map__28513__$1 = cljs.core.__destructure_map(map__28513);
var mos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,new cljs.core.Keyword(null,"mos","mos",1902052264));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,new cljs.core.Keyword(null,"config","config",994861415));
var scale = app.stress_test.simulate.weibull_scale_from_median(mos,k);
var n_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28504_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28504_SHARP_,(2));
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
var pool_mos_max = new cljs.core.Keyword(null,"pool-mos-max","pool-mos-max",1491106007).cljs$core$IFn$_invoke$arity$1(config);
var use_test_ia = new cljs.core.Keyword(null,"use-test-ia","use-test-ia",-531762511).cljs$core$IFn$_invoke$arity$1(config);
var use_test_upd = new cljs.core.Keyword(null,"use-test-upd","use-test-upd",403094127).cljs$core$IFn$_invoke$arity$1(config);
var use_test_pr3 = new cljs.core.Keyword(null,"use-test-pr3","use-test-pr3",847119890).cljs$core$IFn$_invoke$arity$1(config);
var use_test_pool_mos = new cljs.core.Keyword(null,"use-test-pool-mos","use-test-pool-mos",734922399).cljs$core$IFn$_invoke$arity$1(config);
var inv_k = (1.0 / k);
var n__5762__auto___28547 = n_sims;
var s_28548 = (0);
while(true){
if((s_28548 < n__5762__auto___28547)){
var offset_28549 = (s_28548 * n_total);
var trial_obs_t_28550 = (new Float64Array(n_total));
var trial_is_ev_28551 = (new Int8Array(n_total));
var is_gps_28552 = (new Int8Array(n_total));
var n__5762__auto___28553__$1 = n_per_arm;
var i_28554 = (0);
while(true){
if((i_28554 < n__5762__auto___28553__$1)){
(is_gps_28552[i_28554] = (1));

var G__28555 = (i_28554 + (1));
i_28554 = G__28555;
continue;
} else {
}
break;
}

app.stress_test.simulate.shuffle_array(is_gps_28552);

var n__5762__auto___28556__$1 = n_total;
var i_28557 = (0);
while(true){
if((i_28557 < n__5762__auto___28556__$1)){
var idx_28558 = (offset_28549 + i_28557);
var e_val_28559 = (enroll_arr[idx_28558]);
var s_val_28560 = (scale * Math.pow((- Math.log((1.0 - Math.random()))),inv_k));
var f_ia_28561 = Math.max((t_ia - e_val_28559),0.0);
var f_upd_28562 = Math.max((t_upd - e_val_28559),0.0);
var f_pr3_28563 = Math.max((t_pr3 - e_val_28559),0.0);
if((s_val_28560 <= f_ia_28561)){
(ev_ia[s_28548] = ((ev_ia[s_28548]) + (1)));

if(((is_gps_28552[i_28557]) === (1))){
(gps_ev_ia[s_28548] = ((gps_ev_ia[s_28548]) + (1)));
} else {
}
} else {
}

if((s_val_28560 <= f_upd_28562)){
(ev_upd[s_28548] = ((ev_upd[s_28548]) + (1)));
} else {
}

if((s_val_28560 <= f_pr3_28563)){
(ev_pr3[s_28548] = ((ev_pr3[s_28548]) + (1)));
} else {
}

(trial_obs_t_28550[i_28557] = Math.min(s_val_28560,f_ia_28561));

(trial_is_ev_28551[i_28557] = (((s_val_28560 <= f_ia_28561))?(1):(0)));

var G__28564 = (i_28557 + (1));
i_28557 = G__28564;
continue;
} else {
}
break;
}

var s_at_min_28565 = app.stress_test.simulate.km_survival_single(trial_obs_t_28550,trial_is_ev_28551,pool_mos_min);
var s_at_max_28566 = app.stress_test.simulate.km_survival_single(trial_obs_t_28550,trial_is_ev_28551,pool_mos_max);
if((((s_at_min_28565 > 0.5)) && ((s_at_max_28566 < 0.5)))){
(pass_pool[s_28548] = (1));
} else {
}

var G__28567 = (s_28548 + (1));
s_28548 = G__28567;
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
var n__5762__auto___28569 = n_sims;
var s_28570 = (0);
while(true){
if((s_28570 < n__5762__auto___28569)){
var e_ia_28572 = (ev_ia[s_28570]);
var e_upd_28573 = (ev_upd[s_28570]);
var e_pr3_28574 = (ev_pr3[s_28570]);
var g_ia_28575 = (gps_ev_ia[s_28570]);
var p_pool_28576 = ((pass_pool[s_28570]) === (1));
var i_upd_28577 = (e_upd_28573 - e_ia_28572);
var i_pr3_28578 = (e_pr3_28574 - e_upd_28573);
var pass_hr_28579 = (g_ia_28575 < (futility_hr_max * (e_ia_28572 / (futility_hr_max + (1)))));
var passed_ia_28580 = ((pass_hr_28579) && (p_pool_28576));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_ev_ia,cljs.core._PLUS_,e_ia_28572);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_upd,cljs.core._PLUS_,i_upd_28577);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_pr3,cljs.core._PLUS_,i_pr3_28578);

if(passed_ia_28580){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_passed_ia,cljs.core.inc);
} else {
}

var c1_28582 = ((cljs.core.not(use_test_ia)) || ((e_ia_28572 <= obs_ev_ia)));
var c2_28583 = ((cljs.core.not(use_test_upd)) || ((i_upd_28577 <= obs_inc_upd)));
var c3_28584 = ((cljs.core.not(use_test_pr3)) || ((i_pr3_28578 <= obs_inc_pr3)));
var c4_28585 = ((cljs.core.not(use_test_pool_mos)) || (p_pool_28576));
if((e_ia_28572 <= obs_ev_ia)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_ev_ia_le_60,cljs.core.inc);
} else {
}

if((i_upd_28577 <= obs_inc_upd)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_upd_le_12,cljs.core.inc);
} else {
}

if((i_pr3_28578 <= obs_inc_pr3)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_pr3_le_6,cljs.core.inc);
} else {
}

if(((c1_28582) && (((c2_28583) && (((c3_28584) && (c4_28585))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(joint_pass_count,cljs.core.inc);
} else {
}

var G__28586 = (s_28570 + (1));
s_28570 = G__28586;
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
