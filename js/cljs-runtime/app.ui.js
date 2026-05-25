goog.provide('app.ui');
var module$node_modules$$monaco_editor$react$dist$index=shadow.js.require("module$node_modules$$monaco_editor$react$dist$index", {});
app.ui.key__GT_label = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gps-shape-grid","gps-shape-grid",-1878714432),new cljs.core.Keyword(null,"exp-ev-ia","exp-ev-ia",647455811),new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219),new cljs.core.Keyword(null,"prefilter-tol-upd","prefilter-tol-upd",10669060),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316),new cljs.core.Keyword(null,"t-ia","t-ia",1745131236),new cljs.core.Keyword(null,"leak-grid","leak-grid",1135019940),new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),new cljs.core.Keyword(null,"tol-ia","tol-ia",-1881927450),new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134),new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202),new cljs.core.Keyword(null,"gps-med-grid-hi","gps-med-grid-hi",757096102),new cljs.core.Keyword(null,"cure-unc-shape-grid","cure-unc-shape-grid",-855173178),new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879),new cljs.core.Keyword(null,"cure-unc-med-grid","cure-unc-med-grid",-1533152473),new cljs.core.Keyword(null,"gps-med-grid-n","gps-med-grid-n",349271879),new cljs.core.Keyword(null,"leak-yr","leak-yr",-1611071545),new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216),new cljs.core.Keyword(null,"gps-med","gps-med",-1986502488),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031),new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113),new cljs.core.Keyword(null,"bat-shape","bat-shape",-1821899414),new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086),new cljs.core.Keyword(null,"gps-med-grid-lo","gps-med-grid-lo",-1666153973),new cljs.core.Keyword(null,"bat-med","bat-med",-703214708),new cljs.core.Keyword(null,"n-total","n-total",-1946555251),new cljs.core.Keyword(null,"leaky-cure-frac-grid","leaky-cure-frac-grid",-829923027),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"gps-shape","gps-shape",-1034888240),new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801),new cljs.core.Keyword(null,"tol-pr3","tol-pr3",-858714798),new cljs.core.Keyword(null,"prefilter-tol-pr3","prefilter-tol-pr3",-1485355598),new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522),new cljs.core.Keyword(null,"gps-scale","gps-scale",108117203),new cljs.core.Keyword(null,"bat-scale","bat-scale",1353051987),new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new cljs.core.Keyword(null,"tol-upd","tol-upd",1256937940),new cljs.core.Keyword(null,"leaky-unc-shape-grid","leaky-unc-shape-grid",-700351020),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100),new cljs.core.Keyword(null,"cure-frac-grid","cure-frac-grid",1356953077),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339),new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890),new cljs.core.Keyword(null,"unc-med","unc-med",1442816023),new cljs.core.Keyword(null,"exp-ev-pr3","exp-ev-pr3",-449783785),new cljs.core.Keyword(null,"leaky-unc-med-grid","leaky-unc-med-grid",-1067412745),new cljs.core.Keyword(null,"hr-threshold","hr-threshold",1028896727),new cljs.core.Keyword(null,"unc-shape","unc-shape",-1909676744),new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673),new cljs.core.Keyword(null,"prefilter-tol-ia","prefilter-tol-ia",2016572921),new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559),new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766),new cljs.core.Keyword(null,"cure-frac","cure-frac",-119632070),new cljs.core.Keyword(null,"exp-ev-upd","exp-ev-upd",85248091),new cljs.core.Keyword(null,"unc-scale","unc-scale",-1435875077),new cljs.core.Keyword(null,"bat-strat-bin","bat-strat-bin",146317501),new cljs.core.Keyword(null,"families","families",255079231)],["GPS Shape Grid","Expected IA Events","Screening Sims count","Prefilter UPD Tolerance","Model Family","Target Events at Final","Time to IA (months)","Leak Grid","BAT Median Grid","IA Count Tolerance","Median Follow-up Tolerance","Efficacy HR Min at IA","GPS Median Grid High","Cure Uncured Shape Grid","IA-UPD Increment Tolerance","Cure Uncured Median Grid","GPS Median Grid N","Leak Rate (Year)","UPD-PR3 Increment Tolerance","GPS Median","Time to UPD (months)","Min Pass for Screening","BAT Shape","No 80 Slack (months)","GPS Median Grid Low","BAT Median","Total Size (N)","Leaky Cure Fraction Grid","Random Seed","GPS Shape","Target Events at PR3","PR3 Count Tolerance","Prefilter PR3 Tolerance","Futility HR Max at IA","GPS Scale","BAT Scale","BAT Shape Grid","Enrollment Bands","UPD Count Tolerance","Leaky Uncured Shape Grid","Simulations per Combo","Time to PR3 (months)","Cure Fraction Grid","Target Events at IA","Median Follow-up Target (months)","N per Arm","Unc Median","Expected PR3 Events","Leaky Uncured Median Grid","HR Significance Threshold","Unc Shape","Enforce No 80 Events by Today","Target Events at UPD","Prefilter IA Tolerance","Pooled mOS Min at IA (months)","Use PR3 Anchor","Cure Fraction","Expected UPD Events","Unc Scale","BAT Stratification Bin (months)","Model Families"]);
app.ui.key__GT_help = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gps-shape-grid","gps-shape-grid",-1878714432),new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219),new cljs.core.Keyword(null,"prefilter-tol-upd","prefilter-tol-upd",10669060),new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316),new cljs.core.Keyword(null,"t-ia","t-ia",1745131236),new cljs.core.Keyword(null,"leak-grid","leak-grid",1135019940),new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),new cljs.core.Keyword(null,"tol-ia","tol-ia",-1881927450),new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134),new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202),new cljs.core.Keyword(null,"gps-med-grid-hi","gps-med-grid-hi",757096102),new cljs.core.Keyword(null,"cure-unc-shape-grid","cure-unc-shape-grid",-855173178),new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879),new cljs.core.Keyword(null,"cure-unc-med-grid","cure-unc-med-grid",-1533152473),new cljs.core.Keyword(null,"gps-med-grid-n","gps-med-grid-n",349271879),new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031),new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113),new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086),new cljs.core.Keyword(null,"gps-med-grid-lo","gps-med-grid-lo",-1666153973),new cljs.core.Keyword(null,"n-total","n-total",-1946555251),new cljs.core.Keyword(null,"leaky-cure-frac-grid","leaky-cure-frac-grid",-829923027),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801),new cljs.core.Keyword(null,"tol-pr3","tol-pr3",-858714798),new cljs.core.Keyword(null,"prefilter-tol-pr3","prefilter-tol-pr3",-1485355598),new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522),new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new cljs.core.Keyword(null,"tol-upd","tol-upd",1256937940),new cljs.core.Keyword(null,"leaky-unc-shape-grid","leaky-unc-shape-grid",-700351020),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100),new cljs.core.Keyword(null,"cure-frac-grid","cure-frac-grid",1356953077),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339),new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890),new cljs.core.Keyword(null,"leaky-unc-med-grid","leaky-unc-med-grid",-1067412745),new cljs.core.Keyword(null,"hr-threshold","hr-threshold",1028896727),new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673),new cljs.core.Keyword(null,"prefilter-tol-ia","prefilter-tol-ia",2016572921),new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559),new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766),new cljs.core.Keyword(null,"bat-strat-bin","bat-strat-bin",146317501),new cljs.core.Keyword(null,"families","families",255079231)],["Weibull GPS shape grid (start, stop, step).",["Initial screening simulation depth to drop poor combinations ","before running full simulations."].join(''),"Analytical pre-filter tolerance on UPD event count.","Observed target events at final analysis (80 events).","Calendar months from first enrollment (t=0) to Interim Analysis (IA).","Leaky leak-rate grid (start, stop, step).","Weibull BAT median grid (start, stop, step).","ABC tolerance on event count at Interim Analysis (IA).","Tolerance for median follow-up target in months.",["Trial did not stop early for efficacy floor at IA. ","Set to 0 to disable."].join(''),"Weibull GPS median grid upper bound (log-spaced).","Cure uncured shape grid (start, stop, step).",["Tolerance on the increment of events between IA and UPD ","(observed increment is 12). Set to large number to disable."].join(''),"Cure uncured median grid (start, stop, step).","Weibull GPS median grid number of points.",["Tolerance on the increment of events between UPD and PR3 ","(observed increment is 6). Set to large number to disable."].join(''),"Calendar months from first enrollment (t=0) to Updated Analysis.","Minimum passing simulations required during screening to continue.",["Slack months allowed for analysis lag of 80th event ","(accounts for ~1-2 months lag between FA trigger and PR)."].join(''),"Weibull GPS median grid lower bound (log-spaced).","Total trial size (e.g. 126 subjects).","Leaky cure-fraction GPS grid (start, stop, step).","Random seed for reproducibility.","Observed target events at public PR3 anchor (78 events).","ABC tolerance on event count at public PR3 anchor.","Analytical pre-filter tolerance on PR3 event count.",["Futility HR boundary limit at Interim Analysis (IA) (GPS ","exceeded futility criteria, e.g. HR < 1.0). Set to 999 to disable."].join(''),"Weibull BAT shape grid (start, stop, step).",["Enrollment year-bands (counts) measured from t=0 (Feb 8, 2021). ","Format: [[start_month end_month count] ...]."].join(''),"ABC tolerance on event count at Updated Analysis (UPD).","Leaky uncured shape grid (start, stop, step).","Post-filter simulation depth per combination.","Calendar months from first enrollment (t=0) to public PR3 anchor.","Cure-fraction GPS grid (start, stop, step).","Observed target events at Interim Analysis (IA) (60 events).",["Disclosed target median follow-up at IA in months (13.5). ","Set to 0 to disable."].join(''),"Number of subjects per treatment arm (e.g. 63).","Leaky uncured median grid (start, stop, step).","Hazard ratio threshold for significance per SAP (0.636).","Require that the 80th event has not occurred before today.","Observed target events at Updated Analysis (UPD) (72 events).",["Analytical pre-filter tolerance on IA event count. ","Rejects combos whose expected events deviate beyond tolerance."].join(''),["Minimum pooled median OS at IA in months (IDMC reported ","exceeded 12 months, e.g. 13.5). Set to 0 to disable."].join(''),"Toggle the third (PR3) anchor on/off.",["Width of BAT mOS bins for stratified output. ","Set to 0 to disable stratified pages."].join(''),"Enabled model distribution families."]);
app.ui.parse_vector = (function app$ui$parse_vector(val){
try{var parsed = JSON.parse(val);
if(cljs.core.truth_(Array.isArray(parsed))){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(parsed);
} else {
return null;
}
}catch (e27309){if((e27309 instanceof Error)){
var _ = e27309;
return null;
} else {
throw e27309;

}
}});
app.ui.vector_input = (function app$ui$vector_input(curr_val,key_name){
var text_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(curr_val)));
return (function (curr_val__$1,key_name__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
cljs.core.reset_BANG_(text_val,v);

var temp__5825__auto__ = app.ui.parse_vector(v);
if(cljs.core.truth_(temp__5825__auto__)){
var parsed = temp__5825__auto__;
return app.state.set_config_BANG_(key_name__$1,parsed);
} else {
return null;
}
})], null)], null);
});
});
app.ui.parse_float_safe = (function app$ui$parse_float_safe(s,default_val){
var p = parseFloat(s);
if(cljs.core.truth_(isNaN(p))){
return default_val;
} else {
return p;
}
});
app.ui.grid_input = (function app$ui$grid_input(curr_val,key_name){
var vec__27310 = curr_val;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27310,(0),null);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27310,(1),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27310,(2),null);
var start_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(start));
var stop_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(stop));
var step_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(step));
return (function (curr_val__$1,key_name__$1){
var vec__27313_27605 = curr_val__$1;
var c_start_27606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313_27605,(0),null);
var c_stop_27607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313_27605,(1),null);
var c_step_27608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313_27605,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.parse_float_safe(cljs.core.deref(start_val),null),c_start_27606)){
} else {
cljs.core.reset_BANG_(start_val,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_start_27606));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.parse_float_safe(cljs.core.deref(stop_val),null),c_stop_27607)){
} else {
cljs.core.reset_BANG_(stop_val,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_stop_27607));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.parse_float_safe(cljs.core.deref(step_val),null),c_step_27608)){
} else {
cljs.core.reset_BANG_(step_val,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_step_27608));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mt-1","div.flex.gap-2.mt-1",-1579391217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(start_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = parseFloat(v);
cljs.core.reset_BANG_(start_val,v);

