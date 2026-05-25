goog.provide('app.regal_fit.enrollment');
/**
 * Computes enrollment points and weights for a single time band.
 * Accepts a band [low high count] and subjects-per-unit density.
 */
app.regal_fit.enrollment.calculate_band_data = (function app$regal_fit$enrollment$calculate_band_data(p__26511,subjects_per_unit){
var vec__26513 = p__26511;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26513,(2),null);
var n_sub_samples = Math.max((2),Math.floor(((high - low) * subjects_per_unit)));
var h = ((high - low) / n_sub_samples);
var start = (low + (h / 2.0));
var stop = (high - (h / 2.0));
var enroll_points = (cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3(start,stop,n_sub_samples) : cljs.numpy.linspace.call(null,start,stop,n_sub_samples));
var enroll_weights = (function (){var G__26529 = [n_sub_samples];
var G__26530 = (count / n_sub_samples);
var G__26531 = "float64";
return (cljs.numpy.full.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.full.cljs$core$IFn$_invoke$arity$3(G__26529,G__26530,G__26531) : cljs.numpy.full.call(null,G__26529,G__26530,G__26531));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),enroll_points,new cljs.core.Keyword(null,"weights","weights",-1097626197),enroll_weights], null);
});
/**
 * Calculates expected enrollment times and weights based on config.
 */
app.regal_fit.enrollment.expected_enrollment_times = (function app$regal_fit$enrollment$expected_enrollment_times(cfg){
var subjects_per_unit = (8);
var bands = new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(cfg);
var band_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26533_SHARP_){
return app.regal_fit.enrollment.calculate_band_data(p1__26533_SHARP_,subjects_per_unit);
}),bands);
var all_points = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),band_data));
var all_weights = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weights","weights",-1097626197),band_data));
if(cljs.core.empty_QMARK_(all_points)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26536 = [];
var G__26537 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__26536,G__26537) : cljs.numpy.array.call(null,G__26536,G__26537));
})(),(function (){var G__26538 = [];
var G__26539 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__26538,G__26539) : cljs.numpy.array.call(null,G__26538,G__26539));
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
var G__26557 = cljs.numpy.slice(p,start,end);
var G__26558 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26557,G__26558) : cljs.numpy.reshape.call(null,G__26557,G__26558));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__26560 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26561 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26560,G__26561) : cljs.numpy.subtract.call(null,G__26560,G__26561));
})();
var weighted_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__26562 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_S,(2)) : cljs.numpy.sum.call(null,weighted_S,(2)));
var G__26563 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26562,G__26563) : cljs.numpy.multiply.call(null,G__26562,G__26563));
})();
return events;
});
/**
 * Calculates expected number of events per arm.
 */
app.regal_fit.enrollment.expected_arm_events = (function app$regal_fit$enrollment$expected_arm_events(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__26578 = calendar_times;
var G__26579 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26578,G__26579) : cljs.numpy.reshape.call(null,G__26578,G__26579));
})();
var enroll_2d = (function (){var G__26580 = enroll_pts;
var G__26581 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26580,G__26581) : cljs.numpy.reshape.call(null,G__26580,G__26581));
})();
var follow_up = (function (){var G__26583 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__26584 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__26583,G__26584) : cljs.numpy.maximum.call(null,G__26583,G__26584));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var output_array = (function (){var G__26585 = [grid_size,time_size];
var G__26586 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26585,G__26586) : cljs.numpy.empty.call(null,G__26585,G__26586));
})();
var follow_up_3d = (function (){var G__26587 = follow_up;
var G__26588 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26587,G__26588) : cljs.numpy.reshape.call(null,G__26587,G__26588));
})();
var weights_3d = (function (){var G__26589 = enroll_weights;
var G__26590 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26589,G__26590) : cljs.numpy.reshape.call(null,G__26589,G__26590));
})();
var chunk_size = (256);
var seq__26592_26649 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__26593_26650 = null;
var count__26594_26651 = (0);
var i__26595_26652 = (0);
while(true){
if((i__26595_26652 < count__26594_26651)){
var start_26653 = chunk__26593_26650.cljs$core$IIndexed$_nth$arity$2(null,i__26595_26652);
var end_26654 = Math.min((start_26653 + chunk_size),grid_size);
var events_26655 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26653,end_26654);
cljs.numpy.set_block(output_array,events_26655,start_26653);


var G__26656 = seq__26592_26649;
var G__26657 = chunk__26593_26650;
var G__26658 = count__26594_26651;
var G__26659 = (i__26595_26652 + (1));
seq__26592_26649 = G__26656;
chunk__26593_26650 = G__26657;
count__26594_26651 = G__26658;
i__26595_26652 = G__26659;
continue;
} else {
var temp__5825__auto___26660 = cljs.core.seq(seq__26592_26649);
if(temp__5825__auto___26660){
var seq__26592_26661__$1 = temp__5825__auto___26660;
if(cljs.core.chunked_seq_QMARK_(seq__26592_26661__$1)){
var c__5548__auto___26662 = cljs.core.chunk_first(seq__26592_26661__$1);
var G__26663 = cljs.core.chunk_rest(seq__26592_26661__$1);
var G__26664 = c__5548__auto___26662;
var G__26665 = cljs.core.count(c__5548__auto___26662);
var G__26666 = (0);
seq__26592_26649 = G__26663;
chunk__26593_26650 = G__26664;
count__26594_26651 = G__26665;
i__26595_26652 = G__26666;
continue;
} else {
var start_26667 = cljs.core.first(seq__26592_26661__$1);
var end_26668 = Math.min((start_26667 + chunk_size),grid_size);
var events_26669 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26667,end_26668);
cljs.numpy.set_block(output_array,events_26669,start_26667);


var G__26670 = cljs.core.next(seq__26592_26661__$1);
var G__26671 = null;
var G__26672 = (0);
var G__26673 = (0);
seq__26592_26649 = G__26670;
chunk__26593_26650 = G__26671;
count__26594_26651 = G__26672;
i__26595_26652 = G__26673;
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
var G__26606 = cljs.numpy.slice(p,start,end);
var G__26607 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26606,G__26607) : cljs.numpy.reshape.call(null,G__26606,G__26607));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__26608 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26609 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26608,G__26609) : cljs.numpy.subtract.call(null,G__26608,G__26609));
})();
var weighted_E = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__26610 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_E,(2)) : cljs.numpy.sum.call(null,weighted_E,(2)));
var G__26611 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26610,G__26611) : cljs.numpy.multiply.call(null,G__26610,G__26611));
})();
var S_times_one_minus_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(survival_res,one_minus_S) : cljs.numpy.multiply.call(null,survival_res,one_minus_S));
var weighted_V = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(S_times_one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,S_times_one_minus_S,weights_3d));
var variance = (function (){var G__26613 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_V,(2)) : cljs.numpy.sum.call(null,weighted_V,(2)));
var G__26614 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26613,G__26614) : cljs.numpy.multiply.call(null,G__26613,G__26614));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"variance","variance",1132010827),variance], null);
});
/**
 * Calculates expected number of events and variance per arm.
 */
