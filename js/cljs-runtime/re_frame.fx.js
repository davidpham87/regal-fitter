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
var _STAR_current_trace_STAR__orig_val__21586 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21587 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21587);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___21705 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___21705)){
var new_db_21706 = temp__5825__auto___21705;
var fexpr__21589_21707 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21589_21707.cljs$core$IFn$_invoke$arity$1 ? fexpr__21589_21707.cljs$core$IFn$_invoke$arity$1(new_db_21706) : fexpr__21589_21707.call(null,new_db_21706));
} else {
}

var seq__21590 = cljs.core.seq(effects_without_db);
var chunk__21591 = null;
var count__21592 = (0);
var i__21593 = (0);
while(true){
if((i__21593 < count__21592)){
var vec__21608 = chunk__21591.cljs$core$IIndexed$_nth$arity$2(null,i__21593);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21608,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21608,(1),null);
var temp__5823__auto___21708 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___21708)){
var effect_fn_21709 = temp__5823__auto___21708;
(effect_fn_21709.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21709.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21709.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__21710 = seq__21590;
var G__21711 = chunk__21591;
var G__21712 = count__21592;
var G__21713 = (i__21593 + (1));
seq__21590 = G__21710;
chunk__21591 = G__21711;
count__21592 = G__21712;
i__21593 = G__21713;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21590);
if(temp__5825__auto__){
var seq__21590__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21590__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21590__$1);
var G__21714 = cljs.core.chunk_rest(seq__21590__$1);
var G__21715 = c__5548__auto__;
var G__21716 = cljs.core.count(c__5548__auto__);
var G__21717 = (0);
seq__21590 = G__21714;
chunk__21591 = G__21715;
count__21592 = G__21716;
i__21593 = G__21717;
continue;
} else {
var vec__21611 = cljs.core.first(seq__21590__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21611,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21611,(1),null);
var temp__5823__auto___21718 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___21718)){
var effect_fn_21719 = temp__5823__auto___21718;
(effect_fn_21719.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21719.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21719.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__21720 = cljs.core.next(seq__21590__$1);
var G__21721 = null;
var G__21722 = (0);
var G__21723 = (0);
seq__21590 = G__21720;
chunk__21591 = G__21721;
count__21592 = G__21722;
i__21593 = G__21723;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21254__auto___21724 = re_frame.interop.now();
var duration__21255__auto___21725 = (end__21254__auto___21724 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21255__auto___21725,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21254__auto___21724);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21586);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___21726 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___21726)){
var new_db_21727 = temp__5825__auto___21726;
var fexpr__21614_21728 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21614_21728.cljs$core$IFn$_invoke$arity$1 ? fexpr__21614_21728.cljs$core$IFn$_invoke$arity$1(new_db_21727) : fexpr__21614_21728.call(null,new_db_21727));
} else {
}

