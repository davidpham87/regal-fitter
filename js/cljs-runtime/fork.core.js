goog.provide('fork.core');
fork.core.vec_remove = (function fork$core$vec_remove(coll,pos){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
fork.core.vec_insert_at = (function fork$core$vec_insert_at(coll,pos,element){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,pos)], 0)));
});
fork.core.touched = (function fork$core$touched(state,k){
var or__5162__auto__ = new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),k);
}
});
fork.core.initialize_state = (function fork$core$initialize_state(p__32784){
var map__32785 = p__32784;
var map__32785__$1 = cljs.core.__destructure_map(map__32785);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var initial_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"initial-values","initial-values",1392120293));
var initial_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"initial-touched","initial-touched",-1887894494));
var values = (function (){var or__5162__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_values,initial_touched], 0));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var initialized_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys,new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),initial_values,new cljs.core.Keyword(null,"initial-touched","initial-touched",-1887894494),initial_touched,new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(initial_touched))], null);
var temp__5823__auto__ = state;
if(cljs.core.truth_(temp__5823__auto__)){
var user_provided_state = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(user_provided_state,(function (db){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initialized_state,db], 0));
}));

return user_provided_state;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initialized_state);
}
});
fork.core.element_value = (function fork$core$element_value(evt){
var type = evt.target.type;
var G__32805 = type;
switch (G__32805) {
case "checkbox":
return evt.target.checked;

break;
default:
return evt.target.value;

}
});
fork.core.element_name = (function fork$core$element_name(t,v,keywordize_QMARK_){
var el_name = (function (){var G__32807 = t;
var G__32807__$1 = (((G__32807 instanceof cljs.core.Keyword))?G__32807.fqn:null);
switch (G__32807__$1) {
case "evt":
return v.target.getAttribute("name");

break;
case "node":
return v.getAttribute("name");

break;
default:
return v;

}
})();
if(cljs.core.truth_(keywordize_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(el_name);
} else {
return el_name;
}
});
fork.core.normalize_name = (function fork$core$normalize_name(k,p__32811){
var map__32812 = p__32811;
var map__32812__$1 = cljs.core.__destructure_map(map__32812);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32812__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
if(cljs.core.truth_((function (){var and__5160__auto__ = keywordize_keys;
if(cljs.core.truth_(and__5160__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__5160__auto__;
}
})())){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),(1));
} else {
return k;
}
});
fork.core.set_values = (function fork$core$set_values(new_values,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__32815_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__32815_SHARP_,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.merge,new_values),new cljs.core.Keyword(null,"touched","touched",-609134419),(function (x,y){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,x,y);
}),cljs.core.keys(new_values));
}));
});
fork.core.vectorize_path = (function fork$core$vectorize_path(path){
if(cljs.core.vector_QMARK_(path)){
return path;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null);
}
});
fork.core.set_submitting = (function fork$core$set_submitting(db,path,bool){
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fork.core.vectorize_path(path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submitting?","submitting?",1281507942)], null)),bool);
});
fork.core.set_waiting = (function fork$core$set_waiting(db,path,input_name,bool){
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fork.core.vectorize_path(path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),input_name,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215)], null)),bool);
});
fork.core.set_server_message = (function fork$core$set_server_message(db,path,message){
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fork.core.vectorize_path(path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-message","server-message",-678695903)], null)),message);
});
fork.core.set_error = (function fork$core$set_error(db,path,input_name,message){
return cljs.core.assoc_in(db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fork.core.vectorize_path(path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),input_name,new cljs.core.Keyword(null,"errors","errors",-908790718)], null)),message);
});
fork.core.resolve_server_validation = (function fork$core$resolve_server_validation(m){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__32828){
var vec__32829 = p__32828;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32829,(1),null);
var temp__5825__auto__ = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,err]);
} else {
return null;
}
}),m)));
});
fork.core.config_set_waiting_QMARK_ = (function fork$core$config_set_waiting_QMARK_(config){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"set-waiting?","set-waiting?",-368272493),new cljs.core.Keyword(null,"no-key","no-key",-466291118));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-key","no-key",-466291118),x)){
return true;
} else {
return x;
}
});
fork.core.set_touched = (function fork$core$set_touched(names,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"touched","touched",-609134419),(function (x,y){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,x,y);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([names], 0));
});
fork.core.set_untouched = (function fork$core$set_untouched(names,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"touched","touched",-609134419),(function (x,y){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,x,y);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([names], 0));
});
fork.core.disable_logic = (function fork$core$disable_logic(current_set,ks){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY)(current_set),ks);
});
fork.core.enable_logic = (function fork$core$enable_logic(current_set,ks){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,current_set,ks);
});
fork.core.disable = (function fork$core$disable(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33074 = arguments.length;
var i__5898__auto___33075 = (0);
while(true){
if((i__5898__auto___33075 < len__5897__auto___33074)){
args__5903__auto__.push((arguments[i__5898__auto___33075]));

var G__33076 = (i__5898__auto___33075 + (1));
i__5898__auto___33075 = G__33076;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return fork.core.disable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(fork.core.disable.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__32857){
var vec__32858 = p__32857;
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (p1__32853_SHARP_){
return fork.core.disable_logic(p1__32853_SHARP_,ks);
}));
}));

