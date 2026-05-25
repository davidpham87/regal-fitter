goog.provide('app.regal_fit.prefilter');
/**
 * Checks if event counts at IA and UPD are within tolerance.
 */
app.regal_fit.prefilter.pass_events_gate_QMARK_ = (function app$regal_fit$prefilter$pass_events_gate_QMARK_(expected_ia,expected_upd,config){
var diff_ia = Math.abs((expected_ia - new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(config)));
var diff_upd = Math.abs((expected_upd - new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config)));
var increment_ia_upd = (expected_upd - expected_ia);
var target_increment = (new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config) - new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(config));
var diff_increment = Math.abs((increment_ia_upd - target_increment));
return (((diff_ia <= new cljs.core.Keyword(null,"prefilter-tol-ia","prefilter-tol-ia",2016572921).cljs$core$IFn$_invoke$arity$1(config))) && ((((diff_upd <= new cljs.core.Keyword(null,"prefilter-tol-upd","prefilter-tol-upd",10669060).cljs$core$IFn$_invoke$arity$1(config))) && ((diff_increment <= new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879).cljs$core$IFn$_invoke$arity$1(config))))));
});
/**
 * Checks if event counts at PR3 are within tolerance.
 */
app.regal_fit.prefilter.pass_pr3_gate_QMARK_ = (function app$regal_fit$prefilter$pass_pr3_gate_QMARK_(expected_upd,expected_pr3,config,apply_pr3){
if(cljs.core.not(apply_pr3)){
return true;
} else {
var diff_pr3 = Math.abs((expected_pr3 - new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801).cljs$core$IFn$_invoke$arity$1(config)));
var increment_upd_pr3 = (expected_pr3 - expected_upd);
var target_increment = (new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801).cljs$core$IFn$_invoke$arity$1(config) - new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config));
var diff_increment = Math.abs((increment_upd_pr3 - target_increment));
return (((diff_pr3 <= new cljs.core.Keyword(null,"prefilter-tol-pr3","prefilter-tol-pr3",-1485355598).cljs$core$IFn$_invoke$arity$1(config))) && ((diff_increment <= new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216).cljs$core$IFn$_invoke$arity$1(config))));
}
});
/**
 * Checks if pool OS at minimum months is above threshold.
 */
app.regal_fit.prefilter.pass_pool_gate_QMARK_ = (function app$regal_fit$prefilter$pass_pool_gate_QMARK_(bat_idx,gps_idx,bat_survival_arr,gps_survival_arr,apply_pool){
if(cljs.core.not(apply_pool)){
return true;
} else {
return (((bat_survival_arr[bat_idx]) + (gps_survival_arr[gps_idx])) >= 1.0);
}
});
/**
 * Helper function to validate a specific combination of BAT and GPS curves.
 */