var seq__21615 = cljs.core.seq(effects_without_db);
var chunk__21616 = null;
var count__21617 = (0);
var i__21618 = (0);
while(true){
if((i__21618 < count__21617)){
var vec__21628 = chunk__21616.cljs$core$IIndexed$_nth$arity$2(null,i__21618);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21628,(1),null);
var temp__5823__auto___21729 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___21729)){
var effect_fn_21730 = temp__5823__auto___21729;
(effect_fn_21730.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21730.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21730.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__21732 = seq__21615;
var G__21733 = chunk__21616;
var G__21734 = count__21617;
var G__21735 = (i__21618 + (1));
seq__21615 = G__21732;
chunk__21616 = G__21733;
count__21617 = G__21734;
i__21618 = G__21735;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21615);
if(temp__5825__auto__){
var seq__21615__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21615__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21615__$1);
var G__21736 = cljs.core.chunk_rest(seq__21615__$1);
var G__21737 = c__5548__auto__;
var G__21738 = cljs.core.count(c__5548__auto__);
var G__21739 = (0);
seq__21615 = G__21736;
chunk__21616 = G__21737;
count__21617 = G__21738;
i__21618 = G__21739;
continue;
} else {
var vec__21631 = cljs.core.first(seq__21615__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
var temp__5823__auto___21740 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___21740)){
var effect_fn_21741 = temp__5823__auto___21740;
(effect_fn_21741.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21741.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21741.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__21742 = cljs.core.next(seq__21615__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21615 = G__21742;
chunk__21616 = G__21743;
count__21617 = G__21744;
i__21618 = G__21745;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21635){
var map__21636 = p__21635;
var map__21636__$1 = cljs.core.__destructure_map(map__21636);
var effect = map__21636__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21636__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21636__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__21649 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21650 = null;
var count__21651 = (0);
var i__21652 = (0);
while(true){
if((i__21652 < count__21651)){
var effect = chunk__21650.cljs$core$IIndexed$_nth$arity$2(null,i__21652);
re_frame.fx.dispatch_later(effect);


var G__21746 = seq__21649;
var G__21747 = chunk__21650;
var G__21748 = count__21651;
var G__21749 = (i__21652 + (1));
seq__21649 = G__21746;
chunk__21650 = G__21747;
count__21651 = G__21748;
i__21652 = G__21749;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21649);
if(temp__5825__auto__){
var seq__21649__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21649__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21649__$1);
var G__21750 = cljs.core.chunk_rest(seq__21649__$1);
var G__21751 = c__5548__auto__;
var G__21752 = cljs.core.count(c__5548__auto__);
var G__21753 = (0);
seq__21649 = G__21750;
chunk__21650 = G__21751;
count__21651 = G__21752;
i__21652 = G__21753;
continue;
} else {
var effect = cljs.core.first(seq__21649__$1);
re_frame.fx.dispatch_later(effect);


var G__21758 = cljs.core.next(seq__21649__$1);
var G__21759 = null;
var G__21760 = (0);
var G__21761 = (0);
seq__21649 = G__21758;
chunk__21650 = G__21759;
count__21651 = G__21760;
i__21652 = G__21761;
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
var seq__21657 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21658 = null;
var count__21659 = (0);
var i__21660 = (0);
while(true){
if((i__21660 < count__21659)){
var vec__21675 = chunk__21658.cljs$core$IIndexed$_nth$arity$2(null,i__21660);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___21762 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___21762)){
var effect_fn_21763 = temp__5823__auto___21762;
(effect_fn_21763.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21763.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21763.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21764 = seq__21657;
var G__21765 = chunk__21658;
var G__21766 = count__21659;
var G__21767 = (i__21660 + (1));
seq__21657 = G__21764;
chunk__21658 = G__21765;
count__21659 = G__21766;
i__21660 = G__21767;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21657);
if(temp__5825__auto__){
var seq__21657__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21657__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21657__$1);
var G__21770 = cljs.core.chunk_rest(seq__21657__$1);
var G__21771 = c__5548__auto__;
var G__21772 = cljs.core.count(c__5548__auto__);
var G__21773 = (0);
seq__21657 = G__21770;
chunk__21658 = G__21771;
count__21659 = G__21772;
i__21660 = G__21773;
continue;
} else {
var vec__21680 = cljs.core.first(seq__21657__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21680,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21680,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5823__auto___21775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___21775)){
var effect_fn_21776 = temp__5823__auto___21775;
(effect_fn_21776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21777 = cljs.core.next(seq__21657__$1);
var G__21778 = null;
var G__21779 = (0);
var G__21780 = (0);
seq__21657 = G__21777;
chunk__21658 = G__21778;
count__21659 = G__21779;
i__21660 = G__21780;
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
var seq__21685 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21686 = null;
var count__21687 = (0);
var i__21688 = (0);
while(true){
if((i__21688 < count__21687)){
var event = chunk__21686.cljs$core$IIndexed$_nth$arity$2(null,i__21688);
re_frame.router.dispatch(event);


var G__21781 = seq__21685;
var G__21782 = chunk__21686;
var G__21783 = count__21687;
var G__21784 = (i__21688 + (1));
seq__21685 = G__21781;
chunk__21686 = G__21782;
count__21687 = G__21783;
i__21688 = G__21784;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21685);
if(temp__5825__auto__){
var seq__21685__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21685__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21685__$1);
var G__21785 = cljs.core.chunk_rest(seq__21685__$1);
var G__21786 = c__5548__auto__;
var G__21787 = cljs.core.count(c__5548__auto__);
var G__21788 = (0);
seq__21685 = G__21785;
chunk__21686 = G__21786;
count__21687 = G__21787;
i__21688 = G__21788;
continue;
} else {
var event = cljs.core.first(seq__21685__$1);
re_frame.router.dispatch(event);


var G__21789 = cljs.core.next(seq__21685__$1);
var G__21790 = null;
var G__21791 = (0);
var G__21792 = (0);
seq__21685 = G__21789;
chunk__21686 = G__21790;
count__21687 = G__21791;
i__21688 = G__21792;
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
var seq__21693 = cljs.core.seq(value);
var chunk__21694 = null;
var count__21695 = (0);
var i__21696 = (0);
while(true){
if((i__21696 < count__21695)){
var event = chunk__21694.cljs$core$IIndexed$_nth$arity$2(null,i__21696);
clear_event(event);


var G__21795 = seq__21693;
var G__21796 = chunk__21694;
var G__21797 = count__21695;
var G__21798 = (i__21696 + (1));
seq__21693 = G__21795;
chunk__21694 = G__21796;
count__21695 = G__21797;
i__21696 = G__21798;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21693);
if(temp__5825__auto__){
var seq__21693__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21693__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21693__$1);
var G__21799 = cljs.core.chunk_rest(seq__21693__$1);
var G__21800 = c__5548__auto__;
var G__21801 = cljs.core.count(c__5548__auto__);
var G__21802 = (0);
seq__21693 = G__21799;
chunk__21694 = G__21800;
count__21695 = G__21801;
i__21696 = G__21802;
continue;
} else {
var event = cljs.core.first(seq__21693__$1);
clear_event(event);


var G__21804 = cljs.core.next(seq__21693__$1);
var G__21805 = null;
var G__21806 = (0);
var G__21807 = (0);
seq__21693 = G__21804;
chunk__21694 = G__21805;
count__21695 = G__21806;
i__21696 = G__21807;
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
var _STAR_current_trace_STAR__orig_val__21698 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21699 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21699);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21254__auto___21808 = re_frame.interop.now();
var duration__21255__auto___21809 = (end__21254__auto___21808 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21255__auto___21809,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21254__auto___21808);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21698);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
