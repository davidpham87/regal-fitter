goog.provide('cljs.pprint');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36150 = arguments.length;
var i__5898__auto___36151 = (0);
while(true){
if((i__5898__auto___36151 < len__5897__auto___36150)){
args__5903__auto__.push((arguments[i__5898__auto___36151]));

var G__36152 = (i__5898__auto___36151 + (1));
i__5898__auto___36151 = G__36152;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq35055){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35055));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36153 = arguments.length;
var i__5898__auto___36154 = (0);
while(true){
if((i__5898__auto___36154 < len__5897__auto___36153)){
args__5903__auto__.push((arguments[i__5898__auto___36154]));

var G__36155 = (i__5898__auto___36154 + (1));
i__5898__auto___36154 = G__36155;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq35056){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35056));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__35057 = cljs.core._EQ_;
var expr__35058 = c;
if(cljs.core.truth_((function (){var G__35060 = "\b";
var G__35061 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35060,G__35061) : pred__35057.call(null,G__35060,G__35061));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__35062 = " ";
var G__35063 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35062,G__35063) : pred__35057.call(null,G__35062,G__35063));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__35065 = "\t";
var G__35066 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35065,G__35066) : pred__35057.call(null,G__35065,G__35066));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__35068 = "\n";
var G__35069 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35068,G__35069) : pred__35057.call(null,G__35068,G__35069));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__35070 = "\f";
var G__35071 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35070,G__35071) : pred__35057.call(null,G__35070,G__35071));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__35072 = "\r";
var G__35073 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35072,G__35073) : pred__35057.call(null,G__35072,G__35073));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__35074 = "\"";
var G__35075 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35074,G__35075) : pred__35057.call(null,G__35074,G__35075));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__35076 = "\\";
var G__35077 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35076,G__35077) : pred__35057.call(null,G__35076,G__35077));
})())){
return "\\\\";
} else {
return (""+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36156 = arguments.length;
var i__5898__auto___36157 = (0);
while(true){
if((i__5898__auto___36157 < len__5897__auto___36156)){
args__5903__auto__.push((arguments[i__5898__auto___36157]));

var G__36158 = (i__5898__auto___36157 + (1));
i__5898__auto___36157 = G__36158;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq35080){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35080));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36159 = arguments.length;
var i__5898__auto___36160 = (0);
while(true){
if((i__5898__auto___36160 < len__5897__auto___36159)){
args__5903__auto__.push((arguments[i__5898__auto___36160]));

var G__36161 = (i__5898__auto___36160 + (1));
i__5898__auto___36160 = G__36161;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq35083){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35083));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((((!(isNaN(n)))) && ((((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__35090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090,(1),null);
var G__36162 = new_context;
var G__36163 = remainder;
var G__36164 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__36162;
lis__$1 = G__36163;
acc = G__36164;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__35097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35097,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__36165 = new_context;
var G__36166 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__36165;
acc = G__36166;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__35103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35103,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__36167 = new_context;
var G__36168 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__36167;
acc = G__36168;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function cljs$pprint$unzip_map_$_iter__35108(s__35109){
return (new cljs.core.LazySeq(null,(function (){
var s__35109__$1 = s__35109;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__35109__$1);
if(temp__5825__auto__){
var s__35109__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35109__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__35109__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__35111 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__35110 = (0);
while(true){
if((i__35110 < size__5648__auto__)){
var vec__35112 = cljs.core._nth(c__5647__auto__,i__35110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35112,(0),null);
var vec__35115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35112,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35115,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35115,(1),null);
cljs.core.chunk_append(b__35111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__36169 = (i__35110 + (1));
i__35110 = G__36169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35111),cljs$pprint$unzip_map_$_iter__35108(cljs.core.chunk_rest(s__35109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35111),null);
}
} else {
var vec__35118 = cljs.core.first(s__35109__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(0),null);
var vec__35121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__35108(cljs.core.rest(s__35109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function cljs$pprint$unzip_map_$_iter__35124(s__35125){
return (new cljs.core.LazySeq(null,(function (){
var s__35125__$1 = s__35125;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__35125__$1);
if(temp__5825__auto__){
var s__35125__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35125__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__35125__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__35127 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__35126 = (0);
while(true){
if((i__35126 < size__5648__auto__)){
var vec__35128 = cljs.core._nth(c__5647__auto__,i__35126);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35128,(0),null);
var vec__35131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35128,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(1),null);
cljs.core.chunk_append(b__35127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__36170 = (i__35126 + (1));
i__35126 = G__36170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35127),cljs$pprint$unzip_map_$_iter__35124(cljs.core.chunk_rest(s__35125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35127),null);
}
} else {
var vec__35134 = cljs.core.first(s__35125__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(0),null);
var vec__35137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__35124(cljs.core.rest(s__35125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function cljs$pprint$tuple_map_$_iter__35140(s__35141){
return (new cljs.core.LazySeq(null,(function (){
var s__35141__$1 = s__35141;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__35141__$1);
if(temp__5825__auto__){
var s__35141__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35141__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__35141__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__35143 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__35142 = (0);
while(true){
if((i__35142 < size__5648__auto__)){
var vec__35144 = cljs.core._nth(c__5647__auto__,i__35142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35144,(1),null);
cljs.core.chunk_append(b__35143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__36171 = (i__35142 + (1));
i__35142 = G__36171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35143),cljs$pprint$tuple_map_$_iter__35140(cljs.core.chunk_rest(s__35141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35143),null);
}
} else {
var vec__35147 = cljs.core.first(s__35141__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__35140(cljs.core.rest(s__35141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__36172 = (n - (1));
n = G__36172;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__36173 = (n + (1));
n = G__36173;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__35151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__35151) : test.call(null,G__35151));
})())))){
return pos;
} else {
var G__36174 = (pos + (1));
pos = G__36174;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_36175 = (function (pp){
var x__5519__auto__ = (((pp == null))?null:pp);
var m__5520__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__5520__auto__.call(null,pp));
} else {
var m__5518__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__5518__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_36175(pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__35152 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__35152) : sym.call(null,G__35152));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35182 = (function (writer,max_columns,fields,meta35183){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta35183 = meta35183;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint35182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35184,meta35183__$1){
var self__ = this;
var _35184__$1 = this;
return (new cljs.pprint.t_cljs$pprint35182(self__.writer,self__.max_columns,self__.fields,meta35183__$1));
}));

(cljs.pprint.t_cljs$pprint35182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35184){
var self__ = this;
var _35184__$1 = this;
return self__.meta35183;
}));

(cljs.pprint.t_cljs$pprint35182.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint35182.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint35182.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35185 = cljs.core._EQ_;
var expr__35186 = cljs.core.type(x);
if(cljs.core.truth_((pred__35185.cljs$core$IFn$_invoke$arity$2 ? pred__35185.cljs$core$IFn$_invoke$arity$2(String,expr__35186) : pred__35185.call(null,String,expr__35186)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35172_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35172_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__35185.cljs$core$IFn$_invoke$arity$2 ? pred__35185.cljs$core$IFn$_invoke$arity$2(Number,expr__35186) : pred__35185.call(null,Number,expr__35186)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35186))));
}
}
}));

(cljs.pprint.t_cljs$pprint35182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta35183","meta35183",-1572395639,null)], null);
}));

(cljs.pprint.t_cljs$pprint35182.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint35182.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35182");

(cljs.pprint.t_cljs$pprint35182.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.pprint/t_cljs$pprint35182");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint35182.
 */
cljs.pprint.__GT_t_cljs$pprint35182 = (function cljs$pprint$__GT_t_cljs$pprint35182(writer,max_columns,fields,meta35183){
return (new cljs.pprint.t_cljs$pprint35182(writer,max_columns,fields,meta35183));
});


cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__35181 = arguments.length;
switch (G__35181) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
return (new cljs.pprint.t_cljs$pprint35182(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35192,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35197 = k35192;
var G__35197__$1 = (((G__35197 instanceof cljs.core.Keyword))?G__35197.fqn:null);
switch (G__35197__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35192,else__5472__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35198){
var vec__35199 = p__35198;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35199,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35199,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.logical-block{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35191){
var self__ = this;
var G__35191__$1 = this;
return (new cljs.core.RecordIter((0),G__35191__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35193,other35194){
var self__ = this;
var this35193__$1 = this;
return (((!((other35194 == null)))) && ((((this35193__$1.constructor === other35194.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.parent,other35194.parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.section,other35194.section)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.start_col,other35194.start_col)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.indent,other35194.indent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.done_nl,other35194.done_nl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.intra_block_nl,other35194.intra_block_nl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.prefix,other35194.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.per_line_prefix,other35194.per_line_prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.suffix,other35194.suffix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.logical_block_callback,other35194.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35193__$1.__extmap,other35194.__extmap)))))))))))))))))))))))));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35192){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35207 = k35192;
var G__35207__$1 = (((G__35207 instanceof cljs.core.Keyword))?G__35207.fqn:null);
switch (G__35207__$1) {
case "parent":
case "section":
case "start-col":
case "indent":
case "done-nl":
case "intra-block-nl":
case "prefix":
case "per-line-prefix":
case "suffix":
case "logical-block-callback":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35192);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35191){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35208 = cljs.core.keyword_identical_QMARK_;
var expr__35209 = k__5478__auto__;
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__35209)))){
return (new cljs.pprint.logical_block(G__35191,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section","section",-300141526),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,G__35191,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__35191,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__35191,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__35191,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__35191,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__35191,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__35191,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__35191,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35208.cljs$core$IFn$_invoke$arity$2 ? pred__35208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__35209) : pred__35208.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__35209)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__35191,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35191),null));
}
}
}
}
}
}
}
}
}
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35191){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__35191,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__35195){
var extmap__5511__auto__ = (function (){var G__35213 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35195,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0));
if(cljs.core.record_QMARK_(G__35195)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35213);
} else {
return G__35213;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__35195),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__35195),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__36179 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__36179;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35216,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35220 = k35216;
var G__35220__$1 = (((G__35220 instanceof cljs.core.Keyword))?G__35220.fqn:null);
switch (G__35220__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35216,else__5472__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35221){
var vec__35222 = p__35221;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35222,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35222,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35215){
var self__ = this;
var G__35215__$1 = this;
return (new cljs.core.RecordIter((0),G__35215__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35217,other35218){
var self__ = this;
var this35217__$1 = this;
return (((!((other35218 == null)))) && ((((this35217__$1.constructor === other35218.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35217__$1.type_tag,other35218.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35217__$1.data,other35218.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35217__$1.trailing_white_space,other35218.trailing_white_space)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35217__$1.start_pos,other35218.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35217__$1.end_pos,other35218.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35217__$1.__extmap,other35218.__extmap)))))))))))))));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35216){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35225 = k35216;
var G__35225__$1 = (((G__35225 instanceof cljs.core.Keyword))?G__35225.fqn:null);
switch (G__35225__$1) {
case "type-tag":
case "data":
case "trailing-white-space":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35216);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35215){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35226 = cljs.core.keyword_identical_QMARK_;
var expr__35227 = k__5478__auto__;
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35227) : pred__35226.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35227)))){
return (new cljs.pprint.buffer_blob(G__35215,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__35227) : pred__35226.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__35227)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__35215,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__35227) : pred__35226.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__35227)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__35215,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35227) : pred__35226.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35227)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__35215,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35227) : pred__35226.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35227)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__35215,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35215),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35215){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__35215,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__35219){
var extmap__5511__auto__ = (function (){var G__35229 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35219,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__35219)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35229);
} else {
return G__35229;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__35219),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__35219),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__35219),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__35219),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__35219),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__34978__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__34978__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35231,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35235 = k35231;
var G__35235__$1 = (((G__35235 instanceof cljs.core.Keyword))?G__35235.fqn:null);
switch (G__35235__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35231,else__5472__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35236){
var vec__35237 = p__35236;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35237,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.nl-t{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35230){
var self__ = this;
var G__35230__$1 = this;
return (new cljs.core.RecordIter((0),G__35230__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35232,other35233){
var self__ = this;
var this35232__$1 = this;
return (((!((other35233 == null)))) && ((((this35232__$1.constructor === other35233.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35232__$1.type_tag,other35233.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35232__$1.type,other35233.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35232__$1.logical_block,other35233.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35232__$1.start_pos,other35233.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35232__$1.end_pos,other35233.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35232__$1.__extmap,other35233.__extmap)))))))))))))));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35231){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35240 = k35231;
var G__35240__$1 = (((G__35240 instanceof cljs.core.Keyword))?G__35240.fqn:null);
switch (G__35240__$1) {
case "type-tag":
case "type":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35231);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35230){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35241 = cljs.core.keyword_identical_QMARK_;
var expr__35242 = k__5478__auto__;
if(cljs.core.truth_((pred__35241.cljs$core$IFn$_invoke$arity$2 ? pred__35241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35242) : pred__35241.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35242)))){
return (new cljs.pprint.nl_t(G__35230,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35241.cljs$core$IFn$_invoke$arity$2 ? pred__35241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__35242) : pred__35241.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__35242)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__35230,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35241.cljs$core$IFn$_invoke$arity$2 ? pred__35241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35242) : pred__35241.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35242)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__35230,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35241.cljs$core$IFn$_invoke$arity$2 ? pred__35241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35242) : pred__35241.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35242)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__35230,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35241.cljs$core$IFn$_invoke$arity$2 ? pred__35241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35242) : pred__35241.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35242)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__35230,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35230),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35230){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__35230,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__35234){
var extmap__5511__auto__ = (function (){var G__35244 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35234,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__35234)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35244);
} else {
return G__35244;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__35234),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__35234),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__35234),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__35234),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__35234),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__34978__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__34978__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35246,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35250 = k35246;
var G__35250__$1 = (((G__35250 instanceof cljs.core.Keyword))?G__35250.fqn:null);
switch (G__35250__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35246,else__5472__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35251){
var vec__35252 = p__35251;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35252,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35252,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35245){
var self__ = this;
var G__35245__$1 = this;
return (new cljs.core.RecordIter((0),G__35245__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35247,other35248){
var self__ = this;
var this35247__$1 = this;
return (((!((other35248 == null)))) && ((((this35247__$1.constructor === other35248.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35247__$1.type_tag,other35248.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35247__$1.logical_block,other35248.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35247__$1.start_pos,other35248.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35247__$1.end_pos,other35248.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35247__$1.__extmap,other35248.__extmap)))))))))))));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35246){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35255 = k35246;
var G__35255__$1 = (((G__35255 instanceof cljs.core.Keyword))?G__35255.fqn:null);
switch (G__35255__$1) {
case "type-tag":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35246);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35245){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35256 = cljs.core.keyword_identical_QMARK_;
var expr__35257 = k__5478__auto__;
if(cljs.core.truth_((pred__35256.cljs$core$IFn$_invoke$arity$2 ? pred__35256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35257) : pred__35256.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35257)))){
return (new cljs.pprint.start_block_t(G__35245,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35256.cljs$core$IFn$_invoke$arity$2 ? pred__35256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35257) : pred__35256.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35257)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__35245,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35256.cljs$core$IFn$_invoke$arity$2 ? pred__35256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35257) : pred__35256.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35257)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__35245,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35256.cljs$core$IFn$_invoke$arity$2 ? pred__35256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35257) : pred__35256.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35257)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__35245,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35245),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35245){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__35245,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__35249){
var extmap__5511__auto__ = (function (){var G__35259 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35249,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__35249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35259);
} else {
return G__35259;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__35249),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__35249),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__35249),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__35249),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__34978__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__34978__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35261,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35265 = k35261;
var G__35265__$1 = (((G__35265 instanceof cljs.core.Keyword))?G__35265.fqn:null);
switch (G__35265__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35261,else__5472__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35266){
var vec__35267 = p__35266;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35267,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35267,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35260){
var self__ = this;
var G__35260__$1 = this;
return (new cljs.core.RecordIter((0),G__35260__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35262,other35263){
var self__ = this;
var this35262__$1 = this;
return (((!((other35263 == null)))) && ((((this35262__$1.constructor === other35263.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35262__$1.type_tag,other35263.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35262__$1.logical_block,other35263.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35262__$1.start_pos,other35263.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35262__$1.end_pos,other35263.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35262__$1.__extmap,other35263.__extmap)))))))))))));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35261){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35270 = k35261;
var G__35270__$1 = (((G__35270 instanceof cljs.core.Keyword))?G__35270.fqn:null);
switch (G__35270__$1) {
case "type-tag":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35261);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35260){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35271 = cljs.core.keyword_identical_QMARK_;
var expr__35272 = k__5478__auto__;
if(cljs.core.truth_((pred__35271.cljs$core$IFn$_invoke$arity$2 ? pred__35271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35272) : pred__35271.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35272)))){
return (new cljs.pprint.end_block_t(G__35260,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35271.cljs$core$IFn$_invoke$arity$2 ? pred__35271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35272) : pred__35271.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35272)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__35260,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35271.cljs$core$IFn$_invoke$arity$2 ? pred__35271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35272) : pred__35271.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35272)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__35260,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35271.cljs$core$IFn$_invoke$arity$2 ? pred__35271.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35272) : pred__35271.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35272)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__35260,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35260),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35260){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__35260,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__35264){
var extmap__5511__auto__ = (function (){var G__35274 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35264,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__35264)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35274);
} else {
return G__35274;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__35264),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__35264),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__35264),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__35264),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__34978__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__34978__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35276,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35280 = k35276;
var G__35280__$1 = (((G__35280 instanceof cljs.core.Keyword))?G__35280.fqn:null);
switch (G__35280__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35276,else__5472__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35282){
var vec__35283 = p__35282;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.indent-t{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35275){
var self__ = this;
var G__35275__$1 = this;
return (new cljs.core.RecordIter((0),G__35275__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35277,other35278){
var self__ = this;
var this35277__$1 = this;
return (((!((other35278 == null)))) && ((((this35277__$1.constructor === other35278.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.type_tag,other35278.type_tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.logical_block,other35278.logical_block)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.relative_to,other35278.relative_to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.offset,other35278.offset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.start_pos,other35278.start_pos)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.end_pos,other35278.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35277__$1.__extmap,other35278.__extmap)))))))))))))))));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35276){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35288 = k35276;
var G__35288__$1 = (((G__35288 instanceof cljs.core.Keyword))?G__35288.fqn:null);
switch (G__35288__$1) {
case "type-tag":
case "logical-block":
case "relative-to":
case "offset":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35276);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35275){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35289 = cljs.core.keyword_identical_QMARK_;
var expr__35290 = k__5478__auto__;
if(cljs.core.truth_((pred__35289.cljs$core$IFn$_invoke$arity$2 ? pred__35289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35290) : pred__35289.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__35290)))){
return (new cljs.pprint.indent_t(G__35275,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35289.cljs$core$IFn$_invoke$arity$2 ? pred__35289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35290) : pred__35289.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__35290)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__35275,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35289.cljs$core$IFn$_invoke$arity$2 ? pred__35289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__35290) : pred__35289.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__35290)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__35275,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35289.cljs$core$IFn$_invoke$arity$2 ? pred__35289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__35290) : pred__35289.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__35290)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__35275,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35289.cljs$core$IFn$_invoke$arity$2 ? pred__35289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35290) : pred__35289.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__35290)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__35275,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35289.cljs$core$IFn$_invoke$arity$2 ? pred__35289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35290) : pred__35289.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__35290)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__35275,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35275),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35275){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__35275,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__35279){
var extmap__5511__auto__ = (function (){var G__35292 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35279,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__35279)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35292);
} else {
return G__35292;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__35279),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__35279),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__35279),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__35279),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__35279),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__35279),null,cljs.core.not_empty(extmap__5511__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__34978__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__34978__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35299 = cljs.core.get_global_hierarchy;
return (fexpr__35299.cljs$core$IFn$_invoke$arity$0 ? fexpr__35299.cljs$core$IFn$_invoke$arity$0() : fexpr__35299.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__35296_SHARP_,p2__35295_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__35295_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5825__auto___36206 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5825__auto___36206)){
var cb_36207 = temp__5825__auto___36206;
(cb_36207.cljs$core$IFn$_invoke$arity$1 ? cb_36207.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_36207.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5825__auto___36208 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5825__auto___36208)){
var prefix_36209 = temp__5825__auto___36208;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_36209);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5825__auto___36210 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5825__auto___36210)){
var cb_36211 = temp__5825__auto___36210;
(cb_36211.cljs$core$IFn$_invoke$arity$1 ? cb_36211.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_36211.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5825__auto__)){
var suffix = temp__5825__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__35306 = cljs.core._EQ_;
var expr__35307 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__35306.cljs$core$IFn$_invoke$arity$2 ? pred__35306.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__35307) : pred__35306.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__35307)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__35306.cljs$core$IFn$_invoke$arity$2 ? pred__35306.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__35307) : pred__35306.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__35307)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35307))));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__5160__auto__){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__5160__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5823__auto___36212 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5823__auto___36212)){
var tws_36213 = temp__5823__auto___36212;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_36213);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__35313 = cljs.core.seq(tokens);
var chunk__35314 = null;
var count__35315 = (0);
var i__35316 = (0);
while(true){
if((i__35316 < count__35315)){
var token = chunk__35314.cljs$core$IIndexed$_nth$arity$2(null,i__35316);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5823__auto___36214 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5823__auto___36214)){
var tws_36215 = temp__5823__auto___36214;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_36215);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_36216 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__5160__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__5160__auto__)){
return tws_36216;
} else {
return and__5160__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_36216);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__36217 = seq__35313;
var G__36218 = chunk__35314;
var G__36219 = count__35315;
var G__36220 = (i__35316 + (1));
seq__35313 = G__36217;
chunk__35314 = G__36218;
count__35315 = G__36219;
i__35316 = G__36220;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__35313);
if(temp__5825__auto__){
var seq__35313__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35313__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__35313__$1);
var G__36225 = cljs.core.chunk_rest(seq__35313__$1);
var G__36226 = c__5694__auto__;
var G__36227 = cljs.core.count(c__5694__auto__);
var G__36228 = (0);
seq__35313 = G__36225;
chunk__35314 = G__36226;
count__35315 = G__36227;
i__35316 = G__36228;
continue;
} else {
var token = cljs.core.first(seq__35313__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5823__auto___36229 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5823__auto___36229)){
var tws_36230 = temp__5823__auto___36229;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_36230);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_36231 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__5160__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__5160__auto__)){
return tws_36231;
} else {
return and__5160__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_36231);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__36232 = cljs.core.next(seq__35313__$1);
var G__36233 = null;
var G__36234 = (0);
var G__36235 = (0);
seq__35313 = G__36232;
chunk__35314 = G__36233;
count__35315 = G__36234;
i__35316 = G__36235;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__5162__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__5160__auto__ = miser_width;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = maxcol;
if(cljs.core.truth_(and__5160__auto____$1)){
var and__5160__auto____$2 = (cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__5160__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35321 = cljs.core.get_global_hierarchy;
return (fexpr__35321.cljs$core$IFn$_invoke$arity$0 ? fexpr__35321.cljs$core$IFn$_invoke$arity$0() : fexpr__35321.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__5162__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35322_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__35322_SHARP_)) && (cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__35322_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35323_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__35323_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__35323_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__36242 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__36242;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_36243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_36243);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35332_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__35332_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__35336 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35336,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35336,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__35339 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35339,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35339,(1),null);
var newl = cljs.core.first(b);
var do_nl = cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(newl,this$,section,cljs.pprint.get_sub_section(b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__36245 = new_buffer;
buffer = G__36245;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5823__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5823__auto__)){
var buf = temp__5823__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5825__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5825__auto__)){
var tws = temp__5825__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_36246 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_36247 = (oldpos_36246 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_36247);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_36246,newpos_36247));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__35345_36248 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__35346_36249 = null;
var count__35347_36250 = (0);
var i__35348_36251 = (0);
while(true){
if((i__35348_36251 < count__35347_36250)){
var l_36256__$1 = chunk__35346_36249.cljs$core$IIndexed$_nth$arity$2(null,i__35348_36251);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_36256__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__36257 = seq__35345_36248;
var G__36258 = chunk__35346_36249;
var G__36259 = count__35347_36250;
var G__36260 = (i__35348_36251 + (1));
seq__35345_36248 = G__36257;
chunk__35346_36249 = G__36258;
count__35347_36250 = G__36259;
i__35348_36251 = G__36260;
continue;
} else {
var temp__5825__auto___36261 = cljs.core.seq(seq__35345_36248);
if(temp__5825__auto___36261){
var seq__35345_36262__$1 = temp__5825__auto___36261;
if(cljs.core.chunked_seq_QMARK_(seq__35345_36262__$1)){
var c__5694__auto___36263 = cljs.core.chunk_first(seq__35345_36262__$1);
var G__36264 = cljs.core.chunk_rest(seq__35345_36262__$1);
var G__36265 = c__5694__auto___36263;
var G__36266 = cljs.core.count(c__5694__auto___36263);
var G__36267 = (0);
seq__35345_36248 = G__36264;
chunk__35346_36249 = G__36265;
count__35347_36250 = G__36266;
i__35348_36251 = G__36267;
continue;
} else {
var l_36268__$1 = cljs.core.first(seq__35345_36262__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_36268__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__36269 = cljs.core.next(seq__35345_36262__$1);
var G__36270 = null;
var G__36271 = (0);
var G__36272 = (0);
seq__35345_36248 = G__36269;
chunk__35346_36249 = G__36270;
count__35347_36250 = G__36271;
i__35348_36251 = G__36272;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35349 = (function (writer,max_columns,miser_width,lb,fields,meta35350){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta35350 = meta35350;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint35349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35351,meta35350__$1){
var self__ = this;
var _35351__$1 = this;
return (new cljs.pprint.t_cljs$pprint35349(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta35350__$1));
}));

(cljs.pprint.t_cljs$pprint35349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35351){
var self__ = this;
var _35351__$1 = this;
return self__.meta35350;
}));

(cljs.pprint.t_cljs$pprint35349.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint35349.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35352 = cljs.core._EQ_;
var expr__35353 = cljs.core.type(x);
if(cljs.core.truth_((pred__35352.cljs$core$IFn$_invoke$arity$2 ? pred__35352.cljs$core$IFn$_invoke$arity$2(String,expr__35353) : pred__35352.call(null,String,expr__35353)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__35352.cljs$core$IFn$_invoke$arity$2 ? pred__35352.cljs$core$IFn$_invoke$arity$2(Number,expr__35353) : pred__35352.call(null,Number,expr__35353)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35353))));
}
}
}));