app.regal_fit.prefilter.validate_scenario = (function app$regal_fit$prefilter$validate_scenario(bat_idx,gps_idx,total_events_arr,bat_survival_arr,gps_survival_arr,apply_pool,apply_pr3,config){
var expected_ia = (total_events_arr[bat_idx][gps_idx][(0)]);
var expected_upd = (total_events_arr[bat_idx][gps_idx][(1)]);
var expected_pr3 = (cljs.core.truth_(apply_pr3)?(total_events_arr[bat_idx][gps_idx][(2)]):null);
if(((app.regal_fit.prefilter.pass_events_gate_QMARK_(expected_ia,expected_upd,config)) && (((app.regal_fit.prefilter.pass_pr3_gate_QMARK_(expected_upd,expected_pr3,config,apply_pr3)) && (app.regal_fit.prefilter.pass_pool_gate_QMARK_(bat_idx,gps_idx,bat_survival_arr,gps_survival_arr,apply_pool)))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exp-ev-ia","exp-ev-ia",647455811),expected_ia,new cljs.core.Keyword(null,"exp-ev-upd","exp-ev-upd",85248091),expected_upd,new cljs.core.Keyword(null,"exp-ev-pr3","exp-ev-pr3",-449783785),expected_pr3], null);
} else {
return null;
}
});
/**
 * Creates a configuration record for an accepted scenario.
 */
app.regal_fit.prefilter.build_result_record = (function app$regal_fit$prefilter$build_result_record(bat_idx,gps_idx,validation_res,family,bat_params,gps_params){
var record = (function (){var G__30971 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"family","family",-1313145692),family,new cljs.core.Keyword(null,"exp-ev-ia","exp-ev-ia",647455811),new cljs.core.Keyword(null,"exp-ev-ia","exp-ev-ia",647455811).cljs$core$IFn$_invoke$arity$1(validation_res),new cljs.core.Keyword(null,"exp-ev-upd","exp-ev-upd",85248091),new cljs.core.Keyword(null,"exp-ev-upd","exp-ev-upd",85248091).cljs$core$IFn$_invoke$arity$1(validation_res)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"exp-ev-pr3","exp-ev-pr3",-449783785).cljs$core$IFn$_invoke$arity$1(validation_res))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30971,new cljs.core.Keyword(null,"exp-ev-pr3","exp-ev-pr3",-449783785),new cljs.core.Keyword(null,"exp-ev-pr3","exp-ev-pr3",-449783785).cljs$core$IFn$_invoke$arity$1(validation_res));
} else {
return G__30971;
}
})();
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v.item(bat_idx));
}),cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v.item(gps_idx));
}),record,gps_params),bat_params);
});
/**
 * Processes a chunk of BAT survival curves against all GPS curves.
 */
app.regal_fit.prefilter.process_chunk = (function app$regal_fit$prefilter$process_chunk(start_idx,end_idx,grid_bat,grid_gps,num_anchors,apply_pool,apply_pr3,config,bat_ev,gps_ev,bat_S_T,gps_S_T,family,bat_params,gps_params){
var bat_ev_slice = cljs.numpy.slice(bat_ev,start_idx,end_idx);
var bat_ev_3d = (function (){var G__30979 = bat_ev_slice;
var G__30980 = [(end_idx - start_idx),(1),num_anchors];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30979,G__30980) : cljs.numpy.reshape.call(null,G__30979,G__30980));
})();
var total_events = (function (){var G__30981 = bat_ev_3d;
var G__30982 = (function (){var G__30983 = gps_ev;
var G__30984 = [(1),grid_gps,num_anchors];
return (cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.reshape.cljs$core$IFn$_invoke$arity$2(G__30983,G__30984) : cljs.numpy.reshape.call(null,G__30983,G__30984));
})();
return (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(G__30981,G__30982) : cljs.numpy.add.call(null,G__30981,G__30982));
})().toArray();
var bat_survival = (cljs.core.truth_(apply_pool)?cljs.numpy.slice(bat_S_T,start_idx,end_idx).toArray():null);
var gps_survival = (cljs.core.truth_(apply_pool)?gps_S_T.toArray():null);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (pair){
var local_bat = cljs.core.first(pair);
var global_gps = cljs.core.second(pair);
var temp__5825__auto__ = app.regal_fit.prefilter.validate_scenario(local_bat,global_gps,total_events,bat_survival,gps_survival,apply_pool,apply_pr3,config);
if(cljs.core.truth_(temp__5825__auto__)){
var res = temp__5825__auto__;
return app.regal_fit.prefilter.build_result_record((start_idx + local_bat),global_gps,res,family,bat_params,gps_params);
} else {
return null;
}
}),(function (){var iter__5649__auto__ = (function app$regal_fit$prefilter$process_chunk_$_iter__30985(s__30986){
return (new cljs.core.LazySeq(null,(function (){
var s__30986__$1 = s__30986;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30986__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var b = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__30986__$1,b,xs__6385__auto__,temp__5825__auto__,bat_ev_slice,bat_ev_3d,total_events,bat_survival,gps_survival){
return (function app$regal_fit$prefilter$process_chunk_$_iter__30985_$_iter__30987(s__30988){
return (new cljs.core.LazySeq(null,((function (s__30986__$1,b,xs__6385__auto__,temp__5825__auto__,bat_ev_slice,bat_ev_3d,total_events,bat_survival,gps_survival){
return (function (){
var s__30988__$1 = s__30988;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__30988__$1);
if(temp__5825__auto____$1){
var s__30988__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30988__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__30988__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__30990 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__30989 = (0);
while(true){
if((i__30989 < size__5648__auto__)){
var g = cljs.core._nth(c__5647__auto__,i__30989);
cljs.core.chunk_append(b__30990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g], null));

var G__31052 = (i__30989 + (1));
i__30989 = G__31052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30990),app$regal_fit$prefilter$process_chunk_$_iter__30985_$_iter__30987(cljs.core.chunk_rest(s__30988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30990),null);
}
} else {
var g = cljs.core.first(s__30988__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g], null),app$regal_fit$prefilter$process_chunk_$_iter__30985_$_iter__30987(cljs.core.rest(s__30988__$2)));
}
} else {
return null;
}
break;
}
});})(s__30986__$1,b,xs__6385__auto__,temp__5825__auto__,bat_ev_slice,bat_ev_3d,total_events,bat_survival,gps_survival))
,null,null));
});})(s__30986__$1,b,xs__6385__auto__,temp__5825__auto__,bat_ev_slice,bat_ev_3d,total_events,bat_survival,gps_survival))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_gps)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$regal_fit$prefilter$process_chunk_$_iter__30985(cljs.core.rest(s__30986__$1)));
} else {
var G__31053 = cljs.core.rest(s__30986__$1);
s__30986__$1 = G__31053;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((end_idx - start_idx)));
})());
});
/**
 * Filters all combinations of BAT and GPS survival curves.
 */
