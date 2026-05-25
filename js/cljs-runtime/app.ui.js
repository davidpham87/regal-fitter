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
}catch (e29873){if((e29873 instanceof Error)){
var _ = e29873;
return null;
} else {
throw e29873;

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
var vec__29878 = curr_val;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878,(0),null);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878,(1),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878,(2),null);
var start_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(start));
var stop_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(stop));
var step_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(step));
return (function (curr_val__$1,key_name__$1){
var vec__29881_30189 = curr_val__$1;
var c_start_30190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881_30189,(0),null);
var c_stop_30191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881_30189,(1),null);
var c_step_30192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29881_30189,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.parse_float_safe(cljs.core.deref(start_val),null),c_start_30190)){
} else {
cljs.core.reset_BANG_(start_val,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_start_30190));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.parse_float_safe(cljs.core.deref(stop_val),null),c_stop_30191)){
} else {
cljs.core.reset_BANG_(stop_val,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_stop_30191));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.parse_float_safe(cljs.core.deref(step_val),null),c_step_30192)){
} else {
cljs.core.reset_BANG_(step_val,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_step_30192));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.mt-1","div.flex.flex-col.gap-2.mt-1",-515768463),(function (){var iter__5503__auto__ = (function app$ui$families_input_$_iter__29887(s__29888){
return (new cljs.core.LazySeq(null,(function (){
var s__29888__$1 = s__29888;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29888__$1);
if(temp__5825__auto__){
var s__29888__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29888__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__29888__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__29890 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__29889 = (0);
while(true){
if((i__29889 < size__5502__auto__)){
var fam = cljs.core._nth(c__5501__auto__,i__29889);
cljs.core.chunk_append(b__29890,(function (){var checked_QMARK_ = cljs.core.contains_QMARK_(active_set,fam);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer","label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer",-740085585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500","input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500",-1824062157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__29889,checked_QMARK_,fam,c__5501__auto__,size__5502__auto__,b__29890,s__29888__$2,temp__5825__auto__,all_families,active_set){
return (function (e){
var checked = e.target.checked;
var new_set = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_set,fam):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_set,fam));
var new_val = cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new_set),all_families);
return app.state.set_config_BANG_(key_name,new_val);
});})(i__29889,checked_QMARK_,fam,c__5501__auto__,size__5502__auto__,b__29890,s__29888__$2,temp__5825__auto__,all_families,active_set))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.capitalize","span.ml-2.capitalize",-794594893),fam], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null));
})());

