goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_20891 = (function (this$,type){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5374__auto__.call(null,this$,type));
} else {
var m__5372__auto__ = (malli.registry._schema["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5372__auto__.call(null,this$,type));
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
return malli$registry$Registry$_schema$dyn_20891(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_20896 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schemas[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (malli.registry._schemas["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
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
return malli$registry$Registry$_schemas$dyn_20896(this$);
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
malli.registry.t_malli$registry20784 = (function (m,fm,meta20785){
this.m = m;
this.fm = fm;
this.meta20785 = meta20785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20786,meta20785__$1){
var self__ = this;
var _20786__$1 = this;
return (new malli.registry.t_malli$registry20784(self__.m,self__.fm,meta20785__$1));
}));

(malli.registry.t_malli$registry20784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20786){
var self__ = this;
var _20786__$1 = this;
return self__.meta20785;
}));

(malli.registry.t_malli$registry20784.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20784.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry20784.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry20784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta20785","meta20785",258395464,null)], null);
}));

(malli.registry.t_malli$registry20784.cljs$lang$type = true);

(malli.registry.t_malli$registry20784.cljs$lang$ctorStr = "malli.registry/t_malli$registry20784");

(malli.registry.t_malli$registry20784.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20784");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20784.
 */
malli.registry.__GT_t_malli$registry20784 = (function malli$registry$__GT_t_malli$registry20784(m,fm,meta20785){
return (new malli.registry.t_malli$registry20784(m,fm,meta20785));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry20784(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20789 = (function (m,meta20790){
this.m = m;
this.meta20790 = meta20790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20791,meta20790__$1){
var self__ = this;
var _20791__$1 = this;
return (new malli.registry.t_malli$registry20789(self__.m,meta20790__$1));
}));

(malli.registry.t_malli$registry20789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20791){
var self__ = this;
var _20791__$1 = this;
return self__.meta20790;
}));

(malli.registry.t_malli$registry20789.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20789.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry20789.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry20789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta20790","meta20790",-993615753,null)], null);
}));

(malli.registry.t_malli$registry20789.cljs$lang$type = true);

(malli.registry.t_malli$registry20789.cljs$lang$ctorStr = "malli.registry/t_malli$registry20789");

(malli.registry.t_malli$registry20789.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20789");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20789.
 */
malli.registry.__GT_t_malli$registry20789 = (function malli$registry$__GT_t_malli$registry20789(m,meta20790){
return (new malli.registry.t_malli$registry20789(m,meta20790));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry20789(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry20801 = (function (meta20802){
this.meta20802 = meta20802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20803,meta20802__$1){
var self__ = this;
var _20803__$1 = this;
return (new malli.registry.t_malli$registry20801(meta20802__$1));
}));

(malli.registry.t_malli$registry20801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20803){
var self__ = this;
var _20803__$1 = this;
return self__.meta20802;
}));

(malli.registry.t_malli$registry20801.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20801.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry20801.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry20801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20802","meta20802",717188745,null)], null);
}));

(malli.registry.t_malli$registry20801.cljs$lang$type = true);

(malli.registry.t_malli$registry20801.cljs$lang$ctorStr = "malli.registry/t_malli$registry20801");

(malli.registry.t_malli$registry20801.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20801");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20801.
 */
malli.registry.__GT_t_malli$registry20801 = (function malli$registry$__GT_t_malli$registry20801(meta20802){
return (new malli.registry.t_malli$registry20801(meta20802));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry20801(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20820 = (function (_QMARK_registries,registries,meta20821){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta20821 = meta20821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20822,meta20821__$1){
var self__ = this;
var _20822__$1 = this;
return (new malli.registry.t_malli$registry20820(self__._QMARK_registries,self__.registries,meta20821__$1));
}));

(malli.registry.t_malli$registry20820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20822){
var self__ = this;
var _20822__$1 = this;
return self__.meta20821;
}));

(malli.registry.t_malli$registry20820.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20820.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__20814_SHARP_){
return malli.registry._schema(p1__20814_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry20820.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry20820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta20821","meta20821",346642570,null)], null);
}));

(malli.registry.t_malli$registry20820.cljs$lang$type = true);

(malli.registry.t_malli$registry20820.cljs$lang$ctorStr = "malli.registry/t_malli$registry20820");

