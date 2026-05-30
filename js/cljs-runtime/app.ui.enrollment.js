goog.provide('app.ui.enrollment');
var module$node_modules$$monaco_editor$react$dist$index=shadow.js.require("module$node_modules$$monaco_editor$react$dist$index", {});
app.ui.enrollment.simulate_enrollment_data = (function app$ui$enrollment$simulate_enrollment_data(bands,n_samples,seed){
var random_gen = cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1(seed);
var max_time = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bands));
var time_points = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(max_time + (2)),0.5);
var paths = (function (){var iter__5649__auto__ = (function app$ui$enrollment$simulate_enrollment_data_$_iter__28117(s__28118){
return (new cljs.core.LazySeq(null,(function (){
var s__28118__$1 = s__28118;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28118__$1);
if(temp__5825__auto__){
var s__28118__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28118__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28118__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28120 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28119 = (0);
while(true){
if((i__28119 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__28119);
cljs.core.chunk_append(b__28120,(function (){var raw_enroll = (new Array());
var seq__28121_28245 = cljs.core.seq(bands);
var chunk__28122_28246 = null;
var count__28123_28247 = (0);
var i__28124_28248 = (0);
while(true){
if((i__28124_28248 < count__28123_28247)){
var vec__28139_28249 = chunk__28122_28246.cljs$core$IIndexed$_nth$arity$2(null,i__28124_28248);
var lo_28250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139_28249,(0),null);
var hi_28251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139_28249,(1),null);
var n_28252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28139_28249,(2),null);
if((n_28252 > (0))){
var seq__28142_28253 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28250,hi_28251,n_28252)));
var chunk__28143_28254 = null;
var count__28144_28255 = (0);
var i__28145_28256 = (0);
while(true){
if((i__28145_28256 < count__28144_28255)){
var r_28257 = chunk__28143_28254.cljs$core$IIndexed$_nth$arity$2(null,i__28145_28256);
raw_enroll.push(r_28257);


var G__28258 = seq__28142_28253;
var G__28259 = chunk__28143_28254;
var G__28260 = count__28144_28255;
var G__28261 = (i__28145_28256 + (1));
seq__28142_28253 = G__28258;
chunk__28143_28254 = G__28259;
count__28144_28255 = G__28260;
i__28145_28256 = G__28261;
continue;
} else {
var temp__5825__auto___28262__$1 = cljs.core.seq(seq__28142_28253);
if(temp__5825__auto___28262__$1){
var seq__28142_28263__$1 = temp__5825__auto___28262__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28142_28263__$1)){
var c__5694__auto___28264 = cljs.core.chunk_first(seq__28142_28263__$1);
var G__28265 = cljs.core.chunk_rest(seq__28142_28263__$1);
var G__28266 = c__5694__auto___28264;
var G__28267 = cljs.core.count(c__5694__auto___28264);
var G__28268 = (0);
seq__28142_28253 = G__28265;
chunk__28143_28254 = G__28266;
count__28144_28255 = G__28267;
i__28145_28256 = G__28268;
continue;
} else {
var r_28269 = cljs.core.first(seq__28142_28263__$1);
raw_enroll.push(r_28269);


var G__28270 = cljs.core.next(seq__28142_28263__$1);
var G__28271 = null;
var G__28272 = (0);
var G__28273 = (0);
seq__28142_28253 = G__28270;
chunk__28143_28254 = G__28271;
count__28144_28255 = G__28272;
i__28145_28256 = G__28273;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28274 = seq__28121_28245;
var G__28275 = chunk__28122_28246;
var G__28276 = count__28123_28247;
var G__28277 = (i__28124_28248 + (1));
seq__28121_28245 = G__28274;
chunk__28122_28246 = G__28275;
count__28123_28247 = G__28276;
i__28124_28248 = G__28277;
continue;
} else {
var temp__5825__auto___28278__$1 = cljs.core.seq(seq__28121_28245);
if(temp__5825__auto___28278__$1){
var seq__28121_28279__$1 = temp__5825__auto___28278__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28121_28279__$1)){
var c__5694__auto___28280 = cljs.core.chunk_first(seq__28121_28279__$1);
var G__28281 = cljs.core.chunk_rest(seq__28121_28279__$1);
var G__28282 = c__5694__auto___28280;
var G__28283 = cljs.core.count(c__5694__auto___28280);
var G__28284 = (0);
seq__28121_28245 = G__28281;
chunk__28122_28246 = G__28282;
count__28123_28247 = G__28283;
i__28124_28248 = G__28284;
continue;
} else {
var vec__28146_28285 = cljs.core.first(seq__28121_28279__$1);
var lo_28286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146_28285,(0),null);
var hi_28287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146_28285,(1),null);
var n_28288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146_28285,(2),null);
if((n_28288 > (0))){
var seq__28149_28289 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28286,hi_28287,n_28288)));
var chunk__28150_28290 = null;
var count__28151_28291 = (0);
var i__28152_28292 = (0);
while(true){
if((i__28152_28292 < count__28151_28291)){
var r_28293 = chunk__28150_28290.cljs$core$IIndexed$_nth$arity$2(null,i__28152_28292);
raw_enroll.push(r_28293);


var G__28294 = seq__28149_28289;
var G__28295 = chunk__28150_28290;
var G__28296 = count__28151_28291;
var G__28297 = (i__28152_28292 + (1));
seq__28149_28289 = G__28294;
chunk__28150_28290 = G__28295;
count__28151_28291 = G__28296;
i__28152_28292 = G__28297;
continue;
} else {
var temp__5825__auto___28298__$2 = cljs.core.seq(seq__28149_28289);
if(temp__5825__auto___28298__$2){
var seq__28149_28299__$1 = temp__5825__auto___28298__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28149_28299__$1)){
var c__5694__auto___28300 = cljs.core.chunk_first(seq__28149_28299__$1);
var G__28301 = cljs.core.chunk_rest(seq__28149_28299__$1);
var G__28302 = c__5694__auto___28300;
var G__28303 = cljs.core.count(c__5694__auto___28300);
var G__28304 = (0);
seq__28149_28289 = G__28301;
chunk__28150_28290 = G__28302;
count__28151_28291 = G__28303;
i__28152_28292 = G__28304;
continue;
} else {
var r_28305 = cljs.core.first(seq__28149_28299__$1);
raw_enroll.push(r_28305);


var G__28306 = cljs.core.next(seq__28149_28299__$1);
var G__28307 = null;
var G__28308 = (0);
var G__28309 = (0);
seq__28149_28289 = G__28306;
chunk__28150_28290 = G__28307;
count__28151_28291 = G__28308;
i__28152_28292 = G__28309;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28310 = cljs.core.next(seq__28121_28279__$1);
var G__28311 = null;
var G__28312 = (0);
var G__28313 = (0);
seq__28121_28245 = G__28310;
chunk__28122_28246 = G__28311;
count__28123_28247 = G__28312;
i__28124_28248 = G__28313;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort(((function (i__28119,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28120,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (a,b){
return (a - b);
});})(i__28119,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28120,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points))
);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__28119,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28120,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (t){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__28119,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28120,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (p1__28115_SHARP_){
return (p1__28115_SHARP_ <= t);
});})(i__28119,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28120,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points))
,raw_enroll));
});})(i__28119,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28120,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points))
,time_points);
})());

