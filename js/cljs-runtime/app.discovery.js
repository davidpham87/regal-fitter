goog.provide('app.discovery');
/**
 * Calculates lambda given IRM (the experimental mOS), D (delay to enroll), and k (weibull shape paraeer)
 */
app.discovery.population_cr2_lambda = (function app$discovery$population_cr2_lambda(irm,d,k){
var numerator = (cljs.math.pow((irm + d),k) - cljs.math.pow(d,k));
var denominator = cljs.math.log((2));
var base = (numerator / denominator);
var exponent = ((1) / k);
return cljs.math.pow(base,exponent);
});
/**
 * Calculates true mOS given population lambda and k.
 */
app.discovery.true_mos = (function app$discovery$true_mos(lambda,k){
return (lambda * cljs.math.pow(cljs.math.log((2)),((1) / k)));
});
app.discovery.get_discovery_state = (function app$discovery$get_discovery_state(){
return new cljs.core.Keyword(null,"discovery","discovery",1906276356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
});
app.discovery.debounce = (function app$discovery$debounce(f,ms){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__28252__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref(timer))){
clearTimeout(cljs.core.deref(timer));
} else {
}

return cljs.core.reset_BANG_(timer,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__28252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28253__i = 0, G__28253__a = new Array(arguments.length -  0);
while (G__28253__i < G__28253__a.length) {G__28253__a[G__28253__i] = arguments[G__28253__i + 0]; ++G__28253__i;}
  args = new cljs.core.IndexedSeq(G__28253__a,0,null);
} 
return G__28252__delegate.call(this,args);};
G__28252.cljs$lang$maxFixedArity = 0;
G__28252.cljs$lang$applyTo = (function (arglist__28254){
var args = cljs.core.seq(arglist__28254);
return G__28252__delegate(args);
});
G__28252.cljs$core$IFn$_invoke$arity$variadic = G__28252__delegate;
return G__28252;
})()
;
});
if((typeof app !== 'undefined') && (typeof app.discovery !== 'undefined') && (typeof app.discovery.debounced_calc_update !== 'undefined')){
} else {
app.discovery.debounced_calc_update = app.discovery.debounce((function (params){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"calc-params","calc-params",1198861913)], null),params);
}),(200));
}
if((typeof app !== 'undefined') && (typeof app.discovery !== 'undefined') && (typeof app.discovery.debounced_sim_run !== 'undefined')){
} else {
app.discovery.debounced_sim_run = app.discovery.debounce((function (family,params){
return app.simulator.run_discovery_simulation_BANG_(family,params);
}),(500));
}
app.discovery.set_active_family_BANG_ = (function app$discovery$set_active_family_BANG_(family){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"active-family","active-family",1167742120)], null),family);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"discovery","discovery",1906276356),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], 0));

var disc = new cljs.core.Keyword(null,"discovery","discovery",1906276356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(disc),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(disc)], 0));
return app.discovery.debounced_sim_run(family,params);
});
app.discovery.param_input = (function app$discovery$param_input(var_args){
var G__28091 = arguments.length;
switch (G__28091) {
case 6:
return app.discovery.param_input.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.discovery.param_input.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(app.discovery.param_input.cljs$core$IFn$_invoke$arity$6 = (function (props,param_key,label,min,max,step){
return app.discovery.param_input.cljs$core$IFn$_invoke$arity$7(props,param_key,label,min,max,step,false);
}));

(app.discovery.param_input.cljs$core$IFn$_invoke$arity$7 = (function (p__28092,param_key,label,min,max,step,disabled_QMARK_){
var map__28093 = p__28092;
var map__28093__$1 = cljs.core.__destructure_map(map__28093);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28093__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28093__$1,new cljs.core.Keyword(null,"set-values","set-values",-928640446));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28093__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,param_key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-xs.font-semibold","label.block.text-xs.font-semibold",-110936983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(disabled_QMARK_)?"text-gray-400":"text-gray-600")], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-full","input.w-full",-1635738475),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__28098_28257 = cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,v]);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28098_28257) : set_values.call(null,G__28098_28257));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(param_key,v) : on_change.call(null,param_key,v));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.p-1.text-xs.w-16","input.border.rounded.p-1.text-xs.w-16",538660422),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__28102_28258 = cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,v]);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28102_28258) : set_values.call(null,G__28102_28258));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(param_key,v) : on_change.call(null,param_key,v));
} else {
return null;
}
})], null)], null)], null)], null);
}));

