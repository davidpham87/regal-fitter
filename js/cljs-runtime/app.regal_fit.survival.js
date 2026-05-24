goog.provide('app.regal_fit.survival');
/**
 * Computes the Weibull survival function S(t) = exp(-(t/scale)^shape).
 */
app.regal_fit.survival.weibull_survival_probability = (function app$regal_fit$survival$weibull_survival_probability(time_values,scale,shape){
var time_arr = ((typeof time_values === 'number')?(function (){var G__26498 = [time_values];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26498) : cljs.numpy.array.call(null,G__26498));
})():time_values);
var clipped_times = (cljs.numpy.clip.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.clip.cljs$core$IFn$_invoke$arity$3(time_arr,(0),cljs.numpy.inf) : cljs.numpy.clip.call(null,time_arr,(0),cljs.numpy.inf));
var scaled_times = (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(clipped_times,scale) : cljs.numpy.divide.call(null,clipped_times,scale));
var powered_times = (cljs.numpy.power.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.power.cljs$core$IFn$_invoke$arity$2(scaled_times,shape) : cljs.numpy.power.call(null,scaled_times,shape));
var negated_power = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(powered_times,-1.0) : cljs.numpy.multiply.call(null,powered_times,-1.0));
return (cljs.numpy.exp.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.exp.cljs$core$IFn$_invoke$arity$1(negated_power) : cljs.numpy.exp.call(null,negated_power));
});
/**
 * Calculates the Weibull scale parameter given a median and shape.
 *   Formula: median / (log(2.0) ^ (1.0 / shape))
 */
app.regal_fit.survival.weibull_scale_from_median = (function app$regal_fit$survival$weibull_scale_from_median(median,shape){
var log_two = Math.log(2.0);
var inverse_shape = (function (){var G__26499 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26500 = shape;
return (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(G__26499,G__26500) : cljs.numpy.divide.call(null,G__26499,G__26500));
})();
var denominator = (function (){var G__26501 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(log_two) : cljs.numpy.array.call(null,log_two));
var G__26502 = inverse_shape;
return (cljs.numpy.power.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.power.cljs$core$IFn$_invoke$arity$2(G__26501,G__26502) : cljs.numpy.power.call(null,G__26501,G__26502));
})();
return (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(median,denominator) : cljs.numpy.divide.call(null,median,denominator));
});
/**
 * Computes the survival function for a standard cure fraction model.
 *   S(t) = p-cure + (1.0 - p-cure) * weibull-S(t, unc-scale, unc-shape)
 */
app.regal_fit.survival.cure_survival_probability = (function app$regal_fit$survival$cure_survival_probability(time_values,cure_fraction,unc_scale,unc_shape){
var unc_survival = app.regal_fit.survival.weibull_survival_probability(time_values,unc_scale,unc_shape);
var one_minus_cf = (function (){var G__26503 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26504 = cure_fraction;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26503,G__26504) : cljs.numpy.subtract.call(null,G__26503,G__26504));
})();
var unc_part = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(unc_survival,one_minus_cf) : cljs.numpy.multiply.call(null,unc_survival,one_minus_cf));
return (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(cure_fraction,unc_part) : cljs.numpy.add.call(null,cure_fraction,unc_part));
});
/**
 * Helper to calculate the cured portion of the leaky model.
 */
app.regal_fit.survival.calculate_leaky_cured = (function app$regal_fit$survival$calculate_leaky_cured(time_values,cure_fraction,leak_rate_monthly){
var time_arr = ((typeof time_values === 'number')?(function (){var G__26505 = [time_values];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__26505) : cljs.numpy.array.call(null,G__26505));
})():time_values);
var clipped_times = (cljs.numpy.clip.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.clip.cljs$core$IFn$_invoke$arity$3(time_arr,(0),cljs.numpy.inf) : cljs.numpy.clip.call(null,time_arr,(0),cljs.numpy.inf));
var neg_leak = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(leak_rate_monthly,-1.0) : cljs.numpy.multiply.call(null,leak_rate_monthly,-1.0));
var cured_power = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(clipped_times,neg_leak) : cljs.numpy.multiply.call(null,clipped_times,neg_leak));
var cured_survival = (cljs.numpy.exp.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.exp.cljs$core$IFn$_invoke$arity$1(cured_power) : cljs.numpy.exp.call(null,cured_power));
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(cured_survival,cure_fraction) : cljs.numpy.multiply.call(null,cured_survival,cure_fraction));
});
/**
 * Computes the survival function for a leaky cure fraction model.
 *   S(t) = p-cure * exp(-leak-rate-monthly * t) +
 *       (1.0 - p-cure) * weibull-S(t, unc-scale, unc-shape)
 */
app.regal_fit.survival.leaky_cure_survival_probability = (function app$regal_fit$survival$leaky_cure_survival_probability(time_values,cure_fraction,unc_scale,unc_shape,leak_rate_yearly){
var leak_rate_monthly = (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(leak_rate_yearly,12.0) : cljs.numpy.divide.call(null,leak_rate_yearly,12.0));
var cured_part = app.regal_fit.survival.calculate_leaky_cured(time_values,cure_fraction,leak_rate_monthly);
var uncured_survival = app.regal_fit.survival.weibull_survival_probability(time_values,unc_scale,unc_shape);
var one_minus_cf = (function (){var G__26511 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__26512 = cure_fraction;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__26511,G__26512) : cljs.numpy.subtract.call(null,G__26511,G__26512));
})();
var uncured_part = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(uncured_survival,one_minus_cf) : cljs.numpy.multiply.call(null,uncured_survival,one_minus_cf));
return (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(cured_part,uncured_part) : cljs.numpy.add.call(null,cured_part,uncured_part));
});

//# sourceMappingURL=app.regal_fit.survival.js.map