(malli.registry.t_malli$registry20820.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20820");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20820.
 */
malli.registry.__GT_t_malli$registry20820 = (function malli$registry$__GT_t_malli$registry20820(_QMARK_registries,registries,meta20821){
return (new malli.registry.t_malli$registry20820(_QMARK_registries,registries,meta20821));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20905 = arguments.length;
var i__5750__auto___20906 = (0);
while(true){
if((i__5750__auto___20906 < len__5749__auto___20905)){
args__5755__auto__.push((arguments[i__5750__auto___20906]));

var G__20907 = (i__5750__auto___20906 + (1));
i__5750__auto___20906 = G__20907;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry20820(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq20815){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20815));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20829 = (function (db,meta20830){
this.db = db;
this.meta20830 = meta20830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20831,meta20830__$1){
var self__ = this;
var _20831__$1 = this;
return (new malli.registry.t_malli$registry20829(self__.db,meta20830__$1));
}));

(malli.registry.t_malli$registry20829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20831){
var self__ = this;
var _20831__$1 = this;
return self__.meta20830;
}));

(malli.registry.t_malli$registry20829.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20829.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry20829.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry20829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta20830","meta20830",-495593068,null)], null);
}));

(malli.registry.t_malli$registry20829.cljs$lang$type = true);

(malli.registry.t_malli$registry20829.cljs$lang$ctorStr = "malli.registry/t_malli$registry20829");

(malli.registry.t_malli$registry20829.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20829");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20829.
 */
malli.registry.__GT_t_malli$registry20829 = (function malli$registry$__GT_t_malli$registry20829(db,meta20830){
return (new malli.registry.t_malli$registry20829(db,meta20830));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry20829(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20835 = (function (meta20836){
this.meta20836 = meta20836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20837,meta20836__$1){
var self__ = this;
var _20837__$1 = this;
return (new malli.registry.t_malli$registry20835(meta20836__$1));
}));

(malli.registry.t_malli$registry20835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20837){
var self__ = this;
var _20837__$1 = this;
return self__.meta20836;
}));

(malli.registry.t_malli$registry20835.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20835.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry20835.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry20835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20836","meta20836",-533603981,null)], null);
}));

(malli.registry.t_malli$registry20835.cljs$lang$type = true);

(malli.registry.t_malli$registry20835.cljs$lang$ctorStr = "malli.registry/t_malli$registry20835");

(malli.registry.t_malli$registry20835.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20835");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20835.
 */
malli.registry.__GT_t_malli$registry20835 = (function malli$registry$__GT_t_malli$registry20835(meta20836){
return (new malli.registry.t_malli$registry20835(meta20836));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry20835(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20847 = (function (meta20848){
this.meta20848 = meta20848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20849,meta20848__$1){
var self__ = this;
var _20849__$1 = this;
return (new malli.registry.t_malli$registry20847(meta20848__$1));
}));

(malli.registry.t_malli$registry20847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20849){
var self__ = this;
var _20849__$1 = this;
return self__.meta20848;
}));

(malli.registry.t_malli$registry20847.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20847.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry20847.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry20847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20848","meta20848",1569359721,null)], null);
}));

(malli.registry.t_malli$registry20847.cljs$lang$type = true);

(malli.registry.t_malli$registry20847.cljs$lang$ctorStr = "malli.registry/t_malli$registry20847");

(malli.registry.t_malli$registry20847.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20847");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20847.
 */
malli.registry.__GT_t_malli$registry20847 = (function malli$registry$__GT_t_malli$registry20847(meta20848){
return (new malli.registry.t_malli$registry20847(meta20848));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry20847(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20863 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta20864){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta20864 = meta20864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20865,meta20864__$1){
var self__ = this;
var _20865__$1 = this;
return (new malli.registry.t_malli$registry20863(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta20864__$1));
}));

(malli.registry.t_malli$registry20863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20865){
var self__ = this;
var _20865__$1 = this;
return self__.meta20864;
}));

(malli.registry.t_malli$registry20863.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20863.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__20871 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__20871.cljs$core$IFn$_invoke$arity$1 ? fexpr__20871.cljs$core$IFn$_invoke$arity$1(name) : fexpr__20871.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__20872 = name;
var G__20873 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__20872,G__20873) : self__.provider.call(null,G__20872,G__20873));
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

(malli.registry.t_malli$registry20863.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry20863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta20864","meta20864",1052497265,null)], null);
}));

(malli.registry.t_malli$registry20863.cljs$lang$type = true);

(malli.registry.t_malli$registry20863.cljs$lang$ctorStr = "malli.registry/t_malli$registry20863");

(malli.registry.t_malli$registry20863.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20863");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20863.
 */
malli.registry.__GT_t_malli$registry20863 = (function malli$registry$__GT_t_malli$registry20863(default_registry,provider,cache_STAR_,registry_STAR_,meta20864){
return (new malli.registry.t_malli$registry20863(default_registry,provider,cache_STAR_,registry_STAR_,meta20864));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry20863(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
