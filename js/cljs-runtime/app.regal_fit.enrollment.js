goog.provide('app.regal_fit.enrollment');
/**
 * Computes enrollment points and weights for a single time band.
 * Accepts a band [low high count] and subjects-per-unit density.
 */
app.regal_fit.enrollment.calculate_band_data = (function app$regal_fit$enrollment$calculate_band_data(p__25080,subjects_per_unit){
var vec__25082 = p__25080;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25082,(2),null);
var n_sub_samples = Math.max((2),Math.floor(((high - low) * subjects_per_unit)));
var h = ((high - low) / n_sub_samples);
var start = (low + (h / 2.0));
var stop = (high - (h / 2.0));
var enroll_points = (cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3(start,stop,n_sub_samples) : cljs.numpy.linspace.call(null,start,stop,n_sub_samples));
var enroll_weights = (function (){var G__25085 = [n_sub_samples];
var G__25086 = (count / n_sub_samples);
var G__25087 = "float64";
return (cljs.numpy.full.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.full.cljs$core$IFn$_invoke$arity$3(G__25085,G__25086,G__25087) : cljs.numpy.full.call(null,G__25085,G__25086,G__25087));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),enroll_points,new cljs.core.Keyword(null,"weights","weights",-1097626197),enroll_weights], null);
});
/**
 * Calculates expected enrollment times and weights based on config.
 */
app.regal_fit.enrollment.expected_enrollment_times = (function app$regal_fit$enrollment$expected_enrollment_times(cfg){
var subjects_per_unit = (8);
var bands = new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(cfg);
var band_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25088_SHARP_){
return app.regal_fit.enrollment.calculate_band_data(p1__25088_SHARP_,subjects_per_unit);
}),bands);
var all_points = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),band_data));
var all_weights = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weights","weights",-1097626197),band_data));
if(cljs.core.empty_QMARK_(all_points)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25092 = [];
var G__25093 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__25092,G__25093) : cljs.numpy.array.call(null,G__25092,G__25093));
})(),(function (){var G__25094 = [];
var G__25095 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__25094,G__25095) : cljs.numpy.array.call(null,G__25094,G__25095));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.numpy.concatenate.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.concatenate.cljs$core$IFn$_invoke$arity$1(all_points) : cljs.numpy.concatenate.call(null,all_points)),(cljs.numpy.concatenate.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.concatenate.cljs$core$IFn$_invoke$arity$1(all_weights) : cljs.numpy.concatenate.call(null,all_weights))], null);
}
});
/**
 * Processes a chunk of survival parameters to compute expected events.
 */
app.regal_fit.enrollment.calculate_events_chunk = (function app$regal_fit$enrollment$calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start,end){
var params_chunk = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var G__25096 = cljs.numpy.slice(p,start,end);
var G__25097 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25096,G__25097) : cljs.numpy.reshape.call(null,G__25096,G__25097));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__25098 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__25099 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__25098,G__25099) : cljs.numpy.subtract.call(null,G__25098,G__25099));
})();
var weighted_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__25100 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_S,(2)) : cljs.numpy.sum.call(null,weighted_S,(2)));
var G__25101 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__25100,G__25101) : cljs.numpy.multiply.call(null,G__25100,G__25101));
})();
return events;
});
/**
 * Calculates expected number of events per arm.
 */
