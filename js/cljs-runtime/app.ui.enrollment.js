goog.provide('app.ui.enrollment');
var module$node_modules$$monaco_editor$react$dist$index=shadow.js.require("module$node_modules$$monaco_editor$react$dist$index", {});
app.ui.enrollment.simulate_enrollment_data = (function app$ui$enrollment$simulate_enrollment_data(bands,n_samples,seed){
var random_gen = cljs.numpy_random.default_rng.cljs$core$IFn$_invoke$arity$1(seed);
var max_time = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bands));
var time_points = cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(max_time + (2)),0.5);
var paths = (function (){var iter__5649__auto__ = (function app$ui$enrollment$simulate_enrollment_data_$_iter__28124(s__28125){
return (new cljs.core.LazySeq(null,(function (){
var s__28125__$1 = s__28125;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28125__$1);
if(temp__5825__auto__){
var s__28125__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28125__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28125__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28127 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28126 = (0);
while(true){
if((i__28126 < size__5648__auto__)){
var _ = cljs.core._nth(c__5647__auto__,i__28126);
cljs.core.chunk_append(b__28127,(function (){var raw_enroll = (new Array());
var seq__28140_28278 = cljs.core.seq(bands);
var chunk__28141_28279 = null;
var count__28142_28280 = (0);
var i__28143_28281 = (0);
while(true){
if((i__28143_28281 < count__28142_28280)){
var vec__28183_28282 = chunk__28141_28279.cljs$core$IIndexed$_nth$arity$2(null,i__28143_28281);
var lo_28283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183_28282,(0),null);
var hi_28284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183_28282,(1),null);
var n_28285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183_28282,(2),null);
if((n_28285 > (0))){
var seq__28187_28286 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28283,hi_28284,n_28285)));
var chunk__28188_28287 = null;
var count__28189_28288 = (0);
var i__28190_28289 = (0);
while(true){
if((i__28190_28289 < count__28189_28288)){
var r_28290 = chunk__28188_28287.cljs$core$IIndexed$_nth$arity$2(null,i__28190_28289);
raw_enroll.push(r_28290);


var G__28291 = seq__28187_28286;
var G__28292 = chunk__28188_28287;
var G__28293 = count__28189_28288;
var G__28294 = (i__28190_28289 + (1));
seq__28187_28286 = G__28291;
chunk__28188_28287 = G__28292;
count__28189_28288 = G__28293;
i__28190_28289 = G__28294;
continue;
} else {
var temp__5825__auto___28295__$1 = cljs.core.seq(seq__28187_28286);
if(temp__5825__auto___28295__$1){
var seq__28187_28296__$1 = temp__5825__auto___28295__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28187_28296__$1)){
var c__5694__auto___28297 = cljs.core.chunk_first(seq__28187_28296__$1);
var G__28298 = cljs.core.chunk_rest(seq__28187_28296__$1);
var G__28299 = c__5694__auto___28297;
var G__28300 = cljs.core.count(c__5694__auto___28297);
var G__28301 = (0);
seq__28187_28286 = G__28298;
chunk__28188_28287 = G__28299;
count__28189_28288 = G__28300;
i__28190_28289 = G__28301;
continue;
} else {
var r_28302 = cljs.core.first(seq__28187_28296__$1);
raw_enroll.push(r_28302);


var G__28303 = cljs.core.next(seq__28187_28296__$1);
var G__28304 = null;
var G__28305 = (0);
var G__28306 = (0);
seq__28187_28286 = G__28303;
chunk__28188_28287 = G__28304;
count__28189_28288 = G__28305;
i__28190_28289 = G__28306;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28307 = seq__28140_28278;
var G__28308 = chunk__28141_28279;
var G__28309 = count__28142_28280;
var G__28310 = (i__28143_28281 + (1));
seq__28140_28278 = G__28307;
chunk__28141_28279 = G__28308;
count__28142_28280 = G__28309;
i__28143_28281 = G__28310;
continue;
} else {
var temp__5825__auto___28311__$1 = cljs.core.seq(seq__28140_28278);
if(temp__5825__auto___28311__$1){
var seq__28140_28312__$1 = temp__5825__auto___28311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28140_28312__$1)){
var c__5694__auto___28313 = cljs.core.chunk_first(seq__28140_28312__$1);
var G__28314 = cljs.core.chunk_rest(seq__28140_28312__$1);
var G__28315 = c__5694__auto___28313;
var G__28316 = cljs.core.count(c__5694__auto___28313);
var G__28317 = (0);
seq__28140_28278 = G__28314;
chunk__28141_28279 = G__28315;
count__28142_28280 = G__28316;
i__28143_28281 = G__28317;
continue;
} else {
var vec__28199_28318 = cljs.core.first(seq__28140_28312__$1);
var lo_28319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199_28318,(0),null);
var hi_28320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199_28318,(1),null);
var n_28321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28199_28318,(2),null);
if((n_28321 > (0))){
var seq__28202_28322 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28319,hi_28320,n_28321)));
var chunk__28203_28323 = null;
var count__28204_28324 = (0);
var i__28205_28325 = (0);
while(true){
if((i__28205_28325 < count__28204_28324)){
var r_28326 = chunk__28203_28323.cljs$core$IIndexed$_nth$arity$2(null,i__28205_28325);
raw_enroll.push(r_28326);


var G__28327 = seq__28202_28322;
var G__28328 = chunk__28203_28323;
var G__28329 = count__28204_28324;
var G__28330 = (i__28205_28325 + (1));
seq__28202_28322 = G__28327;
chunk__28203_28323 = G__28328;
count__28204_28324 = G__28329;
i__28205_28325 = G__28330;
continue;
} else {
var temp__5825__auto___28331__$2 = cljs.core.seq(seq__28202_28322);
if(temp__5825__auto___28331__$2){
var seq__28202_28332__$1 = temp__5825__auto___28331__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28202_28332__$1)){
var c__5694__auto___28333 = cljs.core.chunk_first(seq__28202_28332__$1);
var G__28334 = cljs.core.chunk_rest(seq__28202_28332__$1);
var G__28335 = c__5694__auto___28333;
var G__28336 = cljs.core.count(c__5694__auto___28333);
var G__28337 = (0);
seq__28202_28322 = G__28334;
chunk__28203_28323 = G__28335;
count__28204_28324 = G__28336;
i__28205_28325 = G__28337;
continue;
} else {
var r_28338 = cljs.core.first(seq__28202_28332__$1);
raw_enroll.push(r_28338);


var G__28339 = cljs.core.next(seq__28202_28332__$1);
var G__28340 = null;
var G__28341 = (0);
var G__28342 = (0);
seq__28202_28322 = G__28339;
chunk__28203_28323 = G__28340;
count__28204_28324 = G__28341;
i__28205_28325 = G__28342;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28343 = cljs.core.next(seq__28140_28312__$1);
var G__28344 = null;
var G__28345 = (0);
var G__28346 = (0);
seq__28140_28278 = G__28343;
chunk__28141_28279 = G__28344;
count__28142_28280 = G__28345;
i__28143_28281 = G__28346;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort(((function (i__28126,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28127,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (a,b){
return (a - b);
});})(i__28126,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28127,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points))
);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__28126,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28127,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (t){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__28126,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28127,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (p1__28122_SHARP_){
return (p1__28122_SHARP_ <= t);
});})(i__28126,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28127,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points))
,raw_enroll));
});})(i__28126,raw_enroll,_,c__5647__auto__,size__5648__auto__,b__28127,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points))
,time_points);
})());