(cljs.pprint.t_cljs$pprint35349.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint35349.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint35349.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint35349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta35350","meta35350",1784095861,null)], null);
}));

(cljs.pprint.t_cljs$pprint35349.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint35349.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35349");

(cljs.pprint.t_cljs$pprint35349.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.pprint/t_cljs$pprint35349");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint35349.
 */
cljs.pprint.__GT_t_cljs$pprint35349 = (function cljs$pprint$__GT_t_cljs$pprint35349(writer,max_columns,miser_width,lb,fields,meta35350){
return (new cljs.pprint.t_cljs$pprint35349(writer,max_columns,miser_width,lb,fields,meta35350));
});


cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
return (new cljs.pprint.t_cljs$pprint35349(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5825__auto___36283 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5825__auto___36283)){
var cb_36284 = temp__5825__auto___36283;
(cb_36284.cljs$core$IFn$_invoke$arity$1 ? cb_36284.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_36284.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5825__auto___36285 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5825__auto___36285)){
var cb_36286 = temp__5825__auto___36285;
(cb_36286.cljs$core$IFn$_invoke$arity$1 ? cb_36286.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_36286.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}
} else {
var oldpos_36287 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_36288 = (oldpos_36287 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_36288);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_36287,newpos_36288));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__35363 = cljs.core._EQ_;
var expr__35364 = relative_to;
if(cljs.core.truth_((pred__35363.cljs$core$IFn$_invoke$arity$2 ? pred__35363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__35364) : pred__35363.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__35364)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__35363.cljs$core$IFn$_invoke$arity$2 ? pred__35363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__35364) : pred__35363.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__35364)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35364))));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35370_SHARP_){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__35370_SHARP_));
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__35370_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__5160__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__5160__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__5160__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__5160__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36293 = arguments.length;
var i__5898__auto___36294 = (0);
while(true){
if((i__5898__auto___36294 < len__5897__auto___36293)){
args__5903__auto__.push((arguments[i__5898__auto___36294]));

var G__36295 = (i__5898__auto___36294 + (1));
i__5898__auto___36294 = G__36295;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__35385 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__35386 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__35387 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35388 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__35389 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__35390 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__35391 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__35392 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__35393 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__35394 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__35395 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__35396 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__35397 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__35398 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__35399 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__35400 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__35401 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__35402 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__35403 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__35404 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__35405 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__35406 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__35407 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__35408 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__35397);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__35398);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35399);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35400);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__35401);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__35402);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__35403);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__35404);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__35405);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35406);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__35407);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__35408);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__34955__auto___36300 = base_writer;
var new_writer__34956__auto___36301 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__34955__auto___36300));
var _STAR_out_STAR__orig_val__35416_36302 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35417_36303 = ((new_writer__34956__auto___36301)?cljs.pprint.make_pretty_writer(base_writer__34955__auto___36300,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__34955__auto___36300);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35417_36303);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35416_36302);
}} else {
var _STAR_out_STAR__orig_val__35418_36304 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35419_36305 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35419_36305);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35418_36304);
}}

