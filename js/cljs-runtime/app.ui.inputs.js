goog.provide('app.ui.inputs');
app.ui.inputs.key__GT_label = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gps-shape-grid","gps-shape-grid",-1878714432),new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219),new cljs.core.Keyword(null,"prefilter-tol-upd","prefilter-tol-upd",10669060),new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316),new cljs.core.Keyword(null,"t-ia","t-ia",1745131236),new cljs.core.Keyword(null,"leak-grid","leak-grid",1135019940),new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),new cljs.core.Keyword(null,"tol-ia","tol-ia",-1881927450),new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134),new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202),new cljs.core.Keyword(null,"gps-med-grid-hi","gps-med-grid-hi",757096102),new cljs.core.Keyword(null,"cure-unc-shape-grid","cure-unc-shape-grid",-855173178),new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879),new cljs.core.Keyword(null,"cure-unc-med-grid","cure-unc-med-grid",-1533152473),new cljs.core.Keyword(null,"gps-med-grid-n","gps-med-grid-n",349271879),new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031),new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113),new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086),new cljs.core.Keyword(null,"gps-med-grid-lo","gps-med-grid-lo",-1666153973),new cljs.core.Keyword(null,"n-total","n-total",-1946555251),new cljs.core.Keyword(null,"leaky-cure-frac-grid","leaky-cure-frac-grid",-829923027),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801),new cljs.core.Keyword(null,"tol-pr3","tol-pr3",-858714798),new cljs.core.Keyword(null,"prefilter-tol-pr3","prefilter-tol-pr3",-1485355598),new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522),new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new cljs.core.Keyword(null,"tol-upd","tol-upd",1256937940),new cljs.core.Keyword(null,"leaky-unc-shape-grid","leaky-unc-shape-grid",-700351020),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100),new cljs.core.Keyword(null,"cure-frac-grid","cure-frac-grid",1356953077),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339),new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890),new cljs.core.Keyword(null,"leaky-unc-med-grid","leaky-unc-med-grid",-1067412745),new cljs.core.Keyword(null,"hr-threshold","hr-threshold",1028896727),new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673),new cljs.core.Keyword(null,"prefilter-tol-ia","prefilter-tol-ia",2016572921),new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559),new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766),new cljs.core.Keyword(null,"bat-strat-bin","bat-strat-bin",146317501),new cljs.core.Keyword(null,"families","families",255079231)],["GPS Shape Grid","Screening Sims count","Prefilter UPD Tolerance","Target Events at Final","Time to IA (months)","Leak Grid","BAT Median Grid","IA Count Tolerance","Median Follow-up Tolerance","Efficacy HR Min at IA","GPS Median Grid High","Cure Uncured Shape Grid","IA-UPD Increment Tolerance","Cure GPS Uncured Median Grid","GPS Median Grid N","UPD-PR3 Increment Tolerance","Time to UPD (months)","Min Pass for Screening","No 80 Slack (months)","GPS Median Grid Low","Total Size (N)","Leaky Cure Fraction Grid","Random Seed","Target Events at PR3","PR3 Count Tolerance","Prefilter PR3 Tolerance","Futility HR Max at IA","BAT Shape Grid","Enrollment Bands","UPD Count Tolerance","Leaky Uncured Shape Grid","Simulations per Combo","Time to PR3 (months)","Cure Fraction Grid","Target Events at IA","Median Follow-up Target (months)","N per Arm","Leaky GPS Uncured Median Grid","HR Significance Threshold","Enforce No 80 Events by Today","Target Events at UPD","Prefilter IA Tolerance","Pooled mOS Min at IA (months)","Use PR3 Anchor","BAT Stratification Bin (months)","Model Families"]);
app.ui.inputs.key__GT_help = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"gps-shape-grid","gps-shape-grid",-1878714432),new cljs.core.Keyword(null,"n-sims-screen","n-sims-screen",2118133219),new cljs.core.Keyword(null,"prefilter-tol-upd","prefilter-tol-upd",10669060),new cljs.core.Keyword(null,"n-ev-final","n-ev-final",-397056316),new cljs.core.Keyword(null,"t-ia","t-ia",1745131236),new cljs.core.Keyword(null,"leak-grid","leak-grid",1135019940),new cljs.core.Keyword(null,"bat-med-grid","bat-med-grid",-955638618),new cljs.core.Keyword(null,"tol-ia","tol-ia",-1881927450),new cljs.core.Keyword(null,"median-fu-tol","median-fu-tol",1418236134),new cljs.core.Keyword(null,"efficacy-hr-min","efficacy-hr-min",-109894202),new cljs.core.Keyword(null,"gps-med-grid-hi","gps-med-grid-hi",757096102),new cljs.core.Keyword(null,"cure-unc-shape-grid","cure-unc-shape-grid",-855173178),new cljs.core.Keyword(null,"tol-increment-ia-upd","tol-increment-ia-upd",1204579879),new cljs.core.Keyword(null,"cure-unc-med-grid","cure-unc-med-grid",-1533152473),new cljs.core.Keyword(null,"gps-med-grid-n","gps-med-grid-n",349271879),new cljs.core.Keyword(null,"tol-increment-upd-pr3","tol-increment-upd-pr3",2088706216),new cljs.core.Keyword(null,"t-upd","t-upd",-1409887031),new cljs.core.Keyword(null,"n-screen-min-pass","n-screen-min-pass",557259113),new cljs.core.Keyword(null,"no-80-slack-months","no-80-slack-months",-1947716086),new cljs.core.Keyword(null,"gps-med-grid-lo","gps-med-grid-lo",-1666153973),new cljs.core.Keyword(null,"n-total","n-total",-1946555251),new cljs.core.Keyword(null,"leaky-cure-frac-grid","leaky-cure-frac-grid",-829923027),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"n-ev-pr3","n-ev-pr3",825790801),new cljs.core.Keyword(null,"tol-pr3","tol-pr3",-858714798),new cljs.core.Keyword(null,"prefilter-tol-pr3","prefilter-tol-pr3",-1485355598),new cljs.core.Keyword(null,"futility-hr-max","futility-hr-max",493697522),new cljs.core.Keyword(null,"bat-shape-grid","bat-shape-grid",-1606002701),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new cljs.core.Keyword(null,"tol-upd","tol-upd",1256937940),new cljs.core.Keyword(null,"leaky-unc-shape-grid","leaky-unc-shape-grid",-700351020),new cljs.core.Keyword(null,"n-sims-per-combo","n-sims-per-combo",-1661929996),new cljs.core.Keyword(null,"t-pr3","t-pr3",1915738100),new cljs.core.Keyword(null,"cure-frac-grid","cure-frac-grid",1356953077),new cljs.core.Keyword(null,"n-ev-ia","n-ev-ia",-1664723339),new cljs.core.Keyword(null,"median-fu-target","median-fu-target",-1517556298),new cljs.core.Keyword(null,"n-per-arm","n-per-arm",-1436178890),new cljs.core.Keyword(null,"leaky-unc-med-grid","leaky-unc-med-grid",-1067412745),new cljs.core.Keyword(null,"hr-threshold","hr-threshold",1028896727),new cljs.core.Keyword(null,"enforce-no-80-by-today","enforce-no-80-by-today",-1666575528),new cljs.core.Keyword(null,"n-ev-upd","n-ev-upd",1198515673),new cljs.core.Keyword(null,"prefilter-tol-ia","prefilter-tol-ia",2016572921),new cljs.core.Keyword(null,"pool-mos-min-at-ia","pool-mos-min-at-ia",-699267559),new cljs.core.Keyword(null,"use-pr3-anchor","use-pr3-anchor",-1116109766),new cljs.core.Keyword(null,"bat-strat-bin","bat-strat-bin",146317501),new cljs.core.Keyword(null,"families","families",255079231)],["Weibull GPS shape grid (start, stop, step).",(""+"Initial screening simulation depth to drop poor combinations "+"before running full simulations."),"Analytical pre-filter tolerance on UPD event count.","Observed target events at final analysis (80 events).","Calendar months from first enrollment (t=0) to Interim Analysis (IA).","Leaky leak-rate grid (start, stop, step).","Weibull BAT median grid (start, stop, step).","ABC tolerance on event count at Interim Analysis (IA).","Tolerance for median follow-up target in months.",(""+"Trial did not stop early for efficacy floor at IA. "+"Set to 0 to disable."),"Weibull GPS median grid upper bound (log-spaced).","Cure uncured shape grid (start, stop, step).",(""+"Tolerance on the increment of events between IA and UPD "+"(observed increment is 12). Set to large number to disable."),"Cure uncured median grid (start, stop, step).","Weibull GPS median grid number of points.",(""+"Tolerance on the increment of events between UPD and PR3 "+"(observed increment is 6). Set to large number to disable."),"Calendar months from first enrollment (t=0) to Updated Analysis.","Minimum passing simulations required during screening to continue.",(""+"Slack months allowed for analysis lag of 80th event "+"(accounts for ~1-2 months lag between FA trigger and PR)."),"Weibull GPS median grid lower bound (log-spaced).","Total trial size (e.g. 126 subjects).","Leaky cure-fraction GPS grid (start, stop, step).","Random seed for reproducibility.","Observed target events at public PR3 anchor (78 events).","ABC tolerance on event count at public PR3 anchor.","Analytical pre-filter tolerance on PR3 event count.",(""+"Futility HR boundary limit at Interim Analysis (IA) (GPS "+"exceeded futility criteria, e.g. HR < 1.0). Set to 999 to disable."),"Weibull BAT shape grid (start, stop, step).",(""+"Enrollment year-bands (counts) measured from t=0 (Feb 8, 2021). "+"Format: [[start_month end_month count] ...]."),"ABC tolerance on event count at Updated Analysis (UPD).","Leaky uncured shape grid (start, stop, step).","Post-filter simulation depth per combination.","Calendar months from first enrollment (t=0) to public PR3 anchor.","Cure-fraction GPS grid (start, stop, step).","Observed target events at Interim Analysis (IA) (60 events).",(""+"Disclosed target median follow-up at IA in months (13.5). "+"Set to 0 to disable."),"Number of subjects per treatment arm (e.g. 63).","Leaky uncured median grid (start, stop, step).","Hazard ratio threshold for significance per SAP (0.636).","Require that the 80th event has not occurred before today.","Observed target events at Updated Analysis (UPD) (72 events).",(""+"Analytical pre-filter tolerance on IA event count. "+"Rejects combos whose expected events deviate beyond tolerance."),(""+"Minimum pooled median OS at IA in months (IDMC reported "+"exceeded 12 months, e.g. 13.5). Set to 0 to disable."),"Toggle the third (PR3) anchor on/off.",(""+"Width of BAT mOS bins for stratified output. "+"Set to 0 to disable stratified pages."),"Enabled model distribution families."]);
app.ui.inputs.parse_vector = (function app$ui$inputs$parse_vector(val){
try{var parsed = JSON.parse(val);
if(cljs.core.truth_(Array.isArray(parsed))){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(parsed);
} else {
return null;
}
}catch (e26839){if((e26839 instanceof Error)){
var _ = e26839;
return null;
} else {
throw e26839;

}
}});
app.ui.inputs.parse_float_safe = (function app$ui$inputs$parse_float_safe(s,default_val){
var p = parseFloat(s);
if(cljs.core.truth_(isNaN(p))){
return default_val;
} else {
return p;
}
});
app.ui.inputs.parse_int = (function app$ui$inputs$parse_int(v){
if(clojure.string.blank_QMARK_(v)){
return "";
} else {
var p = parseInt(v,(10));
if(cljs.core.truth_(isNaN(p))){
return v;
} else {
return p;
}
}
});
app.ui.inputs.parse_double_safe = (function app$ui$inputs$parse_double_safe(v){
if(clojure.string.blank_QMARK_(v)){
return "";
} else {
var p = parseFloat(v);
if(cljs.core.truth_(isNaN(p))){
return v;
} else {
return p;
}
}
});
app.ui.inputs.field_wrapper = (function app$ui$inputs$field_wrapper(key_name,child_el){
var show_help_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (key_name__$1,child_el__$1){
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,key_name__$1,cljs.core.name(key_name__$1));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_help,key_name__$1,"");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.mb-1","div.flex.items-center.justify-between.mb-1",-1208760272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),label_text], null),((cljs.core.seq(help_text))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.inline-flex.items-center.justify-center","button.inline-flex.items-center.justify-center",442207438),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-5 h-5 text-xs font-bold rounded-full "+"transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(show_help_QMARK_))?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-100 text-gray-500 hover:bg-gray-200"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_help_QMARK_,cljs.core.not);
})], null),"?"], null):null)], null),(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.deref(show_help_QMARK_);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.seq(help_text);
} else {
return and__5160__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2","div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2",-846889103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border border-blue-200 leading-relaxed"], null),help_text], null):null),child_el__$1], null);
});
});
app.ui.inputs.num_input = (function app$ui$inputs$num_input(props,key_name,parser){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props),key_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(v) : parser.call(null,v));
var G__26855 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name,parsed]);
var fexpr__26854 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__26854.cljs$core$IFn$_invoke$arity$1 ? fexpr__26854.cljs$core$IFn$_invoke$arity$1(G__26855) : fexpr__26854.call(null,G__26855));
})], null)], null);
});
app.ui.inputs.checkbox_input = (function app$ui$inputs$checkbox_input(props,key_name){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props),key_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mt-1","input.mt-1",2139920963),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__26857 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name,e.target.checked]);
var fexpr__26856 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__26856.cljs$core$IFn$_invoke$arity$1 ? fexpr__26856.cljs$core$IFn$_invoke$arity$1(G__26857) : fexpr__26856.call(null,G__26857));
})], null)], null);
});
app.ui.inputs.vector_input = (function app$ui$inputs$vector_input(props,key_name){
var curr_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props),key_name);
var text_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(curr_val)));
return (function (props__$1,key_name__$1){
var c_val_26946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props__$1),key_name__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.inputs.parse_vector(cljs.core.deref(text_val)),c_val_26946)){
} else {
cljs.core.reset_BANG_(text_val,JSON.stringify(cljs.core.clj__GT_js(c_val_26946)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
cljs.core.reset_BANG_(text_val,v);

var temp__5825__auto__ = app.ui.inputs.parse_vector(v);
if(cljs.core.truth_(temp__5825__auto__)){
var parsed = temp__5825__auto__;
var G__26864 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name__$1,parsed]);
var fexpr__26863 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props__$1);
return (fexpr__26863.cljs$core$IFn$_invoke$arity$1 ? fexpr__26863.cljs$core$IFn$_invoke$arity$1(G__26864) : fexpr__26863.call(null,G__26864));
} else {
return null;
}
})], null)], null);
});
});
app.ui.inputs.grid_input = (function app$ui$inputs$grid_input(props,key_name){
var vec__26869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props),key_name);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26869,(0),null);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26869,(1),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26869,(2),null);
var start_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)));
var stop_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stop)));
var step_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)));
return (function (props__$1,key_name__$1){
var vec__26873_26947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props__$1),key_name__$1);
var c_start_26948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873_26947,(0),null);
var c_stop_26949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873_26947,(1),null);
var c_step_26950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873_26947,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.inputs.parse_float_safe(cljs.core.deref(start_val),null),c_start_26948)){
} else {
cljs.core.reset_BANG_(start_val,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_start_26948)));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.inputs.parse_float_safe(cljs.core.deref(stop_val),null),c_stop_26949)){
} else {
cljs.core.reset_BANG_(stop_val,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_stop_26949)));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.ui.inputs.parse_float_safe(cljs.core.deref(step_val),null),c_step_26950)){
} else {
cljs.core.reset_BANG_(step_val,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_step_26950)));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mt-1","div.flex.gap-2.mt-1",-1579391217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Start"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(start_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = parseFloat(v);
cljs.core.reset_BANG_(start_val,v);

if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
var G__26881 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parsed,app.ui.inputs.parse_float_safe(cljs.core.deref(stop_val),0.0),app.ui.inputs.parse_float_safe(cljs.core.deref(step_val),0.0)], null)]);
var fexpr__26880 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props__$1);
return (fexpr__26880.cljs$core$IFn$_invoke$arity$1 ? fexpr__26880.cljs$core$IFn$_invoke$arity$1(G__26881) : fexpr__26880.call(null,G__26881));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Stop"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(stop_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = parseFloat(v);
cljs.core.reset_BANG_(stop_val,v);