var G__30203 = (i__29889 + (1));
i__29889 = G__30203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29890),app$ui$families_input_$_iter__29887(cljs.core.chunk_rest(s__29888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29890),null);
}
} else {
var fam = cljs.core.first(s__29888__$2);
return cljs.core.cons((function (){var checked_QMARK_ = cljs.core.contains_QMARK_(active_set,fam);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer","label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer",-740085585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500","input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500",-1824062157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checked_QMARK_,fam,s__29888__$2,temp__5825__auto__,all_families,active_set){
return (function (e){
var checked = e.target.checked;
var new_set = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_set,fam):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_set,fam));
var new_val = cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new_set),all_families);
return app.state.set_config_BANG_(key_name,new_val);
});})(checked_QMARK_,fam,s__29888__$2,temp__5825__auto__,all_families,active_set))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.capitalize","span.ml-2.capitalize",-794594893),fam], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null));
})(),app$ui$families_input_$_iter__29887(cljs.core.rest(s__29888__$2)));
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
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2","div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2",-846889103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border border-blue-200 leading-relaxed"], null),help_text], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_name__$1,new cljs.core.Keyword(null,"families","families",255079231)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.families_input,curr_val,key_name__$1], null):((cljs.core.boolean_QMARK_(curr_val))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mt-1","input.mt-1",2139920963),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),curr_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29901_SHARP_){
return app.state.set_config_BANG_(key_name__$1,p1__29901_SHARP_.target.checked);
})], null)], null):((((cljs.core.vector_QMARK_(curr_val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(curr_val),(3))) && (cljs.core.every_QMARK_(cljs.core.number_QMARK_,curr_val))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.grid_input,curr_val,key_name__$1], null):((cljs.core.vector_QMARK_(curr_val))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.vector_input,curr_val,key_name__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),((typeof curr_val === 'number')?"number":"text"),new cljs.core.Keyword(null,"step","step",1288888124),((cljs.core.float_QMARK_(curr_val))?"0.01":"1"),new cljs.core.Keyword(null,"value","value",305978217),curr_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
return app.state.set_config_BANG_(key_name__$1,((typeof curr_val === 'number')?((cljs.core.float_QMARK_(curr_val))?parseFloat(v):parseInt(v)):v));
})], null)], null)
))))], null);
});
});
app.ui.category_card = (function app$ui$category_card(cat_key,keys_list,config){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full","div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full",399607189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-bold.text-lg.text-gray-800.capitalize","h3.font-bold.text-lg.text-gray-800.capitalize",1003182433),cljs.core.name(cat_key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.gap-3.mt-2","div.grid.grid-cols-1.gap-3.mt-2",-1617432005),(function (){var iter__5503__auto__ = (function app$ui$category_card_$_iter__29925(s__29926){
return (new cljs.core.LazySeq(null,(function (){
var s__29926__$1 = s__29926;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29926__$1);
if(temp__5825__auto__){
var s__29926__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29926__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__29926__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__29928 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__29927 = (0);
while(true){
if((i__29927 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__29927);
cljs.core.chunk_append(b__29928,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.field_input,config,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__30204 = (i__29927 + (1));
i__29927 = G__30204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29928),app$ui$category_card_$_iter__29925(cljs.core.chunk_rest(s__29926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29928),null);
}
} else {
var k = cljs.core.first(s__29926__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.field_input,config,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$category_card_$_iter__29925(cljs.core.rest(s__29926__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$ui$config__GT_nested_$_iter__29972(s__29973){
return (new cljs.core.LazySeq(null,(function (){
var s__29973__$1 = s__29973;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29973__$1);
if(temp__5825__auto__){
var s__29973__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29973__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__29973__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__29975 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__29974 = (0);
while(true){
if((i__29974 < size__5502__auto__)){
var vec__29976 = cljs.core._nth(c__5501__auto__,i__29974);
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29976,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29976,(1),null);
cljs.core.chunk_append(b__29975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat,cljs.core.select_keys(config,ks)], null));

var G__30206 = (i__29974 + (1));
i__29974 = G__30206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29975),app$ui$config__GT_nested_$_iter__29972(cljs.core.chunk_rest(s__29973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29975),null);
}
} else {
var vec__29980 = cljs.core.first(s__29973__$2);
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat,cljs.core.select_keys(config,ks)], null),app$ui$config__GT_nested_$_iter__29972(cljs.core.rest(s__29973__$2)));
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
}catch (e29983){if((e29983 instanceof Error)){
var ___$1 = e29983;
return null;
} else {
throw e29983;

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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$ui$translate_keys_$_iter__29985(s__29986){
return (new cljs.core.LazySeq(null,(function (){
var s__29986__$1 = s__29986;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29986__$1);
if(temp__5825__auto__){
var s__29986__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29986__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__29986__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__29988 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__29987 = (0);
while(true){
if((i__29987 < size__5502__auto__)){
var vec__29990 = cljs.core._nth(c__5501__auto__,i__29987);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29990,(1),null);
cljs.core.chunk_append(b__29988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.translate_keys.call(null,v))], null));

var G__30207 = (i__29987 + (1));
i__29987 = G__30207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29988),app$ui$translate_keys_$_iter__29985(cljs.core.chunk_rest(s__29986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29988),null);
}
} else {
var vec__29993 = cljs.core.first(s__29986__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29993,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.translate_keys.call(null,v))], null),app$ui$translate_keys_$_iter__29985(cljs.core.rest(s__29986__$2)));
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
var keys_to_show = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29996_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29996_SHARP_,new cljs.core.Keyword(null,"family","family",-1313145692));
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
}),(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?cljs.core.compare:(function (p1__29998_SHARP_,p2__29997_SHARP_){
return cljs.core.compare(p2__29997_SHARP_,p1__29998_SHARP_);
})),filtered_items);
} else {
return filtered_items;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.sm:flex-row.gap-2.mb-3","div.flex.flex-col.sm:flex-row.gap-2.mb-3",-1732232976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:justify-between sm:items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.capitalize.text-gray-800","h3.text-lg.font-bold.capitalize.text-gray-800",-901247251),[cljs.core.name(family__$1)," Family Table"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full.sm:w-64","div.relative.w-full.sm:w-64",-916485454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-1.px-2.rounded.text-sm.w-full","input.border.p-1.px-2.rounded.text-sm.w-full",-1022830738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter rows...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29999_SHARP_){
return cljs.core.reset_BANG_(filter_text,p1__29999_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.border.rounded-lg.shadow-sm","div.overflow-x-auto.border.rounded-lg.shadow-sm",404497294),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.min-w-full.divide-y.divide-gray-200.text-sm","table.min-w-full.divide-y.divide-gray-200.text-sm",-810482796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.bg-gray-50","thead.bg-gray-50",86935040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5503__auto__ = (function app$ui$results_table_$_iter__30006(s__30007){
return (new cljs.core.LazySeq(null,(function (){
var s__30007__$1 = s__30007;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30007__$1);
if(temp__5825__auto__){
var s__30007__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30007__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30007__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30009 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30008 = (0);
while(true){
if((i__30008 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__30008);
cljs.core.chunk_append(b__30009,(function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30008,is_active_sort_QMARK_,k,c__5501__auto__,size__5502__auto__,b__30009,s__30007__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(i__30008,is_active_sort_QMARK_,k,c__5501__auto__,size__5502__auto__,b__30009,s__30007__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})());

var G__30210 = (i__30008 + (1));
i__30008 = G__30210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30009),app$ui$results_table_$_iter__30006(cljs.core.chunk_rest(s__30007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30009),null);
}
} else {
var k = cljs.core.first(s__30007__$2);
return cljs.core.cons((function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_active_sort_QMARK_,k,s__30007__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(is_active_sort_QMARK_,k,s__30007__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})(),app$ui$results_table_$_iter__30006(cljs.core.rest(s__30007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(keys_to_show);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.divide-y.divide-gray-200.bg-white","tbody.divide-y.divide-gray-200.bg-white",949897439),((cljs.core.empty_QMARK_(sorted_items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-8.text-center.text-gray-500","td.px-4.py-8.text-center.text-gray-500",-1635436609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),cljs.core.count(keys_to_show)], null),"No matching combinations found."], null)], null):(function (){var iter__5503__auto__ = (function app$ui$results_table_$_iter__30018(s__30019){
return (new cljs.core.LazySeq(null,(function (){
var s__30019__$1 = s__30019;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30019__$1);
if(temp__5825__auto__){
var s__30019__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30019__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30019__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30021 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30020 = (0);
while(true){
if((i__30020 < size__5502__auto__)){
var vec__30024 = cljs.core._nth(c__5501__auto__,i__30020);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30024,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30024,(1),null);
cljs.core.chunk_append(b__30021,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5503__auto__ = ((function (i__30020,vec__30024,idx,item,c__5501__auto__,size__5502__auto__,b__30021,s__30019__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results_table_$_iter__30018_$_iter__30030(s__30031){
return (new cljs.core.LazySeq(null,((function (i__30020,vec__30024,idx,item,c__5501__auto__,size__5502__auto__,b__30021,s__30019__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
var s__30031__$1 = s__30031;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__30031__$1);
if(temp__5825__auto____$1){
var s__30031__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30031__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__30031__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__30033 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__30032 = (0);
while(true){
if((i__30032 < size__5502__auto____$1)){
var k = cljs.core._nth(c__5501__auto____$1,i__30032);
cljs.core.chunk_append(b__30033,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__30230 = (i__30032 + (1));
i__30032 = G__30230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30033),app$ui$results_table_$_iter__30018_$_iter__30030(cljs.core.chunk_rest(s__30031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30033),null);
}
} else {
var k = cljs.core.first(s__30031__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results_table_$_iter__30018_$_iter__30030(cljs.core.rest(s__30031__$2)));
}
} else {
return null;
}
break;
}
});})(i__30020,vec__30024,idx,item,c__5501__auto__,size__5502__auto__,b__30021,s__30019__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
,null,null));
});})(i__30020,vec__30024,idx,item,c__5501__auto__,size__5502__auto__,b__30021,s__30019__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5503__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__30231 = (i__30020 + (1));
i__30020 = G__30231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30021),app$ui$results_table_$_iter__30018(cljs.core.chunk_rest(s__30019__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30021),null);
}
} else {
var vec__30045 = cljs.core.first(s__30019__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5503__auto__ = ((function (vec__30045,idx,item,s__30019__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results_table_$_iter__30018_$_iter__30048(s__30049){
return (new cljs.core.LazySeq(null,(function (){
var s__30049__$1 = s__30049;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__30049__$1);
if(temp__5825__auto____$1){
var s__30049__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30049__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30049__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30051 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30050 = (0);
while(true){
if((i__30050 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__30050);
cljs.core.chunk_append(b__30051,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__30247 = (i__30050 + (1));
i__30050 = G__30247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30051),app$ui$results_table_$_iter__30018_$_iter__30048(cljs.core.chunk_rest(s__30049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30051),null);
}
} else {
var k = cljs.core.first(s__30049__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results_table_$_iter__30018_$_iter__30048(cljs.core.rest(s__30049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__30045,idx,item,s__30019__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5503__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),app$ui$results_table_$_iter__30018(cljs.core.rest(s__30019__$2)));
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
var translated = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$ui$results_edn_view_$_iter__30055(s__30056){
return (new cljs.core.LazySeq(null,(function (){
var s__30056__$1 = s__30056;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30056__$1);
if(temp__5825__auto__){
var s__30056__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30056__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30056__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30058 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30057 = (0);
while(true){
if((i__30057 < size__5502__auto__)){
var vec__30059 = cljs.core._nth(c__5501__auto__,i__30057);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30059,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30059,(1),null);
cljs.core.chunk_append(b__30058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.translate_keys(items)], null));

var G__30248 = (i__30057 + (1));
i__30057 = G__30248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30058),app$ui$results_edn_view_$_iter__30055(cljs.core.chunk_rest(s__30056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30058),null);
}
} else {
var vec__30062 = cljs.core.first(s__30056__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30062,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30062,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.translate_keys(items)], null),app$ui$results_edn_view_$_iter__30055(cljs.core.rest(s__30056__$2)));
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
var _STAR_print_newline_STAR__orig_val__30065_30249 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30066_30250 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30067_30251 = true;
var _STAR_print_fn_STAR__temp_val__30068_30252 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30067_30251);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30068_30252);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(translated);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30066_30250);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30065_30249);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-2","h3.text-lg.font-bold.mb-2",-470954290),"EDN View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-lg.overflow-hidden","div.border.rounded-lg.overflow-hidden",-1188737018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"vs-dark",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null),new cljs.core.Keyword(null,"value","value",305978217),edn_str], null)], null)], null)], null);
});
app.ui.results_view = (function app$ui$results_view(){
var map__30069 = cljs.core.deref(app.state.app_state);
var map__30069__$1 = cljs.core.__destructure_map(map__30069);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var with_let30075 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let30075","with-let30075",-1258417069));
var temp__5829__auto___30260 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___30260 == null)){
} else {
var c__24948__auto___30261 = temp__5829__auto___30260;
if((with_let30075.generation === c__24948__auto___30261.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30075.generation = c__24948__auto___30261.ratomGeneration);
}

var init30076 = (with_let30075.length === (0));
var active_tab = ((((init30076) || (cljs.core.not(with_let30075.hasOwnProperty((0))))))?(with_let30075[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"charts","charts",555258811))):(with_let30075[(0)]));
var res30077 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.results-view-wrapper","div.p-4.results-view-wrapper",-1310678659),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mb-4","div.flex.justify-between.items-center.mb-4",-1518531499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.results-charts-container","h2.text-xl.font-bold.results-charts-container",1033258931),"Results"], null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.bg-gray-100.p-1.rounded-lg","div.flex.gap-2.bg-gray-100.p-1.rounded-lg",963613211),(function (){var iter__5503__auto__ = (function app$ui$results_view_$_iter__30111(s__30112){
return (new cljs.core.LazySeq(null,(function (){
var s__30112__$1 = s__30112;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30112__$1);
if(temp__5825__auto__){
var s__30112__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30112__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30112__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30114 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30113 = (0);
while(true){
if((i__30113 < size__5502__auto__)){
var vec__30116 = cljs.core._nth(c__5501__auto__,i__30113);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30116,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30116,(1),null);
cljs.core.chunk_append(b__30114,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30113,vec__30116,tab,label,c__5501__auto__,size__5502__auto__,b__30114,s__30112__$2,temp__5825__auto__,init30076,active_tab,with_let30075,map__30069,map__30069__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(i__30113,vec__30116,tab,label,c__5501__auto__,size__5502__auto__,b__30114,s__30112__$2,temp__5825__auto__,init30076,active_tab,with_let30075,map__30069,map__30069__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)));

var G__30291 = (i__30113 + (1));
i__30113 = G__30291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30114),app$ui$results_view_$_iter__30111(cljs.core.chunk_rest(s__30112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30114),null);
}
} else {
var vec__30119 = cljs.core.first(s__30112__$2);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__30119,tab,label,s__30112__$2,temp__5825__auto__,init30076,active_tab,with_let30075,map__30069,map__30069__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(vec__30119,tab,label,s__30112__$2,temp__5825__auto__,init30076,active_tab,with_let30075,map__30069,map__30069__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)),app$ui$results_view_$_iter__30111(cljs.core.rest(s__30112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),"Charts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),"Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),"EDN View"], null)], null));
})()], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.stage2_progress,progress], null):((cljs.core.seq(results))?(function (){var G__30122 = cljs.core.deref(active_tab);
var G__30122__$1 = (((G__30122 instanceof cljs.core.Keyword))?G__30122.fqn:null);
switch (G__30122__$1) {
case "charts":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function app$ui$results_view_$_iter__30123(s__30124){
return (new cljs.core.LazySeq(null,(function (){
var s__30124__$1 = s__30124;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30124__$1);
if(temp__5825__auto__){
var s__30124__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30124__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30124__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30126 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30125 = (0);
while(true){
if((i__30125 < size__5502__auto__)){
var vec__30127 = cljs.core._nth(c__5501__auto__,i__30125);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(1),null);
cljs.core.chunk_append(b__30126,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__30293 = (i__30125 + (1));
i__30125 = G__30293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30126),app$ui$results_view_$_iter__30123(cljs.core.chunk_rest(s__30124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30126),null);
}
} else {
var vec__30130 = cljs.core.first(s__30124__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results_view_$_iter__30123(cljs.core.rest(s__30124__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5503__auto__ = (function app$ui$results_view_$_iter__30136(s__30137){
return (new cljs.core.LazySeq(null,(function (){
var s__30137__$1 = s__30137;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30137__$1);
if(temp__5825__auto__){
var s__30137__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30137__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30137__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30139 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30138 = (0);
while(true){
if((i__30138 < size__5502__auto__)){
var vec__30142 = cljs.core._nth(c__5501__auto__,i__30138);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(1),null);
cljs.core.chunk_append(b__30139,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__30310 = (i__30138 + (1));
i__30138 = G__30310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30139),app$ui$results_view_$_iter__30136(cljs.core.chunk_rest(s__30137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30139),null);
}
} else {
var vec__30145 = cljs.core.first(s__30137__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results_view_$_iter__30136(cljs.core.rest(s__30137__$2)));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30122__$1)].join('')));

}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500","div.text-gray-500",-827790885),"Run a simulation to see results."], null)
))], null);
return res30077;
});
app.ui.navigation_bar = (function app$ui$navigation_bar(active_page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.bg-gray-800.text-white.shadow-md.mb-6","header.bg-gray-800.text-white.shadow-md.mb-6",-234610892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.px-4.py-3.flex.justify-between.items-center","div.container.mx-auto.px-4.py-3.flex.justify-between.items-center",1365034461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.gap-2.cursor-pointer","div.flex.items-center.gap-2.cursor-pointer",-2005623121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xl.font-extrabold.tracking-tight","span.text-xl.font-extrabold.tracking-tight",-265832265),"Regal Fitter"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.flex.gap-2","nav.flex.gap-2",1143614979),(function (){var iter__5503__auto__ = (function app$ui$navigation_bar_$_iter__30156(s__30157){
return (new cljs.core.LazySeq(null,(function (){
var s__30157__$1 = s__30157;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30157__$1);
if(temp__5825__auto__){
var s__30157__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30157__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__30157__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__30159 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__30158 = (0);
while(true){
if((i__30158 < size__5502__auto__)){
var vec__30160 = cljs.core._nth(c__5501__auto__,i__30158);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30160,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30160,(1),null);
cljs.core.chunk_append(b__30159,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors","button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors",-696574251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,page))?"bg-gray-950 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30158,vec__30160,page,label,c__5501__auto__,size__5502__auto__,b__30159,s__30157__$2,temp__5825__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null));
});})(i__30158,vec__30160,page,label,c__5501__auto__,size__5502__auto__,b__30159,s__30157__$2,temp__5825__auto__))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__30311 = (i__30158 + (1));
i__30158 = G__30311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30159),app$ui$navigation_bar_$_iter__30156(cljs.core.chunk_rest(s__30157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30159),null);
}
} else {
var vec__30167 = cljs.core.first(s__30157__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors","button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors",-696574251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,page))?"bg-gray-950 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__30167,page,label,s__30157__$2,temp__5825__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null));
});})(vec__30167,page,label,s__30157__$2,temp__5825__auto__))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),app$ui$navigation_bar_$_iter__30156(cljs.core.rest(s__30157__$2)));
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
})], null),"Results"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running-stage1","running-stage1",1345324298)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-yellow-100.p-4.mb-4","div.bg-yellow-100.p-4.mb-4",-490919467),"Running Stage 1 (Analytical Pre-filter)..."], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.text-red-800.p-4.mb-4","div.bg-red-100.text-red-800.p-4.mb-4",-891988402),new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(state)], null):null),(function (){var G__30174 = view;
var G__30174__$1 = (((G__30174 instanceof cljs.core.Keyword))?G__30174.fqn:null);
switch (G__30174__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30174__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),view], null));
});
});
app.ui.main_view = (function app$ui$main_view(){
var state = cljs.core.deref(app.state.app_state);
var active_page = new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(state);
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.bg-gray-50","div.min-h-screen.bg-gray-50",1856382833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.navigation_bar,active_page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mx-auto.p-4","div.container.mx-auto.p-4",-1505263632),(function (){var G__30175 = active_page;
var G__30175__$1 = (((G__30175 instanceof cljs.core.Keyword))?G__30175.fqn:null);
switch (G__30175__$1) {
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