(app.discovery.param_input.cljs$lang$maxFixedArity = 7);

app.discovery.calculate_stats = (function app$discovery$calculate_stats(family,params,config){
var vec__28110 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(1),null);
var target_times = (function (){var G__28113 = [new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config)];
var G__28114 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__28113,G__28114) : cljs.numpy.array.call(null,G__28113,G__28114));
})();
var bat_med_arr = (function (){var G__28115 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28115) : cljs.numpy.array.call(null,G__28115));
})();
var bat_shape_arr = (function (){var G__28116 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28116) : cljs.numpy.array.call(null,G__28116));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr);
var bat_shape = bat_shape_arr;
var bat_res = app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale,bat_shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var gps_res = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__28117 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28117) : cljs.numpy.array.call(null,G__28117));
})();
var shape = (function (){var G__28118 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28118) : cljs.numpy.array.call(null,G__28118));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__28119 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28119) : cljs.numpy.array.call(null,G__28119));
})();
var shape = (function (){var G__28120 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28120) : cljs.numpy.array.call(null,G__28120));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__28125 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28125) : cljs.numpy.array.call(null,G__28125));
})();
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__28126 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28126) : cljs.numpy.array.call(null,G__28126));
})();
var shape = (function (){var G__28127 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28127) : cljs.numpy.array.call(null,G__28127));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__28128 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28128) : cljs.numpy.array.call(null,G__28128));
})();
var leak = (function (){var G__28129 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28129) : cljs.numpy.array.call(null,G__28129));
})();
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.leaky_cure_survival_probability,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape,leak], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():null)));
var exp_bat = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(bat_res).toArray();
var var_bat = new cljs.core.Keyword(null,"variance","variance",1132010827).cljs$core$IFn$_invoke$arity$1(bat_res).toArray();
var exp_gps = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(gps_res).toArray();
var var_gps = new cljs.core.Keyword(null,"variance","variance",1132010827).cljs$core$IFn$_invoke$arity$1(gps_res).toArray();
var targets = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801).cljs$core$IFn$_invoke$arity$1(config)], null);
var labels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IA (46.0m)","UPD (58.0m)","PR3 (62.97m)"], null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic((function (label,target,e_bat,v_bat,e_gps,v_gps){
var expected = (e_bat + e_gps);
var variance = (v_bat + v_gps);
var sd = Math.sqrt(variance);
var std_dev = ((expected - target) / sd);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"sd","sd",-1707124456),sd,new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489),std_dev], null);
}),labels,targets,cljs.core.first(exp_bat),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(var_bat),cljs.core.first(exp_gps),cljs.core.first(var_gps)], 0));
});
app.discovery.calculate_curves = (function app$discovery$calculate_curves(family,params,config){
var t_max = (80);
var t_pts = (cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3 ? cljs.numpy.linspace.cljs$core$IFn$_invoke$arity$3((0),t_max,(200)) : cljs.numpy.linspace.call(null,(0),t_max,(200)));
var vec__28130 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(1),null);
var bat_med_arr = (function (){var G__28136 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28136) : cljs.numpy.array.call(null,G__28136));
})();
var bat_shape_arr = (function (){var G__28137 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28137) : cljs.numpy.array.call(null,G__28137));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr);
var bat_shape = bat_shape_arr;
var s_bat = app.regal_fit.survival.weibull_survival_probability(t_pts,bat_scale,bat_shape);
var ev_bat = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale,bat_shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var vec__28133 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__28138 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28138) : cljs.numpy.array.call(null,G__28138));
})();
var shape = (function (){var G__28139 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28139) : cljs.numpy.array.call(null,G__28139));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.weibull_survival_probability(t_pts,scale,shape),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__28144 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28144) : cljs.numpy.array.call(null,G__28144));
})();
var shape = (function (){var G__28145 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28145) : cljs.numpy.array.call(null,G__28145));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__28146 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28146) : cljs.numpy.array.call(null,G__28146));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.cure_survival_probability(t_pts,cf,scale,shape),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__28147 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28147) : cljs.numpy.array.call(null,G__28147));
})();
var shape = (function (){var G__28148 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28148) : cljs.numpy.array.call(null,G__28148));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__28149 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28149) : cljs.numpy.array.call(null,G__28149));
})();
var leak = (function (){var G__28150 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28150) : cljs.numpy.array.call(null,G__28150));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.leaky_cure_survival_probability(t_pts,cf,scale,shape,leak),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.leaky_cure_survival_probability,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape,leak], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():null)));
var s_gps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(0),null);
var ev_gps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28133,(1),null);
var s_pool = (function (){var G__28151 = (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(s_bat,s_gps) : cljs.numpy.add.call(null,s_bat,s_gps));
var G__28152 = 0.5;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__28151,G__28152) : cljs.numpy.multiply.call(null,G__28151,G__28152));
})();
var ev_total = (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(ev_bat,ev_gps) : cljs.numpy.add.call(null,ev_bat,ev_gps));
var t_arr = t_pts.toArray();
var s_bat_arr = s_bat.toArray();
var s_gps_arr = s_gps.toArray();
var s_pool_arr = s_pool.toArray();
var t_36 = (function (){var G__28153 = [(36)];
var G__28154 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__28153,G__28154) : cljs.numpy.array.call(null,G__28153,G__28154));
})();
var s_bat_36 = app.regal_fit.survival.weibull_survival_probability(t_36,bat_scale,bat_shape);
var s_gps_36 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__28155 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28155) : cljs.numpy.array.call(null,G__28155));
})();
var shape = (function (){var G__28159 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28159) : cljs.numpy.array.call(null,G__28159));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return app.regal_fit.survival.weibull_survival_probability(t_36,scale,shape);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__28164 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28164) : cljs.numpy.array.call(null,G__28164));
})();
var shape = (function (){var G__28165 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28165) : cljs.numpy.array.call(null,G__28165));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__28166 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28166) : cljs.numpy.array.call(null,G__28166));
})();
return app.regal_fit.survival.cure_survival_probability(t_36,cf,scale,shape);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__28167 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28167) : cljs.numpy.array.call(null,G__28167));
})();
var shape = (function (){var G__28168 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28168) : cljs.numpy.array.call(null,G__28168));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__28169 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28169) : cljs.numpy.array.call(null,G__28169));
})();
var leak = (function (){var G__28170 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__28170) : cljs.numpy.array.call(null,G__28170));
})();
return app.regal_fit.survival.leaky_cure_survival_probability(t_36,cf,scale,shape,leak);
})():null)));
var s_pool_36 = (function (){var G__28171 = (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(s_bat_36,s_gps_36) : cljs.numpy.add.call(null,s_bat_36,s_gps_36));
var G__28172 = 0.5;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__28171,G__28172) : cljs.numpy.multiply.call(null,G__28171,G__28172));
})();
var s_bat_36_val = cljs.core.first(s_bat_36.toArray());
var s_gps_36_val = cljs.core.first(s_gps_36.toArray());
var s_pool_36_val = cljs.core.first(s_pool_36.toArray());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"survival","survival",2035274828),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"survival","survival",2035274828),s,new cljs.core.Keyword(null,"group","group",582596132),"Pooled"], null);
}),t_arr,s_pool_arr),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"survival","survival",2035274828),s,new cljs.core.Keyword(null,"group","group",582596132),"GPS"], null);
}),t_arr,s_gps_arr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"survival","survival",2035274828),s,new cljs.core.Keyword(null,"group","group",582596132),"BAT"], null);
}),t_arr,s_bat_arr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(36),new cljs.core.Keyword(null,"survival","survival",2035274828),s_pool_36_val,new cljs.core.Keyword(null,"group","group",582596132),"Pooled"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(36),new cljs.core.Keyword(null,"survival","survival",2035274828),s_gps_36_val,new cljs.core.Keyword(null,"group","group",582596132),"GPS"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(36),new cljs.core.Keyword(null,"survival","survival",2035274828),s_bat_36_val,new cljs.core.Keyword(null,"group","group",582596132),"BAT"], null)], null)], 0))),new cljs.core.Keyword(null,"accrual","accrual",445204386),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"events","events",1792552201),e,new cljs.core.Keyword(null,"group","group",582596132),"Total"], null);
}),t_arr,cljs.core.first(ev_total.toArray())),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"events","events",1792552201),e,new cljs.core.Keyword(null,"group","group",582596132),"GPS"], null);
}),t_arr,cljs.core.first(ev_gps.toArray())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"events","events",1792552201),e,new cljs.core.Keyword(null,"group","group",582596132),"BAT"], null);
}),t_arr,cljs.core.first(ev_bat.toArray()))], 0)))], null);
});
app.discovery.calculate_residual = (function app$discovery$calculate_residual(milestone_stats){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Math.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28180_SHARP_){
return Math.abs((new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(p1__28180_SHARP_) - new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__28180_SHARP_)));
}),milestone_stats));
});
app.discovery.stats_row = (function app$discovery$stats_row(title,stats){
var res = app.discovery.calculate_residual(stats);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6","div.mb-6",-1954659128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-sm.font-bold.text-gray-700.mb-3","h4.text-sm.font-bold.text-gray-700.mb-3",-288098050),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.sm:grid-cols-4.gap-3","div.grid.grid-cols-1.sm:grid-cols-4.gap-3",213432155),(function (){var iter__5649__auto__ = (function app$discovery$stats_row_$_iter__28181(s__28182){
return (new cljs.core.LazySeq(null,(function (){
var s__28182__$1 = s__28182;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28182__$1);
if(temp__5825__auto__){
var s__28182__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28182__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28182__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28184 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28183 = (0);
while(true){
if((i__28183 < size__5648__auto__)){
var s = cljs.core._nth(c__5647__auto__,i__28183);
cljs.core.chunk_append(b__28184,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.flex.items-baseline.gap-1","div.mt-1.flex.items-baseline.gap-1",785863541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-bold.text-gray-800","span.text-xl.font-bold.text-gray-800",-558387944),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(s).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),(""+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(s)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.grid.grid-cols-2.gap-1","div.mt-1.grid.grid-cols-2.gap-1",-1235441401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"SD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.Keyword(null,"sd","sd",-1707124456).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"Std Dev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((Math.abs(new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s)) > (2)))?"text-red-600":"text-green-600")], null),new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)));

var G__28262 = (i__28183 + (1));
i__28183 = G__28262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28184),app$discovery$stats_row_$_iter__28181(cljs.core.chunk_rest(s__28182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28184),null);
}
} else {
var s = cljs.core.first(s__28182__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.flex.items-baseline.gap-1","div.mt-1.flex.items-baseline.gap-1",785863541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-bold.text-gray-800","span.text-xl.font-bold.text-gray-800",-558387944),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(s).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),(""+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(s)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.grid.grid-cols-2.gap-1","div.mt-1.grid.grid-cols-2.gap-1",-1235441401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"SD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.Keyword(null,"sd","sd",-1707124456).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"Std Dev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((Math.abs(new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s)) > (2)))?"text-red-600":"text-green-600")], null),new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)),app$discovery$stats_row_$_iter__28181(cljs.core.rest(s__28182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(stats);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border.flex.flex-col","div.bg-white.p-3.rounded-xl.shadow-sm.border.flex.flex-col",-247825867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),"Quality of Fit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xl.font-extrabold.text-gray-800.mt-1","div.text-xl.font-extrabold.text-gray-800.mt-1",-167159123),res.toFixed((2))," residual"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.px-2.py-1.rounded-lg.text-xs.font-bold.uppercase","span.px-2.py-1.rounded-lg.text-xs.font-bold.uppercase",1975080642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((res < 2.0))?"bg-green-100 text-green-800":(((res < 5.0))?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"
))], null),(((res < 2.0))?"Excellent":(((res < 5.0))?"Acceptable":"Poor"
))], null)], null)], null)], null)], null);
});
app.discovery.discovery_view_content = (function app$discovery$discovery_view_content(p__28199){
var map__28200 = p__28199;
var map__28200__$1 = cljs.core.__destructure_map(map__28200);
var props = map__28200__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28200__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28200__$1,new cljs.core.Keyword(null,"set-values","set-values",-928640446));
var state = app.discovery.get_discovery_state();
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var active_family = new cljs.core.Keyword(null,"active-family","active-family",1167742120).cljs$core$IFn$_invoke$arity$1(state);
var calc_params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(state),values], 0));
var params = values;
var placebo_mode_QMARK_ = new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510).cljs$core$IFn$_invoke$arity$1(params);
var stats = app.discovery.calculate_stats(active_family,calc_params,config);
var curve_data = app.discovery.calculate_curves(active_family,calc_params,config);
var avg_med = ((new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(calc_params) + new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(calc_params)) / 2.0);
var h0_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calc_params,new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),avg_med,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),avg_med,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),0.0], 0));
var stats_h0 = app.discovery.calculate_stats(active_family,h0_params,config);
var curve_data_h0 = app.discovery.calculate_curves(active_family,h0_params,config);
var bat_true_lambda = app.discovery.population_cr2_lambda(new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(calc_params),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(calc_params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return 3.0;
}
})(),new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(calc_params));
var bat_true_mos = app.discovery.true_mos(bat_true_lambda,new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(calc_params));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6.max-w-7xl.mx-auto","div.p-6.max-w-7xl.mx-auto",-1006682990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-extrabold.text-gray-800.mb-2","h1.text-3xl.font-extrabold.text-gray-800.mb-2",-1735397066),"Discovery View"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-600.mb-6","p.text-gray-600.mb-6",1530133303),(""+"Explore survival curves and event accrual "+"given parametric assumptions.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mb-6.border-b","div.flex.gap-2.mb-6.border-b",-1465269195),(function (){var iter__5649__auto__ = (function app$discovery$discovery_view_content_$_iter__28205(s__28206){
return (new cljs.core.LazySeq(null,(function (){
var s__28206__$1 = s__28206;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28206__$1);
if(temp__5825__auto__){
var s__28206__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28206__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28206__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28208 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28207 = (0);
while(true){
if((i__28207 < size__5648__auto__)){
var fam = cljs.core._nth(c__5647__auto__,i__28207);
cljs.core.chunk_append(b__28208,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.px-4.py-2.text-sm.font-medium.transition-colors.inline-block.text-center","a.px-4.py-2.text-sm.font-medium.transition-colors.inline-block.text-center",16902071),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_family,fam))?"border-b-2 border-blue-600 text-blue-600":"text-gray-500 hover:text-gray-700"),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"discovery-sub","discovery-sub",1797703249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subtab","subtab",1005980472),fam], null))], null),clojure.string.capitalize(fam)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__28271 = (i__28207 + (1));
i__28207 = G__28271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28208),app$discovery$discovery_view_content_$_iter__28205(cljs.core.chunk_rest(s__28206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28208),null);
}
} else {
var fam = cljs.core.first(s__28206__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.px-4.py-2.text-sm.font-medium.transition-colors.inline-block.text-center","a.px-4.py-2.text-sm.font-medium.transition-colors.inline-block.text-center",16902071),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_family,fam))?"border-b-2 border-blue-600 text-blue-600":"text-gray-500 hover:text-gray-700"),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"discovery-sub","discovery-sub",1797703249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subtab","subtab",1005980472),fam], null))], null),clojure.string.capitalize(fam)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$discovery$discovery_view_content_$_iter__28205(cljs.core.rest(s__28206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weibull","cure","leaky"], null));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8","div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8",-588592895),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-bold.text-gray-800.mb-4","h3.font-bold.text-gray-800.mb-4",-469189743),"Parameters"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4","div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4",1227576997),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12","div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12",-1533286711),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#placebo-mode","input#placebo-mode",133878999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),placebo_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var checked_QMARK_ = e.target.checked;
if(cljs.core.truth_(checked_QMARK_)){
var G__28216 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),true,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),0.0,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(values)], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28216) : set_values.call(null,G__28216));
} else {
var G__28217 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),false], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28217) : set_values.call(null,G__28217));
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2","label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2",307273585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"placebo-mode"], null),"Placebo Mode"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (k,v){
if(cljs.core.truth_((function (){var and__5160__auto__ = placebo_mode_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"bat-med","bat-med",-703214708));
} else {
return and__5160__auto__;
}
})())){
var G__28221 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),v], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28221) : set_values.call(null,G__28221));
} else {
return null;
}
})),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),"BAT Median",(4),(25),0.5], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489),"Weibull k shape",0.5,2.0,0.05], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"delay","delay",-574225219),"Delay to Enroll",0.0,20.0,0.5], null),(function (){var G__28222 = active_family;
switch (G__28222) {
case "weibull":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),"GPS Median",(4),(50),1.0,placebo_mode_QMARK_], null)], null);

