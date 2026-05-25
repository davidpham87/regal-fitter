goog.provide('app.regal_fit.survival');
/**
 * Computes the Weibull survival function S(t) = exp(-(t/scale)^shape).
 */
app.regal_fit.survival.weibull_survival_probability = (function app$regal_fit$survival$weibull_survival_probability(time_values,scale,shape){
var time_arr = ((typeof time_values === 'number')?(function (){var G__30120 = [time_values];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__30120) : cljs.numpy.array.call(null,G__30120));
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
var inverse_shape = ((typeof shape === 'number')?(1.0 / shape):(function (){var G__30124 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__30125 = shape;
return (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(G__30124,G__30125) : cljs.numpy.divide.call(null,G__30124,G__30125));
})());
var denominator = ((typeof inverse_shape === 'number')?Math.pow(log_two,inverse_shape):(function (){var G__30126 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(log_two) : cljs.numpy.array.call(null,log_two));
var G__30127 = inverse_shape;
return (cljs.numpy.power.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.power.cljs$core$IFn$_invoke$arity$2(G__30126,G__30127) : cljs.numpy.power.call(null,G__30126,G__30127));
})());
if(((typeof median === 'number') && (typeof denominator === 'number'))){
return (median / denominator);
} else {
return (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(median,denominator) : cljs.numpy.divide.call(null,median,denominator));
}
});
/**
 * Computes the survival function for a standard cure fraction model.
 *   S(t) = p-cure + (1.0 - p-cure) * weibull-S(t, unc-scale, unc-shape)
 */
app.regal_fit.survival.cure_survival_probability = (function app$regal_fit$survival$cure_survival_probability(time_values,cure_fraction,unc_scale,unc_shape){
var unc_survival = app.regal_fit.survival.weibull_survival_probability(time_values,unc_scale,unc_shape);
var cure_fraction_arr = ((typeof cure_fraction === 'number')?(function (){var G__30133 = [cure_fraction];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__30133) : cljs.numpy.array.call(null,G__30133));
})():cure_fraction);
var one_minus_cf = (function (){var G__30134 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__30135 = cure_fraction_arr;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__30134,G__30135) : cljs.numpy.subtract.call(null,G__30134,G__30135));
})();
var unc_part = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(unc_survival,one_minus_cf) : cljs.numpy.multiply.call(null,unc_survival,one_minus_cf));
return (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(cure_fraction_arr,unc_part) : cljs.numpy.add.call(null,cure_fraction_arr,unc_part));
});
/**
 * Helper to calculate the cured portion of the leaky model.
 */
app.regal_fit.survival.calculate_leaky_cured = (function app$regal_fit$survival$calculate_leaky_cured(time_values,cure_fraction_arr,leak_rate_monthly){
var time_arr = ((typeof time_values === 'number')?(function (){var G__30136 = [time_values];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__30136) : cljs.numpy.array.call(null,G__30136));
})():time_values);
var clipped_times = (cljs.numpy.clip.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.clip.cljs$core$IFn$_invoke$arity$3(time_arr,(0),cljs.numpy.inf) : cljs.numpy.clip.call(null,time_arr,(0),cljs.numpy.inf));
var neg_leak = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(leak_rate_monthly,-1.0) : cljs.numpy.multiply.call(null,leak_rate_monthly,-1.0));
var cured_power = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(clipped_times,neg_leak) : cljs.numpy.multiply.call(null,clipped_times,neg_leak));
var cured_survival = (cljs.numpy.exp.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.exp.cljs$core$IFn$_invoke$arity$1(cured_power) : cljs.numpy.exp.call(null,cured_power));
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(cured_survival,cure_fraction_arr) : cljs.numpy.multiply.call(null,cured_survival,cure_fraction_arr));
});
/**
 * Computes the survival function for a leaky cure fraction model.
 *   S(t) = p-cure * exp(-leak-rate-monthly * t) +
 *       (1.0 - p-cure) * weibull-S(t, unc-scale, unc-shape)
 */
app.regal_fit.survival.leaky_cure_survival_probability = (function app$regal_fit$survival$leaky_cure_survival_probability(time_values,cure_fraction,unc_scale,unc_shape,leak_rate_yearly){
var leak_rate_monthly = (function (){var G__30144 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(leak_rate_yearly) : cljs.numpy.array.call(null,leak_rate_yearly));
var G__30145 = 12.0;
return (cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.divide.cljs$core$IFn$_invoke$arity$2(G__30144,G__30145) : cljs.numpy.divide.call(null,G__30144,G__30145));
})();
var cure_fraction_arr = ((typeof cure_fraction === 'number')?(function (){var G__30146 = [cure_fraction];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__30146) : cljs.numpy.array.call(null,G__30146));
})():cure_fraction);
var cured_part = app.regal_fit.survival.calculate_leaky_cured(time_values,cure_fraction_arr,leak_rate_monthly);
var uncured_survival = app.regal_fit.survival.weibull_survival_probability(time_values,unc_scale,unc_shape);
var one_minus_cf = (function (){var G__30147 = (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(1.0) : cljs.numpy.array.call(null,1.0));
var G__30148 = cure_fraction_arr;
return (cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.subtract.cljs$core$IFn$_invoke$arity$2(G__30147,G__30148) : cljs.numpy.subtract.call(null,G__30147,G__30148));
})();
var uncured_part = (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(uncured_survival,one_minus_cf) : cljs.numpy.multiply.call(null,uncured_survival,one_minus_cf));
return (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(cured_part,uncured_part) : cljs.numpy.add.call(null,cured_part,uncured_part));
});

//# sourceMappingURL=app.regal_fit.survival.js.map