var G__28314 = (i__28119 + (1));
i__28119 = G__28314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28120),app$ui$enrollment$simulate_enrollment_data_$_iter__28117(cljs.core.chunk_rest(s__28118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28120),null);
}
} else {
var _ = cljs.core.first(s__28118__$2);
return cljs.core.cons((function (){var raw_enroll = (new Array());
var seq__28153_28315 = cljs.core.seq(bands);
var chunk__28154_28316 = null;
var count__28155_28317 = (0);
var i__28156_28318 = (0);
while(true){
if((i__28156_28318 < count__28155_28317)){
var vec__28176_28319 = chunk__28154_28316.cljs$core$IIndexed$_nth$arity$2(null,i__28156_28318);
var lo_28320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176_28319,(0),null);
var hi_28321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176_28319,(1),null);
var n_28322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28176_28319,(2),null);
if((n_28322 > (0))){
var seq__28179_28323 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28320,hi_28321,n_28322)));
var chunk__28180_28324 = null;
var count__28181_28325 = (0);
var i__28182_28326 = (0);
while(true){
if((i__28182_28326 < count__28181_28325)){
var r_28328 = chunk__28180_28324.cljs$core$IIndexed$_nth$arity$2(null,i__28182_28326);
raw_enroll.push(r_28328);


var G__28330 = seq__28179_28323;
var G__28331 = chunk__28180_28324;
var G__28332 = count__28181_28325;
var G__28333 = (i__28182_28326 + (1));
seq__28179_28323 = G__28330;
chunk__28180_28324 = G__28331;
count__28181_28325 = G__28332;
i__28182_28326 = G__28333;
continue;
} else {
var temp__5825__auto___28334__$1 = cljs.core.seq(seq__28179_28323);
if(temp__5825__auto___28334__$1){
var seq__28179_28335__$1 = temp__5825__auto___28334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28179_28335__$1)){
var c__5694__auto___28336 = cljs.core.chunk_first(seq__28179_28335__$1);
var G__28337 = cljs.core.chunk_rest(seq__28179_28335__$1);
var G__28338 = c__5694__auto___28336;
var G__28339 = cljs.core.count(c__5694__auto___28336);
var G__28340 = (0);
seq__28179_28323 = G__28337;
chunk__28180_28324 = G__28338;
count__28181_28325 = G__28339;
i__28182_28326 = G__28340;
continue;
} else {
var r_28341 = cljs.core.first(seq__28179_28335__$1);
raw_enroll.push(r_28341);


var G__28342 = cljs.core.next(seq__28179_28335__$1);
var G__28343 = null;
var G__28344 = (0);
var G__28345 = (0);
seq__28179_28323 = G__28342;
chunk__28180_28324 = G__28343;
count__28181_28325 = G__28344;
i__28182_28326 = G__28345;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28351 = seq__28153_28315;
var G__28352 = chunk__28154_28316;
var G__28353 = count__28155_28317;
var G__28354 = (i__28156_28318 + (1));
seq__28153_28315 = G__28351;
chunk__28154_28316 = G__28352;
count__28155_28317 = G__28353;
i__28156_28318 = G__28354;
continue;
} else {
var temp__5825__auto___28355__$1 = cljs.core.seq(seq__28153_28315);
if(temp__5825__auto___28355__$1){
var seq__28153_28356__$1 = temp__5825__auto___28355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28153_28356__$1)){
var c__5694__auto___28357 = cljs.core.chunk_first(seq__28153_28356__$1);
var G__28358 = cljs.core.chunk_rest(seq__28153_28356__$1);
var G__28359 = c__5694__auto___28357;
var G__28360 = cljs.core.count(c__5694__auto___28357);
var G__28361 = (0);
seq__28153_28315 = G__28358;
chunk__28154_28316 = G__28359;
count__28155_28317 = G__28360;
i__28156_28318 = G__28361;
continue;
} else {
var vec__28189_28362 = cljs.core.first(seq__28153_28356__$1);
var lo_28363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28189_28362,(0),null);
var hi_28364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28189_28362,(1),null);
var n_28365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28189_28362,(2),null);
if((n_28365 > (0))){
var seq__28192_28366 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28363,hi_28364,n_28365)));
var chunk__28193_28367 = null;
var count__28194_28368 = (0);
var i__28195_28369 = (0);
while(true){
if((i__28195_28369 < count__28194_28368)){
var r_28370 = chunk__28193_28367.cljs$core$IIndexed$_nth$arity$2(null,i__28195_28369);
raw_enroll.push(r_28370);


var G__28371 = seq__28192_28366;
var G__28372 = chunk__28193_28367;
var G__28373 = count__28194_28368;
var G__28374 = (i__28195_28369 + (1));
seq__28192_28366 = G__28371;
chunk__28193_28367 = G__28372;
count__28194_28368 = G__28373;
i__28195_28369 = G__28374;
continue;
} else {
var temp__5825__auto___28375__$2 = cljs.core.seq(seq__28192_28366);
if(temp__5825__auto___28375__$2){
var seq__28192_28376__$1 = temp__5825__auto___28375__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28192_28376__$1)){
var c__5694__auto___28377 = cljs.core.chunk_first(seq__28192_28376__$1);
var G__28378 = cljs.core.chunk_rest(seq__28192_28376__$1);
var G__28379 = c__5694__auto___28377;
var G__28380 = cljs.core.count(c__5694__auto___28377);
var G__28381 = (0);
seq__28192_28366 = G__28378;
chunk__28193_28367 = G__28379;
count__28194_28368 = G__28380;
i__28195_28369 = G__28381;
continue;
} else {
var r_28382 = cljs.core.first(seq__28192_28376__$1);
raw_enroll.push(r_28382);


var G__28383 = cljs.core.next(seq__28192_28376__$1);
var G__28384 = null;
var G__28385 = (0);
var G__28386 = (0);
seq__28192_28366 = G__28383;
chunk__28193_28367 = G__28384;
count__28194_28368 = G__28385;
i__28195_28369 = G__28386;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28387 = cljs.core.next(seq__28153_28356__$1);
var G__28388 = null;
var G__28389 = (0);
var G__28390 = (0);
seq__28153_28315 = G__28387;
chunk__28154_28316 = G__28388;
count__28155_28317 = G__28389;
i__28156_28318 = G__28390;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort(((function (raw_enroll,_,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (a,b){
return (a - b);
});})(raw_enroll,_,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points))
);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (raw_enroll,_,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (t){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28115_SHARP_){
return (p1__28115_SHARP_ <= t);
}),raw_enroll));
});})(raw_enroll,_,s__28118__$2,temp__5825__auto__,random_gen,max_time,time_points))
,time_points);
})(),app$ui$enrollment$simulate_enrollment_data_$_iter__28117(cljs.core.rest(s__28118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_samples));
})();
var iter__5649__auto__ = (function app$ui$enrollment$simulate_enrollment_data_$_iter__28207(s__28208){
return (new cljs.core.LazySeq(null,(function (){
var s__28208__$1 = s__28208;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28208__$1);
if(temp__5825__auto__){
var s__28208__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28208__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28208__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28210 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28209 = (0);
while(true){
if((i__28209 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__28209);
cljs.core.chunk_append(b__28210,(function (){var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(time_points,i);
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__28209,t,i,c__5647__auto__,size__5648__auto__,b__28210,s__28208__$2,temp__5825__auto__,random_gen,max_time,time_points,paths){
return (function (p1__28116_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28116_SHARP_,i);
});})(i__28209,t,i,c__5647__auto__,size__5648__auto__,b__28210,s__28208__$2,temp__5825__auto__,random_gen,max_time,time_points,paths))
,paths);
var sorted_counts = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(counts);
var n = cljs.core.count(sorted_counts);
var mean_val = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sorted_counts) / n);
var low_idx = Math.floor((0.025 * n));
var high_idx = Math.min((n - (1)),Math.floor((0.975 * n)));
var low_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,low_idx);
var high_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,high_idx);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"mean","mean",-1359234715),mean_val,new cljs.core.Keyword(null,"low","low",-1601362409),low_val,new cljs.core.Keyword(null,"high","high",2027297808),high_val], null);
})());

