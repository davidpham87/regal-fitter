goog.provide('app.regal_fit.random');
/**
 * Draws random survival times from a standard Weibull distribution.
 */
app.regal_fit.random.draw_weibull_samples = (function app$regal_fit$random$draw_weibull_samples(n_samples,random_gen,scale,shape){
var random_values = cljs.numpy_random.random(random_gen,n_samples);
var neg_log_vals = (function (){var G__35324 = (cljs.numpy.log.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.log.cljs$core$IFn$_invoke$arity$1(random_values) : cljs.numpy.log.call(null,random_values));
var G__35325 = -1.0;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__35324,G__35325) : cljs.numpy.multiply.call(null,G__35324,G__35325));
})();
var powered_vals = (function (){var G__35326 = neg_log_vals;
var G__35327 = (1.0 / shape);
return (cljs.numpy.power.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.power.cljs$core$IFn$_invoke$arity$2(G__35326,G__35327) : cljs.numpy.power.call(null,G__35326,G__35327));
})();
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(powered_vals,scale) : cljs.numpy.multiply.call(null,powered_vals,scale));
});
/**
 * Draws random survival times for the BAT arm.
 */
app.regal_fit.random.draw_bat_times = (function app$regal_fit$random$draw_bat_times(p__35328,n_samples,random_gen){
var map__35329 = p__35328;
var map__35329__$1 = cljs.core.__destructure_map(map__35329);
var bat_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987));
var bat_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414));
return app.regal_fit.random.draw_weibull_samples(n_samples,random_gen,bat_scale,bat_shape);
});
/**
 * Draws random survival times based on a cure model.
 */
app.regal_fit.random.draw_cure_samples = (function app$regal_fit$random$draw_cure_samples(p__35330,n_samples,random_gen){
var map__35331 = p__35330;
var map__35331__$1 = cljs.core.__destructure_map(map__35331);
var cure_frac = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070));
var unc_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077));
var unc_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744));
var random_cure_flags = cljs.numpy_random.random(random_gen,n_samples).toArray();
var uncured_times = app.regal_fit.random.draw_weibull_samples(n_samples,random_gen,unc_scale,unc_shape);
var uncured_times_arr = uncured_times.toArray();
var output_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (r,u){
if((r < cure_frac)){
return cljs.numpy.inf;
} else {
return u;
}
}),random_cure_flags,uncured_times_arr);
var G__35333 = cljs.core.to_array(output_seq);
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__35333) : cljs.numpy.array.call(null,G__35333));
});
/**
 * Draws random survival times based on a leaky cure model.
 */
app.regal_fit.random.draw_leaky_samples = (function app$regal_fit$random$draw_leaky_samples(p__35334,n_samples,random_gen){
var map__35335 = p__35334;
var map__35335__$1 = cljs.core.__destructure_map(map__35335);
var cure_frac = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070));
var unc_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077));
var unc_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744));
var leak_yr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545));
var random_cure_flags = cljs.numpy_random.random(random_gen,n_samples).toArray();
var uncured_times_arr = app.regal_fit.random.draw_weibull_samples(n_samples,random_gen,unc_scale,unc_shape).toArray();
var leak_rate_monthly = (leak_yr / 12.0);
var random_leak_vals = cljs.numpy_random.random(random_gen,n_samples).toArray();
var output_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (r,u,l){
if((r < cure_frac)){
if((leak_rate_monthly > (0))){
return ((- Math.log(l)) / leak_rate_monthly);
} else {
return cljs.numpy.inf;
}
} else {
return u;
}
}),random_cure_flags,uncured_times_arr,random_leak_vals);
var G__35342 = cljs.core.to_array(output_seq);
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__35342) : cljs.numpy.array.call(null,G__35342));
});
/**
 * Draws random survival times for the GPS arm based on the specified model family.
 */
app.regal_fit.random.draw_gps_times = (function app$regal_fit$random$draw_gps_times(record,n_samples,random_gen){
var G__35343 = new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(record);
switch (G__35343) {
case "weibull":
return app.regal_fit.random.draw_weibull_samples(n_samples,random_gen,new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240).cljs$core$IFn$_invoke$arity$1(record));

break;
case "cure":
return app.regal_fit.random.draw_cure_samples(record,n_samples,random_gen);

break;
case "leaky":
return app.regal_fit.random.draw_leaky_samples(record,n_samples,random_gen);

break;
default:
return null;

}
});

//# sourceMappingURL=app.regal_fit.random.js.map