(fork.core.disable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(fork.core.disable.cljs$lang$applyTo = (function (seq32854){
var G__32855 = cljs.core.first(seq32854);
var seq32854__$1 = cljs.core.next(seq32854);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32855,seq32854__$1);
}));

fork.core.enable = (function fork$core$enable(var_args){
var args__5903__auto__ = [];
var len__5897__auto___33077 = arguments.length;
var i__5898__auto___33079 = (0);
while(true){
if((i__5898__auto___33079 < len__5897__auto___33077)){
args__5903__auto__.push((arguments[i__5898__auto___33079]));

var G__33080 = (i__5898__auto___33079 + (1));
i__5898__auto___33079 = G__33080;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return fork.core.enable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(fork.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (state,p__32872){
var vec__32873 = p__32872;
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32873,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (p1__32864_SHARP_){
return fork.core.enable_logic(p1__32864_SHARP_,ks);
}));
}));

(fork.core.enable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(fork.core.enable.cljs$lang$applyTo = (function (seq32865){
var G__32867 = cljs.core.first(seq32865);
var seq32865__$1 = cljs.core.next(seq32865);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32867,seq32865__$1);
}));

fork.core.disabled_QMARK_ = (function fork$core$disabled_QMARK_(state,k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),k);
});
fork.core.handle_validation = (function fork$core$handle_validation(state,validation){
var values = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(state);
var resolved = (validation.cljs$core$IFn$_invoke$arity$1 ? validation.cljs$core$IFn$_invoke$arity$1(values) : validation.call(null,values));
if(cljs.core.every_QMARK_(cljs.core.empty_QMARK_,resolved)){
return null;
} else {
return resolved;
}
});
fork.core.handle_change = (function fork$core$handle_change(evt,state){
var input_key = fork.core.element_name(new cljs.core.Keyword(null,"evt","evt",-1251566867),evt,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var input_value = fork.core.element_value(evt);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_key,input_value], 0));
});
fork.core.handle_blur = (function fork$core$handle_blur(evt,state){
var input_key = fork.core.element_name(new cljs.core.Keyword(null,"evt","evt",-1251566867),evt,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_key], 0));
});
fork.core.fieldarray_handle_change = (function fork$core$fieldarray_handle_change(evt,state,vec_field_array_key,idx){
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vec_field_array_key,idx);
var input_key = fork.core.element_name(new cljs.core.Keyword(null,"evt","evt",-1251566867),evt,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var input_value = fork.core.element_value(evt);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,cljs.core.cons(new cljs.core.Keyword(null,"values","values",372645556),path),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_key,input_value], 0));
});
fork.core.fieldarray_handle_blur = (function fork$core$fieldarray_handle_blur(evt,state,vec_field_array_key,idx){
var input_key = fork.core.element_name(new cljs.core.Keyword(null,"evt","evt",-1251566867),evt,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(vec_field_array_key,idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_key], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
fork.core.set_handle_change_one = (function fork$core$set_handle_change_one(deref_state,p__32922){
var map__32924 = p__32922;
var map__32924__$1 = cljs.core.__destructure_map(map__32924);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32924__$1,new cljs.core.Keyword(null,"value","value",305978217));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32924__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = fork.core.vectorize_path(path);
var current_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(deref_state,cljs.core.cons(new cljs.core.Keyword(null,"values","values",372645556),path__$1));
var new_value = ((cljs.core.fn_QMARK_(value))?(value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(current_value) : value.call(null,current_value)):value);
var resolved_new_value = ((cljs.core.seq_QMARK_(new_value))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(new_value):new_value);
return cljs.core.assoc_in(deref_state,cljs.core.cons(new cljs.core.Keyword(null,"values","values",372645556),path__$1),resolved_new_value);
});
fork.core.set_handle_change = (function fork$core$set_handle_change(params,state){
if(cljs.core.map_QMARK_(params)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__32927_SHARP_){
return fork.core.set_handle_change_one(p1__32927_SHARP_,params);
}));
} else {
if(cljs.core.sequential_QMARK_(params)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (old_state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,item){
return fork.core.set_handle_change_one(acc,item);
}),old_state,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params));
}));
} else {
return console.error("set-handle-change was called with the wrong\n    params. Provide either a map or a sequential collection");

}
}
});
fork.core.set_handle_blur = (function fork$core$set_handle_blur(p__32933,state){
var map__32935 = p__32933;
var map__32935__$1 = cljs.core.__destructure_map(map__32935);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32935__$1,new cljs.core.Keyword(null,"value","value",305978217));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32935__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = fork.core.vectorize_path(path);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"touched","touched",-609134419),(cljs.core.truth_(value)?cljs.core.conj:cljs.core.disj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path__$1], 0));
});
fork.core.fieldarray_insert = (function fork$core$fieldarray_insert(state,vec_field_array_key,m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,cljs.core.cons(new cljs.core.Keyword(null,"values","values",372645556),vec_field_array_key),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
});
fork.core.fieldarray_update_touched = (function fork$core$fieldarray_update_touched(touched,path,idx){
var path_count = cljs.core.count(path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (touched_el){
if(((cljs.core.vector_QMARK_(touched_el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(path_count,touched_el)))))){
var vec__32947 = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__32943_SHARP_,p2__32942_SHARP_){
if(typeof p2__32942_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32943_SHARP_,p2__32942_SHARP_], null);
} else {
return null;
}
}),touched_el)));
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32947,(0),null);
var curr_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32947,(1),null);
if((curr_idx > idx)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(touched_el,position,cljs.core.dec);
} else {
if((curr_idx < idx)){
return touched_el;
} else {
return null;

}
}
} else {
return touched_el;
}
}),touched));
});
fork.core.fieldarray_remove = (function fork$core$fieldarray_remove(state,vec_field_array_key,idx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s,cljs.core.cons(new cljs.core.Keyword(null,"values","values",372645556),vec_field_array_key),fork.core.vec_remove,idx),new cljs.core.Keyword(null,"touched","touched",-609134419),(function (p1__32954_SHARP_){
return fork.core.fieldarray_update_touched(p1__32954_SHARP_,vec_field_array_key,idx);
}));
}));
});
fork.core.dirty = (function fork$core$dirty(values,initial_values){
return cljs.core.first(clojure.data.diff(values,(function (){var or__5162__auto__ = initial_values;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
fork.core.handle_submit = (function fork$core$handle_submit(evt,p__32959){
var map__32960 = p__32959;
var map__32960__$1 = cljs.core.__destructure_map(map__32960);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var server = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"server","server",1499190120));
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var prevent_default_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var validation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"validation","validation",-2141396518));
var already_submitting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"already-submitting?","already-submitting?",1438118407));
var reset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32960__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
if(cljs.core.truth_(prevent_default_QMARK_)){
evt.preventDefault();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435),cljs.core.inc);

if(((cljs.core.not(already_submitting_QMARK_)) && ((((validation == null)) && ((((fork.core.resolve_server_validation(server) == null)) && (cljs.core.every_QMARK_((function (p1__32958_SHARP_){
return new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215).cljs$core$IFn$_invoke$arity$1(p1__32958_SHARP_) === false;
}),cljs.core.vals(server))))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"successful-submissions","successful-submissions",-961073531),cljs.core.inc);

var G__32963 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"dirty","dirty",729553281),fork.core.dirty(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-values","initial-values",1392120293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"touched-values","touched-values",-1817885644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0))),new cljs.core.Keyword(null,"reset","reset",-800929946),reset], null);
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__32963) : on_submit.call(null,G__32963));
} else {
return null;
}
});
fork.core.send_server_request = (function fork$core$send_server_request(http_fn,p__32964){
var map__32965 = p__32964;
var map__32965__$1 = cljs.core.__destructure_map(map__32965);
var validation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"validation","validation",-2141396518));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var debounce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"debounce","debounce",-871550296));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"evt","evt",-1251566867));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var server_dispatch_logic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"server-dispatch-logic","server-dispatch-logic",-465441551));
var throttle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32965__$1,new cljs.core.Keyword(null,"throttle","throttle",-1860340776));
var input_key = name;
var input_value = value;
var values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(cljs.core.truth_(input_value)?cljs.core.PersistentArrayMap.createAsIfByAssoc([input_key,input_value]):null)], 0));
var touched = (cljs.core.truth_(new cljs.core.Keyword(null,"on-blur","on-blur",814300747).cljs$core$IFn$_invoke$arity$1(evt))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),input_key):new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var props = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"dirty","dirty",729553281),fork.core.dirty(values,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-values","initial-values",1392120293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"touched-values","touched-values",-1817885644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], 0))),new cljs.core.Keyword(null,"errors","errors",-908790718),(cljs.core.truth_(validation)?fork.core.handle_validation(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),values], null),validation):null),new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"touched","touched",-609134419),touched,new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
(server_dispatch_logic.cljs$core$IFn$_invoke$arity$0 ? server_dispatch_logic.cljs$core$IFn$_invoke$arity$0() : server_dispatch_logic.call(null));

if(cljs.core.truth_(debounce)){
clearTimeout(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debounce","debounce",-871550296),input_key], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debounce","debounce",-871550296),input_key], null),(function (){
return setTimeout((function (){
return (http_fn.cljs$core$IFn$_invoke$arity$1 ? http_fn.cljs$core$IFn$_invoke$arity$1(props) : http_fn.call(null,props));
}),debounce);
}));
} else {
if(cljs.core.truth_(throttle)){
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throttle","throttle",-1860340776),input_key], null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throttle","throttle",-1860340776),input_key], null),(function (){
return setTimeout((function (){
(http_fn.cljs$core$IFn$_invoke$arity$1 ? http_fn.cljs$core$IFn$_invoke$arity$1(props) : http_fn.call(null,props));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"throttle","throttle",-1860340776),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_key], 0));
}),throttle);
}));
} else {
return null;
}
} else {
return (http_fn.cljs$core$IFn$_invoke$arity$1 ? http_fn.cljs$core$IFn$_invoke$arity$1(props) : http_fn.call(null,props));

}
}
});
fork.core.fieldarray_touched = (function fork$core$fieldarray_touched(state,vec_field_array_key,idx,input_key){
var or__5162__auto__ = new cljs.core.Keyword(null,"attempted-submissions","attempted-submissions",2035303435).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(vec_field_array_key,idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_key], 0)));
}
});
fork.core.handle_drag_start = (function fork$core$handle_drag_start(state,k,idx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (old_state){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_state,new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051),k,new cljs.core.Keyword(null,"idx-of-item-being-dragged","idx-of-item-being-dragged",1912676382)], null),idx);
}));
});
fork.core.handle_drag_end = (function fork$core$handle_drag_end(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051));
});
fork.core.handle_drag_over = (function fork$core$handle_drag_over(e){
return e.preventDefault();
});
fork.core.handle_drag_enter = (function fork$core$handle_drag_enter(state,k,idx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051),k,new cljs.core.Keyword(null,"idx-of-element-droppable-location","idx-of-element-droppable-location",1338425922)], null),idx);
});
fork.core.handle_drop = (function fork$core$handle_drop(state,k,vec_field_array_key){
var dragged_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051),k,new cljs.core.Keyword(null,"idx-of-item-being-dragged","idx-of-item-being-dragged",1912676382)], null));
var dropped_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051),k,new cljs.core.Keyword(null,"idx-of-element-droppable-location","idx-of-element-droppable-location",1338425922)], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,cljs.core.cons(new cljs.core.Keyword(null,"values","values",372645556),vec_field_array_key),(function (p1__33003_SHARP_){
return fork.core.vec_insert_at(fork.core.vec_remove(p1__33003_SHARP_,dragged_idx),dropped_idx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__33003_SHARP_,dragged_idx));
}));
});
fork.core.current_target_idx = (function fork$core$current_target_idx(state,k){
var G__33007 = cljs.core.deref(state);
var G__33007__$1 = (((G__33007 == null))?null:new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051).cljs$core$IFn$_invoke$arity$1(G__33007));
var G__33007__$2 = (((G__33007__$1 == null))?null:(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__33007__$1) : k.call(null,G__33007__$1)));
if((G__33007__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"idx-of-element-droppable-location","idx-of-element-droppable-location",1338425922).cljs$core$IFn$_invoke$arity$1(G__33007__$2);
}
});
fork.core.current_dragged_idx = (function fork$core$current_dragged_idx(state,k){
var G__33011 = cljs.core.deref(state);
var G__33011__$1 = (((G__33011 == null))?null:new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051).cljs$core$IFn$_invoke$arity$1(G__33011));
var G__33011__$2 = (((G__33011__$1 == null))?null:(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__33011__$1) : k.call(null,G__33011__$1)));
if((G__33011__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"idx-of-item-being-dragged","idx-of-item-being-dragged",1912676382).cljs$core$IFn$_invoke$arity$1(G__33011__$2);
}
});
fork.core.field_array = (function fork$core$field_array(props,_){
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var field_array_key = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(props);
var vec_field_array_key = fork.core.vectorize_path(field_array_key);
var handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"handle-change","handle-change",741134083),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"next-droppable-target?","next-droppable-target?",128781741),new cljs.core.Keyword(null,"current-dragged-idx","current-dragged-idx",1205711759),new cljs.core.Keyword(null,"prev-droppable-target?","prev-droppable-target?",-1177558063),new cljs.core.Keyword(null,"current-target-idx","current-target-idx",-1646095080),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040),new cljs.core.Keyword(null,"drag-and-drop-handlers","drag-and-drop-handlers",1889986234)],[(function (evt,idx){
return fork.core.fieldarray_handle_blur(evt,state,vec_field_array_key,idx);
}),(function (idx){
return fork.core.fieldarray_remove(state,vec_field_array_key,idx);
}),(function (m){
return fork.core.fieldarray_insert(state,vec_field_array_key,m);
}),(function (evt,idx){
return fork.core.fieldarray_handle_change(evt,state,vec_field_array_key,idx);
}),(function (p1__33015_SHARP_){
return fork.core.set_handle_blur(p1__33015_SHARP_,state);
}),(function (idx,input_key){
return fork.core.fieldarray_touched(state,vec_field_array_key,idx,input_key);
}),(function (k,idx){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,fork.core.current_target_idx(state,k))) && ((idx > fork.core.current_dragged_idx(state,k))));
}),(function (k){
return fork.core.current_dragged_idx(state,k);
}),(function (k,idx){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,fork.core.current_target_idx(state,k))) && ((idx < fork.core.current_dragged_idx(state,k))));
}),(function (k){
return fork.core.current_target_idx(state,k);
}),(function (p1__33014_SHARP_){
return fork.core.set_handle_change(p1__33014_SHARP_,state);
}),(function (k,idx){
if(cljs.core.truth_((function (){var or__5162__auto__ = (new cljs.core.Keyword(null,"drag-and-drop","drag-and-drop",-1528484051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
return fork.core.current_dragged_idx(state,k);
}
})())){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (___$1){
return fork.core.handle_drag_start(state,k,idx);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (___$1){
return fork.core.handle_drag_end(state);
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (evt){
return fork.core.handle_drag_over(evt);
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (___$1){
return fork.core.handle_drag_enter(state,k,idx);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (___$1){
return fork.core.handle_drop(state,k,vec_field_array_key);
})], null);
} else {
return null;
}
})]);
return (function (p__33047,component){
var map__33048 = p__33047;
var map__33048__$1 = cljs.core.__destructure_map(map__33048);
var args = map__33048__$1;
var props__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33048__$1,new cljs.core.Keyword(null,"props","props",453281727));
var fields = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(props__$1),vec_field_array_key);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,props__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fieldarray","handle-change","fieldarray/handle-change",1185968356),new cljs.core.Keyword("fieldarray","insert","fieldarray/insert",738391142),new cljs.core.Keyword("fieldarray","remove","fieldarray/remove",448098983),new cljs.core.Keyword("fieldarray","set-handle-blur","fieldarray/set-handle-blur",-367797878),new cljs.core.Keyword("fieldarray","name","fieldarray/name",-882303542),new cljs.core.Keyword("fieldarray","next-droppable-target?","fieldarray/next-droppable-target?",-1457494578),new cljs.core.Keyword("fieldarray","touched","fieldarray/touched",-1321346546),new cljs.core.Keyword("fieldarray","fields","fieldarray/fields",1901061871),new cljs.core.Keyword("fieldarray","current-dragged-idx","fieldarray/current-dragged-idx",1834816816),new cljs.core.Keyword("fieldarray","prev-droppable-target?","fieldarray/prev-droppable-target?",-633516430),new cljs.core.Keyword("fieldarray","current-target-idx","fieldarray/current-target-idx",996163705),new cljs.core.Keyword("fieldarray","set-handle-change","fieldarray/set-handle-change",-197855943),new cljs.core.Keyword("fieldarray","drag-and-drop-handlers","fieldarray/drag-and-drop-handlers",1327729049),new cljs.core.Keyword("fieldarray","options","fieldarray/options",-1200194822),new cljs.core.Keyword("fieldarray","handle-blur","fieldarray/handle-blur",183375871)],[new cljs.core.Keyword(null,"handle-change","handle-change",741134083).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"insert","insert",1286475395).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"set-handle-blur","set-handle-blur",1284701225).cljs$core$IFn$_invoke$arity$1(handlers),field_array_key,new cljs.core.Keyword(null,"next-droppable-target?","next-droppable-target?",128781741).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(handlers),fields,new cljs.core.Keyword(null,"current-dragged-idx","current-dragged-idx",1205711759).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"prev-droppable-target?","prev-droppable-target?",-1177558063).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"current-target-idx","current-target-idx",-1646095080).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"set-handle-change","set-handle-change",-827648040).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"drag-and-drop-handlers","drag-and-drop-handlers",1889986234).cljs$core$IFn$_invoke$arity$1(handlers),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"handle-blur","handle-blur",-546639264).cljs$core$IFn$_invoke$arity$1(handlers)])], null);
});
});

//# sourceMappingURL=fork.core.js.map
