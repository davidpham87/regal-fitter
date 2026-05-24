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

var malli$registry$Registry$_schema$dyn_20147 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_20147(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_20149 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_20149(this$);
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
malli.registry.t_malli$registry20068 = (function (m,fm,meta20069){
this.m = m;
this.fm = fm;
this.meta20069 = meta20069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20070,meta20069__$1){
var self__ = this;
var _20070__$1 = this;
return (new malli.registry.t_malli$registry20068(self__.m,self__.fm,meta20069__$1));
}));

(malli.registry.t_malli$registry20068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20070){
var self__ = this;
var _20070__$1 = this;
return self__.meta20069;
}));

(malli.registry.t_malli$registry20068.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20068.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry20068.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry20068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta20069","meta20069",-477930518,null)], null);
}));

(malli.registry.t_malli$registry20068.cljs$lang$type = true);

(malli.registry.t_malli$registry20068.cljs$lang$ctorStr = "malli.registry/t_malli$registry20068");

(malli.registry.t_malli$registry20068.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20068");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20068.
 */
malli.registry.__GT_t_malli$registry20068 = (function malli$registry$__GT_t_malli$registry20068(m,fm,meta20069){
return (new malli.registry.t_malli$registry20068(m,fm,meta20069));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry20068(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20102 = (function (m,meta20103){
this.m = m;
this.meta20103 = meta20103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20104,meta20103__$1){
var self__ = this;
var _20104__$1 = this;
return (new malli.registry.t_malli$registry20102(self__.m,meta20103__$1));
}));

(malli.registry.t_malli$registry20102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20104){
var self__ = this;
var _20104__$1 = this;
return self__.meta20103;
}));

(malli.registry.t_malli$registry20102.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20102.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry20102.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry20102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta20103","meta20103",120928737,null)], null);
}));

(malli.registry.t_malli$registry20102.cljs$lang$type = true);

(malli.registry.t_malli$registry20102.cljs$lang$ctorStr = "malli.registry/t_malli$registry20102");

(malli.registry.t_malli$registry20102.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20102");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20102.
 */
malli.registry.__GT_t_malli$registry20102 = (function malli$registry$__GT_t_malli$registry20102(m,meta20103){
return (new malli.registry.t_malli$registry20102(m,meta20103));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry20102(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry20111 = (function (meta20112){
this.meta20112 = meta20112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20113,meta20112__$1){
var self__ = this;
var _20113__$1 = this;
return (new malli.registry.t_malli$registry20111(meta20112__$1));
}));

(malli.registry.t_malli$registry20111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20113){
var self__ = this;
var _20113__$1 = this;
return self__.meta20112;
}));

(malli.registry.t_malli$registry20111.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20111.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry20111.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry20111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20112","meta20112",-582868377,null)], null);
}));

(malli.registry.t_malli$registry20111.cljs$lang$type = true);

(malli.registry.t_malli$registry20111.cljs$lang$ctorStr = "malli.registry/t_malli$registry20111");

(malli.registry.t_malli$registry20111.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20111");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20111.
 */
malli.registry.__GT_t_malli$registry20111 = (function malli$registry$__GT_t_malli$registry20111(meta20112){
return (new malli.registry.t_malli$registry20111(meta20112));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry20111(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20121 = (function (_QMARK_registries,registries,meta20122){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta20122 = meta20122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20123,meta20122__$1){
var self__ = this;
var _20123__$1 = this;
return (new malli.registry.t_malli$registry20121(self__._QMARK_registries,self__.registries,meta20122__$1));
}));

(malli.registry.t_malli$registry20121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20123){
var self__ = this;
var _20123__$1 = this;
return self__.meta20122;
}));

(malli.registry.t_malli$registry20121.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20121.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__20118_SHARP_){
return malli.registry._schema(p1__20118_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry20121.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry20121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta20122","meta20122",105203685,null)], null);
}));

(malli.registry.t_malli$registry20121.cljs$lang$type = true);

(malli.registry.t_malli$registry20121.cljs$lang$ctorStr = "malli.registry/t_malli$registry20121");

