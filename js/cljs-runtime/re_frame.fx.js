goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__30527 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30528 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30528);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___30620 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___30620)){
var new_db_30621 = temp__5825__auto___30620;
var fexpr__30529_30622 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30529_30622.cljs$core$IFn$_invoke$arity$1 ? fexpr__30529_30622.cljs$core$IFn$_invoke$arity$1(new_db_30621) : fexpr__30529_30622.call(null,new_db_30621));
} else {
}

var seq__30530 = cljs.core.seq(effects_without_db);
var chunk__30531 = null;
var count__30532 = (0);
var i__30533 = (0);
while(true){
if((i__30533 < count__30532)){
var vec__30540 = chunk__30531.cljs$core$IIndexed$_nth$arity$2(null,i__30533);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30540,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30540,(1),null);
var temp__5823__auto___30623 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___30623)){
var effect_fn_30626 = temp__5823__auto___30623;
(effect_fn_30626.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30626.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30626.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__30627 = seq__30530;
var G__30628 = chunk__30531;
var G__30629 = count__30532;
var G__30630 = (i__30533 + (1));
seq__30530 = G__30627;
chunk__30531 = G__30628;
count__30532 = G__30629;
i__30533 = G__30630;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30530);
if(temp__5825__auto__){
var seq__30530__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30530__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30530__$1);
var G__30631 = cljs.core.chunk_rest(seq__30530__$1);
var G__30632 = c__5694__auto__;
var G__30633 = cljs.core.count(c__5694__auto__);
var G__30634 = (0);
seq__30530 = G__30631;
chunk__30531 = G__30632;
count__30532 = G__30633;
i__30533 = G__30634;
continue;
} else {
var vec__30547 = cljs.core.first(seq__30530__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30547,(1),null);
var temp__5823__auto___30635 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___30635)){
var effect_fn_30636 = temp__5823__auto___30635;
(effect_fn_30636.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30636.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30636.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__30637 = cljs.core.next(seq__30530__$1);
var G__30638 = null;
var G__30639 = (0);
var G__30640 = (0);
seq__30530 = G__30637;
chunk__30531 = G__30638;
count__30532 = G__30639;
i__30533 = G__30640;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__30099__auto___30641 = re_frame.interop.now();
var duration__30100__auto___30642 = (end__30099__auto___30641 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30100__auto___30642,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__30099__auto___30641);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30527);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___30643 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___30643)){
var new_db_30644 = temp__5825__auto___30643;
var fexpr__30553_30645 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__30553_30645.cljs$core$IFn$_invoke$arity$1 ? fexpr__30553_30645.cljs$core$IFn$_invoke$arity$1(new_db_30644) : fexpr__30553_30645.call(null,new_db_30644));
} else {
}