app.regal_fit.enrollment.expected_arm_events_and_variance = (function app$regal_fit$enrollment$expected_arm_events_and_variance(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__26615 = calendar_times;
var G__26616 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26615,G__26616) : cljs.numpy.reshape.call(null,G__26615,G__26616));
})();
var enroll_2d = (function (){var G__26617 = enroll_pts;
var G__26618 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26617,G__26618) : cljs.numpy.reshape.call(null,G__26617,G__26618));
})();
var follow_up = (function (){var G__26619 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__26620 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__26619,G__26620) : cljs.numpy.maximum.call(null,G__26619,G__26620));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var ev_array = (function (){var G__26621 = [grid_size,time_size];
var G__26622 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26621,G__26622) : cljs.numpy.empty.call(null,G__26621,G__26622));
})();
var var_array = (function (){var G__26623 = [grid_size,time_size];
var G__26624 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26623,G__26624) : cljs.numpy.empty.call(null,G__26623,G__26624));
})();
var follow_up_3d = (function (){var G__26625 = follow_up;
var G__26626 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26625,G__26626) : cljs.numpy.reshape.call(null,G__26625,G__26626));
})();
var weights_3d = (function (){var G__26627 = enroll_weights;
var G__26628 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26627,G__26628) : cljs.numpy.reshape.call(null,G__26627,G__26628));
})();
var chunk_size = (256);
var seq__26630_26675 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__26631_26676 = null;
var count__26632_26677 = (0);
var i__26633_26678 = (0);
while(true){
if((i__26633_26678 < count__26632_26677)){
var start_26679 = chunk__26631_26676.cljs$core$IIndexed$_nth$arity$2(null,i__26633_26678);
var end_26680 = Math.min((start_26679 + chunk_size),grid_size);
var map__26642_26681 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26679,end_26680);
var map__26642_26682__$1 = cljs.core.__destructure_map(map__26642_26681);
var events_26683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26642_26682__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_26684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26642_26682__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_26683,start_26679);

cljs.numpy.set_block(var_array,variance_26684,start_26679);


var G__26685 = seq__26630_26675;
var G__26686 = chunk__26631_26676;
var G__26687 = count__26632_26677;
var G__26688 = (i__26633_26678 + (1));
seq__26630_26675 = G__26685;
chunk__26631_26676 = G__26686;
count__26632_26677 = G__26687;
i__26633_26678 = G__26688;
continue;
} else {
var temp__5825__auto___26689 = cljs.core.seq(seq__26630_26675);
if(temp__5825__auto___26689){
var seq__26630_26690__$1 = temp__5825__auto___26689;
if(cljs.core.chunked_seq_QMARK_(seq__26630_26690__$1)){
var c__5548__auto___26691 = cljs.core.chunk_first(seq__26630_26690__$1);
var G__26692 = cljs.core.chunk_rest(seq__26630_26690__$1);
var G__26693 = c__5548__auto___26691;
var G__26694 = cljs.core.count(c__5548__auto___26691);
var G__26695 = (0);
seq__26630_26675 = G__26692;
chunk__26631_26676 = G__26693;
count__26632_26677 = G__26694;
i__26633_26678 = G__26695;
continue;
} else {
var start_26696 = cljs.core.first(seq__26630_26690__$1);
var end_26697 = Math.min((start_26696 + chunk_size),grid_size);
var map__26643_26698 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26696,end_26697);
var map__26643_26699__$1 = cljs.core.__destructure_map(map__26643_26698);
var events_26700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643_26699__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_26701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643_26699__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_26700,start_26696);

cljs.numpy.set_block(var_array,variance_26701,start_26696);


var G__26702 = cljs.core.next(seq__26630_26690__$1);
var G__26703 = null;
var G__26704 = (0);
var G__26705 = (0);
seq__26630_26675 = G__26702;
chunk__26631_26676 = G__26703;
count__26632_26677 = G__26704;
i__26633_26678 = G__26705;
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
