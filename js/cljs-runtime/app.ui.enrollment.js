goog.provide('app.ui.enrollment');
var module$node_modules$$monaco_editor$react$dist$index=shadow.js.require("module$node_modules$$monaco_editor$react$dist$index", {});
app.ui.enrollment.simulate_enrollment_data = (function app$ui$enrollment$simulate_enrollment_data(bands,n_samples,seed){
var random_gen = cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1(seed);
var max_time = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bands));
var time_points = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(max_time + (2)),0.5);
var paths = (function (){var iter__5649__auto__ = (function app$ui$enrollment$simulate_enrollment_data_$_iter__28034(s__28035){
return (new cljs.core.LazySeq(null,(function (){
var s__28035__$1 = s__28035;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28035__$1);
if(temp__5825__auto__){
var s__28035__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28035__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28035__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28037 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28036 = (0);
while(true){
if((i__28036 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__28036);
cljs.core.chunk_append(b__28037,(function (){var raw_enroll = (new Array());
var seq__28038_28270 = cljs.core.seq(bands);
var chunk__28039_28271 = null;
var count__28040_28272 = (0);
var i__28041_28273 = (0);
while(true){
if((i__28041_28273 < count__28040_28272)){
var vec__28078_28277 = chunk__28039_28271.cljs$core$IIndexed$_nth$arity$2(null,i__28041_28273);
var lo_28278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078_28277,(0),null);
var hi_28279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078_28277,(1),null);
var n_28280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28078_28277,(2),null);
if((n_28280 > (0))){
var seq__28085_28281 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28278,hi_28279,n_28280)));
var chunk__28086_28282 = null;
var count__28087_28283 = (0);
var i__28088_28284 = (0);
while(true){
if((i__28088_28284 < count__28087_28283)){
var r_28285 = chunk__28086_28282.cljs$core$IIndexed$_nth$arity$2(null,i__28088_28284);
raw_enroll.push(r_28285);


var G__28286 = seq__28085_28281;
var G__28287 = chunk__28086_28282;
var G__28288 = count__28087_28283;
var G__28289 = (i__28088_28284 + (1));
seq__28085_28281 = G__28286;
chunk__28086_28282 = G__28287;
count__28087_28283 = G__28288;
i__28088_28284 = G__28289;
continue;
} else {
var temp__5825__auto___28290__$1 = cljs.core.seq(seq__28085_28281);
if(temp__5825__auto___28290__$1){
var seq__28085_28294__$1 = temp__5825__auto___28290__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28085_28294__$1)){
var c__5694__auto___28295 = cljs.core.chunk_first(seq__28085_28294__$1);
var G__28296 = cljs.core.chunk_rest(seq__28085_28294__$1);
var G__28297 = c__5694__auto___28295;
var G__28298 = cljs.core.count(c__5694__auto___28295);
var G__28299 = (0);
seq__28085_28281 = G__28296;
chunk__28086_28282 = G__28297;
count__28087_28283 = G__28298;
i__28088_28284 = G__28299;
continue;
} else {
var r_28300 = cljs.core.first(seq__28085_28294__$1);
raw_enroll.push(r_28300);


var G__28301 = cljs.core.next(seq__28085_28294__$1);
var G__28302 = null;
var G__28303 = (0);
var G__28304 = (0);
seq__28085_28281 = G__28301;
chunk__28086_28282 = G__28302;
count__28087_28283 = G__28303;
i__28088_28284 = G__28304;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28305 = seq__28038_28270;
var G__28306 = chunk__28039_28271;
var G__28307 = count__28040_28272;
var G__28308 = (i__28041_28273 + (1));
seq__28038_28270 = G__28305;
chunk__28039_28271 = G__28306;
count__28040_28272 = G__28307;
i__28041_28273 = G__28308;
continue;
} else {
var temp__5825__auto___28309__$1 = cljs.core.seq(seq__28038_28270);
if(temp__5825__auto___28309__$1){
var seq__28038_28310__$1 = temp__5825__auto___28309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28038_28310__$1)){
var c__5694__auto___28311 = cljs.core.chunk_first(seq__28038_28310__$1);
var G__28312 = cljs.core.chunk_rest(seq__28038_28310__$1);
var G__28313 = c__5694__auto___28311;
var G__28314 = cljs.core.count(c__5694__auto___28311);
var G__28315 = (0);
seq__28038_28270 = G__28312;
chunk__28039_28271 = G__28313;
count__28040_28272 = G__28314;
i__28041_28273 = G__28315;
continue;
} else {
var vec__28117_28316 = cljs.core.first(seq__28038_28310__$1);
var lo_28317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28117_28316,(0),null);
var hi_28318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28117_28316,(1),null);
var n_28319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28117_28316,(2),null);
if((n_28319 > (0))){
var seq__28121_28320 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28317,hi_28318,n_28319)));
var chunk__28122_28321 = null;
var count__28123_28322 = (0);
var i__28124_28323 = (0);
while(true){
if((i__28124_28323 < count__28123_28322)){
var r_28324 = chunk__28122_28321.cljs$core$IIndexed$_nth$arity$2(null,i__28124_28323);
raw_enroll.push(r_28324);


var G__28325 = seq__28121_28320;
var G__28326 = chunk__28122_28321;
var G__28327 = count__28123_28322;
var G__28328 = (i__28124_28323 + (1));
seq__28121_28320 = G__28325;
chunk__28122_28321 = G__28326;
count__28123_28322 = G__28327;
i__28124_28323 = G__28328;
continue;
} else {
var temp__5825__auto___28329__$2 = cljs.core.seq(seq__28121_28320);
if(temp__5825__auto___28329__$2){
var seq__28121_28330__$1 = temp__5825__auto___28329__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28121_28330__$1)){
var c__5694__auto___28331 = cljs.core.chunk_first(seq__28121_28330__$1);
var G__28332 = cljs.core.chunk_rest(seq__28121_28330__$1);
var G__28333 = c__5694__auto___28331;
var G__28334 = cljs.core.count(c__5694__auto___28331);
var G__28335 = (0);
seq__28121_28320 = G__28332;
chunk__28122_28321 = G__28333;
count__28123_28322 = G__28334;
i__28124_28323 = G__28335;
continue;
} else {
var r_28336 = cljs.core.first(seq__28121_28330__$1);
raw_enroll.push(r_28336);


var G__28337 = cljs.core.next(seq__28121_28330__$1);
var G__28338 = null;
var G__28339 = (0);
var G__28340 = (0);
seq__28121_28320 = G__28337;
chunk__28122_28321 = G__28338;
count__28123_28322 = G__28339;
i__28124_28323 = G__28340;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28341 = cljs.core.next(seq__28038_28310__$1);
var G__28342 = null;
var G__28343 = (0);
var G__28344 = (0);
seq__28038_28270 = G__28341;
chunk__28039_28271 = G__28342;
count__28040_28272 = G__28343;
i__28041_28273 = G__28344;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort(((function (i__28036,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28037,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (a,b){
return (a - b);
});})(i__28036,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28037,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points))
);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__28036,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28037,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (t){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__28036,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28037,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (p1__28032_SHARP_){
return (p1__28032_SHARP_ <= t);
});})(i__28036,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28037,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points))
,raw_enroll));
});})(i__28036,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28037,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points))
,time_points);
})());

