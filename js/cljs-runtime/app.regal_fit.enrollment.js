goog.provide('app.regal_fit.enrollment');
/**
 * Computes enrollment points and weights for a single time band.
 * Accepts a band [low high count] and subjects-per-unit density.
 */
app.regal_fit.enrollment.calculate_band_data = (function app$regal_fit$enrollment$calculate_band_data(p__26522,subjects_per_unit){
var vec__26523 = p__26522;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26523,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26523,(1),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26523,(2),null);
var n_sub_samples = Math.max((2),Math.floor(((high - low) * subjects_per_unit)));
var h = ((high - low) / n_sub_samples);
var start = (low + (h / 2.0));
var stop = (high - (h / 2.0));
var enroll_points = (cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3(start,stop,n_sub_samples) : cljs.numpy.linspace.call(null,start,stop,n_sub_samples));
var enroll_weights = (function (){var G__26533 = [n_sub_samples];
var G__26534 = (count / n_sub_samples);
var G__26535 = "float64";
return (cljs.numpy.full.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.full.cljs$core$IFn$_invoke$arity$3(G__26533,G__26534,G__26535) : cljs.numpy.full.call(null,G__26533,G__26534,G__26535));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),enroll_points,new cljs.core.Keyword(null,"weights","weights",-1097626197),enroll_weights], null);
});
/**
 * Calculates expected enrollment times and weights based on config.
 */
app.regal_fit.enrollment.expected_enrollment_times = (function app$regal_fit$enrollment$expected_enrollment_times(cfg){
var subjects_per_unit = (8);
var bands = new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(cfg);
var band_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26536_SHARP_){
return app.regal_fit.enrollment.calculate_band_data(p1__26536_SHARP_,subjects_per_unit);
}),bands);
var all_points = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),band_data));
var all_weights = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weights","weights",-1097626197),band_data));
if(cljs.core.empty_QMARK_(all_points)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26537 = [];
var G__26538 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__26537,G__26538) : cljs.numpy.array.call(null,G__26537,G__26538));
})(),(function (){var G__26539 = [];
var G__26540 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__26539,G__26540) : cljs.numpy.array.call(null,G__26539,G__26540));
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
var G__26547 = cljs.numpy.slice(p,start,end);
var G__26548 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26547,G__26548) : cljs.numpy.reshape.call(null,G__26547,G__26548));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__26550 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26551 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26550,G__26551) : cljs.numpy.subtract.call(null,G__26550,G__26551));
})();
var weighted_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__26552 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_S,(2)) : cljs.numpy.sum.call(null,weighted_S,(2)));
var G__26553 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26552,G__26553) : cljs.numpy.multiply.call(null,G__26552,G__26553));
})();
return events;
});
/**
 * Calculates expected number of events per arm.
 */
