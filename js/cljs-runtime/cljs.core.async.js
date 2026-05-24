goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23533 = (function (f,blockable,meta23534){
this.f = f;
this.blockable = blockable;
this.meta23534 = meta23534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23535,meta23534__$1){
var self__ = this;
var _23535__$1 = this;
return (new cljs.core.async.t_cljs$core$async23533(self__.f,self__.blockable,meta23534__$1));
}));

(cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23535){
var self__ = this;
var _23535__$1 = this;
return self__.meta23534;
}));

(cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async23533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async23533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23534","meta23534",1114836360,null)], null);
}));

(cljs.core.async.t_cljs$core$async23533.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23533");

(cljs.core.async.t_cljs$core$async23533.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async23533");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23533.
 */
cljs.core.async.__GT_t_cljs$core$async23533 = (function cljs$core$async$__GT_t_cljs$core$async23533(f,blockable,meta23534){
return (new cljs.core.async.t_cljs$core$async23533(f,blockable,meta23534));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23532 = arguments.length;
switch (G__23532) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async23533(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23539 = arguments.length;
switch (G__23539) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23543 = arguments.length;
switch (G__23543) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23545 = arguments.length;
switch (G__23545) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25055 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25055) : fn1.call(null,val_25055));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25055) : fn1.call(null,val_25055));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23547 = arguments.length;
switch (G__23547) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___25057 = n;
var x_25058 = (0);
while(true){
if((x_25058 < n__5616__auto___25057)){
(a[x_25058] = x_25058);

var G__25065 = (x_25058 + (1));
x_25058 = G__25065;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23548 = (function (flag,meta23549){
this.flag = flag;
this.meta23549 = meta23549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23550,meta23549__$1){
var self__ = this;
var _23550__$1 = this;
return (new cljs.core.async.t_cljs$core$async23548(self__.flag,meta23549__$1));
}));

(cljs.core.async.t_cljs$core$async23548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23550){
var self__ = this;
var _23550__$1 = this;
return self__.meta23549;
}));

(cljs.core.async.t_cljs$core$async23548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async23548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23549","meta23549",-1125675269,null)], null);
}));

(cljs.core.async.t_cljs$core$async23548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23548");

(cljs.core.async.t_cljs$core$async23548.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async23548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23548.
 */
cljs.core.async.__GT_t_cljs$core$async23548 = (function cljs$core$async$__GT_t_cljs$core$async23548(flag,meta23549){
return (new cljs.core.async.t_cljs$core$async23548(flag,meta23549));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async23548(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23551 = (function (flag,cb,meta23552){
this.flag = flag;
this.cb = cb;
this.meta23552 = meta23552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23553,meta23552__$1){
var self__ = this;
var _23553__$1 = this;
return (new cljs.core.async.t_cljs$core$async23551(self__.flag,self__.cb,meta23552__$1));
}));

(cljs.core.async.t_cljs$core$async23551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23553){
var self__ = this;
var _23553__$1 = this;
return self__.meta23552;
}));

(cljs.core.async.t_cljs$core$async23551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async23551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async23551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23552","meta23552",-1607327019,null)], null);
}));

