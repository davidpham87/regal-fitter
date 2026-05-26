goog.provide('reitit.coercion');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

var reitit$coercion$Coercion$_get_name$dyn_28582 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._get_name[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
});
/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_name$dyn_28582(this$);
}
});

var reitit$coercion$Coercion$_get_options$dyn_28583 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._get_options[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
});
/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_options$dyn_28583(this$);
}
});

var reitit$coercion$Coercion$_get_apidocs$dyn_28584 = (function (this$,specification,data){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5520__auto__.call(null,this$,specification,data));
} else {
var m__5518__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5518__auto__.call(null,this$,specification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
});
/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
return reitit$coercion$Coercion$_get_apidocs$dyn_28584(this$,specification,data);
}
});

var reitit$coercion$Coercion$_get_model_apidocs$dyn_28585 = (function (this$,specification,model,options){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._get_model_apidocs[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5520__auto__.call(null,this$,specification,model,options));
} else {
var m__5518__auto__ = (reitit.coercion._get_model_apidocs["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5518__auto__.call(null,this$,specification,model,options));
} else {
throw cljs.core.missing_protocol("Coercion.-get-model-apidocs",this$);
}
}
});
/**
 * Convert model into a format that can be used in api docs
 */
reitit.coercion._get_model_apidocs = (function reitit$coercion$_get_model_apidocs(this$,specification,model,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4 == null)))))){
return this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4(this$,specification,model,options);
} else {
return reitit$coercion$Coercion$_get_model_apidocs$dyn_28585(this$,specification,model,options);
}
});

var reitit$coercion$Coercion$_compile_model$dyn_28587 = (function (this$,model,name){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5520__auto__.call(null,this$,model,name));
} else {
var m__5518__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5518__auto__.call(null,this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
});
/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
return reitit$coercion$Coercion$_compile_model$dyn_28587(this$,model,name);
}
});

var reitit$coercion$Coercion$_open_model$dyn_28588 = (function (this$,model){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._open_model[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5520__auto__.call(null,this$,model));
} else {
var m__5518__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5518__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
});
/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_open_model$dyn_28588(this$,model);
}
});

var reitit$coercion$Coercion$_encode_error$dyn_28589 = (function (this$,error){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5520__auto__.call(null,this$,error));
} else {
var m__5518__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5518__auto__.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
});
/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
return reitit$coercion$Coercion$_encode_error$dyn_28589(this$,error);
}
});

var reitit$coercion$Coercion$_request_coercer$dyn_28590 = (function (this$,type,model){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5520__auto__.call(null,this$,type,model));
} else {
var m__5518__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5518__auto__.call(null,this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
return reitit$coercion$Coercion$_request_coercer$dyn_28590(this$,type,model);
}
});

var reitit$coercion$Coercion$_response_coercer$dyn_28591 = (function (this$,model){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5520__auto__.call(null,this$,model));
} else {
var m__5518__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5518__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_response_coercer$dyn_28591(this$,model);
}
});

var reitit$coercion$Coercion$_query_string_coercer$dyn_28593 = (function (this$,model){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (reitit.coercion._query_string_coercer[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5520__auto__.call(null,this$,model));
} else {
var m__5518__auto__ = (reitit.coercion._query_string_coercer["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5518__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-query-string-coercer",this$);
}
}
});
/**
 * Returns a `value => value` query string coercion function
 */