app.regal_fit.prefilter.cross_filter = (function app$regal_fit$prefilter$cross_filter(config,bat_ev,gps_ev,bat_params,gps_params,family,bat_S_T,gps_S_T){
var grid_bat = cljs.core.first(bat_ev.shape);
var grid_gps = cljs.core.first(gps_ev.shape);
var num_anchors = cljs.core.second(bat_ev.shape);
var apply_pool = (function (){var and__5160__auto__ = bat_S_T;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = gps_S_T;
if(cljs.core.truth_(and__5160__auto____$1)){
return (new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config) > (0));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})();
var apply_pr3 = (function (){var and__5160__auto__ = new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5160__auto__)){
return (num_anchors >= (3));
} else {
return and__5160__auto__;
}
})();
var chunk_size = (2048);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30991_SHARP_){
return app.regal_fit.prefilter.process_chunk(p1__30991_SHARP_,Math.min((p1__30991_SHARP_ + chunk_size),grid_bat),grid_bat,grid_gps,num_anchors,apply_pool,apply_pr3,config,bat_ev,gps_ev,bat_S_T,gps_S_T,family,bat_params,gps_params);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),grid_bat,chunk_size)], 0));
});
app.regal_fit.prefilter.get_grid_params = (function app$regal_fit$prefilter$get_grid_params(config_key,config){
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,config_key);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,(0)),new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,(1)),new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,(2))], null);
});
/**
 * Runs pre-filtering for the Weibull distribution family.
 */