if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
var G__26905 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.inputs.parse_float_safe(cljs.core.deref(start_val),0.0),parsed,app.ui.inputs.parse_float_safe(cljs.core.deref(step_val),0.0)], null)]);
var fexpr__26904 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props__$1);
return (fexpr__26904.cljs$core$IFn$_invoke$arity$1 ? fexpr__26904.cljs$core$IFn$_invoke$arity$1(G__26905) : fexpr__26904.call(null,G__26905));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-500","span.text-xs.text-gray-500",509898811),"Step"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(step_val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var parsed = parseFloat(v);
cljs.core.reset_BANG_(step_val,v);

if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
var G__26913 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.inputs.parse_float_safe(cljs.core.deref(start_val),0.0),app.ui.inputs.parse_float_safe(cljs.core.deref(stop_val),0.0),parsed], null)]);
var fexpr__26912 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props__$1);
return (fexpr__26912.cljs$core$IFn$_invoke$arity$1 ? fexpr__26912.cljs$core$IFn$_invoke$arity$1(G__26913) : fexpr__26912.call(null,G__26913));
}
})], null)], null)], null)], null);
});
});
app.ui.inputs.families_input = (function app$ui$inputs$families_input(props,key_name){
var curr_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props),key_name);
var all_families = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["weibull","leaky","cure"], null);
var active_set = cljs.core.set(curr_val);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.mt-1","div.flex.flex-col.gap-2.mt-1",-515768463),(function (){var iter__5649__auto__ = (function app$ui$inputs$families_input_$_iter__26915(s__26916){
return (new cljs.core.LazySeq(null,(function (){
var s__26916__$1 = s__26916;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26916__$1);
if(temp__5825__auto__){
var s__26916__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26916__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__26916__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__26918 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__26917 = (0);
while(true){
if((i__26917 < size__5648__auto__)){
var fam = cljs.core._nth(c__5647__auto__,i__26917);
cljs.core.chunk_append(b__26918,(function (){var checked_QMARK_ = cljs.core.contains_QMARK_(active_set,fam);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer","label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer",-740085585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500","input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500",-1824062157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__26917,checked_QMARK_,fam,c__5647__auto__,size__5648__auto__,b__26918,s__26916__$2,temp__5825__auto__,curr_val,all_families,active_set){
return (function (e){
var checked = e.target.checked;
var new_set = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_set,fam):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_set,fam));
var new_val = cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new_set),all_families);
var G__26922 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name,new_val]);
var fexpr__26921 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__26921.cljs$core$IFn$_invoke$arity$1 ? fexpr__26921.cljs$core$IFn$_invoke$arity$1(G__26922) : fexpr__26921.call(null,G__26922));
});})(i__26917,checked_QMARK_,fam,c__5647__auto__,size__5648__auto__,b__26918,s__26916__$2,temp__5825__auto__,curr_val,all_families,active_set))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.capitalize","span.ml-2.capitalize",-794594893),fam], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null));
})());