reitit.coercion._query_string_coercer = (function reitit$coercion$_query_string_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_query_string_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_query_string_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_query_string_coercer$dyn_28593(this$,model);
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
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k28467,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__28474 = k28467;
switch (G__28474) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28467,else__5472__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__28475){
var vec__28476 = p__28475;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28476,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28476,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28466){
var self__ = this;
var G__28466__$1 = this;
return (new cljs.core.RecordIter((0),G__28466__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28468,other28469){
var self__ = this;
var this28468__$1 = this;
return (((!((other28469 == null)))) && ((((this28468__$1.constructor === other28469.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28468__$1.__extmap,other28469.__extmap)))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k28467){
var self__ = this;
var this__5476__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k28467);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__28466){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__28482 = cljs.core.keyword_identical_QMARK_;
var expr__28483 = k__5478__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__28466),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__28466){
var self__ = this;
var this__5468__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__28466,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__28470){
var extmap__5511__auto__ = (function (){var G__28485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__28470);
if(cljs.core.record_QMARK_(G__28470)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28485);
} else {
return G__28485;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__5511__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
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
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k28487,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__28492 = k28487;
var G__28492__$1 = (((G__28492 instanceof cljs.core.Keyword))?G__28492.fqn:null);
switch (G__28492__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28487,else__5472__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__28493){
var vec__28494 = p__28493;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28486){
var self__ = this;
var G__28486__$1 = this;
return (new cljs.core.RecordIter((0),G__28486__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28488,other28489){
var self__ = this;
var this28488__$1 = this;
return (((!((other28489 == null)))) && ((((this28488__$1.constructor === other28489.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28488__$1.in,other28489.in)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28488__$1.style,other28489.style)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28488__$1.keywordize_QMARK_,other28489.keywordize_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28488__$1.open_QMARK_,other28489.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28488__$1.__extmap,other28489.__extmap)))))))))))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k28487){
var self__ = this;
var this__5476__auto____$1 = this;
var G__28499 = k28487;
var G__28499__$1 = (((G__28499 instanceof cljs.core.Keyword))?G__28499.fqn:null);
switch (G__28499__$1) {
case "in":
case "style":
case "keywordize?":
case "open?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28487);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__28486){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__28503 = cljs.core.keyword_identical_QMARK_;
var expr__28504 = k__5478__auto__;
if(cljs.core.truth_((pred__28503.cljs$core$IFn$_invoke$arity$2 ? pred__28503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__28504) : pred__28503.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__28504)))){
return (new reitit.coercion.ParameterCoercion(G__28486,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28503.cljs$core$IFn$_invoke$arity$2 ? pred__28503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__28504) : pred__28503.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__28504)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__28486,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28503.cljs$core$IFn$_invoke$arity$2 ? pred__28503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__28504) : pred__28503.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__28504)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__28486,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28503.cljs$core$IFn$_invoke$arity$2 ? pred__28503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),expr__28504) : pred__28503.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__28504)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__28486,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__28486),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__28486){
var self__ = this;
var this__5468__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__28486,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__28490){
var extmap__5511__auto__ = (function (){var G__28506 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28490,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], 0));
if(cljs.core.record_QMARK_(G__28490)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28506);
} else {
return G__28506;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__28490),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__28490),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__28490),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__28490),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"fragment","fragment",826775688),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?(""+"Request coercion failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))):"Request coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null)),new cljs.core.Keyword(null,"request","request",1772954723),request)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?(""+"Response coercion failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))):"Response coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.Keyword(null,"request","request",1772954723),request),new cljs.core.Keyword(null,"response","response",-1068424192),response)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion._identity_coercer = (function reitit$coercion$_identity_coercer(value,_format){
return value;
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__28508){
var map__28509 = p__28508;
var map__28509__$1 = cljs.core.__destructure_map(map__28509);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28509__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28509__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28509__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
var skip = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28509__$1,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(coercion)){
var temp__5825__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null,type));
if(cljs.core.truth_(temp__5825__auto__)){
var map__28510 = temp__5825__auto__;
var map__28510__$1 = cljs.core.__destructure_map(map__28510);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_((skip.cljs$core$IFn$_invoke$arity$1 ? skip.cljs$core$IFn$_invoke$arity$1(style) : skip.call(null,style)))){
return null;
} else {
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var __GT_open = (cljs.core.truth_(open_QMARK_)?(function (p1__28507_SHARP_){
return reitit.coercion._open_model(coercion,p1__28507_SHARP_);
}):cljs.core.identity);
var coercer = reitit.coercion._request_coercer(coercion,style,(__GT_open.cljs$core$IFn$_invoke$arity$1 ? __GT_open.cljs$core$IFn$_invoke$arity$1(model) : __GT_open.call(null,model)));
if(cljs.core.truth_(coercer)){
return (function (request){
var value = transform(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.get_default = (function reitit$coercion$get_default(request_or_response){
var or__5162__auto__ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(request_or_response));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var G__28511 = request_or_response;
var G__28511__$1 = (((G__28511 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__28511));
if((G__28511__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),G__28511__$1);
}
}
});
reitit.coercion.content_request_coercer = (function reitit$coercion$content_request_coercer(coercion,p__28512,p__28513){
var map__28514 = p__28512;
var map__28514__$1 = cljs.core.__destructure_map(map__28514);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28514__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28514__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__28515 = p__28513;
var map__28515__$1 = cljs.core.__destructure_map(map__28515);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28515__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28515__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
if(cljs.core.truth_(coercion)){
var in$ = new cljs.core.Keyword(null,"body-params","body-params",-369749490);
var format__GT_coercer = (function (){var G__28516 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),body)], null)], null):null),(function (){var iter__5649__auto__ = (function reitit$coercion$content_request_coercer_$_iter__28517(s__28518){
return (new cljs.core.LazySeq(null,(function (){
var s__28518__$1 = s__28518;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28518__$1);
if(temp__5825__auto__){
var s__28518__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28518__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28518__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28520 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28519 = (0);
while(true){
if((i__28519 < size__5648__auto__)){
var vec__28521 = cljs.core._nth(c__5647__auto__,i__28519);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28521,(0),null);
var map__28524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28521,(1),null);
var map__28524__$1 = cljs.core.__destructure_map(map__28524);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28524__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__28520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null));

var G__28614 = (i__28519 + (1));
i__28519 = G__28614;
continue;
} else {
var G__28615 = (i__28519 + (1));
i__28519 = G__28615;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28520),reitit$coercion$content_request_coercer_$_iter__28517(cljs.core.chunk_rest(s__28518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28520),null);
}
} else {
var vec__28525 = cljs.core.first(s__28518__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28525,(0),null);
var map__28528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28525,(1),null);
var map__28528__$1 = cljs.core.__destructure_map(map__28528);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28528__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null),reitit$coercion$content_request_coercer_$_iter__28517(cljs.core.rest(s__28518__$2)));
} else {
var G__28616 = cljs.core.rest(s__28518__$2);
s__28518__$1 = G__28616;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(content);
})());
var G__28516__$1 = (((G__28516 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__28516));
var G__28516__$2 = (((G__28516__$1 == null))?null:cljs.core.seq(G__28516__$1));
if((G__28516__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28516__$2);
}
})();
if(cljs.core.truth_(format__GT_coercer)){
return (function (request){
var value = in$.cljs$core$IFn$_invoke$arity$1(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var coercer = (function (){var or__5162__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null,format));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return reitit.coercion._identity_coercer;
}
}
})();
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response","response",-1068424192)], 0)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null,request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(var_args){
var G__28530 = arguments.length;
switch (G__28530) {
case 3:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3 = (function (coercion,parameters,opts){
var G__28531 = (function (){var iter__5649__auto__ = (function reitit$coercion$iter__28532(s__28533){
return (new cljs.core.LazySeq(null,(function (){
var s__28533__$1 = s__28533;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28533__$1);
if(temp__5825__auto__){
var s__28533__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28533__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28533__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28535 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28534 = (0);
while(true){
if((i__28534 < size__5648__auto__)){
var vec__28536 = cljs.core._nth(c__5647__auto__,i__28534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__28535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__28621 = (i__28534 + (1));
i__28534 = G__28621;
continue;
} else {
var G__28622 = (i__28534 + (1));
i__28534 = G__28622;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28535),reitit$coercion$iter__28532(cljs.core.chunk_rest(s__28533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28535),null);
}
} else {
var vec__28539 = cljs.core.first(s__28533__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28539,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$iter__28532(cljs.core.rest(s__28533__$2)));
} else {
var G__28623 = cljs.core.rest(s__28533__$2);
s__28533__$1 = G__28623;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(parameters);
})();
var G__28531__$1 = (((G__28531 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__28531));
var G__28531__$2 = (((G__28531__$1 == null))?null:cljs.core.seq(G__28531__$1));
if((G__28531__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28531__$2);
}
}));

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4 = (function (coercion,parameters,route_request,opts){
var crc = (cljs.core.truth_(route_request)?(function (){var G__28542 = reitit.coercion.content_request_coercer(coercion,route_request,opts);
if((G__28542 == null)){
return null;
} else {
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"request","request",1772954723),G__28542],null));
}
})():null);
var rcs = reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters,(function (){var G__28543 = opts;
if(cljs.core.truth_(route_request)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28543,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null));
} else {
return G__28543;
}
})());
if(cljs.core.truth_((function (){var and__5160__auto__ = crc;
if(cljs.core.truth_(and__5160__auto__)){
return rcs;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(crc,cljs.core.vec(rcs));
} else {
var or__5162__auto__ = crc;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return rcs;
}
}
}));

(reitit.coercion.request_coercers.cljs$lang$maxFixedArity = 4);

reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,response){
var or__5162__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = new cljs.core.Keyword("muuntaja","content-type","muuntaja/content-type",-1482055333).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
}
}
});
reitit.coercion._format__GT_coercer = (function reitit$coercion$_format__GT_coercer(coercion,p__28544,_opts){
var map__28545 = p__28544;
var map__28545__$1 = cljs.core.__destructure_map(map__28545);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28545__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28545__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._response_coercer(coercion,body)], null)], null):null),(function (){var iter__5649__auto__ = (function reitit$coercion$_format__GT_coercer_$_iter__28546(s__28547){
return (new cljs.core.LazySeq(null,(function (){
var s__28547__$1 = s__28547;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28547__$1);
if(temp__5825__auto__){
var s__28547__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28547__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28547__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28549 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28548 = (0);
while(true){
if((i__28548 < size__5648__auto__)){
var vec__28550 = cljs.core._nth(c__5647__auto__,i__28548);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(0),null);
var map__28553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(1),null);
var map__28553__$1 = cljs.core.__destructure_map(map__28553);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28553__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__28549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null));

var G__28624 = (i__28548 + (1));
i__28548 = G__28624;
continue;
} else {
var G__28625 = (i__28548 + (1));
i__28548 = G__28625;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28549),reitit$coercion$_format__GT_coercer_$_iter__28546(cljs.core.chunk_rest(s__28547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28549),null);
}
} else {
var vec__28554 = cljs.core.first(s__28547__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554,(0),null);
var map__28557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554,(1),null);
var map__28557__$1 = cljs.core.__destructure_map(map__28557);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28557__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null),reitit$coercion$_format__GT_coercer_$_iter__28546(cljs.core.rest(s__28547__$2)));
} else {
var G__28626 = cljs.core.rest(s__28547__$2);
s__28547__$1 = G__28626;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(content);
})())));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,responses,p__28558){
var map__28559 = p__28558;
var map__28559__$1 = cljs.core.__destructure_map(map__28559);
var opts = map__28559__$1;
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28559__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28559__$1,new cljs.core.Keyword(null,"serialize-failed-result","serialize-failed-result",391398953));
if(cljs.core.truth_(coercion)){
var status__GT_format__GT_coercer = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5649__auto__ = (function reitit$coercion$response_coercer_$_iter__28560(s__28561){
return (new cljs.core.LazySeq(null,(function (){
var s__28561__$1 = s__28561;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28561__$1);
if(temp__5825__auto__){
var s__28561__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28561__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28561__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28563 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28562 = (0);
while(true){
if((i__28562 < size__5648__auto__)){
var vec__28564 = cljs.core._nth(c__5647__auto__,i__28562);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(1),null);
cljs.core.chunk_append(b__28563,(function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),status)) || (cljs.core.int_QMARK_(status)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response status must be int or :default",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion._format__GT_coercer(coercion,model,opts)], null);
})()
);

var G__28627 = (i__28562 + (1));
i__28562 = G__28627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28563),reitit$coercion$response_coercer_$_iter__28560(cljs.core.chunk_rest(s__28561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28563),null);
}
} else {
var vec__28567 = cljs.core.first(s__28561__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28567,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28567,(1),null);
return cljs.core.cons((function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),status)) || (cljs.core.int_QMARK_(status)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response status must be int or :default",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),status], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion._format__GT_coercer(coercion,model,opts)], null);
})()
,reitit$coercion$response_coercer_$_iter__28560(cljs.core.rest(s__28561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(responses);
})());
if(cljs.core.every_QMARK_(cljs.core.empty_QMARK_,cljs.core.vals(status__GT_format__GT_coercer))){
return null;
} else {
return (function (request,response){
var format__GT_coercer = (function (){var or__5162__auto__ = (function (){var G__28570 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1(G__28570) : status__GT_format__GT_coercer.call(null,G__28570));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? status__GT_format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : status__GT_format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
}
})();
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null,request,response));
var coercer = (cljs.core.truth_(format__GT_coercer)?(function (){var or__5162__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null,format));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
}
})():null);
if(cljs.core.not(coercer)){
return response;
} else {
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var coerced = (function (){var G__28571 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var G__28572 = format;
return (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(G__28571,G__28572) : coercer.call(null,G__28571,G__28572));
})();
var result = ((reitit.coercion.error_QMARK_(coerced))?reitit.coercion.response_coercion_failed_BANG_(coerced,coercion,value,request,response,serialize_failed_result):coerced);
return reitit.impl.fast_assoc(response,new cljs.core.Keyword(null,"body","body",-2049205669),result);
}
});
}
} else {
return null;
}
});
reitit.coercion._compile_parameters = (function reitit$coercion$_compile_parameters(data,coercion){
return reitit.impl.path_update(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.any_QMARK_], null),(function (p1__28573_SHARP_){
return reitit.coercion._compile_model(coercion,p1__28573_SHARP_,null);
})], null)], null));
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to both compile the schemas and create compiled coercers
 *   into Match under `:result with the following keys:
 * 
 * | key       | description
 * | ----------|-------------
 * | `:data`   | data with compiled schemas
 * | `:coerce` | function of `Match -> coerced parameters` to coerce parameters
 * 
 *   A pre-requisite to use [[coerce!]].
 * 
 *   NOTE: this is not needed with ring/http, where the coercion compilation is
 *   managed in the request coercion middleware/interceptors.
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__28574,opts){
var vec__28575 = p__28574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28575,(0),null);
var map__28578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28575,(1),null);
var map__28578__$1 = cljs.core.__destructure_map(map__28578);
var data = map__28578__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28578__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28578__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__5160__auto__ = parameters;
if(cljs.core.truth_(and__5160__auto__)){
return coercion;
} else {
return and__5160__auto__;
}
})())){
var map__28579 = reitit.coercion._compile_parameters(data,coercion);
var map__28579__$1 = cljs.core.__destructure_map(map__28579);
var data__$1 = map__28579__$1;
var parameters__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28579__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504),reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters__$1,opts)], null);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled coercers in `Match`
 *   under path `[:result :coerce]` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced. If coercion or parameters
 *   are not defined, returns `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5823__auto__ = new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match));