if(optval === true){
cljs.core.string_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
} else {
}

if((optval == null)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__35396);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__35395);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35394);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__35393);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__35392);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__35391);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__35390);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__35389);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35388);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35387);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__35386);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__35385);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq35372){
var G__35373 = cljs.core.first(seq35372);
var seq35372__$1 = cljs.core.next(seq35372);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35373,seq35372__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__35421 = arguments.length;
switch (G__35421) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__35429 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35430 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35430);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35429);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__34955__auto__ = writer;
var new_writer__34956__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__34955__auto__));
var _STAR_out_STAR__orig_val__35431 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35432 = ((new_writer__34956__auto__)?cljs.pprint.make_pretty_writer(base_writer__34955__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__34955__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35432);

try{var _STAR_print_pretty_STAR__orig_val__35433_36314 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__35434_36315 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__35434_36315);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__35433_36314);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35431);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error((""+"Bad argument: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+". It must be one of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices))));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__5160__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__5160__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__5160__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__5903__auto__ = [];
var len__5897__auto___36316 = arguments.length;
var i__5898__auto___36317 = (0);
while(true){
if((i__5898__auto___36317 < len__5897__auto___36316)){
args__5903__auto__.push((arguments[i__5898__auto___36317]));

var G__36318 = (i__5898__auto___36317 + (1));
i__5898__auto___36317 = G__36318;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator__$1 = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator__$1);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq35443){
var G__35444 = cljs.core.first(seq35443);
var seq35443__$1 = cljs.core.next(seq35443);
var G__35445 = cljs.core.first(seq35443__$1);
var seq35443__$2 = cljs.core.next(seq35443__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35444,G__35445,seq35443__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," ")))+"^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"));
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35450,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35460 = k35450;
var G__35460__$1 = (((G__35460 instanceof cljs.core.Keyword))?G__35460.fqn:null);
switch (G__35460__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35450,else__5472__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35465){
var vec__35466 = p__35465;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35449){
var self__ = this;
var G__35449__$1 = this;
return (new cljs.core.RecordIter((0),G__35449__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35451,other35452){
var self__ = this;
var this35451__$1 = this;
return (((!((other35452 == null)))) && ((((this35451__$1.constructor === other35452.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.seq,other35452.seq)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.rest,other35452.rest)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.pos,other35452.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.__extmap,other35452.__extmap)))))))))));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35450){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35481 = k35450;
var G__35481__$1 = (((G__35481 instanceof cljs.core.Keyword))?G__35481.fqn:null);
switch (G__35481__$1) {
case "seq":
case "rest":
case "pos":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35450);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35449){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35482 = cljs.core.keyword_identical_QMARK_;
var expr__35483 = k__5478__auto__;
if(cljs.core.truth_((pred__35482.cljs$core$IFn$_invoke$arity$2 ? pred__35482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__35483) : pred__35482.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__35483)))){
return (new cljs.pprint.arg_navigator(G__35449,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35482.cljs$core$IFn$_invoke$arity$2 ? pred__35482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__35483) : pred__35482.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__35483)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__35449,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35482.cljs$core$IFn$_invoke$arity$2 ? pred__35482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220),expr__35483) : pred__35482.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__35483)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__35449,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35449),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35449){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__35449,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__35453){
var extmap__5511__auto__ = (function (){var G__35496 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35453,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__35453)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35496);
} else {
return G__35496;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__35453),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__35453),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__35453),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__35507 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__35510 = navigator;
var G__35511 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__35510,G__35511) : cljs.pprint.relative_reposition.call(null,G__35510,G__35511));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k35528,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__35594 = k35528;
var G__35594__$1 = (((G__35594 instanceof cljs.core.Keyword))?G__35594.fqn:null);
switch (G__35594__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35528,else__5472__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__35598){
var vec__35599 = p__35598;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35527){
var self__ = this;
var G__35527__$1 = this;
return (new cljs.core.RecordIter((0),G__35527__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35529,other35530){
var self__ = this;
var this35529__$1 = this;
return (((!((other35530 == null)))) && ((((this35529__$1.constructor === other35530.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35529__$1.func,other35530.func)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35529__$1.def,other35530.def)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35529__$1.params,other35530.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35529__$1.offset,other35530.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35529__$1.__extmap,other35530.__extmap)))))))))))));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k35528){
var self__ = this;
var this__5476__auto____$1 = this;
var G__35602 = k35528;
var G__35602__$1 = (((G__35602 instanceof cljs.core.Keyword))?G__35602.fqn:null);
switch (G__35602__$1) {
case "func":
case "def":
case "params":
case "offset":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35528);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__35527){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__35603 = cljs.core.keyword_identical_QMARK_;
var expr__35604 = k__5478__auto__;
if(cljs.core.truth_((pred__35603.cljs$core$IFn$_invoke$arity$2 ? pred__35603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040),expr__35604) : pred__35603.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__35604)))){
return (new cljs.pprint.compiled_directive(G__35527,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35603.cljs$core$IFn$_invoke$arity$2 ? pred__35603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"def","def",-1043430536),expr__35604) : pred__35603.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__35604)))){
return (new cljs.pprint.compiled_directive(self__.func,G__35527,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35603.cljs$core$IFn$_invoke$arity$2 ? pred__35603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__35604) : pred__35603.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__35604)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__35527,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35603.cljs$core$IFn$_invoke$arity$2 ? pred__35603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__35604) : pred__35603.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__35604)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__35527,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__35527),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__35527){
var self__ = this;
var this__5468__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__35527,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__35548){
var extmap__5511__auto__ = (function (){var G__35606 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35548,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0));
if(cljs.core.record_QMARK_(G__35548)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35606);
} else {
return G__35606;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__35548),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__35548),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__35548),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__35548),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__35607,navigator){
var vec__35608 = p__35607;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35608,(0),null);
var vec__35611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35608,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611,(1),null);
var vec__35614 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35614,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__35617 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35617,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35617,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_)+"r");
}
})():null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n)));
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__35620 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35620,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35620,(1),null);
var base_output = (function (){var or__5162__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars))], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__35623_SHARP_){
if((p1__35623_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__35623_SHARP_,base),cljs.core.quot(p1__35623_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35624_SHARP_){
if((p1__35624_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__35624_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__35624_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__35626 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35626,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_36355 = (arg < (0));
var pos_arg_36356 = ((neg_36355)?(- arg):arg);
var raw_str_36357 = cljs.pprint.opt_base_str(base,pos_arg_36356);
var group_str_36358 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35625_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__35625_SHARP_);
}),cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_36357));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_36357);
var signed_str_36359 = ((neg_36355)?(""+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_36358)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(""+"+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_36358)):group_str_36358
));
var padded_str_36360 = (((signed_str_36359.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_36359.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_36359)):signed_str_36359);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_36360], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))+" hundred"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null)));
})()):null)));
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))):null)));
} else {
var G__36372 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset))))));
var G__36373 = (pos - (1));
var G__36374 = cljs.core.first(remainder);
var G__36375 = cljs.core.next(remainder);
acc = G__36372;
pos = G__36373;
this$ = G__36374;
remainder = G__36375;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__35635 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35635,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35635,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_36379 = (((arg < (0)))?(- arg):arg);
var parts_36380 = cljs.pprint.remainders((1000),abs_arg_36379);
if((cljs.core.count(parts_36380) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_36381 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_36380);
var full_str_36382 = cljs.pprint.add_english_scales(parts_strs_36381,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_36382))], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))+" hundred"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null)));
}
})()):(((hundreds > (0)))?"th":null))));
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__35639 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_36390 = (((arg < (0)))?(- arg):arg);
var parts_36391 = cljs.pprint.remainders((1000),abs_arg_36390);
if((cljs.core.count(parts_36391) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_36392 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_36391));
var head_str_36393 = cljs.pprint.add_english_scales(parts_strs_36392,(1));
var tail_str_36394 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_36391));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(head_str_36393)))) && ((!(cljs.core.empty_QMARK_(tail_str_36394))))))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_36393)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_36394)):(((!(cljs.core.empty_QMARK_(head_str_36393))))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_36393)+"th"):tail_str_36394
))))], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_36398 = cljs.core.rem(arg,(100));
var not_teens_36399 = ((((11) < low_two_digits_36398)) || (((19) > low_two_digits_36398)));
var low_digit_36400 = cljs.core.rem(low_two_digits_36398,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_36400 === (1))) && (not_teens_36399)))?"st":(((((low_digit_36400 === (2))) && (not_teens_36399)))?"nd":(((((low_digit_36400 === (3))) && (not_teens_36399)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__35644 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(1),null);
if(((typeof arg === 'number') && ((((arg > (0))) && ((arg < (4000))))))){
var digits_36401 = cljs.pprint.remainders((10),arg);
var acc_36402 = cljs.core.PersistentVector.EMPTY;
var pos_36403 = (cljs.core.count(digits_36401) - (1));
var digits_36404__$1 = digits_36401;
while(true){
if(cljs.core.empty_QMARK_(digits_36404__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_36402)], 0));
} else {
var digit_36405 = cljs.core.first(digits_36404__$1);
var G__36406 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_36405))?acc_36402:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_36402,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_36403),(digit_36405 - (1)))));
var G__36407 = (pos_36403 - (1));
var G__36408 = cljs.core.next(digits_36404__$1);
acc_36402 = G__36406;
pos_36403 = G__36407;
digits_36404__$1 = G__36408;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__35647 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?(""+"Control-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__35656 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(1),null);
var pred__35659_36416 = cljs.core._EQ_;
var expr__35660_36417 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__35664 = "o";
var G__35665 = expr__35660_36417;
return (pred__35659_36416.cljs$core$IFn$_invoke$arity$2 ? pred__35659_36416.cljs$core$IFn$_invoke$arity$2(G__35664,G__35665) : pred__35659_36416.call(null,G__35664,G__35665));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3,'0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__35673 = "u";
var G__35674 = expr__35660_36417;
return (pred__35659_36416.cljs$core$IFn$_invoke$arity$2 ? pred__35659_36416.cljs$core$IFn$_invoke$arity$2(G__35673,G__35674) : pred__35659_36416.call(null,G__35673,G__35674));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4,'0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__35659_36416.cljs$core$IFn$_invoke$arity$2 ? pred__35659_36416.cljs$core$IFn$_invoke$arity$2(null,expr__35660_36417) : pred__35659_36416.call(null,null,expr__35660_36417)))){
cljs.pprint.print_char(c);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35660_36417))));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__35681 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35681,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35681,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__35704 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35704,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35704,(1),null);
var vec__35707 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1))))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__35728 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | 0);
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__36421 = (i - (1));
i = G__36421;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__5162__auto__ = d;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?cljs.core.max.cljs$core$IFn$_invoke$arity$2((2),w):(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?cljs.core.max.cljs$core$IFn$_invoke$arity$2((e + (1)),(w__$1 - (1))):(w__$1 + e)
));
var vec__35731 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__35734 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0")))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35734,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35734,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0"))));
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return (""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m));
} else {
var loc = (e + (1));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)));
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return (""+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)));
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__35737 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35737,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35737,(1),null);
var vec__35740 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35740,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__35743 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35743,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35743,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__35746 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35746,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35746,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35746,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__5160__auto__ = w;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = d;
if(cljs.core.truth_(and__5160__auto____$1)){
return (((d >= (1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))))))));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_36424 = ((fixed_repr__$1).length);
var signed_len_36425 = (cljs.core.truth_(add_sign)?(len_36424 + (1)):len_36424);
var prepend_zero_36426__$1 = ((prepend_zero) && ((!((signed_len_36425 >= w)))));
var append_zero_36427__$1 = ((append_zero) && ((!((signed_len_36425 >= w)))));
var full_len_36428 = ((((prepend_zero_36426__$1) || (append_zero_36427__$1)))?(signed_len_36425 + (1)):signed_len_36425);
if(cljs.core.truth_((function (){var and__5160__auto__ = (full_len_36428 > w);
if(and__5160__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5160__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_36428),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_36426__$1)?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_36427__$1)?"0":null)))], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null)))], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__35750 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35750,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35750,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__35756_36429 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__35757_36430 = G__35756_36429;
var mantissa_36431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35757_36430,(0),null);
var exp_36432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35757_36430,(1),null);
var G__35756_36433__$1 = G__35756_36429;
while(true){
var vec__35760_36434 = G__35756_36433__$1;
var mantissa_36435__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760_36434,(0),null);
var exp_36436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35760_36434,(1),null);
var w_36437 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_36438 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_36439 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_36440 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_36441 = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "E";
}
})();
var add_sign_36442 = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_36443 = (k_36440 <= (0));
var scaled_exp_36444 = (exp_36436__$1 - (k_36440 - (1)));
var scaled_exp_str_36445 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_36444)));
var scaled_exp_str_36446__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_36441)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_36444 < (0)))?"-":"+"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_36439)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_36439 - ((scaled_exp_str_36445).length)),"0")):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_36445));
var exp_width_36447 = ((scaled_exp_str_36446__$1).length);
var base_mantissa_width_36448 = cljs.core.count(mantissa_36435__$1);
var scaled_mantissa_36449 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_36440),"0")))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_36435__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_36438)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_36438 - (base_mantissa_width_36448 - (1))) - (((k_36440 < (0)))?(- k_36440):(0))),"0")):null)));
var w_mantissa_36450 = (cljs.core.truth_(w_36437)?(w_36437 - exp_width_36447):null);
var vec__35763_36451 = cljs.pprint.round_str(scaled_mantissa_36449,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_36440,(0)))?(d_36438 - (1)):(((k_36440 > (0)))?d_36438:(((k_36440 < (0)))?(d_36438 - (1)):null))),(cljs.core.truth_(w_mantissa_36450)?(w_mantissa_36450 - (cljs.core.truth_(add_sign_36442)?(1):(0))):null));
var rounded_mantissa_36452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35763_36451,(0),null);
var __36453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35763_36451,(1),null);
var incr_exp_36454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35763_36451,(2),null);
var full_mantissa_36455 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_36452,k_36440);
var append_zero_36456 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_36440,cljs.core.count(rounded_mantissa_36452))) && ((d_36438 == null)));
if(cljs.core.not(incr_exp_36454)){
if(cljs.core.truth_(w_36437)){
var len_36457 = (((full_mantissa_36455).length) + exp_width_36447);
var signed_len_36458 = (cljs.core.truth_(add_sign_36442)?(len_36457 + (1)):len_36457);
var prepend_zero_36459__$1 = ((prepend_zero_36443) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_36458,w_36437)))));
var full_len_36460 = ((prepend_zero_36459__$1)?(signed_len_36458 + (1)):signed_len_36458);
var append_zero_36461__$1 = ((append_zero_36456) && ((full_len_36460 < w_36437)));
if(cljs.core.truth_((function (){var and__5160__auto__ = (function (){var or__5162__auto__ = (full_len_36460 > w_36437);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = e_36439;
if(cljs.core.truth_(and__5160__auto__)){
return ((exp_width_36447 - (2)) > e_36439);
} else {
return and__5160__auto__;
}
}
})();
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5160__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_36437,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_36437 - full_len_36460) - ((append_zero_36461__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_36442)?(((arg__$1 < (0)))?"-":"+"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_36459__$1)?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_36455)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_36461__$1)?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_36446__$1))], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_36442)?(((arg__$1 < (0)))?"-":"+"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_36443)?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_36455)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_36456)?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_36446__$1))], 0));
}
} else {
var G__36466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_36452,(exp_36436__$1 + (1))], null);
G__35756_36433__$1 = G__36466;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__35766 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35766,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35766,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__35769 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35769,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35769,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:cljs.core.max.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mantissa),cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,(7))));
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__35772 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35772,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35772,(1),null);
var vec__35775 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35775,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35775,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (arg < (0));
}
})();
var vec__35778 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0")))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr));
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5160__auto__)){
return add_sign;
} else {
return and__5160__auto__;
}
})())?(((arg < (0)))?"-":"+"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__5160__auto__){
return add_sign;
} else {
return and__5160__auto__;
}
})())?(((arg < (0)))?"-":"+"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr))], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__35781 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator__$1;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__35784 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35784,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35784,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator__$1;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__35787 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35787,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35787,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator__$1;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__35790 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(1),null);
var vec__35793 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35793,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | 0);
while(true){
if(((cljs.core.not(max_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__5162__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = max_count;
if(cljs.core.truth_(and__5160__auto__)){
return (count >= max_count);
} else {
return and__5160__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__36469 = (count + (1));
var G__36470 = iter_result;
var G__36471 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__36469;
args__$1 = G__36470;
last_pos = G__36471;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__35796 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796,(1),null);
var vec__35799 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35799,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35799,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__5162__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = max_count;
if(cljs.core.truth_(and__5160__auto__)){
return (count >= max_count);
} else {
return and__5160__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__36474 = (count + (1));
var G__36475 = cljs.core.next(arg_list__$1);
count = G__36474;
arg_list__$1 = G__36475;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__35802 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | 0);
while(true){
if(((cljs.core.not(max_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__5162__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = max_count;
if(cljs.core.truth_(and__5160__auto__)){
return (count >= max_count);
} else {
return and__5160__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__36476 = (count + (1));
var G__36477 = iter_result;
var G__36478 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__36476;
navigator__$2 = G__36477;
last_pos = G__36478;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__35805 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35805,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35805,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__5162__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var and__5160__auto__ = max_count;
if(cljs.core.truth_(and__5160__auto__)){
return (count >= max_count);
} else {
return and__5160__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__35811 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35811,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35811,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__36479 = (count + (1));
var G__36480 = navigator__$3;
count = G__36479;
navigator__$2 = G__36480;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__35819 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__35822 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35823 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35823);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb))], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35822);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__36482 = cljs.core.next(clauses__$1);
var G__36483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__36484 = iter_result;
clauses__$1 = G__36482;
acc = G__36483;
navigator__$1 = G__36484;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__35824 = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5825__auto__)){
var else$ = temp__5825__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35824,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35827,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35824,(1),null);
var navigator__$1 = (function (){var or__5162__auto__ = new_navigator;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return navigator;
}
})();
var vec__35830 = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5825__auto__)){
var p = temp__5825__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35830,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35830,(1),null);
var navigator__$2 = (function (){var or__5162__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__5162__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__5162__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__35833 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35833,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35833,(1),null);
var slots = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),(((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))));
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = cljs.core.max.cljs$core$IFn$_invoke$arity$2(minpad,cljs.core.quot(total_pad,slots));
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__5160__auto__ = eol_str;
if(cljs.core.truth_(and__5160__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__5160__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_36489__$1 = slots;
var extra_pad_36490__$1 = extra_pad;
var strs_36491__$1 = strs;
var pad_only_36492 = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_36491__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_36491__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_36492))?cljs.core.first(strs_36491__$1):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__5162__auto__ = pad_only_36492;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.next(strs_36491__$1);
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_36490__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null)))], 0));

