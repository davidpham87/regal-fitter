goog.provide('reitit.core');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_28449 = (function (this$,opts){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.expand[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5520__auto__.call(null,this$,opts));
} else {
var m__5518__auto__ = (reitit.core.expand["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5518__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_28449(this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.core.Expand["function"] = true);

(reitit.core.expand["function"] = (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

(cljs.core.Var.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$__$1], null);
}));

(reitit.core.Expand["null"] = true);

(reitit.core.expand["null"] = (function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_28450 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.router_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.core.router_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_28450(this$);
}
});

var reitit$core$Router$routes$dyn_28451 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.routes[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.core.routes["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_28451(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_28452 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_28452(this$);
}
});

var reitit$core$Router$options$dyn_28453 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.options[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.core.options["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_28453(this$);
}
});

var reitit$core$Router$route_names$dyn_28454 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.route_names[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.core.route_names["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_28454(this$);
}
});

var reitit$core$Router$match_by_path$dyn_28455 = (function (this$,path){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.match_by_path[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5520__auto__.call(null,this$,path));
} else {
var m__5518__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5518__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_28455(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_28456 = (function() {
var G__28457 = null;
var G__28457__2 = (function (this$,name){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5520__auto__.call(null,this$,name));
} else {
var m__5518__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5518__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__28457__3 = (function (this$,name,path_params){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5520__auto__.call(null,this$,name,path_params));
} else {
var m__5518__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5518__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__28457__4 = (function (this$,name,path_params,opts){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(this$,name,path_params,opts) : m__5520__auto__.call(null,this$,name,path_params,opts));
} else {
var m__5518__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(this$,name,path_params,opts) : m__5518__auto__.call(null,this$,name,path_params,opts));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__28457 = function(this$,name,path_params,opts){
switch(arguments.length){
case 2:
return G__28457__2.call(this,this$,name);
case 3:
return G__28457__3.call(this,this$,name,path_params);
case 4:
return G__28457__4.call(this,this$,name,path_params,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28457.cljs$core$IFn$_invoke$arity$2 = G__28457__2;
G__28457.cljs$core$IFn$_invoke$arity$3 = G__28457__3;
G__28457.cljs$core$IFn$_invoke$arity$4 = G__28457__4;
return G__28457;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__28306 = arguments.length;
switch (G__28306) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_28456(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_28456(this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$4 = (function (this$,name,path_params,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$4 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$4(this$,name,path_params,opts);
} else {
return reitit$core$Router$match_by_name$dyn_28456(this$,name,path_params,opts);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 4);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k28311,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__28315 = k28311;
var G__28315__$1 = (((G__28315 instanceof cljs.core.Keyword))?G__28315.fqn:null);
switch (G__28315__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28311,else__5472__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__28316){
var vec__28317 = p__28316;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28317,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#reitit.core.Match{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28310){
var self__ = this;
var G__28310__$1 = this;
return (new cljs.core.RecordIter((0),G__28310__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28312,other28313){
var self__ = this;
var this28312__$1 = this;
return (((!((other28313 == null)))) && ((((this28312__$1.constructor === other28313.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28312__$1.template,other28313.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28312__$1.data,other28313.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28312__$1.result,other28313.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28312__$1.path_params,other28313.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28312__$1.path,other28313.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28312__$1.__extmap,other28313.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k28311){
var self__ = this;
var this__5476__auto____$1 = this;
var G__28320 = k28311;
var G__28320__$1 = (((G__28320 instanceof cljs.core.Keyword))?G__28320.fqn:null);
switch (G__28320__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28311);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__28310){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__28321 = cljs.core.keyword_identical_QMARK_;
var expr__28322 = k__5478__auto__;
if(cljs.core.truth_((pred__28321.cljs$core$IFn$_invoke$arity$2 ? pred__28321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__28322) : pred__28321.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__28322)))){
return (new reitit.core.Match(G__28310,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28321.cljs$core$IFn$_invoke$arity$2 ? pred__28321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__28322) : pred__28321.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__28322)))){
return (new reitit.core.Match(self__.template,G__28310,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28321.cljs$core$IFn$_invoke$arity$2 ? pred__28321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__28322) : pred__28321.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__28322)))){
return (new reitit.core.Match(self__.template,self__.data,G__28310,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28321.cljs$core$IFn$_invoke$arity$2 ? pred__28321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__28322) : pred__28321.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__28322)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__28310,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28321.cljs$core$IFn$_invoke$arity$2 ? pred__28321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__28322) : pred__28321.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__28322)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__28310,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__28310),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__28310){
var self__ = this;
var this__5468__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__28310,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__28314){
var extmap__5511__auto__ = (function (){var G__28324 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28314,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__28314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28324);
} else {
return G__28324;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__28314),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__28314),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__28314),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__28314),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__28314),null,cljs.core.not_empty(extmap__5511__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k28326,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__28330 = k28326;
var G__28330__$1 = (((G__28330 instanceof cljs.core.Keyword))?G__28330.fqn:null);
switch (G__28330__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28326,else__5472__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__28331){
var vec__28332 = p__28331;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28332,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#reitit.core.PartialMatch{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28325){
var self__ = this;
var G__28325__$1 = this;
return (new cljs.core.RecordIter((0),G__28325__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28327,other28328){
var self__ = this;
var this28327__$1 = this;
return (((!((other28328 == null)))) && ((((this28327__$1.constructor === other28328.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28327__$1.template,other28328.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28327__$1.data,other28328.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28327__$1.result,other28328.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28327__$1.path_params,other28328.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28327__$1.required,other28328.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28327__$1.__extmap,other28328.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k28326){
var self__ = this;
var this__5476__auto____$1 = this;
var G__28335 = k28326;
var G__28335__$1 = (((G__28335 instanceof cljs.core.Keyword))?G__28335.fqn:null);
switch (G__28335__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28326);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__28325){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__28336 = cljs.core.keyword_identical_QMARK_;
var expr__28337 = k__5478__auto__;
if(cljs.core.truth_((pred__28336.cljs$core$IFn$_invoke$arity$2 ? pred__28336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__28337) : pred__28336.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__28337)))){
return (new reitit.core.PartialMatch(G__28325,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28336.cljs$core$IFn$_invoke$arity$2 ? pred__28336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__28337) : pred__28336.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__28337)))){
return (new reitit.core.PartialMatch(self__.template,G__28325,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28336.cljs$core$IFn$_invoke$arity$2 ? pred__28336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__28337) : pred__28336.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__28337)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__28325,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28336.cljs$core$IFn$_invoke$arity$2 ? pred__28336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__28337) : pred__28336.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__28337)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__28325,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28336.cljs$core$IFn$_invoke$arity$2 ? pred__28336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__28337) : pred__28336.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__28337)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__28325,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__28325),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__28325){
var self__ = this;
var this__5468__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__28325,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__28329){
var extmap__5511__auto__ = (function (){var G__28339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28329,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__28329)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28339);
} else {
return G__28339;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__28329),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__28329),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__28329),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__28329),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__28329),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__28341 = arguments.length;
switch (G__28341) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5823__auto__ = reitit.core.match_by_name(this$,name,path_params);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Create routing path from given match and optional query-parameters map.
 */
reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__28343 = arguments.length;
switch (G__28343) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__28344 = match;
var G__28344__$1 = (((G__28344 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__28344));
if((G__28344__$1 == null)){
return null;
} else {
var G__28345 = G__28344__$1;
if(cljs.core.seq(query_params)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28345)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params)));
} else {
return G__28345;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core28362 = (function (matcher,names,compiled_routes,routes,lookup,vec__28349,pl,nl,match_by_path,compiler,opts,meta28363){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__28349 = vec__28349;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta28363 = meta28363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core28362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28364,meta28363__$1){
var self__ = this;
var _28364__$1 = this;
return (new reitit.core.t_reitit$core28362(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__28349,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta28363__$1));
}));

(reitit.core.t_reitit$core28362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28364){
var self__ = this;
var _28364__$1 = this;
return self__.meta28363;
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$match_by_name$arity$3 = (function (r,name,path_params){
var self__ = this;
var r__$1 = this;
return r__$1.reitit$core$Router$match_by_name$arity$4(null,name,path_params,null);
}));

(reitit.core.t_reitit$core28362.prototype.reitit$core$Router$match_by_name$arity$4 = (function (_,name,path_params,opts__$1){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var G__28365 = reitit.impl.path_params.cljs$core$IFn$_invoke$arity$2(path_params,opts__$1);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__28365) : match.call(null,G__28365));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__28349","vec__28349",-1978459888,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta28363","meta28363",-1002471822,null)], null);
}));