break;
case "cure":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),"GPS Median",(4),(50),1.0,placebo_mode_QMARK_], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),"Cure Fraction",0.0,0.95,0.05,placebo_mode_QMARK_], null)], null);

break;
case "leaky":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),"GPS Median",(4),(50),1.0,placebo_mode_QMARK_], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),"Cure Fraction",0.0,0.95,0.05,placebo_mode_QMARK_], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545),"Leak Rate / Year",0.0,0.1,0.01], null)], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28222))));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-6","div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-6",-1902682574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-4","div.flex.items-center.gap-4",-394801599),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.border-r.pr-4","div.flex.items-center.gap-2.border-r.pr-4",-662460638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xs.font-bold.text-gray-600.mr-1","label.text-xs.font-bold.text-gray-600.mr-1",-284158558),"Sim Count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-24","input.w-24",1685844718),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(100),new cljs.core.Keyword(null,"max","max",61366548),(5000),new cljs.core.Keyword(null,"step","step",1288888124),(100),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__28224_28273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v], null);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28224_28273) : set_values.call(null,G__28224_28273));

return app.discovery.debounced_sim_run(active_family,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(calc_params,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.p-1.text-xs.w-14","input.border.rounded.p-1.text-xs.w-14",-302905434),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"step","step",1288888124),(100),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__28229_28274 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v], null);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__28229_28274) : set_values.call(null,G__28229_28274));

return app.discovery.debounced_sim_run(active_family,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(calc_params,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded-lg.shadow-sm.transition-colors","button.rounded-lg.shadow-sm.transition-colors",529147465),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4","py-2","bg-blue-600","hover:bg-blue-700","text-white","text-xs","font-bold"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return app.simulator.run_discovery_simulation_BANG_(active_family,calc_params);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103))], null),"Force Run"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103)))?(function (){var nsims = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(calc_params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500.animate-pulse","span.text-xs.text-gray-500.animate-pulse",-796526028),(""+"Running "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsims)+" trial simulations...")], null);
})():null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-6","div.flex.items-center.gap-6",1035196619),(function (){var G__28233 = new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state);
var G__28233__$1 = (((G__28233 instanceof cljs.core.Keyword))?G__28233.fqn:null);
switch (G__28233__$1) {
case "done":
var res = new cljs.core.Keyword(null,"sim-result","sim-result",-213399943).cljs$core$IFn$_invoke$arity$1(state);
var p_suc = new cljs.core.Keyword(null,"p-success-overall","p-success-overall",-477143706).cljs$core$IFn$_invoke$arity$1(res);
var acc_rate = new cljs.core.Keyword(null,"acceptance-rate","acceptance-rate",653141244).cljs$core$IFn$_invoke$arity$1(res);
var med_hr = new cljs.core.Keyword(null,"median-hr-final","median-hr-final",809702905).cljs$core$IFn$_invoke$arity$1(res);
var med_t80 = new cljs.core.Keyword(null,"median-t80-months","median-t80-months",-1483725195).cljs$core$IFn$_invoke$arity$1(res);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"P(Success)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-lg.font-bold.text-blue-600","div.text-lg.font-bold.text-blue-600",1804480474),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * p_suc).toFixed((1)))+"%")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"Acceptance Rate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-semibold.text-gray-700","div.text-sm.font-semibold.text-gray-700",-801589457),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * acc_rate).toFixed((1)))+"%")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"Median HR"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-semibold.text-gray-700","div.text-sm.font-semibold.text-gray-700",-801589457),(cljs.core.truth_(isNaN(med_hr))?"N/A":med_hr.toFixed((3)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"Median T80"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-semibold.text-gray-700","div.text-sm.font-semibold.text-gray-700",-801589457),(cljs.core.truth_(isNaN(med_t80))?"N/A":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(med_t80.toFixed((1)))+"m"))], null)], null)], null);

