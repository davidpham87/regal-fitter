goog.provide('cljs.numpy');
var module$node_modules$numpy_ts$dist$numpy_ts_browser=shadow.js.require("module$node_modules$numpy_ts$dist$numpy_ts_browser", {});
cljs.numpy.array = module$node_modules$numpy_ts$dist$numpy_ts_browser.array;
cljs.numpy.zeros = module$node_modules$numpy_ts$dist$numpy_ts_browser.zeros;
cljs.numpy.ones = module$node_modules$numpy_ts$dist$numpy_ts_browser.ones;
cljs.numpy.arange = module$node_modules$numpy_ts$dist$numpy_ts_browser.arange;
cljs.numpy.linspace = module$node_modules$numpy_ts$dist$numpy_ts_browser.linspace;
cljs.numpy.full = module$node_modules$numpy_ts$dist$numpy_ts_browser.full;
cljs.numpy.empty = module$node_modules$numpy_ts$dist$numpy_ts_browser.empty;
cljs.numpy.meshgrid_raw = module$node_modules$numpy_ts$dist$numpy_ts_browser.meshgrid;
cljs.numpy.geomspace = module$node_modules$numpy_ts$dist$numpy_ts_browser.geomspace;
cljs.numpy.reshape = module$node_modules$numpy_ts$dist$numpy_ts_browser.reshape;
cljs.numpy.add = module$node_modules$numpy_ts$dist$numpy_ts_browser.add;
cljs.numpy.subtract = module$node_modules$numpy_ts$dist$numpy_ts_browser.subtract;
cljs.numpy.multiply = module$node_modules$numpy_ts$dist$numpy_ts_browser.multiply;
cljs.numpy.divide = module$node_modules$numpy_ts$dist$numpy_ts_browser.divide;
cljs.numpy.exp = module$node_modules$numpy_ts$dist$numpy_ts_browser.exp;
cljs.numpy.power = module$node_modules$numpy_ts$dist$numpy_ts_browser.power;
cljs.numpy.log = module$node_modules$numpy_ts$dist$numpy_ts_browser.log;
cljs.numpy.sqrt = module$node_modules$numpy_ts$dist$numpy_ts_browser.sqrt;
cljs.numpy.abs = module$node_modules$numpy_ts$dist$numpy_ts_browser.abs;
cljs.numpy.clip = module$node_modules$numpy_ts$dist$numpy_ts_browser.clip;
cljs.numpy.maximum = module$node_modules$numpy_ts$dist$numpy_ts_browser.maximum;
cljs.numpy.minimum = module$node_modules$numpy_ts$dist$numpy_ts_browser.minimum;
cljs.numpy.where = module$node_modules$numpy_ts$dist$numpy_ts_browser.where;
cljs.numpy.isinf = module$node_modules$numpy_ts$dist$numpy_ts_browser.isinf;
cljs.numpy.isfinite = module$node_modules$numpy_ts$dist$numpy_ts_browser.isfinite;
cljs.numpy.isnan = module$node_modules$numpy_ts$dist$numpy_ts_browser.isnan;
cljs.numpy.sum = module$node_modules$numpy_ts$dist$numpy_ts_browser.sum;
cljs.numpy.mean = module$node_modules$numpy_ts$dist$numpy_ts_browser.mean;
cljs.numpy.median = module$node_modules$numpy_ts$dist$numpy_ts_browser.median;
cljs.numpy.percentile = module$node_modules$numpy_ts$dist$numpy_ts_browser.percentile;
cljs.numpy.average = module$node_modules$numpy_ts$dist$numpy_ts_browser.average;
cljs.numpy.prod = module$node_modules$numpy_ts$dist$numpy_ts_browser.prod;
cljs.numpy.cumsum = module$node_modules$numpy_ts$dist$numpy_ts_browser.cumsum;
cljs.numpy.unique = module$node_modules$numpy_ts$dist$numpy_ts_browser.unique;
cljs.numpy.argsort = module$node_modules$numpy_ts$dist$numpy_ts_browser.argsort;
cljs.numpy.sort = module$node_modules$numpy_ts$dist$numpy_ts_browser.sort;
cljs.numpy.concatenate = module$node_modules$numpy_ts$dist$numpy_ts_browser.concatenate;
cljs.numpy.np_size = module$node_modules$numpy_ts$dist$numpy_ts_browser.size;
cljs.numpy.np_shape = module$node_modules$numpy_ts$dist$numpy_ts_browser.shape;
cljs.numpy.inf = Infinity;
cljs.numpy.nd_size = (function cljs$numpy$nd_size(arr){
if(cljs.core.truth_(arr)){
var or__5025__auto__ = arr.size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = arr.length;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
} else {
return (0);
}
});
cljs.numpy.nd_shape = (function cljs$numpy$nd_shape(arr){
if(cljs.core.truth_(arr)){
var or__5025__auto__ = arr.shape;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [arr.length];
}
} else {
return [(0)];
}
});
cljs.numpy.nd_to_array = (function cljs$numpy$nd_to_array(arr){
if(cljs.core.truth_((function (){var and__5023__auto__ = arr;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.fn_QMARK_(arr.toArray);
} else {
return and__5023__auto__;
}
})())){
return arr.toArray();
} else {
return arr;
}
});
cljs.numpy.slice = (function cljs$numpy$slice(arr,start,end){
if((arr == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.fn_QMARK_(arr.slice);
if(and__5023__auto__){
return arr.shape;
} else {
return and__5023__auto__;
}
})())){
return arr.slice([cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join(''));
} else {
if(cljs.core.fn_QMARK_(arr.slice)){
return arr.slice(start,end);
} else {
return arr;

}
}
}
});
cljs.numpy.item = (function cljs$numpy$item(arr,idx){
if(cljs.core.truth_((function (){var and__5023__auto__ = arr;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.fn_QMARK_(arr.item);
} else {
return and__5023__auto__;
}
})())){
return arr.item(idx);
} else {
return (arr[idx]);
}
});
cljs.numpy.set_block = (function cljs$numpy$set_block(target,src,start_idx){
var target_data = target.data;
var src_data = src.data;
var shape = target.shape;
var row_size = (((shape.length > (1)))?cljs.core.last(cljs.core.vec(shape)):(1));
var offset = (start_idx * row_size);
target_data.set(src_data,offset);

return target;
});
cljs.numpy.empty_float64 = (function cljs$numpy$empty_float64(shape){
var sz = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.vec(shape));
var flat = (new Float64Array(sz));
return module$node_modules$numpy_ts$dist$numpy_ts_browser.reshape(module$node_modules$numpy_ts$dist$numpy_ts_browser.array(flat),cljs.core.clj__GT_js(shape));
});
cljs.numpy.full_float64 = (function cljs$numpy$full_float64(shape,val){
var arr = cljs.numpy.empty_float64(shape);
if((val === (0))){
return arr;
} else {
return module$node_modules$numpy_ts$dist$numpy_ts_browser.add(arr,val);
}
});
cljs.numpy.meshgrid = (function cljs$numpy$meshgrid(arrays,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$numpy_ts$dist$numpy_ts_browser.meshgrid,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(arrays),cljs.core.clj__GT_js(options)));
});

//# sourceMappingURL=cljs.numpy.js.map