(reitit.core.t_reitit$core28362.cljs$lang$type = true);

(reitit.core.t_reitit$core28362.cljs$lang$ctorStr = "reitit.core/t_reitit$core28362");

(reitit.core.t_reitit$core28362.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reitit.core/t_reitit$core28362");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core28362.
 */
reitit.core.__GT_t_reitit$core28362 = (function reitit$core$__GT_t_reitit$core28362(matcher,names,compiled_routes,routes,lookup,vec__28349,pl,nl,match_by_path,compiler,opts,meta28363){
return (new reitit.core.t_reitit$core28362(matcher,names,compiled_routes,routes,lookup,vec__28349,pl,nl,match_by_path,compiler,opts,meta28363));
});


/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__28348 = arguments.length;
switch (G__28348) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__28349 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28352,p__28353){
var vec__28354 = p__28352;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28354,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28354,(1),null);
var vec__28357 = p__28353;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(0),null);
var map__28360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(1),null);
var map__28360__$1 = cljs.core.__destructure_map(map__28360);
var data = map__28360__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(2),null);
var map__28361 = reitit.impl.parse(p,opts);
var map__28361__$1 = cljs.core.__destructure_map(map__28361);
var route = map__28361__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28361__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__28346_SHARP_){
var temp__5823__auto__ = reitit.impl.path_for(route,p1__28346_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__28346_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__28346_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28349,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28349,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core28362(matcher,names,compiled_routes,routes,lookup,vec__28349,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core28381 = (function (names,data,compiled_routes,routes,lookup,pl,vec__28369,nl,opts,meta28382){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.vec__28369 = vec__28369;
this.nl = nl;
this.opts = opts;
this.meta28382 = meta28382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core28381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28383,meta28382__$1){
var self__ = this;
var _28383__$1 = this;
return (new reitit.core.t_reitit$core28381(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.vec__28369,self__.nl,self__.opts,meta28382__$1));
}));

(reitit.core.t_reitit$core28381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28383){
var self__ = this;
var _28383__$1 = this;
return self__.meta28382;
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$match_by_name$arity$3 = (function (r,name,path_params){
var self__ = this;
var r__$1 = this;
return r__$1.reitit$core$Router$match_by_name$arity$4(null,name,path_params,null);
}));

(reitit.core.t_reitit$core28381.prototype.reitit$core$Router$match_by_name$arity$4 = (function (_,name,path_params,opts__$1){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var G__28384 = reitit.impl.path_params.cljs$core$IFn$_invoke$arity$2(path_params,opts__$1);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__28384) : match.call(null,G__28384));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"vec__28369","vec__28369",-1322581164,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta28382","meta28382",1002029291,null)], null);
}));