var G__36497 = (slots_36489__$1 - (1));
var G__36498 = (extra_pad_36490__$1 - (1));
var G__36499 = (cljs.core.truth_(pad_only_36492)?strs_36491__$1:cljs.core.next(strs_36491__$1));
var G__36500 = false;
slots_36489__$1 = G__36497;
extra_pad_36490__$1 = G__36498;
strs_36491__$1 = G__36499;
pad_only_36492 = G__36500;
continue;
} else {
}
break;
}

return navigator__$3;
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35836 = (function (writer,meta35837){
this.writer = writer;
this.meta35837 = meta35837;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint35836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35838,meta35837__$1){
var self__ = this;
var _35838__$1 = this;
return (new cljs.pprint.t_cljs$pprint35836(self__.writer,meta35837__$1));
}));

(cljs.pprint.t_cljs$pprint35836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35838){
var self__ = this;
var _35838__$1 = this;
return self__.meta35837;
}));

(cljs.pprint.t_cljs$pprint35836.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint35836.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35839 = cljs.core._EQ_;
var expr__35840 = cljs.core.type(x);
if(cljs.core.truth_((pred__35839.cljs$core$IFn$_invoke$arity$2 ? pred__35839.cljs$core$IFn$_invoke$arity$2(String,expr__35840) : pred__35839.call(null,String,expr__35840)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__35839.cljs$core$IFn$_invoke$arity$2 ? pred__35839.cljs$core$IFn$_invoke$arity$2(Number,expr__35840) : pred__35839.call(null,Number,expr__35840)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35840))));
}
}
}));

(cljs.pprint.t_cljs$pprint35836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta35837","meta35837",726361396,null)], null);
}));