app.regal_fit.enrollment.expected_arm_events = (function app$regal_fit$enrollment$expected_arm_events(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__25102 = calendar_times;
var G__25103 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25102,G__25103) : cljs.numpy.reshape.call(null,G__25102,G__25103));
})();
var enroll_2d = (function (){var G__25104 = enroll_pts;
var G__25105 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25104,G__25105) : cljs.numpy.reshape.call(null,G__25104,G__25105));
})();
var follow_up = (function (){var G__25106 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__25107 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__25106,G__25107) : cljs.numpy.maximum.call(null,G__25106,G__25107));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var output_array = (function (){var G__25108 = [grid_size,time_size];
var G__25109 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__25108,G__25109) : cljs.numpy.empty.call(null,G__25108,G__25109));
})();
var follow_up_3d = (function (){var G__25119 = follow_up;
var G__25120 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25119,G__25120) : cljs.numpy.reshape.call(null,G__25119,G__25120));
})();
var weights_3d = (function (){var G__25122 = enroll_weights;
var G__25123 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25122,G__25123) : cljs.numpy.reshape.call(null,G__25122,G__25123));
})();
var chunk_size = (256);
var seq__25124_25450 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__25125_25451 = null;
var count__25126_25452 = (0);
var i__25127_25453 = (0);
while(true){
if((i__25127_25453 < count__25126_25452)){
var start_25455 = chunk__25125_25451.cljs$core$IIndexed$_nth$arity$2(null,i__25127_25453);
var end_25457 = Math.min((start_25455 + chunk_size),grid_size);
var events_25458 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_25455,end_25457);
cljs.numpy.set_block(output_array,events_25458,start_25455);


var G__25459 = seq__25124_25450;
var G__25460 = chunk__25125_25451;
var G__25461 = count__25126_25452;
var G__25462 = (i__25127_25453 + (1));
seq__25124_25450 = G__25459;
chunk__25125_25451 = G__25460;
count__25126_25452 = G__25461;
i__25127_25453 = G__25462;
continue;
} else {
var temp__5825__auto___25463 = cljs.core.seq(seq__25124_25450);
if(temp__5825__auto___25463){
var seq__25124_25466__$1 = temp__5825__auto___25463;
if(cljs.core.chunked_seq_QMARK_(seq__25124_25466__$1)){
var c__5548__auto___25467 = cljs.core.chunk_first(seq__25124_25466__$1);
var G__25468 = cljs.core.chunk_rest(seq__25124_25466__$1);
var G__25469 = c__5548__auto___25467;
var G__25470 = cljs.core.count(c__5548__auto___25467);
var G__25471 = (0);
seq__25124_25450 = G__25468;
chunk__25125_25451 = G__25469;
count__25126_25452 = G__25470;
i__25127_25453 = G__25471;
continue;
} else {
var start_25472 = cljs.core.first(seq__25124_25466__$1);
var end_25473 = Math.min((start_25472 + chunk_size),grid_size);
var events_25474 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_25472,end_25473);
cljs.numpy.set_block(output_array,events_25474,start_25472);


var G__25475 = cljs.core.next(seq__25124_25466__$1);
var G__25476 = null;
var G__25477 = (0);
var G__25478 = (0);
seq__25124_25450 = G__25475;
chunk__25125_25451 = G__25476;
count__25126_25452 = G__25477;
i__25127_25453 = G__25478;
continue;
}
} else {
}
}
break;
}

return output_array;
});
/**
 * Processes a chunk of survival parameters to compute expected events and variance.
 */
app.regal_fit.enrollment.calculate_events_and_var_chunk = (function app$regal_fit$enrollment$calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start,end){
var params_chunk = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var G__25188 = cljs.numpy.slice(p,start,end);
var G__25189 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25188,G__25189) : cljs.numpy.reshape.call(null,G__25188,G__25189));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__25199 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__25200 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__25199,G__25200) : cljs.numpy.subtract.call(null,G__25199,G__25200));
})();
var weighted_E = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__25201 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_E,(2)) : cljs.numpy.sum.call(null,weighted_E,(2)));
var G__25202 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__25201,G__25202) : cljs.numpy.multiply.call(null,G__25201,G__25202));
})();
var S_times_one_minus_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(survival_res,one_minus_S) : cljs.numpy.multiply.call(null,survival_res,one_minus_S));
var weighted_V = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(S_times_one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,S_times_one_minus_S,weights_3d));
var variance = (function (){var G__25206 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_V,(2)) : cljs.numpy.sum.call(null,weighted_V,(2)));
var G__25207 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__25206,G__25207) : cljs.numpy.multiply.call(null,G__25206,G__25207));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"variance","variance",1132010827),variance], null);
});
/**
 * Calculates expected number of events and variance per arm.
 */
