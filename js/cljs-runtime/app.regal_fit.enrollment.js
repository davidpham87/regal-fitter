goog.provide('app.regal_fit.enrollment');
/**
 * Computes enrollment points and weights for a single time band.
 * Accepts a band [low high count] and subjects-per-unit density.
 */
app.regal_fit.enrollment.calculate_band_data = (function app$regal_fit$enrollment$calculate_band_data(p__26512,subjects_per_unit){
var vec__26513 = p__26512;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(2),null);
var n_sub_samples = Math.max((2),Math.floor(((high - low) * subjects_per_unit)));
var h = ((high - low) / n_sub_samples);
var start = (low + (h / 2.0));
var stop = (high - (h / 2.0));
var enroll_points = (cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3(start,stop,n_sub_samples) : cljs.numpy.linspace.call(null,start,stop,n_sub_samples));
var enroll_weights = (function (){var G__26517 = [n_sub_samples];
var G__26518 = (count / n_sub_samples);
var G__26519 = "float64";
return (cljs.numpy.full.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.full.cljs$core$IFn$_invoke$arity$3(G__26517,G__26518,G__26519) : cljs.numpy.full.call(null,G__26517,G__26518,G__26519));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),enroll_points,new cljs.core.Keyword(null,"weights","weights",-1097626197),enroll_weights], null);
});
/**
 * Calculates expected enrollment times and weights based on config.
 */
app.regal_fit.enrollment.expected_enrollment_times = (function app$regal_fit$enrollment$expected_enrollment_times(cfg){
var subjects_per_unit = (8);
var bands = new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(cfg);
var band_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26521_SHARP_){
return app.regal_fit.enrollment.calculate_band_data(p1__26521_SHARP_,subjects_per_unit);
}),bands);
var all_points = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),band_data));
var all_weights = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weights","weights",-1097626197),band_data));
if(cljs.core.empty_QMARK_(all_points)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26524 = [];
var G__26525 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__26524,G__26525) : cljs.numpy.array.call(null,G__26524,G__26525));
})(),(function (){var G__26526 = [];
var G__26527 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__26526,G__26527) : cljs.numpy.array.call(null,G__26526,G__26527));
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
var G__26536 = cljs.numpy.slice(p,start,end);
var G__26537 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26536,G__26537) : cljs.numpy.reshape.call(null,G__26536,G__26537));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__26538 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26539 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26538,G__26539) : cljs.numpy.subtract.call(null,G__26538,G__26539));
})();
var weighted_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__26540 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_S,(2)) : cljs.numpy.sum.call(null,weighted_S,(2)));
var G__26541 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26540,G__26541) : cljs.numpy.multiply.call(null,G__26540,G__26541));
})();
return events;
});
/**
 * Calculates expected number of events per arm.
 */
app.regal_fit.enrollment.expected_arm_events = (function app$regal_fit$enrollment$expected_arm_events(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__26547 = calendar_times;
var G__26548 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26547,G__26548) : cljs.numpy.reshape.call(null,G__26547,G__26548));
})();
var enroll_2d = (function (){var G__26549 = enroll_pts;
var G__26550 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26549,G__26550) : cljs.numpy.reshape.call(null,G__26549,G__26550));
})();
var follow_up = (function (){var G__26551 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__26552 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__26551,G__26552) : cljs.numpy.maximum.call(null,G__26551,G__26552));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var output_array = (function (){var G__26553 = [grid_size,time_size];
var G__26554 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26553,G__26554) : cljs.numpy.empty.call(null,G__26553,G__26554));
})();
var follow_up_3d = (function (){var G__26556 = follow_up;
var G__26557 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26556,G__26557) : cljs.numpy.reshape.call(null,G__26556,G__26557));
})();
var weights_3d = (function (){var G__26558 = enroll_weights;
var G__26559 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26558,G__26559) : cljs.numpy.reshape.call(null,G__26558,G__26559));
})();
var chunk_size = (256);
var seq__26561_26634 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__26562_26635 = null;
var count__26563_26636 = (0);
var i__26564_26637 = (0);
while(true){
if((i__26564_26637 < count__26563_26636)){
var start_26640 = chunk__26562_26635.cljs$core$IIndexed$_nth$arity$2(null,i__26564_26637);
var end_26641 = Math.min((start_26640 + chunk_size),grid_size);
var events_26642 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26640,end_26641);
cljs.numpy.set_block(output_array,events_26642,start_26640);


var G__26643 = seq__26561_26634;
var G__26644 = chunk__26562_26635;
var G__26645 = count__26563_26636;
var G__26646 = (i__26564_26637 + (1));
seq__26561_26634 = G__26643;
chunk__26562_26635 = G__26644;
count__26563_26636 = G__26645;
i__26564_26637 = G__26646;
continue;
} else {
var temp__5825__auto___26648 = cljs.core.seq(seq__26561_26634);
if(temp__5825__auto___26648){
var seq__26561_26649__$1 = temp__5825__auto___26648;
if(cljs.core.chunked_seq_QMARK_(seq__26561_26649__$1)){
var c__5548__auto___26650 = cljs.core.chunk_first(seq__26561_26649__$1);
var G__26651 = cljs.core.chunk_rest(seq__26561_26649__$1);
var G__26652 = c__5548__auto___26650;
var G__26653 = cljs.core.count(c__5548__auto___26650);
var G__26654 = (0);
seq__26561_26634 = G__26651;
chunk__26562_26635 = G__26652;
count__26563_26636 = G__26653;
i__26564_26637 = G__26654;
continue;
} else {
var start_26655 = cljs.core.first(seq__26561_26649__$1);
var end_26656 = Math.min((start_26655 + chunk_size),grid_size);
var events_26657 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26655,end_26656);
cljs.numpy.set_block(output_array,events_26657,start_26655);


var G__26659 = cljs.core.next(seq__26561_26649__$1);
var G__26660 = null;
var G__26661 = (0);
var G__26662 = (0);
seq__26561_26634 = G__26659;
chunk__26562_26635 = G__26660;
count__26563_26636 = G__26661;
i__26564_26637 = G__26662;
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
var G__26576 = cljs.numpy.slice(p,start,end);
var G__26577 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26576,G__26577) : cljs.numpy.reshape.call(null,G__26576,G__26577));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__26578 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26579 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26578,G__26579) : cljs.numpy.subtract.call(null,G__26578,G__26579));
})();
var weighted_E = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__26580 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_E,(2)) : cljs.numpy.sum.call(null,weighted_E,(2)));
var G__26581 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26580,G__26581) : cljs.numpy.multiply.call(null,G__26580,G__26581));
})();
var S_times_one_minus_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(survival_res,one_minus_S) : cljs.numpy.multiply.call(null,survival_res,one_minus_S));
var weighted_V = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(S_times_one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,S_times_one_minus_S,weights_3d));
var variance = (function (){var G__26583 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_V,(2)) : cljs.numpy.sum.call(null,weighted_V,(2)));
var G__26584 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26583,G__26584) : cljs.numpy.multiply.call(null,G__26583,G__26584));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"variance","variance",1132010827),variance], null);
});
/**
 * Calculates expected number of events and variance per arm.
 */