(cljs.pprint.t_cljs$pprint35836.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint35836.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35836");

(cljs.pprint.t_cljs$pprint35836.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.pprint/t_cljs$pprint35836");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint35836.
 */
cljs.pprint.__GT_t_cljs$pprint35836 = (function cljs$pprint$__GT_t_cljs$pprint35836(writer,meta35837){
return (new cljs.pprint.t_cljs$pprint35836(writer,meta35837));
});


/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
return (new cljs.pprint.t_cljs$pprint35836(writer,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35842 = (function (writer,meta35843){
this.writer = writer;
this.meta35843 = meta35843;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint35842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35844,meta35843__$1){
var self__ = this;
var _35844__$1 = this;
return (new cljs.pprint.t_cljs$pprint35842(self__.writer,meta35843__$1));
}));

(cljs.pprint.t_cljs$pprint35842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35844){
var self__ = this;
var _35844__$1 = this;
return self__.meta35843;
}));

(cljs.pprint.t_cljs$pprint35842.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint35842.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35845 = cljs.core._EQ_;
var expr__35846 = cljs.core.type(x);
if(cljs.core.truth_((pred__35845.cljs$core$IFn$_invoke$arity$2 ? pred__35845.cljs$core$IFn$_invoke$arity$2(String,expr__35846) : pred__35845.call(null,String,expr__35846)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__35845.cljs$core$IFn$_invoke$arity$2 ? pred__35845.cljs$core$IFn$_invoke$arity$2(Number,expr__35846) : pred__35845.call(null,Number,expr__35846)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35846))));
}
}
}));

(cljs.pprint.t_cljs$pprint35842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta35843","meta35843",1302675604,null)], null);
}));

(cljs.pprint.t_cljs$pprint35842.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint35842.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35842");

(cljs.pprint.t_cljs$pprint35842.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.pprint/t_cljs$pprint35842");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint35842.
 */
cljs.pprint.__GT_t_cljs$pprint35842 = (function cljs$pprint$__GT_t_cljs$pprint35842(writer,meta35843){
return (new cljs.pprint.t_cljs$pprint35842(writer,meta35843));
});


/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
return (new cljs.pprint.t_cljs$pprint35842(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__5160__auto__ = first_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = f;
if(cljs.core.truth_(and__5160__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__5160__auto__ = m;
if(cljs.core.truth_(and__5160__auto__)){
return (m.index + (1));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35848 = (function (writer,last_was_whitespace_QMARK_,meta35849){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta35849 = meta35849;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint35848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35850,meta35849__$1){
var self__ = this;
var _35850__$1 = this;
return (new cljs.pprint.t_cljs$pprint35848(self__.writer,self__.last_was_whitespace_QMARK_,meta35849__$1));
}));

(cljs.pprint.t_cljs$pprint35848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35850){
var self__ = this;
var _35850__$1 = this;
return self__.meta35849;
}));

(cljs.pprint.t_cljs$pprint35848.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint35848.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35851 = cljs.core._EQ_;
var expr__35852 = cljs.core.type(x);
if(cljs.core.truth_((pred__35851.cljs$core$IFn$_invoke$arity$2 ? pred__35851.cljs$core$IFn$_invoke$arity$2(String,expr__35852) : pred__35851.call(null,String,expr__35852)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__35851.cljs$core$IFn$_invoke$arity$2 ? pred__35851.cljs$core$IFn$_invoke$arity$2(Number,expr__35852) : pred__35851.call(null,Number,expr__35852)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35852))));
}
}
}));

(cljs.pprint.t_cljs$pprint35848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta35849","meta35849",1181507060,null)], null);
}));

(cljs.pprint.t_cljs$pprint35848.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint35848.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35848");

(cljs.pprint.t_cljs$pprint35848.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.pprint/t_cljs$pprint35848");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint35848.
 */
cljs.pprint.__GT_t_cljs$pprint35848 = (function cljs$pprint$__GT_t_cljs$pprint35848(writer,last_was_whitespace_QMARK_,meta35849){
return (new cljs.pprint.t_cljs$pprint35848(writer,last_was_whitespace_QMARK_,meta35849));
});


/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.pprint.t_cljs$pprint35848(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint35854 = (function (writer,capped,meta35855){
this.writer = writer;
this.capped = capped;
this.meta35855 = meta35855;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint35854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35856,meta35855__$1){
var self__ = this;
var _35856__$1 = this;
return (new cljs.pprint.t_cljs$pprint35854(self__.writer,self__.capped,meta35855__$1));
}));

(cljs.pprint.t_cljs$pprint35854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35856){
var self__ = this;
var _35856__$1 = this;
return self__.meta35855;
}));

(cljs.pprint.t_cljs$pprint35854.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint35854.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35857 = cljs.core._EQ_;
var expr__35858 = cljs.core.type(x);
if(cljs.core.truth_((pred__35857.cljs$core$IFn$_invoke$arity$2 ? pred__35857.cljs$core$IFn$_invoke$arity$2(String,expr__35858) : pred__35857.call(null,String,expr__35858)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__5160__auto__ = m;
if(cljs.core.truth_(and__5160__auto__)){
return m.index;
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__35857.cljs$core$IFn$_invoke$arity$2 ? pred__35857.cljs$core$IFn$_invoke$arity$2(Number,expr__35858) : pred__35857.call(null,Number,expr__35858)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__5160__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__5160__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35858))));
}
}
}));

(cljs.pprint.t_cljs$pprint35854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta35855","meta35855",642296656,null)], null);
}));

(cljs.pprint.t_cljs$pprint35854.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint35854.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint35854");

(cljs.pprint.t_cljs$pprint35854.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.pprint/t_cljs$pprint35854");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint35854.
 */
cljs.pprint.__GT_t_cljs$pprint35854 = (function cljs$pprint$__GT_t_cljs$pprint35854(writer,capped,meta35855){
return (new cljs.pprint.t_cljs$pprint35854(writer,capped,meta35855));
});


/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (new cljs.pprint.t_cljs$pprint35854(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__35860 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35861 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35861);

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35860);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_36510 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_36511 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_36512 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_36513 = (((current_36512 < colnum_36510))?(colnum_36510 - current_36512):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_36511,(0)))?(0):(colinc_36511 - cljs.core.rem((current_36512 - colnum_36510),colinc_36511))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_36513," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_36514 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_36515 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_36516 = (colrel_36514 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_36517 = (((colinc_36515 > (0)))?cljs.core.rem(start_col_36516,colinc_36515):(0));
var space_count_36518 = (colrel_36514 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_36517))?(0):(colinc_36515 - offset_36517)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_36518," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__35863 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35863,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35863,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__35866_36519 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__35867_36520 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__35868_36521 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__35869_36522 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__35868_36521);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__35869_36522);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__35867_36520);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__35866_36519);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__35870_SHARP_,p2__35871_SHARP_,p3__35872_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__35870_SHARP_,p2__35871_SHARP_,p3__35872_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__35873_SHARP_,p2__35874_SHARP_,p3__35875_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__35873_SHARP_,p2__35874_SHARP_,p3__35875_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__35876_SHARP_,p2__35877_SHARP_,p3__35878_SHARP_){
return cljs.pprint.format_integer((10),p1__35876_SHARP_,p2__35877_SHARP_,p3__35878_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__35879_SHARP_,p2__35880_SHARP_,p3__35881_SHARP_){
return cljs.pprint.format_integer((2),p1__35879_SHARP_,p2__35880_SHARP_,p3__35881_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__35882_SHARP_,p2__35883_SHARP_,p3__35884_SHARP_){
return cljs.pprint.format_integer((8),p1__35882_SHARP_,p2__35883_SHARP_,p3__35884_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__35885_SHARP_,p2__35886_SHARP_,p3__35887_SHARP_){
return cljs.pprint.format_integer((16),p1__35885_SHARP_,p2__35886_SHARP_,p3__35887_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__35888_SHARP_,p2__35889_SHARP_,p3__35890_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__35888_SHARP_),p1__35888_SHARP_,p2__35889_SHARP_,p3__35890_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5160__auto__;
}
})())){
return (function (p1__35891_SHARP_,p2__35892_SHARP_,p3__35893_SHARP_){
return cljs.pprint.format_old_roman(p1__35891_SHARP_,p2__35892_SHARP_,p3__35893_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35894_SHARP_,p2__35895_SHARP_,p3__35896_SHARP_){
return cljs.pprint.format_new_roman(p1__35894_SHARP_,p2__35895_SHARP_,p3__35896_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35897_SHARP_,p2__35898_SHARP_,p3__35899_SHARP_){
return cljs.pprint.format_ordinal_english(p1__35897_SHARP_,p2__35898_SHARP_,p3__35899_SHARP_);
});
} else {
return (function (p1__35900_SHARP_,p2__35901_SHARP_,p3__35902_SHARP_){
return cljs.pprint.format_cardinal_english(p1__35900_SHARP_,p2__35901_SHARP_,p3__35902_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__35912 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35912,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35912,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5762__auto___36523 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_36524 = (0);
while(true){
if((i_36524 < n__5762__auto___36523)){
cljs.pprint.prn();

var G__36525 = (i_36524 + (1));
i_36524 = G__36525;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_36526 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_36526 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__5762__auto___36527 = (cnt_36526 - (1));
var i_36528 = (0);
while(true){
if((i_36528 < n__5762__auto___36527)){
cljs.pprint.prn();

var G__36529 = (i_36528 + (1));
i_36528 = G__36529;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5762__auto___36530 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_36531 = (0);
while(true){
if((i_36531 < n__5762__auto___36530)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__36532 = (i_36531 + (1));
i_36531 = G__36532;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35903_SHARP_,p2__35904_SHARP_,p3__35905_SHARP_){
return cljs.pprint.relative_tabulation(p1__35903_SHARP_,p2__35904_SHARP_,p3__35905_SHARP_);
});
} else {
return (function (p1__35906_SHARP_,p2__35907_SHARP_,p3__35908_SHARP_){
return cljs.pprint.absolute_tabulation(p1__35906_SHARP_,p2__35907_SHARP_,p3__35908_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__35915 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35915,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__35918 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(1),null);
var vec__35921 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35921,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35921,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5160__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__35909_SHARP_,p2__35910_SHARP_,p3__35911_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__35909_SHARP_,p2__35910_SHARP_,p3__35911_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__5160__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5160__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__5160__auto__ = arg1;
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = arg2;
if(cljs.core.truth_(and__5160__auto____$1)){
return arg3;
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = arg1;
if(cljs.core.truth_(and__5160__auto__)){
return arg2;
} else {
return and__5160__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__35924 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35924,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35924,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__35927 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35927,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35927,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__35930){
var vec__35931 = p__35930;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35931,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35931,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35931,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__35934){
var vec__35935 = p__35934;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35935,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__35938){
var vec__35939 = p__35938;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35939,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error((""+"Flag \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1))+"\" appears more than once in a directive"),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__5160__auto__;
}
})())){
cljs.pprint.format_error((""+"\"@\" is an illegal flag for format directive \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))+"\""),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__5160__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__5160__auto__;
}
})())){
cljs.pprint.format_error((""+"\":\" is an illegal flag for format directive \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))+"\""),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__5160__auto__){
var and__5160__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__5160__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
return cljs.pprint.format_error((""+"Cannot combine \"@\" and \":\" flags for format directive \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))+"\""),cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1))));
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__35942_SHARP_,p2__35943_SHARP_){
var val = cljs.core.first(p1__35942_SHARP_);
if((!((((val == null)) || (((cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__35943_SHARP_)),cljs.core.type(val))))))))){
return cljs.pprint.format_error((""+"Parameter "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__35943_SHARP_)))+" has bad type in directive \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))+"\": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))),cljs.core.second(p1__35942_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__5649__auto__ = (function cljs$pprint$map_params_$_iter__35947(s__35948){
return (new cljs.core.LazySeq(null,(function (){
var s__35948__$1 = s__35948;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__35948__$1);
if(temp__5825__auto__){
var s__35948__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35948__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__35948__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__35950 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__35949 = (0);
while(true){
if((i__35949 < size__5648__auto__)){
var vec__35951 = cljs.core._nth(c__5647__auto__,i__35949);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35951,(0),null);
var vec__35954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35951,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35954,(0),null);
cljs.core.chunk_append(b__35950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__36533 = (i__35949 + (1));
i__35949 = G__36533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35950),cljs$pprint$map_params_$_iter__35947(cljs.core.chunk_rest(s__35948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35950),null);
}
} else {
var vec__35957 = cljs.core.first(s__35948__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(0),null);
var vec__35960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__35947(cljs.core.rest(s__35948__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35944_SHARP_,p2__35945_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__35944_SHARP_,p2__35945_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35946_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__35946_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__35963 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(0),null);
var vec__35966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35966,(1),null);
var vec__35969 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(0),null);
var vec__35972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35972,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35972,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35972,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error((""+"Directive \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive)+"\" is undefined"),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__35975 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__35975.cljs$core$IFn$_invoke$arity$2 ? fexpr__35975.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__35975.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__5160__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__5160__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__5160__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__35976 = cljs.pprint.collect_clauses(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35976,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35976,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__35979){
var vec__35980 = p__35979;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(2),null);
var vec__35983 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(0),null);
var vec__35986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__35989 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__35990 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__35990);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__35991){
var vec__35992 = p__35991;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35992,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35992,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__35989);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__36534 = cljs.core.next(format__$1);
format__$1 = G__36534;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__35996 = arguments.length;
switch (G__35996) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__35997 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__35998 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__35998);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
if(stream === true){
return cljs.core.string_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__35997);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__35999 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35999,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35999,(1),null);
var vec__36002 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36002,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36002,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__36005 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__36005) : cljs.pprint.reader_macros.call(null,G__36005));
})();
if(cljs.core.truth_((function (){var and__5160__auto__ = macro_char;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__5160__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36006_36536 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36007_36537 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36008_36538 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36009_36539 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36008_36538);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36009_36539);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count36010_36540 = (0);
var alis_36541__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36010_36540 < cljs.core._STAR_print_length_STAR_)))){
if(alis_36541__$1){
cljs.pprint.write_out(cljs.core.first(alis_36541__$1));

if(cljs.core.next(alis_36541__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36542 = (length_count36010_36540 + (1));
var G__36543 = cljs.core.next(alis_36541__$1);
length_count36010_36540 = G__36542;
alis_36541__$1 = G__36543;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36007_36537);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36006_36536);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36011_36544 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36012_36545 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36013_36546 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36014_36547 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36013_36546);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36014_36547);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count36015_36548 = (0);
var aseq_36549 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36015_36548 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_36549){
cljs.pprint.write_out(cljs.core.first(aseq_36549));

if(cljs.core.next(aseq_36549)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36550 = (length_count36015_36548 + (1));
var G__36551 = cljs.core.next(aseq_36549);
length_count36015_36548 = G__36550;
aseq_36549 = G__36551;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36012_36545);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36011_36544);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__35031__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36552__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36552 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36553__i = 0, G__36553__a = new Array(arguments.length -  0);
while (G__36553__i < G__36553__a.length) {G__36553__a[G__36553__i] = arguments[G__36553__i + 0]; ++G__36553__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36553__a,0,null);
} 
return G__36552__delegate.call(this,args__35033__auto__);};
G__36552.cljs$lang$maxFixedArity = 0;
G__36552.cljs$lang$applyTo = (function (arglist__36554){
var args__35033__auto__ = cljs.core.seq(arglist__36554);
return G__36552__delegate(args__35033__auto__);
});
G__36552.cljs$core$IFn$_invoke$arity$variadic = G__36552__delegate;
return G__36552;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__36016 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__36019 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10656,10656,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns #js [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__36019.cljs$core$IFn$_invoke$arity$1 ? fexpr__36019.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__36019.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36016,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36016,(1),null);
var amap__$1 = (function (){var or__5162__auto__ = lift_map;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?(""+"#:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"{"):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36020_36555 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36021_36556 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36022_36557 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36023_36558 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36022_36557);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36023_36558);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count36024_36559 = (0);
var aseq_36560 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36024_36559 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_36560){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36025_36561 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36026_36562 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36027_36563 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36028_36564 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36027_36563);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36028_36564);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_36560));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_36560)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36026_36562);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36025_36561);
}}


