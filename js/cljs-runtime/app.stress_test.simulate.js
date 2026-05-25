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
var vec__27432 = cljs.core.first(remaining_bands);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27432,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27432,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27432,(2),null);
if((n > (0))){
var n__5616__auto___27551 = n_sims;
var s_27552 = (0);
while(true){
if((s_27552 < n__5616__auto___27551)){
var n__5616__auto___27554__$1 = n;
var i_27555 = (0);
while(true){
if((i_27555 < n__5616__auto___27554__$1)){
(enroll[(((s_27552 * n_total) + col) + i_27555)] = app.stress_test.simulate.uniform_draw(lo,hi));

var G__27556 = (i_27555 + (1));
i_27555 = G__27556;
continue;
} else {
}
break;
}

var G__27557 = (s_27552 + (1));
s_27552 = G__27557;
continue;
} else {
}
break;
}

var G__27558 = (col + n);
var G__27559 = cljs.core.rest(remaining_bands);
col = G__27558;
remaining_bands = G__27559;
continue;
} else {
var G__27560 = col;
var G__27561 = cljs.core.rest(remaining_bands);
col = G__27560;
remaining_bands = G__27561;
continue;
}
} else {
var n__5616__auto___27562 = n_sims;
var s_27563 = (0);
while(true){
if((s_27563 < n__5616__auto___27562)){
var start_27564 = (s_27563 * n_total);
var end_27565 = (start_27564 + n_total);
var sim_enroll_27566 = enroll.slice(start_27564,end_27565);
sim_enroll_27566.sort(((function (s_27563,col,remaining_bands,start_27564,end_27565,sim_enroll_27566,n__5616__auto___27562,enroll){
return (function (a,b){
return (a - b);
});})(s_27563,col,remaining_bands,start_27564,end_27565,sim_enroll_27566,n__5616__auto___27562,enroll))
);

enroll.set(sim_enroll_27566,start_27564);

var G__27567 = (s_27563 + (1));
s_27563 = G__27567;
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
var n__5616__auto___27570 = n;
var i_27571 = (0);
while(true){
if((i_27571 < n__5616__auto___27570)){
(indices[i_27571] = i_27571);

var G__27576 = (i_27571 + (1));
i_27571 = G__27576;
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
var G__27577 = (i + (1));
var G__27578 = (surv * (1.0 - (1.0 / n_at_risk)));
i = G__27577;
surv = G__27578;
continue;
} else {
if((t > target_time)){
return surv;
} else {
var G__27580 = (i + (1));
var G__27581 = surv;
i = G__27580;
surv = G__27581;
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

var G__27582 = (i - (1));
i = G__27582;
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
app.stress_test.simulate.simulate_one_combo = (function app$stress_test$simulate$simulate_one_combo(p__27502){
var map__27503 = p__27502;
var map__27503__$1 = cljs.core.__destructure_map(map__27503);
var mos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27503__$1,new cljs.core.Keyword(null,"mos","mos",1902052264));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27503__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27503__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27503__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27503__$1,new cljs.core.Keyword(null,"config","config",994861415));
var scale = app.stress_test.simulate.weibull_scale_from_median(mos,k);
var n_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27483_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__27483_SHARP_,(2));
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
var n__5616__auto___27583 = n_sims;
var s_27584 = (0);
while(true){
if((s_27584 < n__5616__auto___27583)){
var offset_27585 = (s_27584 * n_total);
var trial_obs_t_27586 = (new Float64Array(n_total));
var trial_is_ev_27587 = (new Int8Array(n_total));
var is_gps_27588 = (new Int8Array(n_total));
var n__5616__auto___27589__$1 = n_per_arm;
var i_27590 = (0);
while(true){
if((i_27590 < n__5616__auto___27589__$1)){
(is_gps_27588[i_27590] = (1));

var G__27591 = (i_27590 + (1));
i_27590 = G__27591;
continue;
} else {
}
break;
}

app.stress_test.simulate.shuffle_array(is_gps_27588);

var n__5616__auto___27592__$1 = n_total;
var i_27593 = (0);
while(true){
if((i_27593 < n__5616__auto___27592__$1)){
var idx_27594 = (offset_27585 + i_27593);
var e_val_27595 = (enroll_arr[idx_27594]);
var s_val_27596 = (scale * Math.pow((- Math.log((1.0 - Math.random()))),inv_k));
var f_ia_27597 = Math.max((t_ia - e_val_27595),0.0);
var f_upd_27598 = Math.max((t_upd - e_val_27595),0.0);
var f_pr3_27599 = Math.max((t_pr3 - e_val_27595),0.0);
if((s_val_27596 <= f_ia_27597)){
(ev_ia[s_27584] = ((ev_ia[s_27584]) + (1)));

if(((is_gps_27588[i_27593]) === (1))){
(gps_ev_ia[s_27584] = ((gps_ev_ia[s_27584]) + (1)));
} else {
}
} else {
}

if((s_val_27596 <= f_upd_27598)){
(ev_upd[s_27584] = ((ev_upd[s_27584]) + (1)));
} else {
}

if((s_val_27596 <= f_pr3_27599)){
(ev_pr3[s_27584] = ((ev_pr3[s_27584]) + (1)));
} else {
}

(trial_obs_t_27586[i_27593] = Math.min(s_val_27596,f_ia_27597));

(trial_is_ev_27587[i_27593] = (((s_val_27596 <= f_ia_27597))?(1):(0)));

var G__27609 = (i_27593 + (1));
i_27593 = G__27609;
continue;
} else {
}
break;
}

var s_at_12_27610 = app.stress_test.simulate.km_survival_single(trial_obs_t_27586,trial_is_ev_27587,pool_mos_min);
if((s_at_12_27610 > 0.5)){
(pass_pool[s_27584] = (1));
} else {
}

var G__27611 = (s_27584 + (1));
s_27584 = G__27611;
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
var n__5616__auto___27615 = n_sims;
var s_27617 = (0);
while(true){
if((s_27617 < n__5616__auto___27615)){
var e_ia_27618 = (ev_ia[s_27617]);
var e_upd_27619 = (ev_upd[s_27617]);
var e_pr3_27620 = (ev_pr3[s_27617]);
var g_ia_27621 = (gps_ev_ia[s_27617]);
var p_pool_27622 = ((pass_pool[s_27617]) === (1));
var i_upd_27623 = (e_upd_27619 - e_ia_27618);
var i_pr3_27624 = (e_pr3_27620 - e_upd_27619);
var pass_hr_27625 = (g_ia_27621 < (futility_hr_max * (e_ia_27618 / (futility_hr_max + (1)))));
var passed_ia_27626 = ((pass_hr_27625) && (p_pool_27622));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_ev_ia,cljs.core._PLUS_,e_ia_27618);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_upd,cljs.core._PLUS_,i_upd_27623);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_pr3,cljs.core._PLUS_,i_pr3_27624);

if(passed_ia_27626){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_passed_ia,cljs.core.inc);
} else {
}

var c1_27627 = (e_ia_27618 <= obs_ev_ia);
var c2_27628 = (i_upd_27623 <= obs_inc_upd);
var c3_27629 = (i_pr3_27624 <= obs_inc_pr3);
if(c1_27627){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_ev_ia_le_60,cljs.core.inc);
} else {
}

if(c2_27628){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_upd_le_12,cljs.core.inc);
} else {
}

if(c3_27629){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_pr3_le_6,cljs.core.inc);
} else {
}

if(((c1_27627) && (((c2_27628) && (c3_27629))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(joint_pass_count,cljs.core.inc);
} else {
}

var G__27630 = (s_27617 + (1));
s_27617 = G__27630;
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