app.regal_fit.prefilter.apply_prefilter_weibull = (function app$regal_fit$prefilter$apply_prefilter_weibull(config){
var vec__30992 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30992,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30992,(1),null);
var target_pts = (function (){var G__30995 = (cljs.core.truth_(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config))?[new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config)]:[new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config)]);
var G__30996 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__30995,G__30996) : cljs.numpy.array.call(null,G__30995,G__30996));
})();
var bat_med_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),config);
var bat_meds = (function (){var G__30997 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
var G__30998 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
var G__30999 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__30997,G__30998,G__30999) : cljs.numpy.arange.call(null,G__30997,G__30998,G__30999));
})();
var bat_shape_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),config);
var bat_shapes = (function (){var G__31000 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
var G__31001 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
var G__31002 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31000,G__31001,G__31002) : cljs.numpy.arange.call(null,G__31000,G__31001,G__31002));
})();
var bat_mesh = cljs.numpy.meshgrid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_meds,bat_shapes], null),({"indexing": "ij"}));
var bat_med_flat = (bat_mesh[(0)]).ravel();
var bat_shape_flat = (bat_mesh[(1)]).ravel();
var bat_scale_flat = app.regal_fit.survival.weibull_scale_from_median(bat_med_flat,bat_shape_flat);
var gps_meds = (function (){var G__31003 = new cljs.core.Keyword(null,"gps-med-grid-lo","gps-med-grid-lo",-1666153973).cljs$core$IFn$_invoke$arity$1(config);
var G__31004 = new cljs.core.Keyword(null,"gps-med-grid-hi","gps-med-grid-hi",757096102).cljs$core$IFn$_invoke$arity$1(config);
var G__31005 = new cljs.core.Keyword(null,"gps-med-grid-n","gps-med-grid-n",349271879).cljs$core$IFn$_invoke$arity$1(config);
return (cljs.numpy.geomspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.geomspace.cljs$core$IFn$_invoke$arity$3(G__31003,G__31004,G__31005) : cljs.numpy.geomspace.call(null,G__31003,G__31004,G__31005));
})();
var gps_shape_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"gps-shape-grid","gps-shape-grid",-1878714432),config);
var gps_shapes = (function (){var G__31006 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(gps_shape_cfg);
var G__31007 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(gps_shape_cfg);
var G__31008 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(gps_shape_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31006,G__31007,G__31008) : cljs.numpy.arange.call(null,G__31006,G__31007,G__31008));
})();
var gps_mesh = cljs.numpy.meshgrid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gps_meds,gps_shapes], null),({"indexing": "ij"}));
var gps_med_flat = (gps_mesh[(0)]).ravel();
var gps_shape_flat = (gps_mesh[(1)]).ravel();
var gps_scale_flat = app.regal_fit.survival.weibull_scale_from_median(gps_med_flat,gps_shape_flat);
var bat_ev = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale_flat,bat_shape_flat], null),enroll_pts,enroll_weights,target_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var gps_ev = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gps_scale_flat,gps_shape_flat], null),enroll_pts,enroll_weights,target_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var pool_target = new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config);
var bat_S_T = (((pool_target > (0)))?app.regal_fit.survival.weibull_survival_probability(pool_target,bat_scale_flat,bat_shape_flat):null);
var gps_S_T = (((pool_target > (0)))?app.regal_fit.survival.weibull_survival_probability(pool_target,gps_scale_flat,gps_shape_flat):null);
return app.regal_fit.prefilter.cross_filter(config,bat_ev,gps_ev,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),bat_med_flat,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape_flat,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale_flat], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),gps_med_flat,new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),gps_shape_flat,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),gps_scale_flat], null),"weibull",bat_S_T,gps_S_T);
});
/**
 * Runs pre-filtering for the standard Cure fraction model family.
 */