if(cljs.core.next(aseq_36560)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36565 = (length_count36024_36559 + (1));
var G__36566 = cljs.core.next(aseq_36560);
length_count36024_36559 = G__36565;
aseq_36560 = G__36566;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36021_36556);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36020_36555);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__35031__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36567__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36567 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36568__i = 0, G__36568__a = new Array(arguments.length -  0);
while (G__36568__i < G__36568__a.length) {G__36568__a[G__36568__i] = arguments[G__36568__i + 0]; ++G__36568__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36568__a,0,null);
} 
return G__36567__delegate.call(this,args__35033__auto__);};
G__36567.cljs$lang$maxFixedArity = 0;
G__36567.cljs$lang$applyTo = (function (arglist__36569){
var args__35033__auto__ = cljs.core.seq(arglist__36569);
return G__36567__delegate(args__35033__auto__);
});
G__36567.cljs$core$IFn$_invoke$arity$variadic = G__36567__delegate;
return G__36567;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__5162__auto__ = (function (){var temp__5825__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5825__auto__)){
var match = temp__5825__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = (""+"#<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name))+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o))+": ");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36029_36570 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36030_36571 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36031_36572 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36032_36573 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36031_36572);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36032_36573);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((function (){var and__5160__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__5160__auto__){
return (!(cljs.core._realized_QMARK_(o)));
} else {
return and__5160__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36030_36571);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36029_36570);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__35031__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36574__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36574 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36575__i = 0, G__36575__a = new Array(arguments.length -  0);
while (G__36575__i < G__36575__a.length) {G__36575__a[G__36575__i] = arguments[G__36575__i + 0]; ++G__36575__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36575__a,0,null);
} 
return G__36574__delegate.call(this,args__35033__auto__);};
G__36574.cljs$lang$maxFixedArity = 0;
G__36574.cljs$lang$applyTo = (function (arglist__36576){
var args__35033__auto__ = cljs.core.seq(arglist__36576);
return G__36574__delegate(args__35033__auto__);
});
G__36574.cljs$core$IFn$_invoke$arity$variadic = G__36574__delegate;
return G__36574;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36035 = cljs.core.get_global_hierarchy;
return (fexpr__36035.cljs$core$IFn$_invoke$arity$0 ? fexpr__36035.cljs$core$IFn$_invoke$arity$0() : fexpr__36035.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__36036 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36036,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36036,(1),null);
var vec__36039 = reference;
var seq__36040 = cljs.core.seq(vec__36039);
var first__36041 = cljs.core.first(seq__36040);
var seq__36040__$1 = cljs.core.next(seq__36040);
var keyw = first__36041;
var args = seq__36040__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36042_36577 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36043_36578 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36044_36579 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36045_36580 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36044_36579);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36045_36580);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__35031__auto__ = "~w~:i";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36581__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36581 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36582__i = 0, G__36582__a = new Array(arguments.length -  0);
while (G__36582__i < G__36582__a.length) {G__36582__a[G__36582__i] = arguments[G__36582__i + 0]; ++G__36582__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36582__a,0,null);
} 
return G__36581__delegate.call(this,args__35033__auto__);};
G__36581.cljs$lang$maxFixedArity = 0;
G__36581.cljs$lang$applyTo = (function (arglist__36583){
var args__35033__auto__ = cljs.core.seq(arglist__36583);
return G__36581__delegate(args__35033__auto__);
});
G__36581.cljs$core$IFn$_invoke$arity$variadic = G__36581__delegate;
return G__36581;
})()
;
})()(keyw);

var args_36584__$1 = args;
while(true){
if(cljs.core.seq(args_36584__$1)){
(function (){var format_in__35031__auto__ = " ";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return ((function (args_36584__$1,format_in__35031__auto__,cf__35032__auto__,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args){
return (function() { 
var G__36585__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36585 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36586__i = 0, G__36586__a = new Array(arguments.length -  0);
while (G__36586__i < G__36586__a.length) {G__36586__a[G__36586__i] = arguments[G__36586__i + 0]; ++G__36586__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36586__a,0,null);
} 
return G__36585__delegate.call(this,args__35033__auto__);};
G__36585.cljs$lang$maxFixedArity = 0;
G__36585.cljs$lang$applyTo = (function (arglist__36587){
var args__35033__auto__ = cljs.core.seq(arglist__36587);
return G__36585__delegate(args__35033__auto__);
});
G__36585.cljs$core$IFn$_invoke$arity$variadic = G__36585__delegate;
return G__36585;
})()
;
;})(args_36584__$1,format_in__35031__auto__,cf__35032__auto__,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args))
})()();

var arg_36588 = cljs.core.first(args_36584__$1);
if(cljs.core.sequential_QMARK_(arg_36588)){
var vec__36046_36589 = cljs.pprint.brackets(arg_36588);
var start_36590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046_36589,(0),null);
var end_36591__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046_36589,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36049_36592 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36050_36593 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36051_36594 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36052_36595 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36051_36594);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36052_36595);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_36590__$1,null,end_36591__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_36588),(3))) && ((cljs.core.second(arg_36588) instanceof cljs.core.Keyword)))){
var vec__36053_36596 = arg_36588;
var ns_36597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053_36596,(0),null);
var kw_36598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053_36596,(1),null);
var lis_36599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36053_36596,(2),null);
(function (){var format_in__35031__auto__ = "~w ~w ";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return ((function (args_36584__$1,format_in__35031__auto__,cf__35032__auto__,vec__36053_36596,ns_36597,kw_36598,lis_36599,_STAR_current_level_STAR__orig_val__36049_36592,_STAR_current_length_STAR__orig_val__36050_36593,_STAR_current_level_STAR__temp_val__36051_36594,_STAR_current_length_STAR__temp_val__36052_36595,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args){
return (function() { 
var G__36600__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36600 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36601__i = 0, G__36601__a = new Array(arguments.length -  0);
while (G__36601__i < G__36601__a.length) {G__36601__a[G__36601__i] = arguments[G__36601__i + 0]; ++G__36601__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36601__a,0,null);
} 
return G__36600__delegate.call(this,args__35033__auto__);};
G__36600.cljs$lang$maxFixedArity = 0;
G__36600.cljs$lang$applyTo = (function (arglist__36602){
var args__35033__auto__ = cljs.core.seq(arglist__36602);
return G__36600__delegate(args__35033__auto__);
});
G__36600.cljs$core$IFn$_invoke$arity$variadic = G__36600__delegate;
return G__36600;
})()
;
;})(args_36584__$1,format_in__35031__auto__,cf__35032__auto__,vec__36053_36596,ns_36597,kw_36598,lis_36599,_STAR_current_level_STAR__orig_val__36049_36592,_STAR_current_length_STAR__orig_val__36050_36593,_STAR_current_level_STAR__temp_val__36051_36594,_STAR_current_length_STAR__temp_val__36052_36595,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args))
})()(ns_36597,kw_36598);

if(cljs.core.sequential_QMARK_(lis_36599)){
(function (){var format_in__35031__auto__ = ((cljs.core.vector_QMARK_(lis_36599))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return ((function (args_36584__$1,format_in__35031__auto__,cf__35032__auto__,vec__36053_36596,ns_36597,kw_36598,lis_36599,_STAR_current_level_STAR__orig_val__36049_36592,_STAR_current_length_STAR__orig_val__36050_36593,_STAR_current_level_STAR__temp_val__36051_36594,_STAR_current_length_STAR__temp_val__36052_36595,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args){
return (function() { 
var G__36603__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36603 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36604__i = 0, G__36604__a = new Array(arguments.length -  0);
while (G__36604__i < G__36604__a.length) {G__36604__a[G__36604__i] = arguments[G__36604__i + 0]; ++G__36604__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36604__a,0,null);
} 
return G__36603__delegate.call(this,args__35033__auto__);};
G__36603.cljs$lang$maxFixedArity = 0;
G__36603.cljs$lang$applyTo = (function (arglist__36605){
var args__35033__auto__ = cljs.core.seq(arglist__36605);
return G__36603__delegate(args__35033__auto__);
});
G__36603.cljs$core$IFn$_invoke$arity$variadic = G__36603__delegate;
return G__36603;
})()
;
;})(args_36584__$1,format_in__35031__auto__,cf__35032__auto__,vec__36053_36596,ns_36597,kw_36598,lis_36599,_STAR_current_level_STAR__orig_val__36049_36592,_STAR_current_length_STAR__orig_val__36050_36593,_STAR_current_level_STAR__temp_val__36051_36594,_STAR_current_length_STAR__temp_val__36052_36595,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args))
})()(lis_36599);
} else {
cljs.pprint.write_out(lis_36599);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__35031__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return ((function (args_36584__$1,format_in__35031__auto__,cf__35032__auto__,_STAR_current_level_STAR__orig_val__36049_36592,_STAR_current_length_STAR__orig_val__36050_36593,_STAR_current_level_STAR__temp_val__36051_36594,_STAR_current_length_STAR__temp_val__36052_36595,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args){
return (function() { 
var G__36606__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36606 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36607__i = 0, G__36607__a = new Array(arguments.length -  0);
while (G__36607__i < G__36607__a.length) {G__36607__a[G__36607__i] = arguments[G__36607__i + 0]; ++G__36607__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36607__a,0,null);
} 
return G__36606__delegate.call(this,args__35033__auto__);};
G__36606.cljs$lang$maxFixedArity = 0;
G__36606.cljs$lang$applyTo = (function (arglist__36608){
var args__35033__auto__ = cljs.core.seq(arglist__36608);
return G__36606__delegate(args__35033__auto__);
});
G__36606.cljs$core$IFn$_invoke$arity$variadic = G__36606__delegate;
return G__36606;
})()
;
;})(args_36584__$1,format_in__35031__auto__,cf__35032__auto__,_STAR_current_level_STAR__orig_val__36049_36592,_STAR_current_length_STAR__orig_val__36050_36593,_STAR_current_level_STAR__temp_val__36051_36594,_STAR_current_length_STAR__temp_val__36052_36595,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args))
})(),arg_36588);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36050_36593);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36049_36592);
}}