if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return app.state.set_config_BANG_(key_name__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parsed,app.ui.parse_float_safe(cljs.core.deref(stop_val),0.0),app.ui.parse_float_safe(cljs.core.deref(step_val),0.0)], null));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Stop"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(stop_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = parseFloat(v);
cljs.core.reset_BANG_(stop_val,v);

if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return app.state.set_config_BANG_(key_name__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.parse_float_safe(cljs.core.deref(start_val),0.0),parsed,app.ui.parse_float_safe(cljs.core.deref(step_val),0.0)], null));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Step"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(step_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = parseFloat(v);
cljs.core.reset_BANG_(step_val,v);

if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return app.state.set_config_BANG_(key_name__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.parse_float_safe(cljs.core.deref(start_val),0.0),app.ui.parse_float_safe(cljs.core.deref(stop_val),0.0),parsed], null));
}
})], null)], null)], null)], null);
});
});
app.ui.families_input = (function app$ui$families_input(curr_val,key_name){
var all_families = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weibull","leaky","cure"], null);
var active_set = cljs.core.set(curr_val);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.mt-1","div.flex.flex-col.gap-2.mt-1",-515768463),(function (){var iter__5503__auto__ = (function app$ui$families_input_$_iter__27316(s__27317){
return (new cljs.core.LazySeq(null,(function (){
var s__27317__$1 = s__27317;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27317__$1);
if(temp__5825__auto__){
var s__27317__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27317__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27317__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27319 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27318 = (0);
while(true){
if((i__27318 < size__5502__auto__)){
var fam = cljs.core._nth(c__5501__auto__,i__27318);
cljs.core.chunk_append(b__27319,(function (){var checked_QMARK_ = cljs.core.contains_QMARK_(active_set,fam);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer","label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer",-740085585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500","input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500",-1824062157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27318,checked_QMARK_,fam,c__5501__auto__,size__5502__auto__,b__27319,s__27317__$2,temp__5825__auto__,all_families,active_set){
return (function (e){
var checked = e.target.checked;
var new_set = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_set,fam):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_set,fam));
var new_val = cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new_set),all_families);
return app.state.set_config_BANG_(key_name,new_val);
});})(i__27318,checked_QMARK_,fam,c__5501__auto__,size__5502__auto__,b__27319,s__27317__$2,temp__5825__auto__,all_families,active_set))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.capitalize","span.ml-2.capitalize",-794594893),fam], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null));
})());

