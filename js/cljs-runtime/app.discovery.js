goog.provide('app.discovery');
app.discovery.get_discovery_state = (function app$discovery$get_discovery_state(){
return new cljs.core.Keyword(null,"discovery","discovery",1906276356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
});
app.discovery.debounce = (function app$discovery$debounce(f,ms){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__27269__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref(timer))){
clearTimeout(cljs.core.deref(timer));
} else {
}

return cljs.core.reset_BANG_(timer,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__27269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27270__i = 0, G__27270__a = new Array(arguments.length -  0);
while (G__27270__i < G__27270__a.length) {G__27270__a[G__27270__i] = arguments[G__27270__i + 0]; ++G__27270__i;}
  args = new cljs.core.IndexedSeq(G__27270__a,0,null);
} 
return G__27269__delegate.call(this,args);};
G__27269.cljs$lang$maxFixedArity = 0;
G__27269.cljs$lang$applyTo = (function (arglist__27271){
var args = cljs.core.seq(arglist__27271);
return G__27269__delegate(args);
});
G__27269.cljs$core$IFn$_invoke$arity$variadic = G__27269__delegate;
return G__27269;
})()
;
});
if((typeof app !== 'undefined') && (typeof app.discovery !== 'undefined') && (typeof app.discovery.debounced_calc_update !== 'undefined')){
} else {
app.discovery.debounced_calc_update = app.discovery.debounce((function (params){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"calc-params","calc-params",1198861913)], null),params);
}),(200));
}
app.discovery.set_active_family_BANG_ = (function app$discovery$set_active_family_BANG_(family){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"active-family","active-family",1167742120)], null),family);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"discovery","discovery",1906276356),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], 0));
});
app.discovery.param_input = (function app$discovery$param_input(var_args){
var G__27068 = arguments.length;
switch (G__27068) {
case 6:
return app.discovery.param_input.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.discovery.param_input.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.discovery.param_input.cljs$core$IFn$_invoke$arity$6 = (function (props,param_key,label,min,max,step){
return app.discovery.param_input.cljs$core$IFn$_invoke$arity$7(props,param_key,label,min,max,step,false);
}));

(app.discovery.param_input.cljs$core$IFn$_invoke$arity$7 = (function (p__27091,param_key,label,min,max,step,disabled_QMARK_){
var map__27092 = p__27091;
var map__27092__$1 = cljs.core.__destructure_map(map__27092);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27092__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,param_key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-xs.font-semibold","label.block.text-xs.font-semibold",-110936983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(disabled_QMARK_)?"text-gray-400":"text-gray-600")], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2","div.flex.items-center.gap-2",-1286016734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-full","input.w-full",-1635738475),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
(set_value.cljs$core$IFn$_invoke$arity$2 ? set_value.cljs$core$IFn$_invoke$arity$2(param_key,v) : set_value.call(null,param_key,v));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(param_key,v) : on_change.call(null,param_key,v));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.rounded.p-1.text-xs.w-16","input.border.rounded.p-1.text-xs.w-16",538660422),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
(set_value.cljs$core$IFn$_invoke$arity$2 ? set_value.cljs$core$IFn$_invoke$arity$2(param_key,v) : set_value.call(null,param_key,v));

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(param_key,v) : on_change.call(null,param_key,v));
} else {
return null;
}
})], null)], null)], null)], null);
}));

(app.discovery.param_input.cljs$lang$maxFixedArity = 7);

