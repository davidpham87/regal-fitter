goog.provide('malli.registry');
/**
 * @define {string}
 * @type {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 * @type {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_21878 = (function (this$,type){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schema[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5520__auto__.call(null,this$,type));
} else {
var m__5518__auto__ = (malli.registry._schema["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5518__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_21878(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_21879 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schemas[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (malli.registry._schemas["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_21879(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21682 = (function (m,fm,meta21683){
this.m = m;
this.fm = fm;
this.meta21683 = meta21683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21684,meta21683__$1){
var self__ = this;
var _21684__$1 = this;
return (new malli.registry.t_malli$registry21682(self__.m,self__.fm,meta21683__$1));
}));

(malli.registry.t_malli$registry21682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21684){
var self__ = this;
var _21684__$1 = this;
return self__.meta21683;
}));

(malli.registry.t_malli$registry21682.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21682.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry21682.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry21682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta21683","meta21683",-312765061,null)], null);
}));

(malli.registry.t_malli$registry21682.cljs$lang$type = true);

(malli.registry.t_malli$registry21682.cljs$lang$ctorStr = "malli.registry/t_malli$registry21682");

(malli.registry.t_malli$registry21682.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21682");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21682.
 */
malli.registry.__GT_t_malli$registry21682 = (function malli$registry$__GT_t_malli$registry21682(m,fm,meta21683){
return (new malli.registry.t_malli$registry21682(m,fm,meta21683));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry21682(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21702 = (function (m,meta21703){
this.m = m;
this.meta21703 = meta21703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21704,meta21703__$1){
var self__ = this;
var _21704__$1 = this;
return (new malli.registry.t_malli$registry21702(self__.m,meta21703__$1));
}));

(malli.registry.t_malli$registry21702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21704){
var self__ = this;
var _21704__$1 = this;
return self__.meta21703;
}));

(malli.registry.t_malli$registry21702.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21702.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry21702.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry21702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta21703","meta21703",246993790,null)], null);
}));

(malli.registry.t_malli$registry21702.cljs$lang$type = true);

(malli.registry.t_malli$registry21702.cljs$lang$ctorStr = "malli.registry/t_malli$registry21702");

(malli.registry.t_malli$registry21702.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21702");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21702.
 */
malli.registry.__GT_t_malli$registry21702 = (function malli$registry$__GT_t_malli$registry21702(m,meta21703){
return (new malli.registry.t_malli$registry21702(m,meta21703));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry21702(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21732 = (function (meta21733){
this.meta21733 = meta21733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21734,meta21733__$1){
var self__ = this;
var _21734__$1 = this;
return (new malli.registry.t_malli$registry21732(meta21733__$1));
}));

(malli.registry.t_malli$registry21732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21734){
var self__ = this;
var _21734__$1 = this;
return self__.meta21733;
}));

(malli.registry.t_malli$registry21732.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21732.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry21732.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry21732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21733","meta21733",-884888619,null)], null);
}));

(malli.registry.t_malli$registry21732.cljs$lang$type = true);

(malli.registry.t_malli$registry21732.cljs$lang$ctorStr = "malli.registry/t_malli$registry21732");

(malli.registry.t_malli$registry21732.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21732");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21732.
 */
malli.registry.__GT_t_malli$registry21732 = (function malli$registry$__GT_t_malli$registry21732(meta21733){
return (new malli.registry.t_malli$registry21732(meta21733));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry21732(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21781 = (function (_QMARK_registries,registries,meta21782){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta21782 = meta21782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21783,meta21782__$1){
var self__ = this;
var _21783__$1 = this;
return (new malli.registry.t_malli$registry21781(self__._QMARK_registries,self__.registries,meta21782__$1));
}));

(malli.registry.t_malli$registry21781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21783){
var self__ = this;
var _21783__$1 = this;
return self__.meta21782;
}));

(malli.registry.t_malli$registry21781.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21781.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__21749_SHARP_){
return malli.registry._schema(p1__21749_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry21781.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry21781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta21782","meta21782",1729399415,null)], null);
}));

(malli.registry.t_malli$registry21781.cljs$lang$type = true);

(malli.registry.t_malli$registry21781.cljs$lang$ctorStr = "malli.registry/t_malli$registry21781");