var G__27691 = (i__27318 + (1));
i__27318 = G__27691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27319),app$ui$families_input_$_iter__27316(cljs.core.chunk_rest(s__27317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27319),null);
}
} else {
var fam = cljs.core.first(s__27317__$2);
return cljs.core.cons((function (){var checked_QMARK_ = cljs.core.contains_QMARK_(active_set,fam);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer","label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer",-740085585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500","input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500",-1824062157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checked_QMARK_,fam,s__27317__$2,temp__5825__auto__,all_families,active_set){
return (function (e){
var checked = e.target.checked;
var new_set = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_set,fam):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_set,fam));
var new_val = cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new_set),all_families);
return app.state.set_config_BANG_(key_name,new_val);
});})(checked_QMARK_,fam,s__27317__$2,temp__5825__auto__,all_families,active_set))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.capitalize","span.ml-2.capitalize",-794594893),fam], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null));
})(),app$ui$families_input_$_iter__27316(cljs.core.rest(s__27317__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(all_families);
})()], null);
});
app.ui.field_input = (function app$ui$field_input(config,key_name){
var show_help_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (config__$1,key_name__$1){
var curr_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config__$1,key_name__$1);
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_help,key_name__$1,"");
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,key_name__$1,cljs.core.name(key_name__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-1","div.flex.items-center.justify-between.mb-1",-1208760272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),label_text], null),((cljs.core.seq(help_text))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.inline-flex.items-center.justify-center","button.inline-flex.items-center.justify-center",442207438),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),["w-5 h-5 text-xs font-bold rounded-full ","transition-colors ",(cljs.core.truth_(cljs.core.deref(show_help_QMARK_))?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-100 text-gray-500 hover:bg-gray-200")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_help_QMARK_,cljs.core.not);
})], null),"?"], null):null)], null),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(show_help_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(help_text);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2","div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2",-846889103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border border-blue-200 leading-relaxed"], null),help_text], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_name__$1,new cljs.core.Keyword(null,"families","families",255079231)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.families_input,curr_val,key_name__$1], null):((cljs.core.boolean_QMARK_(curr_val))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mt-1","input.mt-1",2139920963),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),curr_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27320_SHARP_){
return app.state.set_config_BANG_(key_name__$1,p1__27320_SHARP_.target.checked);
})], null)], null):((((cljs.core.vector_QMARK_(curr_val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(curr_val),(3))) && (cljs.core.every_QMARK_(cljs.core.number_QMARK_,curr_val))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.grid_input,curr_val,key_name__$1], null):((cljs.core.vector_QMARK_(curr_val))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.vector_input,curr_val,key_name__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),((typeof curr_val === 'number')?"number":"text"),new cljs.core.Keyword(null,"step","step",1288888124),((cljs.core.float_QMARK_(curr_val))?"0.01":"1"),new cljs.core.Keyword(null,"value","value",305978217),curr_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
return app.state.set_config_BANG_(key_name__$1,((typeof curr_val === 'number')?((cljs.core.float_QMARK_(curr_val))?parseFloat(v):parseInt(v)):v));
})], null)], null)
))))], null);
});
});
app.ui.category_card = (function app$ui$category_card(cat_key,keys_list,config){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full","div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full",399607189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-bold.text-lg.text-gray-800.capitalize","h3.font-bold.text-lg.text-gray-800.capitalize",1003182433),cljs.core.name(cat_key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.gap-3.mt-2","div.grid.grid-cols-1.gap-3.mt-2",-1617432005),(function (){var iter__5503__auto__ = (function app$ui$category_card_$_iter__27321(s__27322){
return (new cljs.core.LazySeq(null,(function (){
var s__27322__$1 = s__27322;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27322__$1);
if(temp__5825__auto__){
var s__27322__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27322__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27322__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27324 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27323 = (0);
while(true){
if((i__27323 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__27323);
cljs.core.chunk_append(b__27324,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.field_input,config,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__27709 = (i__27323 + (1));
i__27323 = G__27709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27324),app$ui$category_card_$_iter__27321(cljs.core.chunk_rest(s__27322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27324),null);
}
} else {
var k = cljs.core.first(s__27322__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.field_input,config,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$category_card_$_iter__27321(cljs.core.rest(s__27322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(keys_list);
})()], null)], null);
});
app.ui.category__GT_keys = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"trial","trial",-677458347),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-total","n-total",-1946555251),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528),new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086)], null),new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t-ia","t-ia",1745131236),new cljs.core.Keyword(null,"tol-ia","tol-ia",-1881927450),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031),new cljs.core.Keyword(null,"tol-upd","tol-upd",1256937940),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100),new cljs.core.Keyword(null,"tol-pr3","tol-pr3",-858714798),new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766)], null),new cljs.core.Keyword(null,"bat","bat",607903974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),new cljs.core.Keyword(null,"bat-strat-bin","bat-strat-bin",146317501)], null),new cljs.core.Keyword(null,"gps","gps",-1073670617),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gps-med-grid-lo","gps-med-grid-lo",-1666153973),new cljs.core.Keyword(null,"gps-med-grid-hi","gps-med-grid-hi",757096102),new cljs.core.Keyword(null,"gps-med-grid-n","gps-med-grid-n",349271879),new cljs.core.Keyword(null,"gps-shape-grid","gps-shape-grid",-1878714432)], null),new cljs.core.Keyword(null,"cure","cure",-1773622506),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cure-frac-grid","cure-frac-grid",1356953077),new cljs.core.Keyword(null,"cure-unc-med-grid","cure-unc-med-grid",-1533152473),new cljs.core.Keyword(null,"cure-unc-shape-grid","cure-unc-shape-grid",-855173178)], null),new cljs.core.Keyword(null,"leaky","leaky",-1408419351),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leaky-cure-frac-grid","leaky-cure-frac-grid",-829923027),new cljs.core.Keyword(null,"leaky-unc-med-grid","leaky-unc-med-grid",-1067412745),new cljs.core.Keyword(null,"leaky-unc-shape-grid","leaky-unc-shape-grid",-700351020),new cljs.core.Keyword(null,"leak-grid","leak-grid",1135019940)], null),new cljs.core.Keyword(null,"prefilter","prefilter",-458951071),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefilter-tol-ia","prefilter-tol-ia",2016572921),new cljs.core.Keyword(null,"prefilter-tol-upd","prefilter-tol-upd",10669060),new cljs.core.Keyword(null,"prefilter-tol-pr3","prefilter-tol-pr3",-1485355598),new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879),new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216),new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559)], null),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673),new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801),new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316),new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113),new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202),new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522),new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298),new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134),new cljs.core.Keyword(null,"hr-threshold","hr-threshold",1028896727),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"families","families",255079231)], null)], null);
app.ui.config_form = (function app$ui$config_form(){
var collapsed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"s1","s1",-1301860037),true,new cljs.core.Keyword(null,"s2","s2",-1025927265),true,new cljs.core.Keyword(null,"s3","s3",969970109),true,new cljs.core.Keyword(null,"s4","s4",-2002104499),true], null));
return (function (){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.max-w-6xl.mx-auto","div.p-4.max-w-6xl.mx-auto",677394401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-2xl.font-extrabold.text-gray-900.mb-6","h2.text-2xl.font-extrabold.text-gray-900.mb-6",295715855),"Simulation Configuration"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.border-b.pb-2.mb-4","div.flex.justify-between.items-center.border-b.pb-2.mb-4",444396949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s1","s1",-1301860037),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.text-gray-800","h3.text-lg.font-bold.text-gray-800",1994578525),"1. Trial Structure & Event Timing"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-xs.font-semibold.px-3.py-1.rounded-lg.border","button.text-xs.font-semibold.px-3.py-1.rounded-lg.border",328450345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s1","s1",-1301860037),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s1","s1",-1301860037).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"Expand":"Collapse")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s1","s1",-1301860037).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"\u25B6":"\u25BC")], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"s1","s1",-1301860037).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-6","div.grid.grid-cols-1.md:grid-cols-2.gap-6",-723888447),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"trial","trial",-677458347),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"trial","trial",-677458347)),config], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"timing","timing",-1849225195),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"timing","timing",-1849225195)),config], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.border-b.pb-2.mb-4","div.flex.justify-between.items-center.border-b.pb-2.mb-4",444396949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s2","s2",-1025927265),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.text-gray-800","h3.text-lg.font-bold.text-gray-800",1994578525),"2. Prior Model Distribution Grids"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-xs.font-semibold.px-3.py-1.rounded-lg.border","button.text-xs.font-semibold.px-3.py-1.rounded-lg.border",328450345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s2","s2",-1025927265),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s2","s2",-1025927265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"Expand":"Collapse")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s2","s2",-1025927265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"\u25B6":"\u25BC")], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"s2","s2",-1025927265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-6","div.grid.grid-cols-1.md:grid-cols-2.gap-6",-723888447),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"bat","bat",607903974),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"bat","bat",607903974)),config], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"gps","gps",-1073670617),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"gps","gps",-1073670617)),config], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"cure","cure",-1773622506),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"cure","cure",-1773622506)),config], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"leaky","leaky",-1408419351),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"leaky","leaky",-1408419351)),config], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.border-b.pb-2.mb-4","div.flex.justify-between.items-center.border-b.pb-2.mb-4",444396949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s3","s3",969970109),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.text-gray-800","h3.text-lg.font-bold.text-gray-800",1994578525),"3. ABC Tolerances & Analytical Prefilters"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-xs.font-semibold.px-3.py-1.rounded-lg.border","button.text-xs.font-semibold.px-3.py-1.rounded-lg.border",328450345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s3","s3",969970109),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s3","s3",969970109).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"Expand":"Collapse")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s3","s3",969970109).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"\u25B6":"\u25BC")], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"s3","s3",969970109).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.gap-6","div.grid.grid-cols-1.gap-6",717037223),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"prefilter","prefilter",-458951071),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"prefilter","prefilter",-458951071)),config], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.border-b.pb-2.mb-4","div.flex.justify-between.items-center.border-b.pb-2.mb-4",444396949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s4","s4",-2002104499),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.text-gray-800","h3.text-lg.font-bold.text-gray-800",1994578525),"4. Execution Settings & SAP Constraints"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-xs.font-semibold.px-3.py-1.rounded-lg.border","button.text-xs.font-semibold.px-3.py-1.rounded-lg.border",328450345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(collapsed_QMARK_,cljs.core.update,new cljs.core.Keyword(null,"s4","s4",-2002104499),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s4","s4",-2002104499).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"Expand":"Collapse")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"s4","s4",-2002104499).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?"\u25B6":"\u25BC")], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"s4","s4",-2002104499).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(collapsed_QMARK_)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.gap-6","div.grid.grid-cols-1.gap-6",717037223),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.category_card,new cljs.core.Keyword(null,"other","other",995793544),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.ui.category__GT_keys,new cljs.core.Keyword(null,"other","other",995793544)),config], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-8.flex.justify-center","div.mt-8.flex.justify-center",-1795468300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-white.font-extrabold.px-8.py-4.rounded-xl.shadow-lg","button.text-white.font-extrabold.px-8.py-4.rounded-xl.shadow-lg",621696178),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["bg-blue-600 hover:bg-blue-700 transition-all ","transform hover:-translate-y-0.5"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
app.simulator.start_simulation_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113));
})], null),"Run Simulation"], null)], null)], null);
});
});
app.ui.config__GT_nested = (function app$ui$config__GT_nested(config){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$ui$config__GT_nested_$_iter__27328(s__27329){
return (new cljs.core.LazySeq(null,(function (){
var s__27329__$1 = s__27329;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27329__$1);
if(temp__5825__auto__){
var s__27329__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27329__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27329__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27331 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27330 = (0);
while(true){
if((i__27330 < size__5502__auto__)){
var vec__27333 = cljs.core._nth(c__5501__auto__,i__27330);
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27333,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27333,(1),null);
cljs.core.chunk_append(b__27331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat,cljs.core.select_keys(config,ks)], null));

var G__27713 = (i__27330 + (1));
i__27330 = G__27713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27331),app$ui$config__GT_nested_$_iter__27328(cljs.core.chunk_rest(s__27329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27331),null);
}
} else {
var vec__27336 = cljs.core.first(s__27329__$2);
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat,cljs.core.select_keys(config,ks)], null),app$ui$config__GT_nested_$_iter__27328(cljs.core.rest(s__27329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(app.ui.category__GT_keys);
})());
});
app.ui.nested__GT_config = (function app$ui$nested__GT_config(nested){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(nested));
});
app.ui.config_json = (function app$ui$config_json(){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(app.ui.config__GT_nested(config)),null,(2)));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.mb-4","h2.text-xl.font-bold.mb-4",-988997653),"Config (JSON)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded","div.border.rounded",-1931087582),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"json",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val,_){
cljs.core.reset_BANG_(text,val);