(malli.registry.t_malli$registry20121.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20121");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20121.
 */
malli.registry.__GT_t_malli$registry20121 = (function malli$registry$__GT_t_malli$registry20121(_QMARK_registries,registries,meta20122){
return (new malli.registry.t_malli$registry20121(_QMARK_registries,registries,meta20122));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20164 = arguments.length;
var i__5750__auto___20165 = (0);
while(true){
if((i__5750__auto___20165 < len__5749__auto___20164)){
args__5755__auto__.push((arguments[i__5750__auto___20165]));

var G__20166 = (i__5750__auto___20165 + (1));
i__5750__auto___20165 = G__20166;
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
return (new malli.registry.t_malli$registry20121(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq20120){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20120));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20124 = (function (db,meta20125){
this.db = db;
this.meta20125 = meta20125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20126,meta20125__$1){
var self__ = this;
var _20126__$1 = this;
return (new malli.registry.t_malli$registry20124(self__.db,meta20125__$1));
}));

(malli.registry.t_malli$registry20124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20126){
var self__ = this;
var _20126__$1 = this;
return self__.meta20125;
}));

(malli.registry.t_malli$registry20124.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20124.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry20124.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry20124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta20125","meta20125",-1441164041,null)], null);
}));

(malli.registry.t_malli$registry20124.cljs$lang$type = true);

(malli.registry.t_malli$registry20124.cljs$lang$ctorStr = "malli.registry/t_malli$registry20124");

(malli.registry.t_malli$registry20124.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20124");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20124.
 */
malli.registry.__GT_t_malli$registry20124 = (function malli$registry$__GT_t_malli$registry20124(db,meta20125){
return (new malli.registry.t_malli$registry20124(db,meta20125));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry20124(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20129 = (function (meta20130){
this.meta20130 = meta20130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20131,meta20130__$1){
var self__ = this;
var _20131__$1 = this;
return (new malli.registry.t_malli$registry20129(meta20130__$1));
}));

(malli.registry.t_malli$registry20129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20131){
var self__ = this;
var _20131__$1 = this;
return self__.meta20130;
}));

(malli.registry.t_malli$registry20129.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20129.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry20129.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry20129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20130","meta20130",849179942,null)], null);
}));

(malli.registry.t_malli$registry20129.cljs$lang$type = true);

(malli.registry.t_malli$registry20129.cljs$lang$ctorStr = "malli.registry/t_malli$registry20129");

(malli.registry.t_malli$registry20129.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20129");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20129.
 */
malli.registry.__GT_t_malli$registry20129 = (function malli$registry$__GT_t_malli$registry20129(meta20130){
return (new malli.registry.t_malli$registry20129(meta20130));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry20129(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20132 = (function (meta20133){
this.meta20133 = meta20133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20134,meta20133__$1){
var self__ = this;
var _20134__$1 = this;
return (new malli.registry.t_malli$registry20132(meta20133__$1));
}));

(malli.registry.t_malli$registry20132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20134){
var self__ = this;
var _20134__$1 = this;
return self__.meta20133;
}));

(malli.registry.t_malli$registry20132.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20132.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry20132.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry20132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20133","meta20133",1083606062,null)], null);
}));

(malli.registry.t_malli$registry20132.cljs$lang$type = true);

(malli.registry.t_malli$registry20132.cljs$lang$ctorStr = "malli.registry/t_malli$registry20132");

(malli.registry.t_malli$registry20132.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20132");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20132.
 */
malli.registry.__GT_t_malli$registry20132 = (function malli$registry$__GT_t_malli$registry20132(meta20133){
return (new malli.registry.t_malli$registry20132(meta20133));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry20132(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20135 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta20136){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta20136 = meta20136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20137,meta20136__$1){
var self__ = this;
var _20137__$1 = this;
return (new malli.registry.t_malli$registry20135(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta20136__$1));
}));

(malli.registry.t_malli$registry20135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20137){
var self__ = this;
var _20137__$1 = this;
return self__.meta20136;
}));

(malli.registry.t_malli$registry20135.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20135.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__20138 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__20138.cljs$core$IFn$_invoke$arity$1 ? fexpr__20138.cljs$core$IFn$_invoke$arity$1(name) : fexpr__20138.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__20139 = name;
var G__20140 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__20139,G__20140) : self__.provider.call(null,G__20139,G__20140));
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

(malli.registry.t_malli$registry20135.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry20135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta20136","meta20136",1005984722,null)], null);
}));

(malli.registry.t_malli$registry20135.cljs$lang$type = true);

(malli.registry.t_malli$registry20135.cljs$lang$ctorStr = "malli.registry/t_malli$registry20135");

(malli.registry.t_malli$registry20135.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20135");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20135.
 */
malli.registry.__GT_t_malli$registry20135 = (function malli$registry$__GT_t_malli$registry20135(default_registry,provider,cache_STAR_,registry_STAR_,meta20136){
return (new malli.registry.t_malli$registry20135(default_registry,provider,cache_STAR_,registry_STAR_,meta20136));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry20135(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