(malli.registry.t_malli$registry21781.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21781");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21781.
 */
malli.registry.__GT_t_malli$registry21781 = (function malli$registry$__GT_t_malli$registry21781(_QMARK_registries,registries,meta21782){
return (new malli.registry.t_malli$registry21781(_QMARK_registries,registries,meta21782));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21888 = arguments.length;
var i__5898__auto___21889 = (0);
while(true){
if((i__5898__auto___21889 < len__5897__auto___21888)){
args__5903__auto__.push((arguments[i__5898__auto___21889]));

var G__21891 = (i__5898__auto___21889 + (1));
i__5898__auto___21889 = G__21891;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry21781(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq21752){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21752));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21806 = (function (db,meta21807){
this.db = db;
this.meta21807 = meta21807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21808,meta21807__$1){
var self__ = this;
var _21808__$1 = this;
return (new malli.registry.t_malli$registry21806(self__.db,meta21807__$1));
}));

(malli.registry.t_malli$registry21806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21808){
var self__ = this;
var _21808__$1 = this;
return self__.meta21807;
}));

(malli.registry.t_malli$registry21806.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21806.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry21806.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry21806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta21807","meta21807",1646834898,null)], null);
}));

(malli.registry.t_malli$registry21806.cljs$lang$type = true);

(malli.registry.t_malli$registry21806.cljs$lang$ctorStr = "malli.registry/t_malli$registry21806");

(malli.registry.t_malli$registry21806.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21806");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21806.
 */
malli.registry.__GT_t_malli$registry21806 = (function malli$registry$__GT_t_malli$registry21806(db,meta21807){
return (new malli.registry.t_malli$registry21806(db,meta21807));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry21806(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21813 = (function (meta21814){
this.meta21814 = meta21814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21815,meta21814__$1){
var self__ = this;
var _21815__$1 = this;
return (new malli.registry.t_malli$registry21813(meta21814__$1));
}));

(malli.registry.t_malli$registry21813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21815){
var self__ = this;
var _21815__$1 = this;
return self__.meta21814;
}));

(malli.registry.t_malli$registry21813.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21813.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry21813.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry21813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21814","meta21814",-1293894999,null)], null);
}));

(malli.registry.t_malli$registry21813.cljs$lang$type = true);

(malli.registry.t_malli$registry21813.cljs$lang$ctorStr = "malli.registry/t_malli$registry21813");

(malli.registry.t_malli$registry21813.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21813");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21813.
 */
malli.registry.__GT_t_malli$registry21813 = (function malli$registry$__GT_t_malli$registry21813(meta21814){
return (new malli.registry.t_malli$registry21813(meta21814));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry21813(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21850 = (function (meta21851){
this.meta21851 = meta21851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21852,meta21851__$1){
var self__ = this;
var _21852__$1 = this;
return (new malli.registry.t_malli$registry21850(meta21851__$1));
}));

(malli.registry.t_malli$registry21850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21852){
var self__ = this;
var _21852__$1 = this;
return self__.meta21851;
}));

(malli.registry.t_malli$registry21850.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21850.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry21850.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry21850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21851","meta21851",1080122325,null)], null);
}));

(malli.registry.t_malli$registry21850.cljs$lang$type = true);

(malli.registry.t_malli$registry21850.cljs$lang$ctorStr = "malli.registry/t_malli$registry21850");

(malli.registry.t_malli$registry21850.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21850");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21850.
 */
malli.registry.__GT_t_malli$registry21850 = (function malli$registry$__GT_t_malli$registry21850(meta21851){
return (new malli.registry.t_malli$registry21850(meta21851));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry21850(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry21862 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta21863){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta21863 = meta21863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry21862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21864,meta21863__$1){
var self__ = this;
var _21864__$1 = this;
return (new malli.registry.t_malli$registry21862(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta21863__$1));
}));

(malli.registry.t_malli$registry21862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21864){
var self__ = this;
var _21864__$1 = this;
return self__.meta21863;
}));

(malli.registry.t_malli$registry21862.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry21862.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = (function (){var fexpr__21865 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__21865.cljs$core$IFn$_invoke$arity$1 ? fexpr__21865.cljs$core$IFn$_invoke$arity$1(name) : fexpr__21865.call(null,name));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var temp__5825__auto__ = (function (){var G__21866 = name;
var G__21867 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__21866,G__21867) : self__.provider.call(null,G__21866,G__21867));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry21862.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry21862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta21863","meta21863",-1157073369,null)], null);
}));

(malli.registry.t_malli$registry21862.cljs$lang$type = true);

(malli.registry.t_malli$registry21862.cljs$lang$ctorStr = "malli.registry/t_malli$registry21862");

(malli.registry.t_malli$registry21862.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry21862");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry21862.
 */
malli.registry.__GT_t_malli$registry21862 = (function malli$registry$__GT_t_malli$registry21862(default_registry,provider,cache_STAR_,registry_STAR_,meta21863){
return (new malli.registry.t_malli$registry21862(default_registry,provider,cache_STAR_,registry_STAR_,meta21863));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry21862(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