var G__28348 = (i__28126 + (1));
i__28126 = G__28348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28127),app$ui$enrollment$simulate_enrollment_data_$_iter__28124(cljs.core.chunk_rest(s__28125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28127),null);
}
} else {
var _ = cljs.core.first(s__28125__$2);
return cljs.core.cons((function (){var raw_enroll = (new Array());
var seq__28216_28349 = cljs.core.seq(bands);
var chunk__28217_28350 = null;
var count__28218_28351 = (0);
var i__28219_28352 = (0);
while(true){
if((i__28219_28352 < count__28218_28351)){
var vec__28251_28353 = chunk__28217_28350.cljs$core$IIndexed$_nth$arity$2(null,i__28219_28352);
var lo_28354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28251_28353,(0),null);
var hi_28355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28251_28353,(1),null);
var n_28356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28251_28353,(2),null);
if((n_28356 > (0))){
var seq__28254_28357 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28354,hi_28355,n_28356)));
var chunk__28255_28358 = null;
var count__28256_28359 = (0);
var i__28257_28360 = (0);
while(true){
if((i__28257_28360 < count__28256_28359)){
var r_28361 = chunk__28255_28358.cljs$core$IIndexed$_nth$arity$2(null,i__28257_28360);
raw_enroll.push(r_28361);


var G__28362 = seq__28254_28357;
var G__28363 = chunk__28255_28358;
var G__28364 = count__28256_28359;
var G__28365 = (i__28257_28360 + (1));
seq__28254_28357 = G__28362;
chunk__28255_28358 = G__28363;
count__28256_28359 = G__28364;
i__28257_28360 = G__28365;
continue;
} else {
var temp__5825__auto___28366__$1 = cljs.core.seq(seq__28254_28357);
if(temp__5825__auto___28366__$1){
var seq__28254_28367__$1 = temp__5825__auto___28366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28254_28367__$1)){
var c__5694__auto___28368 = cljs.core.chunk_first(seq__28254_28367__$1);
var G__28369 = cljs.core.chunk_rest(seq__28254_28367__$1);
var G__28370 = c__5694__auto___28368;
var G__28371 = cljs.core.count(c__5694__auto___28368);
var G__28372 = (0);
seq__28254_28357 = G__28369;
chunk__28255_28358 = G__28370;
count__28256_28359 = G__28371;
i__28257_28360 = G__28372;
continue;
} else {
var r_28373 = cljs.core.first(seq__28254_28367__$1);
raw_enroll.push(r_28373);


var G__28374 = cljs.core.next(seq__28254_28367__$1);
var G__28375 = null;
var G__28376 = (0);
var G__28377 = (0);
seq__28254_28357 = G__28374;
chunk__28255_28358 = G__28375;
count__28256_28359 = G__28376;
i__28257_28360 = G__28377;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28378 = seq__28216_28349;
var G__28379 = chunk__28217_28350;
var G__28380 = count__28218_28351;
var G__28381 = (i__28219_28352 + (1));
seq__28216_28349 = G__28378;
chunk__28217_28350 = G__28379;
count__28218_28351 = G__28380;
i__28219_28352 = G__28381;
continue;
} else {
var temp__5825__auto___28382__$1 = cljs.core.seq(seq__28216_28349);
if(temp__5825__auto___28382__$1){
var seq__28216_28383__$1 = temp__5825__auto___28382__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28216_28383__$1)){
var c__5694__auto___28384 = cljs.core.chunk_first(seq__28216_28383__$1);
var G__28385 = cljs.core.chunk_rest(seq__28216_28383__$1);
var G__28386 = c__5694__auto___28384;
var G__28387 = cljs.core.count(c__5694__auto___28384);
var G__28388 = (0);
seq__28216_28349 = G__28385;
chunk__28217_28350 = G__28386;
count__28218_28351 = G__28387;
i__28219_28352 = G__28388;
continue;
} else {
var vec__28262_28389 = cljs.core.first(seq__28216_28383__$1);
var lo_28390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262_28389,(0),null);
var hi_28391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262_28389,(1),null);
var n_28392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262_28389,(2),null);
if((n_28392 > (0))){
var seq__28265_28393 = cljs.core.seq(cljs.numpy.nd_to_array(cljs.numpy_random.uniform(random_gen,lo_28390,hi_28391,n_28392)));
var chunk__28266_28394 = null;
var count__28267_28395 = (0);
var i__28268_28396 = (0);
while(true){
if((i__28268_28396 < count__28267_28395)){
var r_28397 = chunk__28266_28394.cljs$core$IIndexed$_nth$arity$2(null,i__28268_28396);
raw_enroll.push(r_28397);


var G__28398 = seq__28265_28393;
var G__28399 = chunk__28266_28394;
var G__28400 = count__28267_28395;
var G__28401 = (i__28268_28396 + (1));
seq__28265_28393 = G__28398;
chunk__28266_28394 = G__28399;
count__28267_28395 = G__28400;
i__28268_28396 = G__28401;
continue;
} else {
var temp__5825__auto___28402__$2 = cljs.core.seq(seq__28265_28393);
if(temp__5825__auto___28402__$2){
var seq__28265_28403__$1 = temp__5825__auto___28402__$2;
if(cljs.core.chunked_seq_QMARK_(seq__28265_28403__$1)){
var c__5694__auto___28404 = cljs.core.chunk_first(seq__28265_28403__$1);
var G__28405 = cljs.core.chunk_rest(seq__28265_28403__$1);
var G__28406 = c__5694__auto___28404;
var G__28407 = cljs.core.count(c__5694__auto___28404);
var G__28408 = (0);
seq__28265_28393 = G__28405;
chunk__28266_28394 = G__28406;
count__28267_28395 = G__28407;
i__28268_28396 = G__28408;
continue;
} else {
var r_28411 = cljs.core.first(seq__28265_28403__$1);
raw_enroll.push(r_28411);


var G__28412 = cljs.core.next(seq__28265_28403__$1);
var G__28413 = null;
var G__28414 = (0);
var G__28415 = (0);
seq__28265_28393 = G__28412;
chunk__28266_28394 = G__28413;
count__28267_28395 = G__28414;
i__28268_28396 = G__28415;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__28416 = cljs.core.next(seq__28216_28383__$1);
var G__28417 = null;
var G__28418 = (0);
var G__28419 = (0);
seq__28216_28349 = G__28416;
chunk__28217_28350 = G__28417;
count__28218_28351 = G__28418;
i__28219_28352 = G__28419;
continue;
}
} else {
}
}
break;
}

raw_enroll.sort(((function (raw_enroll,_,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (a,b){
return (a - b);
});})(raw_enroll,_,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points))
);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (raw_enroll,_,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points){
return (function (t){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28122_SHARP_){
return (p1__28122_SHARP_ <= t);
}),raw_enroll));
});})(raw_enroll,_,s__28125__$2,temp__5825__auto__,random_gen,max_time,time_points))
,time_points);
})(),app$ui$enrollment$simulate_enrollment_data_$_iter__28124(cljs.core.rest(s__28125__$2)));
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
var iter__5649__auto__ = (function app$ui$enrollment$simulate_enrollment_data_$_iter__28270(s__28271){
return (new cljs.core.LazySeq(null,(function (){
var s__28271__$1 = s__28271;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28271__$1);
if(temp__5825__auto__){
var s__28271__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28271__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__28271__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__28273 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__28272 = (0);
while(true){
if((i__28272 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__28272);
cljs.core.chunk_append(b__28273,(function (){var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(time_points,i);
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__28272,t,i,c__5647__auto__,size__5648__auto__,b__28273,s__28271__$2,temp__5825__auto__,random_gen,max_time,time_points,paths){
return (function (p1__28123_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28123_SHARP_,i);
});})(i__28272,t,i,c__5647__auto__,size__5648__auto__,b__28273,s__28271__$2,temp__5825__auto__,random_gen,max_time,time_points,paths))
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

var G__28421 = (i__28272 + (1));
i__28272 = G__28421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28273),app$ui$enrollment$simulate_enrollment_data_$_iter__28270(cljs.core.chunk_rest(s__28271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28273),null);
}
} else {
var i = cljs.core.first(s__28271__$2);
return cljs.core.cons((function (){var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(time_points,i);
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t,i,s__28271__$2,temp__5825__auto__,random_gen,max_time,time_points,paths){
return (function (p1__28123_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28123_SHARP_,i);
});})(t,i,s__28271__$2,temp__5825__auto__,random_gen,max_time,time_points,paths))
,paths);
var sorted_counts = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(counts);
var n = cljs.core.count(sorted_counts);
var mean_val = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sorted_counts) / n);
var low_idx = Math.floor((0.025 * n));
var high_idx = Math.min((n - (1)),Math.floor((0.975 * n)));
var low_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,low_idx);
var high_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_counts,high_idx);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"mean","mean",-1359234715),mean_val,new cljs.core.Keyword(null,"low","low",-1601362409),low_val,new cljs.core.Keyword(null,"high","high",2027297808),high_val], null);
})(),app$ui$enrollment$simulate_enrollment_data_$_iter__28270(cljs.core.rest(s__28271__$2)));
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
}catch (e28276){if((e28276 instanceof Error)){
var ___$1 = e28276;
return null;
} else {
throw e28276;

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
})], null),"Generate Bands"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-6.flex.items-center.gap-4","div.mb-6.flex.items-center.gap-4",-379039872),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.font-semibold.text-gray-700","label.font-semibold.text-gray-700",-333591940),"Number of Samples:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.border.p-2.rounded.w-32","input.border.p-2.rounded.w-32",-1037130025),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(n_samples),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28275_SHARP_){
return cljs.core.reset_BANG_(n_samples,parseInt(p1__28275_SHARP_.target.value,(10)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.p-6.rounded-xl.shadow-sm.border","div.bg-white.p-6.rounded-xl.shadow-sm.border",70485681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.vega.enrollment_chart,data], null)], null)], null);
});
});

//# sourceMappingURL=app.ui.enrollment.js.map
