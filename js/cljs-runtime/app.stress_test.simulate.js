goog.provide('app.stress_test.simulate');
app.stress_test.simulate.uniform_draw = (function app$stress_test$simulate$uniform_draw(min,max){
return (min + (Math.random() * (max - min)));
});
/**
 * Generate enrollment times for n-sims trials.
 */
app.stress_test.simulate.generate_enrollment = (function app$stress_test$simulate$generate_enrollment(n_sims,n_total,bands){
var enroll = (new Float64Array((n_sims * n_total)));
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (col,p__28523){
var vec__28524 = p__28523;
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524,(2),null);
if((n > (0))){
var n__5762__auto___28534 = n_sims;
var s_28535 = (0);
while(true){
if((s_28535 < n__5762__auto___28534)){
var n__5762__auto___28536__$1 = n;
var i_28537 = (0);
while(true){
if((i_28537 < n__5762__auto___28536__$1)){
(enroll[(((s_28535 * n_total) + col) + i_28537)] = app.stress_test.simulate.uniform_draw(lo,hi));

var G__28538 = (i_28537 + (1));
i_28537 = G__28538;
continue;
} else {
}
break;
}

var G__28539 = (s_28535 + (1));
s_28535 = G__28539;
continue;
} else {
}
break;
}

return (col + n);
} else {
return col;
}
}),(0),bands);

var n__5762__auto___28540 = n_sims;
var s_28541 = (0);
while(true){
if((s_28541 < n__5762__auto___28540)){
var start_28542 = (s_28541 * n_total);
var end_28543 = (start_28542 + n_total);
var sim_enroll_28544 = enroll.slice(start_28542,end_28543);
sim_enroll_28544.sort(((function (s_28541,start_28542,end_28543,sim_enroll_28544,n__5762__auto___28540,enroll){
return (function (a,b){
return (a - b);
});})(s_28541,start_28542,end_28543,sim_enroll_28544,n__5762__auto___28540,enroll))
);

enroll.set(sim_enroll_28544,start_28542);

var G__28545 = (s_28541 + (1));
s_28541 = G__28545;
continue;
} else {
}
break;
}

return enroll;
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
var n__5762__auto___28546 = n;
var i_28547 = (0);
while(true){
if((i_28547 < n__5762__auto___28546)){
(indices[i_28547] = i_28547);

var G__28548 = (i_28547 + (1));
i_28547 = G__28548;
continue;
} else {
}
break;
}