app.regal_fit.enrollment.expected_arm_events = (function app$regal_fit$enrollment$expected_arm_events(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__26558 = calendar_times;
var G__26559 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26558,G__26559) : cljs.numpy.reshape.call(null,G__26558,G__26559));
})();
var enroll_2d = (function (){var G__26560 = enroll_pts;
var G__26561 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26560,G__26561) : cljs.numpy.reshape.call(null,G__26560,G__26561));
})();
var follow_up = (function (){var G__26562 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__26563 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__26562,G__26563) : cljs.numpy.maximum.call(null,G__26562,G__26563));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var output_array = (function (){var G__26564 = [grid_size,time_size];
var G__26565 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26564,G__26565) : cljs.numpy.empty.call(null,G__26564,G__26565));
})();
var follow_up_3d = (function (){var G__26566 = follow_up;
var G__26567 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26566,G__26567) : cljs.numpy.reshape.call(null,G__26566,G__26567));
})();
var weights_3d = (function (){var G__26569 = enroll_weights;
var G__26570 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26569,G__26570) : cljs.numpy.reshape.call(null,G__26569,G__26570));
})();
var chunk_size = (256);
var seq__26574_26638 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__26575_26639 = null;
var count__26576_26640 = (0);
var i__26577_26641 = (0);
while(true){
if((i__26577_26641 < count__26576_26640)){
var start_26642 = chunk__26575_26639.cljs$core$IIndexed$_nth$arity$2(null,i__26577_26641);
var end_26643 = Math.min((start_26642 + chunk_size),grid_size);
var events_26644 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26642,end_26643);
cljs.numpy.set_block(output_array,events_26644,start_26642);


var G__26651 = seq__26574_26638;
var G__26652 = chunk__26575_26639;
var G__26653 = count__26576_26640;
var G__26654 = (i__26577_26641 + (1));
seq__26574_26638 = G__26651;
chunk__26575_26639 = G__26652;
count__26576_26640 = G__26653;
i__26577_26641 = G__26654;
continue;
} else {
var temp__5825__auto___26655 = cljs.core.seq(seq__26574_26638);
if(temp__5825__auto___26655){
var seq__26574_26656__$1 = temp__5825__auto___26655;
if(cljs.core.chunked_seq_QMARK_(seq__26574_26656__$1)){
var c__5548__auto___26658 = cljs.core.chunk_first(seq__26574_26656__$1);
var G__26659 = cljs.core.chunk_rest(seq__26574_26656__$1);
var G__26660 = c__5548__auto___26658;
var G__26661 = cljs.core.count(c__5548__auto___26658);
var G__26662 = (0);
seq__26574_26638 = G__26659;
chunk__26575_26639 = G__26660;
count__26576_26640 = G__26661;
i__26577_26641 = G__26662;
continue;
} else {
var start_26663 = cljs.core.first(seq__26574_26656__$1);
var end_26664 = Math.min((start_26663 + chunk_size),grid_size);
var events_26665 = app.regal_fit.enrollment.calculate_events_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26663,end_26664);
cljs.numpy.set_block(output_array,events_26665,start_26663);


var G__26666 = cljs.core.next(seq__26574_26656__$1);
var G__26667 = null;
var G__26668 = (0);
var G__26669 = (0);
seq__26574_26638 = G__26666;
chunk__26575_26639 = G__26667;
count__26576_26640 = G__26668;
i__26577_26641 = G__26669;
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
var G__26587 = cljs.numpy.slice(p,start,end);
var G__26588 = [(end - start),(1),(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26587,G__26588) : cljs.numpy.reshape.call(null,G__26587,G__26588));
}),params_grid);
var survival_res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(survival_func,follow_up_3d,params_chunk);
var one_minus_S = (function (){var G__26589 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26590 = survival_res;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26589,G__26590) : cljs.numpy.subtract.call(null,G__26589,G__26590));
})();
var weighted_E = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,one_minus_S,weights_3d));
var events = (function (){var G__26591 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_E,(2)) : cljs.numpy.sum.call(null,weighted_E,(2)));
var G__26592 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26591,G__26592) : cljs.numpy.multiply.call(null,G__26591,G__26592));
})();
var S_times_one_minus_S = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(survival_res,one_minus_S) : cljs.numpy.multiply.call(null,survival_res,one_minus_S));
var weighted_V = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(S_times_one_minus_S,weights_3d) : cljs.numpy.multiply.call(null,S_times_one_minus_S,weights_3d));
var variance = (function (){var G__26593 = (cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.sum.cljs$core$IFn$_invoke$arity$2(weighted_V,(2)) : cljs.numpy.sum.call(null,weighted_V,(2)));
var G__26594 = arm_share;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__26593,G__26594) : cljs.numpy.multiply.call(null,G__26593,G__26594));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"variance","variance",1132010827),variance], null);
});
/**
 * Calculates expected number of events and variance per arm.
 */
