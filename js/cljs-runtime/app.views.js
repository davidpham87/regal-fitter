goog.provide('app.views');
app.views.btn_class = ["inline-block bg-blue-600 hover:bg-blue-700 ","text-white text-sm font-semibold ","px-4 py-2 rounded-lg transition-colors"].join('');
app.views.navigate_button = (function app$views$navigate_button(page,label,class_str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5025__auto__ = class_str;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "text-blue-500 hover:underline font-semibold";
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null));
})], null),label], null);
});
app.views.home_view = (function app$views$home_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6.max-w-4xl.mx-auto","div.p-6.max-w-4xl.mx-auto",453345455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-extrabold.text-gray-800.mb-2","h1.text-3xl.font-extrabold.text-gray-800.mb-2",-1735397066),"Welcome to Regal Fitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-600.mb-8","p.text-gray-600.mb-8",1549746207),"A premium simulation dashboard for clinical trial design optimization."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-3.gap-6","div.grid.grid-cols-1.md:grid-cols-3.gap-6",-721719010),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col","div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col",-55148167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["justify-between","hover:shadow-md","transition-all"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.text-gray-800.mb-2","h2.text-xl.font-bold.text-gray-800.mb-2",-1932937079),"1. Fitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-600.mb-4","p.text-sm.text-gray-600.mb-4",-768109941),"Optimize and pre-filter trial design assumptions across Weibull, Cure,\n        and Leaky Cure families with fast parallel simulations."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.navigate_button,new cljs.core.Keyword(null,"fitter","fitter",1602090730),"Open Fitter",app.views.btn_class], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col","div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col",-55148167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["justify-between","hover:shadow-md","transition-all"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.text-gray-800.mb-2","h2.text-xl.font-bold.text-gray-800.mb-2",-1932937079),"2. Placebo Stress Test"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-600.mb-4","p.text-sm.text-gray-600.mb-4",-768109941),"Assess placebo response distributions and calculate p-values of event\n        times under simulated stress conditions."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.navigate_button,new cljs.core.Keyword(null,"placebo-stress","placebo-stress",293301633),"Open Placebo Test",app.views.btn_class], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col","div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col",-55148167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["justify-between","hover:shadow-md","transition-all"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.text-gray-800.mb-2","h2.text-xl.font-bold.text-gray-800.mb-2",-1932937079),"3. Discovery"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-600.mb-4","p.text-sm.text-gray-600.mb-4",-768109941),"Explore and visualize survival curves and event accrual paths given\n        user-controlled trial parameters."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.navigate_button,new cljs.core.Keyword(null,"discovery","discovery",1906276356),"Open Discovery",app.views.btn_class], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-12.pt-8.border-t","div.mt-12.pt-8.border-t",-1867845215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-2xl.font-extrabold.text-gray-800.mb-4","h2.text-2xl.font-extrabold.text-gray-800.mb-4",-1229087512),"About the REGAL Constraint Fitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-600.mb-6","p.text-gray-600.mb-6",1530133303),"This dashboard replicates and extends the constraint-based ABC\n      (Approximate Bayesian Computation) model for estimating the probability\n      of trial success in the REGAL Phase 3 trial of galinpepimut-S (GPS). It\n      operates purely on publicly disclosed information without using Phase 2\n      GPS data or historical AML benchmarks as biological priors."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-8.mb-8","div.grid.grid-cols-1.md:grid-cols-2.gap-8.mb-8",-1189888060),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.text-gray-700.mb-3","h3.text-lg.font-bold.text-gray-700.mb-3",128702360),"Methodology & Model Families"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-600.mb-3","p.text-sm.text-gray-600.mb-3",-1819343892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Two-Stage ABC:"], null)," Combos are run through an analytical pre-filter ","(Stage 1) to reject parameter sets that cannot mathematically meet ","anchors. Surviving combos then run through trial simulations (Stage 2) ","to estimate empirical success probability."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-600","p.text-sm.text-gray-600",-1212846130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Three Model Families:"], null)," Fits trial data using three distinct ","parametric assumptions: Weibull/Weibull (agnostic), standard ","Cure-fraction GPS (explicit plateau), and Leaky Cure GPS (cure tail ","with residual hazard rate to prevent immortality artifacts)."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-50.p-4.rounded-xl.border","div.bg-gray-50.p-4.rounded-xl.border",1093419199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-xs.font-bold.text-gray-500.uppercase.tracking-wider.mb-3","h3.text-xs.font-bold.text-gray-500.uppercase.tracking-wider.mb-3",1297769419),"Public Constraints Applied"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-2","div.space-y-2",-924002995),(function (){var iter__5503__auto__ = (function app$views$home_view_$_iter__28664(s__28665){
return (new cljs.core.LazySeq(null,(function (){
var s__28665__$1 = s__28665;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28665__$1);
if(temp__5825__auto__){
var s__28665__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28665__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28665__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28667 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28666 = (0);
while(true){
if((i__28666 < size__5502__auto__)){
var vec__28668 = cljs.core._nth(c__5501__auto__,i__28666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28668,(1),null);
cljs.core.chunk_append(b__28667,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.text-xs.border-b.pb-1","div.flex.justify-between.text-xs.border-b.pb-1",1897000404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-gray-600","span.font-semibold.text-gray-600",592107521),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-800.font-medium","span.text-gray-800.font-medium",1892640972),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__28810 = (i__28666 + (1));
i__28666 = G__28810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28667),app$views$home_view_$_iter__28664(cljs.core.chunk_rest(s__28665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28667),null);
}
} else {
var vec__28675 = cljs.core.first(s__28665__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28675,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.text-xs.border-b.pb-1","div.flex.justify-between.text-xs.border-b.pb-1",1897000404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-semibold.text-gray-600","span.font-semibold.text-gray-600",592107521),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-800.font-medium","span.text-gray-800.font-medium",1892640972),v], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$views$home_view_$_iter__28664(cljs.core.rest(s__28665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Total Enrolled","126 patients (1:1 randomization)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interim Analysis","60 events @ ~m46 (Dec 2024)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Data Update","72 events @ ~m58 (Dec 2025)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Final Analysis","80 events target"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pool Blinded mOS","> 12 months at IA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Median Follow-Up","13.5 \u00B1 2 months at IA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Success HR threshold","< 0.636 (per SAP)"], null)], null));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-blue-50.border.border-blue-100.p-5.rounded-xl.mb-6","div.bg-blue-50.border.border-blue-100.p-5.rounded-xl.mb-6",1527104753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-sm.font-bold.text-blue-800.mb-2","h4.text-sm.font-bold.text-blue-800.mb-2",2087548076),"Key Methodological Insights: Point Fit vs. Posterior Averaging"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs.text-blue-900.leading-relaxed.mb-2","p.text-xs.text-blue-900.leading-relaxed.mb-2",1080932900),"This engine reports both *Best-Fit Point Estimates* and *Posterior\n       Averages* side-by-side. Point estimation selects the single parameter\n       set that minimizes max-residuals against the public anchors, yielding\n       ~100% P(success) under strong cure assumptions."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs.text-blue-900.leading-relaxed","p.text-xs.text-blue-900.leading-relaxed",-568308279),"Posterior averaging, however, integrates across all parameter regimes\n       that are mathematically consistent with public anchors. This yields a\n       more robust, smooth marginal success probability (ranging from 66% to\n       78% depending on the model family) and avoids point-fit fragility."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs.text-gray-400.italic.mt-3.pt-2.border-t.border-blue-100","p.text-xs.text-gray-400.italic.mt-3.pt-2.border-t.border-blue-100",2117721982),"Note: This is an independent analytical exercise and does not\n       constitute financial advice. SLS long position held by the author."], null)], null)], null)], null);
});
app.views.stress_test_form = (function app$views$stress_test_form(){
var config = new cljs.core.Keyword(null,"stress-test-config","stress-test-config",-854703202).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.state.app_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-6.rounded-xl.shadow-sm.border.mb-6","div.bg-white.p-6.rounded-xl.shadow-sm.border.mb-6",-596519574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.mb-4","h2.text-xl.font-bold.mb-4",-988997653),"Configuration"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-3.gap-4","div.grid.grid-cols-1.md:grid-cols-3.gap-4",888147611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"mOS Grid (start, stop, step)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mt-1","div.flex.gap-2.mt-1",-1579391217),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$views$stress_test_form_$_iter__28686(s__28687){
return (new cljs.core.LazySeq(null,(function (){
var s__28687__$1 = s__28687;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28687__$1);
if(temp__5825__auto__){
var s__28687__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28687__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28687__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28689 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28688 = (0);
while(true){
if((i__28688 < size__5502__auto__)){
var i = cljs.core._nth(c__5501__auto__,i__28688);
cljs.core.chunk_append(b__28689,(function (){var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778).cljs$core$IFn$_invoke$arity$1(config),i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.1",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(cljs.core.truth_(isNaN(v))?"":v),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__28688,v,i,c__5501__auto__,size__5502__auto__,b__28689,s__28687__$2,temp__5825__auto__,config){
return (function (e){
var nv = parseFloat(e.target.value);
var new_grid = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778).cljs$core$IFn$_invoke$arity$1(config),i,nv);
return app.state.set_stress_test_config_BANG_(new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778),new_grid);
});})(i__28688,v,i,c__5501__auto__,size__5502__auto__,b__28689,s__28687__$2,temp__5825__auto__,config))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["mos-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
})());

var G__28820 = (i__28688 + (1));
i__28688 = G__28820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28689),app$views$stress_test_form_$_iter__28686(cljs.core.chunk_rest(s__28687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28689),null);
}
} else {
var i = cljs.core.first(s__28687__$2);
return cljs.core.cons((function (){var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778).cljs$core$IFn$_invoke$arity$1(config),i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.1",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(cljs.core.truth_(isNaN(v))?"":v),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v,i,s__28687__$2,temp__5825__auto__,config){
return (function (e){
var nv = parseFloat(e.target.value);
var new_grid = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778).cljs$core$IFn$_invoke$arity$1(config),i,nv);
return app.state.set_stress_test_config_BANG_(new cljs.core.Keyword(null,"mos-grid","mos-grid",-116177778),new_grid);
});})(v,i,s__28687__$2,temp__5825__auto__,config))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["mos-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
})(),app$views$stress_test_form_$_iter__28686(cljs.core.rest(s__28687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"k Grid (start, stop, step)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.mt-1","div.flex.gap-2.mt-1",-1579391217),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$views$stress_test_form_$_iter__28706(s__28707){
return (new cljs.core.LazySeq(null,(function (){
var s__28707__$1 = s__28707;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28707__$1);
if(temp__5825__auto__){
var s__28707__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28707__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28707__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28709 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28708 = (0);
while(true){
if((i__28708 < size__5502__auto__)){
var i = cljs.core._nth(c__5501__auto__,i__28708);
cljs.core.chunk_append(b__28709,(function (){var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k-grid","k-grid",-887124116).cljs$core$IFn$_invoke$arity$1(config),i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.1",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(cljs.core.truth_(isNaN(v))?"":v),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__28708,v,i,c__5501__auto__,size__5502__auto__,b__28709,s__28707__$2,temp__5825__auto__,config){
return (function (e){
var nv = parseFloat(e.target.value);
var new_grid = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"k-grid","k-grid",-887124116).cljs$core$IFn$_invoke$arity$1(config),i,nv);
return app.state.set_stress_test_config_BANG_(new cljs.core.Keyword(null,"k-grid","k-grid",-887124116),new_grid);
});})(i__28708,v,i,c__5501__auto__,size__5502__auto__,b__28709,s__28707__$2,temp__5825__auto__,config))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["k-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
})());

var G__28827 = (i__28708 + (1));
i__28708 = G__28827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28709),app$views$stress_test_form_$_iter__28706(cljs.core.chunk_rest(s__28707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28709),null);
}
} else {
var i = cljs.core.first(s__28707__$2);
return cljs.core.cons((function (){var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k-grid","k-grid",-887124116).cljs$core$IFn$_invoke$arity$1(config),i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm","input.border.w-full.p-1.rounded.text-sm",-431979953),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.1",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(cljs.core.truth_(isNaN(v))?"":v),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (v,i,s__28707__$2,temp__5825__auto__,config){
return (function (e){
var nv = parseFloat(e.target.value);
var new_grid = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"k-grid","k-grid",-887124116).cljs$core$IFn$_invoke$arity$1(config),i,nv);
return app.state.set_stress_test_config_BANG_(new cljs.core.Keyword(null,"k-grid","k-grid",-887124116),new_grid);
});})(v,i,s__28707__$2,temp__5825__auto__,config))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["k-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
})(),app$views$stress_test_form_$_iter__28706(cljs.core.rest(s__28707__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"Sims per Combo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-1.rounded.text-sm.mt-1","input.border.w-full.p-1.rounded.text-sm.mt-1",617914370),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"n-sims","n-sims",979948804).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return app.state.set_stress_test_config_BANG_(new cljs.core.Keyword(null,"n-sims","n-sims",979948804),parseInt(e.target.value));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.flex.justify-center","div.mt-4.flex.justify-center",-1290712670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-blue-600.hover:bg-blue-700.text-white","button.bg-blue-600.hover:bg-blue-700.text-white",1989157766),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold px-6 py-2 rounded-lg shadow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
console.log("UI: Clicked Run Stress Test");