app.regal_fit.enrollment.expected_arm_events_and_variance = (function app$regal_fit$enrollment$expected_arm_events_and_variance(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__26589 = calendar_times;
var G__26590 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26589,G__26590) : cljs.numpy.reshape.call(null,G__26589,G__26590));
})();
var enroll_2d = (function (){var G__26591 = enroll_pts;
var G__26592 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26591,G__26592) : cljs.numpy.reshape.call(null,G__26591,G__26592));
})();
var follow_up = (function (){var G__26593 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__26594 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__26593,G__26594) : cljs.numpy.maximum.call(null,G__26593,G__26594));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var ev_array = (function (){var G__26595 = [grid_size,time_size];
var G__26596 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26595,G__26596) : cljs.numpy.empty.call(null,G__26595,G__26596));
})();
var var_array = (function (){var G__26599 = [grid_size,time_size];
var G__26600 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26599,G__26600) : cljs.numpy.empty.call(null,G__26599,G__26600));
})();
var follow_up_3d = (function (){var G__26601 = follow_up;
var G__26602 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26601,G__26602) : cljs.numpy.reshape.call(null,G__26601,G__26602));
})();
var weights_3d = (function (){var G__26603 = enroll_weights;
var G__26604 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26603,G__26604) : cljs.numpy.reshape.call(null,G__26603,G__26604));
})();
var chunk_size = (256);
var seq__26606_26697 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__26607_26698 = null;
var count__26608_26699 = (0);
var i__26609_26700 = (0);
while(true){
if((i__26609_26700 < count__26608_26699)){
var start_26703 = chunk__26607_26698.cljs$core$IIndexed$_nth$arity$2(null,i__26609_26700);
var end_26704 = Math.min((start_26703 + chunk_size),grid_size);
var map__26616_26705 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26703,end_26704);
var map__26616_26706__$1 = cljs.core.__destructure_map(map__26616_26705);
var events_26707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26616_26706__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_26708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26616_26706__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_26707,start_26703);

cljs.numpy.set_block(var_array,variance_26708,start_26703);


var G__26726 = seq__26606_26697;
var G__26727 = chunk__26607_26698;
var G__26728 = count__26608_26699;
var G__26729 = (i__26609_26700 + (1));
seq__26606_26697 = G__26726;
chunk__26607_26698 = G__26727;
count__26608_26699 = G__26728;
i__26609_26700 = G__26729;
continue;
} else {
var temp__5825__auto___26730 = cljs.core.seq(seq__26606_26697);
if(temp__5825__auto___26730){
var seq__26606_26731__$1 = temp__5825__auto___26730;
if(cljs.core.chunked_seq_QMARK_(seq__26606_26731__$1)){
var c__5548__auto___26734 = cljs.core.chunk_first(seq__26606_26731__$1);
var G__26735 = cljs.core.chunk_rest(seq__26606_26731__$1);
var G__26736 = c__5548__auto___26734;
var G__26737 = cljs.core.count(c__5548__auto___26734);
var G__26738 = (0);
seq__26606_26697 = G__26735;
chunk__26607_26698 = G__26736;
count__26608_26699 = G__26737;
i__26609_26700 = G__26738;
continue;
} else {
var start_26740 = cljs.core.first(seq__26606_26731__$1);
var end_26741 = Math.min((start_26740 + chunk_size),grid_size);
var map__26620_26742 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26740,end_26741);
var map__26620_26743__$1 = cljs.core.__destructure_map(map__26620_26742);
var events_26744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620_26743__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_26745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26620_26743__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_26744,start_26740);

cljs.numpy.set_block(var_array,variance_26745,start_26740);


var G__26752 = cljs.core.next(seq__26606_26731__$1);
var G__26753 = null;
var G__26754 = (0);
var G__26755 = (0);
seq__26606_26697 = G__26752;
chunk__26607_26698 = G__26753;
count__26608_26699 = G__26754;
i__26609_26700 = G__26755;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),ev_array,new cljs.core.Keyword(null,"variance","variance",1132010827),var_array], null);
});

//# sourceMappingURL=app.regal_fit.enrollment.js.map