break;
case "failed-prefilter":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-semibold.text-red-500","span.text-xs.font-semibold.text-red-500",1696136371),(""+"Prefilter check failed: 0% of "+"trials passed event pre-screening.")], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-semibold.text-red-500","span.text-xs.font-semibold.text-red-500",1696136371),(""+"Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sim-result","sim-result",-213399943).cljs$core$IFn$_invoke$arity$1(state)))], null);

break;
default:
return null;

}
})()], null)], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.lg:grid-cols-1.gap-8","div.grid.grid-cols-1.lg:grid-cols-1.gap-8",-352752712),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mb-4","div.flex.justify-between.items-center.mb-4",-1518531499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-extrabold.text-gray-800","h3.font-extrabold.text-gray-800",1806570203),"Alternate Hypothesis (H1): GPS is effective"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.px-3.py-1.rounded-lg.shadow-sm.border.text-sm","div.bg-white.px-3.py-1.rounded-lg.shadow-sm.border.text-sm",1982595342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.text-gray-600","span.font-bold.text-gray-600",-1894920081),"BAT True mOS: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-extrabold.text-blue-600","span.font-extrabold.text-blue-600",1098255475),bat_true_mos.toFixed((2)),"m"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.stats_row,"Milestone Stats (H1)",stats], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-4","div.grid.grid-cols-1.md:grid-cols-2.gap-4",1394549817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"Alternate: Survival Curves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_survival_chart,new cljs.core.Keyword(null,"survival","survival",2035274828).cljs$core$IFn$_invoke$arity$1(curve_data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"Alternate: Event Accrual"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_accrual_chart,new cljs.core.Keyword(null,"accrual","accrual",445204386).cljs$core$IFn$_invoke$arity$1(curve_data),stats], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-extrabold.text-gray-800.mb-4","h3.font-extrabold.text-gray-800.mb-4",-1368404049),"Null Hypothesis (H0): GPS is placebo (",avg_med," mOS",")"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.stats_row,"Milestone Stats (H0)",stats_h0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-4","div.grid.grid-cols-1.md:grid-cols-2.gap-4",1394549817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"H0: Survival Curves (Cure=0, Shared Med)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_survival_chart,new cljs.core.Keyword(null,"survival","survival",2035274828).cljs$core$IFn$_invoke$arity$1(curve_data_h0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"H0: Event Accrual (Cure=0, Shared Med)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_accrual_chart,new cljs.core.Keyword(null,"accrual","accrual",445204386).cljs$core$IFn$_invoke$arity$1(curve_data_h0),stats_h0], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(params))], null))], null);
});
app.discovery.discovery_view = (function app$discovery$discovery_view(){
var with_let28247 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28247","with-let28247",192698583));
var temp__5829__auto___28286 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___28286 == null)){
} else {
var c__24531__auto___28287 = temp__5829__auto___28286;
if((with_let28247.generation === c__24531__auto___28287.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let28247.generation = c__24531__auto___28287.ratomGeneration);
}

var init28248 = (with_let28247.length === (0));
var _ = ((((init28248) || (cljs.core.not(with_let28247.hasOwnProperty((0))))))?(with_let28247[(0)] = (function (){var disc = app.discovery.get_discovery_state();
var fam = new cljs.core.Keyword(null,"active-family","active-family",1167742120).cljs$core$IFn$_invoke$arity$1(disc);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(disc),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(disc)], 0));
return app.simulator.run_discovery_simulation_BANG_(fam,params);
})()):(with_let28247[(0)]));
var res28249 = (function (){var state = app.discovery.get_discovery_state();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.reagent.form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p__28250){
var map__28251 = p__28250;
var map__28251__$1 = cljs.core.__destructure_map(map__28251);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28251__$1,new cljs.core.Keyword(null,"values","values",372645556));
app.state.update_discovery_params_BANG_(values);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"discovery","discovery",1906276356),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], 0));

app.discovery.debounced_calc_update(values);

var fam = new cljs.core.Keyword(null,"active-family","active-family",1167742120).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var disc = new cljs.core.Keyword(null,"discovery","discovery",1906276356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var calc = new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(disc);
return app.discovery.debounced_sim_run(fam,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([calc,values], 0)));
})], null),app.discovery.discovery_view_content], null);
})();
return res28249;
});

//# sourceMappingURL=app.discovery.js.map