app.discovery.calculate_stats = (function app$discovery$calculate_stats(family,params,config){
var vec__27102 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27102,(1),null);
var target_times = (function (){var G__27105 = [new cljs.core.Keyword(null,"t-ia","t-ia",1745131236).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100).cljs$core$IFn$_invoke$arity$1(config)];
var G__27106 = "float64";
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$2(G__27105,G__27106) : cljs.numpy.array.call(null,G__27105,G__27106));
})();
var bat_med_arr = (function (){var G__27107 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27107) : cljs.numpy.array.call(null,G__27107));
})();
var bat_shape_arr = (function (){var G__27108 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27108) : cljs.numpy.array.call(null,G__27108));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr);
var bat_shape = bat_shape_arr;
var bat_res = app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale,bat_shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var gps_res = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__27109 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27109) : cljs.numpy.array.call(null,G__27109));
})();
var shape = (function (){var G__27110 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27110) : cljs.numpy.array.call(null,G__27110));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__27112 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27112) : cljs.numpy.array.call(null,G__27112));
})();
var shape = (function (){var G__27113 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27113) : cljs.numpy.array.call(null,G__27113));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27115 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27115) : cljs.numpy.array.call(null,G__27115));
})();
return app.regal_fit.enrollment.expected_arm_events_and_variance(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape], null),enroll_pts,enroll_weights,target_times,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__27118 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27118) : cljs.numpy.array.call(null,G__27118));
})();
var shape = (function (){var G__27119 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27119) : cljs.numpy.array.call(null,G__27119));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27120 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27120) : cljs.numpy.array.call(null,G__27120));
})();
var leak = (function (){var G__27121 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27121) : cljs.numpy.array.call(null,G__27121));
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
var vec__27122 = app.regal_fit.enrollment.expected_enrollment_times(config);
var enroll_pts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(0),null);
var enroll_weights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(1),null);
var bat_med_arr = (function (){var G__27128 = [new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27128) : cljs.numpy.array.call(null,G__27128));
})();
var bat_shape_arr = (function (){var G__27131 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27131) : cljs.numpy.array.call(null,G__27131));
})();
var bat_scale = app.regal_fit.survival.weibull_scale_from_median(bat_med_arr,bat_shape_arr);
var bat_shape = bat_shape_arr;
var s_bat = app.regal_fit.survival.weibull_survival_probability(t_pts,bat_scale,bat_shape);
var ev_bat = app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bat_scale,bat_shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config));
var vec__27125 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"weibull"))?(function (){var med = (function (){var G__27133 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27133) : cljs.numpy.array.call(null,G__27133));
})();
var shape = (function (){var G__27134 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27134) : cljs.numpy.array.call(null,G__27134));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.weibull_survival_probability(t_pts,scale,shape),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.weibull_survival_probability,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"cure"))?(function (){var med = (function (){var G__27135 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27135) : cljs.numpy.array.call(null,G__27135));
})();
var shape = (function (){var G__27136 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27136) : cljs.numpy.array.call(null,G__27136));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27137 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27137) : cljs.numpy.array.call(null,G__27137));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.cure_survival_probability(t_pts,cf,scale,shape),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.cure_survival_probability,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(family,"leaky"))?(function (){var med = (function (){var G__27138 = [new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27138) : cljs.numpy.array.call(null,G__27138));
})();
var shape = (function (){var G__27139 = [new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27139) : cljs.numpy.array.call(null,G__27139));
})();
var scale = app.regal_fit.survival.weibull_scale_from_median(med,shape);
var cf = (function (){var G__27140 = [new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27140) : cljs.numpy.array.call(null,G__27140));
})();
var leak = (function (){var G__27141 = [new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545).cljs$core$IFn$_invoke$arity$1(params)];
return (cljs.numpy.array.cljs$core$IFn$_invoke$arity$1 ? cljs.numpy.array.cljs$core$IFn$_invoke$arity$1(G__27141) : cljs.numpy.array.call(null,G__27141));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.regal_fit.survival.leaky_cure_survival_probability(t_pts,cf,scale,shape,leak),app.regal_fit.enrollment.expected_arm_events(app.regal_fit.survival.leaky_cure_survival_probability,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cf,scale,shape,leak], null),enroll_pts,enroll_weights,t_pts,new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"n-total","n-total",-1946555251).cljs$core$IFn$_invoke$arity$1(config))], null);
})():null)));
var s_gps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27125,(0),null);
var ev_gps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27125,(1),null);
var s_pool = (function (){var G__27142 = (cljs.numpy.add.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.add.cljs$core$IFn$_invoke$arity$2(s_bat,s_gps) : cljs.numpy.add.call(null,s_bat,s_gps));
var G__27143 = 0.5;
return (cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2 ? cljs.numpy.multiply.cljs$core$IFn$_invoke$arity$2(G__27142,G__27143) : cljs.numpy.multiply.call(null,G__27142,G__27143));
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
app.discovery.stats_row = (function app$discovery$stats_row(title,stats){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6","div.mb-6",-1954659128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-sm.font-bold.text-gray-700.mb-3","h4.text-sm.font-bold.text-gray-700.mb-3",-288098050),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.sm:grid-cols-3.gap-3","div.grid.grid-cols-1.sm:grid-cols-3.gap-3",-1784273709),(function (){var iter__5503__auto__ = (function app$discovery$stats_row_$_iter__27169(s__27170){
return (new cljs.core.LazySeq(null,(function (){
var s__27170__$1 = s__27170;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27170__$1);
if(temp__5825__auto__){
var s__27170__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27170__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27170__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27172 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27171 = (0);
while(true){
if((i__27171 < size__5502__auto__)){
var s = cljs.core._nth(c__5501__auto__,i__27171);
cljs.core.chunk_append(b__27172,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.flex.items-baseline.gap-1","div.mt-1.flex.items-baseline.gap-1",785863541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-bold.text-gray-800","span.text-xl.font-bold.text-gray-800",-558387944),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(s).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),[" / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(s))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.grid.grid-cols-2.gap-1","div.mt-1.grid.grid-cols-2.gap-1",-1235441401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"SD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.Keyword(null,"sd","sd",-1707124456).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"Std Dev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((Math.abs(new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s)) > (2)))?"text-red-600":"text-green-600")], null),new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)));

var G__27293 = (i__27171 + (1));
i__27171 = G__27293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27172),app$discovery$stats_row_$_iter__27169(cljs.core.chunk_rest(s__27170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27172),null);
}
} else {
var s = cljs.core.first(s__27170__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-xs.font-bold.text-gray-500.uppercase","h5.text-xs.font-bold.text-gray-500.uppercase",-912633632),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.flex.items-baseline.gap-1","div.mt-1.flex.items-baseline.gap-1",785863541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-bold.text-gray-800","span.text-xl.font-bold.text-gray-800",-558387944),new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(s).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-400","span.text-xs.text-gray-400",-266833387),[" / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(s))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.grid.grid-cols-2.gap-1","div.mt-1.grid.grid-cols-2.gap-1",-1235441401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"SD"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.Keyword(null,"sd","sd",-1707124456).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 uppercase"], null),"Std Dev"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.font-semibold","div.text-xs.font-semibold",592075516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((Math.abs(new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s)) > (2)))?"text-red-600":"text-green-600")], null),new cljs.core.Keyword(null,"std-dev","std-dev",-1087996489).cljs$core$IFn$_invoke$arity$1(s).toFixed((2))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(s)], null)),app$discovery$stats_row_$_iter__27169(cljs.core.rest(s__27170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(stats);
})()], null)], null);
});
app.discovery.discovery_view_content = (function app$discovery$discovery_view_content(p__27202){
var map__27203 = p__27202;
var map__27203__$1 = cljs.core.__destructure_map(map__27203);
var props = map__27203__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27203__$1,new cljs.core.Keyword(null,"values","values",372645556));
var set_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27203__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
var set_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27203__$1,new cljs.core.Keyword(null,"set-values","set-values",-928640446));
var state = app.discovery.get_discovery_state();
var active_family = new cljs.core.Keyword(null,"active-family","active-family",1167742120).cljs$core$IFn$_invoke$arity$1(state);
var calc_params = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"calc-params","calc-params",1198861913).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var params = values;
var placebo_mode_QMARK_ = new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510).cljs$core$IFn$_invoke$arity$1(params);
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var stats = app.discovery.calculate_stats(active_family,calc_params,config);
var curve_data = app.discovery.calculate_curves(active_family,calc_params,config);
var avg_med = ((new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488).cljs$core$IFn$_invoke$arity$1(calc_params) + new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(calc_params)) / 2.0);
var h0_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calc_params,new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),avg_med,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),avg_med,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),0.0], 0));
var stats_h0 = app.discovery.calculate_stats(active_family,h0_params,config);
var curve_data_h0 = app.discovery.calculate_curves(active_family,h0_params,config);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6.max-w-7xl.mx-auto","div.p-6.max-w-7xl.mx-auto",-1006682990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-extrabold.text-gray-800.mb-2","h1.text-3xl.font-extrabold.text-gray-800.mb-2",-1735397066),"Discovery View"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-600.mb-6","p.text-gray-600.mb-6",1530133303),["Explore survival curves and event accrual ","given parametric assumptions."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mb-6.border-b","div.flex.gap-2.mb-6.border-b",-1465269195),(function (){var iter__5503__auto__ = (function app$discovery$discovery_view_content_$_iter__27223(s__27224){
return (new cljs.core.LazySeq(null,(function (){
var s__27224__$1 = s__27224;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27224__$1);
if(temp__5825__auto__){
var s__27224__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27224__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27224__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27226 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27225 = (0);
while(true){
if((i__27225 < size__5502__auto__)){
var fam = cljs.core._nth(c__5501__auto__,i__27225);
cljs.core.chunk_append(b__27226,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.text-sm.font-medium.transition-colors","button.px-4.py-2.text-sm.font-medium.transition-colors",-577658145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_family,fam))?"border-b-2 border-blue-600 text-blue-600":"text-gray-500 hover:text-gray-700"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27225,fam,c__5501__auto__,size__5502__auto__,b__27226,s__27224__$2,temp__5825__auto__,state,active_family,calc_params,params,placebo_mode_QMARK_,config,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27203,map__27203__$1,props,values,set_value,set_values){
return (function (){
return app.discovery.set_active_family_BANG_(fam);
});})(i__27225,fam,c__5501__auto__,size__5502__auto__,b__27226,s__27224__$2,temp__5825__auto__,state,active_family,calc_params,params,placebo_mode_QMARK_,config,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27203,map__27203__$1,props,values,set_value,set_values))
], null),clojure.string.capitalize(fam)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__27297 = (i__27225 + (1));
i__27225 = G__27297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27226),app$discovery$discovery_view_content_$_iter__27223(cljs.core.chunk_rest(s__27224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27226),null);
}
} else {
var fam = cljs.core.first(s__27224__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.text-sm.font-medium.transition-colors","button.px-4.py-2.text-sm.font-medium.transition-colors",-577658145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_family,fam))?"border-b-2 border-blue-600 text-blue-600":"text-gray-500 hover:text-gray-700"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fam,s__27224__$2,temp__5825__auto__,state,active_family,calc_params,params,placebo_mode_QMARK_,config,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27203,map__27203__$1,props,values,set_value,set_values){
return (function (){
return app.discovery.set_active_family_BANG_(fam);
});})(fam,s__27224__$2,temp__5825__auto__,state,active_family,calc_params,params,placebo_mode_QMARK_,config,stats,curve_data,avg_med,h0_params,stats_h0,curve_data_h0,map__27203,map__27203__$1,props,values,set_value,set_values))
], null),clojure.string.capitalize(fam)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$discovery$discovery_view_content_$_iter__27223(cljs.core.rest(s__27224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weibull","cure","leaky"], null));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8","div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8",-588592895),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-bold.text-gray-800.mb-4","h3.font-bold.text-gray-800.mb-4",-469189743),"Parameters"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4","div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4",1227576997),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12","div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12",-1533286711),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#placebo-mode","input#placebo-mode",133878999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),placebo_mode_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var checked_QMARK_ = e.target.checked;
if(cljs.core.truth_(checked_QMARK_)){
var G__27264 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(values,new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),0.0,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708).cljs$core$IFn$_invoke$arity$1(values)], 0));
return (set_values.cljs$core$IFn$_invoke$arity$1 ? set_values.cljs$core$IFn$_invoke$arity$1(G__27264) : set_values.call(null,G__27264));
} else {
return (set_value.cljs$core$IFn$_invoke$arity$2 ? set_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),false) : set_value.call(null,new cljs.core.Keyword(null,"placebo-mode?","placebo-mode?",1400066510),false));
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2","label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2",307273585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"placebo-mode"], null),"Placebo Mode"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (k,v){
if(cljs.core.truth_((function (){var and__5023__auto__ = placebo_mode_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"bat-med","bat-med",-703214708));
} else {
return and__5023__auto__;
}
})())){
return (set_value.cljs$core$IFn$_invoke$arity$2 ? set_value.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),v) : set_value.call(null,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),v));
} else {
return null;
}
})),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),"BAT Median",(4),(30),0.5], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"weibull-k","weibull-k",-470689489),"Weibull k shape",0.5,2.0,0.05], null),(function (){var G__27265 = active_family;
switch (G__27265) {
case "weibull":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),"GPS Median",(4),(100),1.0,placebo_mode_QMARK_], null)], null);