(reitit.core.t_reitit$core28381.cljs$lang$type = true);

(reitit.core.t_reitit$core28381.cljs$lang$ctorStr = "reitit.core/t_reitit$core28381");

(reitit.core.t_reitit$core28381.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reitit.core/t_reitit$core28381");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core28381.
 */
reitit.core.__GT_t_reitit$core28381 = (function reitit$core$__GT_t_reitit$core28381(names,data,compiled_routes,routes,lookup,pl,vec__28369,nl,opts,meta28382){
return (new reitit.core.t_reitit$core28381(names,data,compiled_routes,routes,lookup,pl,vec__28369,nl,opts,meta28382));
});


/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__28368 = arguments.length;
switch (G__28368) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5825__auto___28472 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5825__auto___28472){
var wilds_28473 = temp__5825__auto___28472;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+"can't create :lookup-router with wildcard routes: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_28473)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_28473,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__28369 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28372,p__28373){
var vec__28374 = p__28372;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(1),null);
var vec__28377 = p__28373;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(0),null);
var map__28380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(1),null);
var map__28380__$1 = cljs.core.__destructure_map(map__28380);
var data = map__28380__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28377,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__28366_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__28366_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28369,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28369,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core28381(names,data,compiled_routes,routes,lookup,pl,vec__28369,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core28401 = (function (matcher,names,compiled_routes,routes,lookup,vec__28388,pl,nl,match_by_path,compiler,opts,meta28402){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__28388 = vec__28388;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta28402 = meta28402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core28401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28403,meta28402__$1){
var self__ = this;
var _28403__$1 = this;
return (new reitit.core.t_reitit$core28401(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__28388,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta28402__$1));
}));