var G__28345 = (i__28036 + (1));
i__28036 = G__28345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28037),app$ui$enrollment$simulate_enrollment_data_$_iter__28034(cljs.core.chunk_rest(s__28035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28037),null);
}
} else {
var _ = cljs.core.first(s__28035__$2);
return cljs.core.cons((function (){var raw_enroll = (new Array());
var seq__28143_28346 = cljs.core.seq(bands);
var chunk__28144_28347 = null;
var count__28145_28348 = (0);
var i__28146_28349 = (0);
while(true){
if((i__28146_28349 < count__28145_28348)){
var vec__28182_28350 = chunk__28144_28347.cljs$core$IIndexed$_nth$arity$2(null,i__28146_28349);
var lo_28351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182_28350,(0),null);
var hi_28352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182_28350,(1),null);
var n_28353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28182_28350,(2),null);
if((n_28353 > (0))){
var seq__28192_28354 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28351,hi_28352,n_28353)));
var chunk__28193_28355 = null;
var count__28194_28356 = (0);
var i__28195_28357 = (0);
while(true){
if((i__28195_28357 < count__28194_28356)){
var r_28362 = chunk__28193_28355.cljs$core$IIndexed$_nth$arity$2(null,i__28195_28357);
raw_enroll.push(r_28362);


var G__28363 = seq__28192_28354;
var G__28364 = chunk__28193_28355;
var G__28365 = count__28194_28356;
var G__28366 = (i__28195_28357 + (1));
seq__28192_28354 = G__28363;
chunk__28193_28355 = G__28364;
count__28194_28356 = G__28365;
i__28195_28357 = G__28366;
continue;
} else {
var temp__5825__auto___28367__$1 = cljs.core.seq(seq__28192_28354);
if(temp__5825__auto___28367__$1){
var seq__28192_28368__$1 = temp__5825__auto___28367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28192_28368__$1)){
var c__5694__auto___28369 = cljs.core.chunk_first(seq__28192_28368__$1);
var G__28370 = cljs.core.chunk_rest(seq__28192_28368__$1);
var G__28371 = c__5694__auto___28369;
var G__28372 = cljs.core.count(c__5694__auto___28369);
var G__28373 = (0);
seq__28192_28354 = G__28370;
chunk__28193_28355 = G__28371;
count__28194_28356 = G__28372;
i__28195_28357 = G__28373;
continue;
} else {
var r_28374 = cljs.core.first(seq__28192_28368__$1);
raw_enroll.push(r_28374);


var G__28375 = cljs.core.next(seq__28192_28368__$1);
var G__28376 = null;
var G__28377 = (0);
var G__28378 = (0);
seq__28192_28354 = G__28375;
chunk__28193_28355 = G__28376;
count__28194_28356 = G__28377;
i__28195_28357 = G__28378;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28379 = seq__28143_28346;
var G__28380 = chunk__28144_28347;
var G__28381 = count__28145_28348;
var G__28382 = (i__28146_28349 + (1));
seq__28143_28346 = G__28379;
chunk__28144_28347 = G__28380;
count__28145_28348 = G__28381;
i__28146_28349 = G__28382;
continue;
} else {
var temp__5825__auto___28383__$1 = cljs.core.seq(seq__28143_28346);
if(temp__5825__auto___28383__$1){
var seq__28143_28385__$1 = temp__5825__auto___28383__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28143_28385__$1)){
var c__5694__auto___28386 = cljs.core.chunk_first(seq__28143_28385__$1);
var G__28387 = cljs.core.chunk_rest(seq__28143_28385__$1);
var G__28388 = c__5694__auto___28386;
var G__28389 = cljs.core.count(c__5694__auto___28386);
var G__28390 = (0);
seq__28143_28346 = G__28387;
chunk__28144_28347 = G__28388;
count__28145_28348 = G__28389;
i__28146_28349 = G__28390;
continue;
} else {
var vec__28199_28391 = cljs.core.first(seq__28143_28385__$1);
var lo_28392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199_28391,(0),null);
var hi_28393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199_28391,(1),null);
var n_28394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199_28391,(2),null);
if((n_28394 > (0))){
var seq__28202_28398 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28392,hi_28393,n_28394)));
var chunk__28203_28399 = null;
var count__28204_28400 = (0);
var i__28205_28401 = (0);
while(true){
if((i__28205_28401 < count__28204_28400)){
var r_28402 = chunk__28203_28399.cljs$core$IIndexed$_nth$arity$2(null,i__28205_28401);
raw_enroll.push(r_28402);


var G__28403 = seq__28202_28398;
var G__28404 = chunk__28203_28399;
var G__28405 = count__28204_28400;
var G__28406 = (i__28205_28401 + (1));
seq__28202_28398 = G__28403;
chunk__28203_28399 = G__28404;
count__28204_28400 = G__28405;
i__28205_28401 = G__28406;
continue;
} else {
var temp__5825__auto___28407__$2 = cljs.core.seq(seq__28202_28398);
if(temp__5825__auto___28407__$2){
var seq__28202_28408__$1 = temp__5825__auto___28407__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28202_28408__$1)){
var c__5694__auto___28409 = cljs.core.chunk_first(seq__28202_28408__$1);
var G__28410 = cljs.core.chunk_rest(seq__28202_28408__$1);
var G__28411 = c__5694__auto___28409;
var G__28412 = cljs.core.count(c__5694__auto___28409);
var G__28413 = (0);
seq__28202_28398 = G__28410;
chunk__28203_28399 = G__28411;
count__28204_28400 = G__28412;
i__28205_28401 = G__28413;
continue;
} else {
var r_28414 = cljs.core.first(seq__28202_28408__$1);
raw_enroll.push(r_28414);


var G__28415 = cljs.core.next(seq__28202_28408__$1);
var G__28416 = null;
var G__28417 = (0);
var G__28418 = (0);
seq__28202_28398 = G__28415;
chunk__28203_28399 = G__28416;
count__28204_28400 = G__28417;
i__28205_28401 = G__28418;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28419 = cljs.core.next(seq__28143_28385__$1);
var G__28420 = null;
var G__28421 = (0);
var G__28422 = (0);
seq__28143_28346 = G__28419;
chunk__28144_28347 = G__28420;
count__28145_28348 = G__28421;
i__28146_28349 = G__28422;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort(((function (raw_enroll,_,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (a,b){
return (a - b);
});})(raw_enroll,_,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points))
);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (raw_enroll,_,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (t){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28032_SHARP_){
return (p1__28032_SHARP_ <= t);
}),raw_enroll));
});})(raw_enroll,_,s__28035__$2,temp__5825__auto__,random_gen,max_time,time_points))
,time_points);
})(),app$ui$enrollment$simulate_enrollment_data_$_iter__28034(cljs.core.rest(s__28035__$2)));
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
var iter__5649__auto__ = (function app$ui$enrollment$simulate_enrollment_data_$_iter__28217(s__28218){
return (new cljs.core.LazySeq(null,(function (){
var s__28218__$1 = s__28218;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28218__$1);
if(temp__5825__auto__){
var s__28218__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28218__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28218__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28220 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28219 = (0);
while(true){
if((i__28219 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__28219);
cljs.core.chunk_append(b__28220,(function (){var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(time_points,i);
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__28219,t,i,c__5647__auto__,size__5648__auto__,b__28220,s__28218__$2,temp__5825__auto__,random_gen,max_time,time_points,paths){
return (function (p1__28033_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28033_SHARP_,i);
});})(i__28219,t,i,c__5647__auto__,size__5648__auto__,b__28220,s__28218__$2,temp__5825__auto__,random_gen,max_time,time_points,paths))
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

var G__28433 = (i__28219 + (1));
i__28219 = G__28433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28220),app$ui$enrollment$simulate_enrollment_data_$_iter__28217(cljs.core.chunk_rest(s__28218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28220),null);
}
} else {
var i = cljs.core.first(s__28218__$2);
return cljs.core.cons((function (){var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(time_points,i);
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,i,s__28218__$2,temp__5825__auto__,random_gen,max_time,time_points,paths){
return (function (p1__28033_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28033_SHARP_,i);
});})(t,i,s__28218__$2,temp__5825__auto__,random_gen,max_time,time_points,paths))
,paths);
var sorted_counts = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(counts);
var n = cljs.core.count(sorted_counts);
var mean_val = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sorted_counts) / n);
var low_idx = Math.floor((0.025 * n));
var high_idx = Math.min((n - (1)),Math.floor((0.975 * n)));
var low_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,low_idx);
var high_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,high_idx);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"mean","mean",-1359234715),mean_val,new cljs.core.Keyword(null,"low","low",-1601362409),low_val,new cljs.core.Keyword(null,"high","high",2027297808),high_val], null);
})(),app$ui$enrollment$simulate_enrollment_data_$_iter__28217(cljs.core.rest(s__28218__$2)));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.max-w-6xl.mx-auto","div.p-4.max-w-6xl.mx-auto",677394401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-2xl.font-extrabold.text-gray-900.mb-4","h2.text-2xl.font-extrabold.text-gray-900.mb-4",-1065850497),"Enrollment Plot"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6.flex.gap-4.items-center","div.mb-6.flex.gap-4.items-center",227058716),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.font-semibold","button.px-4.py-2.rounded.font-semibold",-2045722177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"manual","manual",-237370608)))?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"manual","manual",-237370608));
})], null),"Manual / Editor Mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.px-4.py-2.rounded.font-semibold","button.px-4.py-2.rounded.font-semibold",-2045722177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"s-curve","s-curve",884751711)))?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"s-curve","s-curve",884751711));
})], null),"S-Curve Gen Mode"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"manual","manual",-237370608)))?(function (){var expected_json = JSON.stringify(cljs.core.clj__GT_js(bands),null,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6","div.mb-6",-1954659128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-2","h3.text-lg.font-bold.mb-2",-470954290),"Edit Enrollment Bands"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border.rounded","div.border.rounded",-1931087582),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"250px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$monaco_editor$react$dist$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"defaultLanguage","defaultLanguage",-345419681),"json",new cljs.core.Keyword(null,"value","value",305978217),expected_json,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val,_){
try{var parsed = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.vector_QMARK_(parsed)){
return app.state.set_config_BANG_(new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),parsed);
} else {
return null;
}
}catch (e28252){if((e28252 instanceof Error)){
var ___$1 = e28252;
return null;
} else {
throw e28252;

}
}})], null)], null)], null)], null);
})():new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6.p-4.border.rounded-xl.bg-gray-50","div.mb-6.p-4.border.rounded-xl.bg-gray-50",1615649045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.font-bold.mb-4","h3.text-lg.font-bold.mb-4",1665611024),"S-Curve Generator Settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-4","div.grid.grid-cols-2.gap-4",-491431037),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"Median Month"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-2.rounded.text-sm.mt-1","input.border.w-full.p-2.rounded.text-sm.mt-1",-230049260),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"median-month","median-month",1937793735).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"median-month","median-month",1937793735)], null),v);
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-semibold.text-gray-700","label.block.text-sm.font-semibold.text-gray-700",1892451717),"Logistic k"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.w-full.p-2.rounded.text-sm.mt-1","input.border.w-full.p-2.rounded.text-sm.mt-1",-230049260),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"any",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = parseFloat(e.target.value);
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enrollment-mode","enrollment-mode",890067269),new cljs.core.Keyword(null,"k","k",-2146297393)], null),v);
}
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.mt-4.bg-blue-600.text-white.px-4.py-2.rounded.font-semibold.hover:bg-blue-700","button.mt-4.bg-blue-600.text-white.px-4.py-2.rounded.font-semibold.hover:bg-blue-700",1389554061),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var n_total = (126);
var total_months = (38);
var new_bands = app.regal_fit.enrollment.get_s_curve_enrollment_bands(n_total,total_months,new cljs.core.Keyword(null,"median-month","median-month",1937793735).cljs$core$IFn$_invoke$arity$1(enrollment_mode),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(enrollment_mode));
return app.state.set_config_BANG_(new cljs.core.Keyword(null,"enroll-bands","enroll-bands",-1513727820),new_bands);
})], null),"Generate Bands"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6.flex.items-center.gap-4","div.mb-6.flex.items-center.gap-4",-379039872),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.font-semibold.text-gray-700","label.font-semibold.text-gray-700",-333591940),"Number of Samples:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-2.rounded.w-32","input.border.p-2.rounded.w-32",-1037130025),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(n_samples),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28237_SHARP_){
return cljs.core.reset_BANG_(n_samples,parseInt(p1__28237_SHARP_.target.value,(10)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-6.rounded-xl.shadow-sm.border","div.bg-white.p-6.rounded-xl.shadow-sm.border",70485681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.enrollment_chart,data], null)], null)], null);
});
});

//# sourceMappingURL=app.ui.enrollment.js.map
