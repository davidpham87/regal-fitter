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

var malli$registry$Registry$_schema$dyn_20168 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_20168(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_20170 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_20170(this$);
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
malli.registry.t_malli$registry20074 = (function (m,fm,meta20075){
this.m = m;
this.fm = fm;
this.meta20075 = meta20075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20076,meta20075__$1){
var self__ = this;
var _20076__$1 = this;
return (new malli.registry.t_malli$registry20074(self__.m,self__.fm,meta20075__$1));
}));

(malli.registry.t_malli$registry20074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20076){
var self__ = this;
var _20076__$1 = this;
return self__.meta20075;
}));

(malli.registry.t_malli$registry20074.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20074.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry20074.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry20074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta20075","meta20075",40478122,null)], null);
}));

(malli.registry.t_malli$registry20074.cljs$lang$type = true);

(malli.registry.t_malli$registry20074.cljs$lang$ctorStr = "malli.registry/t_malli$registry20074");

(malli.registry.t_malli$registry20074.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20074");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20074.
 */
malli.registry.__GT_t_malli$registry20074 = (function malli$registry$__GT_t_malli$registry20074(m,fm,meta20075){
return (new malli.registry.t_malli$registry20074(m,fm,meta20075));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry20074(m,fm,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry20116 = (function (meta20117){
this.meta20117 = meta20117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20118,meta20117__$1){
var self__ = this;
var _20118__$1 = this;
return (new malli.registry.t_malli$registry20116(meta20117__$1));
}));

(malli.registry.t_malli$registry20116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20118){
var self__ = this;
var _20118__$1 = this;
return self__.meta20117;
}));

(malli.registry.t_malli$registry20116.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20116.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry20116.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry20116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20117","meta20117",-788884053,null)], null);
}));

(malli.registry.t_malli$registry20116.cljs$lang$type = true);

(malli.registry.t_malli$registry20116.cljs$lang$ctorStr = "malli.registry/t_malli$registry20116");

(malli.registry.t_malli$registry20116.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20116");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20116.
 */
malli.registry.__GT_t_malli$registry20116 = (function malli$registry$__GT_t_malli$registry20116(meta20117){
return (new malli.registry.t_malli$registry20116(meta20117));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry20116(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20123 = (function (_QMARK_registries,registries,meta20124){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta20124 = meta20124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20125,meta20124__$1){
var self__ = this;
var _20125__$1 = this;
return (new malli.registry.t_malli$registry20123(self__._QMARK_registries,self__.registries,meta20124__$1));
}));

(malli.registry.t_malli$registry20123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20125){
var self__ = this;
var _20125__$1 = this;
return self__.meta20124;
}));

(malli.registry.t_malli$registry20123.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20123.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__20120_SHARP_){
return malli.registry._schema(p1__20120_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry20123.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry20123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta20124","meta20124",-1236906095,null)], null);
}));

(malli.registry.t_malli$registry20123.cljs$lang$type = true);

(malli.registry.t_malli$registry20123.cljs$lang$ctorStr = "malli.registry/t_malli$registry20123");

(malli.registry.t_malli$registry20123.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20123");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20123.
 */
malli.registry.__GT_t_malli$registry20123 = (function malli$registry$__GT_t_malli$registry20123(_QMARK_registries,registries,meta20124){
return (new malli.registry.t_malli$registry20123(_QMARK_registries,registries,meta20124));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20192 = arguments.length;
var i__5750__auto___20193 = (0);
while(true){
if((i__5750__auto___20193 < len__5749__auto___20192)){
args__5755__auto__.push((arguments[i__5750__auto___20193]));

var G__20194 = (i__5750__auto___20193 + (1));
i__5750__auto___20193 = G__20194;
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
return (new malli.registry.t_malli$registry20123(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq20121){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20121));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20127 = (function (db,meta20128){
this.db = db;
this.meta20128 = meta20128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20129,meta20128__$1){
var self__ = this;
var _20129__$1 = this;
return (new malli.registry.t_malli$registry20127(self__.db,meta20128__$1));
}));

(malli.registry.t_malli$registry20127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20129){
var self__ = this;
var _20129__$1 = this;
return self__.meta20128;
}));

(malli.registry.t_malli$registry20127.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20127.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry20127.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry20127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta20128","meta20128",1879863243,null)], null);
}));