(reitit.core.t_reitit$core28401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28403){
var self__ = this;
var _28403__$1 = this;
return self__.meta28402;
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = (function (){var and__5160__auto__ = self__.match_by_path;
if(cljs.core.truth_(and__5160__auto__)){
return (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$match_by_name$arity$3 = (function (r,name,path_params){
var self__ = this;
var r__$1 = this;
return r__$1.reitit$core$Router$match_by_name$arity$4(null,name,path_params,null);
}));

(reitit.core.t_reitit$core28401.prototype.reitit$core$Router$match_by_name$arity$4 = (function (_,name,path_params,opts__$1){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var G__28404 = reitit.impl.path_params.cljs$core$IFn$_invoke$arity$2(path_params,opts__$1);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__28404) : match.call(null,G__28404));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__28388","vec__28388",-1264682739,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta28402","meta28402",549377662,null)], null);
}));

(reitit.core.t_reitit$core28401.cljs$lang$type = true);

(reitit.core.t_reitit$core28401.cljs$lang$ctorStr = "reitit.core/t_reitit$core28401");

(reitit.core.t_reitit$core28401.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reitit.core/t_reitit$core28401");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core28401.
 */
reitit.core.__GT_t_reitit$core28401 = (function reitit$core$__GT_t_reitit$core28401(matcher,names,compiled_routes,routes,lookup,vec__28388,pl,nl,match_by_path,compiler,opts,meta28402){
return (new reitit.core.t_reitit$core28401(matcher,names,compiled_routes,routes,lookup,vec__28388,pl,nl,match_by_path,compiler,opts,meta28402));
});


/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__28387 = arguments.length;
switch (G__28387) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__28388 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28391,p__28392){
var vec__28393 = p__28391;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28393,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28393,(1),null);
var vec__28396 = p__28392;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28396,(0),null);
var map__28399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28396,(1),null);
var map__28399__$1 = cljs.core.__destructure_map(map__28399);
var data = map__28399__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28399__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28396,(2),null);
var map__28400 = reitit.impl.parse(p,opts);
var map__28400__$1 = cljs.core.__destructure_map(map__28400);
var route = map__28400__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28400__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__28385_SHARP_){
var temp__5823__auto__ = reitit.impl.path_for(route,p1__28385_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__28385_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__28385_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28388,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28388,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = (cljs.core.truth_(matcher)?reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler):null);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core28401(matcher,names,compiled_routes,routes,lookup,vec__28388,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core28416 = (function (vec__28410,p,names,match,data,compiled_routes,routes,vec__28413,vec__28407,n,result,opts,meta28417){
this.vec__28410 = vec__28410;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__28413 = vec__28413;
this.vec__28407 = vec__28407;
this.n = n;
this.result = result;
this.opts = opts;
this.meta28417 = meta28417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core28416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28418,meta28417__$1){
var self__ = this;
var _28418__$1 = this;
return (new reitit.core.t_reitit$core28416(self__.vec__28410,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__28413,self__.vec__28407,self__.n,self__.result,self__.opts,meta28417__$1));
}));

(reitit.core.t_reitit$core28416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28418){
var self__ = this;
var _28418__$1 = this;
return self__.meta28417;
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$match_by_name$arity$3 = (function (r,name,path_params){
var self__ = this;
var r__$1 = this;
return r__$1.reitit$core$Router$match_by_name$arity$4(null,name,path_params,null);
}));

(reitit.core.t_reitit$core28416.prototype.reitit$core$Router$match_by_name$arity$4 = (function (_,name,path_params,opts__$1){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.cljs$core$IFn$_invoke$arity$2(path_params,opts__$1));
} else {
return null;
}
}));

