goog.provide('app.regal_fit.enrollment');
/**
 * Computes enrollment points and weights for a single time band.
 * Accepts a band [low high count] and subjects-per-unit density.
 */
app.regal_fit.enrollment.calculate_band_data = (function app$regal_fit$enrollment$calculate_band_data(p__30781,subjects_per_unit){
var vec__30782 = p__30781;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30782,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30782,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30782,(2),null);
var n_sub_samples = Math.max((2),Math.floor(((high - low) * subjects_per_unit)));
var h = ((high - low) / n_sub_samples);
var start = (low + (h / 2.0));
var stop = (high - (h / 2.0));
var enroll_points = (cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3(start,stop,n_sub_samples) : cljs.numpy.linspace.call(null,start,stop,n_sub_samples));
var enroll_weights = (function (){var G__30785 = [n_sub_samples];
var G__30786 = (count / n_sub_samples);
var G__30787 = "float64";
return (cljs.numpy.full.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.full.cljs$core$IFn$_invoke$arity$3(G__30785,G__30786,G__30787) : cljs.numpy.full.call(null,G__30785,G__30786,G__30787));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),enroll_points,new cljs.core.Keyword(null,"weights","weights",-1097626197),enroll_weights], null);
});
/**
 * Calculates expected enrollment times and weights based on config.
 */
app.regal_fit.enrollment.expected_enrollment_times = (function app$regal_fit$enrollment$expected_enrollment_times(cfg){
var subjects_per_unit = (8);
var bands = new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(cfg);
var band_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30788_SHARP_){
return app.regal_fit.enrollment.calculate_band_data(p1__30788_SHARP_,subjects_per_unit);
}),bands);
var all_points = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),band_data));
var all_weights = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weights","weights",-1097626197),band_data));
if(cljs.core.empty_QMARK_(all_points)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30793 = [];
var G__30794 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__30793,G__30794) : cljs.numpy.array.call(null,G__30793,G__30794));
})(),(function (){var G__30795 = [];
var G__30796 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__30795,G__30796) : cljs.numpy.array.call(null,G__30795,G__30796));
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
var G__30797 = cljs.numpy.slice(p,start,end);
var G__30798 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30797,G__30798) : cljs.numpy.reshape.call(null,G__30797,G__30798));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__30799 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__30800 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__30799,G__30800) : cljs.numpy.subtract.call(null,G__30799,G__30800));
})();
var weighted_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__30801 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_S,(2)) : cljs.numpy.sum.call(null,weighted_S,(2)));
var G__30802 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__30801,G__30802) : cljs.numpy.multiply.call(null,G__30801,G__30802));
})();
return events;
});
/**
 * Calculates expected number of events per arm.
 */
app.regal_fit.enrollment.expected_arm_events = (function app$regal_fit$enrollment$expected_arm_events(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__30805 = calendar_times;
var G__30806 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30805,G__30806) : cljs.numpy.reshape.call(null,G__30805,G__30806));
})();
var enroll_2d = (function (){var G__30807 = enroll_pts;
var G__30808 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30807,G__30808) : cljs.numpy.reshape.call(null,G__30807,G__30808));
})();
var follow_up = (function (){var G__30809 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__30810 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__30809,G__30810) : cljs.numpy.maximum.call(null,G__30809,G__30810));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var output_array = (function (){var G__30811 = [grid_size,time_size];
var G__30812 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__30811,G__30812) : cljs.numpy.empty.call(null,G__30811,G__30812));
})();
var follow_up_3d = (function (){var G__30813 = follow_up;
var G__30814 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30813,G__30814) : cljs.numpy.reshape.call(null,G__30813,G__30814));
})();
var weights_3d = (function (){var G__30815 = enroll_weights;
var G__30816 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30815,G__30816) : cljs.numpy.reshape.call(null,G__30815,G__30816));
})();
var chunk_size = (256);
var seq__30817_30873 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__30818_30874 = null;
var count__30819_30875 = (0);
var i__30820_30876 = (0);
while(true){
if((i__30820_30876 < count__30819_30875)){
var start_30877 = chunk__30818_30874.cljs$core$IIndexed$_nth$arity$2(null,i__30820_30876);
var end_30878 = Math.min((start_30877 + chunk_size),grid_size);
var events_30879 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_30877,end_30878);
cljs.numpy.set_block(output_array,events_30879,start_30877);


var G__30880 = seq__30817_30873;
var G__30881 = chunk__30818_30874;
var G__30882 = count__30819_30875;
var G__30883 = (i__30820_30876 + (1));
seq__30817_30873 = G__30880;
chunk__30818_30874 = G__30881;
count__30819_30875 = G__30882;
i__30820_30876 = G__30883;
continue;
} else {
var temp__5825__auto___30884 = cljs.core.seq(seq__30817_30873);
if(temp__5825__auto___30884){
var seq__30817_30885__$1 = temp__5825__auto___30884;
if(cljs.core.chunked_seq_QMARK_(seq__30817_30885__$1)){
var c__5694__auto___30886 = cljs.core.chunk_first(seq__30817_30885__$1);
var G__30888 = cljs.core.chunk_rest(seq__30817_30885__$1);
var G__30889 = c__5694__auto___30886;
var G__30890 = cljs.core.count(c__5694__auto___30886);
var G__30891 = (0);
seq__30817_30873 = G__30888;
chunk__30818_30874 = G__30889;
count__30819_30875 = G__30890;
i__30820_30876 = G__30891;
continue;
} else {
var start_30893 = cljs.core.first(seq__30817_30885__$1);
var end_30894 = Math.min((start_30893 + chunk_size),grid_size);
var events_30895 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_30893,end_30894);
cljs.numpy.set_block(output_array,events_30895,start_30893);


var G__30897 = cljs.core.next(seq__30817_30885__$1);
var G__30898 = null;
var G__30899 = (0);
var G__30900 = (0);
seq__30817_30873 = G__30897;
chunk__30818_30874 = G__30898;
count__30819_30875 = G__30899;
i__30820_30876 = G__30900;
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
var G__30827 = cljs.numpy.slice(p,start,end);
var G__30828 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30827,G__30828) : cljs.numpy.reshape.call(null,G__30827,G__30828));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__30829 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__30830 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__30829,G__30830) : cljs.numpy.subtract.call(null,G__30829,G__30830));
})();
var weighted_E = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__30831 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_E,(2)) : cljs.numpy.sum.call(null,weighted_E,(2)));
var G__30832 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__30831,G__30832) : cljs.numpy.multiply.call(null,G__30831,G__30832));
})();
var S_times_one_minus_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(survival_res,one_minus_S) : cljs.numpy.multiply.call(null,survival_res,one_minus_S));
var weighted_V = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(S_times_one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,S_times_one_minus_S,weights_3d));
var variance = (function (){var G__30833 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_V,(2)) : cljs.numpy.sum.call(null,weighted_V,(2)));
var G__30834 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__30833,G__30834) : cljs.numpy.multiply.call(null,G__30833,G__30834));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"variance","variance",1132010827),variance], null);
});
/**
 * Calculates expected number of events and variance per arm.
 */