break;
case "cure":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),"Cure Fraction",0.0,0.95,0.05,placebo_mode_QMARK_], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),"Uncured Median",(4),(50),1.0,placebo_mode_QMARK_], null)], null);

break;
case "leaky":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),"Cure Fraction",0.0,0.95,0.05,placebo_mode_QMARK_], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),"Uncured Median",(4),(50),1.0,placebo_mode_QMARK_], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.param_input,props,new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545),"Leak Rate / Year",0.0,0.1,0.01], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27265)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-4","div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-4",1609949037),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-3","div.flex.items-center.gap-3",-1359414770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.rounded-lg.shadow-sm.transition-colors","button.rounded-lg.shadow-sm.transition-colors",529147465),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4","py-2","bg-blue-600","hover:bg-blue-700","text-white","text-xs","font-bold"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.simulator.run_discovery_simulation_BANG_(active_family,calc_params);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103)))?"Simulating...":"Run Simulation")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"running","running",1554969103)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500.animate-pulse","span.text-xs.text-gray-500.animate-pulse",-796526028),["Running ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996).cljs$core$IFn$_invoke$arity$1(config))," trial simulations..."].join('')], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-6","div.flex.items-center.gap-6",1035196619),(function (){var G__27266 = new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215).cljs$core$IFn$_invoke$arity$1(state);
var G__27266__$1 = (((G__27266 instanceof cljs.core.Keyword))?G__27266.fqn:null);
switch (G__27266__$1) {
case "done":
var res = new cljs.core.Keyword(null,"sim-result","sim-result",-213399943).cljs$core$IFn$_invoke$arity$1(state);
var p_suc = new cljs.core.Keyword(null,"p-success-overall","p-success-overall",-477143706).cljs$core$IFn$_invoke$arity$1(res);
var acc_rate = new cljs.core.Keyword(null,"acceptance-rate","acceptance-rate",653141244).cljs$core$IFn$_invoke$arity$1(res);
var med_hr = new cljs.core.Keyword(null,"median-hr-final","median-hr-final",809702905).cljs$core$IFn$_invoke$arity$1(res);
var med_t80 = new cljs.core.Keyword(null,"median-t80-months","median-t80-months",-1483725195).cljs$core$IFn$_invoke$arity$1(res);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"P(Success)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-lg.font-bold.text-blue-600","div.text-lg.font-bold.text-blue-600",1804480474),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * p_suc).toFixed((1))),"%"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"Acceptance Rate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-semibold.text-gray-700","div.text-sm.font-semibold.text-gray-700",-801589457),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * acc_rate).toFixed((1))),"%"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"Median HR"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-semibold.text-gray-700","div.text-sm.font-semibold.text-gray-700",-801589457),(cljs.core.truth_(isNaN(med_hr))?"N/A":med_hr.toFixed((3)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-400.font-semibold","div.text-xs.text-gray-400.font-semibold",-1974078903),"Median T80"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-semibold.text-gray-700","div.text-sm.font-semibold.text-gray-700",-801589457),(cljs.core.truth_(isNaN(med_t80))?"N/A":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(med_t80.toFixed((1))),"m"].join(''))], null)], null)], null);