app.regal_fit.enrollment.expected_arm_events_and_variance = (function app$regal_fit$enrollment$expected_arm_events_and_variance(survival_func,params_grid,enroll_pts,enroll_weights,calendar_times,n_per_arm,n_total){
var arm_share = (n_per_arm / n_total);
var times_2d = (function (){var G__26597 = calendar_times;
var G__26598 = [calendar_times.size,(1)];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26597,G__26598) : cljs.numpy.reshape.call(null,G__26597,G__26598));
})();
var enroll_2d = (function (){var G__26599 = enroll_pts;
var G__26600 = [(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26599,G__26600) : cljs.numpy.reshape.call(null,G__26599,G__26600));
})();
var follow_up = (function (){var G__26602 = (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(times_2d,enroll_2d) : cljs.numpy.subtract.call(null,times_2d,enroll_2d));
var G__26603 = 0.0;
return (cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.maximum.cljs$core$IFn$_invoke$arity$2(G__26602,G__26603) : cljs.numpy.maximum.call(null,G__26602,G__26603));
})();
var grid_size = cljs.core.first(params_grid).size;
var time_size = calendar_times.size;
var ev_array = (function (){var G__26604 = [grid_size,time_size];
var G__26605 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26604,G__26605) : cljs.numpy.empty.call(null,G__26604,G__26605));
})();
var var_array = (function (){var G__26606 = [grid_size,time_size];
var G__26607 = "float64";
return (cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.empty.cljs$core$IFn$_invoke$arity$2(G__26606,G__26607) : cljs.numpy.empty.call(null,G__26606,G__26607));
})();
var follow_up_3d = (function (){var G__26609 = follow_up;
var G__26610 = [(1),time_size,enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26609,G__26610) : cljs.numpy.reshape.call(null,G__26609,G__26610));
})();
var weights_3d = (function (){var G__26611 = enroll_weights;
var G__26612 = [(1),(1),enroll_pts.size];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__26611,G__26612) : cljs.numpy.reshape.call(null,G__26611,G__26612));
})();
var chunk_size = (256);
var seq__26613_26684 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_size,chunk_size));
var chunk__26614_26685 = null;
var count__26615_26686 = (0);
var i__26616_26687 = (0);
while(true){
if((i__26616_26687 < count__26615_26686)){
var start_26688 = chunk__26614_26685.cljs$core$IIndexed$_nth$arity$2(null,i__26616_26687);
var end_26689 = Math.min((start_26688 + chunk_size),grid_size);
var map__26623_26690 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26688,end_26689);
var map__26623_26691__$1 = cljs.core.__destructure_map(map__26623_26690);
var events_26692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26623_26691__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_26693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26623_26691__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_26692,start_26688);

cljs.numpy.set_block(var_array,variance_26693,start_26688);


var G__26694 = seq__26613_26684;
var G__26695 = chunk__26614_26685;
var G__26696 = count__26615_26686;
var G__26697 = (i__26616_26687 + (1));
seq__26613_26684 = G__26694;
chunk__26614_26685 = G__26695;
count__26615_26686 = G__26696;
i__26616_26687 = G__26697;
continue;
} else {
var temp__5825__auto___26698 = cljs.core.seq(seq__26613_26684);
if(temp__5825__auto___26698){
var seq__26613_26699__$1 = temp__5825__auto___26698;
if(cljs.core.chunked_seq_QMARK_(seq__26613_26699__$1)){
var c__5548__auto___26700 = cljs.core.chunk_first(seq__26613_26699__$1);
var G__26701 = cljs.core.chunk_rest(seq__26613_26699__$1);
var G__26702 = c__5548__auto___26700;
var G__26703 = cljs.core.count(c__5548__auto___26700);
var G__26704 = (0);
seq__26613_26684 = G__26701;
chunk__26614_26685 = G__26702;
count__26615_26686 = G__26703;
i__26616_26687 = G__26704;
continue;
} else {
var start_26707 = cljs.core.first(seq__26613_26699__$1);
var end_26708 = Math.min((start_26707 + chunk_size),grid_size);
var map__26624_26709 = app.regal_fit.enrollment.calculate_events_and_var_chunk(survival_func,params_grid,follow_up_3d,weights_3d,arm_share,start_26707,end_26708);
var map__26624_26710__$1 = cljs.core.__destructure_map(map__26624_26709);
var events_26711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26624_26710__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var variance_26712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26624_26710__$1,new cljs.core.Keyword(null,"variance","variance",1132010827));
cljs.numpy.set_block(ev_array,events_26711,start_26707);

cljs.numpy.set_block(var_array,variance_26712,start_26707);


var G__26714 = cljs.core.next(seq__26613_26699__$1);
var G__26715 = null;
var G__26716 = (0);
var G__26717 = (0);
seq__26613_26684 = G__26714;
chunk__26614_26685 = G__26715;
count__26615_26686 = G__26716;
i__26616_26687 = G__26717;
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
