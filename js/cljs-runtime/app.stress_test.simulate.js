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
var vec__35632 = cljs.core.first(remaining_bands);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35632,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35632,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35632,(2),null);
if((n > (0))){
var n__5762__auto___35650 = n_sims;
var s_35651 = (0);
while(true){
if((s_35651 < n__5762__auto___35650)){
var n__5762__auto___35652__$1 = n;
var i_35653 = (0);
while(true){
if((i_35653 < n__5762__auto___35652__$1)){
(enroll[(((s_35651 * n_total) + col) + i_35653)] = app.stress_test.simulate.uniform_draw(lo,hi));

var G__35654 = (i_35653 + (1));
i_35653 = G__35654;
continue;
} else {
}
break;
}

var G__35655 = (s_35651 + (1));
s_35651 = G__35655;
continue;
} else {
}
break;
}

var G__35662 = (col + n);
var G__35663 = cljs.core.rest(remaining_bands);
col = G__35662;
remaining_bands = G__35663;
continue;
} else {
var G__35666 = col;
var G__35667 = cljs.core.rest(remaining_bands);
col = G__35666;
remaining_bands = G__35667;
continue;
}
} else {
var n__5762__auto___35668 = n_sims;
var s_35669 = (0);
while(true){
if((s_35669 < n__5762__auto___35668)){
var start_35670 = (s_35669 * n_total);
var end_35671 = (start_35670 + n_total);
var sim_enroll_35672 = enroll.slice(start_35670,end_35671);
sim_enroll_35672.sort(((function (s_35669,col,remaining_bands,start_35670,end_35671,sim_enroll_35672,n__5762__auto___35668,enroll){
return (function (a,b){
return (a - b);
});})(s_35669,col,remaining_bands,start_35670,end_35671,sim_enroll_35672,n__5762__auto___35668,enroll))
);

enroll.set(sim_enroll_35672,start_35670);

var G__35675 = (s_35669 + (1));
s_35669 = G__35675;
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
var n__5762__auto___35676 = n;
var i_35677 = (0);
while(true){
if((i_35677 < n__5762__auto___35676)){
(indices[i_35677] = i_35677);

var G__35678 = (i_35677 + (1));
i_35677 = G__35678;
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
var G__35679 = (i + (1));
var G__35680 = (surv * (1.0 - (1.0 / n_at_risk)));
i = G__35679;
surv = G__35680;
continue;
} else {
if((t > target_time)){
return surv;
} else {
var G__35684 = (i + (1));
var G__35685 = surv;
i = G__35684;
surv = G__35685;
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

var G__35686 = (i - (1));
i = G__35686;
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
app.stress_test.simulate.simulate_one_combo = (function app$stress_test$simulate$simulate_one_combo(p__35642){
var map__35643 = p__35642;
var map__35643__$1 = cljs.core.__destructure_map(map__35643);
var mos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"mos","mos",1902052264));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"config","config",994861415));
var scale = app.stress_test.simulate.weibull_scale_from_median(mos,k);
var n_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35638_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__35638_SHARP_,(2));
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
var n__5762__auto___35687 = n_sims;
var s_35688 = (0);
while(true){
if((s_35688 < n__5762__auto___35687)){
var offset_35689 = (s_35688 * n_total);
var trial_obs_t_35690 = (new Float64Array(n_total));
var trial_is_ev_35691 = (new Int8Array(n_total));
var is_gps_35692 = (new Int8Array(n_total));
var n__5762__auto___35693__$1 = n_per_arm;
var i_35694 = (0);
while(true){
if((i_35694 < n__5762__auto___35693__$1)){
(is_gps_35692[i_35694] = (1));

var G__35695 = (i_35694 + (1));
i_35694 = G__35695;
continue;
} else {
}
break;
}

app.stress_test.simulate.shuffle_array(is_gps_35692);

var n__5762__auto___35696__$1 = n_total;
var i_35697 = (0);
while(true){
if((i_35697 < n__5762__auto___35696__$1)){
var idx_35698 = (offset_35689 + i_35697);
var e_val_35699 = (enroll_arr[idx_35698]);
var s_val_35700 = (scale * Math.pow((- Math.log((1.0 - Math.random()))),inv_k));
var f_ia_35701 = Math.max((t_ia - e_val_35699),0.0);
var f_upd_35702 = Math.max((t_upd - e_val_35699),0.0);
var f_pr3_35703 = Math.max((t_pr3 - e_val_35699),0.0);
if((s_val_35700 <= f_ia_35701)){
(ev_ia[s_35688] = ((ev_ia[s_35688]) + (1)));

if(((is_gps_35692[i_35697]) === (1))){
(gps_ev_ia[s_35688] = ((gps_ev_ia[s_35688]) + (1)));
} else {
}
} else {
}

if((s_val_35700 <= f_upd_35702)){
(ev_upd[s_35688] = ((ev_upd[s_35688]) + (1)));
} else {
}

if((s_val_35700 <= f_pr3_35703)){
(ev_pr3[s_35688] = ((ev_pr3[s_35688]) + (1)));
} else {
}

(trial_obs_t_35690[i_35697] = Math.min(s_val_35700,f_ia_35701));

(trial_is_ev_35691[i_35697] = (((s_val_35700 <= f_ia_35701))?(1):(0)));

var G__35710 = (i_35697 + (1));
i_35697 = G__35710;
continue;
} else {
}
break;
}

var s_at_12_35711 = app.stress_test.simulate.km_survival_single(trial_obs_t_35690,trial_is_ev_35691,pool_mos_min);
if((s_at_12_35711 > 0.5)){
(pass_pool[s_35688] = (1));
} else {
}

var G__35712 = (s_35688 + (1));
s_35688 = G__35712;
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
var n__5762__auto___35713 = n_sims;
var s_35714 = (0);
while(true){
if((s_35714 < n__5762__auto___35713)){
var e_ia_35715 = (ev_ia[s_35714]);
var e_upd_35716 = (ev_upd[s_35714]);
var e_pr3_35717 = (ev_pr3[s_35714]);
var g_ia_35718 = (gps_ev_ia[s_35714]);
var p_pool_35719 = ((pass_pool[s_35714]) === (1));
var i_upd_35720 = (e_upd_35716 - e_ia_35715);
var i_pr3_35721 = (e_pr3_35717 - e_upd_35716);
var pass_hr_35722 = (g_ia_35718 < (futility_hr_max * (e_ia_35715 / (futility_hr_max + (1)))));
var passed_ia_35723 = ((pass_hr_35722) && (p_pool_35719));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_ev_ia,cljs.core._PLUS_,e_ia_35715);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_upd,cljs.core._PLUS_,i_upd_35720);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_pr3,cljs.core._PLUS_,i_pr3_35721);

if(passed_ia_35723){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_passed_ia,cljs.core.inc);
} else {
}

var c1_35724 = (e_ia_35715 <= obs_ev_ia);
var c2_35725 = (i_upd_35720 <= obs_inc_upd);
var c3_35726 = (i_pr3_35721 <= obs_inc_pr3);
if(c1_35724){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_ev_ia_le_60,cljs.core.inc);
} else {
}

if(c2_35725){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_upd_le_12,cljs.core.inc);
} else {
}

if(c3_35726){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_pr3_le_6,cljs.core.inc);
} else {
}

if(((c1_35724) && (((c2_35725) && (c3_35726))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(joint_pass_count,cljs.core.inc);
} else {
}

var G__35727 = (s_35714 + (1));
s_35714 = G__35727;
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