break;
case "failed-prefilter":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-semibold.text-red-500","span.text-xs.font-semibold.text-red-500",1696136371),["Prefilter check failed: 0% of ","trials passed event pre-screening."].join('')], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-semibold.text-red-500","span.text-xs.font-semibold.text-red-500",1696136371),["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sim-result","sim-result",-213399943).cljs$core$IFn$_invoke$arity$1(state))].join('')], null);

break;
default:
return null;

}
})()], null)], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.lg:grid-cols-1.gap-8","div.grid.grid-cols-1.lg:grid-cols-1.gap-8",-352752712),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-extrabold.text-gray-800.mb-4","h3.font-extrabold.text-gray-800.mb-4",-1368404049),"Alternate Hypothesis (H1): GPS is effective"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.stats_row,"Milestone Stats (H1)",stats], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-4","div.grid.grid-cols-1.md:grid-cols-2.gap-4",1394549817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"Alternate: Survival Curves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_survival_chart,new cljs.core.Keyword(null,"survival","survival",2035274828).cljs$core$IFn$_invoke$arity$1(curve_data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"Alternate: Event Accrual"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_accrual_chart,new cljs.core.Keyword(null,"accrual","accrual",445204386).cljs$core$IFn$_invoke$arity$1(curve_data),stats], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-extrabold.text-gray-800.mb-4","h3.font-extrabold.text-gray-800.mb-4",-1368404049),"Null Hypothesis (H0): GPS is placebo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.stats_row,"Milestone Stats (H0)",stats_h0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-4","div.grid.grid-cols-1.md:grid-cols-2.gap-4",1394549817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"H0: Survival Curves (Cure=0, Shared Med)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_survival_chart,new cljs.core.Keyword(null,"survival","survival",2035274828).cljs$core$IFn$_invoke$arity$1(curve_data_h0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-3.rounded-xl.shadow-sm.border","div.bg-white.p-3.rounded-xl.shadow-sm.border",-823164628),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-xs.font-bold.text-gray-700.mb-2","h4.text-xs.font-bold.text-gray-700.mb-2",-2110181767),"H0: Event Accrual (Cure=0, Shared Med)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.discovery_accrual_chart,new cljs.core.Keyword(null,"accrual","accrual",445204386).cljs$core$IFn$_invoke$arity$1(curve_data_h0),stats_h0], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_family)], null))], null);
});
app.discovery.discovery_view = (function app$discovery$discovery_view(){
var state = app.discovery.get_discovery_state();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.reagent.form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p__27267){
var map__27268 = p__27267;
var map__27268__$1 = cljs.core.__destructure_map(map__27268);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27268__$1,new cljs.core.Keyword(null,"values","values",372645556));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),new cljs.core.Keyword(null,"params","params",710516235)], null),values);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"discovery","discovery",1906276356),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-status","sim-status",-1083444215),new cljs.core.Keyword(null,"sim-result","sim-result",-213399943)], 0));

return app.discovery.debounced_calc_update(values);
})], null),app.discovery.discovery_view_content], null);
});

//# sourceMappingURL=app.discovery.js.map