var seq__30554 = cljs.core.seq(effects_without_db);
var chunk__30555 = null;
var count__30556 = (0);
var i__30557 = (0);
while(true){
if((i__30557 < count__30556)){
var vec__30564 = chunk__30555.cljs$core$IIndexed$_nth$arity$2(null,i__30557);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564,(1),null);
var temp__5823__auto___30646 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___30646)){
var effect_fn_30647 = temp__5823__auto___30646;
(effect_fn_30647.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30647.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30647.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__30648 = seq__30554;
var G__30649 = chunk__30555;
var G__30650 = count__30556;
var G__30651 = (i__30557 + (1));
seq__30554 = G__30648;
chunk__30555 = G__30649;
count__30556 = G__30650;
i__30557 = G__30651;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30554);
if(temp__5825__auto__){
var seq__30554__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30554__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30554__$1);
var G__30652 = cljs.core.chunk_rest(seq__30554__$1);
var G__30653 = c__5694__auto__;
var G__30654 = cljs.core.count(c__5694__auto__);
var G__30655 = (0);
seq__30554 = G__30652;
chunk__30555 = G__30653;
count__30556 = G__30654;
i__30557 = G__30655;
continue;
} else {
var vec__30569 = cljs.core.first(seq__30554__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30569,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30569,(1),null);
var temp__5823__auto___30656 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___30656)){
var effect_fn_30657 = temp__5823__auto___30656;
(effect_fn_30657.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30657.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30657.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__30658 = cljs.core.next(seq__30554__$1);
var G__30659 = null;
var G__30660 = (0);
var G__30661 = (0);
seq__30554 = G__30658;
chunk__30555 = G__30659;
count__30556 = G__30660;
i__30557 = G__30661;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__30572){
var map__30573 = p__30572;
var map__30573__$1 = cljs.core.__destructure_map(map__30573);
var effect = map__30573__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30573__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30573__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__30574 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30575 = null;
var count__30576 = (0);
var i__30577 = (0);
while(true){
if((i__30577 < count__30576)){
var effect = chunk__30575.cljs$core$IIndexed$_nth$arity$2(null,i__30577);
re_frame.fx.dispatch_later(effect);


var G__30664 = seq__30574;
var G__30665 = chunk__30575;
var G__30666 = count__30576;
var G__30667 = (i__30577 + (1));
seq__30574 = G__30664;
chunk__30575 = G__30665;
count__30576 = G__30666;
i__30577 = G__30667;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30574);
if(temp__5825__auto__){
var seq__30574__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30574__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30574__$1);
var G__30668 = cljs.core.chunk_rest(seq__30574__$1);
var G__30669 = c__5694__auto__;
var G__30670 = cljs.core.count(c__5694__auto__);
var G__30671 = (0);
seq__30574 = G__30668;
chunk__30575 = G__30669;
count__30576 = G__30670;
i__30577 = G__30671;
continue;
} else {
var effect = cljs.core.first(seq__30574__$1);
re_frame.fx.dispatch_later(effect);


var G__30674 = cljs.core.next(seq__30574__$1);
var G__30675 = null;
var G__30676 = (0);
var G__30677 = (0);
seq__30574 = G__30674;
chunk__30575 = G__30675;
count__30576 = G__30676;
i__30577 = G__30677;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__30578 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30579 = null;
var count__30580 = (0);
var i__30581 = (0);
while(true){
if((i__30581 < count__30580)){
var vec__30594 = chunk__30579.cljs$core$IIndexed$_nth$arity$2(null,i__30581);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30594,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30594,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___30678 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___30678)){
var effect_fn_30679 = temp__5823__auto___30678;
(effect_fn_30679.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30679.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30679.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30680 = seq__30578;
var G__30681 = chunk__30579;
var G__30682 = count__30580;
var G__30683 = (i__30581 + (1));
seq__30578 = G__30680;
chunk__30579 = G__30681;
count__30580 = G__30682;
i__30581 = G__30683;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30578);
if(temp__5825__auto__){
var seq__30578__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30578__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30578__$1);
var G__30684 = cljs.core.chunk_rest(seq__30578__$1);
var G__30685 = c__5694__auto__;
var G__30686 = cljs.core.count(c__5694__auto__);
var G__30687 = (0);
seq__30578 = G__30684;
chunk__30579 = G__30685;
count__30580 = G__30686;
i__30581 = G__30687;
continue;
} else {
var vec__30597 = cljs.core.first(seq__30578__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30597,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30597,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___30688 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___30688)){
var effect_fn_30689 = temp__5823__auto___30688;
(effect_fn_30689.cljs$core$IFn$_invoke$arity$1 ? effect_fn_30689.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_30689.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__30690 = cljs.core.next(seq__30578__$1);
var G__30691 = null;
var G__30692 = (0);
var G__30693 = (0);
seq__30578 = G__30690;
chunk__30579 = G__30691;
count__30580 = G__30692;
i__30581 = G__30693;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__30602 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__30603 = null;
var count__30604 = (0);
var i__30605 = (0);
while(true){
if((i__30605 < count__30604)){
var event = chunk__30603.cljs$core$IIndexed$_nth$arity$2(null,i__30605);
re_frame.router.dispatch(event);


var G__30694 = seq__30602;
var G__30695 = chunk__30603;
var G__30696 = count__30604;
var G__30697 = (i__30605 + (1));
seq__30602 = G__30694;
chunk__30603 = G__30695;
count__30604 = G__30696;
i__30605 = G__30697;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30602);
if(temp__5825__auto__){
var seq__30602__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30602__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30602__$1);
var G__30698 = cljs.core.chunk_rest(seq__30602__$1);
var G__30699 = c__5694__auto__;
var G__30700 = cljs.core.count(c__5694__auto__);
var G__30701 = (0);
seq__30602 = G__30698;
chunk__30603 = G__30699;
count__30604 = G__30700;
i__30605 = G__30701;
continue;
} else {
var event = cljs.core.first(seq__30602__$1);
re_frame.router.dispatch(event);


var G__30702 = cljs.core.next(seq__30602__$1);
var G__30703 = null;
var G__30704 = (0);
var G__30705 = (0);
seq__30602 = G__30702;
chunk__30603 = G__30703;
count__30604 = G__30704;
i__30605 = G__30705;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__30607 = cljs.core.seq(value);
var chunk__30608 = null;
var count__30609 = (0);
var i__30610 = (0);
while(true){
if((i__30610 < count__30609)){
var event = chunk__30608.cljs$core$IIndexed$_nth$arity$2(null,i__30610);
clear_event(event);


var G__30706 = seq__30607;
var G__30707 = chunk__30608;
var G__30708 = count__30609;
var G__30709 = (i__30610 + (1));
seq__30607 = G__30706;
chunk__30608 = G__30707;
count__30609 = G__30708;
i__30610 = G__30709;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30607);
if(temp__5825__auto__){
var seq__30607__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30607__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__30607__$1);
var G__30712 = cljs.core.chunk_rest(seq__30607__$1);
var G__30713 = c__5694__auto__;
var G__30714 = cljs.core.count(c__5694__auto__);
var G__30715 = (0);
seq__30607 = G__30712;
chunk__30608 = G__30713;
count__30609 = G__30714;
i__30610 = G__30715;
continue;
} else {
var event = cljs.core.first(seq__30607__$1);
clear_event(event);


var G__30716 = cljs.core.next(seq__30607__$1);
var G__30717 = null;
var G__30718 = (0);
var G__30719 = (0);
seq__30607 = G__30716;
chunk__30608 = G__30717;
count__30609 = G__30718;
i__30610 = G__30719;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__30618 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30619 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30619);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__30099__auto___30722 = re_frame.interop.now();
var duration__30100__auto___30723 = (end__30099__auto___30722 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30100__auto___30723,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__30099__auto___30722);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30618);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
