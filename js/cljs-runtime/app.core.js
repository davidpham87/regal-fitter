goog.provide('app.core');
app.core.init = (function app$core$init(){
console.log("App init");

app.worker_pool.init_pool_BANG_(null);

app.simulator.init_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.main_view], null),document.getElementById("app"));
});
goog.exportSymbol('app.core.init', app.core.init);
/**
 * Reload hook for shadow-cljs. Re-mounts the application after code changes.
 * 
 *   Returns:
 *  nil: Re-renders the app.
 */
app.core.reload_BANG_ = (function app$core$reload_BANG_(){
console.log("reload");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.main_view], null),document.getElementById("app"));
});

//# sourceMappingURL=app.core.js.map