indices.sort((function (a,b){
return ((obs_t_arr[a]) - (obs_t_arr[b]));
}));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (surv,i){
var idx = (indices[i]);
var t = (obs_t_arr[idx]);
var is_ev = ((is_ev_arr[idx]) === (1));
var n_at_risk = (n - i);
if((t > target_time)){
return cljs.core.reduced(surv);
} else {
if(is_ev){
return (surv * (1.0 - (1.0 / n_at_risk)));
} else {
return surv;
}
}
}),1.0,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
}
});
app.stress_test.simulate.shuffle_array = (function app$stress_test$simulate$shuffle_array(arr){
var n = arr.length;
var seq__28527 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((n - (1))));
var chunk__28528 = null;
var count__28529 = (0);
var i__28530 = (0);
while(true){
if((i__28530 < count__28529)){
var idx = chunk__28528.cljs$core$IIndexed$_nth$arity$2(null,i__28530);
var i_28549 = ((n - (1)) - idx);
var j_28550 = Math.floor((Math.random() * (i_28549 + (1))));
var tmp_28551 = (arr[i_28549]);
(arr[i_28549] = (arr[j_28550]));

(arr[j_28550] = tmp_28551);


var G__28552 = seq__28527;
var G__28553 = chunk__28528;
var G__28554 = count__28529;
var G__28555 = (i__28530 + (1));
seq__28527 = G__28552;
chunk__28528 = G__28553;
count__28529 = G__28554;
i__28530 = G__28555;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28527);
if(temp__5825__auto__){
var seq__28527__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28527__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__28527__$1);
var G__28556 = cljs.core.chunk_rest(seq__28527__$1);
var G__28557 = c__5694__auto__;
var G__28558 = cljs.core.count(c__5694__auto__);
var G__28559 = (0);
seq__28527 = G__28556;
chunk__28528 = G__28557;
count__28529 = G__28558;
i__28530 = G__28559;
continue;
} else {
var idx = cljs.core.first(seq__28527__$1);
var i_28560 = ((n - (1)) - idx);
var j_28561 = Math.floor((Math.random() * (i_28560 + (1))));
var tmp_28562 = (arr[i_28560]);
(arr[i_28560] = (arr[j_28561]));

(arr[j_28561] = tmp_28562);


var G__28563 = cljs.core.next(seq__28527__$1);
var G__28564 = null;
var G__28565 = (0);
var G__28566 = (0);
seq__28527 = G__28563;
chunk__28528 = G__28564;
count__28529 = G__28565;
i__28530 = G__28566;
continue;
}
} else {
return null;
}
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
app.stress_test.simulate.simulate_one_combo = (function app$stress_test$simulate$simulate_one_combo(p__28532){
var map__28533 = p__28532;
var map__28533__$1 = cljs.core.__destructure_map(map__28533);
var mos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"mos","mos",1902052264));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"config","config",994861415));
var scale = app.stress_test.simulate.weibull_scale_from_median(mos,k);
var n_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28531_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28531_SHARP_,(2));
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
var use_test_hr = new cljs.core.Keyword(null,"use-test-hr","use-test-hr",-1560818624).cljs$core$IFn$_invoke$arity$1(config);
var inv_k = (1.0 / k);
var n__5762__auto___28567 = n_sims;
var s_28568 = (0);
while(true){
if((s_28568 < n__5762__auto___28567)){
var offset_28569 = (s_28568 * n_total);
var trial_obs_t_28570 = (new Float64Array(n_total));
var trial_is_ev_28571 = (new Int8Array(n_total));
var is_gps_28572 = (new Int8Array(n_total));
var n__5762__auto___28573__$1 = n_per_arm;
var i_28574 = (0);
while(true){
if((i_28574 < n__5762__auto___28573__$1)){
(is_gps_28572[i_28574] = (1));

var G__28575 = (i_28574 + (1));
i_28574 = G__28575;
continue;
} else {
}
break;
}

app.stress_test.simulate.shuffle_array(is_gps_28572);

var n__5762__auto___28576__$1 = n_total;
var i_28577 = (0);
while(true){
if((i_28577 < n__5762__auto___28576__$1)){
var idx_28578 = (offset_28569 + i_28577);
var e_val_28579 = (enroll_arr[idx_28578]);
var s_val_28580 = (scale * Math.pow((- Math.log((1.0 - Math.random()))),inv_k));
var f_ia_28581 = Math.max((t_ia - e_val_28579),0.0);
var f_upd_28582 = Math.max((t_upd - e_val_28579),0.0);
var f_pr3_28583 = Math.max((t_pr3 - e_val_28579),0.0);
if((s_val_28580 <= f_ia_28581)){
(ev_ia[s_28568] = ((ev_ia[s_28568]) + (1)));

if(((is_gps_28572[i_28577]) === (1))){
(gps_ev_ia[s_28568] = ((gps_ev_ia[s_28568]) + (1)));
} else {
}
} else {
}

if((s_val_28580 <= f_upd_28582)){
(ev_upd[s_28568] = ((ev_upd[s_28568]) + (1)));
} else {
}

if((s_val_28580 <= f_pr3_28583)){
(ev_pr3[s_28568] = ((ev_pr3[s_28568]) + (1)));
} else {
}

(trial_obs_t_28570[i_28577] = Math.min(s_val_28580,f_ia_28581));

(trial_is_ev_28571[i_28577] = (((s_val_28580 <= f_ia_28581))?(1):(0)));

var G__28584 = (i_28577 + (1));
i_28577 = G__28584;
continue;
} else {
}
break;
}

var s_at_min_28585 = app.stress_test.simulate.km_survival_single(trial_obs_t_28570,trial_is_ev_28571,pool_mos_min);
var s_at_max_28586 = app.stress_test.simulate.km_survival_single(trial_obs_t_28570,trial_is_ev_28571,pool_mos_max);
if((((s_at_min_28585 > 0.5)) && ((s_at_max_28586 < 0.5)))){
(pass_pool[s_28568] = (1));
} else {
}

var G__28587 = (s_28568 + (1));
s_28568 = G__28587;
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
var sum_gps_ev_ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var n__5762__auto___28588 = n_sims;
var s_28589 = (0);
while(true){
if((s_28589 < n__5762__auto___28588)){
var e_ia_28590 = (ev_ia[s_28589]);
var e_upd_28591 = (ev_upd[s_28589]);
var e_pr3_28592 = (ev_pr3[s_28589]);
var g_ia_28593 = (gps_ev_ia[s_28589]);
var p_pool_28594 = ((pass_pool[s_28589]) === (1));
var i_upd_28595 = (e_upd_28591 - e_ia_28590);
var i_pr3_28596 = (e_pr3_28592 - e_upd_28591);
var pass_hr_28597 = (g_ia_28593 < (futility_hr_max * (e_ia_28590 / (futility_hr_max + (1)))));
var passed_ia_28598 = ((pass_hr_28597) && (p_pool_28594));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_ev_ia,cljs.core._PLUS_,e_ia_28590);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_upd,cljs.core._PLUS_,i_upd_28595);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_pr3,cljs.core._PLUS_,i_pr3_28596);

if(passed_ia_28598){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_passed_ia,cljs.core.inc);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_gps_ev_ia,cljs.core._PLUS_,g_ia_28593);