if(cljs.core.next(args_36584__$1)){
(function (){var format_in__35031__auto__ = "~_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return ((function (args_36584__$1,format_in__35031__auto__,cf__35032__auto__,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args){
return (function() { 
var G__36609__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36609 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36610__i = 0, G__36610__a = new Array(arguments.length -  0);
while (G__36610__i < G__36610__a.length) {G__36610__a[G__36610__i] = arguments[G__36610__i + 0]; ++G__36610__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36610__a,0,null);
} 
return G__36609__delegate.call(this,args__35033__auto__);};
G__36609.cljs$lang$maxFixedArity = 0;
G__36609.cljs$lang$applyTo = (function (arglist__36611){
var args__35033__auto__ = cljs.core.seq(arglist__36611);
return G__36609__delegate(args__35033__auto__);
});
G__36609.cljs$core$IFn$_invoke$arity$variadic = G__36609__delegate;
return G__36609;
})()
;
;})(args_36584__$1,format_in__35031__auto__,cf__35032__auto__,vec__36046_36589,start_36590__$1,end_36591__$1,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args))
})()();
} else {
}
} else {
cljs.pprint.write_out(arg_36588);

if(cljs.core.next(args_36584__$1)){
(function (){var format_in__35031__auto__ = "~:_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return ((function (args_36584__$1,format_in__35031__auto__,cf__35032__auto__,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args){
return (function() { 
var G__36612__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36612 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36613__i = 0, G__36613__a = new Array(arguments.length -  0);
while (G__36613__i < G__36613__a.length) {G__36613__a[G__36613__i] = arguments[G__36613__i + 0]; ++G__36613__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36613__a,0,null);
} 
return G__36612__delegate.call(this,args__35033__auto__);};
G__36612.cljs$lang$maxFixedArity = 0;
G__36612.cljs$lang$applyTo = (function (arglist__36614){
var args__35033__auto__ = cljs.core.seq(arglist__36614);
return G__36612__delegate(args__35033__auto__);
});
G__36612.cljs$core$IFn$_invoke$arity$variadic = G__36612__delegate;
return G__36612;
})()
;
;})(args_36584__$1,format_in__35031__auto__,cf__35032__auto__,arg_36588,_STAR_current_level_STAR__orig_val__36042_36577,_STAR_current_length_STAR__orig_val__36043_36578,_STAR_current_level_STAR__temp_val__36044_36579,_STAR_current_length_STAR__temp_val__36045_36580,vec__36036,start,end,vec__36039,seq__36040,first__36041,seq__36040__$1,keyw,args))
})()();
} else {
}
}

var G__36615 = cljs.core.next(args_36584__$1);
args_36584__$1 = G__36615;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36043_36578);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36042_36577);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__36056 = alis;
var seq__36057 = cljs.core.seq(vec__36056);
var first__36058 = cljs.core.first(seq__36057);
var seq__36057__$1 = cljs.core.next(seq__36057);
var ns_sym = first__36058;
var first__36058__$1 = cljs.core.first(seq__36057__$1);
var seq__36057__$2 = cljs.core.next(seq__36057__$1);
var ns_name = first__36058__$1;
var stuff = seq__36057__$2;
var vec__36059 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(1),null);
var vec__36062 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36065_36616 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36066_36617 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36067_36618 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36068_36619 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36067_36618);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36068_36619);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__35031__auto__ = "~w ~1I~@_~w";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36620__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36620 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36621__i = 0, G__36621__a = new Array(arguments.length -  0);
while (G__36621__i < G__36621__a.length) {G__36621__a[G__36621__i] = arguments[G__36621__i + 0]; ++G__36621__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36621__a,0,null);
} 
return G__36620__delegate.call(this,args__35033__auto__);};
G__36620.cljs$lang$maxFixedArity = 0;
G__36620.cljs$lang$applyTo = (function (arglist__36622){
var args__35033__auto__ = cljs.core.seq(arglist__36622);
return G__36620__delegate(args__35033__auto__);
});
G__36620.cljs$core$IFn$_invoke$arity$variadic = G__36620__delegate;
return G__36620;
})()
;
})()(ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__5162__auto__ = doc_str;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = attr_map;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__35031__auto__ = "~@:_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36623__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36623 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36624__i = 0, G__36624__a = new Array(arguments.length -  0);
while (G__36624__i < G__36624__a.length) {G__36624__a[G__36624__i] = arguments[G__36624__i + 0]; ++G__36624__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36624__a,0,null);
} 
return G__36623__delegate.call(this,args__35033__auto__);};
G__36623.cljs$lang$maxFixedArity = 0;
G__36623.cljs$lang$applyTo = (function (arglist__36625){
var args__35033__auto__ = cljs.core.seq(arglist__36625);
return G__36623__delegate(args__35033__auto__);
});
G__36623.cljs$core$IFn$_invoke$arity$variadic = G__36623__delegate;
return G__36623;
})()
;
})()();
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__5162__auto__ = attr_map;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__35031__auto__ = "~w~:[~;~:@_~]";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36626__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36626 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36627__i = 0, G__36627__a = new Array(arguments.length -  0);
while (G__36627__i < G__36627__a.length) {G__36627__a[G__36627__i] = arguments[G__36627__i + 0]; ++G__36627__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36627__a,0,null);
} 
return G__36626__delegate.call(this,args__35033__auto__);};
G__36626.cljs$lang$maxFixedArity = 0;
G__36626.cljs$lang$applyTo = (function (arglist__36628){
var args__35033__auto__ = cljs.core.seq(arglist__36628);
return G__36626__delegate(args__35033__auto__);
});
G__36626.cljs$core$IFn$_invoke$arity$variadic = G__36626__delegate;
return G__36626;
})()
;
})()(attr_map,cljs.core.seq(references));
} else {
}

var references_36629__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_36629__$1));

var temp__5825__auto___36630 = cljs.core.next(references_36629__$1);
if(temp__5825__auto___36630){
var references_36631__$2 = temp__5825__auto___36630;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36632 = references_36631__$2;
references_36629__$1 = G__36632;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36066_36617);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36065_36616);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__35031__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36633__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36633 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36634__i = 0, G__36634__a = new Array(arguments.length -  0);
while (G__36634__i < G__36634__a.length) {G__36634__a[G__36634__i] = arguments[G__36634__i + 0]; ++G__36634__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36634__a,0,null);
} 
return G__36633__delegate.call(this,args__35033__auto__);};
G__36633.cljs$lang$maxFixedArity = 0;
G__36633.cljs$lang$applyTo = (function (arglist__36635){
var args__35033__auto__ = cljs.core.seq(arglist__36635);
return G__36633__delegate(args__35033__auto__);
});
G__36633.cljs$core$IFn$_invoke$arity$variadic = G__36633__delegate;
return G__36633;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__35031__auto__ = " ~_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36636__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36636 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36637__i = 0, G__36637__a = new Array(arguments.length -  0);
while (G__36637__i < G__36637__a.length) {G__36637__a[G__36637__i] = arguments[G__36637__i + 0]; ++G__36637__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36637__a,0,null);
} 
return G__36636__delegate.call(this,args__35033__auto__);};
G__36636.cljs$lang$maxFixedArity = 0;
G__36636.cljs$lang$applyTo = (function (arglist__36638){
var args__35033__auto__ = cljs.core.seq(arglist__36638);
return G__36636__delegate(args__35033__auto__);
});
G__36636.cljs$core$IFn$_invoke$arity$variadic = G__36636__delegate;
return G__36636;
})()
;
})()();
} else {
(function (){var format_in__35031__auto__ = " ~@_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36639__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36639 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36640__i = 0, G__36640__a = new Array(arguments.length -  0);
while (G__36640__i < G__36640__a.length) {G__36640__a[G__36640__i] = arguments[G__36640__i + 0]; ++G__36640__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36640__a,0,null);
} 
return G__36639__delegate.call(this,args__35033__auto__);};
G__36639.cljs$lang$maxFixedArity = 0;
G__36639.cljs$lang$applyTo = (function (arglist__36641){
var args__35033__auto__ = cljs.core.seq(arglist__36641);
return G__36639__delegate(args__35033__auto__);
});
G__36639.cljs$core$IFn$_invoke$arity$variadic = G__36639__delegate;
return G__36639;
})()
;
})()();
}

return (function (){var format_in__35031__auto__ = "~{~w~^ ~_~}";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36642__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36642 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36643__i = 0, G__36643__a = new Array(arguments.length -  0);
while (G__36643__i < G__36643__a.length) {G__36643__a[G__36643__i] = arguments[G__36643__i + 0]; ++G__36643__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36643__a,0,null);
} 
return G__36642__delegate.call(this,args__35033__auto__);};
G__36642.cljs$lang$maxFixedArity = 0;
G__36642.cljs$lang$applyTo = (function (arglist__36644){
var args__35033__auto__ = cljs.core.seq(arglist__36644);
return G__36642__delegate(args__35033__auto__);
});
G__36642.cljs$core$IFn$_invoke$arity$variadic = G__36642__delegate;
return G__36642;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__35031__auto__ = " ~_~{~w~^ ~_~}";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36645__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36645 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36646__i = 0, G__36646__a = new Array(arguments.length -  0);
while (G__36646__i < G__36646__a.length) {G__36646__a[G__36646__i] = arguments[G__36646__i + 0]; ++G__36646__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36646__a,0,null);
} 
return G__36645__delegate.call(this,args__35033__auto__);};
G__36645.cljs$lang$maxFixedArity = 0;
G__36645.cljs$lang$applyTo = (function (arglist__36647){
var args__35033__auto__ = cljs.core.seq(arglist__36647);
return G__36645__delegate(args__35033__auto__);
});
G__36645.cljs$core$IFn$_invoke$arity$variadic = G__36645__delegate;
return G__36645;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__36069 = alis;
var seq__36070 = cljs.core.seq(vec__36069);
var first__36071 = cljs.core.first(seq__36070);
var seq__36070__$1 = cljs.core.next(seq__36070);
var defn_sym = first__36071;
var first__36071__$1 = cljs.core.first(seq__36070__$1);
var seq__36070__$2 = cljs.core.next(seq__36070__$1);
var defn_name = first__36071__$1;
var stuff = seq__36070__$2;
var vec__36072 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36072,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36072,(1),null);
var vec__36075 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36075,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36075,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36078_36648 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36079_36649 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36080_36650 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36081_36651 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36080_36650);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36081_36651);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__35031__auto__ = "~w ~1I~@_~w";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36652__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36652 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36653__i = 0, G__36653__a = new Array(arguments.length -  0);
while (G__36653__i < G__36653__a.length) {G__36653__a[G__36653__i] = arguments[G__36653__i + 0]; ++G__36653__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36653__a,0,null);
} 
return G__36652__delegate.call(this,args__35033__auto__);};
G__36652.cljs$lang$maxFixedArity = 0;
G__36652.cljs$lang$applyTo = (function (arglist__36654){
var args__35033__auto__ = cljs.core.seq(arglist__36654);
return G__36652__delegate(args__35033__auto__);
});
G__36652.cljs$core$IFn$_invoke$arity$variadic = G__36652__delegate;
return G__36652;
})()
;
})()(defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__35031__auto__ = " ~_~w";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36655__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36655 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36656__i = 0, G__36656__a = new Array(arguments.length -  0);
while (G__36656__i < G__36656__a.length) {G__36656__a[G__36656__i] = arguments[G__36656__i + 0]; ++G__36656__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36656__a,0,null);
} 
return G__36655__delegate.call(this,args__35033__auto__);};
G__36655.cljs$lang$maxFixedArity = 0;
G__36655.cljs$lang$applyTo = (function (arglist__36657){
var args__35033__auto__ = cljs.core.seq(arglist__36657);
return G__36655__delegate(args__35033__auto__);
});
G__36655.cljs$core$IFn$_invoke$arity$variadic = G__36655__delegate;
return G__36655;
})()
;
})()(doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__35031__auto__ = " ~_~w";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36658__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36658 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36659__i = 0, G__36659__a = new Array(arguments.length -  0);
while (G__36659__i < G__36659__a.length) {G__36659__a[G__36659__i] = arguments[G__36659__i + 0]; ++G__36659__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36659__a,0,null);
} 
return G__36658__delegate.call(this,args__35033__auto__);};
G__36658.cljs$lang$maxFixedArity = 0;
G__36658.cljs$lang$applyTo = (function (arglist__36660){
var args__35033__auto__ = cljs.core.seq(arglist__36660);
return G__36658__delegate(args__35033__auto__);
});
G__36658.cljs$core$IFn$_invoke$arity$variadic = G__36658__delegate;
return G__36658;
})()
;
})()(attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__5162__auto__ = doc_str;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__5162__auto__ = doc_str;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36079_36649);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36078_36648);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36082_36661 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36083_36662 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36084_36663 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36085_36664 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36084_36663);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36085_36664);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count36086_36665 = (0);
var binding_36666 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36086_36665 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_36666)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36087_36667 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36088_36668 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36089_36669 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36090_36670 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36089_36669);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36090_36670);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_36666));

