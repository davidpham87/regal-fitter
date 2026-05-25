goog.provide('app.discovery');
app.discovery.get_discovery_state = (function app$discovery$get_discovery_state(){
return new cljs.core.Keyword(null,"discovery","discovery",1906276356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
});
app.discovery.debounce = (function app$discovery$debounce(f,ms){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__27133__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref(timer))){
clearTimeout(cljs.core.deref(timer));
} else {
}

return cljs.core.reset_BANG_(timer,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__27133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27134__i = 0, G__27134__a = new Array(arguments.length -  0);
while (G__27134__i < G__27134__a.length) {G__27134__a[G__27134__i] = arguments[G__27134__i + 0]; ++G__27134__i;}
  args = new cljs.core.IndexedSeq(G__27134__a,0,null);
} 
return G__27133__delegate.call(this,args);};
G__27133.cljs$lang$maxFixedArity = 0;
G__27133.cljs$lang$applyTo = (function (arglist__27135){
var args = cljs.core.seq(arglist__27135);
return G__27133__delegate(args);
});
G__27133.cljs$core$IFn$_invoke$arity$variadic = G__27133__delegate;
return G__27133;
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
var G__27038 = arguments.length;
switch (G__27038) {
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

(app.discovery.param_input.cljs$core$IFn$_invoke$arity$7 = (function (p__27048,param_key,label,min,max,step,disabled_QMARK_){
var map__27049 = p__27048;
var map__27049__$1 = cljs.core.__destructure_map(map__27049);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27049__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27049__$1,new cljs.core.Keyword(null,"set-values","set-values",-928640446));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27049__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,param_key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-xs.font-semibold","label.block.text-xs.font-semibold",-110936983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(disabled_QMARK_)?"text-gray-400":"text-gray-600")], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-full","input.w-full",-1635738475),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__27050_27137 = cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,v]);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27050_27137) : set_values.call(null,G__27050_27137));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(param_key,v) : on_change.call(null,param_key,v));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.p-1.text-xs.w-16","input.border.rounded.p-1.text-xs.w-16",538660422),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__27051_27138 = cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,v]);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27051_27138) : set_values.call(null,G__27051_27138));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(param_key,v) : on_change.call(null,param_key,v));
} else {
return null;
}
})], null)], null)], null)], null);
}));

(app.discovery.param_input.cljs$lang$maxFixedArity = 7);