var c1_28599 = ((cljs.core.not(use_test_ia)) || ((e_ia_28590 <= obs_ev_ia)));
var c2_28600 = ((cljs.core.not(use_test_upd)) || ((i_upd_28595 <= obs_inc_upd)));
var c3_28601 = ((cljs.core.not(use_test_pr3)) || ((i_pr3_28596 <= obs_inc_pr3)));
var c4_28602 = ((cljs.core.not(use_test_pool_mos)) || (p_pool_28594));
var c5_28603 = ((cljs.core.not(use_test_hr)) || (pass_hr_28597));
if((e_ia_28590 <= obs_ev_ia)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_ev_ia_le_60,cljs.core.inc);
} else {
}

if((i_upd_28595 <= obs_inc_upd)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_upd_le_12,cljs.core.inc);
} else {
}

if((i_pr3_28596 <= obs_inc_pr3)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_pr3_le_6,cljs.core.inc);
} else {
}

if(((c1_28599) && (((c2_28600) && (((c3_28601) && (((c4_28602) && (c5_28603))))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(joint_pass_count,cljs.core.inc);
} else {
}

var G__28604 = (s_28589 + (1));
s_28589 = G__28604;
continue;
} else {
}
break;
}

var exp_ev_ia = (cljs.core.deref(sum_ev_ia) / n_sims);
var exp_gps_ev_ia = (cljs.core.deref(sum_gps_ev_ia) / n_sims);
var exp_bat_ev_ia = (exp_ev_ia - exp_gps_ev_ia);
var exp_hr_ia = (((exp_bat_ev_ia > (0)))?(exp_gps_ev_ia / exp_bat_ev_ia):Number.POSITIVE_INFINITY);
var exp_inc_upd = (cljs.core.deref(sum_inc_upd) / n_sims);
var exp_inc_pr3 = (cljs.core.deref(sum_inc_pr3) / n_sims);
var residual = Math.max(Math.abs((exp_ev_ia - obs_ev_ia)),Math.abs((exp_inc_upd - obs_inc_upd)),Math.abs((exp_inc_pr3 - obs_inc_pr3)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"p_inc_upd_le_12","p_inc_upd_le_12",-642152286),new cljs.core.Keyword(null,"p_pass_ia","p_pass_ia",-1033186493),new cljs.core.Keyword(null,"residual","residual",2138156039),new cljs.core.Keyword(null,"expected_inc_upd","expected_inc_upd",111886599),new cljs.core.Keyword(null,"p_inc_pr3_le_6","p_inc_pr3_le_6",-150583961),new cljs.core.Keyword(null,"mos","mos",1902052264),new cljs.core.Keyword(null,"expected_ev_ia","expected_ev_ia",-70245782),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"p_joint","p_joint",1098754735),new cljs.core.Keyword(null,"p_ev_ia_le_60","p_ev_ia_le_60",939381615),new cljs.core.Keyword(null,"expected_hr_ia","expected_hr_ia",-1992865776),new cljs.core.Keyword(null,"expected_inc_pr3","expected_inc_pr3",1043830871)],[(cljs.core.deref(total_inc_upd_le_12) / n_sims),(cljs.core.deref(total_passed_ia) / n_sims),residual,exp_inc_upd,(cljs.core.deref(total_inc_pr3_le_6) / n_sims),mos,exp_ev_ia,k,(cljs.core.deref(joint_pass_count) / n_sims),(cljs.core.deref(total_ev_ia_le_60) / n_sims),exp_hr_ia,exp_inc_pr3]);
});

//# sourceMappingURL=app.stress_test.simulate.js.map