(cljs.core.async.t_cljs$core$async23551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23551");

(cljs.core.async.t_cljs$core$async23551.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async23551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23551.
 */
cljs.core.async.__GT_t_cljs$core$async23551 = (function cljs$core$async$__GT_t_cljs$core$async23551(flag,cb,meta23552){
return (new cljs.core.async.t_cljs$core$async23551(flag,cb,meta23552));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async23551(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_25068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_25068)){
if((!(((port_25068.cljs$core$IFn$_invoke$arity$1 ? port_25068.cljs$core$IFn$_invoke$arity$1((1)) : port_25068.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__25070 = (i + (1));
i = G__25070;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__23554_SHARP_){
var G__23556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23554_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23556) : fret.call(null,G__23556));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__23555_SHARP_){
var G__23557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23555_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23557) : fret.call(null,G__23557));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25073 = (i + (1));
i = G__25073;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25075 = arguments.length;
var i__5750__auto___25076 = (0);
while(true){
if((i__5750__auto___25076 < len__5749__auto___25075)){
args__5755__auto__.push((arguments[i__5750__auto___25076]));

var G__25077 = (i__5750__auto___25076 + (1));
i__5750__auto___25076 = G__25077;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23560){
var map__23561 = p__23560;
var map__23561__$1 = cljs.core.__destructure_map(map__23561);
var opts = map__23561__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23558){
var G__23559 = cljs.core.first(seq23558);
var seq23558__$1 = cljs.core.next(seq23558);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23559,seq23558__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23563 = arguments.length;
switch (G__23563) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23472__auto___25086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23587){
var state_val_23588 = (state_23587[(1)]);
if((state_val_23588 === (7))){
var inst_23583 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23589_25089 = state_23587__$1;
(statearr_23589_25089[(2)] = inst_23583);

(statearr_23589_25089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (1))){
var state_23587__$1 = state_23587;
var statearr_23590_25091 = state_23587__$1;
(statearr_23590_25091[(2)] = null);

(statearr_23590_25091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (4))){
var inst_23566 = (state_23587[(7)]);
var inst_23566__$1 = (state_23587[(2)]);
var inst_23567 = (inst_23566__$1 == null);
var state_23587__$1 = (function (){var statearr_23591 = state_23587;
(statearr_23591[(7)] = inst_23566__$1);

return statearr_23591;
})();
if(cljs.core.truth_(inst_23567)){
var statearr_23592_25093 = state_23587__$1;
(statearr_23592_25093[(1)] = (5));

} else {
var statearr_23593_25102 = state_23587__$1;
(statearr_23593_25102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (13))){
var state_23587__$1 = state_23587;
var statearr_23594_25104 = state_23587__$1;
(statearr_23594_25104[(2)] = null);

(statearr_23594_25104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (6))){
var inst_23566 = (state_23587[(7)]);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23587__$1,(11),to,inst_23566);
} else {
if((state_val_23588 === (3))){
var inst_23585 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23587__$1,inst_23585);
} else {
if((state_val_23588 === (12))){
var state_23587__$1 = state_23587;
var statearr_23595_25106 = state_23587__$1;
(statearr_23595_25106[(2)] = null);

(statearr_23595_25106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (2))){
var state_23587__$1 = state_23587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23587__$1,(4),from);
} else {
if((state_val_23588 === (11))){
var inst_23576 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
if(cljs.core.truth_(inst_23576)){
var statearr_23596_25108 = state_23587__$1;
(statearr_23596_25108[(1)] = (12));

} else {
var statearr_23597_25109 = state_23587__$1;
(statearr_23597_25109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (9))){
var state_23587__$1 = state_23587;
var statearr_23598_25111 = state_23587__$1;
(statearr_23598_25111[(2)] = null);

(statearr_23598_25111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (5))){
var state_23587__$1 = state_23587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23599_25113 = state_23587__$1;
(statearr_23599_25113[(1)] = (8));

} else {
var statearr_23600_25114 = state_23587__$1;
(statearr_23600_25114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (14))){
var inst_23581 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23601_25115 = state_23587__$1;
(statearr_23601_25115[(2)] = inst_23581);

(statearr_23601_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (10))){
var inst_23573 = (state_23587[(2)]);
var state_23587__$1 = state_23587;
var statearr_23602_25118 = state_23587__$1;
(statearr_23602_25118[(2)] = inst_23573);

(statearr_23602_25118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23588 === (8))){
var inst_23570 = cljs.core.async.close_BANG_(to);
var state_23587__$1 = state_23587;
var statearr_23603_25120 = state_23587__$1;
(statearr_23603_25120[(2)] = inst_23570);

(statearr_23603_25120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_23604 = [null,null,null,null,null,null,null,null];
(statearr_23604[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_23604[(1)] = (1));

return statearr_23604;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_23587){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23587);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23605){var ex__23407__auto__ = e23605;
var statearr_23606_25122 = state_23587;
(statearr_23606_25122[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23587[(4)]))){
var statearr_23607_25123 = state_23587;
(statearr_23607_25123[(1)] = cljs.core.first((state_23587[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25125 = state_23587;
state_23587 = G__25125;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_23587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_23587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23608 = f__23475__auto__();
(statearr_23608[(6)] = c__23472__auto___25086);

return statearr_23608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__23609){
var vec__23610 = p__23609;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23610,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23610,(1),null);
var job = vec__23610;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23472__auto___25127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23617){
var state_val_23618 = (state_23617[(1)]);
if((state_val_23618 === (1))){
var state_23617__$1 = state_23617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23617__$1,(2),res,v);
} else {
if((state_val_23618 === (2))){
var inst_23614 = (state_23617[(2)]);
var inst_23615 = cljs.core.async.close_BANG_(res);
var state_23617__$1 = (function (){var statearr_23619 = state_23617;
(statearr_23619[(7)] = inst_23614);

return statearr_23619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23617__$1,inst_23615);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0 = (function (){
var statearr_23620 = [null,null,null,null,null,null,null,null];
(statearr_23620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__);

(statearr_23620[(1)] = (1));

return statearr_23620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1 = (function (state_23617){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23617);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23621){var ex__23407__auto__ = e23621;
var statearr_23622_25131 = state_23617;
(statearr_23622_25131[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23617[(4)]))){
var statearr_23623_25132 = state_23617;
(statearr_23623_25132[(1)] = cljs.core.first((state_23617[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25134 = state_23617;
state_23617 = G__25134;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = function(state_23617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1.call(this,state_23617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23624 = f__23475__auto__();
(statearr_23624[(6)] = c__23472__auto___25127);

return statearr_23624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__23625){
var vec__23626 = p__23625;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23626,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23626,(1),null);
var job = vec__23626;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___25136 = n;
var __25137 = (0);
while(true){
if((__25137 < n__5616__auto___25136)){
var G__23629_25138 = type;
var G__23629_25139__$1 = (((G__23629_25138 instanceof cljs.core.Keyword))?G__23629_25138.fqn:null);
switch (G__23629_25139__$1) {
case "compute":
var c__23472__auto___25141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25137,c__23472__auto___25141,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async){
return (function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = ((function (__25137,c__23472__auto___25141,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async){
return (function (state_23642){
var state_val_23643 = (state_23642[(1)]);
if((state_val_23643 === (1))){
var state_23642__$1 = state_23642;
var statearr_23644_25143 = state_23642__$1;
(statearr_23644_25143[(2)] = null);

(statearr_23644_25143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23643 === (2))){
var state_23642__$1 = state_23642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23642__$1,(4),jobs);
} else {
if((state_val_23643 === (3))){
var inst_23640 = (state_23642[(2)]);
var state_23642__$1 = state_23642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23642__$1,inst_23640);
} else {
if((state_val_23643 === (4))){
var inst_23632 = (state_23642[(2)]);
var inst_23633 = process__$1(inst_23632);
var state_23642__$1 = state_23642;
if(cljs.core.truth_(inst_23633)){
var statearr_23645_25144 = state_23642__$1;
(statearr_23645_25144[(1)] = (5));

} else {
var statearr_23646_25145 = state_23642__$1;
(statearr_23646_25145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23643 === (5))){
var state_23642__$1 = state_23642;
var statearr_23647_25146 = state_23642__$1;
(statearr_23647_25146[(2)] = null);

(statearr_23647_25146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23643 === (6))){
var state_23642__$1 = state_23642;
var statearr_23648_25147 = state_23642__$1;
(statearr_23648_25147[(2)] = null);

(statearr_23648_25147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23643 === (7))){
var inst_23638 = (state_23642[(2)]);
var state_23642__$1 = state_23642;
var statearr_23649_25148 = state_23642__$1;
(statearr_23649_25148[(2)] = inst_23638);

(statearr_23649_25148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25137,c__23472__auto___25141,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async))
;
return ((function (__25137,switch__23403__auto__,c__23472__auto___25141,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null];
(statearr_23650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1 = (function (state_23642){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23642);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23651){var ex__23407__auto__ = e23651;
var statearr_23652_25149 = state_23642;
(statearr_23652_25149[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23642[(4)]))){
var statearr_23653_25150 = state_23642;
(statearr_23653_25150[(1)] = cljs.core.first((state_23642[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25151 = state_23642;
state_23642 = G__25151;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = function(state_23642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1.call(this,state_23642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__;
})()
;})(__25137,switch__23403__auto__,c__23472__auto___25141,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async))
})();
var state__23476__auto__ = (function (){var statearr_23654 = f__23475__auto__();
(statearr_23654[(6)] = c__23472__auto___25141);

return statearr_23654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
});})(__25137,c__23472__auto___25141,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async))
);


break;
case "async":
var c__23472__auto___25152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25137,c__23472__auto___25152,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async){
return (function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = ((function (__25137,c__23472__auto___25152,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async){
return (function (state_23667){
var state_val_23668 = (state_23667[(1)]);
if((state_val_23668 === (1))){
var state_23667__$1 = state_23667;
var statearr_23669_25153 = state_23667__$1;
(statearr_23669_25153[(2)] = null);

(statearr_23669_25153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (2))){
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23667__$1,(4),jobs);
} else {
if((state_val_23668 === (3))){
var inst_23665 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23667__$1,inst_23665);
} else {
if((state_val_23668 === (4))){
var inst_23657 = (state_23667[(2)]);
var inst_23658 = async(inst_23657);
var state_23667__$1 = state_23667;
if(cljs.core.truth_(inst_23658)){
var statearr_23670_25156 = state_23667__$1;
(statearr_23670_25156[(1)] = (5));

} else {
var statearr_23671_25157 = state_23667__$1;
(statearr_23671_25157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (5))){
var state_23667__$1 = state_23667;
var statearr_23672_25161 = state_23667__$1;
(statearr_23672_25161[(2)] = null);

(statearr_23672_25161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (6))){
var state_23667__$1 = state_23667;
var statearr_23673_25190 = state_23667__$1;
(statearr_23673_25190[(2)] = null);

(statearr_23673_25190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23668 === (7))){
var inst_23663 = (state_23667[(2)]);
var state_23667__$1 = state_23667;
var statearr_23674_25195 = state_23667__$1;
(statearr_23674_25195[(2)] = inst_23663);

(statearr_23674_25195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25137,c__23472__auto___25152,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async))
;
return ((function (__25137,switch__23403__auto__,c__23472__auto___25152,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0 = (function (){
var statearr_23675 = [null,null,null,null,null,null,null];
(statearr_23675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__);

(statearr_23675[(1)] = (1));

return statearr_23675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1 = (function (state_23667){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23667);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23676){var ex__23407__auto__ = e23676;
var statearr_23677_25212 = state_23667;
(statearr_23677_25212[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23667[(4)]))){
var statearr_23678_25219 = state_23667;
(statearr_23678_25219[(1)] = cljs.core.first((state_23667[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25223 = state_23667;
state_23667 = G__25223;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = function(state_23667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1.call(this,state_23667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__;
})()
;})(__25137,switch__23403__auto__,c__23472__auto___25152,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async))
})();
var state__23476__auto__ = (function (){var statearr_23679 = f__23475__auto__();
(statearr_23679[(6)] = c__23472__auto___25152);

return statearr_23679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
});})(__25137,c__23472__auto___25152,G__23629_25138,G__23629_25139__$1,n__5616__auto___25136,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23629_25139__$1)].join('')));

}

var G__25229 = (__25137 + (1));
__25137 = G__25229;
continue;
} else {
}
break;
}

var c__23472__auto___25234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23701){
var state_val_23702 = (state_23701[(1)]);
if((state_val_23702 === (7))){
var inst_23697 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
var statearr_23703_25240 = state_23701__$1;
(statearr_23703_25240[(2)] = inst_23697);

(statearr_23703_25240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (1))){
var state_23701__$1 = state_23701;
var statearr_23704_25251 = state_23701__$1;
(statearr_23704_25251[(2)] = null);

(statearr_23704_25251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (4))){
var inst_23682 = (state_23701[(7)]);
var inst_23682__$1 = (state_23701[(2)]);
var inst_23683 = (inst_23682__$1 == null);
var state_23701__$1 = (function (){var statearr_23705 = state_23701;
(statearr_23705[(7)] = inst_23682__$1);

return statearr_23705;
})();
if(cljs.core.truth_(inst_23683)){
var statearr_23706_25258 = state_23701__$1;
(statearr_23706_25258[(1)] = (5));

} else {
var statearr_23707_25259 = state_23701__$1;
(statearr_23707_25259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (6))){
var inst_23682 = (state_23701[(7)]);
var inst_23687 = (state_23701[(8)]);
var inst_23687__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23689 = [inst_23682,inst_23687__$1];
var inst_23690 = (new cljs.core.PersistentVector(null,2,(5),inst_23688,inst_23689,null));
var state_23701__$1 = (function (){var statearr_23708 = state_23701;
(statearr_23708[(8)] = inst_23687__$1);

return statearr_23708;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23701__$1,(8),jobs,inst_23690);
} else {
if((state_val_23702 === (3))){
var inst_23699 = (state_23701[(2)]);
var state_23701__$1 = state_23701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23701__$1,inst_23699);
} else {
if((state_val_23702 === (2))){
var state_23701__$1 = state_23701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23701__$1,(4),from);
} else {
if((state_val_23702 === (9))){
var inst_23694 = (state_23701[(2)]);
var state_23701__$1 = (function (){var statearr_23709 = state_23701;
(statearr_23709[(9)] = inst_23694);

return statearr_23709;
})();
var statearr_23710_25309 = state_23701__$1;
(statearr_23710_25309[(2)] = null);

(statearr_23710_25309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (5))){
var inst_23685 = cljs.core.async.close_BANG_(jobs);
var state_23701__$1 = state_23701;
var statearr_23711_25315 = state_23701__$1;
(statearr_23711_25315[(2)] = inst_23685);

(statearr_23711_25315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23702 === (8))){
var inst_23687 = (state_23701[(8)]);
var inst_23692 = (state_23701[(2)]);
var state_23701__$1 = (function (){var statearr_23712 = state_23701;
(statearr_23712[(10)] = inst_23692);

return statearr_23712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23701__$1,(9),results,inst_23687);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0 = (function (){
var statearr_23713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__);

(statearr_23713[(1)] = (1));

return statearr_23713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1 = (function (state_23701){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23701);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23714){var ex__23407__auto__ = e23714;
var statearr_23715_25358 = state_23701;
(statearr_23715_25358[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23701[(4)]))){
var statearr_23716_25370 = state_23701;
(statearr_23716_25370[(1)] = cljs.core.first((state_23701[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25373 = state_23701;
state_23701 = G__25373;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = function(state_23701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1.call(this,state_23701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23717 = f__23475__auto__();
(statearr_23717[(6)] = c__23472__auto___25234);

return statearr_23717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


var c__23472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23755){
var state_val_23756 = (state_23755[(1)]);
if((state_val_23756 === (7))){
var inst_23751 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23757_25391 = state_23755__$1;
(statearr_23757_25391[(2)] = inst_23751);

(statearr_23757_25391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (20))){
var state_23755__$1 = state_23755;
var statearr_23758_25398 = state_23755__$1;
(statearr_23758_25398[(2)] = null);

(statearr_23758_25398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (1))){
var state_23755__$1 = state_23755;
var statearr_23759_25402 = state_23755__$1;
(statearr_23759_25402[(2)] = null);

(statearr_23759_25402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (4))){
var inst_23720 = (state_23755[(7)]);
var inst_23720__$1 = (state_23755[(2)]);
var inst_23721 = (inst_23720__$1 == null);
var state_23755__$1 = (function (){var statearr_23760 = state_23755;
(statearr_23760[(7)] = inst_23720__$1);

return statearr_23760;
})();
if(cljs.core.truth_(inst_23721)){
var statearr_23761_25418 = state_23755__$1;
(statearr_23761_25418[(1)] = (5));

} else {
var statearr_23762_25419 = state_23755__$1;
(statearr_23762_25419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (15))){
var inst_23733 = (state_23755[(8)]);
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23755__$1,(18),to,inst_23733);
} else {
if((state_val_23756 === (21))){
var inst_23746 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23763_25424 = state_23755__$1;
(statearr_23763_25424[(2)] = inst_23746);

(statearr_23763_25424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (13))){
var inst_23748 = (state_23755[(2)]);
var state_23755__$1 = (function (){var statearr_23764 = state_23755;
(statearr_23764[(9)] = inst_23748);

return statearr_23764;
})();
var statearr_23765_25433 = state_23755__$1;
(statearr_23765_25433[(2)] = null);

(statearr_23765_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (6))){
var inst_23720 = (state_23755[(7)]);
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23755__$1,(11),inst_23720);
} else {
if((state_val_23756 === (17))){
var inst_23741 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
if(cljs.core.truth_(inst_23741)){
var statearr_23766_25442 = state_23755__$1;
(statearr_23766_25442[(1)] = (19));

} else {
var statearr_23767_25443 = state_23755__$1;
(statearr_23767_25443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (3))){
var inst_23753 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23755__$1,inst_23753);
} else {
if((state_val_23756 === (12))){
var inst_23730 = (state_23755[(10)]);
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23755__$1,(14),inst_23730);
} else {
if((state_val_23756 === (2))){
var state_23755__$1 = state_23755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23755__$1,(4),results);
} else {
if((state_val_23756 === (19))){
var state_23755__$1 = state_23755;
var statearr_23768_25477 = state_23755__$1;
(statearr_23768_25477[(2)] = null);

(statearr_23768_25477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (11))){
var inst_23730 = (state_23755[(2)]);
var state_23755__$1 = (function (){var statearr_23769 = state_23755;
(statearr_23769[(10)] = inst_23730);

return statearr_23769;
})();
var statearr_23770_25478 = state_23755__$1;
(statearr_23770_25478[(2)] = null);

(statearr_23770_25478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (9))){
var state_23755__$1 = state_23755;
var statearr_23771_25479 = state_23755__$1;
(statearr_23771_25479[(2)] = null);

(statearr_23771_25479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (5))){
var state_23755__$1 = state_23755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23772_25480 = state_23755__$1;
(statearr_23772_25480[(1)] = (8));

} else {
var statearr_23773_25481 = state_23755__$1;
(statearr_23773_25481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (14))){
var inst_23733 = (state_23755[(8)]);
var inst_23735 = (state_23755[(11)]);
var inst_23733__$1 = (state_23755[(2)]);
var inst_23734 = (inst_23733__$1 == null);
var inst_23735__$1 = cljs.core.not(inst_23734);
var state_23755__$1 = (function (){var statearr_23774 = state_23755;
(statearr_23774[(8)] = inst_23733__$1);

(statearr_23774[(11)] = inst_23735__$1);

return statearr_23774;
})();
if(inst_23735__$1){
var statearr_23775_25487 = state_23755__$1;
(statearr_23775_25487[(1)] = (15));

} else {
var statearr_23776_25488 = state_23755__$1;
(statearr_23776_25488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (16))){
var inst_23735 = (state_23755[(11)]);
var state_23755__$1 = state_23755;
var statearr_23777_25489 = state_23755__$1;
(statearr_23777_25489[(2)] = inst_23735);

(statearr_23777_25489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (10))){
var inst_23727 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23778_25490 = state_23755__$1;
(statearr_23778_25490[(2)] = inst_23727);

(statearr_23778_25490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (18))){
var inst_23738 = (state_23755[(2)]);
var state_23755__$1 = state_23755;
var statearr_23779_25491 = state_23755__$1;
(statearr_23779_25491[(2)] = inst_23738);

(statearr_23779_25491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23756 === (8))){
var inst_23724 = cljs.core.async.close_BANG_(to);
var state_23755__$1 = state_23755;
var statearr_23780_25492 = state_23755__$1;
(statearr_23780_25492[(2)] = inst_23724);

(statearr_23780_25492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0 = (function (){
var statearr_23781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__);

(statearr_23781[(1)] = (1));

return statearr_23781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1 = (function (state_23755){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23755);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23782){var ex__23407__auto__ = e23782;
var statearr_23783_25495 = state_23755;
(statearr_23783_25495[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23755[(4)]))){
var statearr_23784_25496 = state_23755;
(statearr_23784_25496[(1)] = cljs.core.first((state_23755[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25497 = state_23755;
state_23755 = G__25497;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__ = function(state_23755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1.call(this,state_23755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23785 = f__23475__auto__();
(statearr_23785[(6)] = c__23472__auto__);

return statearr_23785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));

return c__23472__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23787 = arguments.length;
switch (G__23787) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23789 = arguments.length;
switch (G__23789) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23791 = arguments.length;
switch (G__23791) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__23472__auto___25506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23817){
var state_val_23818 = (state_23817[(1)]);
if((state_val_23818 === (7))){
var inst_23813 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23819_25508 = state_23817__$1;
(statearr_23819_25508[(2)] = inst_23813);

(statearr_23819_25508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (1))){
var state_23817__$1 = state_23817;
var statearr_23820_25509 = state_23817__$1;
(statearr_23820_25509[(2)] = null);

(statearr_23820_25509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (4))){
var inst_23794 = (state_23817[(7)]);
var inst_23794__$1 = (state_23817[(2)]);
var inst_23795 = (inst_23794__$1 == null);
var state_23817__$1 = (function (){var statearr_23821 = state_23817;
(statearr_23821[(7)] = inst_23794__$1);

return statearr_23821;
})();
if(cljs.core.truth_(inst_23795)){
var statearr_23822_25510 = state_23817__$1;
(statearr_23822_25510[(1)] = (5));

} else {
var statearr_23823_25511 = state_23817__$1;
(statearr_23823_25511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (13))){
var state_23817__$1 = state_23817;
var statearr_23824_25512 = state_23817__$1;
(statearr_23824_25512[(2)] = null);

(statearr_23824_25512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (6))){
var inst_23794 = (state_23817[(7)]);
var inst_23800 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23794) : p.call(null,inst_23794));
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23800)){
var statearr_23825_25513 = state_23817__$1;
(statearr_23825_25513[(1)] = (9));

} else {
var statearr_23826_25514 = state_23817__$1;
(statearr_23826_25514[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (3))){
var inst_23815 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23817__$1,inst_23815);
} else {
if((state_val_23818 === (12))){
var state_23817__$1 = state_23817;
var statearr_23827_25516 = state_23817__$1;
(statearr_23827_25516[(2)] = null);

(statearr_23827_25516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (2))){
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23817__$1,(4),ch);
} else {
if((state_val_23818 === (11))){
var inst_23794 = (state_23817[(7)]);
var inst_23804 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23817__$1,(8),inst_23804,inst_23794);
} else {
if((state_val_23818 === (9))){
var state_23817__$1 = state_23817;
var statearr_23828_25518 = state_23817__$1;
(statearr_23828_25518[(2)] = tc);

(statearr_23828_25518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (5))){
var inst_23797 = cljs.core.async.close_BANG_(tc);
var inst_23798 = cljs.core.async.close_BANG_(fc);
var state_23817__$1 = (function (){var statearr_23829 = state_23817;
(statearr_23829[(8)] = inst_23797);

return statearr_23829;
})();
var statearr_23830_25520 = state_23817__$1;
(statearr_23830_25520[(2)] = inst_23798);

(statearr_23830_25520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (14))){
var inst_23811 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
var statearr_23831_25522 = state_23817__$1;
(statearr_23831_25522[(2)] = inst_23811);

(statearr_23831_25522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (10))){
var state_23817__$1 = state_23817;
var statearr_23832_25526 = state_23817__$1;
(statearr_23832_25526[(2)] = fc);

(statearr_23832_25526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23818 === (8))){
var inst_23806 = (state_23817[(2)]);
var state_23817__$1 = state_23817;
if(cljs.core.truth_(inst_23806)){
var statearr_23833_25528 = state_23817__$1;
(statearr_23833_25528[(1)] = (12));

} else {
var statearr_23834_25529 = state_23817__$1;
(statearr_23834_25529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_23835 = [null,null,null,null,null,null,null,null,null];
(statearr_23835[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_23835[(1)] = (1));

return statearr_23835;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_23817){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23817);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23836){var ex__23407__auto__ = e23836;
var statearr_23837_25532 = state_23817;
(statearr_23837_25532[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23817[(4)]))){
var statearr_23838_25533 = state_23817;
(statearr_23838_25533[(1)] = cljs.core.first((state_23817[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25534 = state_23817;
state_23817 = G__25534;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_23817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_23817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23839 = f__23475__auto__();
(statearr_23839[(6)] = c__23472__auto___25506);

return statearr_23839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23861){
var state_val_23862 = (state_23861[(1)]);
if((state_val_23862 === (7))){
var inst_23857 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
var statearr_23863_25535 = state_23861__$1;
(statearr_23863_25535[(2)] = inst_23857);

(statearr_23863_25535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (1))){
var inst_23840 = init;
var inst_23841 = inst_23840;
var state_23861__$1 = (function (){var statearr_23864 = state_23861;
(statearr_23864[(7)] = inst_23841);

return statearr_23864;
})();
var statearr_23865_25536 = state_23861__$1;
(statearr_23865_25536[(2)] = null);

(statearr_23865_25536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (4))){
var inst_23844 = (state_23861[(8)]);
var inst_23844__$1 = (state_23861[(2)]);
var inst_23845 = (inst_23844__$1 == null);
var state_23861__$1 = (function (){var statearr_23866 = state_23861;
(statearr_23866[(8)] = inst_23844__$1);

return statearr_23866;
})();
if(cljs.core.truth_(inst_23845)){
var statearr_23867_25538 = state_23861__$1;
(statearr_23867_25538[(1)] = (5));

} else {
var statearr_23868_25539 = state_23861__$1;
(statearr_23868_25539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (6))){
var inst_23841 = (state_23861[(7)]);
var inst_23844 = (state_23861[(8)]);
var inst_23848 = (state_23861[(9)]);
var inst_23848__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23841,inst_23844) : f.call(null,inst_23841,inst_23844));
var inst_23849 = cljs.core.reduced_QMARK_(inst_23848__$1);
var state_23861__$1 = (function (){var statearr_23869 = state_23861;
(statearr_23869[(9)] = inst_23848__$1);

return statearr_23869;
})();
if(inst_23849){
var statearr_23870_25540 = state_23861__$1;
(statearr_23870_25540[(1)] = (8));

} else {
var statearr_23871_25541 = state_23861__$1;
(statearr_23871_25541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (3))){
var inst_23859 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23861__$1,inst_23859);
} else {
if((state_val_23862 === (2))){
var state_23861__$1 = state_23861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23861__$1,(4),ch);
} else {
if((state_val_23862 === (9))){
var inst_23848 = (state_23861[(9)]);
var inst_23841 = inst_23848;
var state_23861__$1 = (function (){var statearr_23872 = state_23861;
(statearr_23872[(7)] = inst_23841);

return statearr_23872;
})();
var statearr_23873_25542 = state_23861__$1;
(statearr_23873_25542[(2)] = null);

(statearr_23873_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (5))){
var inst_23841 = (state_23861[(7)]);
var state_23861__$1 = state_23861;
var statearr_23874_25543 = state_23861__$1;
(statearr_23874_25543[(2)] = inst_23841);

(statearr_23874_25543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (10))){
var inst_23855 = (state_23861[(2)]);
var state_23861__$1 = state_23861;
var statearr_23875_25544 = state_23861__$1;
(statearr_23875_25544[(2)] = inst_23855);

(statearr_23875_25544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23862 === (8))){
var inst_23848 = (state_23861[(9)]);
var inst_23851 = cljs.core.deref(inst_23848);
var state_23861__$1 = state_23861;
var statearr_23876_25545 = state_23861__$1;
(statearr_23876_25545[(2)] = inst_23851);

(statearr_23876_25545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__23404__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23404__auto____0 = (function (){
var statearr_23877 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23877[(0)] = cljs$core$async$reduce_$_state_machine__23404__auto__);

(statearr_23877[(1)] = (1));

return statearr_23877;
});
var cljs$core$async$reduce_$_state_machine__23404__auto____1 = (function (state_23861){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23861);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23878){var ex__23407__auto__ = e23878;
var statearr_23879_25548 = state_23861;
(statearr_23879_25548[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23861[(4)]))){
var statearr_23880_25549 = state_23861;
(statearr_23880_25549[(1)] = cljs.core.first((state_23861[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25550 = state_23861;
state_23861 = G__25550;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23404__auto__ = function(state_23861){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23404__auto____1.call(this,state_23861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23404__auto____0;
cljs$core$async$reduce_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23404__auto____1;
return cljs$core$async$reduce_$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23881 = f__23475__auto__();
(statearr_23881[(6)] = c__23472__auto__);

return statearr_23881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));

return c__23472__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (1))){
var inst_23882 = cljs.core.async.reduce(f__$1,init,ch);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23887__$1,(2),inst_23882);
} else {
if((state_val_23888 === (2))){
var inst_23884 = (state_23887[(2)]);
var inst_23885 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_23884) : f__$1.call(null,inst_23884));
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23887__$1,inst_23885);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__23404__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23404__auto____0 = (function (){
var statearr_23889 = [null,null,null,null,null,null,null];
(statearr_23889[(0)] = cljs$core$async$transduce_$_state_machine__23404__auto__);

(statearr_23889[(1)] = (1));

return statearr_23889;
});
var cljs$core$async$transduce_$_state_machine__23404__auto____1 = (function (state_23887){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23887);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23890){var ex__23407__auto__ = e23890;
var statearr_23891_25552 = state_23887;
(statearr_23891_25552[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23887[(4)]))){
var statearr_23892_25553 = state_23887;
(statearr_23892_25553[(1)] = cljs.core.first((state_23887[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25554 = state_23887;
state_23887 = G__25554;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23404__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23404__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23404__auto____0;
cljs$core$async$transduce_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23404__auto____1;
return cljs$core$async$transduce_$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23893 = f__23475__auto__();
(statearr_23893[(6)] = c__23472__auto__);

return statearr_23893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));

return c__23472__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__23895 = arguments.length;
switch (G__23895) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_23920){
var state_val_23921 = (state_23920[(1)]);
if((state_val_23921 === (7))){
var inst_23902 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23922_25556 = state_23920__$1;
(statearr_23922_25556[(2)] = inst_23902);

(statearr_23922_25556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (1))){
var inst_23896 = cljs.core.seq(coll);
var inst_23897 = inst_23896;
var state_23920__$1 = (function (){var statearr_23923 = state_23920;
(statearr_23923[(7)] = inst_23897);

return statearr_23923;
})();
var statearr_23924_25565 = state_23920__$1;
(statearr_23924_25565[(2)] = null);

(statearr_23924_25565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (4))){
var inst_23897 = (state_23920[(7)]);
var inst_23900 = cljs.core.first(inst_23897);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23920__$1,(7),ch,inst_23900);
} else {
if((state_val_23921 === (13))){
var inst_23914 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23925_25568 = state_23920__$1;
(statearr_23925_25568[(2)] = inst_23914);

(statearr_23925_25568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (6))){
var inst_23905 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
if(cljs.core.truth_(inst_23905)){
var statearr_23926_25572 = state_23920__$1;
(statearr_23926_25572[(1)] = (8));

} else {
var statearr_23927_25573 = state_23920__$1;
(statearr_23927_25573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (3))){
var inst_23918 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23920__$1,inst_23918);
} else {
if((state_val_23921 === (12))){
var state_23920__$1 = state_23920;
var statearr_23928_25575 = state_23920__$1;
(statearr_23928_25575[(2)] = null);

(statearr_23928_25575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (2))){
var inst_23897 = (state_23920[(7)]);
var state_23920__$1 = state_23920;
if(cljs.core.truth_(inst_23897)){
var statearr_23929_25577 = state_23920__$1;
(statearr_23929_25577[(1)] = (4));

} else {
var statearr_23930_25578 = state_23920__$1;
(statearr_23930_25578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (11))){
var inst_23911 = cljs.core.async.close_BANG_(ch);
var state_23920__$1 = state_23920;
var statearr_23931_25581 = state_23920__$1;
(statearr_23931_25581[(2)] = inst_23911);

(statearr_23931_25581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (9))){
var state_23920__$1 = state_23920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23932_25583 = state_23920__$1;
(statearr_23932_25583[(1)] = (11));

} else {
var statearr_23933_25584 = state_23920__$1;
(statearr_23933_25584[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (5))){
var inst_23897 = (state_23920[(7)]);
var state_23920__$1 = state_23920;
var statearr_23934_25586 = state_23920__$1;
(statearr_23934_25586[(2)] = inst_23897);

(statearr_23934_25586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (10))){
var inst_23916 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23935_25588 = state_23920__$1;
(statearr_23935_25588[(2)] = inst_23916);

(statearr_23935_25588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (8))){
var inst_23897 = (state_23920[(7)]);
var inst_23907 = cljs.core.next(inst_23897);
var inst_23897__$1 = inst_23907;
var state_23920__$1 = (function (){var statearr_23936 = state_23920;
(statearr_23936[(7)] = inst_23897__$1);

return statearr_23936;
})();
var statearr_23937_25591 = state_23920__$1;
(statearr_23937_25591[(2)] = null);

(statearr_23937_25591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_23938 = [null,null,null,null,null,null,null,null];
(statearr_23938[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_23938[(1)] = (1));

return statearr_23938;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_23920){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_23920);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e23939){var ex__23407__auto__ = e23939;
var statearr_23940_25593 = state_23920;
(statearr_23940_25593[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_23920[(4)]))){
var statearr_23941_25594 = state_23920;
(statearr_23941_25594[(1)] = cljs.core.first((state_23920[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25595 = state_23920;
state_23920 = G__25595;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_23920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_23920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_23942 = f__23475__auto__();
(statearr_23942[(6)] = c__23472__auto__);

return statearr_23942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));

return c__23472__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23944 = arguments.length;
switch (G__23944) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25598 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25598(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25599 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25599(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25601 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25601(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25604 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25604(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23945 = (function (ch,cs,meta23946){
this.ch = ch;
this.cs = cs;
this.meta23946 = meta23946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23947,meta23946__$1){
var self__ = this;
var _23947__$1 = this;
return (new cljs.core.async.t_cljs$core$async23945(self__.ch,self__.cs,meta23946__$1));
}));

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23947){
var self__ = this;
var _23947__$1 = this;
return self__.meta23946;
}));

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23945.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23946","meta23946",-85456194,null)], null);
}));

(cljs.core.async.t_cljs$core$async23945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23945");

(cljs.core.async.t_cljs$core$async23945.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async23945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23945.
 */
cljs.core.async.__GT_t_cljs$core$async23945 = (function cljs$core$async$__GT_t_cljs$core$async23945(ch,cs,meta23946){
return (new cljs.core.async.t_cljs$core$async23945(ch,cs,meta23946));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async23945(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__23472__auto___25610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24080){
var state_val_24081 = (state_24080[(1)]);
if((state_val_24081 === (7))){
var inst_24076 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24082_25612 = state_24080__$1;
(statearr_24082_25612[(2)] = inst_24076);

(statearr_24082_25612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (20))){
var inst_23981 = (state_24080[(7)]);
var inst_23993 = cljs.core.first(inst_23981);
var inst_23994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23993,(0),null);
var inst_23995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23993,(1),null);
var state_24080__$1 = (function (){var statearr_24083 = state_24080;
(statearr_24083[(8)] = inst_23994);

return statearr_24083;
})();
if(cljs.core.truth_(inst_23995)){
var statearr_24084_25615 = state_24080__$1;
(statearr_24084_25615[(1)] = (22));

} else {
var statearr_24085_25616 = state_24080__$1;
(statearr_24085_25616[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (27))){
var inst_24023 = (state_24080[(9)]);
var inst_24025 = (state_24080[(10)]);
var inst_24030 = (state_24080[(11)]);
var inst_23950 = (state_24080[(12)]);
var inst_24030__$1 = cljs.core._nth(inst_24023,inst_24025);
var inst_24031 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24030__$1,inst_23950,done);
var state_24080__$1 = (function (){var statearr_24086 = state_24080;
(statearr_24086[(11)] = inst_24030__$1);

return statearr_24086;
})();
if(cljs.core.truth_(inst_24031)){
var statearr_24087_25617 = state_24080__$1;
(statearr_24087_25617[(1)] = (30));

} else {
var statearr_24088_25618 = state_24080__$1;
(statearr_24088_25618[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (1))){
var state_24080__$1 = state_24080;
var statearr_24089_25620 = state_24080__$1;
(statearr_24089_25620[(2)] = null);

(statearr_24089_25620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (24))){
var inst_23981 = (state_24080[(7)]);
var inst_24000 = (state_24080[(2)]);
var inst_24001 = cljs.core.next(inst_23981);
var inst_23959 = inst_24001;
var inst_23960 = null;
var inst_23961 = (0);
var inst_23962 = (0);
var state_24080__$1 = (function (){var statearr_24090 = state_24080;
(statearr_24090[(13)] = inst_24000);

(statearr_24090[(14)] = inst_23959);

(statearr_24090[(15)] = inst_23960);

(statearr_24090[(16)] = inst_23961);

(statearr_24090[(17)] = inst_23962);

return statearr_24090;
})();
var statearr_24091_25622 = state_24080__$1;
(statearr_24091_25622[(2)] = null);

(statearr_24091_25622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (39))){
var state_24080__$1 = state_24080;
var statearr_24095_25623 = state_24080__$1;
(statearr_24095_25623[(2)] = null);

(statearr_24095_25623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (4))){
var inst_23950 = (state_24080[(12)]);
var inst_23950__$1 = (state_24080[(2)]);
var inst_23951 = (inst_23950__$1 == null);
var state_24080__$1 = (function (){var statearr_24096 = state_24080;
(statearr_24096[(12)] = inst_23950__$1);

return statearr_24096;
})();
if(cljs.core.truth_(inst_23951)){
var statearr_24097_25626 = state_24080__$1;
(statearr_24097_25626[(1)] = (5));

} else {
var statearr_24098_25627 = state_24080__$1;
(statearr_24098_25627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (15))){
var inst_23962 = (state_24080[(17)]);
var inst_23959 = (state_24080[(14)]);
var inst_23960 = (state_24080[(15)]);
var inst_23961 = (state_24080[(16)]);
var inst_23977 = (state_24080[(2)]);
var inst_23978 = (inst_23962 + (1));
var tmp24092 = inst_23959;
var tmp24093 = inst_23960;
var tmp24094 = inst_23961;
var inst_23959__$1 = tmp24092;
var inst_23960__$1 = tmp24093;
var inst_23961__$1 = tmp24094;
var inst_23962__$1 = inst_23978;
var state_24080__$1 = (function (){var statearr_24099 = state_24080;
(statearr_24099[(18)] = inst_23977);

(statearr_24099[(14)] = inst_23959__$1);

(statearr_24099[(15)] = inst_23960__$1);

(statearr_24099[(16)] = inst_23961__$1);

(statearr_24099[(17)] = inst_23962__$1);

return statearr_24099;
})();
var statearr_24100_25630 = state_24080__$1;
(statearr_24100_25630[(2)] = null);

(statearr_24100_25630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (21))){
var inst_24004 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24104_25631 = state_24080__$1;
(statearr_24104_25631[(2)] = inst_24004);

(statearr_24104_25631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (31))){
var inst_24030 = (state_24080[(11)]);
var inst_24034 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24030);
var state_24080__$1 = state_24080;
var statearr_24105_25633 = state_24080__$1;
(statearr_24105_25633[(2)] = inst_24034);

(statearr_24105_25633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (32))){
var inst_24025 = (state_24080[(10)]);
var inst_24022 = (state_24080[(19)]);
var inst_24023 = (state_24080[(9)]);
var inst_24024 = (state_24080[(20)]);
var inst_24036 = (state_24080[(2)]);
var inst_24037 = (inst_24025 + (1));
var tmp24101 = inst_24023;
var tmp24102 = inst_24022;
var tmp24103 = inst_24024;
var inst_24022__$1 = tmp24102;
var inst_24023__$1 = tmp24101;
var inst_24024__$1 = tmp24103;
var inst_24025__$1 = inst_24037;
var state_24080__$1 = (function (){var statearr_24106 = state_24080;
(statearr_24106[(21)] = inst_24036);

(statearr_24106[(19)] = inst_24022__$1);

(statearr_24106[(9)] = inst_24023__$1);

(statearr_24106[(20)] = inst_24024__$1);

(statearr_24106[(10)] = inst_24025__$1);

return statearr_24106;
})();
var statearr_24107_25636 = state_24080__$1;
(statearr_24107_25636[(2)] = null);

(statearr_24107_25636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (40))){
var inst_24049 = (state_24080[(22)]);
var inst_24053 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24049);
var state_24080__$1 = state_24080;
var statearr_24108_25638 = state_24080__$1;
(statearr_24108_25638[(2)] = inst_24053);

(statearr_24108_25638[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (33))){
var inst_24040 = (state_24080[(23)]);
var inst_24042 = cljs.core.chunked_seq_QMARK_(inst_24040);
var state_24080__$1 = state_24080;
if(inst_24042){
var statearr_24109_25640 = state_24080__$1;
(statearr_24109_25640[(1)] = (36));

} else {
var statearr_24110_25641 = state_24080__$1;
(statearr_24110_25641[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (13))){
var inst_23971 = (state_24080[(24)]);
var inst_23974 = cljs.core.async.close_BANG_(inst_23971);
var state_24080__$1 = state_24080;
var statearr_24111_25642 = state_24080__$1;
(statearr_24111_25642[(2)] = inst_23974);

(statearr_24111_25642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (22))){
var inst_23994 = (state_24080[(8)]);
var inst_23997 = cljs.core.async.close_BANG_(inst_23994);
var state_24080__$1 = state_24080;
var statearr_24112_25645 = state_24080__$1;
(statearr_24112_25645[(2)] = inst_23997);

(statearr_24112_25645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (36))){
var inst_24040 = (state_24080[(23)]);
var inst_24044 = cljs.core.chunk_first(inst_24040);
var inst_24045 = cljs.core.chunk_rest(inst_24040);
var inst_24046 = cljs.core.count(inst_24044);
var inst_24022 = inst_24045;
var inst_24023 = inst_24044;
var inst_24024 = inst_24046;
var inst_24025 = (0);
var state_24080__$1 = (function (){var statearr_24113 = state_24080;
(statearr_24113[(19)] = inst_24022);

(statearr_24113[(9)] = inst_24023);

(statearr_24113[(20)] = inst_24024);

(statearr_24113[(10)] = inst_24025);

return statearr_24113;
})();
var statearr_24114_25648 = state_24080__$1;
(statearr_24114_25648[(2)] = null);

(statearr_24114_25648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (41))){
var inst_24040 = (state_24080[(23)]);
var inst_24055 = (state_24080[(2)]);
var inst_24056 = cljs.core.next(inst_24040);
var inst_24022 = inst_24056;
var inst_24023 = null;
var inst_24024 = (0);
var inst_24025 = (0);
var state_24080__$1 = (function (){var statearr_24115 = state_24080;
(statearr_24115[(25)] = inst_24055);

(statearr_24115[(19)] = inst_24022);

(statearr_24115[(9)] = inst_24023);

(statearr_24115[(20)] = inst_24024);

(statearr_24115[(10)] = inst_24025);

return statearr_24115;
})();
var statearr_24116_25651 = state_24080__$1;
(statearr_24116_25651[(2)] = null);

(statearr_24116_25651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (43))){
var state_24080__$1 = state_24080;
var statearr_24117_25652 = state_24080__$1;
(statearr_24117_25652[(2)] = null);

(statearr_24117_25652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (29))){
var inst_24064 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24118_25655 = state_24080__$1;
(statearr_24118_25655[(2)] = inst_24064);

(statearr_24118_25655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (44))){
var inst_24073 = (state_24080[(2)]);
var state_24080__$1 = (function (){var statearr_24119 = state_24080;
(statearr_24119[(26)] = inst_24073);

return statearr_24119;
})();
var statearr_24120_25656 = state_24080__$1;
(statearr_24120_25656[(2)] = null);

(statearr_24120_25656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (6))){
var inst_24014 = (state_24080[(27)]);
var inst_24013 = cljs.core.deref(cs);
var inst_24014__$1 = cljs.core.keys(inst_24013);
var inst_24015 = cljs.core.count(inst_24014__$1);
var inst_24016 = cljs.core.reset_BANG_(dctr,inst_24015);
var inst_24021 = cljs.core.seq(inst_24014__$1);
var inst_24022 = inst_24021;
var inst_24023 = null;
var inst_24024 = (0);
var inst_24025 = (0);
var state_24080__$1 = (function (){var statearr_24121 = state_24080;
(statearr_24121[(27)] = inst_24014__$1);

(statearr_24121[(28)] = inst_24016);

(statearr_24121[(19)] = inst_24022);

(statearr_24121[(9)] = inst_24023);

(statearr_24121[(20)] = inst_24024);

(statearr_24121[(10)] = inst_24025);

return statearr_24121;
})();
var statearr_24122_25658 = state_24080__$1;
(statearr_24122_25658[(2)] = null);

(statearr_24122_25658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (28))){
var inst_24022 = (state_24080[(19)]);
var inst_24040 = (state_24080[(23)]);
var inst_24040__$1 = cljs.core.seq(inst_24022);
var state_24080__$1 = (function (){var statearr_24123 = state_24080;
(statearr_24123[(23)] = inst_24040__$1);

return statearr_24123;
})();
if(inst_24040__$1){
var statearr_24124_25660 = state_24080__$1;
(statearr_24124_25660[(1)] = (33));

} else {
var statearr_24125_25662 = state_24080__$1;
(statearr_24125_25662[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (25))){
var inst_24025 = (state_24080[(10)]);
var inst_24024 = (state_24080[(20)]);
var inst_24027 = (inst_24025 < inst_24024);
var inst_24028 = inst_24027;
var state_24080__$1 = state_24080;
if(cljs.core.truth_(inst_24028)){
var statearr_24126_25664 = state_24080__$1;
(statearr_24126_25664[(1)] = (27));

} else {
var statearr_24127_25665 = state_24080__$1;
(statearr_24127_25665[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (34))){
var state_24080__$1 = state_24080;
var statearr_24128_25666 = state_24080__$1;
(statearr_24128_25666[(2)] = null);

(statearr_24128_25666[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (17))){
var state_24080__$1 = state_24080;
var statearr_24129_25667 = state_24080__$1;
(statearr_24129_25667[(2)] = null);

(statearr_24129_25667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (3))){
var inst_24078 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24080__$1,inst_24078);
} else {
if((state_val_24081 === (12))){
var inst_24009 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24130_25668 = state_24080__$1;
(statearr_24130_25668[(2)] = inst_24009);

(statearr_24130_25668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (2))){
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24080__$1,(4),ch);
} else {
if((state_val_24081 === (23))){
var state_24080__$1 = state_24080;
var statearr_24131_25669 = state_24080__$1;
(statearr_24131_25669[(2)] = null);

(statearr_24131_25669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (35))){
var inst_24062 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24132_25671 = state_24080__$1;
(statearr_24132_25671[(2)] = inst_24062);

(statearr_24132_25671[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (19))){
var inst_23981 = (state_24080[(7)]);
var inst_23985 = cljs.core.chunk_first(inst_23981);
var inst_23986 = cljs.core.chunk_rest(inst_23981);
var inst_23987 = cljs.core.count(inst_23985);
var inst_23959 = inst_23986;
var inst_23960 = inst_23985;
var inst_23961 = inst_23987;
var inst_23962 = (0);
var state_24080__$1 = (function (){var statearr_24133 = state_24080;
(statearr_24133[(14)] = inst_23959);

(statearr_24133[(15)] = inst_23960);

(statearr_24133[(16)] = inst_23961);

(statearr_24133[(17)] = inst_23962);

return statearr_24133;
})();
var statearr_24134_25674 = state_24080__$1;
(statearr_24134_25674[(2)] = null);

(statearr_24134_25674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (11))){
var inst_23959 = (state_24080[(14)]);
var inst_23981 = (state_24080[(7)]);
var inst_23981__$1 = cljs.core.seq(inst_23959);
var state_24080__$1 = (function (){var statearr_24135 = state_24080;
(statearr_24135[(7)] = inst_23981__$1);

return statearr_24135;
})();
if(inst_23981__$1){
var statearr_24136_25677 = state_24080__$1;
(statearr_24136_25677[(1)] = (16));

} else {
var statearr_24137_25679 = state_24080__$1;
(statearr_24137_25679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (9))){
var inst_24011 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24138_25680 = state_24080__$1;
(statearr_24138_25680[(2)] = inst_24011);

(statearr_24138_25680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (5))){
var inst_23957 = cljs.core.deref(cs);
var inst_23958 = cljs.core.seq(inst_23957);
var inst_23959 = inst_23958;
var inst_23960 = null;
var inst_23961 = (0);
var inst_23962 = (0);
var state_24080__$1 = (function (){var statearr_24139 = state_24080;
(statearr_24139[(14)] = inst_23959);

(statearr_24139[(15)] = inst_23960);

(statearr_24139[(16)] = inst_23961);

(statearr_24139[(17)] = inst_23962);

return statearr_24139;
})();
var statearr_24140_25682 = state_24080__$1;
(statearr_24140_25682[(2)] = null);

(statearr_24140_25682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (14))){
var state_24080__$1 = state_24080;
var statearr_24141_25684 = state_24080__$1;
(statearr_24141_25684[(2)] = null);

(statearr_24141_25684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (45))){
var inst_24070 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24142_25685 = state_24080__$1;
(statearr_24142_25685[(2)] = inst_24070);

(statearr_24142_25685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (26))){
var inst_24014 = (state_24080[(27)]);
var inst_24066 = (state_24080[(2)]);
var inst_24067 = cljs.core.seq(inst_24014);
var state_24080__$1 = (function (){var statearr_24143 = state_24080;
(statearr_24143[(29)] = inst_24066);

return statearr_24143;
})();
if(inst_24067){
var statearr_24144_25687 = state_24080__$1;
(statearr_24144_25687[(1)] = (42));

} else {
var statearr_24145_25688 = state_24080__$1;
(statearr_24145_25688[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (16))){
var inst_23981 = (state_24080[(7)]);
var inst_23983 = cljs.core.chunked_seq_QMARK_(inst_23981);
var state_24080__$1 = state_24080;
if(inst_23983){
var statearr_24146_25690 = state_24080__$1;
(statearr_24146_25690[(1)] = (19));

} else {
var statearr_24147_25691 = state_24080__$1;
(statearr_24147_25691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (38))){
var inst_24059 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24148_25693 = state_24080__$1;
(statearr_24148_25693[(2)] = inst_24059);

(statearr_24148_25693[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (30))){
var state_24080__$1 = state_24080;
var statearr_24149_25694 = state_24080__$1;
(statearr_24149_25694[(2)] = null);

(statearr_24149_25694[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (10))){
var inst_23960 = (state_24080[(15)]);
var inst_23962 = (state_24080[(17)]);
var inst_23970 = cljs.core._nth(inst_23960,inst_23962);
var inst_23971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23970,(0),null);
var inst_23972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23970,(1),null);
var state_24080__$1 = (function (){var statearr_24150 = state_24080;
(statearr_24150[(24)] = inst_23971);

return statearr_24150;
})();
if(cljs.core.truth_(inst_23972)){
var statearr_24151_25696 = state_24080__$1;
(statearr_24151_25696[(1)] = (13));

} else {
var statearr_24152_25697 = state_24080__$1;
(statearr_24152_25697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (18))){
var inst_24007 = (state_24080[(2)]);
var state_24080__$1 = state_24080;
var statearr_24153_25699 = state_24080__$1;
(statearr_24153_25699[(2)] = inst_24007);

(statearr_24153_25699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (42))){
var state_24080__$1 = state_24080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24080__$1,(45),dchan);
} else {
if((state_val_24081 === (37))){
var inst_24040 = (state_24080[(23)]);
var inst_24049 = (state_24080[(22)]);
var inst_23950 = (state_24080[(12)]);
var inst_24049__$1 = cljs.core.first(inst_24040);
var inst_24050 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24049__$1,inst_23950,done);
var state_24080__$1 = (function (){var statearr_24154 = state_24080;
(statearr_24154[(22)] = inst_24049__$1);

return statearr_24154;
})();
if(cljs.core.truth_(inst_24050)){
var statearr_24155_25702 = state_24080__$1;
(statearr_24155_25702[(1)] = (39));

} else {
var statearr_24156_25703 = state_24080__$1;
(statearr_24156_25703[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24081 === (8))){
var inst_23962 = (state_24080[(17)]);
var inst_23961 = (state_24080[(16)]);
var inst_23964 = (inst_23962 < inst_23961);
var inst_23965 = inst_23964;
var state_24080__$1 = state_24080;
if(cljs.core.truth_(inst_23965)){
var statearr_24157_25707 = state_24080__$1;
(statearr_24157_25707[(1)] = (10));

} else {
var statearr_24158_25708 = state_24080__$1;
(statearr_24158_25708[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__23404__auto__ = null;
var cljs$core$async$mult_$_state_machine__23404__auto____0 = (function (){
var statearr_24159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24159[(0)] = cljs$core$async$mult_$_state_machine__23404__auto__);

(statearr_24159[(1)] = (1));

return statearr_24159;
});
var cljs$core$async$mult_$_state_machine__23404__auto____1 = (function (state_24080){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24080);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24160){var ex__23407__auto__ = e24160;
var statearr_24161_25712 = state_24080;
(statearr_24161_25712[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24080[(4)]))){
var statearr_24162_25713 = state_24080;
(statearr_24162_25713[(1)] = cljs.core.first((state_24080[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25714 = state_24080;
state_24080 = G__25714;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23404__auto__ = function(state_24080){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23404__auto____1.call(this,state_24080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23404__auto____0;
cljs$core$async$mult_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23404__auto____1;
return cljs$core$async$mult_$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24163 = f__23475__auto__();
(statearr_24163[(6)] = c__23472__auto___25610);

return statearr_24163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24165 = arguments.length;
switch (G__24165) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25720 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25720(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25723 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25723(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25726 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25726(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25728 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25728(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25730 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25730(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25735 = arguments.length;
var i__5750__auto___25736 = (0);
while(true){
if((i__5750__auto___25736 < len__5749__auto___25735)){
args__5755__auto__.push((arguments[i__5750__auto___25736]));

var G__25737 = (i__5750__auto___25736 + (1));
i__5750__auto___25736 = G__25737;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24170){
var map__24171 = p__24170;
var map__24171__$1 = cljs.core.__destructure_map(map__24171);
var opts = map__24171__$1;
var statearr_24172_25738 = state;
(statearr_24172_25738[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_24173_25739 = state;
(statearr_24173_25739[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_24174_25740 = state;
(statearr_24174_25740[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24166){
var G__24167 = cljs.core.first(seq24166);
var seq24166__$1 = cljs.core.next(seq24166);
var G__24168 = cljs.core.first(seq24166__$1);
var seq24166__$2 = cljs.core.next(seq24166__$1);
var G__24169 = cljs.core.first(seq24166__$2);
var seq24166__$3 = cljs.core.next(seq24166__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24167,G__24168,G__24169,seq24166__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24175 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24176){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24176 = meta24176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24177,meta24176__$1){
var self__ = this;
var _24177__$1 = this;
return (new cljs.core.async.t_cljs$core$async24175(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24176__$1));
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24177){
var self__ = this;
var _24177__$1 = this;
return self__.meta24176;
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24175.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async24175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24176","meta24176",1362048974,null)], null);
}));

(cljs.core.async.t_cljs$core$async24175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24175");

(cljs.core.async.t_cljs$core$async24175.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async24175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24175.
 */
cljs.core.async.__GT_t_cljs$core$async24175 = (function cljs$core$async$__GT_t_cljs$core$async24175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24176){
return (new cljs.core.async.t_cljs$core$async24175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24176));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async24175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__23472__auto___25750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24245){
var state_val_24246 = (state_24245[(1)]);
if((state_val_24246 === (7))){
var inst_24205 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24205)){
var statearr_24247_25751 = state_24245__$1;
(statearr_24247_25751[(1)] = (8));

} else {
var statearr_24248_25752 = state_24245__$1;
(statearr_24248_25752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (20))){
var inst_24198 = (state_24245[(7)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24245__$1,(23),out,inst_24198);
} else {
if((state_val_24246 === (1))){
var inst_24181 = calc_state();
var inst_24182 = cljs.core.__destructure_map(inst_24181);
var inst_24183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24182,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24182,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24182,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24186 = inst_24181;
var state_24245__$1 = (function (){var statearr_24249 = state_24245;
(statearr_24249[(8)] = inst_24183);

(statearr_24249[(9)] = inst_24184);

(statearr_24249[(10)] = inst_24185);

(statearr_24249[(11)] = inst_24186);

return statearr_24249;
})();
var statearr_24250_25754 = state_24245__$1;
(statearr_24250_25754[(2)] = null);

(statearr_24250_25754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (24))){
var inst_24189 = (state_24245[(12)]);
var inst_24186 = inst_24189;
var state_24245__$1 = (function (){var statearr_24251 = state_24245;
(statearr_24251[(11)] = inst_24186);

return statearr_24251;
})();
var statearr_24252_25755 = state_24245__$1;
(statearr_24252_25755[(2)] = null);

(statearr_24252_25755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (4))){
var inst_24198 = (state_24245[(7)]);
var inst_24200 = (state_24245[(13)]);
var inst_24197 = (state_24245[(2)]);
var inst_24198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24197,(0),null);
var inst_24199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24197,(1),null);
var inst_24200__$1 = (inst_24198__$1 == null);
var state_24245__$1 = (function (){var statearr_24253 = state_24245;
(statearr_24253[(7)] = inst_24198__$1);

(statearr_24253[(14)] = inst_24199);

(statearr_24253[(13)] = inst_24200__$1);

return statearr_24253;
})();
if(cljs.core.truth_(inst_24200__$1)){
var statearr_24254_25756 = state_24245__$1;
(statearr_24254_25756[(1)] = (5));

} else {
var statearr_24255_25757 = state_24245__$1;
(statearr_24255_25757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (15))){
var inst_24190 = (state_24245[(15)]);
var inst_24219 = (state_24245[(16)]);
var inst_24219__$1 = cljs.core.empty_QMARK_(inst_24190);
var state_24245__$1 = (function (){var statearr_24256 = state_24245;
(statearr_24256[(16)] = inst_24219__$1);

return statearr_24256;
})();
if(inst_24219__$1){
var statearr_24257_25758 = state_24245__$1;
(statearr_24257_25758[(1)] = (17));

} else {
var statearr_24258_25759 = state_24245__$1;
(statearr_24258_25759[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (21))){
var inst_24189 = (state_24245[(12)]);
var inst_24186 = inst_24189;
var state_24245__$1 = (function (){var statearr_24259 = state_24245;
(statearr_24259[(11)] = inst_24186);

return statearr_24259;
})();
var statearr_24260_25760 = state_24245__$1;
(statearr_24260_25760[(2)] = null);

(statearr_24260_25760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (13))){
var inst_24212 = (state_24245[(2)]);
var inst_24213 = calc_state();
var inst_24186 = inst_24213;
var state_24245__$1 = (function (){var statearr_24261 = state_24245;
(statearr_24261[(17)] = inst_24212);

(statearr_24261[(11)] = inst_24186);

return statearr_24261;
})();
var statearr_24262_25761 = state_24245__$1;
(statearr_24262_25761[(2)] = null);

(statearr_24262_25761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (22))){
var inst_24239 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24263_25764 = state_24245__$1;
(statearr_24263_25764[(2)] = inst_24239);

(statearr_24263_25764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (6))){
var inst_24199 = (state_24245[(14)]);
var inst_24203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24199,change);
var state_24245__$1 = state_24245;
var statearr_24264_25767 = state_24245__$1;
(statearr_24264_25767[(2)] = inst_24203);

(statearr_24264_25767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (25))){
var state_24245__$1 = state_24245;
var statearr_24265_25770 = state_24245__$1;
(statearr_24265_25770[(2)] = null);

(statearr_24265_25770[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (17))){
var inst_24191 = (state_24245[(18)]);
var inst_24199 = (state_24245[(14)]);
var inst_24221 = (inst_24191.cljs$core$IFn$_invoke$arity$1 ? inst_24191.cljs$core$IFn$_invoke$arity$1(inst_24199) : inst_24191.call(null,inst_24199));
var inst_24222 = cljs.core.not(inst_24221);
var state_24245__$1 = state_24245;
var statearr_24266_25772 = state_24245__$1;
(statearr_24266_25772[(2)] = inst_24222);

(statearr_24266_25772[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (3))){
var inst_24243 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24245__$1,inst_24243);
} else {
if((state_val_24246 === (12))){
var state_24245__$1 = state_24245;
var statearr_24267_25773 = state_24245__$1;
(statearr_24267_25773[(2)] = null);

(statearr_24267_25773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (2))){
var inst_24186 = (state_24245[(11)]);
var inst_24189 = (state_24245[(12)]);
var inst_24189__$1 = cljs.core.__destructure_map(inst_24186);
var inst_24190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24245__$1 = (function (){var statearr_24268 = state_24245;
(statearr_24268[(12)] = inst_24189__$1);

(statearr_24268[(15)] = inst_24190);

(statearr_24268[(18)] = inst_24191);

return statearr_24268;
})();
return cljs.core.async.ioc_alts_BANG_(state_24245__$1,(4),inst_24192);
} else {
if((state_val_24246 === (23))){
var inst_24230 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24230)){
var statearr_24269_25774 = state_24245__$1;
(statearr_24269_25774[(1)] = (24));

} else {
var statearr_24270_25775 = state_24245__$1;
(statearr_24270_25775[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (19))){
var inst_24225 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24271_25776 = state_24245__$1;
(statearr_24271_25776[(2)] = inst_24225);

(statearr_24271_25776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (11))){
var inst_24199 = (state_24245[(14)]);
var inst_24209 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24199);
var state_24245__$1 = state_24245;
var statearr_24272_25777 = state_24245__$1;
(statearr_24272_25777[(2)] = inst_24209);

(statearr_24272_25777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (9))){
var inst_24190 = (state_24245[(15)]);
var inst_24199 = (state_24245[(14)]);
var inst_24216 = (state_24245[(19)]);
var inst_24216__$1 = (inst_24190.cljs$core$IFn$_invoke$arity$1 ? inst_24190.cljs$core$IFn$_invoke$arity$1(inst_24199) : inst_24190.call(null,inst_24199));
var state_24245__$1 = (function (){var statearr_24273 = state_24245;
(statearr_24273[(19)] = inst_24216__$1);

return statearr_24273;
})();
if(cljs.core.truth_(inst_24216__$1)){
var statearr_24274_25778 = state_24245__$1;
(statearr_24274_25778[(1)] = (14));

} else {
var statearr_24275_25779 = state_24245__$1;
(statearr_24275_25779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (5))){
var inst_24200 = (state_24245[(13)]);
var state_24245__$1 = state_24245;
var statearr_24276_25780 = state_24245__$1;
(statearr_24276_25780[(2)] = inst_24200);

(statearr_24276_25780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (14))){
var inst_24216 = (state_24245[(19)]);
var state_24245__$1 = state_24245;
var statearr_24277_25781 = state_24245__$1;
(statearr_24277_25781[(2)] = inst_24216);

(statearr_24277_25781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (26))){
var inst_24235 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24278_25782 = state_24245__$1;
(statearr_24278_25782[(2)] = inst_24235);

(statearr_24278_25782[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (16))){
var inst_24227 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24227)){
var statearr_24279_25783 = state_24245__$1;
(statearr_24279_25783[(1)] = (20));

} else {
var statearr_24280_25784 = state_24245__$1;
(statearr_24280_25784[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (10))){
var inst_24241 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24281_25785 = state_24245__$1;
(statearr_24281_25785[(2)] = inst_24241);

(statearr_24281_25785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (18))){
var inst_24219 = (state_24245[(16)]);
var state_24245__$1 = state_24245;
var statearr_24282_25786 = state_24245__$1;
(statearr_24282_25786[(2)] = inst_24219);

(statearr_24282_25786[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (8))){
var inst_24198 = (state_24245[(7)]);
var inst_24207 = (inst_24198 == null);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24207)){
var statearr_24283_25787 = state_24245__$1;
(statearr_24283_25787[(1)] = (11));

} else {
var statearr_24284_25788 = state_24245__$1;
(statearr_24284_25788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__23404__auto__ = null;
var cljs$core$async$mix_$_state_machine__23404__auto____0 = (function (){
var statearr_24285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24285[(0)] = cljs$core$async$mix_$_state_machine__23404__auto__);

(statearr_24285[(1)] = (1));

return statearr_24285;
});
var cljs$core$async$mix_$_state_machine__23404__auto____1 = (function (state_24245){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24245);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24286){var ex__23407__auto__ = e24286;
var statearr_24287_25789 = state_24245;
(statearr_24287_25789[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24245[(4)]))){
var statearr_24288_25790 = state_24245;
(statearr_24288_25790[(1)] = cljs.core.first((state_24245[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25791 = state_24245;
state_24245 = G__25791;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23404__auto__ = function(state_24245){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23404__auto____1.call(this,state_24245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23404__auto____0;
cljs$core$async$mix_$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23404__auto____1;
return cljs$core$async$mix_$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24289 = f__23475__auto__();
(statearr_24289[(6)] = c__23472__auto___25750);

return statearr_24289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25792 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25792(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25793 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25793(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25794 = (function() {
var G__25795 = null;
var G__25795__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__25795__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__25795 = function(p,v){
switch(arguments.length){
case 1:
return G__25795__1.call(this,p);
case 2:
return G__25795__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25795.cljs$core$IFn$_invoke$arity$1 = G__25795__1;
G__25795.cljs$core$IFn$_invoke$arity$2 = G__25795__2;
return G__25795;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24291 = arguments.length;
switch (G__24291) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25794(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25794(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24295 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24296){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24296 = meta24296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24297,meta24296__$1){
var self__ = this;
var _24297__$1 = this;
return (new cljs.core.async.t_cljs$core$async24295(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24296__$1));
}));

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24297){
var self__ = this;
var _24297__$1 = this;
return self__.meta24296;
}));

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async24295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async24295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24296","meta24296",-1100113204,null)], null);
}));

(cljs.core.async.t_cljs$core$async24295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24295");

(cljs.core.async.t_cljs$core$async24295.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async24295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24295.
 */
cljs.core.async.__GT_t_cljs$core$async24295 = (function cljs$core$async$__GT_t_cljs$core$async24295(ch,topic_fn,buf_fn,mults,ensure_mult,meta24296){
return (new cljs.core.async.t_cljs$core$async24295(ch,topic_fn,buf_fn,mults,ensure_mult,meta24296));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24294 = arguments.length;
switch (G__24294) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__24292_SHARP_){
if(cljs.core.truth_((p1__24292_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24292_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24292_SHARP_.call(null,topic)))){
return p1__24292_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24292_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async24295(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__23472__auto___25808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24369){
var state_val_24370 = (state_24369[(1)]);
if((state_val_24370 === (7))){
var inst_24365 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24371_25809 = state_24369__$1;
(statearr_24371_25809[(2)] = inst_24365);

(statearr_24371_25809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (20))){
var state_24369__$1 = state_24369;
var statearr_24372_25811 = state_24369__$1;
(statearr_24372_25811[(2)] = null);

(statearr_24372_25811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (1))){
var state_24369__$1 = state_24369;
var statearr_24373_25812 = state_24369__$1;
(statearr_24373_25812[(2)] = null);

(statearr_24373_25812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (24))){
var inst_24348 = (state_24369[(7)]);
var inst_24357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24348);
var state_24369__$1 = state_24369;
var statearr_24374_25813 = state_24369__$1;
(statearr_24374_25813[(2)] = inst_24357);

(statearr_24374_25813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (4))){
var inst_24300 = (state_24369[(8)]);
var inst_24300__$1 = (state_24369[(2)]);
var inst_24301 = (inst_24300__$1 == null);
var state_24369__$1 = (function (){var statearr_24375 = state_24369;
(statearr_24375[(8)] = inst_24300__$1);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24301)){
var statearr_24376_25814 = state_24369__$1;
(statearr_24376_25814[(1)] = (5));

} else {
var statearr_24377_25815 = state_24369__$1;
(statearr_24377_25815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (15))){
var inst_24342 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24378_25816 = state_24369__$1;
(statearr_24378_25816[(2)] = inst_24342);

(statearr_24378_25816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (21))){
var inst_24362 = (state_24369[(2)]);
var state_24369__$1 = (function (){var statearr_24379 = state_24369;
(statearr_24379[(9)] = inst_24362);

return statearr_24379;
})();
var statearr_24380_25817 = state_24369__$1;
(statearr_24380_25817[(2)] = null);

(statearr_24380_25817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (13))){
var inst_24324 = (state_24369[(10)]);
var inst_24326 = cljs.core.chunked_seq_QMARK_(inst_24324);
var state_24369__$1 = state_24369;
if(inst_24326){
var statearr_24381_25818 = state_24369__$1;
(statearr_24381_25818[(1)] = (16));

} else {
var statearr_24382_25819 = state_24369__$1;
(statearr_24382_25819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (22))){
var inst_24354 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
if(cljs.core.truth_(inst_24354)){
var statearr_24383_25821 = state_24369__$1;
(statearr_24383_25821[(1)] = (23));

} else {
var statearr_24384_25822 = state_24369__$1;
(statearr_24384_25822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (6))){
var inst_24300 = (state_24369[(8)]);
var inst_24348 = (state_24369[(7)]);
var inst_24350 = (state_24369[(11)]);
var inst_24348__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24300) : topic_fn.call(null,inst_24300));
var inst_24349 = cljs.core.deref(mults);
var inst_24350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24349,inst_24348__$1);
var state_24369__$1 = (function (){var statearr_24385 = state_24369;
(statearr_24385[(7)] = inst_24348__$1);

(statearr_24385[(11)] = inst_24350__$1);

return statearr_24385;
})();
if(cljs.core.truth_(inst_24350__$1)){
var statearr_24386_25823 = state_24369__$1;
(statearr_24386_25823[(1)] = (19));

} else {
var statearr_24387_25824 = state_24369__$1;
(statearr_24387_25824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (25))){
var inst_24359 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24388_25825 = state_24369__$1;
(statearr_24388_25825[(2)] = inst_24359);

(statearr_24388_25825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (17))){
var inst_24324 = (state_24369[(10)]);
var inst_24333 = cljs.core.first(inst_24324);
var inst_24334 = cljs.core.async.muxch_STAR_(inst_24333);
var inst_24335 = cljs.core.async.close_BANG_(inst_24334);
var inst_24336 = cljs.core.next(inst_24324);
var inst_24310 = inst_24336;
var inst_24311 = null;
var inst_24312 = (0);
var inst_24313 = (0);
var state_24369__$1 = (function (){var statearr_24389 = state_24369;
(statearr_24389[(12)] = inst_24335);

(statearr_24389[(13)] = inst_24310);

(statearr_24389[(14)] = inst_24311);

(statearr_24389[(15)] = inst_24312);

(statearr_24389[(16)] = inst_24313);

return statearr_24389;
})();
var statearr_24390_25826 = state_24369__$1;
(statearr_24390_25826[(2)] = null);

(statearr_24390_25826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (3))){
var inst_24367 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24369__$1,inst_24367);
} else {
if((state_val_24370 === (12))){
var inst_24344 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24391_25827 = state_24369__$1;
(statearr_24391_25827[(2)] = inst_24344);

(statearr_24391_25827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (2))){
var state_24369__$1 = state_24369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24369__$1,(4),ch);
} else {
if((state_val_24370 === (23))){
var state_24369__$1 = state_24369;
var statearr_24392_25829 = state_24369__$1;
(statearr_24392_25829[(2)] = null);

(statearr_24392_25829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (19))){
var inst_24350 = (state_24369[(11)]);
var inst_24300 = (state_24369[(8)]);
var inst_24352 = cljs.core.async.muxch_STAR_(inst_24350);
var state_24369__$1 = state_24369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24369__$1,(22),inst_24352,inst_24300);
} else {
if((state_val_24370 === (11))){
var inst_24310 = (state_24369[(13)]);
var inst_24324 = (state_24369[(10)]);
var inst_24324__$1 = cljs.core.seq(inst_24310);
var state_24369__$1 = (function (){var statearr_24393 = state_24369;
(statearr_24393[(10)] = inst_24324__$1);

return statearr_24393;
})();
if(inst_24324__$1){
var statearr_24394_25831 = state_24369__$1;
(statearr_24394_25831[(1)] = (13));

} else {
var statearr_24395_25833 = state_24369__$1;
(statearr_24395_25833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (9))){
var inst_24346 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24396_25835 = state_24369__$1;
(statearr_24396_25835[(2)] = inst_24346);

(statearr_24396_25835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (5))){
var inst_24307 = cljs.core.deref(mults);
var inst_24308 = cljs.core.vals(inst_24307);
var inst_24309 = cljs.core.seq(inst_24308);
var inst_24310 = inst_24309;
var inst_24311 = null;
var inst_24312 = (0);
var inst_24313 = (0);
var state_24369__$1 = (function (){var statearr_24397 = state_24369;
(statearr_24397[(13)] = inst_24310);

(statearr_24397[(14)] = inst_24311);

(statearr_24397[(15)] = inst_24312);

(statearr_24397[(16)] = inst_24313);

return statearr_24397;
})();
var statearr_24398_25838 = state_24369__$1;
(statearr_24398_25838[(2)] = null);

(statearr_24398_25838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (14))){
var state_24369__$1 = state_24369;
var statearr_24402_25840 = state_24369__$1;
(statearr_24402_25840[(2)] = null);

(statearr_24402_25840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (16))){
var inst_24324 = (state_24369[(10)]);
var inst_24328 = cljs.core.chunk_first(inst_24324);
var inst_24329 = cljs.core.chunk_rest(inst_24324);
var inst_24330 = cljs.core.count(inst_24328);
var inst_24310 = inst_24329;
var inst_24311 = inst_24328;
var inst_24312 = inst_24330;
var inst_24313 = (0);
var state_24369__$1 = (function (){var statearr_24403 = state_24369;
(statearr_24403[(13)] = inst_24310);

(statearr_24403[(14)] = inst_24311);

(statearr_24403[(15)] = inst_24312);

(statearr_24403[(16)] = inst_24313);

return statearr_24403;
})();
var statearr_24404_25845 = state_24369__$1;
(statearr_24404_25845[(2)] = null);

(statearr_24404_25845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (10))){
var inst_24311 = (state_24369[(14)]);
var inst_24313 = (state_24369[(16)]);
var inst_24310 = (state_24369[(13)]);
var inst_24312 = (state_24369[(15)]);
var inst_24318 = cljs.core._nth(inst_24311,inst_24313);
var inst_24319 = cljs.core.async.muxch_STAR_(inst_24318);
var inst_24320 = cljs.core.async.close_BANG_(inst_24319);
var inst_24321 = (inst_24313 + (1));
var tmp24399 = inst_24311;
var tmp24400 = inst_24312;
var tmp24401 = inst_24310;
var inst_24310__$1 = tmp24401;
var inst_24311__$1 = tmp24399;
var inst_24312__$1 = tmp24400;
var inst_24313__$1 = inst_24321;
var state_24369__$1 = (function (){var statearr_24405 = state_24369;
(statearr_24405[(17)] = inst_24320);

(statearr_24405[(13)] = inst_24310__$1);

(statearr_24405[(14)] = inst_24311__$1);

(statearr_24405[(15)] = inst_24312__$1);

(statearr_24405[(16)] = inst_24313__$1);

return statearr_24405;
})();
var statearr_24406_25850 = state_24369__$1;
(statearr_24406_25850[(2)] = null);

(statearr_24406_25850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (18))){
var inst_24339 = (state_24369[(2)]);
var state_24369__$1 = state_24369;
var statearr_24407_25851 = state_24369__$1;
(statearr_24407_25851[(2)] = inst_24339);

(statearr_24407_25851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24370 === (8))){
var inst_24313 = (state_24369[(16)]);
var inst_24312 = (state_24369[(15)]);
var inst_24315 = (inst_24313 < inst_24312);
var inst_24316 = inst_24315;
var state_24369__$1 = state_24369;
if(cljs.core.truth_(inst_24316)){
var statearr_24408_25855 = state_24369__$1;
(statearr_24408_25855[(1)] = (10));

} else {
var statearr_24409_25856 = state_24369__$1;
(statearr_24409_25856[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24410[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24410[(1)] = (1));

return statearr_24410;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24369){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24369);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24411){var ex__23407__auto__ = e24411;
var statearr_24412_25860 = state_24369;
(statearr_24412_25860[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24369[(4)]))){
var statearr_24413_25861 = state_24369;
(statearr_24413_25861[(1)] = cljs.core.first((state_24369[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25863 = state_24369;
state_24369 = G__25863;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24414 = f__23475__auto__();
(statearr_24414[(6)] = c__23472__auto___25808);

return statearr_24414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24416 = arguments.length;
switch (G__24416) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24418 = arguments.length;
switch (G__24418) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24420 = arguments.length;
switch (G__24420) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__23472__auto___25885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24463){
var state_val_24464 = (state_24463[(1)]);
if((state_val_24464 === (7))){
var state_24463__$1 = state_24463;
var statearr_24465_25888 = state_24463__$1;
(statearr_24465_25888[(2)] = null);

(statearr_24465_25888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (1))){
var state_24463__$1 = state_24463;
var statearr_24466_25893 = state_24463__$1;
(statearr_24466_25893[(2)] = null);

(statearr_24466_25893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (4))){
var inst_24424 = (state_24463[(7)]);
var inst_24423 = (state_24463[(8)]);
var inst_24426 = (inst_24424 < inst_24423);
var state_24463__$1 = state_24463;
if(cljs.core.truth_(inst_24426)){
var statearr_24467_25894 = state_24463__$1;
(statearr_24467_25894[(1)] = (6));

} else {
var statearr_24468_25895 = state_24463__$1;
(statearr_24468_25895[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (15))){
var inst_24449 = (state_24463[(9)]);
var inst_24454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24449);
var state_24463__$1 = state_24463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24463__$1,(17),out,inst_24454);
} else {
if((state_val_24464 === (13))){
var inst_24449 = (state_24463[(9)]);
var inst_24449__$1 = (state_24463[(2)]);
var inst_24450 = cljs.core.some(cljs.core.nil_QMARK_,inst_24449__$1);
var state_24463__$1 = (function (){var statearr_24469 = state_24463;
(statearr_24469[(9)] = inst_24449__$1);

return statearr_24469;
})();
if(cljs.core.truth_(inst_24450)){
var statearr_24470_25897 = state_24463__$1;
(statearr_24470_25897[(1)] = (14));

} else {
var statearr_24471_25898 = state_24463__$1;
(statearr_24471_25898[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (6))){
var state_24463__$1 = state_24463;
var statearr_24472_25899 = state_24463__$1;
(statearr_24472_25899[(2)] = null);

(statearr_24472_25899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (17))){
var inst_24456 = (state_24463[(2)]);
var state_24463__$1 = (function (){var statearr_24474 = state_24463;
(statearr_24474[(10)] = inst_24456);

return statearr_24474;
})();
var statearr_24475_25901 = state_24463__$1;
(statearr_24475_25901[(2)] = null);

(statearr_24475_25901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (3))){
var inst_24461 = (state_24463[(2)]);
var state_24463__$1 = state_24463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24463__$1,inst_24461);
} else {
if((state_val_24464 === (12))){
var _ = (function (){var statearr_24476 = state_24463;
(statearr_24476[(4)] = cljs.core.rest((state_24463[(4)])));

return statearr_24476;
})();
var state_24463__$1 = state_24463;
var ex24473 = (state_24463__$1[(2)]);
var statearr_24477_25902 = state_24463__$1;
(statearr_24477_25902[(5)] = ex24473);


if((ex24473 instanceof Object)){
var statearr_24478_25903 = state_24463__$1;
(statearr_24478_25903[(1)] = (11));

(statearr_24478_25903[(5)] = null);

} else {
throw ex24473;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (2))){
var inst_24422 = cljs.core.reset_BANG_(dctr,cnt);
var inst_24423 = cnt;
var inst_24424 = (0);
var state_24463__$1 = (function (){var statearr_24479 = state_24463;
(statearr_24479[(11)] = inst_24422);

(statearr_24479[(8)] = inst_24423);

(statearr_24479[(7)] = inst_24424);

return statearr_24479;
})();
var statearr_24480_25904 = state_24463__$1;
(statearr_24480_25904[(2)] = null);

(statearr_24480_25904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (11))){
var inst_24428 = (state_24463[(2)]);
var inst_24429 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24463__$1 = (function (){var statearr_24481 = state_24463;
(statearr_24481[(12)] = inst_24428);

return statearr_24481;
})();
var statearr_24482_25905 = state_24463__$1;
(statearr_24482_25905[(2)] = inst_24429);

(statearr_24482_25905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (9))){
var inst_24424 = (state_24463[(7)]);
var _ = (function (){var statearr_24483 = state_24463;
(statearr_24483[(4)] = cljs.core.cons((12),(state_24463[(4)])));

return statearr_24483;
})();
var inst_24435 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24424) : chs__$1.call(null,inst_24424));
var inst_24436 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24424) : done.call(null,inst_24424));
var inst_24437 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24435,inst_24436);
var ___$1 = (function (){var statearr_24484 = state_24463;
(statearr_24484[(4)] = cljs.core.rest((state_24463[(4)])));

return statearr_24484;
})();
var state_24463__$1 = state_24463;
var statearr_24485_25906 = state_24463__$1;
(statearr_24485_25906[(2)] = inst_24437);

(statearr_24485_25906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (5))){
var inst_24447 = (state_24463[(2)]);
var state_24463__$1 = (function (){var statearr_24486 = state_24463;
(statearr_24486[(13)] = inst_24447);

return statearr_24486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24463__$1,(13),dchan);
} else {
if((state_val_24464 === (14))){
var inst_24452 = cljs.core.async.close_BANG_(out);
var state_24463__$1 = state_24463;
var statearr_24487_25907 = state_24463__$1;
(statearr_24487_25907[(2)] = inst_24452);

(statearr_24487_25907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (16))){
var inst_24459 = (state_24463[(2)]);
var state_24463__$1 = state_24463;
var statearr_24488_25908 = state_24463__$1;
(statearr_24488_25908[(2)] = inst_24459);

(statearr_24488_25908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (10))){
var inst_24424 = (state_24463[(7)]);
var inst_24440 = (state_24463[(2)]);
var inst_24441 = (inst_24424 + (1));
var inst_24424__$1 = inst_24441;
var state_24463__$1 = (function (){var statearr_24489 = state_24463;
(statearr_24489[(14)] = inst_24440);

(statearr_24489[(7)] = inst_24424__$1);

return statearr_24489;
})();
var statearr_24490_25909 = state_24463__$1;
(statearr_24490_25909[(2)] = null);

(statearr_24490_25909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (8))){
var inst_24445 = (state_24463[(2)]);
var state_24463__$1 = state_24463;
var statearr_24491_25910 = state_24463__$1;
(statearr_24491_25910[(2)] = inst_24445);

(statearr_24491_25910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24492[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24492[(1)] = (1));

return statearr_24492;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24463){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24463);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24493){var ex__23407__auto__ = e24493;
var statearr_24494_25911 = state_24463;
(statearr_24494_25911[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24463[(4)]))){
var statearr_24495_25912 = state_24463;
(statearr_24495_25912[(1)] = cljs.core.first((state_24463[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25914 = state_24463;
state_24463 = G__25914;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24496 = f__23475__auto__();
(statearr_24496[(6)] = c__23472__auto___25885);

return statearr_24496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24499 = arguments.length;
switch (G__24499) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23472__auto___25916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24531){
var state_val_24532 = (state_24531[(1)]);
if((state_val_24532 === (7))){
var inst_24510 = (state_24531[(7)]);
var inst_24511 = (state_24531[(8)]);
var inst_24510__$1 = (state_24531[(2)]);
var inst_24511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24510__$1,(0),null);
var inst_24512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24510__$1,(1),null);
var inst_24513 = (inst_24511__$1 == null);
var state_24531__$1 = (function (){var statearr_24533 = state_24531;
(statearr_24533[(7)] = inst_24510__$1);

(statearr_24533[(8)] = inst_24511__$1);

(statearr_24533[(9)] = inst_24512);

return statearr_24533;
})();
if(cljs.core.truth_(inst_24513)){
var statearr_24534_25918 = state_24531__$1;
(statearr_24534_25918[(1)] = (8));

} else {
var statearr_24535_25919 = state_24531__$1;
(statearr_24535_25919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (1))){
var inst_24500 = cljs.core.vec(chs);
var inst_24501 = inst_24500;
var state_24531__$1 = (function (){var statearr_24536 = state_24531;
(statearr_24536[(10)] = inst_24501);

return statearr_24536;
})();
var statearr_24537_25920 = state_24531__$1;
(statearr_24537_25920[(2)] = null);

(statearr_24537_25920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (4))){
var inst_24501 = (state_24531[(10)]);
var state_24531__$1 = state_24531;
return cljs.core.async.ioc_alts_BANG_(state_24531__$1,(7),inst_24501);
} else {
if((state_val_24532 === (6))){
var inst_24527 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
var statearr_24538_25921 = state_24531__$1;
(statearr_24538_25921[(2)] = inst_24527);

(statearr_24538_25921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (3))){
var inst_24529 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24531__$1,inst_24529);
} else {
if((state_val_24532 === (2))){
var inst_24501 = (state_24531[(10)]);
var inst_24503 = cljs.core.count(inst_24501);
var inst_24504 = (inst_24503 > (0));
var state_24531__$1 = state_24531;
if(cljs.core.truth_(inst_24504)){
var statearr_24540_25937 = state_24531__$1;
(statearr_24540_25937[(1)] = (4));

} else {
var statearr_24541_25938 = state_24531__$1;
(statearr_24541_25938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (11))){
var inst_24501 = (state_24531[(10)]);
var inst_24520 = (state_24531[(2)]);
var tmp24539 = inst_24501;
var inst_24501__$1 = tmp24539;
var state_24531__$1 = (function (){var statearr_24542 = state_24531;
(statearr_24542[(11)] = inst_24520);

(statearr_24542[(10)] = inst_24501__$1);

return statearr_24542;
})();
var statearr_24543_25939 = state_24531__$1;
(statearr_24543_25939[(2)] = null);

(statearr_24543_25939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (9))){
var inst_24511 = (state_24531[(8)]);
var state_24531__$1 = state_24531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24531__$1,(11),out,inst_24511);
} else {
if((state_val_24532 === (5))){
var inst_24525 = cljs.core.async.close_BANG_(out);
var state_24531__$1 = state_24531;
var statearr_24544_25940 = state_24531__$1;
(statearr_24544_25940[(2)] = inst_24525);

(statearr_24544_25940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (10))){
var inst_24523 = (state_24531[(2)]);
var state_24531__$1 = state_24531;
var statearr_24545_25941 = state_24531__$1;
(statearr_24545_25941[(2)] = inst_24523);

(statearr_24545_25941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24532 === (8))){
var inst_24501 = (state_24531[(10)]);
var inst_24510 = (state_24531[(7)]);
var inst_24511 = (state_24531[(8)]);
var inst_24512 = (state_24531[(9)]);
var inst_24515 = (function (){var cs = inst_24501;
var vec__24506 = inst_24510;
var v = inst_24511;
var c = inst_24512;
return (function (p1__24497_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24497_SHARP_);
});
})();
var inst_24516 = cljs.core.filterv(inst_24515,inst_24501);
var inst_24501__$1 = inst_24516;
var state_24531__$1 = (function (){var statearr_24546 = state_24531;
(statearr_24546[(10)] = inst_24501__$1);

return statearr_24546;
})();
var statearr_24547_25943 = state_24531__$1;
(statearr_24547_25943[(2)] = null);

(statearr_24547_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24548[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24548[(1)] = (1));

return statearr_24548;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24531){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24531);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24549){var ex__23407__auto__ = e24549;
var statearr_24550_25944 = state_24531;
(statearr_24550_25944[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24531[(4)]))){
var statearr_24551_25945 = state_24531;
(statearr_24551_25945[(1)] = cljs.core.first((state_24531[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25946 = state_24531;
state_24531 = G__25946;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24552 = f__23475__auto__();
(statearr_24552[(6)] = c__23472__auto___25916);

return statearr_24552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24554 = arguments.length;
switch (G__24554) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23472__auto___25956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24578){
var state_val_24579 = (state_24578[(1)]);
if((state_val_24579 === (7))){
var inst_24560 = (state_24578[(7)]);
var inst_24560__$1 = (state_24578[(2)]);
var inst_24561 = (inst_24560__$1 == null);
var inst_24562 = cljs.core.not(inst_24561);
var state_24578__$1 = (function (){var statearr_24580 = state_24578;
(statearr_24580[(7)] = inst_24560__$1);

return statearr_24580;
})();
if(inst_24562){
var statearr_24581_25957 = state_24578__$1;
(statearr_24581_25957[(1)] = (8));

} else {
var statearr_24582_25958 = state_24578__$1;
(statearr_24582_25958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (1))){
var inst_24555 = (0);
var state_24578__$1 = (function (){var statearr_24583 = state_24578;
(statearr_24583[(8)] = inst_24555);

return statearr_24583;
})();
var statearr_24584_25959 = state_24578__$1;
(statearr_24584_25959[(2)] = null);

(statearr_24584_25959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (4))){
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24578__$1,(7),ch);
} else {
if((state_val_24579 === (6))){
var inst_24573 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24585_25960 = state_24578__$1;
(statearr_24585_25960[(2)] = inst_24573);

(statearr_24585_25960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (3))){
var inst_24575 = (state_24578[(2)]);
var inst_24576 = cljs.core.async.close_BANG_(out);
var state_24578__$1 = (function (){var statearr_24586 = state_24578;
(statearr_24586[(9)] = inst_24575);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24578__$1,inst_24576);
} else {
if((state_val_24579 === (2))){
var inst_24555 = (state_24578[(8)]);
var inst_24557 = (inst_24555 < n);
var state_24578__$1 = state_24578;
if(cljs.core.truth_(inst_24557)){
var statearr_24587_25961 = state_24578__$1;
(statearr_24587_25961[(1)] = (4));

} else {
var statearr_24588_25962 = state_24578__$1;
(statearr_24588_25962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (11))){
var inst_24555 = (state_24578[(8)]);
var inst_24565 = (state_24578[(2)]);
var inst_24566 = (inst_24555 + (1));
var inst_24555__$1 = inst_24566;
var state_24578__$1 = (function (){var statearr_24589 = state_24578;
(statearr_24589[(10)] = inst_24565);

(statearr_24589[(8)] = inst_24555__$1);

return statearr_24589;
})();
var statearr_24590_25975 = state_24578__$1;
(statearr_24590_25975[(2)] = null);

(statearr_24590_25975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (9))){
var state_24578__$1 = state_24578;
var statearr_24591_25976 = state_24578__$1;
(statearr_24591_25976[(2)] = null);

(statearr_24591_25976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (5))){
var state_24578__$1 = state_24578;
var statearr_24592_25977 = state_24578__$1;
(statearr_24592_25977[(2)] = null);

(statearr_24592_25977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (10))){
var inst_24570 = (state_24578[(2)]);
var state_24578__$1 = state_24578;
var statearr_24593_25978 = state_24578__$1;
(statearr_24593_25978[(2)] = inst_24570);

(statearr_24593_25978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24579 === (8))){
var inst_24560 = (state_24578[(7)]);
var state_24578__$1 = state_24578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24578__$1,(11),out,inst_24560);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24594[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24594[(1)] = (1));

return statearr_24594;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24578){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24578);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24595){var ex__23407__auto__ = e24595;
var statearr_24596_25979 = state_24578;
(statearr_24596_25979[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24578[(4)]))){
var statearr_24597_25980 = state_24578;
(statearr_24597_25980[(1)] = cljs.core.first((state_24578[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25981 = state_24578;
state_24578 = G__25981;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24598 = f__23475__auto__();
(statearr_24598[(6)] = c__23472__auto___25956);

return statearr_24598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24603 = (function (f,ch,meta24601,_,fn1,meta24604){
this.f = f;
this.ch = ch;
this.meta24601 = meta24601;
this._ = _;
this.fn1 = fn1;
this.meta24604 = meta24604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24605,meta24604__$1){
var self__ = this;
var _24605__$1 = this;
return (new cljs.core.async.t_cljs$core$async24603(self__.f,self__.ch,self__.meta24601,self__._,self__.fn1,meta24604__$1));
}));

(cljs.core.async.t_cljs$core$async24603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24605){
var self__ = this;
var _24605__$1 = this;
return self__.meta24604;
}));

(cljs.core.async.t_cljs$core$async24603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__24599_SHARP_){
var G__24606 = (((p1__24599_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24599_SHARP_) : self__.f.call(null,p1__24599_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24606) : f1.call(null,G__24606));
});
}));

(cljs.core.async.t_cljs$core$async24603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24601","meta24601",-1884752767,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24600","cljs.core.async/t_cljs$core$async24600",-2039989652,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24604","meta24604",1477753560,null)], null);
}));

(cljs.core.async.t_cljs$core$async24603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24603");

(cljs.core.async.t_cljs$core$async24603.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async24603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24603.
 */
cljs.core.async.__GT_t_cljs$core$async24603 = (function cljs$core$async$__GT_t_cljs$core$async24603(f,ch,meta24601,_,fn1,meta24604){
return (new cljs.core.async.t_cljs$core$async24603(f,ch,meta24601,_,fn1,meta24604));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24600 = (function (f,ch,meta24601){
this.f = f;
this.ch = ch;
this.meta24601 = meta24601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24602,meta24601__$1){
var self__ = this;
var _24602__$1 = this;
return (new cljs.core.async.t_cljs$core$async24600(self__.f,self__.ch,meta24601__$1));
}));

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24602){
var self__ = this;
var _24602__$1 = this;
return self__.meta24601;
}));

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async24603(self__.f,self__.ch,self__.meta24601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24607 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24607) : self__.f.call(null,G__24607));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24601","meta24601",-1884752767,null)], null);
}));

(cljs.core.async.t_cljs$core$async24600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24600");

(cljs.core.async.t_cljs$core$async24600.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async24600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24600.
 */
cljs.core.async.__GT_t_cljs$core$async24600 = (function cljs$core$async$__GT_t_cljs$core$async24600(f,ch,meta24601){
return (new cljs.core.async.t_cljs$core$async24600(f,ch,meta24601));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24608 = (function (f,ch,meta24609){
this.f = f;
this.ch = ch;
this.meta24609 = meta24609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24610,meta24609__$1){
var self__ = this;
var _24610__$1 = this;
return (new cljs.core.async.t_cljs$core$async24608(self__.f,self__.ch,meta24609__$1));
}));

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24610){
var self__ = this;
var _24610__$1 = this;
return self__.meta24609;
}));

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async24608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24609","meta24609",-573052890,null)], null);
}));

(cljs.core.async.t_cljs$core$async24608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24608");

(cljs.core.async.t_cljs$core$async24608.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async24608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24608.
 */
cljs.core.async.__GT_t_cljs$core$async24608 = (function cljs$core$async$__GT_t_cljs$core$async24608(f,ch,meta24609){
return (new cljs.core.async.t_cljs$core$async24608(f,ch,meta24609));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async24608(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24611 = (function (p,ch,meta24612){
this.p = p;
this.ch = ch;
this.meta24612 = meta24612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24613,meta24612__$1){
var self__ = this;
var _24613__$1 = this;
return (new cljs.core.async.t_cljs$core$async24611(self__.p,self__.ch,meta24612__$1));
}));

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24613){
var self__ = this;
var _24613__$1 = this;
return self__.meta24612;
}));

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24612","meta24612",2054623079,null)], null);
}));

(cljs.core.async.t_cljs$core$async24611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24611");

(cljs.core.async.t_cljs$core$async24611.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async24611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24611.
 */
cljs.core.async.__GT_t_cljs$core$async24611 = (function cljs$core$async$__GT_t_cljs$core$async24611(p,ch,meta24612){
return (new cljs.core.async.t_cljs$core$async24611(p,ch,meta24612));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async24611(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24615 = arguments.length;
switch (G__24615) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23472__auto___26012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24636){
var state_val_24637 = (state_24636[(1)]);
if((state_val_24637 === (7))){
var inst_24632 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24638_26013 = state_24636__$1;
(statearr_24638_26013[(2)] = inst_24632);

(statearr_24638_26013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (1))){
var state_24636__$1 = state_24636;
var statearr_24639_26014 = state_24636__$1;
(statearr_24639_26014[(2)] = null);

(statearr_24639_26014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (4))){
var inst_24618 = (state_24636[(7)]);
var inst_24618__$1 = (state_24636[(2)]);
var inst_24619 = (inst_24618__$1 == null);
var state_24636__$1 = (function (){var statearr_24640 = state_24636;
(statearr_24640[(7)] = inst_24618__$1);

return statearr_24640;
})();
if(cljs.core.truth_(inst_24619)){
var statearr_24641_26015 = state_24636__$1;
(statearr_24641_26015[(1)] = (5));

} else {
var statearr_24642_26016 = state_24636__$1;
(statearr_24642_26016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (6))){
var inst_24618 = (state_24636[(7)]);
var inst_24623 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24618) : p.call(null,inst_24618));
var state_24636__$1 = state_24636;
if(cljs.core.truth_(inst_24623)){
var statearr_24643_26018 = state_24636__$1;
(statearr_24643_26018[(1)] = (8));

} else {
var statearr_24644_26020 = state_24636__$1;
(statearr_24644_26020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (3))){
var inst_24634 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24636__$1,inst_24634);
} else {
if((state_val_24637 === (2))){
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24636__$1,(4),ch);
} else {
if((state_val_24637 === (11))){
var inst_24626 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24645_26022 = state_24636__$1;
(statearr_24645_26022[(2)] = inst_24626);

(statearr_24645_26022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (9))){
var state_24636__$1 = state_24636;
var statearr_24646_26023 = state_24636__$1;
(statearr_24646_26023[(2)] = null);

(statearr_24646_26023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (5))){
var inst_24621 = cljs.core.async.close_BANG_(out);
var state_24636__$1 = state_24636;
var statearr_24647_26024 = state_24636__$1;
(statearr_24647_26024[(2)] = inst_24621);

(statearr_24647_26024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (10))){
var inst_24629 = (state_24636[(2)]);
var state_24636__$1 = (function (){var statearr_24648 = state_24636;
(statearr_24648[(8)] = inst_24629);

return statearr_24648;
})();
var statearr_24649_26027 = state_24636__$1;
(statearr_24649_26027[(2)] = null);

(statearr_24649_26027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (8))){
var inst_24618 = (state_24636[(7)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24636__$1,(11),out,inst_24618);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24650 = [null,null,null,null,null,null,null,null,null];
(statearr_24650[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24650[(1)] = (1));

return statearr_24650;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24636){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24636);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24651){var ex__23407__auto__ = e24651;
var statearr_24652_26029 = state_24636;
(statearr_24652_26029[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24636[(4)]))){
var statearr_24653_26030 = state_24636;
(statearr_24653_26030[(1)] = cljs.core.first((state_24636[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26031 = state_24636;
state_24636 = G__26031;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24654 = f__23475__auto__();
(statearr_24654[(6)] = c__23472__auto___26012);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24656 = arguments.length;
switch (G__24656) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24718){
var state_val_24719 = (state_24718[(1)]);
if((state_val_24719 === (7))){
var inst_24714 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24720_26033 = state_24718__$1;
(statearr_24720_26033[(2)] = inst_24714);

(statearr_24720_26033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (20))){
var inst_24684 = (state_24718[(7)]);
var inst_24695 = (state_24718[(2)]);
var inst_24696 = cljs.core.next(inst_24684);
var inst_24670 = inst_24696;
var inst_24671 = null;
var inst_24672 = (0);
var inst_24673 = (0);
var state_24718__$1 = (function (){var statearr_24721 = state_24718;
(statearr_24721[(8)] = inst_24695);

(statearr_24721[(9)] = inst_24670);

(statearr_24721[(10)] = inst_24671);

(statearr_24721[(11)] = inst_24672);

(statearr_24721[(12)] = inst_24673);

return statearr_24721;
})();
var statearr_24722_26034 = state_24718__$1;
(statearr_24722_26034[(2)] = null);

(statearr_24722_26034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (1))){
var state_24718__$1 = state_24718;
var statearr_24723_26035 = state_24718__$1;
(statearr_24723_26035[(2)] = null);

(statearr_24723_26035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (4))){
var inst_24659 = (state_24718[(13)]);
var inst_24659__$1 = (state_24718[(2)]);
var inst_24660 = (inst_24659__$1 == null);
var state_24718__$1 = (function (){var statearr_24724 = state_24718;
(statearr_24724[(13)] = inst_24659__$1);

return statearr_24724;
})();
if(cljs.core.truth_(inst_24660)){
var statearr_24725_26036 = state_24718__$1;
(statearr_24725_26036[(1)] = (5));

} else {
var statearr_24726_26037 = state_24718__$1;
(statearr_24726_26037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (15))){
var state_24718__$1 = state_24718;
var statearr_24730_26038 = state_24718__$1;
(statearr_24730_26038[(2)] = null);

(statearr_24730_26038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (21))){
var state_24718__$1 = state_24718;
var statearr_24731_26039 = state_24718__$1;
(statearr_24731_26039[(2)] = null);

(statearr_24731_26039[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (13))){
var inst_24673 = (state_24718[(12)]);
var inst_24670 = (state_24718[(9)]);
var inst_24671 = (state_24718[(10)]);
var inst_24672 = (state_24718[(11)]);
var inst_24680 = (state_24718[(2)]);
var inst_24681 = (inst_24673 + (1));
var tmp24727 = inst_24672;
var tmp24728 = inst_24671;
var tmp24729 = inst_24670;
var inst_24670__$1 = tmp24729;
var inst_24671__$1 = tmp24728;
var inst_24672__$1 = tmp24727;
var inst_24673__$1 = inst_24681;
var state_24718__$1 = (function (){var statearr_24732 = state_24718;
(statearr_24732[(14)] = inst_24680);

(statearr_24732[(9)] = inst_24670__$1);

(statearr_24732[(10)] = inst_24671__$1);

(statearr_24732[(11)] = inst_24672__$1);

(statearr_24732[(12)] = inst_24673__$1);

return statearr_24732;
})();
var statearr_24733_26040 = state_24718__$1;
(statearr_24733_26040[(2)] = null);

(statearr_24733_26040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (22))){
var state_24718__$1 = state_24718;
var statearr_24734_26041 = state_24718__$1;
(statearr_24734_26041[(2)] = null);

(statearr_24734_26041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (6))){
var inst_24659 = (state_24718[(13)]);
var inst_24668 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24659) : f.call(null,inst_24659));
var inst_24669 = cljs.core.seq(inst_24668);
var inst_24670 = inst_24669;
var inst_24671 = null;
var inst_24672 = (0);
var inst_24673 = (0);
var state_24718__$1 = (function (){var statearr_24735 = state_24718;
(statearr_24735[(9)] = inst_24670);

(statearr_24735[(10)] = inst_24671);

(statearr_24735[(11)] = inst_24672);

(statearr_24735[(12)] = inst_24673);

return statearr_24735;
})();
var statearr_24736_26042 = state_24718__$1;
(statearr_24736_26042[(2)] = null);

(statearr_24736_26042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (17))){
var inst_24684 = (state_24718[(7)]);
var inst_24688 = cljs.core.chunk_first(inst_24684);
var inst_24689 = cljs.core.chunk_rest(inst_24684);
var inst_24690 = cljs.core.count(inst_24688);
var inst_24670 = inst_24689;
var inst_24671 = inst_24688;
var inst_24672 = inst_24690;
var inst_24673 = (0);
var state_24718__$1 = (function (){var statearr_24737 = state_24718;
(statearr_24737[(9)] = inst_24670);

(statearr_24737[(10)] = inst_24671);

(statearr_24737[(11)] = inst_24672);

(statearr_24737[(12)] = inst_24673);

return statearr_24737;
})();
var statearr_24738_26043 = state_24718__$1;
(statearr_24738_26043[(2)] = null);

(statearr_24738_26043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (3))){
var inst_24716 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24718__$1,inst_24716);
} else {
if((state_val_24719 === (12))){
var inst_24704 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24739_26044 = state_24718__$1;
(statearr_24739_26044[(2)] = inst_24704);

(statearr_24739_26044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (2))){
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24718__$1,(4),in$);
} else {
if((state_val_24719 === (23))){
var inst_24712 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24740_26045 = state_24718__$1;
(statearr_24740_26045[(2)] = inst_24712);

(statearr_24740_26045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (19))){
var inst_24699 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24741_26046 = state_24718__$1;
(statearr_24741_26046[(2)] = inst_24699);

(statearr_24741_26046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (11))){
var inst_24670 = (state_24718[(9)]);
var inst_24684 = (state_24718[(7)]);
var inst_24684__$1 = cljs.core.seq(inst_24670);
var state_24718__$1 = (function (){var statearr_24742 = state_24718;
(statearr_24742[(7)] = inst_24684__$1);

return statearr_24742;
})();
if(inst_24684__$1){
var statearr_24743_26047 = state_24718__$1;
(statearr_24743_26047[(1)] = (14));

} else {
var statearr_24744_26048 = state_24718__$1;
(statearr_24744_26048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (9))){
var inst_24706 = (state_24718[(2)]);
var inst_24707 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24718__$1 = (function (){var statearr_24745 = state_24718;
(statearr_24745[(15)] = inst_24706);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24707)){
var statearr_24746_26049 = state_24718__$1;
(statearr_24746_26049[(1)] = (21));

} else {
var statearr_24747_26050 = state_24718__$1;
(statearr_24747_26050[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (5))){
var inst_24662 = cljs.core.async.close_BANG_(out);
var state_24718__$1 = state_24718;
var statearr_24748_26051 = state_24718__$1;
(statearr_24748_26051[(2)] = inst_24662);

(statearr_24748_26051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (14))){
var inst_24684 = (state_24718[(7)]);
var inst_24686 = cljs.core.chunked_seq_QMARK_(inst_24684);
var state_24718__$1 = state_24718;
if(inst_24686){
var statearr_24749_26052 = state_24718__$1;
(statearr_24749_26052[(1)] = (17));

} else {
var statearr_24750_26053 = state_24718__$1;
(statearr_24750_26053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (16))){
var inst_24702 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24751_26054 = state_24718__$1;
(statearr_24751_26054[(2)] = inst_24702);

(statearr_24751_26054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (10))){
var inst_24671 = (state_24718[(10)]);
var inst_24673 = (state_24718[(12)]);
var inst_24678 = cljs.core._nth(inst_24671,inst_24673);
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24718__$1,(13),out,inst_24678);
} else {
if((state_val_24719 === (18))){
var inst_24684 = (state_24718[(7)]);
var inst_24693 = cljs.core.first(inst_24684);
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24718__$1,(20),out,inst_24693);
} else {
if((state_val_24719 === (8))){
var inst_24673 = (state_24718[(12)]);
var inst_24672 = (state_24718[(11)]);
var inst_24675 = (inst_24673 < inst_24672);
var inst_24676 = inst_24675;
var state_24718__$1 = state_24718;
if(cljs.core.truth_(inst_24676)){
var statearr_24752_26055 = state_24718__$1;
(statearr_24752_26055[(1)] = (10));

} else {
var statearr_24753_26056 = state_24718__$1;
(statearr_24753_26056[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23404__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23404__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23404__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23404__auto____1 = (function (state_24718){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24718);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24755){var ex__23407__auto__ = e24755;
var statearr_24756_26057 = state_24718;
(statearr_24756_26057[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24718[(4)]))){
var statearr_24757_26058 = state_24718;
(statearr_24757_26058[(1)] = cljs.core.first((state_24718[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26059 = state_24718;
state_24718 = G__26059;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23404__auto__ = function(state_24718){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23404__auto____1.call(this,state_24718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23404__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23404__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24758 = f__23475__auto__();
(statearr_24758[(6)] = c__23472__auto__);

return statearr_24758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));

return c__23472__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24760 = arguments.length;
switch (G__24760) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24762 = arguments.length;
switch (G__24762) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24764 = arguments.length;
switch (G__24764) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23472__auto___26063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24783 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_26064 = state_24788__$1;
(statearr_24790_26064[(2)] = inst_24783);

(statearr_24790_26064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (1))){
var inst_24765 = null;
var state_24788__$1 = (function (){var statearr_24791 = state_24788;
(statearr_24791[(7)] = inst_24765);

return statearr_24791;
})();
var statearr_24792_26065 = state_24788__$1;
(statearr_24792_26065[(2)] = null);

(statearr_24792_26065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (4))){
var inst_24768 = (state_24788[(8)]);
var inst_24768__$1 = (state_24788[(2)]);
var inst_24769 = (inst_24768__$1 == null);
var inst_24770 = cljs.core.not(inst_24769);
var state_24788__$1 = (function (){var statearr_24793 = state_24788;
(statearr_24793[(8)] = inst_24768__$1);

return statearr_24793;
})();
if(inst_24770){
var statearr_24794_26066 = state_24788__$1;
(statearr_24794_26066[(1)] = (5));

} else {
var statearr_24795_26067 = state_24788__$1;
(statearr_24795_26067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (6))){
var state_24788__$1 = state_24788;
var statearr_24796_26068 = state_24788__$1;
(statearr_24796_26068[(2)] = null);

(statearr_24796_26068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (3))){
var inst_24785 = (state_24788[(2)]);
var inst_24786 = cljs.core.async.close_BANG_(out);
var state_24788__$1 = (function (){var statearr_24797 = state_24788;
(statearr_24797[(9)] = inst_24785);

return statearr_24797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24788__$1,(4),ch);
} else {
if((state_val_24789 === (11))){
var inst_24768 = (state_24788[(8)]);
var inst_24777 = (state_24788[(2)]);
var inst_24765 = inst_24768;
var state_24788__$1 = (function (){var statearr_24798 = state_24788;
(statearr_24798[(10)] = inst_24777);

(statearr_24798[(7)] = inst_24765);

return statearr_24798;
})();
var statearr_24799_26069 = state_24788__$1;
(statearr_24799_26069[(2)] = null);

(statearr_24799_26069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (9))){
var inst_24768 = (state_24788[(8)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24788__$1,(11),out,inst_24768);
} else {
if((state_val_24789 === (5))){
var inst_24768 = (state_24788[(8)]);
var inst_24765 = (state_24788[(7)]);
var inst_24772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24768,inst_24765);
var state_24788__$1 = state_24788;
if(inst_24772){
var statearr_24801_26070 = state_24788__$1;
(statearr_24801_26070[(1)] = (8));

} else {
var statearr_24802_26071 = state_24788__$1;
(statearr_24802_26071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (10))){
var inst_24780 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24803_26072 = state_24788__$1;
(statearr_24803_26072[(2)] = inst_24780);

(statearr_24803_26072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24789 === (8))){
var inst_24765 = (state_24788[(7)]);
var tmp24800 = inst_24765;
var inst_24765__$1 = tmp24800;
var state_24788__$1 = (function (){var statearr_24804 = state_24788;
(statearr_24804[(7)] = inst_24765__$1);

return statearr_24804;
})();
var statearr_24805_26073 = state_24788__$1;
(statearr_24805_26073[(2)] = null);

(statearr_24805_26073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24806[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24806[(1)] = (1));

return statearr_24806;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24788){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24788);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24807){var ex__23407__auto__ = e24807;
var statearr_24808_26074 = state_24788;
(statearr_24808_26074[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24788[(4)]))){
var statearr_24809_26075 = state_24788;
(statearr_24809_26075[(1)] = cljs.core.first((state_24788[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26076 = state_24788;
state_24788 = G__26076;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24810 = f__23475__auto__();
(statearr_24810[(6)] = c__23472__auto___26063);

return statearr_24810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24812 = arguments.length;
switch (G__24812) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23472__auto___26078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24850){
var state_val_24851 = (state_24850[(1)]);
if((state_val_24851 === (7))){
var inst_24846 = (state_24850[(2)]);
var state_24850__$1 = state_24850;
var statearr_24852_26079 = state_24850__$1;
(statearr_24852_26079[(2)] = inst_24846);

(statearr_24852_26079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (1))){
var inst_24813 = (new Array(n));
var inst_24814 = inst_24813;
var inst_24815 = (0);
var state_24850__$1 = (function (){var statearr_24853 = state_24850;
(statearr_24853[(7)] = inst_24814);

(statearr_24853[(8)] = inst_24815);

return statearr_24853;
})();
var statearr_24854_26080 = state_24850__$1;
(statearr_24854_26080[(2)] = null);

(statearr_24854_26080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (4))){
var inst_24818 = (state_24850[(9)]);
var inst_24818__$1 = (state_24850[(2)]);
var inst_24819 = (inst_24818__$1 == null);
var inst_24820 = cljs.core.not(inst_24819);
var state_24850__$1 = (function (){var statearr_24855 = state_24850;
(statearr_24855[(9)] = inst_24818__$1);

return statearr_24855;
})();
if(inst_24820){
var statearr_24856_26081 = state_24850__$1;
(statearr_24856_26081[(1)] = (5));

} else {
var statearr_24857_26082 = state_24850__$1;
(statearr_24857_26082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (15))){
var inst_24840 = (state_24850[(2)]);
var state_24850__$1 = state_24850;
var statearr_24858_26083 = state_24850__$1;
(statearr_24858_26083[(2)] = inst_24840);

(statearr_24858_26083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (13))){
var state_24850__$1 = state_24850;
var statearr_24859_26084 = state_24850__$1;
(statearr_24859_26084[(2)] = null);

(statearr_24859_26084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (6))){
var inst_24815 = (state_24850[(8)]);
var inst_24836 = (inst_24815 > (0));
var state_24850__$1 = state_24850;
if(cljs.core.truth_(inst_24836)){
var statearr_24860_26085 = state_24850__$1;
(statearr_24860_26085[(1)] = (12));

} else {
var statearr_24861_26086 = state_24850__$1;
(statearr_24861_26086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (3))){
var inst_24848 = (state_24850[(2)]);
var state_24850__$1 = state_24850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24850__$1,inst_24848);
} else {
if((state_val_24851 === (12))){
var inst_24814 = (state_24850[(7)]);
var inst_24838 = cljs.core.vec(inst_24814);
var state_24850__$1 = state_24850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24850__$1,(15),out,inst_24838);
} else {
if((state_val_24851 === (2))){
var state_24850__$1 = state_24850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24850__$1,(4),ch);
} else {
if((state_val_24851 === (11))){
var inst_24830 = (state_24850[(2)]);
var inst_24831 = (new Array(n));
var inst_24814 = inst_24831;
var inst_24815 = (0);
var state_24850__$1 = (function (){var statearr_24862 = state_24850;
(statearr_24862[(10)] = inst_24830);

(statearr_24862[(7)] = inst_24814);

(statearr_24862[(8)] = inst_24815);

return statearr_24862;
})();
var statearr_24863_26087 = state_24850__$1;
(statearr_24863_26087[(2)] = null);

(statearr_24863_26087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (9))){
var inst_24814 = (state_24850[(7)]);
var inst_24828 = cljs.core.vec(inst_24814);
var state_24850__$1 = state_24850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24850__$1,(11),out,inst_24828);
} else {
if((state_val_24851 === (5))){
var inst_24814 = (state_24850[(7)]);
var inst_24815 = (state_24850[(8)]);
var inst_24818 = (state_24850[(9)]);
var inst_24823 = (state_24850[(11)]);
var inst_24822 = (inst_24814[inst_24815] = inst_24818);
var inst_24823__$1 = (inst_24815 + (1));
var inst_24824 = (inst_24823__$1 < n);
var state_24850__$1 = (function (){var statearr_24864 = state_24850;
(statearr_24864[(12)] = inst_24822);

(statearr_24864[(11)] = inst_24823__$1);

return statearr_24864;
})();
if(cljs.core.truth_(inst_24824)){
var statearr_24865_26088 = state_24850__$1;
(statearr_24865_26088[(1)] = (8));

} else {
var statearr_24866_26089 = state_24850__$1;
(statearr_24866_26089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (14))){
var inst_24843 = (state_24850[(2)]);
var inst_24844 = cljs.core.async.close_BANG_(out);
var state_24850__$1 = (function (){var statearr_24868 = state_24850;
(statearr_24868[(13)] = inst_24843);

return statearr_24868;
})();
var statearr_24869_26090 = state_24850__$1;
(statearr_24869_26090[(2)] = inst_24844);

(statearr_24869_26090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (10))){
var inst_24834 = (state_24850[(2)]);
var state_24850__$1 = state_24850;
var statearr_24870_26091 = state_24850__$1;
(statearr_24870_26091[(2)] = inst_24834);

(statearr_24870_26091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24851 === (8))){
var inst_24814 = (state_24850[(7)]);
var inst_24823 = (state_24850[(11)]);
var tmp24867 = inst_24814;
var inst_24814__$1 = tmp24867;
var inst_24815 = inst_24823;
var state_24850__$1 = (function (){var statearr_24871 = state_24850;
(statearr_24871[(7)] = inst_24814__$1);

(statearr_24871[(8)] = inst_24815);

return statearr_24871;
})();
var statearr_24872_26092 = state_24850__$1;
(statearr_24872_26092[(2)] = null);

(statearr_24872_26092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24873[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24873[(1)] = (1));

return statearr_24873;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24850){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24850);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24874){var ex__23407__auto__ = e24874;
var statearr_24875_26093 = state_24850;
(statearr_24875_26093[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24850[(4)]))){
var statearr_24876_26094 = state_24850;
(statearr_24876_26094[(1)] = cljs.core.first((state_24850[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26095 = state_24850;
state_24850 = G__26095;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24877 = f__23475__auto__();
(statearr_24877[(6)] = c__23472__auto___26078);

return statearr_24877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24879 = arguments.length;
switch (G__24879) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__23472__auto___26097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23475__auto__ = (function (){var switch__23403__auto__ = (function (state_24924){
var state_val_24925 = (state_24924[(1)]);
if((state_val_24925 === (7))){
var inst_24920 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
var statearr_24926_26098 = state_24924__$1;
(statearr_24926_26098[(2)] = inst_24920);

(statearr_24926_26098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (1))){
var inst_24880 = [];
var inst_24881 = inst_24880;
var inst_24882 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24924__$1 = (function (){var statearr_24927 = state_24924;
(statearr_24927[(7)] = inst_24881);

(statearr_24927[(8)] = inst_24882);

return statearr_24927;
})();
var statearr_24928_26099 = state_24924__$1;
(statearr_24928_26099[(2)] = null);

(statearr_24928_26099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (4))){
var inst_24885 = (state_24924[(9)]);
var inst_24885__$1 = (state_24924[(2)]);
var inst_24886 = (inst_24885__$1 == null);
var inst_24887 = cljs.core.not(inst_24886);
var state_24924__$1 = (function (){var statearr_24929 = state_24924;
(statearr_24929[(9)] = inst_24885__$1);

return statearr_24929;
})();
if(inst_24887){
var statearr_24930_26100 = state_24924__$1;
(statearr_24930_26100[(1)] = (5));

} else {
var statearr_24931_26101 = state_24924__$1;
(statearr_24931_26101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (15))){
var inst_24881 = (state_24924[(7)]);
var inst_24912 = cljs.core.vec(inst_24881);
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24924__$1,(18),out,inst_24912);
} else {
if((state_val_24925 === (13))){
var inst_24907 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
var statearr_24932_26102 = state_24924__$1;
(statearr_24932_26102[(2)] = inst_24907);

(statearr_24932_26102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (6))){
var inst_24881 = (state_24924[(7)]);
var inst_24909 = inst_24881.length;
var inst_24910 = (inst_24909 > (0));
var state_24924__$1 = state_24924;
if(cljs.core.truth_(inst_24910)){
var statearr_24933_26103 = state_24924__$1;
(statearr_24933_26103[(1)] = (15));

} else {
var statearr_24934_26104 = state_24924__$1;
(statearr_24934_26104[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (17))){
var inst_24917 = (state_24924[(2)]);
var inst_24918 = cljs.core.async.close_BANG_(out);
var state_24924__$1 = (function (){var statearr_24935 = state_24924;
(statearr_24935[(10)] = inst_24917);

return statearr_24935;
})();
var statearr_24936_26105 = state_24924__$1;
(statearr_24936_26105[(2)] = inst_24918);

(statearr_24936_26105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (3))){
var inst_24922 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24924__$1,inst_24922);
} else {
if((state_val_24925 === (12))){
var inst_24881 = (state_24924[(7)]);
var inst_24900 = cljs.core.vec(inst_24881);
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24924__$1,(14),out,inst_24900);
} else {
if((state_val_24925 === (2))){
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24924__$1,(4),ch);
} else {
if((state_val_24925 === (11))){
var inst_24881 = (state_24924[(7)]);
var inst_24885 = (state_24924[(9)]);
var inst_24889 = (state_24924[(11)]);
var inst_24897 = inst_24881.push(inst_24885);
var tmp24937 = inst_24881;
var inst_24881__$1 = tmp24937;
var inst_24882 = inst_24889;
var state_24924__$1 = (function (){var statearr_24938 = state_24924;
(statearr_24938[(12)] = inst_24897);

(statearr_24938[(7)] = inst_24881__$1);

(statearr_24938[(8)] = inst_24882);

return statearr_24938;
})();
var statearr_24939_26106 = state_24924__$1;
(statearr_24939_26106[(2)] = null);

(statearr_24939_26106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (9))){
var inst_24882 = (state_24924[(8)]);
var inst_24893 = cljs.core.keyword_identical_QMARK_(inst_24882,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_24924__$1 = state_24924;
var statearr_24940_26107 = state_24924__$1;
(statearr_24940_26107[(2)] = inst_24893);

(statearr_24940_26107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (5))){
var inst_24885 = (state_24924[(9)]);
var inst_24889 = (state_24924[(11)]);
var inst_24882 = (state_24924[(8)]);
var inst_24890 = (state_24924[(13)]);
var inst_24889__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24885) : f.call(null,inst_24885));
var inst_24890__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24889__$1,inst_24882);
var state_24924__$1 = (function (){var statearr_24941 = state_24924;
(statearr_24941[(11)] = inst_24889__$1);

(statearr_24941[(13)] = inst_24890__$1);

return statearr_24941;
})();
if(inst_24890__$1){
var statearr_24942_26108 = state_24924__$1;
(statearr_24942_26108[(1)] = (8));

} else {
var statearr_24943_26109 = state_24924__$1;
(statearr_24943_26109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (14))){
var inst_24885 = (state_24924[(9)]);
var inst_24889 = (state_24924[(11)]);
var inst_24902 = (state_24924[(2)]);
var inst_24903 = [];
var inst_24904 = inst_24903.push(inst_24885);
var inst_24881 = inst_24903;
var inst_24882 = inst_24889;
var state_24924__$1 = (function (){var statearr_24944 = state_24924;
(statearr_24944[(14)] = inst_24902);

(statearr_24944[(15)] = inst_24904);

(statearr_24944[(7)] = inst_24881);

(statearr_24944[(8)] = inst_24882);

return statearr_24944;
})();
var statearr_24945_26110 = state_24924__$1;
(statearr_24945_26110[(2)] = null);

(statearr_24945_26110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (16))){
var state_24924__$1 = state_24924;
var statearr_24946_26111 = state_24924__$1;
(statearr_24946_26111[(2)] = null);

(statearr_24946_26111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (10))){
var inst_24895 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
if(cljs.core.truth_(inst_24895)){
var statearr_24947_26112 = state_24924__$1;
(statearr_24947_26112[(1)] = (11));

} else {
var statearr_24948_26113 = state_24924__$1;
(statearr_24948_26113[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (18))){
var inst_24914 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
var statearr_24949_26114 = state_24924__$1;
(statearr_24949_26114[(2)] = inst_24914);

(statearr_24949_26114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24925 === (8))){
var inst_24890 = (state_24924[(13)]);
var state_24924__$1 = state_24924;
var statearr_24950_26115 = state_24924__$1;
(statearr_24950_26115[(2)] = inst_24890);

(statearr_24950_26115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__23404__auto__ = null;
var cljs$core$async$state_machine__23404__auto____0 = (function (){
var statearr_24951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24951[(0)] = cljs$core$async$state_machine__23404__auto__);

(statearr_24951[(1)] = (1));

return statearr_24951;
});
var cljs$core$async$state_machine__23404__auto____1 = (function (state_24924){
while(true){
var ret_value__23405__auto__ = (function (){try{while(true){
var result__23406__auto__ = switch__23403__auto__(state_24924);
if(cljs.core.keyword_identical_QMARK_(result__23406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23406__auto__;
}
break;
}
}catch (e24952){var ex__23407__auto__ = e24952;
var statearr_24953_26116 = state_24924;
(statearr_24953_26116[(2)] = ex__23407__auto__);


if(cljs.core.seq((state_24924[(4)]))){
var statearr_24954_26117 = state_24924;
(statearr_24954_26117[(1)] = cljs.core.first((state_24924[(4)])));

} else {
throw ex__23407__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26118 = state_24924;
state_24924 = G__26118;
continue;
} else {
return ret_value__23405__auto__;
}
break;
}
});
cljs$core$async$state_machine__23404__auto__ = function(state_24924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23404__auto____1.call(this,state_24924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23404__auto____0;
cljs$core$async$state_machine__23404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23404__auto____1;
return cljs$core$async$state_machine__23404__auto__;
})()
})();
var state__23476__auto__ = (function (){var statearr_24955 = f__23475__auto__();
(statearr_24955[(6)] = c__23472__auto___26097);

return statearr_24955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23476__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
