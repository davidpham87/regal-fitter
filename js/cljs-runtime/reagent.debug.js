goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20129__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20130__i = 0, G__20130__a = new Array(arguments.length -  0);
while (G__20130__i < G__20130__a.length) {G__20130__a[G__20130__i] = arguments[G__20130__i + 0]; ++G__20130__i;}
  args = new cljs.core.IndexedSeq(G__20130__a,0,null);
} 
return G__20129__delegate.call(this,args);};
G__20129.cljs$lang$maxFixedArity = 0;
G__20129.cljs$lang$applyTo = (function (arglist__20131){
var args = cljs.core.seq(arglist__20131);
return G__20129__delegate(args);
});
G__20129.cljs$core$IFn$_invoke$arity$variadic = G__20129__delegate;
return G__20129;
})()
);

(o.error = (function() { 
var G__20132__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20133__i = 0, G__20133__a = new Array(arguments.length -  0);
while (G__20133__i < G__20133__a.length) {G__20133__a[G__20133__i] = arguments[G__20133__i + 0]; ++G__20133__i;}
  args = new cljs.core.IndexedSeq(G__20133__a,0,null);
} 
return G__20132__delegate.call(this,args);};
G__20132.cljs$lang$maxFixedArity = 0;
G__20132.cljs$lang$applyTo = (function (arglist__20134){
var args = cljs.core.seq(arglist__20134);
return G__20132__delegate(args);
});
G__20132.cljs$core$IFn$_invoke$arity$variadic = G__20132__delegate;
return G__20132;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