var G__28398 = (i__28209 + (1));
i__28209 = G__28398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28210),app$ui$enrollment$simulate_enrollment_data_$_iter__28207(cljs.core.chunk_rest(s__28208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28210),null);
}
} else {
var i = cljs.core.first(s__28208__$2);
return cljs.core.cons((function (){var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(time_points,i);
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,i,s__28208__$2,temp__5825__auto__,random_gen,max_time,time_points,paths){
return (function (p1__28116_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28116_SHARP_,i);
});})(t,i,s__28208__$2,temp__5825__auto__,random_gen,max_time,time_points,paths))
,paths);
var sorted_counts = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(counts);
var n = cljs.core.count(sorted_counts);
var mean_val = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sorted_counts) / n);
var low_idx = Math.floor((0.025 * n));
var high_idx = Math.min((n - (1)),Math.floor((0.975 * n)));
var low_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,low_idx);
var high_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,high_idx);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"mean","mean",-1359234715),mean_val,new cljs.core.Keyword(null,"low","low",-1601362409),low_val,new cljs.core.Keyword(null,"high","high",2027297808),high_val], null);
})(),app$ui$enrollment$simulate_enrollment_data_$_iter__28207(cljs.core.rest(s__28208__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(time_points)));
});
app.ui.enrollment.enrollment_view = (function app$ui$enrollment$enrollment_view(){
var n_samples = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
return (function (){
var state = cljs.core.deref(app.state.app_state);
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state);
var enrollment_mode = new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269).cljs$core$IFn$_invoke$arity$1(state);
var bands = new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(config);
var seed = new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(config);
var valid_samples = ((((typeof cljs.core.deref(n_samples) === 'number') && ((cljs.core.deref(n_samples) > (0)))))?cljs.core.deref(n_samples):(100));
var data = app.ui.enrollment.simulate_enrollment_data(bands,valid_samples,seed);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.max-w-6xl.mx-auto","div.p-4.max-w-6xl.mx-auto",677394401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-2xl.font-extrabold.text-gray-900.mb-4","h2.text-2xl.font-extrabold.text-gray-900.mb-4",-1065850497),"Enrollment Plot"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6.flex.gap-4.items-center","div.mb-6.flex.gap-4.items-center",227058716),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.font-semibold","button.px-4.py-2.rounded.font-semibold",-2045722177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"manual","manual",-237370608)))?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"manual","manual",-237370608));
})], null),"Manual / Editor Mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.font-semibold","button.px-4.py-2.rounded.font-semibold",-2045722177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"s-curve","s-curve",884751711)))?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"s-curve","s-curve",884751711));
})], null),"S-Curve Gen Mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.font-semibold.bg-gray-200.text-gray-700.hover:bg-gray-300","button.px-4.py-2.rounded.font-semibold.bg-gray-200.text-gray-700.hover:bg-gray-300",-1012537375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.state.set_config_BANG_(new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820).cljs$core$IFn$_invoke$arity$1(app.state.default_config));
})], null),"Restore Default"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"manual","manual",-237370608)))?(function (){var expected_json = JSON.stringify(cljs.core.clj__GT_js(bands),null,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6","div.mb-6",-1954659128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-2","h3.text-lg.font-bold.mb-2",-470954290),"Edit Enrollment Bands"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded","div.border.rounded",-1931087582),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"250px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"json",new cljs.core.Keyword(null,"value","value",305978217),expected_json,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val,_){
try{var parsed = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.vector_QMARK_(parsed)){
return app.state.set_config_BANG_(new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),parsed);
} else {
return null;
}
}catch (e28232){if((e28232 instanceof Error)){
var ___$1 = e28232;
return null;
} else {
throw e28232;

}
}})], null)], null)], null)], null);
})():(function (){var init_vals = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"median-month","median-month",1937793735),new cljs.core.Keyword(null,"median-month","median-month",1937793735).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(enrollment_mode)], null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.reagent.form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),init_vals,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p__28233){
var map__28234 = p__28233;
var map__28234__$1 = cljs.core.__destructure_map(map__28234);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28234__$1,new cljs.core.Keyword(null,"values","values",372645556));
var m_val = parseFloat(new cljs.core.Keyword(null,"median-month","median-month",1937793735).cljs$core$IFn$_invoke$arity$1(values));
var k_val = parseFloat(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(values));
if(((cljs.core.not(isNaN(m_val))) && (cljs.core.not(isNaN(k_val))))){
var n_total = (126);
var total_months = (38);
var new_bands = app.regal_fit.enrollment.get_s_curve_enrollment_bands(n_total,total_months,m_val,k_val);
app.state.set_config_BANG_(new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new_bands);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"median-month","median-month",1937793735)], null),m_val);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"k","k",-2146297393)], null),k_val);
} else {
return null;
}
})], null),(function (p__28236){
var map__28237 = p__28236;
var map__28237__$1 = cljs.core.__destructure_map(map__28237);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"values","values",372645556));
var handle_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"handle-change","handle-change",741134083));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28237__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mb-6.p-4.border.rounded-xl.bg-gray-50","form.mb-6.p-4.border.rounded-xl.bg-gray-50",610269318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-4","h3.text-lg.font-bold.mb-4",1665611024),"S-Curve Generator Settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-4","div.grid.grid-cols-2.gap-4",-491431037),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"Median Month"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-2.rounded.text-sm.mt-1","input.border.w-full.p-2.rounded.text-sm.mt-1",-230049260),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"name","name",1843675177),"median-month",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"median-month","median-month",1937793735).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"Logistic k"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-2.rounded.text-sm.mt-1","input.border.w-full.p-2.rounded.text-sm.mt-1",-230049260),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"name","name",1843675177),"k",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mt-4.bg-blue-600.text-white.px-4.py-2.rounded.font-semibold","button.mt-4.bg-blue-600.text-white.px-4.py-2.rounded.font-semibold",770739851),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-blue-700"], null),"Generate Bands"], null)], null);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),init_vals], null));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6.flex.items-center.gap-4","div.mb-6.flex.items-center.gap-4",-379039872),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.font-semibold.text-gray-700","label.font-semibold.text-gray-700",-333591940),"Number of Samples:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-2.rounded.w-32","input.border.p-2.rounded.w-32",-1037130025),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(n_samples),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28226_SHARP_){
return cljs.core.reset_BANG_(n_samples,parseInt(p1__28226_SHARP_.target.value,(10)));
})], null)], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-6.rounded-xl.shadow-sm.border","div.bg-white.p-6.rounded-xl.shadow-sm.border",70485681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.enrollment_chart,data], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data))], null))], null);
});
});

//# sourceMappingURL=app.ui.enrollment.js.map