app.discovery.calculate_stats = (function app$discovery$calculate_stats(family,params,config){
var vec__27055 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27055,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27055,(1),null);
var target_times = (function (){var G__27058 = [new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config)];
var G__27059 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__27058,G__27059) : cljs.numpy.array.call(null,G__27058,G__27059));
})();
var bat_med_arr = (function (){var G__27060 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27060) : cljs.numpy.array.call(null,G__27060));
})();
var bat_shape_arr = (function (){var G__27061 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27061) : cljs.numpy.array.call(null,G__27061));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr);
var bat_shape = bat_shape_arr;
var bat_res = app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale,bat_shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var gps_res = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__27062 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27062) : cljs.numpy.array.call(null,G__27062));
})();
var shape = (function (){var G__27063 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27063) : cljs.numpy.array.call(null,G__27063));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__27067 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27067) : cljs.numpy.array.call(null,G__27067));
})();
var shape = (function (){var G__27069 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27069) : cljs.numpy.array.call(null,G__27069));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27070 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27070) : cljs.numpy.array.call(null,G__27070));
})();
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__27071 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27071) : cljs.numpy.array.call(null,G__27071));
})();
var shape = (function (){var G__27072 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27072) : cljs.numpy.array.call(null,G__27072));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27073 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27073) : cljs.numpy.array.call(null,G__27073));
})();
var leak = (function (){var G__27074 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27074) : cljs.numpy.array.call(null,G__27074));
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
var vec__27077 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27077,(1),null);
var bat_med_arr = (function (){var G__27083 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27083) : cljs.numpy.array.call(null,G__27083));
})();
var bat_shape_arr = (function (){var G__27084 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27084) : cljs.numpy.array.call(null,G__27084));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr);
var bat_shape = bat_shape_arr;
var s_bat = app.regal_fit.survival.weibull_survival_probability(t_pts,bat_scale,bat_shape);
var ev_bat = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale,bat_shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var vec__27080 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__27085 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27085) : cljs.numpy.array.call(null,G__27085));
})();
var shape = (function (){var G__27086 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27086) : cljs.numpy.array.call(null,G__27086));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.weibull_survival_probability(t_pts,scale,shape),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__27088 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27088) : cljs.numpy.array.call(null,G__27088));
})();
var shape = (function (){var G__27089 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27089) : cljs.numpy.array.call(null,G__27089));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27090 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27090) : cljs.numpy.array.call(null,G__27090));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.cure_survival_probability(t_pts,cf,scale,shape),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__27092 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27092) : cljs.numpy.array.call(null,G__27092));
})();
var shape = (function (){var G__27093 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27093) : cljs.numpy.array.call(null,G__27093));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27094 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27094) : cljs.numpy.array.call(null,G__27094));
})();
var leak = (function (){var G__27095 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27095) : cljs.numpy.array.call(null,G__27095));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.leaky_cure_survival_probability(t_pts,cf,scale,shape,leak),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.leaky_cure_survival_probability,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape,leak], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():null)));
var s_gps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27080,(0),null);
var ev_gps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27080,(1),null);
var s_pool = (function (){var G__27096 = (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(s_bat,s_gps) : cljs.numpy.add.call(null,s_bat,s_gps));
var G__27097 = 0.5;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__27096,G__27097) : cljs.numpy.multiply.call(null,G__27096,G__27097));
})();
var ev_total = (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(ev_bat,ev_gps) : cljs.numpy.add.call(null,ev_bat,ev_gps));
var t_arr = t_pts.toArray();
var s_bat_arr = s_bat.toArray();
var s_gps_arr = s_gps.toArray();
var s_pool_arr = s_pool.toArray();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"survival","survival",2035274828),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"survival","survival",2035274828),s,new cljs.core.Keyword(null,"group","group",582596132),"Pooled"], null);
}),t_arr,s_pool_arr),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"survival","survival",2035274828),s,new cljs.core.Keyword(null,"group","group",582596132),"GPS"], null);
}),t_arr,s_gps_arr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"survival","survival",2035274828),s,new cljs.core.Keyword(null,"group","group",582596132),"BAT"], null);
}),t_arr,s_bat_arr)], 0))),new cljs.core.Keyword(null,"accrual","accrual",445204386),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"events","events",1792552201),e,new cljs.core.Keyword(null,"group","group",582596132),"Total"], null);
}),t_arr,cljs.core.first(ev_total.toArray())),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"events","events",1792552201),e,new cljs.core.Keyword(null,"group","group",582596132),"GPS"], null);
}),t_arr,cljs.core.first(ev_gps.toArray())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (t,e){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"events","events",1792552201),e,new cljs.core.Keyword(null,"group","group",582596132),"BAT"], null);
}),t_arr,cljs.core.first(ev_bat.toArray()))], 0)))], null);
});
app.discovery.calculate_residual = (function app$discovery$calculate_residual(milestone_stats){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Math.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27110_SHARP_){
return Math.abs((new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(p1__27110_SHARP_) - new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__27110_SHARP_)));
}),milestone_stats));
});
app.discovery.stats_row = (function app$discovery$stats_row(title,stats){
var res = app.discovery.calculate_residual(stats);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6","div.mb-6",-1954659128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-sm.font-bold.text-gray-700.mb-3","h4.text-sm.font-bold.text-gray-700.mb-3",-288098050),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.sm:grid-cols-4.gap-3","div.grid.grid-cols-1.sm:grid-cols-4.gap-3",213432155),(function (){var iter__5649__auto__ = (function app$discovery$stats_row_$_iter__27111(s__27112){
return (new cljs.core.LazySeq(null,(function (){
var s__27112__$1 = s__27112;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27112__$1);
if(temp__5825__auto__){
var s__27112__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27112__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27112__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27114 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27113 = (0);
while(true){
if((i__27113 < size__5648__auto__)){
var s = cljs.core._nth(c__5647__auto__,i__27113);
cljs.core.chunk_append(b__27114,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.flex.items-baseline.gap-1","div.mt-1.flex.items-baseline.gap-1",785863541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-bold.text-gray-800","span.text-xl.font-bold.text-gray-800",-558387944),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(s).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),(""+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(s)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.grid.grid-cols-2.gap-1","div.mt-1.grid.grid-cols-2.gap-1",-1235441401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"SD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.Keyword(null,"sd","sd",-1707124456).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"Std Dev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((Math.abs(new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s)) > (2)))?"text-red-600":"text-green-600")], null),new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)));

var G__27162 = (i__27113 + (1));
i__27113 = G__27162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27114),app$discovery$stats_row_$_iter__27111(cljs.core.chunk_rest(s__27112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27114),null);
}
} else {
var s = cljs.core.first(s__27112__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.flex.items-baseline.gap-1","div.mt-1.flex.items-baseline.gap-1",785863541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-bold.text-gray-800","span.text-xl.font-bold.text-gray-800",-558387944),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(s).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),(""+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(s)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.grid.grid-cols-2.gap-1","div.mt-1.grid.grid-cols-2.gap-1",-1235441401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"SD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.Keyword(null,"sd","sd",-1707124456).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"Std Dev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((Math.abs(new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s)) > (2)))?"text-red-600":"text-green-600")], null),new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)),app$discovery$stats_row_$_iter__27111(cljs.core.rest(s__27112__$2)));
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
app.discovery.discovery_view_content = (function app$discovery$discovery_view_content(p__27115){
var map__27116 = p__27115;
var map__27116__$1 = cljs.core.__destructure_map(map__27116);
var props = map__27116__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27116__$1,new cljs.core.Keyword(null,"set-values","set-values",-928640446));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6.max-w-7xl.mx-auto","div.p-6.max-w-7xl.mx-auto",-1006682990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-extrabold.text-gray-800.mb-2","h1.text-3xl.font-extrabold.text-gray-800.mb-2",-1735397066),"Discovery View"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-600.mb-6","p.text-gray-600.mb-6",1530133303),(""+"Explore survival curves and event accrual "+"given parametric assumptions.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mb-6.border-b","div.flex.gap-2.mb-6.border-b",-1465269195),(function (){var iter__5649__auto__ = (function app$discovery$discovery_view_content_$_iter__27117(s__27118){
return (new cljs.core.LazySeq(null,(function (){
var s__27118__$1 = s__27118;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27118__$1);
if(temp__5825__auto__){
var s__27118__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27118__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27118__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27120 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27119 = (0);
while(true){
if((i__27119 < size__5648__auto__)){
var fam = cljs.core._nth(c__5647__auto__,i__27119);
cljs.core.chunk_append(b__27120,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.text-sm.font-medium.transition-colors","button.px-4.py-2.text-sm.font-medium.transition-colors",-577658145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_family,fam))?"border-b-2 border-blue-600 text-blue-600":"text-gray-500 hover:text-gray-700"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27119,fam,c__5647__auto__,size__5648__auto__,b__27120,s__27118__$2,temp__5825__auto__,state,config,active_family,calc_params,params,placebo_mode_QMARK_,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27116,map__27116__$1,props,values,set_values){
return (function (){
return app.discovery.set_active_family_BANG_(fam);
});})(i__27119,fam,c__5647__auto__,size__5648__auto__,b__27120,s__27118__$2,temp__5825__auto__,state,config,active_family,calc_params,params,placebo_mode_QMARK_,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27116,map__27116__$1,props,values,set_values))
], null),clojure.string.capitalize(fam)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__27167 = (i__27119 + (1));
i__27119 = G__27167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27120),app$discovery$discovery_view_content_$_iter__27117(cljs.core.chunk_rest(s__27118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27120),null);
}
} else {
var fam = cljs.core.first(s__27118__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.text-sm.font-medium.transition-colors","button.px-4.py-2.text-sm.font-medium.transition-colors",-577658145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_family,fam))?"border-b-2 border-blue-600 text-blue-600":"text-gray-500 hover:text-gray-700"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fam,s__27118__$2,temp__5825__auto__,state,config,active_family,calc_params,params,placebo_mode_QMARK_,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27116,map__27116__$1,props,values,set_values){
return (function (){
return app.discovery.set_active_family_BANG_(fam);
});})(fam,s__27118__$2,temp__5825__auto__,state,config,active_family,calc_params,params,placebo_mode_QMARK_,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27116,map__27116__$1,props,values,set_values))
], null),clojure.string.capitalize(fam)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$discovery$discovery_view_content_$_iter__27117(cljs.core.rest(s__27118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weibull","cure","leaky"], null));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8","div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8",-588592895),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-bold.text-gray-800.mb-4","h3.font-bold.text-gray-800.mb-4",-469189743),"Parameters"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4","div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4",1227576997),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12","div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12",-1533286711),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#placebo-mode","input#placebo-mode",133878999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),placebo_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var checked_QMARK_ = e.target.checked;
if(cljs.core.truth_(checked_QMARK_)){
var G__27121 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),true,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),0.0,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(values)], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27121) : set_values.call(null,G__27121));
} else {
var G__27122 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),false], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27122) : set_values.call(null,G__27122));
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2","label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2",307273585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"placebo-mode"], null),"Placebo Mode"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (k,v){
if(cljs.core.truth_((function (){var and__5160__auto__ = placebo_mode_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"bat-med","bat-med",-703214708));
} else {
return and__5160__auto__;
}
})())){
var G__27123 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),v], null);
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27123) : set_values.call(null,G__27123));
} else {
return null;
}
})),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),"BAT Median",(4),(25),0.5], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489),"Weibull k shape",0.5,2.0,0.05], null),(function (){var G__27124 = active_family;
switch (G__27124) {
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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27124))));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-6","div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-6",-1902682574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-4","div.flex.items-center.gap-4",-394801599),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.border-r.pr-4","div.flex.items-center.gap-2.border-r.pr-4",-662460638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xs.font-bold.text-gray-600.mr-1","label.text-xs.font-bold.text-gray-600.mr-1",-284158558),"Sim Count"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-24","input.w-24",1685844718),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(100),new cljs.core.Keyword(null,"max","max",61366548),(5000),new cljs.core.Keyword(null,"step","step",1288888124),(100),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__27125_27174 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v], null);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27125_27174) : set_values.call(null,G__27125_27174));