app.regal_fit.enrollment.expected_arm_events_and_variance = (function app$regal_fit$enrollment$expected_arm_events_and_variance(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__30835 = calendar_times;
var G__30836 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30835,G__30836) : cljs.numpy.reshape.call(null,G__30835,G__30836));
})();
var enroll_2d = (function (){var G__30837 = enroll_pts;
var G__30838 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30837,G__30838) : cljs.numpy.reshape.call(null,G__30837,G__30838));
})();
var follow_up = (function (){var G__30839 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__30840 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__30839,G__30840) : cljs.numpy.maximum.call(null,G__30839,G__30840));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var ev_array = (function (){var G__30841 = [grid_size,time_size];
var G__30842 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__30841,G__30842) : cljs.numpy.empty.call(null,G__30841,G__30842));
})();
var var_array = (function (){var G__30843 = [grid_size,time_size];
var G__30844 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__30843,G__30844) : cljs.numpy.empty.call(null,G__30843,G__30844));
})();
var follow_up_3d = (function (){var G__30845 = follow_up;
var G__30846 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30845,G__30846) : cljs.numpy.reshape.call(null,G__30845,G__30846));
})();
var weights_3d = (function (){var G__30847 = enroll_weights;
var G__30848 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30847,G__30848) : cljs.numpy.reshape.call(null,G__30847,G__30848));
})();
var chunk_size = (256);
var seq__30849_30919 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__30850_30920 = null;
var count__30851_30921 = (0);
var i__30852_30922 = (0);
while(true){
if((i__30852_30922 < count__30851_30921)){
var start_30924 = chunk__30850_30920.cljs$core$IIndexed$_nth$arity$2(null,i__30852_30922);
var end_30929 = Math.min((start_30924 + chunk_size),grid_size);
var map__30857_30930 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_30924,end_30929);
var map__30857_30931__$1 = cljs.core.__destructure_map(map__30857_30930);
var events_30932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857_30931__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_30933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857_30931__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_30932,start_30924);

cljs.numpy.set_block(var_array,variance_30933,start_30924);


var G__30942 = seq__30849_30919;
var G__30943 = chunk__30850_30920;
var G__30944 = count__30851_30921;
var G__30945 = (i__30852_30922 + (1));
seq__30849_30919 = G__30942;
chunk__30850_30920 = G__30943;
count__30851_30921 = G__30944;
i__30852_30922 = G__30945;
continue;
} else {
var temp__5825__auto___30950 = cljs.core.seq(seq__30849_30919);
if(temp__5825__auto___30950){
var seq__30849_30951__$1 = temp__5825__auto___30950;
if(cljs.core.chunked_seq_QMARK_(seq__30849_30951__$1)){
var c__5694__auto___30952 = cljs.core.chunk_first(seq__30849_30951__$1);
var G__30953 = cljs.core.chunk_rest(seq__30849_30951__$1);
var G__30954 = c__5694__auto___30952;
var G__30955 = cljs.core.count(c__5694__auto___30952);
var G__30956 = (0);
seq__30849_30919 = G__30953;
chunk__30850_30920 = G__30954;
count__30851_30921 = G__30955;
i__30852_30922 = G__30956;
continue;
} else {
var start_30957 = cljs.core.first(seq__30849_30951__$1);
var end_30958 = Math.min((start_30957 + chunk_size),grid_size);
var map__30859_30959 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_30957,end_30958);
var map__30859_30960__$1 = cljs.core.__destructure_map(map__30859_30959);
var events_30961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30859_30960__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_30962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30859_30960__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_30961,start_30957);

cljs.numpy.set_block(var_array,variance_30962,start_30957);


var G__30964 = cljs.core.next(seq__30849_30951__$1);
var G__30965 = null;
var G__30966 = (0);
var G__30967 = (0);
seq__30849_30919 = G__30964;
chunk__30850_30920 = G__30965;
count__30851_30921 = G__30966;
i__30852_30922 = G__30967;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i + (1)),(n | 0)], null);
} else {
return null;
}
}),final_n)));
});

//# sourceMappingURL=app.regal_fit.enrollment.js.map