app.regal_fit.prefilter.apply_prefilter_cure = (function app$regal_fit$prefilter$apply_prefilter_cure(config){
var vec__31009 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(1),null);
var target_pts = (function (){var G__31012 = (cljs.core.truth_(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config))?[new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config)]:[new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config)]);
var G__31013 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__31012,G__31013) : cljs.numpy.array.call(null,G__31012,G__31013));
})();
var bat_med_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),config);
var bat_meds = (function (){var G__31014 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
var G__31015 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
var G__31016 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31014,G__31015,G__31016) : cljs.numpy.arange.call(null,G__31014,G__31015,G__31016));
})();
var bat_shape_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),config);
var bat_shapes = (function (){var G__31017 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
var G__31018 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
var G__31019 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31017,G__31018,G__31019) : cljs.numpy.arange.call(null,G__31017,G__31018,G__31019));
})();
var bat_mesh = cljs.numpy.meshgrid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_meds,bat_shapes], null),({"indexing": "ij"}));
var bat_med_flat = (bat_mesh[(0)]).ravel();
var bat_shape_flat = (bat_mesh[(1)]).ravel();
var bat_scale_flat = app.regal_fit.survival.weibull_scale_from_median(bat_med_flat,bat_shape_flat);
var cf_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"cure-frac-grid","cure-frac-grid",1356953077),config);
var cf_grid = (function (){var G__31020 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cf_cfg);
var G__31021 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(cf_cfg);
var G__31022 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(cf_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31020,G__31021,G__31022) : cljs.numpy.arange.call(null,G__31020,G__31021,G__31022));
})();
var unc_med_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"cure-unc-med-grid","cure-unc-med-grid",-1533152473),config);
var unc_meds = (function (){var G__31023 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(unc_med_cfg);
var G__31024 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(unc_med_cfg);
var G__31025 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(unc_med_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31023,G__31024,G__31025) : cljs.numpy.arange.call(null,G__31023,G__31024,G__31025));
})();
var unc_shape_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"cure-unc-shape-grid","cure-unc-shape-grid",-855173178),config);
var unc_shapes = (function (){var G__31026 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(unc_shape_cfg);
var G__31027 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(unc_shape_cfg);
var G__31028 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(unc_shape_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31026,G__31027,G__31028) : cljs.numpy.arange.call(null,G__31026,G__31027,G__31028));
})();
var gps_mesh = cljs.numpy.meshgrid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf_grid,unc_meds,unc_shapes], null),({"indexing": "ij"}));
var cf_flat = (gps_mesh[(0)]).ravel();
var unc_med_flat = (gps_mesh[(1)]).ravel();
var unc_shape_flat = (gps_mesh[(2)]).ravel();
var unc_scale_flat = app.regal_fit.survival.weibull_scale_from_median(unc_med_flat,unc_shape_flat);
var bat_ev = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale_flat,bat_shape_flat], null),enroll_pts,enroll_weights,target_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var gps_ev = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf_flat,unc_scale_flat,unc_shape_flat], null),enroll_pts,enroll_weights,target_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var pool_target = new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config);
var bat_S_T = (((pool_target > (0)))?app.regal_fit.survival.weibull_survival_probability(pool_target,bat_scale_flat,bat_shape_flat):null);
var gps_S_T = (((pool_target > (0)))?app.regal_fit.survival.cure_survival_probability(pool_target,cf_flat,unc_scale_flat,unc_shape_flat):null);
return app.regal_fit.prefilter.cross_filter(config,bat_ev,gps_ev,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),bat_med_flat,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape_flat,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale_flat], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),cf_flat,new cljs.core.Keyword(null,"unc-med","unc-med",1442816023),unc_med_flat,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape_flat,new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale_flat], null),"cure",bat_S_T,gps_S_T);
});
/**
 * Runs pre-filtering for the Leaky Cure fraction model family.
 */