return app.simulator.start_stress_test_BANG_();
})], null),"Run Stress Test"], null)], null)], null);
});
app.views.sortable_header = (function app$views$sortable_header(label,k,sort_state){
var map__28726 = cljs.core.deref(sort_state);
var map__28726__$1 = cljs.core.__destructure_map(map__28726);
var curr_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28726__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28726__$1,new cljs.core.Keyword(null,"desc?","desc?",-713120712));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.cursor-pointer.select-none.hover:bg-gray-100","th.px-4.py-2.text-left.cursor-pointer.select-none.hover:bg-gray-100",-1163653655),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_key,k)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sort_state,cljs.core.update,new cljs.core.Keyword(null,"desc?","desc?",-713120712),cljs.core.not);
} else {
return cljs.core.reset_BANG_(sort_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"desc?","desc?",-713120712),false], null));
}
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_key,k))?(cljs.core.truth_(desc_QMARK_)?" \u2193":" \u2191"):null)].join('')], null);
});
app.views.stress_test_results_view = (function app$views$stress_test_results_view(){
var sort_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"mos","mos",1902052264),new cljs.core.Keyword(null,"desc?","desc?",-713120712),false], null));
return (function (){
var st = cljs.core.deref(app.state.app_state);
var results = new cljs.core.Keyword(null,"stress-test-results","stress-test-results",-127451651).cljs$core$IFn$_invoke$arity$1(st);
var status = new cljs.core.Keyword(null,"stress-test-status","stress-test-status",-932570733).cljs$core$IFn$_invoke$arity$1(st);
var progress = new cljs.core.Keyword(null,"stress-test-progress","stress-test-progress",1552934606).cljs$core$IFn$_invoke$arity$1(st);
var map__28737 = cljs.core.deref(sort_state);
var map__28737__$1 = cljs.core.__destructure_map(map__28737);
var curr_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28737__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var desc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28737__$1,new cljs.core.Keyword(null,"desc?","desc?",-713120712));
var sorted_results = (function (){var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(curr_key,results);
if(cljs.core.truth_(desc_QMARK_)){
return cljs.core.reverse(sorted);
} else {
return sorted;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running","running",1554969103)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6","div.mb-6",-1954659128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.mb-1","p.text-sm.mb-1",1686509503),["Running simulations: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-gray-200.rounded-full.h-2","div.w-full.bg-gray-200.rounded-full.h-2",201567729),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-blue-600.h-2.rounded-full","div.bg-blue-600.h-2.rounded-full",-1057178387),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress) > (0)))?((100) * (new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress) / new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress))):(0))),"%"].join('')], null)], null)], null)], null)], null):null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.mb-4","h2.text-xl.font-bold.mb-4",-988997653),"Results Summary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.stress_test_charts,results], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.border.rounded-lg.shadow-sm.mt-8","div.overflow-x-auto.border.rounded-lg.shadow-sm.mt-8",1952820883),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.min-w-full.divide-y.divide-gray-200.text-sm","table.min-w-full.divide-y.divide-gray-200.text-sm",-810482796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.bg-gray-50","thead.bg-gray-50",86935040),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"mOS",new cljs.core.Keyword(null,"mos","mos",1902052264),sort_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"k",new cljs.core.Keyword(null,"k","k",-2146297393),sort_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"p_joint",new cljs.core.Keyword(null,"p_joint","p_joint",1098754735),sort_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"E[IA]",new cljs.core.Keyword(null,"expected_ev_ia","expected_ev_ia",-70245782),sort_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"E[Upd]",new cljs.core.Keyword(null,"expected_inc_upd","expected_inc_upd",111886599),sort_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"E[PR3]",new cljs.core.Keyword(null,"expected_inc_pr3","expected_inc_pr3",1043830871),sort_state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.sortable_header,"Residual",new cljs.core.Keyword(null,"residual","residual",2138156039),sort_state], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.divide-y.divide-gray-200.bg-white","tbody.divide-y.divide-gray-200.bg-white",949897439),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$views$stress_test_results_view_$_iter__28766(s__28767){
return (new cljs.core.LazySeq(null,(function (){
var s__28767__$1 = s__28767;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28767__$1);
if(temp__5825__auto__){
var s__28767__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28767__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28767__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28769 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28768 = (0);
while(true){
if((i__28768 < size__5502__auto__)){
var r = cljs.core._nth(c__5501__auto__,i__28768);
cljs.core.chunk_append(b__28769,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"mos","mos",1902052264).cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * new cljs.core.Keyword(null,"p_joint","p_joint",1098754735).cljs$core$IFn$_invoke$arity$1(r)).toFixed((2))),"%"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"expected_ev_ia","expected_ev_ia",-70245782).cljs$core$IFn$_invoke$arity$1(r).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"expected_inc_upd","expected_inc_upd",111886599).cljs$core$IFn$_invoke$arity$1(r).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"expected_inc_pr3","expected_inc_pr3",1043830871).cljs$core$IFn$_invoke$arity$1(r).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"residual","residual",2138156039).cljs$core$IFn$_invoke$arity$1(r).toFixed((2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mos","mos",1902052264).cljs$core$IFn$_invoke$arity$1(r)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(r))].join('')], null)));

var G__28854 = (i__28768 + (1));
i__28768 = G__28854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28769),app$views$stress_test_results_view_$_iter__28766(cljs.core.chunk_rest(s__28767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28769),null);
}
} else {
var r = cljs.core.first(s__28767__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"mos","mos",1902052264).cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * new cljs.core.Keyword(null,"p_joint","p_joint",1098754735).cljs$core$IFn$_invoke$arity$1(r)).toFixed((2))),"%"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"expected_ev_ia","expected_ev_ia",-70245782).cljs$core$IFn$_invoke$arity$1(r).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"expected_inc_upd","expected_inc_upd",111886599).cljs$core$IFn$_invoke$arity$1(r).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"expected_inc_pr3","expected_inc_pr3",1043830871).cljs$core$IFn$_invoke$arity$1(r).toFixed((1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2","td.px-4.py-2",733994900),new cljs.core.Keyword(null,"residual","residual",2138156039).cljs$core$IFn$_invoke$arity$1(r).toFixed((2))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mos","mos",1902052264).cljs$core$IFn$_invoke$arity$1(r)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(r))].join('')], null)),app$views$stress_test_results_view_$_iter__28766(cljs.core.rest(s__28767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(sorted_results);
})())], null)], null)], null)], null):null)], null);
});
});
app.views.placebo_explanation_view = (function app$views$placebo_explanation_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6.rounded-xl.border.mb-6","div.p-6.rounded-xl.border.mb-6",-1363480587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-gradient-to-r","from-blue-50","to-indigo-50","border-blue-100"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.text-blue-900.mb-3","h3.text-lg.font-bold.text-blue-900.mb-3",177285451),"Methodology & Interpretation Guide"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-blue-950.mb-4","p.text-sm.text-blue-950.mb-4",2010633408),"This stress test evaluates the likelihood of observed clinical trial ","milestones under the Null Hypothesis (H0) that both treatment (GPS) and ","control (BAT) arms have identical survival profiles."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-6.text-xs.text-blue-900","div.grid.grid-cols-1.md:grid-cols-2.gap-6.text-xs.text-blue-900",1487919964),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.font-semibold.text-blue-950.mb-2","h4.font-semibold.text-blue-950.mb-2",-1399064039),"Observed Stress Milestones:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-disc.pl-4.space-y-1","ul.list-disc.pl-4.space-y-1",-1115250758),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Passed IA Gate:"], null)," Blinded pooled median OS > 12m at IA, and ","estimated Hazard Ratio < 1.0 (approximated by GPS event count)."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Interim Analysis:"], null)," Event count at month 46 is \u2264 60 events."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Deceleration:"], null)," Incremental events between months 46 and 58 is \u2264 12 events."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Extension:"], null)," Incremental events between months 58 and 63 is \u2264 6 events."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.font-semibold.text-blue-950.mb-2","h4.font-semibold.text-blue-950.mb-2",-1399064039),"Key Metrics Explained:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-disc.pl-4.space-y-1","ul.list-disc.pl-4.space-y-1",-1115250758),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"p_joint:"], null)," The probability of a trial meeting ALL five stress ","milestones simultaneously under H0. A low value (e.g. < 5%) suggests ","H0 is highly unlikely."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Expected Events:"], null)," The average event counts at each milestone across all simulations."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Residual:"], null)," The maximum absolute discrepancy between the ","simulated expected events and actual observed events."], null)], null)], null)], null)], null);
});
app.views.placebo_stress_view = (function app$views$placebo_stress_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-6.max-w-6xl.mx-auto","div.p-6.max-w-6xl.mx-auto",812290131),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-extrabold.text-gray-800.mb-2","h1.text-3xl.font-extrabold.text-gray-800.mb-2",-1735397066),"Placebo Stress Test"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-600.mb-6","p.text-gray-600.mb-6",1530133303),"Assess the likelihood of observed trial milestones under various ","Null Hypothesis (H0) scenarios."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.placebo_explanation_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.stress_test_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.stress_test_results_view], null)], null);
});
app.views.discovery_view = (function app$views$discovery_view(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.discovery.discovery_view], null);
});

//# sourceMappingURL=app.views.js.map
