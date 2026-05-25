goog.provide('app.stress_test.power');
app.stress_test.power.erf_inv = (function app$stress_test$power$erf_inv(x){
var a = 0.147;
var ln_term = Math.log((1.0 - (x * x)));
var val_const = ((2.0 / (Math.PI * a)) + (ln_term / 2.0));
var inner_sqrt = Math.sqrt(((val_const * val_const) - (ln_term / a)));
var res = Math.sqrt((inner_sqrt - val_const));
if((x < 0.0)){
return (- res);
} else {
return res;
}
});
app.stress_test.power.qnorm = (function app$stress_test$power$qnorm(p){
var p_clamped = cljs.core.max.cljs$core$IFn$_invoke$arity$2(1.0E-4,cljs.core.min.cljs$core$IFn$_invoke$arity$2(0.9999,p));
var x = ((2.0 * p_clamped) - 1.0);
return (Math.sqrt(2.0) * app.stress_test.power.erf_inv(x));
});
app.stress_test.power.schoenfeld_events = (function app$stress_test$power$schoenfeld_events(hr,alpha,power){
var z_alpha = app.stress_test.power.qnorm((1.0 - alpha));
var z_beta = app.stress_test.power.qnorm(power);
var numerator = (4.0 * Math.pow((z_alpha + z_beta),(2)));
var denominator = Math.pow(Math.log(hr),(2));
if(cljs.core.truth_((function (){var or__5162__auto__ = (denominator === (0));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return isNaN(denominator);
}
})())){
return Number.POSITIVE_INFINITY;
} else {
return (numerator / denominator);
}
});
app.stress_test.power.required_sample_size = (function app$stress_test$power$required_sample_size(hr,alpha,power,p_event){
var d = app.stress_test.power.schoenfeld_events(hr,alpha,power);
if(cljs.core.truth_((function (){var or__5162__auto__ = (p_event === (0));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return isNaN(p_event);
}
})())){
return Number.POSITIVE_INFINITY;
} else {
return (d / p_event);
}
});
app.stress_test.power.power_grid = (function app$stress_test$power$power_grid(bat_range,gps_range,alpha,power,p_event){
var vec__26786 = bat_range;
var bat_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26786,(0),null);
var bat_stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26786,(1),null);
var bat_step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26786,(2),null);
var vec__26789 = gps_range;
var gps_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(0),null);
var gps_stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(1),null);
var gps_step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(2),null);
var bat_vals = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__26782_SHARP_){
return (p1__26782_SHARP_ <= bat_stop);
}),cljs.core.iterate((function (p1__26783_SHARP_){
return (p1__26783_SHARP_ + bat_step);
}),bat_start));
var gps_vals = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__26784_SHARP_){
return (p1__26784_SHARP_ <= gps_stop);
}),cljs.core.iterate((function (p1__26785_SHARP_){
return (p1__26785_SHARP_ + gps_step);
}),gps_start));
var iter__5649__auto__ = (function app$stress_test$power$power_grid_$_iter__26795(s__26796){
return (new cljs.core.LazySeq(null,(function (){
var s__26796__$1 = s__26796;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26796__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var bat = cljs.core.first(xs__6385__auto__);
var iterys__5645__auto__ = ((function (s__26796__$1,bat,xs__6385__auto__,temp__5825__auto__,vec__26786,bat_start,bat_stop,bat_step,vec__26789,gps_start,gps_stop,gps_step,bat_vals,gps_vals){
return (function app$stress_test$power$power_grid_$_iter__26795_$_iter__26799(s__26800){
return (new cljs.core.LazySeq(null,((function (s__26796__$1,bat,xs__6385__auto__,temp__5825__auto__,vec__26786,bat_start,bat_stop,bat_step,vec__26789,gps_start,gps_stop,gps_step,bat_vals,gps_vals){
return (function (){
var s__26800__$1 = s__26800;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__26800__$1);
if(temp__5825__auto____$1){
var s__26800__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26800__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__26800__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__26802 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__26801 = (0);
while(true){
if((i__26801 < size__5648__auto__)){
var gps = cljs.core._nth(c__5647__auto__,i__26801);
cljs.core.chunk_append(b__26802,(function (){var hr = (bat / gps);
var events = app.stress_test.power.schoenfeld_events(hr,alpha,power);
var n = app.stress_test.power.required_sample_size(hr,alpha,power,p_event);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bat-mos","bat-mos",1727898905),bat,new cljs.core.Keyword(null,"gps-mos","gps-mos",922295744),gps,new cljs.core.Keyword(null,"hr","hr",1377740067),hr,new cljs.core.Keyword(null,"events-required","events-required",-1886890932),events,new cljs.core.Keyword(null,"n-required","n-required",-355916742),n], null);
})());

var G__26808 = (i__26801 + (1));
i__26801 = G__26808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26802),app$stress_test$power$power_grid_$_iter__26795_$_iter__26799(cljs.core.chunk_rest(s__26800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26802),null);
}
} else {
var gps = cljs.core.first(s__26800__$2);
return cljs.core.cons((function (){var hr = (bat / gps);
var events = app.stress_test.power.schoenfeld_events(hr,alpha,power);
var n = app.stress_test.power.required_sample_size(hr,alpha,power,p_event);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bat-mos","bat-mos",1727898905),bat,new cljs.core.Keyword(null,"gps-mos","gps-mos",922295744),gps,new cljs.core.Keyword(null,"hr","hr",1377740067),hr,new cljs.core.Keyword(null,"events-required","events-required",-1886890932),events,new cljs.core.Keyword(null,"n-required","n-required",-355916742),n], null);
})(),app$stress_test$power$power_grid_$_iter__26795_$_iter__26799(cljs.core.rest(s__26800__$2)));
}
} else {
return null;
}
break;
}
});})(s__26796__$1,bat,xs__6385__auto__,temp__5825__auto__,vec__26786,bat_start,bat_stop,bat_step,vec__26789,gps_start,gps_stop,gps_step,bat_vals,gps_vals))
,null,null));
});})(s__26796__$1,bat,xs__6385__auto__,temp__5825__auto__,vec__26786,bat_start,bat_stop,bat_step,vec__26789,gps_start,gps_stop,gps_step,bat_vals,gps_vals))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(gps_vals));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,app$stress_test$power$power_grid_$_iter__26795(cljs.core.rest(s__26796__$1)));
} else {
var G__26809 = cljs.core.rest(s__26796__$1);
s__26796__$1 = G__26809;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(bat_vals);
});
app.stress_test.power.implied_event_probability = (function app$stress_test$power$implied_event_probability(n_ref,bat_ref,gps_ref,alpha,power){
var hr = (bat_ref / gps_ref);
var d = app.stress_test.power.schoenfeld_events(hr,alpha,power);
return (d / n_ref);
});

//# sourceMappingURL=app.stress_test.power.js.map