try{var nested = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return app.state.update_config_BANG_(app.ui.nested__GT_config(nested));
}catch (e27342){if((e27342 instanceof Error)){
var ___$1 = e27342;
return null;
} else {
throw e27342;

}
}})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded","button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded",147850544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
app.simulator.start_simulation_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113));
})], null),"Run Simulation"], null)], null);
});
});
app.ui.stage2_progress = (function app$ui$stage2_progress(progress){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Running Stage 2..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.w-full","progress.w-full",-466793801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress))," combos simulated"].join('')], null)], null);
});
app.ui.translate_keys = (function app$ui$translate_keys(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$ui$translate_keys_$_iter__27346(s__27347){
return (new cljs.core.LazySeq(null,(function (){
var s__27347__$1 = s__27347;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27347__$1);
if(temp__5825__auto__){
var s__27347__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27347__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27347__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27349 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27348 = (0);
while(true){
if((i__27348 < size__5502__auto__)){
var vec__27353 = cljs.core._nth(c__5501__auto__,i__27348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27353,(1),null);
cljs.core.chunk_append(b__27349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.translate_keys.call(null,v))], null));

var G__27714 = (i__27348 + (1));
i__27348 = G__27714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27349),app$ui$translate_keys_$_iter__27346(cljs.core.chunk_rest(s__27347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27349),null);
}
} else {
var vec__27356 = cljs.core.first(s__27347__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27356,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.translate_keys.call(null,v))], null),app$ui$translate_keys_$_iter__27346(cljs.core.rest(s__27347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(data);
})());
} else {
if(cljs.core.coll_QMARK_(data)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.ui.translate_keys,data);
} else {
return data;

}
}
});
app.ui.results_table = (function app$ui$results_table(family,items){
var sort_col = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sort_asc_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (family__$1,items__$1){
if(cljs.core.seq(items__$1)){
var keys_to_show = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27359_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27359_SHARP_,new cljs.core.Keyword(null,"family","family",-1313145692));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items__$1], 0)))));
var q = clojure.string.lower_case(clojure.string.trim(cljs.core.deref(filter_text)));
var filtered_items = ((clojure.string.blank_QMARK_(q))?items__$1:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.some((function (k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),q);
}),keys_to_show);
}),items__$1));
var sorted_items = (function (){var temp__5823__auto__ = cljs.core.deref(sort_col);
if(cljs.core.truth_(temp__5823__auto__)){
var col = temp__5823__auto__;
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (item){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,col);
if(typeof val === 'string'){
return clojure.string.lower_case(val);
} else {
return val;
}
}),(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?cljs.core.compare:(function (p1__27361_SHARP_,p2__27360_SHARP_){
return cljs.core.compare(p2__27360_SHARP_,p1__27361_SHARP_);
})),filtered_items);
} else {
return filtered_items;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.sm:flex-row.gap-2.mb-3","div.flex.flex-col.sm:flex-row.gap-2.mb-3",-1732232976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:justify-between sm:items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.capitalize.text-gray-800","h3.text-lg.font-bold.capitalize.text-gray-800",-901247251),[cljs.core.name(family__$1)," Family Table"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full.sm:w-64","div.relative.w-full.sm:w-64",-916485454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-1.px-2.rounded.text-sm.w-full","input.border.p-1.px-2.rounded.text-sm.w-full",-1022830738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter rows...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27362_SHARP_){
return cljs.core.reset_BANG_(filter_text,p1__27362_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.border.rounded-lg.shadow-sm","div.overflow-x-auto.border.rounded-lg.shadow-sm",404497294),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.min-w-full.divide-y.divide-gray-200.text-sm","table.min-w-full.divide-y.divide-gray-200.text-sm",-810482796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.bg-gray-50","thead.bg-gray-50",86935040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function app$ui$results_table_$_iter__27378(s__27379){
return (new cljs.core.LazySeq(null,(function (){
var s__27379__$1 = s__27379;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27379__$1);
if(temp__5825__auto__){
var s__27379__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27379__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27379__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27381 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27380 = (0);
while(true){
if((i__27380 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__27380);
cljs.core.chunk_append(b__27381,(function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27380,is_active_sort_QMARK_,k,c__5501__auto__,size__5502__auto__,b__27381,s__27379__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(i__27380,is_active_sort_QMARK_,k,c__5501__auto__,size__5502__auto__,b__27381,s__27379__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})());

var G__27716 = (i__27380 + (1));
i__27380 = G__27716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27381),app$ui$results_table_$_iter__27378(cljs.core.chunk_rest(s__27379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27381),null);
}
} else {
var k = cljs.core.first(s__27379__$2);
return cljs.core.cons((function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_active_sort_QMARK_,k,s__27379__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(is_active_sort_QMARK_,k,s__27379__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})(),app$ui$results_table_$_iter__27378(cljs.core.rest(s__27379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(keys_to_show);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.divide-y.divide-gray-200.bg-white","tbody.divide-y.divide-gray-200.bg-white",949897439),((cljs.core.empty_QMARK_(sorted_items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-8.text-center.text-gray-500","td.px-4.py-8.text-center.text-gray-500",-1635436609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),cljs.core.count(keys_to_show)], null),"No matching combinations found."], null)], null):(function (){var iter__5503__auto__ = (function app$ui$results_table_$_iter__27389(s__27390){
return (new cljs.core.LazySeq(null,(function (){
var s__27390__$1 = s__27390;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27390__$1);
if(temp__5825__auto__){
var s__27390__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27390__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27390__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27392 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27391 = (0);
while(true){
if((i__27391 < size__5502__auto__)){
var vec__27393 = cljs.core._nth(c__5501__auto__,i__27391);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27393,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27393,(1),null);
cljs.core.chunk_append(b__27392,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5503__auto__ = ((function (i__27391,vec__27393,idx,item,c__5501__auto__,size__5502__auto__,b__27392,s__27390__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results_table_$_iter__27389_$_iter__27396(s__27397){
return (new cljs.core.LazySeq(null,((function (i__27391,vec__27393,idx,item,c__5501__auto__,size__5502__auto__,b__27392,s__27390__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
var s__27397__$1 = s__27397;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27397__$1);
if(temp__5825__auto____$1){
var s__27397__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27397__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__27397__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__27399 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__27398 = (0);
while(true){
if((i__27398 < size__5502__auto____$1)){
var k = cljs.core._nth(c__5501__auto____$1,i__27398);
cljs.core.chunk_append(b__27399,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__27717 = (i__27398 + (1));
i__27398 = G__27717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27399),app$ui$results_table_$_iter__27389_$_iter__27396(cljs.core.chunk_rest(s__27397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27399),null);
}
} else {
var k = cljs.core.first(s__27397__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results_table_$_iter__27389_$_iter__27396(cljs.core.rest(s__27397__$2)));
}
} else {
return null;
}
break;
}
});})(i__27391,vec__27393,idx,item,c__5501__auto__,size__5502__auto__,b__27392,s__27390__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
,null,null));
});})(i__27391,vec__27393,idx,item,c__5501__auto__,size__5502__auto__,b__27392,s__27390__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5503__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__27718 = (i__27391 + (1));
i__27391 = G__27718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27392),app$ui$results_table_$_iter__27389(cljs.core.chunk_rest(s__27390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27392),null);
}
} else {
var vec__27400 = cljs.core.first(s__27390__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27400,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27400,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5503__auto__ = ((function (vec__27400,idx,item,s__27390__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results_table_$_iter__27389_$_iter__27403(s__27404){
return (new cljs.core.LazySeq(null,(function (){
var s__27404__$1 = s__27404;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27404__$1);
if(temp__5825__auto____$1){
var s__27404__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27404__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27404__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27406 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27405 = (0);
while(true){
if((i__27405 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__27405);
cljs.core.chunk_append(b__27406,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__27719 = (i__27405 + (1));
i__27405 = G__27719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27406),app$ui$results_table_$_iter__27389_$_iter__27403(cljs.core.chunk_rest(s__27404__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27406),null);
}
} else {
var k = cljs.core.first(s__27404__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results_table_$_iter__27389_$_iter__27403(cljs.core.rest(s__27404__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27400,idx,item,s__27390__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5503__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),app$ui$results_table_$_iter__27389(cljs.core.rest(s__27390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,sorted_items));
})())], null)], null)], null)], null);
} else {
return null;
}
});
});
app.ui.results_edn_view = (function app$ui$results_edn_view(results){
var translated = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$ui$results_edn_view_$_iter__27413(s__27414){
return (new cljs.core.LazySeq(null,(function (){
var s__27414__$1 = s__27414;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27414__$1);
if(temp__5825__auto__){
var s__27414__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27414__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27414__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27416 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27415 = (0);
while(true){
if((i__27415 < size__5502__auto__)){
var vec__27419 = cljs.core._nth(c__5501__auto__,i__27415);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419,(1),null);
cljs.core.chunk_append(b__27416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.translate_keys(items)], null));

var G__27720 = (i__27415 + (1));
i__27415 = G__27720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27416),app$ui$results_edn_view_$_iter__27413(cljs.core.chunk_rest(s__27414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27416),null);
}
} else {
var vec__27422 = cljs.core.first(s__27414__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27422,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27422,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.translate_keys(items)], null),app$ui$results_edn_view_$_iter__27413(cljs.core.rest(s__27414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(results);
})());
var edn_str = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27428_27721 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27429_27722 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27430_27723 = true;
var _STAR_print_fn_STAR__temp_val__27431_27724 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27430_27723);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27431_27724);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(translated);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27429_27722);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27428_27721);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-2","h3.text-lg.font-bold.mb-2",-470954290),"EDN View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-lg.overflow-hidden","div.border.rounded-lg.overflow-hidden",-1188737018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"vs-dark",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null),new cljs.core.Keyword(null,"value","value",305978217),edn_str], null)], null)], null)], null);
});
app.ui.results_view = (function app$ui$results_view(){
var map__27439 = cljs.core.deref(app.state.app_state);
var map__27439__$1 = cljs.core.__destructure_map(map__27439);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27439__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27439__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27439__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var with_let27440 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let27440","with-let27440",2052914418));
var temp__5829__auto___27725 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___27725 == null)){
} else {
var c__24507__auto___27726 = temp__5829__auto___27725;
if((with_let27440.generation === c__24507__auto___27726.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let27440.generation = c__24507__auto___27726.ratomGeneration);
}

var init27441 = (with_let27440.length === (0));
var active_tab = ((((init27441) || (cljs.core.not(with_let27440.hasOwnProperty((0))))))?(with_let27440[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"charts","charts",555258811))):(with_let27440[(0)]));
var res27442 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.results-view-wrapper","div.p-4.results-view-wrapper",-1310678659),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mb-4","div.flex.justify-between.items-center.mb-4",-1518531499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.results-charts-container","h2.text-xl.font-bold.results-charts-container",1033258931),"Results"], null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.bg-gray-100.p-1.rounded-lg","div.flex.gap-2.bg-gray-100.p-1.rounded-lg",963613211),(function (){var iter__5503__auto__ = (function app$ui$results_view_$_iter__27454(s__27455){
return (new cljs.core.LazySeq(null,(function (){
var s__27455__$1 = s__27455;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27455__$1);
if(temp__5825__auto__){
var s__27455__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27455__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27455__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27457 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27456 = (0);
while(true){
if((i__27456 < size__5502__auto__)){
var vec__27465 = cljs.core._nth(c__5501__auto__,i__27456);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27465,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27465,(1),null);
cljs.core.chunk_append(b__27457,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27456,vec__27465,tab,label,c__5501__auto__,size__5502__auto__,b__27457,s__27455__$2,temp__5825__auto__,init27441,active_tab,with_let27440,map__27439,map__27439__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(i__27456,vec__27465,tab,label,c__5501__auto__,size__5502__auto__,b__27457,s__27455__$2,temp__5825__auto__,init27441,active_tab,with_let27440,map__27439,map__27439__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)));

var G__27727 = (i__27456 + (1));
i__27456 = G__27727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27457),app$ui$results_view_$_iter__27454(cljs.core.chunk_rest(s__27455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27457),null);
}
} else {
var vec__27468 = cljs.core.first(s__27455__$2);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27468,tab,label,s__27455__$2,temp__5825__auto__,init27441,active_tab,with_let27440,map__27439,map__27439__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(vec__27468,tab,label,s__27455__$2,temp__5825__auto__,init27441,active_tab,with_let27440,map__27439,map__27439__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)),app$ui$results_view_$_iter__27454(cljs.core.rest(s__27455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),"Charts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),"Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),"EDN View"], null)], null));
})()], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.stage2_progress,progress], null):((cljs.core.seq(results))?(function (){var G__27478 = cljs.core.deref(active_tab);
var G__27478__$1 = (((G__27478 instanceof cljs.core.Keyword))?G__27478.fqn:null);
switch (G__27478__$1) {
case "charts":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function app$ui$results_view_$_iter__27479(s__27480){
return (new cljs.core.LazySeq(null,(function (){
var s__27480__$1 = s__27480;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27480__$1);
if(temp__5825__auto__){
var s__27480__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27480__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27480__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27482 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27481 = (0);
while(true){
if((i__27481 < size__5502__auto__)){
var vec__27491 = cljs.core._nth(c__5501__auto__,i__27481);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27491,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27491,(1),null);
cljs.core.chunk_append(b__27482,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__27729 = (i__27481 + (1));
i__27481 = G__27729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27482),app$ui$results_view_$_iter__27479(cljs.core.chunk_rest(s__27480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27482),null);
}
} else {
var vec__27494 = cljs.core.first(s__27480__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results_view_$_iter__27479(cljs.core.rest(s__27480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(results);
})()], null);

break;
case "table":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function app$ui$results_view_$_iter__27497(s__27498){
return (new cljs.core.LazySeq(null,(function (){
var s__27498__$1 = s__27498;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27498__$1);
if(temp__5825__auto__){
var s__27498__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27498__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27498__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27500 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27499 = (0);
while(true){
if((i__27499 < size__5502__auto__)){
var vec__27505 = cljs.core._nth(c__5501__auto__,i__27499);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27505,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27505,(1),null);
cljs.core.chunk_append(b__27500,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__27730 = (i__27499 + (1));
i__27499 = G__27730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27500),app$ui$results_view_$_iter__27497(cljs.core.chunk_rest(s__27498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27500),null);
}
} else {
var vec__27509 = cljs.core.first(s__27498__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27509,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27509,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results_view_$_iter__27497(cljs.core.rest(s__27498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(results);
})()], null);

break;
case "edn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results_edn_view,results], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27478__$1)].join('')));

}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500","div.text-gray-500",-827790885),"Run a simulation to see results."], null)
))], null);
return res27442;
});
app.ui.navigation_bar = (function app$ui$navigation_bar(active_page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-gray-800.text-white.shadow-md.mb-6","header.bg-gray-800.text-white.shadow-md.mb-6",-234610892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4.py-3.flex.justify-between.items-center","div.container.mx-auto.px-4.py-3.flex.justify-between.items-center",1365034461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.cursor-pointer","div.flex.items-center.gap-2.cursor-pointer",-2005623121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-extrabold.tracking-tight","span.text-xl.font-extrabold.tracking-tight",-265832265),"Regal Fitter"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.flex.gap-2","nav.flex.gap-2",1143614979),(function (){var iter__5503__auto__ = (function app$ui$navigation_bar_$_iter__27522(s__27523){
return (new cljs.core.LazySeq(null,(function (){
var s__27523__$1 = s__27523;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27523__$1);
if(temp__5825__auto__){
var s__27523__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27523__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27523__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27525 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27524 = (0);
while(true){
if((i__27524 < size__5502__auto__)){
var vec__27530 = cljs.core._nth(c__5501__auto__,i__27524);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27530,(1),null);
cljs.core.chunk_append(b__27525,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors","button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors",-696574251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,page))?"bg-gray-950 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27524,vec__27530,page,label,c__5501__auto__,size__5502__auto__,b__27525,s__27523__$2,temp__5825__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null));
});})(i__27524,vec__27530,page,label,c__5501__auto__,size__5502__auto__,b__27525,s__27523__$2,temp__5825__auto__))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__27731 = (i__27524 + (1));
i__27524 = G__27731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27525),app$ui$navigation_bar_$_iter__27522(cljs.core.chunk_rest(s__27523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27525),null);
}
} else {
var vec__27536 = cljs.core.first(s__27523__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27536,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27536,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors","button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors",-696574251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,page))?"bg-gray-950 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27536,page,label,s__27523__$2,temp__5825__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null));
});})(vec__27536,page,label,s__27523__$2,temp__5825__auto__))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),app$ui$navigation_bar_$_iter__27522(cljs.core.rest(s__27523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),"Home"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fitter","fitter",1602090730),"Fitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placebo-stress","placebo-stress",293301633),"Placebo Stress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discovery","discovery",1906276356),"Discovery"], null)], null));
})()], null)], null)], null);
});
app.ui.fitter_page = (function app$ui$fitter_page(){
var state = app.state.app_state;
return (function (){
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-4.mb-4","div.flex.gap-4.mb-4",-1082938970),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded","button.px-4.py-2.rounded",1401208093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.Keyword(null,"config-form","config-form",-1295172692)))?"bg-gray-800 text-white":"bg-gray-200"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"config-form","config-form",-1295172692));
})], null),"Form View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded","button.px-4.py-2.rounded",1401208093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.Keyword(null,"config-json","config-json",-2135731477)))?"bg-gray-800 text-white":"bg-gray-200"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"config-json","config-json",-2135731477));
})], null),"JSON View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded","button.px-4.py-2.rounded",1401208093),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.Keyword(null,"results","results",-1134170113)))?"bg-gray-800 text-white":"bg-gray-200"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"results","results",-1134170113));
})], null),"Results"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running-stage1","running-stage1",1345324298)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-yellow-100.p-4.mb-4","div.bg-yellow-100.p-4.mb-4",-490919467),"Running Stage 1 (Analytical Pre-filter)..."], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.text-red-800.p-4.mb-4","div.bg-red-100.text-red-800.p-4.mb-4",-891988402),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(state)], null):null),(function (){var G__27550 = view;
var G__27550__$1 = (((G__27550 instanceof cljs.core.Keyword))?G__27550.fqn:null);
switch (G__27550__$1) {
case "config-form":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.config_form], null);

break;
case "config-json":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.config_json], null);

break;
case "results":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results_view], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27550__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),view], null));
});
});
app.ui.main_view = (function app$ui$main_view(){
var state = cljs.core.deref(app.state.app_state);
var active_page = new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(state);
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.bg-gray-50","div.min-h-screen.bg-gray-50",1856382833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.navigation_bar,active_page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.p-4","div.container.mx-auto.p-4",-1505263632),(function (){var G__27553 = active_page;
var G__27553__$1 = (((G__27553 instanceof cljs.core.Keyword))?G__27553.fqn:null);
switch (G__27553__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.home_view], null);

break;
case "fitter":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.fitter_page], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),view], null));

break;
case "placebo-stress":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.placebo_stress_view], null);

break;
case "discovery":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.discovery_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.home_view], null);

}
})()], null)], null);
});

//# sourceMappingURL=app.ui.js.map