var G__26959 = (i__26917 + (1));
i__26917 = G__26959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26918),app$ui$inputs$families_input_$_iter__26915(cljs.core.chunk_rest(s__26916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26918),null);
}
} else {
var fam = cljs.core.first(s__26916__$2);
return cljs.core.cons((function (){var checked_QMARK_ = cljs.core.contains_QMARK_(active_set,fam);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer","label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer",-740085585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500","input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500",-1824062157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checked_QMARK_,fam,s__26916__$2,temp__5825__auto__,curr_val,all_families,active_set){
return (function (e){
var checked = e.target.checked;
var new_set = (cljs.core.truth_(checked)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(active_set,fam):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_set,fam));
var new_val = cljs.core.filterv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new_set),all_families);
var G__26928 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key_name,new_val]);
var fexpr__26927 = new cljs.core.Keyword(null,"set-values","set-values",-928640446).cljs$core$IFn$_invoke$arity$1(props);
return (fexpr__26927.cljs$core$IFn$_invoke$arity$1 ? fexpr__26927.cljs$core$IFn$_invoke$arity$1(G__26928) : fexpr__26927.call(null,G__26928));
});})(checked_QMARK_,fam,s__26916__$2,temp__5825__auto__,curr_val,all_families,active_set))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-2.capitalize","span.ml-2.capitalize",-794594893),fam], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null));
})(),app$ui$inputs$families_input_$_iter__26915(cljs.core.rest(s__26916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(all_families);
})()], null);
});

//# sourceMappingURL=app.ui.inputs.js.map