(reitit.core.t_reitit$core28416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__28410","vec__28410",-1946772188,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__28413","vec__28413",704677738,null),new cljs.core.Symbol(null,"vec__28407","vec__28407",1327564750,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta28417","meta28417",1848851101,null)], null);
}));

(reitit.core.t_reitit$core28416.cljs$lang$type = true);

(reitit.core.t_reitit$core28416.cljs$lang$ctorStr = "reitit.core/t_reitit$core28416");

(reitit.core.t_reitit$core28416.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reitit.core/t_reitit$core28416");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core28416.
 */
reitit.core.__GT_t_reitit$core28416 = (function reitit$core$__GT_t_reitit$core28416(vec__28410,p,names,match,data,compiled_routes,routes,vec__28413,vec__28407,n,result,opts,meta28417){
return (new reitit.core.t_reitit$core28416(vec__28410,p,names,match,data,compiled_routes,routes,vec__28413,vec__28407,n,result,opts,meta28417));
});


/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__28406 = arguments.length;
switch (G__28406) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__5162__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((""+":single-static-path-router requires exactly 1 static route: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__28407 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(0),null);
var names = vec__28407;
var vec__28410 = compiled_routes;
var vec__28413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28413,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28413,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28413,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core28416(vec__28410,p__$1,names,match,data,compiled_routes,routes,vec__28413,vec__28407,n,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core28422 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__28421,opts,wildcard_router,meta28423){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.map__28421 = map__28421;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta28423 = meta28423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core28422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28424,meta28423__$1){
var self__ = this;
var _28424__$1 = this;
return (new reitit.core.t_reitit$core28422(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.map__28421,self__.opts,self__.wildcard_router,meta28423__$1));
}));

(reitit.core.t_reitit$core28422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28424){
var self__ = this;
var _28424__$1 = this;
return self__.meta28423;
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = reitit.core.match_by_name(self__.static_router,name);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$match_by_name$arity$3 = (function (r,name,path_params){
var self__ = this;
var r__$1 = this;
return r__$1.reitit$core$Router$match_by_name$arity$4(null,name,path_params,null);
}));

(reitit.core.t_reitit$core28422.prototype.reitit$core$Router$match_by_name$arity$4 = (function (_,name,path_params,opts__$1){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = reitit.core.match_by_name(self__.static_router,name,path_params,opts__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name,path_params,opts__$1);
}
}));

(reitit.core.t_reitit$core28422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"map__28421","map__28421",1951983862,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta28423","meta28423",-1729092098,null)], null);
}));

(reitit.core.t_reitit$core28422.cljs$lang$type = true);

(reitit.core.t_reitit$core28422.cljs$lang$ctorStr = "reitit.core/t_reitit$core28422");

(reitit.core.t_reitit$core28422.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reitit.core/t_reitit$core28422");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core28422.
 */
reitit.core.__GT_t_reitit$core28422 = (function reitit$core$__GT_t_reitit$core28422(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__28421,opts,wildcard_router,meta28423){
return (new reitit.core.t_reitit$core28422(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__28421,opts,wildcard_router,meta28423));
});


/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__28420 = arguments.length;
switch (G__28420) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__28421 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__28421__$1 = cljs.core.__destructure_map(map__28421);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28421__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28421__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core28422(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__28421__$1,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core28429 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__28428,mixed_router,linear_router,opts,meta28430){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.map__28428 = map__28428;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){
var self__ = this;
var _28431__$1 = this;
return (new reitit.core.t_reitit$core28429(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.map__28428,self__.mixed_router,self__.linear_router,self__.opts,meta28430__$1));
}));

(reitit.core.t_reitit$core28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){
var self__ = this;
var _28431__$1 = this;
return self__.meta28430;
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = reitit.core.match_by_name(self__.mixed_router,name);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$match_by_name$arity$3 = (function (r,name,path_params){
var self__ = this;
var r__$1 = this;
return r__$1.reitit$core$Router$match_by_name$arity$4(null,name,path_params,null);
}));

