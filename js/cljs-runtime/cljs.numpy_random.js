goog.provide('cljs.numpy_random');
var module$node_modules$numpy_ts$dist$numpy_ts_browser=shadow.js.require("module$node_modules$numpy_ts$dist$numpy_ts_browser", {});
cljs.numpy_random.default_rng = (function cljs$numpy_random$default_rng(var_args){
var G__35286 = arguments.length;
switch (G__35286) {
case 0:
return cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$0 = (function (){
return module$node_modules$numpy_ts$dist$numpy_ts_browser.random.default_rng();
}));

(cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1 = (function (seed){
return module$node_modules$numpy_ts$dist$numpy_ts_browser.random.default_rng(seed);
}));

(cljs.numpy_random.default_rng.cljs$lang$maxFixedArity = 1);

cljs.numpy_random.uniform = (function cljs$numpy_random$uniform(rng,low,high,size){
return rng.uniform(low,high,size);
});
cljs.numpy_random.random = (function cljs$numpy_random$random(rng,size){
return rng.random(size);
});

//# sourceMappingURL=cljs.numpy_random.js.map