return app.discovery.debounced_sim_run(active_family,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(calc_params,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.p-1.text-xs.w-14","input.border.rounded.p-1.text-xs.w-14",-302905434),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"step","step",1288888124),(100),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
var G__27126_27175 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v], null);
(set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27126_27175) : set_values.call(null,G__27126_27175));

return app.discovery.debounced_sim_run(active_family,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(calc_params,new cljs.core.Keyword(null,"n-sims","n-sims",979948804),v));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded-lg.shadow-sm.transition-colors","button.rounded-lg.shadow-sm.transition-colors",529147465),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4","py-2","bg-blue-600","hover:bg-blue-700","text-white","text-xs","font-bold"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.simulator.run_discovery_simulation_BANG_(active_family,calc_params);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103))], null),"Force Run"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103)))?(function (){var nsims = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(calc_params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500.animate-pulse","span.text-xs.text-gray-500.animate-pulse",-796526028),(""+"Running "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsims)+" trial simulations...")], null);
})():null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-6","div.flex.items-center.gap-6",1035196619),(function (){var G__27127 = new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state);
var G__27127__$1 = (((G__27127 instanceof cljs.core.Keyword))?G__27127.fqn:null);
switch (G__27127__$1) {
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
})()], null)], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.lg:grid-cols-1.gap-8","div.grid.grid-cols-1.lg:grid-cols-1.gap-8",-352752712),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-extrabold.text-gray-800.mb-4","h3.font-extrabold.text-gray-800.mb-4",-1368404049),"Alternate Hypothesis (H1): GPS is effective"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.stats_row,"Milestone Stats (H1)",stats], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-4","div.grid.grid-cols-1.md:grid-cols-2.gap-4",1394549817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"Alternate: Survival Curves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_survival_chart,new cljs.core.Keyword(null,"survival","survival",2035274828).cljs$core$IFn$_invoke$arity$1(curve_data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"Alternate: Event Accrual"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_accrual_chart,new cljs.core.Keyword(null,"accrual","accrual",445204386).cljs$core$IFn$_invoke$arity$1(curve_data),stats], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-extrabold.text-gray-800.mb-4","h3.font-extrabold.text-gray-800.mb-4",-1368404049),"Null Hypothesis (H0): GPS is placebo (",avg_med," mOS",")"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.stats_row,"Milestone Stats (H0)",stats_h0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-4","div.grid.grid-cols-1.md:grid-cols-2.gap-4",1394549817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"H0: Survival Curves (Cure=0, Shared Med)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_survival_chart,new cljs.core.Keyword(null,"survival","survival",2035274828).cljs$core$IFn$_invoke$arity$1(curve_data_h0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"H0: Event Accrual (Cure=0, Shared Med)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_accrual_chart,new cljs.core.Keyword(null,"accrual","accrual",445204386).cljs$core$IFn$_invoke$arity$1(curve_data_h0),stats_h0], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(params))], null))], null);
});
app.discovery.discovery_view = (function app$discovery$discovery_view(){
var with_let27128 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let27128","with-let27128",1586138957));
var temp__5829__auto___27177 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___27177 == null)){
} else {
var c__24531__auto___27178 = temp__5829__auto___27177;
if((with_let27128.generation === c__24531__auto___27178.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let27128.generation = c__24531__auto___27178.ratomGeneration);
}

var init27129 = (with_let27128.length === (0));
var _ = ((((init27129) || (cljs.core.not(with_let27128.hasOwnProperty((0))))))?(with_let27128[(0)] = (function (){var disc = app.discovery.get_discovery_state();
var fam = new cljs.core.Keyword(null,"active-family","active-family",1167742120).cljs$core$IFn$_invoke$arity$1(disc);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(disc),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(disc)], 0));
return app.simulator.run_discovery_simulation_BANG_(fam,params);
})()):(with_let27128[(0)]));
var res27130 = (function (){var state = app.discovery.get_discovery_state();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.reagent.form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p__27131){
var map__27132 = p__27131;
var map__27132__$1 = cljs.core.__destructure_map(map__27132);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27132__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"params","params",710516235)], null),values);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"discovery","discovery",1906276356),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], 0));

app.discovery.debounced_calc_update(values);

var fam = new cljs.core.Keyword(null,"active-family","active-family",1167742120).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var disc = new cljs.core.Keyword(null,"discovery","discovery",1906276356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var calc = new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(disc);
return app.discovery.debounced_sim_run(fam,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([calc,values], 0)));
})], null),app.discovery.discovery_view_content], null);
})();
return res27130;
});

//# sourceMappingURL=app.discovery.js.map