(reitit.core.t_reitit$core28429.prototype.reitit$core$Router$match_by_name$arity$4 = (function (_,name,path_params,opts__$1){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = reitit.core.match_by_name(self__.mixed_router,name,path_params,opts__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name,path_params,opts__$1);
}
}));

(reitit.core.t_reitit$core28429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"map__28428","map__28428",1889978135,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta28430","meta28430",-1657478422,null)], null);
}));

(reitit.core.t_reitit$core28429.cljs$lang$type = true);

(reitit.core.t_reitit$core28429.cljs$lang$ctorStr = "reitit.core/t_reitit$core28429");

(reitit.core.t_reitit$core28429.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reitit.core/t_reitit$core28429");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core28429.
 */
reitit.core.__GT_t_reitit$core28429 = (function reitit$core$__GT_t_reitit$core28429(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__28428,mixed_router,linear_router,opts,meta28430){
return (new reitit.core.t_reitit$core28429(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__28428,mixed_router,linear_router,opts,meta28430));
});


/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__28427 = arguments.length;
switch (G__28427) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths((function (){var or__5162__auto__ = new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return reitit.impl.path_conflicting_routes(compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__28425_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__28425_SHARP_));
});
var map__28428 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__28428__$1 = cljs.core.__destructure_map(map__28428);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28428__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28428__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
return (new reitit.core.t_reitit$core28429(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__28428__$1,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__28432,_){
var vec__28433 = p__28432;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(0),null);
var map__28436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(1),null);
var map__28436__$1 = cljs.core.__destructure_map(map__28436);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__28437,_){
var vec__28438 = p__28437;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28438,(0),null);
var map__28441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28438,(1),null);
var map__28441__$1 = cljs.core.__destructure_map(map__28441);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28441__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"update-paths","update-paths",-813404599),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.any_QMARK_], null),reitit.impl.accumulate], null)], null),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key             | description
 *   | ----------------|-------------
 *   | `:path`         | Base-path for routes
 *   | `:routes`       | Initial resolved routes (default `[]`)
 *   | `:data`         | Initial route data (default `{}`)
 *   | `:spec`         | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`       | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`       | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`       | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`      | Function of `route opts => result` to compile a route handler
 *   | `:validate`     | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts`    | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception`    | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:meta-merge`   | Function of `left right => merged` to merge route-data (default `meta-merge.core/meta-merge`)
 *   | `:update-paths` | Sequence of Vectors with elements `update-path` and `function`, used to preprocess route data
 *   | `:router`       | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__28443 = arguments.length;
switch (G__28443) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__28444 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__28444__$1 = cljs.core.__destructure_map(map__28444);
var opts__$1 = map__28444__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28444__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28444__$1,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not((function (){var and__5160__auto__ = router;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(conflicts);
} else {
return and__5160__auto__;
}
})()))?reitit.impl.path_conflicting_routes(routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5825__auto___28498 = (function (){var and__5160__auto__ = conflicts;
if(cljs.core.truth_(and__5160__auto__)){
return reitit.impl.unresolved_conflicts(path_conflicting);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto___28498)){
var conflict_report_28500 = temp__5825__auto___28498;
(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(conflict_report_28500) : conflicts.call(null,conflict_report_28500));
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5825__auto___28501 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5825__auto___28501)){
var validate_28502 = temp__5825__auto___28501;
(validate_28502.cljs$core$IFn$_invoke$arity$2 ? validate_28502.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_28502.call(null,compiled_routes,opts__$1));
} else {
}

var G__28447 = compiled_routes;
var G__28448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("reitit.core","path-conflicting","reitit.core/path-conflicting",617644429),path_conflicting);
return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(G__28447,G__28448) : router__$1.call(null,G__28447,G__28448));
}catch (e28445){if((e28445 instanceof Error)){
var e = e28445;
throw (function (){var fexpr__28446 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__28446.cljs$core$IFn$_invoke$arity$1 ? fexpr__28446.cljs$core$IFn$_invoke$arity$1(e) : fexpr__28446.call(null,e));
})();
} else {
throw e28445;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