if(cljs.core.next(binding_36666)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_36666));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36088_36668);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36087_36667);
}}


if(cljs.core.next(cljs.core.rest(binding_36666))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36671 = (length_count36086_36665 + (1));
var G__36672 = cljs.core.next(cljs.core.rest(binding_36666));
length_count36086_36665 = G__36671;
binding_36666 = G__36672;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36083_36662);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36082_36661);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36091_36673 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36092_36674 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36093_36675 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36094_36676 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36093_36675);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36094_36676);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
(function (){var format_in__35031__auto__ = "~w ~1I~@_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36677__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36677 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36678__i = 0, G__36678__a = new Array(arguments.length -  0);
while (G__36678__i < G__36678__a.length) {G__36678__a[G__36678__i] = arguments[G__36678__i + 0]; ++G__36678__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36678__a,0,null);
} 
return G__36677__delegate.call(this,args__35033__auto__);};
G__36677.cljs$lang$maxFixedArity = 0;
G__36677.cljs$lang$applyTo = (function (arglist__36679){
var args__35033__auto__ = cljs.core.seq(arglist__36679);
return G__36677__delegate(args__35033__auto__);
});
G__36677.cljs$core$IFn$_invoke$arity$variadic = G__36677__delegate;
return G__36677;
})()
;
})()(base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__35031__auto__ = " ~_~{~w~^ ~_~}";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36680__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36680 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36681__i = 0, G__36681__a = new Array(arguments.length -  0);
while (G__36681__i < G__36681__a.length) {G__36681__a[G__36681__i] = arguments[G__36681__i + 0]; ++G__36681__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36681__a,0,null);
} 
return G__36680__delegate.call(this,args__35033__auto__);};
G__36680.cljs$lang$maxFixedArity = 0;
G__36680.cljs$lang$applyTo = (function (arglist__36682){
var args__35033__auto__ = cljs.core.seq(arglist__36682);
return G__36680__delegate(args__35033__auto__);
});
G__36680.cljs$core$IFn$_invoke$arity$variadic = G__36680__delegate;
return G__36680;
})()
;
})()(cljs.core.next(cljs.core.rest(alis)));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36092_36674);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36091_36673);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__35031__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36683__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36683 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36684__i = 0, G__36684__a = new Array(arguments.length -  0);
while (G__36684__i < G__36684__a.length) {G__36684__a[G__36684__i] = arguments[G__36684__i + 0]; ++G__36684__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36684__a,0,null);
} 
return G__36683__delegate.call(this,args__35033__auto__);};
G__36683.cljs$lang$maxFixedArity = 0;
G__36683.cljs$lang$applyTo = (function (arglist__36685){
var args__35033__auto__ = cljs.core.seq(arglist__36685);
return G__36683__delegate(args__35033__auto__);
});
G__36683.cljs$core$IFn$_invoke$arity$variadic = G__36683__delegate;
return G__36683;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36095_36686 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36096_36687 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36097_36688 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36098_36689 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36097_36688);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36098_36689);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count36099_36690 = (0);
var alis_36691__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36099_36690 < cljs.core._STAR_print_length_STAR_)))){
if(alis_36691__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36100_36692 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36101_36693 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36102_36694 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36103_36695 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36102_36694);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36103_36695);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_36691__$1));

if(cljs.core.next(alis_36691__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_36691__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36101_36693);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36100_36692);
}}


if(cljs.core.next(cljs.core.rest(alis_36691__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36696 = (length_count36099_36690 + (1));
var G__36697 = cljs.core.next(cljs.core.rest(alis_36691__$1));
length_count36099_36690 = G__36696;
alis_36691__$1 = G__36697;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36096_36687);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36095_36686);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36104_36698 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36105_36699 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36106_36700 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36107_36701 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36106_36700);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36107_36701);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__35031__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36702__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36702 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36703__i = 0, G__36703__a = new Array(arguments.length -  0);
while (G__36703__i < G__36703__a.length) {G__36703__a[G__36703__i] = arguments[G__36703__i + 0]; ++G__36703__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36703__a,0,null);
} 
return G__36702__delegate.call(this,args__35033__auto__);};
G__36702.cljs$lang$maxFixedArity = 0;
G__36702.cljs$lang$applyTo = (function (arglist__36704){
var args__35033__auto__ = cljs.core.seq(arglist__36704);
return G__36702__delegate(args__35033__auto__);
});
G__36702.cljs$core$IFn$_invoke$arity$variadic = G__36702__delegate;
return G__36702;
})()
;
})(),alis);

var length_count36108_36705 = (0);
var alis_36706__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36108_36705 < cljs.core._STAR_print_length_STAR_)))){
if(alis_36706__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36109_36707 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36110_36708 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36111_36709 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36112_36710 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36111_36709);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36112_36710);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_36706__$1));

if(cljs.core.next(alis_36706__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_36706__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36110_36708);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36109_36707);
}}


if(cljs.core.next(cljs.core.rest(alis_36706__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36711 = (length_count36108_36705 + (1));
var G__36712 = cljs.core.next(cljs.core.rest(alis_36706__$1));
length_count36108_36705 = G__36711;
alis_36706__$1 = G__36712;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36105_36699);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36104_36698);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__36115 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__36116 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__36113_SHARP_,p2__36114_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36113_SHARP_,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__36114_SHARP_))],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__36116);

try{return (function (){var format_in__35031__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__35032__auto__ = ((typeof format_in__35031__auto__ === 'string')?cljs.pprint.cached_compile(format_in__35031__auto__):format_in__35031__auto__);
return (function() { 
var G__36713__delegate = function (args__35033__auto__){
var navigator__35034__auto__ = cljs.pprint.init_navigator(args__35033__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__35032__auto__,navigator__35034__auto__);
};
var G__36713 = function (var_args){
var args__35033__auto__ = null;
if (arguments.length > 0) {
var G__36714__i = 0, G__36714__a = new Array(arguments.length -  0);
while (G__36714__i < G__36714__a.length) {G__36714__a[G__36714__i] = arguments[G__36714__i + 0]; ++G__36714__i;}
  args__35033__auto__ = new cljs.core.IndexedSeq(G__36714__a,0,null);
} 
return G__36713__delegate.call(this,args__35033__auto__);};
G__36713.cljs$lang$maxFixedArity = 0;
G__36713.cljs$lang$applyTo = (function (arglist__36715){
var args__35033__auto__ = cljs.core.seq(arglist__36715);
return G__36713__delegate(args__35033__auto__);
});
G__36713.cljs$core$IFn$_invoke$arity$variadic = G__36713__delegate;
return G__36713;
})()
;
})()(nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__36115);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__36117_36716 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__36118_36717 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__36119_36718 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__36120_36719 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__36119_36718);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__36120_36719);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count36121_36720 = (0);
var alis_36721__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36121_36720 < cljs.core._STAR_print_length_STAR_)))){
if(alis_36721__$1){
cljs.pprint.write_out(cljs.core.first(alis_36721__$1));

if(cljs.core.next(alis_36721__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__36722 = (length_count36121_36720 + (1));
var G__36723 = cljs.core.next(alis_36721__$1);
length_count36121_36720 = G__36722;
alis_36721__$1 = G__36723;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__36118_36717);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__36117_36716);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__5649__auto__ = (function cljs$pprint$two_forms_$_iter__36122(s__36123){
return (new cljs.core.LazySeq(null,(function (){
var s__36123__$1 = s__36123;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36123__$1);
if(temp__5825__auto__){
var s__36123__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36123__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36123__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36125 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36124 = (0);
while(true){
if((i__36124 < size__5648__auto__)){
var x = cljs.core._nth(c__5647__auto__,i__36124);
cljs.core.chunk_append(b__36125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__36724 = (i__36124 + (1));
i__36124 = G__36724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36125),cljs$pprint$two_forms_$_iter__36122(cljs.core.chunk_rest(s__36123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36125),null);
}
} else {
var x = cljs.core.first(s__36123__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__36122(cljs.core.rest(s__36123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36126_SHARP_){
var vec__36127 = p1__36126_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36127,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36127,(1),null);
if(cljs.core.not((function (){var or__5162__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__36126_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5823__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first(alis));
if(cljs.core.truth_(temp__5823__auto__)){
var special_form = temp__5823__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5823__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5823__auto__)){
var arg_num = temp__5823__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36130 = cljs.core.get_global_hierarchy;
return (fexpr__36130.cljs$core$IFn$_invoke$arity$0 ? fexpr__36130.cljs$core$IFn$_invoke$arity$0() : fexpr__36130.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(width - cljs.core.count(s)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__36135 = arguments.length;
switch (G__36135) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36131_SHARP_){
return (((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36131_SHARP_,k)))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36132_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__36132_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__5649__auto__ = (function cljs$pprint$iter__36136(s__36137){
return (new cljs.core.LazySeq(null,(function (){
var s__36137__$1 = s__36137;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36137__$1);
if(temp__5825__auto__){
var s__36137__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36137__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__36137__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__36139 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__36138 = (0);
while(true){
if((i__36138 < size__5648__auto__)){
var vec__36140 = cljs.core._nth(c__5647__auto__,i__36138);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36140,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36140,(1),null);
cljs.core.chunk_append(b__36139,cljs.pprint.add_padding(width,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col))));

var G__36726 = (i__36138 + (1));
i__36138 = G__36726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36139),cljs$pprint$iter__36136(cljs.core.chunk_rest(s__36137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36139),null);
}
} else {
var vec__36143 = cljs.core.first(s__36137__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36143,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36143,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col))),cljs$pprint$iter__36136(cljs.core.rest(s__36137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36133_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__36133_SHARP_);
}),ks),widths));
})())))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer));
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__36146 = cljs.core.seq(rows);
var chunk__36147 = null;
var count__36148 = (0);
var i__36149 = (0);
while(true){
if((i__36149 < count__36148)){
var row = chunk__36147.cljs$core$IIndexed$_nth$arity$2(null,i__36149);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__36727 = seq__36146;
var G__36728 = chunk__36147;
var G__36729 = count__36148;
var G__36730 = (i__36149 + (1));
seq__36146 = G__36727;
chunk__36147 = G__36728;
count__36148 = G__36729;
i__36149 = G__36730;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36146);
if(temp__5825__auto__){
var seq__36146__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36146__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__36146__$1);
var G__36731 = cljs.core.chunk_rest(seq__36146__$1);
var G__36732 = c__5694__auto__;
var G__36733 = cljs.core.count(c__5694__auto__);
var G__36734 = (0);
seq__36146 = G__36731;
chunk__36147 = G__36732;
count__36148 = G__36733;
i__36149 = G__36734;
continue;
} else {
var row = cljs.core.first(seq__36146__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__36735 = cljs.core.next(seq__36146__$1);
var G__36736 = null;
var G__36737 = (0);
var G__36738 = (0);
seq__36146 = G__36735;
chunk__36147 = G__36736;
count__36148 = G__36737;
i__36149 = G__36738;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cljs.pprint.js.map