app.regal_fit.enrollment.expected_arm_events_and_variance = (function app$regal_fit$enrollment$expected_arm_events_and_variance(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__25248 = calendar_times;
var G__25249 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25248,G__25249) : cljs.numpy.reshape.call(null,G__25248,G__25249));
})();
var enroll_2d = (function (){var G__25261 = enroll_pts;
var G__25262 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25261,G__25262) : cljs.numpy.reshape.call(null,G__25261,G__25262));
})();
var follow_up = (function (){var G__25264 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__25265 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__25264,G__25265) : cljs.numpy.maximum.call(null,G__25264,G__25265));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var ev_array = (function (){var G__25269 = [grid_size,time_size];
var G__25270 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__25269,G__25270) : cljs.numpy.empty.call(null,G__25269,G__25270));
})();
var var_array = (function (){var G__25272 = [grid_size,time_size];
var G__25273 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__25272,G__25273) : cljs.numpy.empty.call(null,G__25272,G__25273));
})();
var follow_up_3d = (function (){var G__25274 = follow_up;
var G__25275 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25274,G__25275) : cljs.numpy.reshape.call(null,G__25274,G__25275));
})();
var weights_3d = (function (){var G__25277 = enroll_weights;
var G__25278 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__25277,G__25278) : cljs.numpy.reshape.call(null,G__25277,G__25278));
})();
var chunk_size = (256);
var seq__25283_25502 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__25285_25503 = null;
var count__25286_25504 = (0);
var i__25287_25505 = (0);
while(true){
if((i__25287_25505 < count__25286_25504)){
var start_25506 = chunk__25285_25503.cljs$core$IIndexed$_nth$arity$2(null,i__25287_25505);
var end_25508 = Math.min((start_25506 + chunk_size),grid_size);
var map__25357_25509 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_25506,end_25508);
var map__25357_25510__$1 = cljs.core.__destructure_map(map__25357_25509);
var events_25511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25357_25510__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_25512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25357_25510__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_25511,start_25506);

cljs.numpy.set_block(var_array,variance_25512,start_25506);


var G__25514 = seq__25283_25502;
var G__25515 = chunk__25285_25503;
var G__25516 = count__25286_25504;
var G__25517 = (i__25287_25505 + (1));
seq__25283_25502 = G__25514;
chunk__25285_25503 = G__25515;
count__25286_25504 = G__25516;
i__25287_25505 = G__25517;
continue;
} else {
var temp__5825__auto___25518 = cljs.core.seq(seq__25283_25502);
if(temp__5825__auto___25518){
var seq__25283_25519__$1 = temp__5825__auto___25518;
if(cljs.core.chunked_seq_QMARK_(seq__25283_25519__$1)){
var c__5548__auto___25520 = cljs.core.chunk_first(seq__25283_25519__$1);
var G__25523 = cljs.core.chunk_rest(seq__25283_25519__$1);
var G__25524 = c__5548__auto___25520;
var G__25525 = cljs.core.count(c__5548__auto___25520);
var G__25526 = (0);
seq__25283_25502 = G__25523;
chunk__25285_25503 = G__25524;
count__25286_25504 = G__25525;
i__25287_25505 = G__25526;
continue;
} else {
var start_25527 = cljs.core.first(seq__25283_25519__$1);
var end_25540 = Math.min((start_25527 + chunk_size),grid_size);
var map__25362_25541 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_25527,end_25540);
var map__25362_25542__$1 = cljs.core.__destructure_map(map__25362_25541);
var events_25543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25362_25542__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_25544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25362_25542__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_25543,start_25527);

cljs.numpy.set_block(var_array,variance_25544,start_25527);


var G__25545 = cljs.core.next(seq__25283_25519__$1);
var G__25546 = null;
var G__25547 = (0);
var G__25548 = (0);
seq__25283_25502 = G__25545;
chunk__25285_25503 = G__25546;
count__25286_25504 = G__25547;
i__25287_25505 = G__25548;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),ev_array,new cljs.core.Keyword(null,"variance","variance",1132010827),var_array], null);
});
/**
 * Generates monthly enrollment bands following an S-curve (logistic).
 * Ported from regal_stress_test.py.
 */
app.regal_fit.enrollment.get_s_curve_enrollment_bands = (function app$regal_fit$enrollment$get_s_curve_enrollment_bands(n_total,total_months,median_month,k){
var logistic = (function (t){
return (1.0 / (1.0 + Math.exp(((- k) * (t - median_month)))));
});
var t_vals = cljs.core.range.cljs$core$IFn$_invoke$arity$1((total_months + (1)));
var c_vals = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logistic,t_vals);
var c0 = cljs.core.first(c_vals);
var cn = cljs.core.last(c_vals);
var norm_c = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return (((c - c0) / (cn - c0)) * n_total);
}),c_vals);
var n_monthly = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(norm_c,(i + (1))) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(norm_c,i));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(total_months));
var n_int = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(Math.round,n_monthly);
var sum_n = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,n_int);
var diff = (n_total - sum_n);
var final_n = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(diff,(0)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(n_int,(cljs.core.count(n_int) - (1)),cljs.core._PLUS_,diff):n_int);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
if((n > (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i + (1)),(n | (0))], null);
} else {
return null;
}
}),final_n)));
});

//# sourceMappingURL=app.regal_fit.enrollment.js.map
