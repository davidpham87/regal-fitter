goog.provide('app.ui.results');
var module$node_modules$$monaco_editor$react$dist$index=shadow.js.require("module$node_modules$$monaco_editor$react$dist$index", {});
app.ui.results.stage2_progress = (function app$ui$results$stage2_progress(progress){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Running Stage 2..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.w-full","progress.w-full",-466793801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress))+" combos simulated")], null)], null);
});
app.ui.results.translate_keys = (function app$ui$results$translate_keys(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function app$ui$results$translate_keys_$_iter__27213(s__27214){
return (new cljs.core.LazySeq(null,(function (){
var s__27214__$1 = s__27214;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27214__$1);
if(temp__5825__auto__){
var s__27214__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27214__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27214__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27216 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27215 = (0);
while(true){
if((i__27215 < size__5648__auto__)){
var vec__27220 = cljs.core._nth(c__5647__auto__,i__27215);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27220,(1),null);
cljs.core.chunk_append(b__27216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.results.translate_keys.call(null,v))], null));

var G__27352 = (i__27215 + (1));
i__27215 = G__27352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27216),app$ui$results$translate_keys_$_iter__27213(cljs.core.chunk_rest(s__27214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27216),null);
}
} else {
var vec__27224 = cljs.core.first(s__27214__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27224,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.results.translate_keys.call(null,v))], null),app$ui$results$translate_keys_$_iter__27213(cljs.core.rest(s__27214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(data);
})());
} else {
if(cljs.core.coll_QMARK_(data)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.ui.results.translate_keys,data);
} else {
return data;

}
}
});
app.ui.results.results_table = (function app$ui$results$results_table(family,items){
var sort_col = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sort_asc_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (family__$1,items__$1){
if(cljs.core.seq(items__$1)){
var keys_to_show = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27230_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27230_SHARP_,new cljs.core.Keyword(null,"family","family",-1313145692));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items__$1], 0)))));
var q = clojure.string.lower_case(clojure.string.trim(cljs.core.deref(filter_text)));
var filtered_items = ((clojure.string.blank_QMARK_(q))?items__$1:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.some((function (k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
return clojure.string.includes_QMARK_(clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))),q);
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
}),(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?cljs.core.compare:(function (p1__27232_SHARP_,p2__27231_SHARP_){
return cljs.core.compare(p2__27231_SHARP_,p1__27232_SHARP_);
})),filtered_items);
} else {
return filtered_items;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.sm:flex-row.gap-2.mb-3","div.flex.flex-col.sm:flex-row.gap-2.mb-3",-1732232976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:justify-between sm:items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.capitalize.text-gray-800","h3.text-lg.font-bold.capitalize.text-gray-800",-901247251),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(family__$1))+" Family Table")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full.sm:w-64","div.relative.w-full.sm:w-64",-916485454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-1.px-2.rounded.text-sm.w-full","input.border.p-1.px-2.rounded.text-sm.w-full",-1022830738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter rows...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27233_SHARP_){
return cljs.core.reset_BANG_(filter_text,p1__27233_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.border.rounded-lg.shadow-sm","div.overflow-x-auto.border.rounded-lg.shadow-sm",404497294),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.min-w-full.divide-y.divide-gray-200.text-sm","table.min-w-full.divide-y.divide-gray-200.text-sm",-810482796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.bg-gray-50","thead.bg-gray-50",86935040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5649__auto__ = (function app$ui$results$results_table_$_iter__27239(s__27240){
return (new cljs.core.LazySeq(null,(function (){
var s__27240__$1 = s__27240;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27240__$1);
if(temp__5825__auto__){
var s__27240__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27240__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27240__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27242 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27241 = (0);
while(true){
if((i__27241 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__27241);
cljs.core.chunk_append(b__27242,(function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27241,is_active_sort_QMARK_,k,c__5647__auto__,size__5648__auto__,b__27242,s__27240__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(i__27241,is_active_sort_QMARK_,k,c__5647__auto__,size__5648__auto__,b__27242,s__27240__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})());

var G__27357 = (i__27241 + (1));
i__27241 = G__27357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27242),app$ui$results$results_table_$_iter__27239(cljs.core.chunk_rest(s__27240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27242),null);
}
} else {
var k = cljs.core.first(s__27240__$2);
return cljs.core.cons((function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_active_sort_QMARK_,k,s__27240__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(is_active_sort_QMARK_,k,s__27240__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})(),app$ui$results$results_table_$_iter__27239(cljs.core.rest(s__27240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(keys_to_show);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.divide-y.divide-gray-200.bg-white","tbody.divide-y.divide-gray-200.bg-white",949897439),((cljs.core.empty_QMARK_(sorted_items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-8.text-center.text-gray-500","td.px-4.py-8.text-center.text-gray-500",-1635436609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),cljs.core.count(keys_to_show)], null),"No matching combinations found."], null)], null):(function (){var iter__5649__auto__ = (function app$ui$results$results_table_$_iter__27248(s__27249){
return (new cljs.core.LazySeq(null,(function (){
var s__27249__$1 = s__27249;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27249__$1);
if(temp__5825__auto__){
var s__27249__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27249__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27249__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27251 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27250 = (0);
while(true){
if((i__27250 < size__5648__auto__)){
var vec__27253 = cljs.core._nth(c__5647__auto__,i__27250);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27253,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27253,(1),null);
cljs.core.chunk_append(b__27251,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5649__auto__ = ((function (i__27250,vec__27253,idx,item,c__5647__auto__,size__5648__auto__,b__27251,s__27249__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results$results_table_$_iter__27248_$_iter__27256(s__27257){
return (new cljs.core.LazySeq(null,((function (i__27250,vec__27253,idx,item,c__5647__auto__,size__5648__auto__,b__27251,s__27249__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
var s__27257__$1 = s__27257;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27257__$1);
if(temp__5825__auto____$1){
var s__27257__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27257__$2)){
var c__5647__auto____$1 = cljs.core.chunk_first(s__27257__$2);
var size__5648__auto____$1 = cljs.core.count(c__5647__auto____$1);
var b__27259 = cljs.core.chunk_buffer(size__5648__auto____$1);
if((function (){var i__27258 = (0);
while(true){
if((i__27258 < size__5648__auto____$1)){
var k = cljs.core._nth(c__5647__auto____$1,i__27258);
cljs.core.chunk_append(b__27259,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__27359 = (i__27258 + (1));
i__27258 = G__27359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27259),app$ui$results$results_table_$_iter__27248_$_iter__27256(cljs.core.chunk_rest(s__27257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27259),null);
}
} else {
var k = cljs.core.first(s__27257__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results$results_table_$_iter__27248_$_iter__27256(cljs.core.rest(s__27257__$2)));
}
} else {
return null;
}
break;
}
});})(i__27250,vec__27253,idx,item,c__5647__auto__,size__5648__auto__,b__27251,s__27249__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
,null,null));
});})(i__27250,vec__27253,idx,item,c__5647__auto__,size__5648__auto__,b__27251,s__27249__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5649__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__27362 = (i__27250 + (1));
i__27250 = G__27362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27251),app$ui$results$results_table_$_iter__27248(cljs.core.chunk_rest(s__27249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27251),null);
}
} else {
var vec__27260 = cljs.core.first(s__27249__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27260,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27260,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5649__auto__ = ((function (vec__27260,idx,item,s__27249__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results$results_table_$_iter__27248_$_iter__27263(s__27264){
return (new cljs.core.LazySeq(null,(function (){
var s__27264__$1 = s__27264;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__27264__$1);
if(temp__5825__auto____$1){
var s__27264__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27264__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27264__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27266 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27265 = (0);
while(true){
if((i__27265 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__27265);
cljs.core.chunk_append(b__27266,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__27363 = (i__27265 + (1));
i__27265 = G__27363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27266),app$ui$results$results_table_$_iter__27248_$_iter__27263(cljs.core.chunk_rest(s__27264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27266),null);
}
} else {
var k = cljs.core.first(s__27264__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results$results_table_$_iter__27248_$_iter__27263(cljs.core.rest(s__27264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27260,idx,item,s__27249__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5649__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),app$ui$results$results_table_$_iter__27248(cljs.core.rest(s__27249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,sorted_items));
})())], null)], null)], null)], null);
} else {
return null;
}
});
});
app.ui.results.results_edn_view = (function app$ui$results$results_edn_view(results){
var translated = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function app$ui$results$results_edn_view_$_iter__27267(s__27268){
return (new cljs.core.LazySeq(null,(function (){
var s__27268__$1 = s__27268;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27268__$1);
if(temp__5825__auto__){
var s__27268__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27268__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27268__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27270 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27269 = (0);
while(true){
if((i__27269 < size__5648__auto__)){
var vec__27271 = cljs.core._nth(c__5647__auto__,i__27269);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(1),null);
cljs.core.chunk_append(b__27270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.results.translate_keys(items)], null));

var G__27368 = (i__27269 + (1));
i__27269 = G__27368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27270),app$ui$results$results_edn_view_$_iter__27267(cljs.core.chunk_rest(s__27268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27270),null);
}
} else {
var vec__27274 = cljs.core.first(s__27268__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.results.translate_keys(items)], null),app$ui$results$results_edn_view_$_iter__27267(cljs.core.rest(s__27268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(results);
})());
var edn_str = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27277_27369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27278_27370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27279_27371 = true;
var _STAR_print_fn_STAR__temp_val__27280_27372 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27279_27371);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27280_27372);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(translated);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27278_27370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27277_27369);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-2","h3.text-lg.font-bold.mb-2",-470954290),"EDN View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-lg.overflow-hidden","div.border.rounded-lg.overflow-hidden",-1188737018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"vs-dark",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null),new cljs.core.Keyword(null,"value","value",305978217),edn_str], null)], null)], null)], null);
});
app.ui.results.results_view = (function app$ui$results$results_view(){
var map__27281 = cljs.core.deref(app.state.app_state);
var map__27281__$1 = cljs.core.__destructure_map(map__27281);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27281__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27281__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27281__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var with_let27282 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let27282","with-let27282",1067895821));
var temp__5829__auto___27373 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___27373 == null)){
} else {
var c__24531__auto___27374 = temp__5829__auto___27373;
if((with_let27282.generation === c__24531__auto___27374.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let27282.generation = c__24531__auto___27374.ratomGeneration);
}

var init27283 = (with_let27282.length === (0));
var active_tab = ((((init27283) || (cljs.core.not(with_let27282.hasOwnProperty((0))))))?(with_let27282[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"charts","charts",555258811))):(with_let27282[(0)]));
var res27284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.results-view-wrapper","div.p-4.results-view-wrapper",-1310678659),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mb-4","div.flex.justify-between.items-center.mb-4",-1518531499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.results-charts-container","h2.text-xl.font-bold.results-charts-container",1033258931),"Results"], null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.bg-gray-100.p-1.rounded-lg","div.flex.gap-2.bg-gray-100.p-1.rounded-lg",963613211),(function (){var iter__5649__auto__ = (function app$ui$results$results_view_$_iter__27295(s__27296){
return (new cljs.core.LazySeq(null,(function (){
var s__27296__$1 = s__27296;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27296__$1);
if(temp__5825__auto__){
var s__27296__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27296__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27296__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27298 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27297 = (0);
while(true){
if((i__27297 < size__5648__auto__)){
var vec__27305 = cljs.core._nth(c__5647__auto__,i__27297);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27305,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27305,(1),null);
cljs.core.chunk_append(b__27298,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27297,vec__27305,tab,label,c__5647__auto__,size__5648__auto__,b__27298,s__27296__$2,temp__5825__auto__,init27283,active_tab,with_let27282,map__27281,map__27281__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(i__27297,vec__27305,tab,label,c__5647__auto__,size__5648__auto__,b__27298,s__27296__$2,temp__5825__auto__,init27283,active_tab,with_let27282,map__27281,map__27281__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)));

var G__27375 = (i__27297 + (1));
i__27297 = G__27375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27298),app$ui$results$results_view_$_iter__27295(cljs.core.chunk_rest(s__27296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27298),null);
}
} else {
var vec__27309 = cljs.core.first(s__27296__$2);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27309,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27309,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27309,tab,label,s__27296__$2,temp__5825__auto__,init27283,active_tab,with_let27282,map__27281,map__27281__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(vec__27309,tab,label,s__27296__$2,temp__5825__auto__,init27283,active_tab,with_let27282,map__27281,map__27281__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)),app$ui$results$results_view_$_iter__27295(cljs.core.rest(s__27296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),"Charts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),"Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),"EDN View"], null)], null));
})()], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.stage2_progress,progress], null):((cljs.core.seq(results))?(function (){var G__27318 = cljs.core.deref(active_tab);
var G__27318__$1 = (((G__27318 instanceof cljs.core.Keyword))?G__27318.fqn:null);
switch (G__27318__$1) {
case "charts":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5649__auto__ = (function app$ui$results$results_view_$_iter__27319(s__27320){
return (new cljs.core.LazySeq(null,(function (){
var s__27320__$1 = s__27320;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27320__$1);
if(temp__5825__auto__){
var s__27320__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27320__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27320__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27322 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27321 = (0);
while(true){
if((i__27321 < size__5648__auto__)){
var vec__27325 = cljs.core._nth(c__5647__auto__,i__27321);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325,(1),null);
cljs.core.chunk_append(b__27322,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__27377 = (i__27321 + (1));
i__27321 = G__27377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27322),app$ui$results$results_view_$_iter__27319(cljs.core.chunk_rest(s__27320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27322),null);
}
} else {
var vec__27329 = cljs.core.first(s__27320__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results$results_view_$_iter__27319(cljs.core.rest(s__27320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(results);
})()], null);

break;
case "table":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5649__auto__ = (function app$ui$results$results_view_$_iter__27336(s__27337){
return (new cljs.core.LazySeq(null,(function (){
var s__27337__$1 = s__27337;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27337__$1);
if(temp__5825__auto__){
var s__27337__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27337__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__27337__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__27339 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__27338 = (0);
while(true){
if((i__27338 < size__5648__auto__)){
var vec__27341 = cljs.core._nth(c__5647__auto__,i__27338);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(1),null);
cljs.core.chunk_append(b__27339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__27378 = (i__27338 + (1));
i__27338 = G__27378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27339),app$ui$results$results_view_$_iter__27336(cljs.core.chunk_rest(s__27337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27339),null);
}
} else {
var vec__27346 = cljs.core.first(s__27337__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27346,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27346,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results$results_view_$_iter__27336(cljs.core.rest(s__27337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(results);
})()], null);

break;
case "edn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.results_edn_view,results], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27318__$1))));

}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500","div.text-gray-500",-827790885),"Run a simulation to see results."], null)
))], null);
return res27284;
});

//# sourceMappingURL=app.ui.results.js.map
