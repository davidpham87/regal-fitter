goog.provide('app.ui.results');
var module$node_modules$$monaco_editor$react$dist$index=shadow.js.require("module$node_modules$$monaco_editor$react$dist$index", {});
app.ui.results.stage2_progress = (function app$ui$results$stage2_progress(progress){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Running Stage 2..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.w-full","progress.w-full",-466793801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm","p.text-sm",-1988028746),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(progress))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress))+" combos simulated")], null)], null);
});
app.ui.results.translate_keys = (function app$ui$results$translate_keys(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function app$ui$results$translate_keys_$_iter__28081(s__28082){
return (new cljs.core.LazySeq(null,(function (){
var s__28082__$1 = s__28082;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28082__$1);
if(temp__5825__auto__){
var s__28082__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28082__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28082__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28084 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28083 = (0);
while(true){
if((i__28083 < size__5648__auto__)){
var vec__28089 = cljs.core._nth(c__5647__auto__,i__28083);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(1),null);
cljs.core.chunk_append(b__28084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.results.translate_keys.call(null,v))], null));

var G__28384 = (i__28083 + (1));
i__28083 = G__28384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28084),app$ui$results$translate_keys_$_iter__28081(cljs.core.chunk_rest(s__28082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28084),null);
}
} else {
var vec__28102 = cljs.core.first(s__28082__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.translate_keys.cljs$core$IFn$_invoke$arity$1(v) : app.ui.results.translate_keys.call(null,v))], null),app$ui$results$translate_keys_$_iter__28081(cljs.core.rest(s__28082__$2)));
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
var keys_to_show = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28109_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28109_SHARP_,new cljs.core.Keyword(null,"family","family",-1313145692));
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
}),(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?cljs.core.compare:(function (p1__28130_SHARP_,p2__28129_SHARP_){
return cljs.core.compare(p2__28129_SHARP_,p1__28130_SHARP_);
})),filtered_items);
} else {
return filtered_items;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8","div.mb-8",255255619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.sm:flex-row.gap-2.mb-3","div.flex.flex-col.sm:flex-row.gap-2.mb-3",-1732232976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:justify-between sm:items-center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.capitalize.text-gray-800","h3.text-lg.font-bold.capitalize.text-gray-800",-901247251),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(family__$1))+" Family Table")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full.sm:w-64","div.relative.w-full.sm:w-64",-916485454),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-1.px-2.rounded.text-sm.w-full","input.border.p-1.px-2.rounded.text-sm.w-full",-1022830738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter rows...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28132_SHARP_){
return cljs.core.reset_BANG_(filter_text,p1__28132_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto.border.rounded-lg.shadow-sm","div.overflow-x-auto.border.rounded-lg.shadow-sm",404497294),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.min-w-full.divide-y.divide-gray-200.text-sm","table.min-w-full.divide-y.divide-gray-200.text-sm",-810482796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.bg-gray-50","thead.bg-gray-50",86935040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5649__auto__ = (function app$ui$results$results_table_$_iter__28154(s__28155){
return (new cljs.core.LazySeq(null,(function (){
var s__28155__$1 = s__28155;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28155__$1);
if(temp__5825__auto__){
var s__28155__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28155__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28155__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28157 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28156 = (0);
while(true){
if((i__28156 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__28156);
cljs.core.chunk_append(b__28157,(function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28156,is_active_sort_QMARK_,k,c__5647__auto__,size__5648__auto__,b__28157,s__28155__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(i__28156,is_active_sort_QMARK_,k,c__5647__auto__,size__5648__auto__,b__28157,s__28155__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})());

var G__28426 = (i__28156 + (1));
i__28156 = G__28426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28157),app$ui$results$results_table_$_iter__28154(cljs.core.chunk_rest(s__28155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28157),null);
}
} else {
var k = cljs.core.first(s__28155__$2);
return cljs.core.cons((function (){var is_active_sort_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_col),k);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-4.py-2.text-left.font-semibold.text-gray-600","th.px-4.py-2.text-left.font-semibold.text-gray-600",-1325717757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer select-none hover:bg-gray-100",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (is_active_sort_QMARK_,k,s__28155__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
if(is_active_sort_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_asc_QMARK_,cljs.core.not);
} else {
cljs.core.reset_BANG_(sort_col,k);

return cljs.core.reset_BANG_(sort_asc_QMARK_,true);
}
});})(is_active_sort_QMARK_,k,s__28155__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.ui.inputs.key__GT_label,k,cljs.core.name(k)),(((!(is_active_sort_QMARK_)))?"\u2195":(cljs.core.truth_(cljs.core.deref(sort_asc_QMARK_))?"\u25B2":"\u25BC"
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})(),app$ui$results$results_table_$_iter__28154(cljs.core.rest(s__28155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(keys_to_show);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.divide-y.divide-gray-200.bg-white","tbody.divide-y.divide-gray-200.bg-white",949897439),((cljs.core.empty_QMARK_(sorted_items))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-8.text-center.text-gray-500","td.px-4.py-8.text-center.text-gray-500",-1635436609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),cljs.core.count(keys_to_show)], null),"No matching combinations found."], null)], null):(function (){var iter__5649__auto__ = (function app$ui$results$results_table_$_iter__28177(s__28178){
return (new cljs.core.LazySeq(null,(function (){
var s__28178__$1 = s__28178;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28178__$1);
if(temp__5825__auto__){
var s__28178__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28178__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28178__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28180 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28179 = (0);
while(true){
if((i__28179 < size__5648__auto__)){
var vec__28185 = cljs.core._nth(c__5647__auto__,i__28179);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28185,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28185,(1),null);
cljs.core.chunk_append(b__28180,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5649__auto__ = ((function (i__28179,vec__28185,idx,item,c__5647__auto__,size__5648__auto__,b__28180,s__28178__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results$results_table_$_iter__28177_$_iter__28188(s__28189){
return (new cljs.core.LazySeq(null,((function (i__28179,vec__28185,idx,item,c__5647__auto__,size__5648__auto__,b__28180,s__28178__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function (){
var s__28189__$1 = s__28189;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28189__$1);
if(temp__5825__auto____$1){
var s__28189__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28189__$2)){
var c__5647__auto____$1 = cljs.core.chunk_first(s__28189__$2);
var size__5648__auto____$1 = cljs.core.count(c__5647__auto____$1);
var b__28191 = cljs.core.chunk_buffer(size__5648__auto____$1);
if((function (){var i__28190 = (0);
while(true){
if((i__28190 < size__5648__auto____$1)){
var k = cljs.core._nth(c__5647__auto____$1,i__28190);
cljs.core.chunk_append(b__28191,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__28435 = (i__28190 + (1));
i__28190 = G__28435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28191),app$ui$results$results_table_$_iter__28177_$_iter__28188(cljs.core.chunk_rest(s__28189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28191),null);
}
} else {
var k = cljs.core.first(s__28189__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results$results_table_$_iter__28177_$_iter__28188(cljs.core.rest(s__28189__$2)));
}
} else {
return null;
}
break;
}
});})(i__28179,vec__28185,idx,item,c__5647__auto__,size__5648__auto__,b__28180,s__28178__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
,null,null));
});})(i__28179,vec__28185,idx,item,c__5647__auto__,size__5648__auto__,b__28180,s__28178__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5649__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__28436 = (i__28179 + (1));
i__28179 = G__28436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28180),app$ui$results$results_table_$_iter__28177(cljs.core.chunk_rest(s__28178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28180),null);
}
} else {
var vec__28196 = cljs.core.first(s__28178__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28196,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28196,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.even_QMARK_(idx))?"bg-white":"bg-gray-50")], null),(function (){var iter__5649__auto__ = ((function (vec__28196,idx,item,s__28178__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text){
return (function app$ui$results$results_table_$_iter__28177_$_iter__28206(s__28207){
return (new cljs.core.LazySeq(null,(function (){
var s__28207__$1 = s__28207;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__28207__$1);
if(temp__5825__auto____$1){
var s__28207__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28207__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28207__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28209 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28208 = (0);
while(true){
if((i__28208 < size__5648__auto__)){
var k = cljs.core._nth(c__5647__auto__,i__28208);
cljs.core.chunk_append(b__28209,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__28438 = (i__28208 + (1));
i__28208 = G__28438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28209),app$ui$results$results_table_$_iter__28177_$_iter__28206(cljs.core.chunk_rest(s__28207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28209),null);
}
} else {
var k = cljs.core.first(s__28207__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-4.py-2.text-gray-700","td.px-4.py-2.text-gray-700",-97997177),(function (){var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k);
if(cljs.core.float_QMARK_(val)){
return val.toFixed((4));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),app$ui$results$results_table_$_iter__28177_$_iter__28206(cljs.core.rest(s__28207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__28196,idx,item,s__28178__$2,temp__5825__auto__,keys_to_show,q,filtered_items,sorted_items,sort_col,sort_asc_QMARK_,filter_text))
;
return iter__5649__auto__(keys_to_show);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),app$ui$results$results_table_$_iter__28177(cljs.core.rest(s__28178__$2)));
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
var translated = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function app$ui$results$results_edn_view_$_iter__28213(s__28214){
return (new cljs.core.LazySeq(null,(function (){
var s__28214__$1 = s__28214;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28214__$1);
if(temp__5825__auto__){
var s__28214__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28214__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28214__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28216 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28215 = (0);
while(true){
if((i__28215 < size__5648__auto__)){
var vec__28223 = cljs.core._nth(c__5647__auto__,i__28215);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28223,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28223,(1),null);
cljs.core.chunk_append(b__28216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.results.translate_keys(items)], null));

var G__28444 = (i__28215 + (1));
i__28215 = G__28444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28216),app$ui$results$results_edn_view_$_iter__28213(cljs.core.chunk_rest(s__28214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28216),null);
}
} else {
var vec__28226 = cljs.core.first(s__28214__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28226,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fam,app.ui.results.translate_keys(items)], null),app$ui$results$results_edn_view_$_iter__28213(cljs.core.rest(s__28214__$2)));
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
var _STAR_print_newline_STAR__orig_val__28229_28447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28230_28448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28231_28449 = true;
var _STAR_print_fn_STAR__temp_val__28232_28450 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28231_28449);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28232_28450);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(translated);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28230_28448);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28229_28447);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-2","h3.text-lg.font-bold.mb-2",-470954290),"EDN View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded-lg.overflow-hidden","div.border.rounded-lg.overflow-hidden",-1188737018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"clojure",new cljs.core.Keyword(null,"theme","theme",-1247880880),"vs-dark",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null),new cljs.core.Keyword(null,"value","value",305978217),edn_str], null)], null)], null)], null);
});
app.ui.results.results_view = (function app$ui$results$results_view(){
var map__28233 = cljs.core.deref(app.state.app_state);
var map__28233__$1 = cljs.core.__destructure_map(map__28233);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var with_let28234 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28234","with-let28234",-1418005155));
var temp__5829__auto___28451 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___28451 == null)){
} else {
var c__24531__auto___28452 = temp__5829__auto___28451;
if((with_let28234.generation === c__24531__auto___28452.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error((""+"Warning: The same with-let is being used more "+"than once in the same reactive context."));
} else {
}
} else {
}

(with_let28234.generation = c__24531__auto___28452.ratomGeneration);
}

var init28235 = (with_let28234.length === (0));
var active_tab = ((((init28235) || (cljs.core.not(with_let28234.hasOwnProperty((0))))))?(with_let28234[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"charts","charts",555258811))):(with_let28234[(0)]));
var res28236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.results-view-wrapper","div.p-4.results-view-wrapper",-1310678659),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center.mb-4","div.flex.justify-between.items-center.mb-4",-1518531499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.font-bold.results-charts-container","h2.text-xl.font-bold.results-charts-container",1033258931),"Results"], null),((cljs.core.seq(results))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.bg-gray-100.p-1.rounded-lg","div.flex.gap-2.bg-gray-100.p-1.rounded-lg",963613211),(function (){var iter__5649__auto__ = (function app$ui$results$results_view_$_iter__28238(s__28239){
return (new cljs.core.LazySeq(null,(function (){
var s__28239__$1 = s__28239;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28239__$1);
if(temp__5825__auto__){
var s__28239__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28239__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28239__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28241 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28240 = (0);
while(true){
if((i__28240 < size__5648__auto__)){
var vec__28245 = cljs.core._nth(c__5647__auto__,i__28240);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28245,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28245,(1),null);
cljs.core.chunk_append(b__28241,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28240,vec__28245,tab,label,c__5647__auto__,size__5648__auto__,b__28241,s__28239__$2,temp__5825__auto__,init28235,active_tab,with_let28234,map__28233,map__28233__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(i__28240,vec__28245,tab,label,c__5647__auto__,size__5648__auto__,b__28241,s__28239__$2,temp__5825__auto__,init28235,active_tab,with_let28234,map__28233,map__28233__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)));

var G__28457 = (i__28240 + (1));
i__28240 = G__28457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28241),app$ui$results$results_view_$_iter__28238(cljs.core.chunk_rest(s__28239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28241),null);
}
} else {
var vec__28248 = cljs.core.first(s__28239__$2);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28248,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28248,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-3.py-1.rounded-md.text-sm.transition-all","button.px-3.py-1.rounded-md.text-sm.transition-all",-1961890025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),tab))?"bg-white text-gray-800 shadow-sm font-semibold":"text-gray-600 hover:text-gray-800"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__28248,tab,label,s__28239__$2,temp__5825__auto__,init28235,active_tab,with_let28234,map__28233,map__28233__$1,results,progress,status){
return (function (){
return cljs.core.reset_BANG_(active_tab,tab);
});})(vec__28248,tab,label,s__28239__$2,temp__5825__auto__,init28235,active_tab,with_let28234,map__28233,map__28233__$1,results,progress,status))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab], null)),app$ui$results$results_view_$_iter__28238(cljs.core.rest(s__28239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811),"Charts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),"Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edn","edn",1317840885),"EDN View"], null)], null));
})()], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"running-stage2","running-stage2",-782139249)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.stage2_progress,progress], null):((cljs.core.seq(results))?(function (){var G__28253 = cljs.core.deref(active_tab);
var G__28253__$1 = (((G__28253 instanceof cljs.core.Keyword))?G__28253.fqn:null);
switch (G__28253__$1) {
case "charts":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5649__auto__ = (function app$ui$results$results_view_$_iter__28254(s__28255){
return (new cljs.core.LazySeq(null,(function (){
var s__28255__$1 = s__28255;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28255__$1);
if(temp__5825__auto__){
var s__28255__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28255__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28255__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28257 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28256 = (0);
while(true){
if((i__28256 < size__5648__auto__)){
var vec__28260 = cljs.core._nth(c__5647__auto__,i__28256);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28260,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28260,(1),null);
cljs.core.chunk_append(b__28257,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__28467 = (i__28256 + (1));
i__28256 = G__28467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28257),app$ui$results$results_view_$_iter__28254(cljs.core.chunk_rest(s__28255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28257),null);
}
} else {
var vec__28263 = cljs.core.first(s__28255__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28263,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28263,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.results_charts,cljs.core.name(fam),items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results$results_view_$_iter__28254(cljs.core.rest(s__28255__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5649__auto__ = (function app$ui$results$results_view_$_iter__28266(s__28267){
return (new cljs.core.LazySeq(null,(function (){
var s__28267__$1 = s__28267;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28267__$1);
if(temp__5825__auto__){
var s__28267__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28267__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28267__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28269 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28268 = (0);
while(true){
if((i__28268 < size__5648__auto__)){
var vec__28274 = cljs.core._nth(c__5647__auto__,i__28268);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28274,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28274,(1),null);
cljs.core.chunk_append(b__28269,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)));

var G__28470 = (i__28268 + (1));
i__28268 = G__28470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28269),app$ui$results$results_view_$_iter__28266(cljs.core.chunk_rest(s__28267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28269),null);
}
} else {
var vec__28291 = cljs.core.first(s__28267__$2);
var fam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28291,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28291,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.results.results_table,fam,items], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),fam], null)),app$ui$results$results_view_$_iter__28266(cljs.core.rest(s__28267__$2)));
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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28253__$1))));

}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-500","div.text-gray-500",-827790885),"Run a simulation to see results."], null)
))], null);
return res28236;
});

//# sourceMappingURL=app.ui.results.js.map