if(cljs.core.truth_(temp__5823__auto__)){
var coercers = temp__5823__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});
/**
 * Uses an input schema and coercion implementation from the given match to
 *   encode query-parameters map.
 * 
 *   If no match, no input schema or coercion implementation, just returns the
 *   original parameters map.
 */
reitit.coercion.coerce_query_params = (function reitit$coercion$coerce_query_params(match,query_params){
if(cljs.core.truth_(query_params)){
var coercion = new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var schema = (cljs.core.truth_(coercion)?reitit.coercion._compile_model(coercion,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match))),null):null);
var coercer = (cljs.core.truth_((function (){var and__5160__auto__ = schema;
if(cljs.core.truth_(and__5160__auto__)){
return coercion;
} else {
return and__5160__auto__;
}
})())?reitit.coercion._query_string_coercer(coercion,schema):null);
if(cljs.core.truth_(coercer)){
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(query_params,new cljs.core.Keyword(null,"default","default",-1987822328)) : coercer.call(null,query_params,new cljs.core.Keyword(null,"default","default",-1987822328)));
if(reitit.coercion.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Query parameters coercion failed",result);
} else {
return result;
}
} else {
return query_params;
}
} else {
return null;
}
});
/**
 * Create routing path from given match and optional query-parameters map.
 * 
 *   Query-parameters are encoded using the input schema and coercion implementation.
 */
reitit.coercion.match__GT_path = (function reitit$coercion$match__GT_path(var_args){
var G__28581 = arguments.length;
switch (G__28581) {
case 1:
return reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1(match);
}));

(reitit.coercion.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,reitit.coercion.coerce_query_params(match,query_params));
}));

(reitit.coercion.match__GT_path.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.coercion.js.map
