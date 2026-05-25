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
var vec__29205 = cljs.core.first(remaining_bands);
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(0),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29205,(2),null);
if((n > (0))){
var n__5616__auto___29221 = n_sims;
var s_29222 = (0);
while(true){
if((s_29222 < n__5616__auto___29221)){
var n__5616__auto___29223__$1 = n;
var i_29224 = (0);
while(true){
if((i_29224 < n__5616__auto___29223__$1)){
(enroll[(((s_29222 * n_total) + col) + i_29224)] = app.stress_test.simulate.uniform_draw(lo,hi));

var G__29225 = (i_29224 + (1));
i_29224 = G__29225;
continue;
} else {
}
break;
}

var G__29226 = (s_29222 + (1));
s_29222 = G__29226;
continue;
} else {
}
break;
}

var G__29227 = (col + n);
var G__29228 = cljs.core.rest(remaining_bands);
col = G__29227;
remaining_bands = G__29228;
continue;
} else {
var G__29229 = col;
var G__29230 = cljs.core.rest(remaining_bands);
col = G__29229;
remaining_bands = G__29230;
continue;
}
} else {
var n__5616__auto___29231 = n_sims;
var s_29232 = (0);
while(true){
if((s_29232 < n__5616__auto___29231)){
var start_29233 = (s_29232 * n_total);
var end_29234 = (start_29233 + n_total);
var sim_enroll_29235 = enroll.slice(start_29233,end_29234);
sim_enroll_29235.sort(((function (s_29232,col,remaining_bands,start_29233,end_29234,sim_enroll_29235,n__5616__auto___29231,enroll){
return (function (a,b){
return (a - b);
});})(s_29232,col,remaining_bands,start_29233,end_29234,sim_enroll_29235,n__5616__auto___29231,enroll))
);

enroll.set(sim_enroll_29235,start_29233);

var G__29236 = (s_29232 + (1));
s_29232 = G__29236;
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
var n__5616__auto___29237 = n;
var i_29238 = (0);
while(true){
if((i_29238 < n__5616__auto___29237)){
(indices[i_29238] = i_29238);

var G__29239 = (i_29238 + (1));
i_29238 = G__29239;
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
var G__29240 = (i + (1));
var G__29241 = (surv * (1.0 - (1.0 / n_at_risk)));
i = G__29240;
surv = G__29241;
continue;
} else {
if((t > target_time)){
return surv;
} else {
var G__29242 = (i + (1));
var G__29243 = surv;
i = G__29242;
surv = G__29243;
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

var G__29244 = (i - (1));
i = G__29244;
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
app.stress_test.simulate.simulate_one_combo = (function app$stress_test$simulate$simulate_one_combo(p__29215){
var map__29216 = p__29215;
var map__29216__$1 = cljs.core.__destructure_map(map__29216);
var mos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,new cljs.core.Keyword(null,"mos","mos",1902052264));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var n_sims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,new cljs.core.Keyword(null,"n-sims","n-sims",979948804));
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216__$1,new cljs.core.Keyword(null,"config","config",994861415));
var scale = app.stress_test.simulate.weibull_scale_from_median(mos,k);
var n_total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29214_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29214_SHARP_,(2));
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
var n__5616__auto___29246 = n_sims;
var s_29247 = (0);
while(true){
if((s_29247 < n__5616__auto___29246)){
var offset_29248 = (s_29247 * n_total);
var trial_obs_t_29249 = (new Float64Array(n_total));
var trial_is_ev_29250 = (new Int8Array(n_total));
var is_gps_29251 = (new Int8Array(n_total));
var n__5616__auto___29252__$1 = n_per_arm;
var i_29253 = (0);
while(true){
if((i_29253 < n__5616__auto___29252__$1)){
(is_gps_29251[i_29253] = (1));

var G__29254 = (i_29253 + (1));
i_29253 = G__29254;
continue;
} else {
}
break;
}

app.stress_test.simulate.shuffle_array(is_gps_29251);

var n__5616__auto___29255__$1 = n_total;
var i_29256 = (0);
while(true){
if((i_29256 < n__5616__auto___29255__$1)){
var idx_29257 = (offset_29248 + i_29256);
var e_val_29258 = (enroll_arr[idx_29257]);
var s_val_29259 = (scale * Math.pow((- Math.log((1.0 - Math.random()))),inv_k));
var f_ia_29260 = Math.max((t_ia - e_val_29258),0.0);
var f_upd_29261 = Math.max((t_upd - e_val_29258),0.0);
var f_pr3_29262 = Math.max((t_pr3 - e_val_29258),0.0);
if((s_val_29259 <= f_ia_29260)){
(ev_ia[s_29247] = ((ev_ia[s_29247]) + (1)));

if(((is_gps_29251[i_29256]) === (1))){
(gps_ev_ia[s_29247] = ((gps_ev_ia[s_29247]) + (1)));
} else {
}
} else {
}

if((s_val_29259 <= f_upd_29261)){
(ev_upd[s_29247] = ((ev_upd[s_29247]) + (1)));
} else {
}

if((s_val_29259 <= f_pr3_29262)){
(ev_pr3[s_29247] = ((ev_pr3[s_29247]) + (1)));
} else {
}

(trial_obs_t_29249[i_29256] = Math.min(s_val_29259,f_ia_29260));

(trial_is_ev_29250[i_29256] = (((s_val_29259 <= f_ia_29260))?(1):(0)));

var G__29263 = (i_29256 + (1));
i_29256 = G__29263;
continue;
} else {
}
break;
}

var s_at_12_29264 = app.stress_test.simulate.km_survival_single(trial_obs_t_29249,trial_is_ev_29250,pool_mos_min);
if((s_at_12_29264 > 0.5)){
(pass_pool[s_29247] = (1));
} else {
}

var G__29265 = (s_29247 + (1));
s_29247 = G__29265;
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
var n__5616__auto___29266 = n_sims;
var s_29267 = (0);
while(true){
if((s_29267 < n__5616__auto___29266)){
var e_ia_29268 = (ev_ia[s_29267]);
var e_upd_29269 = (ev_upd[s_29267]);
var e_pr3_29270 = (ev_pr3[s_29267]);
var g_ia_29271 = (gps_ev_ia[s_29267]);
var p_pool_29272 = ((pass_pool[s_29267]) === (1));
var i_upd_29273 = (e_upd_29269 - e_ia_29268);
var i_pr3_29274 = (e_pr3_29270 - e_upd_29269);
var pass_hr_29275 = (g_ia_29271 < (futility_hr_max * (e_ia_29268 / (futility_hr_max + (1)))));
var passed_ia_29276 = ((pass_hr_29275) && (p_pool_29272));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_ev_ia,cljs.core._PLUS_,e_ia_29268);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_upd,cljs.core._PLUS_,i_upd_29273);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sum_inc_pr3,cljs.core._PLUS_,i_pr3_29274);

if(passed_ia_29276){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_passed_ia,cljs.core.inc);
} else {
}

var c1_29277 = (e_ia_29268 <= obs_ev_ia);
var c2_29278 = (i_upd_29273 <= obs_inc_upd);
var c3_29279 = (i_pr3_29274 <= obs_inc_pr3);
if(c1_29277){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_ev_ia_le_60,cljs.core.inc);
} else {
}

if(c2_29278){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_upd_le_12,cljs.core.inc);
} else {
}

if(c3_29279){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(total_inc_pr3_le_6,cljs.core.inc);
} else {
}

if(((c1_29277) && (((c2_29278) && (c3_29279))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(joint_pass_count,cljs.core.inc);
} else {
}

var G__29280 = (s_29267 + (1));
s_29267 = G__29280;
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
