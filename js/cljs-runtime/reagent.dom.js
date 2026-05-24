goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

if((typeof module$node_modules$react_dom$index !== 'undefined') && (typeof module$node_modules$react_dom$index.unmountComponentAtNode !== 'undefined')){
} else {
console.warn("react-dom/unmountComponentAtNode function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
if((typeof module$node_modules$react_dom$index !== 'undefined') && (typeof module$node_modules$react_dom$index.render !== 'undefined')){
} else {
console.warn("react-dom/render function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

var _STAR_always_update_STAR__orig_val__20520 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20521 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20521);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__20536 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__20537 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__20537);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20536);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__20520);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * NOTE: Usable only with React 18 or older. React 19 doesn't provide
 *   react-dom/render function.
 * 
 *   Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__20556 = arguments.length;
switch (G__20556) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__20570 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20570,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20570,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__20580_20613 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__20581_20614 = null;
var count__20582_20615 = (0);
var i__20583_20616 = (0);
while(true){
if((i__20583_20616 < count__20582_20615)){
var vec__20591_20617 = chunk__20581_20614.cljs$core$IIndexed$_nth$arity$2(null,i__20583_20616);
var container_20618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20591_20617,(0),null);
var comp_20619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20591_20617,(1),null);
reagent.dom.re_render_component(comp_20619,container_20618);


var G__20620 = seq__20580_20613;
var G__20621 = chunk__20581_20614;
var G__20622 = count__20582_20615;
var G__20623 = (i__20583_20616 + (1));
seq__20580_20613 = G__20620;
chunk__20581_20614 = G__20621;
count__20582_20615 = G__20622;
i__20583_20616 = G__20623;
continue;
} else {
var temp__5825__auto___20624 = cljs.core.seq(seq__20580_20613);
if(temp__5825__auto___20624){
var seq__20580_20625__$1 = temp__5825__auto___20624;
if(cljs.core.chunked_seq_QMARK_(seq__20580_20625__$1)){
var c__5548__auto___20626 = cljs.core.chunk_first(seq__20580_20625__$1);
var G__20627 = cljs.core.chunk_rest(seq__20580_20625__$1);
var G__20628 = c__5548__auto___20626;
var G__20629 = cljs.core.count(c__5548__auto___20626);
var G__20630 = (0);
seq__20580_20613 = G__20627;
chunk__20581_20614 = G__20628;
count__20582_20615 = G__20629;
i__20583_20616 = G__20630;
continue;
} else {
var vec__20594_20631 = cljs.core.first(seq__20580_20625__$1);
var container_20632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594_20631,(0),null);
var comp_20633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20594_20631,(1),null);
reagent.dom.re_render_component(comp_20633,container_20632);


var G__20640 = cljs.core.next(seq__20580_20625__$1);
var G__20641 = null;
var G__20642 = (0);
var G__20643 = (0);
seq__20580_20613 = G__20640;
chunk__20581_20614 = G__20641;
count__20582_20615 = G__20642;
i__20583_20616 = G__20643;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