(malli.registry.t_malli$registry20127.cljs$lang$type = true);

(malli.registry.t_malli$registry20127.cljs$lang$ctorStr = "malli.registry/t_malli$registry20127");

(malli.registry.t_malli$registry20127.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20127");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20127.
 */
malli.registry.__GT_t_malli$registry20127 = (function malli$registry$__GT_t_malli$registry20127(db,meta20128){
return (new malli.registry.t_malli$registry20127(db,meta20128));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry20127(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20138 = (function (meta20139){
this.meta20139 = meta20139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20140,meta20139__$1){
var self__ = this;
var _20140__$1 = this;
return (new malli.registry.t_malli$registry20138(meta20139__$1));
}));

(malli.registry.t_malli$registry20138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20140){
var self__ = this;
var _20140__$1 = this;
return self__.meta20139;
}));

(malli.registry.t_malli$registry20138.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20138.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry20138.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry20138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20139","meta20139",152084626,null)], null);
}));

(malli.registry.t_malli$registry20138.cljs$lang$type = true);

(malli.registry.t_malli$registry20138.cljs$lang$ctorStr = "malli.registry/t_malli$registry20138");

(malli.registry.t_malli$registry20138.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20138");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20138.
 */
malli.registry.__GT_t_malli$registry20138 = (function malli$registry$__GT_t_malli$registry20138(meta20139){
return (new malli.registry.t_malli$registry20138(meta20139));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry20138(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20149 = (function (meta20150){
this.meta20150 = meta20150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20151,meta20150__$1){
var self__ = this;
var _20151__$1 = this;
return (new malli.registry.t_malli$registry20149(meta20150__$1));
}));

(malli.registry.t_malli$registry20149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20151){
var self__ = this;
var _20151__$1 = this;
return self__.meta20150;
}));

(malli.registry.t_malli$registry20149.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20149.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry20149.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry20149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20150","meta20150",822601490,null)], null);
}));

(malli.registry.t_malli$registry20149.cljs$lang$type = true);

(malli.registry.t_malli$registry20149.cljs$lang$ctorStr = "malli.registry/t_malli$registry20149");

(malli.registry.t_malli$registry20149.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20149");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20149.
 */
malli.registry.__GT_t_malli$registry20149 = (function malli$registry$__GT_t_malli$registry20149(meta20150){
return (new malli.registry.t_malli$registry20149(meta20150));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry20149(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry20156 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta20157){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta20157 = meta20157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry20156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20158,meta20157__$1){
var self__ = this;
var _20158__$1 = this;
return (new malli.registry.t_malli$registry20156(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta20157__$1));
}));

(malli.registry.t_malli$registry20156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20158){
var self__ = this;
var _20158__$1 = this;
return self__.meta20157;
}));

(malli.registry.t_malli$registry20156.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry20156.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__20159 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__20159.cljs$core$IFn$_invoke$arity$1 ? fexpr__20159.cljs$core$IFn$_invoke$arity$1(name) : fexpr__20159.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__20160 = name;
var G__20161 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__20160,G__20161) : self__.provider.call(null,G__20160,G__20161));
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

(malli.registry.t_malli$registry20156.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry20156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta20157","meta20157",1293796875,null)], null);
}));

(malli.registry.t_malli$registry20156.cljs$lang$type = true);

(malli.registry.t_malli$registry20156.cljs$lang$ctorStr = "malli.registry/t_malli$registry20156");

(malli.registry.t_malli$registry20156.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry20156");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry20156.
 */
malli.registry.__GT_t_malli$registry20156 = (function malli$registry$__GT_t_malli$registry20156(default_registry,provider,cache_STAR_,registry_STAR_,meta20157){
return (new malli.registry.t_malli$registry20156(default_registry,provider,cache_STAR_,registry_STAR_,meta20157));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry20156(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