app.regal_fit.prefilter.apply_prefilter_leaky = (function app$regal_fit$prefilter$apply_prefilter_leaky(config){
var vec__31029 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31029,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31029,(1),null);
var target_pts = (function (){var G__31032 = (cljs.core.truth_(new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766).cljs$core$IFn$_invoke$arity$1(config))?[new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config)]:[new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config)]);
var G__31033 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__31032,G__31033) : cljs.numpy.array.call(null,G__31032,G__31033));
})();
var bat_med_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),config);
var bat_meds = (function (){var G__31034 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
var G__31035 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
var G__31036 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(bat_med_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31034,G__31035,G__31036) : cljs.numpy.arange.call(null,G__31034,G__31035,G__31036));
})();
var bat_shape_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),config);
var bat_shapes = (function (){var G__31037 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
var G__31038 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
var G__31039 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(bat_shape_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31037,G__31038,G__31039) : cljs.numpy.arange.call(null,G__31037,G__31038,G__31039));
})();
var bat_mesh = cljs.numpy.meshgrid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_meds,bat_shapes], null),({"indexing": "ij"}));
var bat_med_flat = (bat_mesh[(0)]).ravel();
var bat_shape_flat = (bat_mesh[(1)]).ravel();
var bat_scale_flat = app.regal_fit.survival.weibull_scale_from_median(bat_med_flat,bat_shape_flat);
var cf_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"leaky-cure-frac-grid","leaky-cure-frac-grid",-829923027),config);
var cf_grid = (function (){var G__31040 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cf_cfg);
var G__31041 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(cf_cfg);
var G__31042 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(cf_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31040,G__31041,G__31042) : cljs.numpy.arange.call(null,G__31040,G__31041,G__31042));
})();
var unc_med_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"leaky-unc-med-grid","leaky-unc-med-grid",-1067412745),config);
var unc_meds = (function (){var G__31043 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(unc_med_cfg);
var G__31044 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(unc_med_cfg);
var G__31045 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(unc_med_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31043,G__31044,G__31045) : cljs.numpy.arange.call(null,G__31043,G__31044,G__31045));
})();
var unc_shape_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"leaky-unc-shape-grid","leaky-unc-shape-grid",-700351020),config);
var unc_shapes = (function (){var G__31046 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(unc_shape_cfg);
var G__31047 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(unc_shape_cfg);
var G__31048 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(unc_shape_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31046,G__31047,G__31048) : cljs.numpy.arange.call(null,G__31046,G__31047,G__31048));
})();
var leaks_cfg = app.regal_fit.prefilter.get_grid_params(new cljs.core.Keyword(null,"leak-grid","leak-grid",1135019940),config);
var leaks = (function (){var G__31049 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(leaks_cfg);
var G__31050 = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(leaks_cfg);
var G__31051 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(leaks_cfg);
return (cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.arange.cljs$core$IFn$_invoke$arity$3(G__31049,G__31050,G__31051) : cljs.numpy.arange.call(null,G__31049,G__31050,G__31051));
})();
var gps_mesh = cljs.numpy.meshgrid(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf_grid,unc_meds,unc_shapes,leaks], null),({"indexing": "ij"}));
var cf_flat = (gps_mesh[(0)]).ravel();
var unc_med_flat = (gps_mesh[(1)]).ravel();
var unc_shape_flat = (gps_mesh[(2)]).ravel();
var leak_flat = (gps_mesh[(3)]).ravel();
var unc_scale_flat = app.regal_fit.survival.weibull_scale_from_median(unc_med_flat,unc_shape_flat);
var bat_ev = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale_flat,bat_shape_flat], null),enroll_pts,enroll_weights,target_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var gps_ev = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.leaky_cure_survival_probability,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf_flat,unc_scale_flat,unc_shape_flat,leak_flat], null),enroll_pts,enroll_weights,target_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var pool_target = new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559).cljs$core$IFn$_invoke$arity$1(config);
var bat_S_T = (((pool_target > (0)))?app.regal_fit.survival.weibull_survival_probability(pool_target,bat_scale_flat,bat_shape_flat):null);
var gps_S_T = (((pool_target > (0)))?app.regal_fit.survival.leaky_cure_survival_probability(pool_target,cf_flat,unc_scale_flat,unc_shape_flat,leak_flat):null);
return app.regal_fit.prefilter.cross_filter(config,bat_ev,gps_ev,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),bat_med_flat,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),bat_shape_flat,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),bat_scale_flat], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),cf_flat,new cljs.core.Keyword(null,"unc-med","unc-med",1442816023),unc_med_flat,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),unc_shape_flat,new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),unc_scale_flat,new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545),leak_flat], null),"leaky",bat_S_T,gps_S_T);
});

//# sourceMappingURL=app.regal_fit.prefilter.js.map
