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
cljs.core.async.t_cljs$core$async32664 = (function (f,blockable,meta32665){
this.f = f;
this.blockable = blockable;
this.meta32665 = meta32665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32666,meta32665__$1){
var self__ = this;
var _32666__$1 = this;
return (new cljs.core.async.t_cljs$core$async32664(self__.f,self__.blockable,meta32665__$1));
}));

(cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32666){
var self__ = this;
var _32666__$1 = this;
return self__.meta32665;
}));

(cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32665","meta32665",-1590416829,null)], null);
}));

(cljs.core.async.t_cljs$core$async32664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32664");

(cljs.core.async.t_cljs$core$async32664.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32664.
 */
cljs.core.async.__GT_t_cljs$core$async32664 = (function cljs$core$async$__GT_t_cljs$core$async32664(f,blockable,meta32665){
return (new cljs.core.async.t_cljs$core$async32664(f,blockable,meta32665));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32663 = arguments.length;
switch (G__32663) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async32664(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32669 = arguments.length;
switch (G__32669) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
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
var G__32672 = arguments.length;
switch (G__32672) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__32676 = arguments.length;
switch (G__32676) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34194 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34194) : fn1.call(null,val_34194));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34194) : fn1.call(null,val_34194));
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
var G__32679 = arguments.length;
switch (G__32679) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var n__5762__auto___34196 = n;
var x_34197 = (0);
while(true){
if((x_34197 < n__5762__auto___34196)){
(a[x_34197] = x_34197);

var G__34198 = (x_34197 + (1));
x_34197 = G__34198;
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
cljs.core.async.t_cljs$core$async32681 = (function (flag,meta32682){
this.flag = flag;
this.meta32682 = meta32682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32683,meta32682__$1){
var self__ = this;
var _32683__$1 = this;
return (new cljs.core.async.t_cljs$core$async32681(self__.flag,meta32682__$1));
}));

(cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32683){
var self__ = this;
var _32683__$1 = this;
return self__.meta32682;
}));

(cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32682","meta32682",-1232106664,null)], null);
}));

(cljs.core.async.t_cljs$core$async32681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32681");

(cljs.core.async.t_cljs$core$async32681.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32681.
 */
cljs.core.async.__GT_t_cljs$core$async32681 = (function cljs$core$async$__GT_t_cljs$core$async32681(flag,meta32682){
return (new cljs.core.async.t_cljs$core$async32681(flag,meta32682));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32681(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32685 = (function (flag,cb,meta32686){
this.flag = flag;
this.cb = cb;
this.meta32686 = meta32686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32687,meta32686__$1){
var self__ = this;
var _32687__$1 = this;
return (new cljs.core.async.t_cljs$core$async32685(self__.flag,self__.cb,meta32686__$1));
}));

(cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32687){
var self__ = this;
var _32687__$1 = this;
return self__.meta32686;
}));

(cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32686","meta32686",-901104203,null)], null);
}));

(cljs.core.async.t_cljs$core$async32685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32685");

(cljs.core.async.t_cljs$core$async32685.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async32685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32685.
 */
cljs.core.async.__GT_t_cljs$core$async32685 = (function cljs$core$async$__GT_t_cljs$core$async32685(flag,cb,meta32686){
return (new cljs.core.async.t_cljs$core$async32685(flag,cb,meta32686));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32685(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34199)){
if((!(((port_34199.cljs$core$IFn$_invoke$arity$1 ? port_34199.cljs$core$IFn$_invoke$arity$1((1)) : port_34199.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__34200 = (i + (1));
i = G__34200;
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
return (function (p1__32688_SHARP_){
var G__32690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32688_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32690) : fret.call(null,G__32690));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32689_SHARP_){
var G__32691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32689_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32691) : fret.call(null,G__32691));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34201 = (i + (1));
i = G__34201;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
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
var args__5903__auto__ = [];
var len__5897__auto___34202 = arguments.length;
var i__5898__auto___34203 = (0);
while(true){
if((i__5898__auto___34203 < len__5897__auto___34202)){
args__5903__auto__.push((arguments[i__5898__auto___34203]));

var G__34204 = (i__5898__auto___34203 + (1));
i__5898__auto___34203 = G__34204;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32694){
var map__32695 = p__32694;
var map__32695__$1 = cljs.core.__destructure_map(map__32695);
var opts = map__32695__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32692){
var G__32693 = cljs.core.first(seq32692);
var seq32692__$1 = cljs.core.next(seq32692);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32693,seq32692__$1);
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
var G__32697 = arguments.length;
switch (G__32697) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32605__auto___34206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_32721){
var state_val_32722 = (state_32721[(1)]);
if((state_val_32722 === (7))){
var inst_32717 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32723_34207 = state_32721__$1;
(statearr_32723_34207[(2)] = inst_32717);

(statearr_32723_34207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (1))){
var state_32721__$1 = state_32721;
var statearr_32724_34208 = state_32721__$1;
(statearr_32724_34208[(2)] = null);

(statearr_32724_34208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (4))){
var inst_32700 = (state_32721[(7)]);
var inst_32700__$1 = (state_32721[(2)]);
var inst_32701 = (inst_32700__$1 == null);
var state_32721__$1 = (function (){var statearr_32725 = state_32721;
(statearr_32725[(7)] = inst_32700__$1);

return statearr_32725;
})();
if(cljs.core.truth_(inst_32701)){
var statearr_32726_34209 = state_32721__$1;
(statearr_32726_34209[(1)] = (5));

} else {
var statearr_32727_34210 = state_32721__$1;
(statearr_32727_34210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (13))){
var state_32721__$1 = state_32721;
var statearr_32728_34211 = state_32721__$1;
(statearr_32728_34211[(2)] = null);

(statearr_32728_34211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (6))){
var inst_32700 = (state_32721[(7)]);
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32721__$1,(11),to,inst_32700);
} else {
if((state_val_32722 === (3))){
var inst_32719 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32721__$1,inst_32719);
} else {
if((state_val_32722 === (12))){
var state_32721__$1 = state_32721;
var statearr_32729_34212 = state_32721__$1;
(statearr_32729_34212[(2)] = null);

(statearr_32729_34212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (2))){
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32721__$1,(4),from);
} else {
if((state_val_32722 === (11))){
var inst_32710 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
if(cljs.core.truth_(inst_32710)){
var statearr_32730_34213 = state_32721__$1;
(statearr_32730_34213[(1)] = (12));

} else {
var statearr_32731_34214 = state_32721__$1;
(statearr_32731_34214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (9))){
var state_32721__$1 = state_32721;
var statearr_32732_34215 = state_32721__$1;
(statearr_32732_34215[(2)] = null);

(statearr_32732_34215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (5))){
var state_32721__$1 = state_32721;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32733_34216 = state_32721__$1;
(statearr_32733_34216[(1)] = (8));

} else {
var statearr_32734_34217 = state_32721__$1;
(statearr_32734_34217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (14))){
var inst_32715 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32735_34218 = state_32721__$1;
(statearr_32735_34218[(2)] = inst_32715);

(statearr_32735_34218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (10))){
var inst_32707 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32736_34219 = state_32721__$1;
(statearr_32736_34219[(2)] = inst_32707);

(statearr_32736_34219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (8))){
var inst_32704 = cljs.core.async.close_BANG_(to);
var state_32721__$1 = state_32721;
var statearr_32737_34220 = state_32721__$1;
(statearr_32737_34220[(2)] = inst_32704);

(statearr_32737_34220[(1)] = (10));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_32738 = [null,null,null,null,null,null,null,null];
(statearr_32738[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_32738[(1)] = (1));

return statearr_32738;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_32721){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32721);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e32739){var ex__32538__auto__ = e32739;
var statearr_32740_34221 = state_32721;
(statearr_32740_34221[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32721[(4)]))){
var statearr_32741_34222 = state_32721;
(statearr_32741_34222[(1)] = cljs.core.first((state_32721[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34223 = state_32721;
state_32721 = G__34223;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_32721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_32721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_32742 = f__32606__auto__();
(statearr_32742[(6)] = c__32605__auto___34206);

return statearr_32742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
var process__$1 = (function (p__32743){
var vec__32744 = p__32743;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32744,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32744,(1),null);
var job = vec__32744;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32605__auto___34224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_32751){
var state_val_32752 = (state_32751[(1)]);
if((state_val_32752 === (1))){
var state_32751__$1 = state_32751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32751__$1,(2),res,v);
} else {
if((state_val_32752 === (2))){
var inst_32748 = (state_32751[(2)]);
var inst_32749 = cljs.core.async.close_BANG_(res);
var state_32751__$1 = (function (){var statearr_32753 = state_32751;
(statearr_32753[(7)] = inst_32748);

return statearr_32753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32751__$1,inst_32749);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0 = (function (){
var statearr_32754 = [null,null,null,null,null,null,null,null];
(statearr_32754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__);

(statearr_32754[(1)] = (1));

return statearr_32754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1 = (function (state_32751){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32751);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e32755){var ex__32538__auto__ = e32755;
var statearr_32756_34225 = state_32751;
(statearr_32756_34225[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32751[(4)]))){
var statearr_32757_34226 = state_32751;
(statearr_32757_34226[(1)] = cljs.core.first((state_32751[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34227 = state_32751;
state_32751 = G__34227;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = function(state_32751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1.call(this,state_32751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_32758 = f__32606__auto__();
(statearr_32758[(6)] = c__32605__auto___34224);

return statearr_32758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32759){
var vec__32760 = p__32759;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32760,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32760,(1),null);
var job = vec__32760;
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
var n__5762__auto___34228 = n;
var __34229 = (0);
while(true){
if((__34229 < n__5762__auto___34228)){
var G__32763_34230 = type;
var G__32763_34231__$1 = (((G__32763_34230 instanceof cljs.core.Keyword))?G__32763_34230.fqn:null);
switch (G__32763_34231__$1) {
case "compute":
var c__32605__auto___34233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34229,c__32605__auto___34233,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async){
return (function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = ((function (__34229,c__32605__auto___34233,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async){
return (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32778_34234 = state_32776__$1;
(statearr_32778_34234[(2)] = null);

(statearr_32778_34234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32776__$1,(4),jobs);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (4))){
var inst_32766 = (state_32776[(2)]);
var inst_32767 = process__$1(inst_32766);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32767)){
var statearr_32779_34235 = state_32776__$1;
(statearr_32779_34235[(1)] = (5));

} else {
var statearr_32780_34236 = state_32776__$1;
(statearr_32780_34236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var state_32776__$1 = state_32776;
var statearr_32781_34237 = state_32776__$1;
(statearr_32781_34237[(2)] = null);

(statearr_32781_34237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var state_32776__$1 = state_32776;
var statearr_32782_34238 = state_32776__$1;
(statearr_32782_34238[(2)] = null);

(statearr_32782_34238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (7))){
var inst_32772 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
var statearr_32783_34239 = state_32776__$1;
(statearr_32783_34239[(2)] = inst_32772);

(statearr_32783_34239[(1)] = (3));


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
});})(__34229,c__32605__auto___34233,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async))
;
return ((function (__34229,switch__32534__auto__,c__32605__auto___34233,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0 = (function (){
var statearr_32786 = [null,null,null,null,null,null,null];
(statearr_32786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__);

(statearr_32786[(1)] = (1));

return statearr_32786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1 = (function (state_32776){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32776);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e32787){var ex__32538__auto__ = e32787;
var statearr_32788_34240 = state_32776;
(statearr_32788_34240[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32776[(4)]))){
var statearr_32789_34241 = state_32776;
(statearr_32789_34241[(1)] = cljs.core.first((state_32776[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_32776;
state_32776 = G__34242;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__;
})()
;})(__34229,switch__32534__auto__,c__32605__auto___34233,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async))
})();
var state__32607__auto__ = (function (){var statearr_32790 = f__32606__auto__();
(statearr_32790[(6)] = c__32605__auto___34233);

return statearr_32790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
});})(__34229,c__32605__auto___34233,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async))
);


break;
case "async":
var c__32605__auto___34243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34229,c__32605__auto___34243,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async){
return (function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = ((function (__34229,c__32605__auto___34243,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (1))){
var state_32803__$1 = state_32803;
var statearr_32806_34244 = state_32803__$1;
(statearr_32806_34244[(2)] = null);

(statearr_32806_34244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (2))){
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32803__$1,(4),jobs);
} else {
if((state_val_32804 === (3))){
var inst_32801 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32803__$1,inst_32801);
} else {
if((state_val_32804 === (4))){
var inst_32793 = (state_32803[(2)]);
var inst_32794 = async(inst_32793);
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32794)){
var statearr_32808_34245 = state_32803__$1;
(statearr_32808_34245[(1)] = (5));

} else {
var statearr_32809_34246 = state_32803__$1;
(statearr_32809_34246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var state_32803__$1 = state_32803;
var statearr_32810_34247 = state_32803__$1;
(statearr_32810_34247[(2)] = null);

(statearr_32810_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32813_34249 = state_32803__$1;
(statearr_32813_34249[(2)] = null);

(statearr_32813_34249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32814_34250 = state_32803__$1;
(statearr_32814_34250[(2)] = inst_32799);

(statearr_32814_34250[(1)] = (3));


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
});})(__34229,c__32605__auto___34243,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async))
;
return ((function (__34229,switch__32534__auto__,c__32605__auto___34243,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0 = (function (){
var statearr_32816 = [null,null,null,null,null,null,null];
(statearr_32816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__);

(statearr_32816[(1)] = (1));

return statearr_32816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1 = (function (state_32803){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32803);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e32817){var ex__32538__auto__ = e32817;
var statearr_32818_34251 = state_32803;
(statearr_32818_34251[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32803[(4)]))){
var statearr_32819_34252 = state_32803;
(statearr_32819_34252[(1)] = cljs.core.first((state_32803[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34253 = state_32803;
state_32803 = G__34253;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__;
})()
;})(__34229,switch__32534__auto__,c__32605__auto___34243,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async))
})();
var state__32607__auto__ = (function (){var statearr_32820 = f__32606__auto__();
(statearr_32820[(6)] = c__32605__auto___34243);

return statearr_32820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
});})(__34229,c__32605__auto___34243,G__32763_34230,G__32763_34231__$1,n__5762__auto___34228,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32763_34231__$1))));

}

var G__34254 = (__34229 + (1));
__34229 = G__34254;
continue;
} else {
}
break;
}

var c__32605__auto___34255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_32846){
var state_val_32847 = (state_32846[(1)]);
if((state_val_32847 === (7))){
var inst_32842 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_32848_34256 = state_32846__$1;
(statearr_32848_34256[(2)] = inst_32842);

(statearr_32848_34256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32847 === (1))){
var state_32846__$1 = state_32846;
var statearr_32849_34257 = state_32846__$1;
(statearr_32849_34257[(2)] = null);

(statearr_32849_34257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32847 === (4))){
var inst_32823 = (state_32846[(7)]);
var inst_32823__$1 = (state_32846[(2)]);
var inst_32824 = (inst_32823__$1 == null);
var state_32846__$1 = (function (){var statearr_32850 = state_32846;
(statearr_32850[(7)] = inst_32823__$1);

return statearr_32850;
})();
if(cljs.core.truth_(inst_32824)){
var statearr_32851_34258 = state_32846__$1;
(statearr_32851_34258[(1)] = (5));

} else {
var statearr_32852_34259 = state_32846__$1;
(statearr_32852_34259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32847 === (6))){
var inst_32823 = (state_32846[(7)]);
var inst_32832 = (state_32846[(8)]);
var inst_32832__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32834 = [inst_32823,inst_32832__$1];
var inst_32835 = (new cljs.core.PersistentVector(null,2,(5),inst_32833,inst_32834,null));
var state_32846__$1 = (function (){var statearr_32856 = state_32846;
(statearr_32856[(8)] = inst_32832__$1);

return statearr_32856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32846__$1,(8),jobs,inst_32835);
} else {
if((state_val_32847 === (3))){
var inst_32844 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32846__$1,inst_32844);
} else {
if((state_val_32847 === (2))){
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32846__$1,(4),from);
} else {
if((state_val_32847 === (9))){
var inst_32839 = (state_32846[(2)]);
var state_32846__$1 = (function (){var statearr_32861 = state_32846;
(statearr_32861[(9)] = inst_32839);

return statearr_32861;
})();
var statearr_32862_34268 = state_32846__$1;
(statearr_32862_34268[(2)] = null);

(statearr_32862_34268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32847 === (5))){
var inst_32826 = cljs.core.async.close_BANG_(jobs);
var state_32846__$1 = state_32846;
var statearr_32863_34269 = state_32846__$1;
(statearr_32863_34269[(2)] = inst_32826);

(statearr_32863_34269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32847 === (8))){
var inst_32832 = (state_32846[(8)]);
var inst_32837 = (state_32846[(2)]);
var state_32846__$1 = (function (){var statearr_32866 = state_32846;
(statearr_32866[(10)] = inst_32837);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32846__$1,(9),results,inst_32832);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0 = (function (){
var statearr_32868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__);

(statearr_32868[(1)] = (1));

return statearr_32868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1 = (function (state_32846){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32846);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e32869){var ex__32538__auto__ = e32869;
var statearr_32870_34273 = state_32846;
(statearr_32870_34273[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32846[(4)]))){
var statearr_32871_34274 = state_32846;
(statearr_32871_34274[(1)] = cljs.core.first((state_32846[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34276 = state_32846;
state_32846 = G__34276;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = function(state_32846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1.call(this,state_32846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_32876 = f__32606__auto__();
(statearr_32876[(6)] = c__32605__auto___34255);

return statearr_32876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));


var c__32605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_32914){
var state_val_32915 = (state_32914[(1)]);
if((state_val_32915 === (7))){
var inst_32910 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32916_34278 = state_32914__$1;
(statearr_32916_34278[(2)] = inst_32910);

(statearr_32916_34278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (20))){
var state_32914__$1 = state_32914;
var statearr_32917_34279 = state_32914__$1;
(statearr_32917_34279[(2)] = null);

(statearr_32917_34279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (1))){
var state_32914__$1 = state_32914;
var statearr_32918_34280 = state_32914__$1;
(statearr_32918_34280[(2)] = null);

(statearr_32918_34280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (4))){
var inst_32879 = (state_32914[(7)]);
var inst_32879__$1 = (state_32914[(2)]);
var inst_32880 = (inst_32879__$1 == null);
var state_32914__$1 = (function (){var statearr_32919 = state_32914;
(statearr_32919[(7)] = inst_32879__$1);

return statearr_32919;
})();
if(cljs.core.truth_(inst_32880)){
var statearr_32920_34281 = state_32914__$1;
(statearr_32920_34281[(1)] = (5));

} else {
var statearr_32921_34282 = state_32914__$1;
(statearr_32921_34282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (15))){
var inst_32892 = (state_32914[(8)]);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32914__$1,(18),to,inst_32892);
} else {
if((state_val_32915 === (21))){
var inst_32905 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32923_34283 = state_32914__$1;
(statearr_32923_34283[(2)] = inst_32905);

(statearr_32923_34283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (13))){
var inst_32907 = (state_32914[(2)]);
var state_32914__$1 = (function (){var statearr_32925 = state_32914;
(statearr_32925[(9)] = inst_32907);

return statearr_32925;
})();
var statearr_32926_34284 = state_32914__$1;
(statearr_32926_34284[(2)] = null);

(statearr_32926_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (6))){
var inst_32879 = (state_32914[(7)]);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32914__$1,(11),inst_32879);
} else {
if((state_val_32915 === (17))){
var inst_32900 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
if(cljs.core.truth_(inst_32900)){
var statearr_32928_34285 = state_32914__$1;
(statearr_32928_34285[(1)] = (19));

} else {
var statearr_32929_34286 = state_32914__$1;
(statearr_32929_34286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (3))){
var inst_32912 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32914__$1,inst_32912);
} else {
if((state_val_32915 === (12))){
var inst_32889 = (state_32914[(10)]);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32914__$1,(14),inst_32889);
} else {
if((state_val_32915 === (2))){
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32914__$1,(4),results);
} else {
if((state_val_32915 === (19))){
var state_32914__$1 = state_32914;
var statearr_32930_34287 = state_32914__$1;
(statearr_32930_34287[(2)] = null);

(statearr_32930_34287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (11))){
var inst_32889 = (state_32914[(2)]);
var state_32914__$1 = (function (){var statearr_32931 = state_32914;
(statearr_32931[(10)] = inst_32889);

return statearr_32931;
})();
var statearr_32932_34291 = state_32914__$1;
(statearr_32932_34291[(2)] = null);

(statearr_32932_34291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (9))){
var state_32914__$1 = state_32914;
var statearr_32934_34292 = state_32914__$1;
(statearr_32934_34292[(2)] = null);

(statearr_32934_34292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (5))){
var state_32914__$1 = state_32914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32936_34293 = state_32914__$1;
(statearr_32936_34293[(1)] = (8));

} else {
var statearr_32937_34294 = state_32914__$1;
(statearr_32937_34294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (14))){
var inst_32892 = (state_32914[(8)]);
var inst_32894 = (state_32914[(11)]);
var inst_32892__$1 = (state_32914[(2)]);
var inst_32893 = (inst_32892__$1 == null);
var inst_32894__$1 = cljs.core.not(inst_32893);
var state_32914__$1 = (function (){var statearr_32938 = state_32914;
(statearr_32938[(8)] = inst_32892__$1);

(statearr_32938[(11)] = inst_32894__$1);

return statearr_32938;
})();
if(inst_32894__$1){
var statearr_32939_34297 = state_32914__$1;
(statearr_32939_34297[(1)] = (15));

} else {
var statearr_32940_34298 = state_32914__$1;
(statearr_32940_34298[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (16))){
var inst_32894 = (state_32914[(11)]);
var state_32914__$1 = state_32914;
var statearr_32941_34299 = state_32914__$1;
(statearr_32941_34299[(2)] = inst_32894);

(statearr_32941_34299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (10))){
var inst_32886 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32944_34300 = state_32914__$1;
(statearr_32944_34300[(2)] = inst_32886);

(statearr_32944_34300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (18))){
var inst_32897 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32945_34301 = state_32914__$1;
(statearr_32945_34301[(2)] = inst_32897);

(statearr_32945_34301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (8))){
var inst_32883 = cljs.core.async.close_BANG_(to);
var state_32914__$1 = state_32914;
var statearr_32946_34302 = state_32914__$1;
(statearr_32946_34302[(2)] = inst_32883);

(statearr_32946_34302[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0 = (function (){
var statearr_32950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__);

(statearr_32950[(1)] = (1));

return statearr_32950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1 = (function (state_32914){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32914);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e32951){var ex__32538__auto__ = e32951;
var statearr_32952_34303 = state_32914;
(statearr_32952_34303[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32914[(4)]))){
var statearr_32953_34304 = state_32914;
(statearr_32953_34304[(1)] = cljs.core.first((state_32914[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34305 = state_32914;
state_32914 = G__34305;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__ = function(state_32914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1.call(this,state_32914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32535__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_32955 = f__32606__auto__();
(statearr_32955[(6)] = c__32605__auto__);

return statearr_32955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));

return c__32605__auto__;
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
var G__32957 = arguments.length;
switch (G__32957) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__32962 = arguments.length;
switch (G__32962) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__32967 = arguments.length;
switch (G__32967) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32605__auto___34314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_32993){
var state_val_32994 = (state_32993[(1)]);
if((state_val_32994 === (7))){
var inst_32989 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_32995_34318 = state_32993__$1;
(statearr_32995_34318[(2)] = inst_32989);

(statearr_32995_34318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (1))){
var state_32993__$1 = state_32993;
var statearr_32996_34319 = state_32993__$1;
(statearr_32996_34319[(2)] = null);

(statearr_32996_34319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (4))){
var inst_32970 = (state_32993[(7)]);
var inst_32970__$1 = (state_32993[(2)]);
var inst_32971 = (inst_32970__$1 == null);
var state_32993__$1 = (function (){var statearr_32997 = state_32993;
(statearr_32997[(7)] = inst_32970__$1);

return statearr_32997;
})();
if(cljs.core.truth_(inst_32971)){
var statearr_32998_34320 = state_32993__$1;
(statearr_32998_34320[(1)] = (5));

} else {
var statearr_32999_34321 = state_32993__$1;
(statearr_32999_34321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (13))){
var state_32993__$1 = state_32993;
var statearr_33000_34322 = state_32993__$1;
(statearr_33000_34322[(2)] = null);

(statearr_33000_34322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (6))){
var inst_32970 = (state_32993[(7)]);
var inst_32976 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32970) : p.call(null,inst_32970));
var state_32993__$1 = state_32993;
if(cljs.core.truth_(inst_32976)){
var statearr_33001_34324 = state_32993__$1;
(statearr_33001_34324[(1)] = (9));

} else {
var statearr_33002_34326 = state_32993__$1;
(statearr_33002_34326[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (3))){
var inst_32991 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32993__$1,inst_32991);
} else {
if((state_val_32994 === (12))){
var state_32993__$1 = state_32993;
var statearr_33004_34327 = state_32993__$1;
(statearr_33004_34327[(2)] = null);

(statearr_33004_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (2))){
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32993__$1,(4),ch);
} else {
if((state_val_32994 === (11))){
var inst_32970 = (state_32993[(7)]);
var inst_32980 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32993__$1,(8),inst_32980,inst_32970);
} else {
if((state_val_32994 === (9))){
var state_32993__$1 = state_32993;
var statearr_33005_34328 = state_32993__$1;
(statearr_33005_34328[(2)] = tc);

(statearr_33005_34328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (5))){
var inst_32973 = cljs.core.async.close_BANG_(tc);
var inst_32974 = cljs.core.async.close_BANG_(fc);
var state_32993__$1 = (function (){var statearr_33006 = state_32993;
(statearr_33006[(8)] = inst_32973);

return statearr_33006;
})();
var statearr_33008_34329 = state_32993__$1;
(statearr_33008_34329[(2)] = inst_32974);

(statearr_33008_34329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (14))){
var inst_32987 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
var statearr_33009_34330 = state_32993__$1;
(statearr_33009_34330[(2)] = inst_32987);

(statearr_33009_34330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (10))){
var state_32993__$1 = state_32993;
var statearr_33010_34331 = state_32993__$1;
(statearr_33010_34331[(2)] = fc);

(statearr_33010_34331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (8))){
var inst_32982 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
if(cljs.core.truth_(inst_32982)){
var statearr_33012_34332 = state_32993__$1;
(statearr_33012_34332[(1)] = (12));

} else {
var statearr_33013_34333 = state_32993__$1;
(statearr_33013_34333[(1)] = (13));

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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33016 = [null,null,null,null,null,null,null,null,null];
(statearr_33016[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33016[(1)] = (1));

return statearr_33016;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_32993){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_32993);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33017){var ex__32538__auto__ = e33017;
var statearr_33018_34334 = state_32993;
(statearr_33018_34334[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_32993[(4)]))){
var statearr_33019_34335 = state_32993;
(statearr_33019_34335[(1)] = cljs.core.first((state_32993[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34336 = state_32993;
state_32993 = G__34336;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33020 = f__32606__auto__();
(statearr_33020[(6)] = c__32605__auto___34314);

return statearr_33020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
var c__32605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33042){
var state_val_33043 = (state_33042[(1)]);
if((state_val_33043 === (7))){
var inst_33038 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33044_34344 = state_33042__$1;
(statearr_33044_34344[(2)] = inst_33038);

(statearr_33044_34344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (1))){
var inst_33021 = init;
var inst_33022 = inst_33021;
var state_33042__$1 = (function (){var statearr_33045 = state_33042;
(statearr_33045[(7)] = inst_33022);

return statearr_33045;
})();
var statearr_33046_34345 = state_33042__$1;
(statearr_33046_34345[(2)] = null);

(statearr_33046_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (4))){
var inst_33025 = (state_33042[(8)]);
var inst_33025__$1 = (state_33042[(2)]);
var inst_33026 = (inst_33025__$1 == null);
var state_33042__$1 = (function (){var statearr_33049 = state_33042;
(statearr_33049[(8)] = inst_33025__$1);

return statearr_33049;
})();
if(cljs.core.truth_(inst_33026)){
var statearr_33050_34348 = state_33042__$1;
(statearr_33050_34348[(1)] = (5));

} else {
var statearr_33051_34349 = state_33042__$1;
(statearr_33051_34349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (6))){
var inst_33022 = (state_33042[(7)]);
var inst_33025 = (state_33042[(8)]);
var inst_33029 = (state_33042[(9)]);
var inst_33029__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33022,inst_33025) : f.call(null,inst_33022,inst_33025));
var inst_33030 = cljs.core.reduced_QMARK_(inst_33029__$1);
var state_33042__$1 = (function (){var statearr_33052 = state_33042;
(statearr_33052[(9)] = inst_33029__$1);

return statearr_33052;
})();
if(inst_33030){
var statearr_33053_34350 = state_33042__$1;
(statearr_33053_34350[(1)] = (8));

} else {
var statearr_33054_34351 = state_33042__$1;
(statearr_33054_34351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (3))){
var inst_33040 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33042__$1,inst_33040);
} else {
if((state_val_33043 === (2))){
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33042__$1,(4),ch);
} else {
if((state_val_33043 === (9))){
var inst_33029 = (state_33042[(9)]);
var inst_33022 = inst_33029;
var state_33042__$1 = (function (){var statearr_33055 = state_33042;
(statearr_33055[(7)] = inst_33022);

return statearr_33055;
})();
var statearr_33056_34352 = state_33042__$1;
(statearr_33056_34352[(2)] = null);

(statearr_33056_34352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (5))){
var inst_33022 = (state_33042[(7)]);
var state_33042__$1 = state_33042;
var statearr_33057_34353 = state_33042__$1;
(statearr_33057_34353[(2)] = inst_33022);

(statearr_33057_34353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (10))){
var inst_33036 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33058_34354 = state_33042__$1;
(statearr_33058_34354[(2)] = inst_33036);

(statearr_33058_34354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (8))){
var inst_33029 = (state_33042[(9)]);
var inst_33032 = cljs.core.deref(inst_33029);
var state_33042__$1 = state_33042;
var statearr_33059_34355 = state_33042__$1;
(statearr_33059_34355[(2)] = inst_33032);

(statearr_33059_34355[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32535__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32535__auto____0 = (function (){
var statearr_33060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33060[(0)] = cljs$core$async$reduce_$_state_machine__32535__auto__);

(statearr_33060[(1)] = (1));

return statearr_33060;
});
var cljs$core$async$reduce_$_state_machine__32535__auto____1 = (function (state_33042){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33042);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33061){var ex__32538__auto__ = e33061;
var statearr_33062_34359 = state_33042;
(statearr_33062_34359[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33042[(4)]))){
var statearr_33064_34360 = state_33042;
(statearr_33064_34360[(1)] = cljs.core.first((state_33042[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34361 = state_33042;
state_33042 = G__34361;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32535__auto__ = function(state_33042){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32535__auto____1.call(this,state_33042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32535__auto____0;
cljs$core$async$reduce_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32535__auto____1;
return cljs$core$async$reduce_$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33066 = f__32606__auto__();
(statearr_33066[(6)] = c__32605__auto__);

return statearr_33066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));

return c__32605__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33072){
var state_val_33073 = (state_33072[(1)]);
if((state_val_33073 === (1))){
var inst_33067 = cljs.core.async.reduce(f__$1,init,ch);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33072__$1,(2),inst_33067);
} else {
if((state_val_33073 === (2))){
var inst_33069 = (state_33072[(2)]);
var inst_33070 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33069) : f__$1.call(null,inst_33069));
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33072__$1,inst_33070);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32535__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32535__auto____0 = (function (){
var statearr_33078 = [null,null,null,null,null,null,null];
(statearr_33078[(0)] = cljs$core$async$transduce_$_state_machine__32535__auto__);

(statearr_33078[(1)] = (1));

return statearr_33078;
});
var cljs$core$async$transduce_$_state_machine__32535__auto____1 = (function (state_33072){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33072);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33081){var ex__32538__auto__ = e33081;
var statearr_33082_34364 = state_33072;
(statearr_33082_34364[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33072[(4)]))){
var statearr_33083_34365 = state_33072;
(statearr_33083_34365[(1)] = cljs.core.first((state_33072[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34366 = state_33072;
state_33072 = G__34366;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32535__auto__ = function(state_33072){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32535__auto____1.call(this,state_33072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32535__auto____0;
cljs$core$async$transduce_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32535__auto____1;
return cljs$core$async$transduce_$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33084 = f__32606__auto__();
(statearr_33084[(6)] = c__32605__auto__);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));

return c__32605__auto__;
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
var G__33086 = arguments.length;
switch (G__33086) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33111){
var state_val_33112 = (state_33111[(1)]);
if((state_val_33112 === (7))){
var inst_33093 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33113_34371 = state_33111__$1;
(statearr_33113_34371[(2)] = inst_33093);

(statearr_33113_34371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (1))){
var inst_33087 = cljs.core.seq(coll);
var inst_33088 = inst_33087;
var state_33111__$1 = (function (){var statearr_33114 = state_33111;
(statearr_33114[(7)] = inst_33088);

return statearr_33114;
})();
var statearr_33115_34374 = state_33111__$1;
(statearr_33115_34374[(2)] = null);

(statearr_33115_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (4))){
var inst_33088 = (state_33111[(7)]);
var inst_33091 = cljs.core.first(inst_33088);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33111__$1,(7),ch,inst_33091);
} else {
if((state_val_33112 === (13))){
var inst_33105 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33116_34375 = state_33111__$1;
(statearr_33116_34375[(2)] = inst_33105);

(statearr_33116_34375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (6))){
var inst_33096 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33096)){
var statearr_33117_34376 = state_33111__$1;
(statearr_33117_34376[(1)] = (8));

} else {
var statearr_33118_34377 = state_33111__$1;
(statearr_33118_34377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (3))){
var inst_33109 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33111__$1,inst_33109);
} else {
if((state_val_33112 === (12))){
var state_33111__$1 = state_33111;
var statearr_33119_34378 = state_33111__$1;
(statearr_33119_34378[(2)] = null);

(statearr_33119_34378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (2))){
var inst_33088 = (state_33111[(7)]);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33088)){
var statearr_33120_34379 = state_33111__$1;
(statearr_33120_34379[(1)] = (4));

} else {
var statearr_33121_34380 = state_33111__$1;
(statearr_33121_34380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (11))){
var inst_33102 = cljs.core.async.close_BANG_(ch);
var state_33111__$1 = state_33111;
var statearr_33122_34381 = state_33111__$1;
(statearr_33122_34381[(2)] = inst_33102);

(statearr_33122_34381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (9))){
var state_33111__$1 = state_33111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33123_34382 = state_33111__$1;
(statearr_33123_34382[(1)] = (11));

} else {
var statearr_33124_34383 = state_33111__$1;
(statearr_33124_34383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (5))){
var inst_33088 = (state_33111[(7)]);
var state_33111__$1 = state_33111;
var statearr_33125_34384 = state_33111__$1;
(statearr_33125_34384[(2)] = inst_33088);

(statearr_33125_34384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (10))){
var inst_33107 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33126_34388 = state_33111__$1;
(statearr_33126_34388[(2)] = inst_33107);

(statearr_33126_34388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (8))){
var inst_33088 = (state_33111[(7)]);
var inst_33098 = cljs.core.next(inst_33088);
var inst_33088__$1 = inst_33098;
var state_33111__$1 = (function (){var statearr_33127 = state_33111;
(statearr_33127[(7)] = inst_33088__$1);

return statearr_33127;
})();
var statearr_33128_34389 = state_33111__$1;
(statearr_33128_34389[(2)] = null);

(statearr_33128_34389[(1)] = (2));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33129 = [null,null,null,null,null,null,null,null];
(statearr_33129[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33129[(1)] = (1));

return statearr_33129;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_33111){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33111);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33130){var ex__32538__auto__ = e33130;
var statearr_33131_34392 = state_33111;
(statearr_33131_34392[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33111[(4)]))){
var statearr_33132_34393 = state_33111;
(statearr_33132_34393[(1)] = cljs.core.first((state_33111[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_33111;
state_33111 = G__34394;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_33111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_33111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33133 = f__32606__auto__();
(statearr_33133[(6)] = c__32605__auto__);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));

return c__32605__auto__;
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
var G__33135 = arguments.length;
switch (G__33135) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_34396 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34396(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34401 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34401(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34405 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34405(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34406 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34406(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33136 = (function (ch,cs,meta33137){
this.ch = ch;
this.cs = cs;
this.meta33137 = meta33137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33138,meta33137__$1){
var self__ = this;
var _33138__$1 = this;
return (new cljs.core.async.t_cljs$core$async33136(self__.ch,self__.cs,meta33137__$1));
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33138){
var self__ = this;
var _33138__$1 = this;
return self__.meta33137;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33137","meta33137",1256119667,null)], null);
}));

(cljs.core.async.t_cljs$core$async33136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33136");

(cljs.core.async.t_cljs$core$async33136.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33136.
 */
cljs.core.async.__GT_t_cljs$core$async33136 = (function cljs$core$async$__GT_t_cljs$core$async33136(ch,cs,meta33137){
return (new cljs.core.async.t_cljs$core$async33136(ch,cs,meta33137));
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
var m = (new cljs.core.async.t_cljs$core$async33136(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32605__auto___34408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33271){
var state_val_33273 = (state_33271[(1)]);
if((state_val_33273 === (7))){
var inst_33267 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33281_34410 = state_33271__$1;
(statearr_33281_34410[(2)] = inst_33267);

(statearr_33281_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (20))){
var inst_33172 = (state_33271[(7)]);
var inst_33184 = cljs.core.first(inst_33172);
var inst_33185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33184,(0),null);
var inst_33186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33184,(1),null);
var state_33271__$1 = (function (){var statearr_33282 = state_33271;
(statearr_33282[(8)] = inst_33185);

return statearr_33282;
})();
if(cljs.core.truth_(inst_33186)){
var statearr_33283_34411 = state_33271__$1;
(statearr_33283_34411[(1)] = (22));

} else {
var statearr_33284_34412 = state_33271__$1;
(statearr_33284_34412[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (27))){
var inst_33214 = (state_33271[(9)]);
var inst_33216 = (state_33271[(10)]);
var inst_33221 = (state_33271[(11)]);
var inst_33141 = (state_33271[(12)]);
var inst_33221__$1 = cljs.core._nth(inst_33214,inst_33216);
var inst_33222 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33221__$1,inst_33141,done);
var state_33271__$1 = (function (){var statearr_33285 = state_33271;
(statearr_33285[(11)] = inst_33221__$1);

return statearr_33285;
})();
if(cljs.core.truth_(inst_33222)){
var statearr_33286_34413 = state_33271__$1;
(statearr_33286_34413[(1)] = (30));

} else {
var statearr_33287_34414 = state_33271__$1;
(statearr_33287_34414[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (1))){
var state_33271__$1 = state_33271;
var statearr_33289_34415 = state_33271__$1;
(statearr_33289_34415[(2)] = null);

(statearr_33289_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (24))){
var inst_33172 = (state_33271[(7)]);
var inst_33191 = (state_33271[(2)]);
var inst_33192 = cljs.core.next(inst_33172);
var inst_33150 = inst_33192;
var inst_33151 = null;
var inst_33152 = (0);
var inst_33153 = (0);
var state_33271__$1 = (function (){var statearr_33293 = state_33271;
(statearr_33293[(13)] = inst_33191);

(statearr_33293[(14)] = inst_33150);

(statearr_33293[(15)] = inst_33151);

(statearr_33293[(16)] = inst_33152);

(statearr_33293[(17)] = inst_33153);

return statearr_33293;
})();
var statearr_33294_34416 = state_33271__$1;
(statearr_33294_34416[(2)] = null);

(statearr_33294_34416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (39))){
var state_33271__$1 = state_33271;
var statearr_33298_34417 = state_33271__$1;
(statearr_33298_34417[(2)] = null);

(statearr_33298_34417[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (4))){
var inst_33141 = (state_33271[(12)]);
var inst_33141__$1 = (state_33271[(2)]);
var inst_33142 = (inst_33141__$1 == null);
var state_33271__$1 = (function (){var statearr_33299 = state_33271;
(statearr_33299[(12)] = inst_33141__$1);

return statearr_33299;
})();
if(cljs.core.truth_(inst_33142)){
var statearr_33300_34421 = state_33271__$1;
(statearr_33300_34421[(1)] = (5));

} else {
var statearr_33301_34422 = state_33271__$1;
(statearr_33301_34422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (15))){
var inst_33153 = (state_33271[(17)]);
var inst_33150 = (state_33271[(14)]);
var inst_33151 = (state_33271[(15)]);
var inst_33152 = (state_33271[(16)]);
var inst_33168 = (state_33271[(2)]);
var inst_33169 = (inst_33153 + (1));
var tmp33295 = inst_33150;
var tmp33296 = inst_33151;
var tmp33297 = inst_33152;
var inst_33150__$1 = tmp33295;
var inst_33151__$1 = tmp33296;
var inst_33152__$1 = tmp33297;
var inst_33153__$1 = inst_33169;
var state_33271__$1 = (function (){var statearr_33302 = state_33271;
(statearr_33302[(18)] = inst_33168);

(statearr_33302[(14)] = inst_33150__$1);

(statearr_33302[(15)] = inst_33151__$1);

(statearr_33302[(16)] = inst_33152__$1);

(statearr_33302[(17)] = inst_33153__$1);

return statearr_33302;
})();
var statearr_33303_34425 = state_33271__$1;
(statearr_33303_34425[(2)] = null);

(statearr_33303_34425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (21))){
var inst_33195 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33307_34426 = state_33271__$1;
(statearr_33307_34426[(2)] = inst_33195);

(statearr_33307_34426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (31))){
var inst_33221 = (state_33271[(11)]);
var inst_33225 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33221);
var state_33271__$1 = state_33271;
var statearr_33308_34427 = state_33271__$1;
(statearr_33308_34427[(2)] = inst_33225);

(statearr_33308_34427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (32))){
var inst_33216 = (state_33271[(10)]);
var inst_33213 = (state_33271[(19)]);
var inst_33214 = (state_33271[(9)]);
var inst_33215 = (state_33271[(20)]);
var inst_33227 = (state_33271[(2)]);
var inst_33228 = (inst_33216 + (1));
var tmp33304 = inst_33215;
var tmp33305 = inst_33213;
var tmp33306 = inst_33214;
var inst_33213__$1 = tmp33305;
var inst_33214__$1 = tmp33306;
var inst_33215__$1 = tmp33304;
var inst_33216__$1 = inst_33228;
var state_33271__$1 = (function (){var statearr_33309 = state_33271;
(statearr_33309[(21)] = inst_33227);

(statearr_33309[(19)] = inst_33213__$1);

(statearr_33309[(9)] = inst_33214__$1);

(statearr_33309[(20)] = inst_33215__$1);

(statearr_33309[(10)] = inst_33216__$1);

return statearr_33309;
})();
var statearr_33310_34428 = state_33271__$1;
(statearr_33310_34428[(2)] = null);

(statearr_33310_34428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (40))){
var inst_33240 = (state_33271[(22)]);
var inst_33244 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33240);
var state_33271__$1 = state_33271;
var statearr_33311_34429 = state_33271__$1;
(statearr_33311_34429[(2)] = inst_33244);

(statearr_33311_34429[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (33))){
var inst_33231 = (state_33271[(23)]);
var inst_33233 = cljs.core.chunked_seq_QMARK_(inst_33231);
var state_33271__$1 = state_33271;
if(inst_33233){
var statearr_33312_34430 = state_33271__$1;
(statearr_33312_34430[(1)] = (36));

} else {
var statearr_33313_34431 = state_33271__$1;
(statearr_33313_34431[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (13))){
var inst_33162 = (state_33271[(24)]);
var inst_33165 = cljs.core.async.close_BANG_(inst_33162);
var state_33271__$1 = state_33271;
var statearr_33314_34435 = state_33271__$1;
(statearr_33314_34435[(2)] = inst_33165);

(statearr_33314_34435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (22))){
var inst_33185 = (state_33271[(8)]);
var inst_33188 = cljs.core.async.close_BANG_(inst_33185);
var state_33271__$1 = state_33271;
var statearr_33315_34436 = state_33271__$1;
(statearr_33315_34436[(2)] = inst_33188);

(statearr_33315_34436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (36))){
var inst_33231 = (state_33271[(23)]);
var inst_33235 = cljs.core.chunk_first(inst_33231);
var inst_33236 = cljs.core.chunk_rest(inst_33231);
var inst_33237 = cljs.core.count(inst_33235);
var inst_33213 = inst_33236;
var inst_33214 = inst_33235;
var inst_33215 = inst_33237;
var inst_33216 = (0);
var state_33271__$1 = (function (){var statearr_33331 = state_33271;
(statearr_33331[(19)] = inst_33213);

(statearr_33331[(9)] = inst_33214);

(statearr_33331[(20)] = inst_33215);

(statearr_33331[(10)] = inst_33216);

return statearr_33331;
})();
var statearr_33332_34439 = state_33271__$1;
(statearr_33332_34439[(2)] = null);

(statearr_33332_34439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (41))){
var inst_33231 = (state_33271[(23)]);
var inst_33246 = (state_33271[(2)]);
var inst_33247 = cljs.core.next(inst_33231);
var inst_33213 = inst_33247;
var inst_33214 = null;
var inst_33215 = (0);
var inst_33216 = (0);
var state_33271__$1 = (function (){var statearr_33333 = state_33271;
(statearr_33333[(25)] = inst_33246);

(statearr_33333[(19)] = inst_33213);

(statearr_33333[(9)] = inst_33214);

(statearr_33333[(20)] = inst_33215);

(statearr_33333[(10)] = inst_33216);

return statearr_33333;
})();
var statearr_33334_34440 = state_33271__$1;
(statearr_33334_34440[(2)] = null);

(statearr_33334_34440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (43))){
var state_33271__$1 = state_33271;
var statearr_33335_34441 = state_33271__$1;
(statearr_33335_34441[(2)] = null);

(statearr_33335_34441[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (29))){
var inst_33255 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33336_34442 = state_33271__$1;
(statearr_33336_34442[(2)] = inst_33255);

(statearr_33336_34442[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (44))){
var inst_33264 = (state_33271[(2)]);
var state_33271__$1 = (function (){var statearr_33337 = state_33271;
(statearr_33337[(26)] = inst_33264);

return statearr_33337;
})();
var statearr_33338_34443 = state_33271__$1;
(statearr_33338_34443[(2)] = null);

(statearr_33338_34443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (6))){
var inst_33205 = (state_33271[(27)]);
var inst_33204 = cljs.core.deref(cs);
var inst_33205__$1 = cljs.core.keys(inst_33204);
var inst_33206 = cljs.core.count(inst_33205__$1);
var inst_33207 = cljs.core.reset_BANG_(dctr,inst_33206);
var inst_33212 = cljs.core.seq(inst_33205__$1);
var inst_33213 = inst_33212;
var inst_33214 = null;
var inst_33215 = (0);
var inst_33216 = (0);
var state_33271__$1 = (function (){var statearr_33339 = state_33271;
(statearr_33339[(27)] = inst_33205__$1);

(statearr_33339[(28)] = inst_33207);

(statearr_33339[(19)] = inst_33213);

(statearr_33339[(9)] = inst_33214);

(statearr_33339[(20)] = inst_33215);

(statearr_33339[(10)] = inst_33216);

return statearr_33339;
})();
var statearr_33340_34444 = state_33271__$1;
(statearr_33340_34444[(2)] = null);

(statearr_33340_34444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (28))){
var inst_33213 = (state_33271[(19)]);
var inst_33231 = (state_33271[(23)]);
var inst_33231__$1 = cljs.core.seq(inst_33213);
var state_33271__$1 = (function (){var statearr_33341 = state_33271;
(statearr_33341[(23)] = inst_33231__$1);

return statearr_33341;
})();
if(inst_33231__$1){
var statearr_33342_34448 = state_33271__$1;
(statearr_33342_34448[(1)] = (33));

} else {
var statearr_33343_34449 = state_33271__$1;
(statearr_33343_34449[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (25))){
var inst_33216 = (state_33271[(10)]);
var inst_33215 = (state_33271[(20)]);
var inst_33218 = (inst_33216 < inst_33215);
var inst_33219 = inst_33218;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33219)){
var statearr_33344_34450 = state_33271__$1;
(statearr_33344_34450[(1)] = (27));

} else {
var statearr_33345_34452 = state_33271__$1;
(statearr_33345_34452[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (34))){
var state_33271__$1 = state_33271;
var statearr_33346_34454 = state_33271__$1;
(statearr_33346_34454[(2)] = null);

(statearr_33346_34454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (17))){
var state_33271__$1 = state_33271;
var statearr_33347_34455 = state_33271__$1;
(statearr_33347_34455[(2)] = null);

(statearr_33347_34455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (3))){
var inst_33269 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33271__$1,inst_33269);
} else {
if((state_val_33273 === (12))){
var inst_33200 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33348_34456 = state_33271__$1;
(statearr_33348_34456[(2)] = inst_33200);

(statearr_33348_34456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (2))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33271__$1,(4),ch);
} else {
if((state_val_33273 === (23))){
var state_33271__$1 = state_33271;
var statearr_33349_34457 = state_33271__$1;
(statearr_33349_34457[(2)] = null);

(statearr_33349_34457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (35))){
var inst_33253 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33350_34458 = state_33271__$1;
(statearr_33350_34458[(2)] = inst_33253);

(statearr_33350_34458[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (19))){
var inst_33172 = (state_33271[(7)]);
var inst_33176 = cljs.core.chunk_first(inst_33172);
var inst_33177 = cljs.core.chunk_rest(inst_33172);
var inst_33178 = cljs.core.count(inst_33176);
var inst_33150 = inst_33177;
var inst_33151 = inst_33176;
var inst_33152 = inst_33178;
var inst_33153 = (0);
var state_33271__$1 = (function (){var statearr_33351 = state_33271;
(statearr_33351[(14)] = inst_33150);

(statearr_33351[(15)] = inst_33151);

(statearr_33351[(16)] = inst_33152);

(statearr_33351[(17)] = inst_33153);

return statearr_33351;
})();
var statearr_33352_34459 = state_33271__$1;
(statearr_33352_34459[(2)] = null);

(statearr_33352_34459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (11))){
var inst_33150 = (state_33271[(14)]);
var inst_33172 = (state_33271[(7)]);
var inst_33172__$1 = cljs.core.seq(inst_33150);
var state_33271__$1 = (function (){var statearr_33353 = state_33271;
(statearr_33353[(7)] = inst_33172__$1);

return statearr_33353;
})();
if(inst_33172__$1){
var statearr_33354_34460 = state_33271__$1;
(statearr_33354_34460[(1)] = (16));

} else {
var statearr_33355_34461 = state_33271__$1;
(statearr_33355_34461[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (9))){
var inst_33202 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33356_34462 = state_33271__$1;
(statearr_33356_34462[(2)] = inst_33202);

(statearr_33356_34462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (5))){
var inst_33148 = cljs.core.deref(cs);
var inst_33149 = cljs.core.seq(inst_33148);
var inst_33150 = inst_33149;
var inst_33151 = null;
var inst_33152 = (0);
var inst_33153 = (0);
var state_33271__$1 = (function (){var statearr_33357 = state_33271;
(statearr_33357[(14)] = inst_33150);

(statearr_33357[(15)] = inst_33151);

(statearr_33357[(16)] = inst_33152);

(statearr_33357[(17)] = inst_33153);

return statearr_33357;
})();
var statearr_33358_34467 = state_33271__$1;
(statearr_33358_34467[(2)] = null);

(statearr_33358_34467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (14))){
var state_33271__$1 = state_33271;
var statearr_33359_34468 = state_33271__$1;
(statearr_33359_34468[(2)] = null);

(statearr_33359_34468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (45))){
var inst_33261 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33360_34472 = state_33271__$1;
(statearr_33360_34472[(2)] = inst_33261);

(statearr_33360_34472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (26))){
var inst_33205 = (state_33271[(27)]);
var inst_33257 = (state_33271[(2)]);
var inst_33258 = cljs.core.seq(inst_33205);
var state_33271__$1 = (function (){var statearr_33361 = state_33271;
(statearr_33361[(29)] = inst_33257);

return statearr_33361;
})();
if(inst_33258){
var statearr_33362_34473 = state_33271__$1;
(statearr_33362_34473[(1)] = (42));

} else {
var statearr_33363_34474 = state_33271__$1;
(statearr_33363_34474[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (16))){
var inst_33172 = (state_33271[(7)]);
var inst_33174 = cljs.core.chunked_seq_QMARK_(inst_33172);
var state_33271__$1 = state_33271;
if(inst_33174){
var statearr_33364_34477 = state_33271__$1;
(statearr_33364_34477[(1)] = (19));

} else {
var statearr_33365_34478 = state_33271__$1;
(statearr_33365_34478[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (38))){
var inst_33250 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33366_34479 = state_33271__$1;
(statearr_33366_34479[(2)] = inst_33250);

(statearr_33366_34479[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (30))){
var state_33271__$1 = state_33271;
var statearr_33367_34480 = state_33271__$1;
(statearr_33367_34480[(2)] = null);

(statearr_33367_34480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (10))){
var inst_33151 = (state_33271[(15)]);
var inst_33153 = (state_33271[(17)]);
var inst_33161 = cljs.core._nth(inst_33151,inst_33153);
var inst_33162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33161,(0),null);
var inst_33163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33161,(1),null);
var state_33271__$1 = (function (){var statearr_33368 = state_33271;
(statearr_33368[(24)] = inst_33162);

return statearr_33368;
})();
if(cljs.core.truth_(inst_33163)){
var statearr_33369_34481 = state_33271__$1;
(statearr_33369_34481[(1)] = (13));

} else {
var statearr_33370_34482 = state_33271__$1;
(statearr_33370_34482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (18))){
var inst_33198 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33371_34483 = state_33271__$1;
(statearr_33371_34483[(2)] = inst_33198);

(statearr_33371_34483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (42))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33271__$1,(45),dchan);
} else {
if((state_val_33273 === (37))){
var inst_33231 = (state_33271[(23)]);
var inst_33240 = (state_33271[(22)]);
var inst_33141 = (state_33271[(12)]);
var inst_33240__$1 = cljs.core.first(inst_33231);
var inst_33241 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33240__$1,inst_33141,done);
var state_33271__$1 = (function (){var statearr_33372 = state_33271;
(statearr_33372[(22)] = inst_33240__$1);

return statearr_33372;
})();
if(cljs.core.truth_(inst_33241)){
var statearr_33373_34484 = state_33271__$1;
(statearr_33373_34484[(1)] = (39));

} else {
var statearr_33374_34485 = state_33271__$1;
(statearr_33374_34485[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (8))){
var inst_33153 = (state_33271[(17)]);
var inst_33152 = (state_33271[(16)]);
var inst_33155 = (inst_33153 < inst_33152);
var inst_33156 = inst_33155;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33156)){
var statearr_33375_34489 = state_33271__$1;
(statearr_33375_34489[(1)] = (10));

} else {
var statearr_33376_34490 = state_33271__$1;
(statearr_33376_34490[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32535__auto__ = null;
var cljs$core$async$mult_$_state_machine__32535__auto____0 = (function (){
var statearr_33377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33377[(0)] = cljs$core$async$mult_$_state_machine__32535__auto__);

(statearr_33377[(1)] = (1));

return statearr_33377;
});
var cljs$core$async$mult_$_state_machine__32535__auto____1 = (function (state_33271){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33271);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33378){var ex__32538__auto__ = e33378;
var statearr_33379_34493 = state_33271;
(statearr_33379_34493[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33271[(4)]))){
var statearr_33380_34494 = state_33271;
(statearr_33380_34494[(1)] = cljs.core.first((state_33271[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34495 = state_33271;
state_33271 = G__34495;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32535__auto__ = function(state_33271){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32535__auto____1.call(this,state_33271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32535__auto____0;
cljs$core$async$mult_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32535__auto____1;
return cljs$core$async$mult_$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33381 = f__32606__auto__();
(statearr_33381[(6)] = c__32605__auto___34408);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
var G__33383 = arguments.length;
switch (G__33383) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mix$admix_STAR_$dyn_34500 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34500(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34503 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34503(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34504 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34504(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34505 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34505(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34506 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34506(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34512 = arguments.length;
var i__5898__auto___34513 = (0);
while(true){
if((i__5898__auto___34513 < len__5897__auto___34512)){
args__5903__auto__.push((arguments[i__5898__auto___34513]));

var G__34514 = (i__5898__auto___34513 + (1));
i__5898__auto___34513 = G__34514;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33388){
var map__33389 = p__33388;
var map__33389__$1 = cljs.core.__destructure_map(map__33389);
var opts = map__33389__$1;
var statearr_33390_34515 = state;
(statearr_33390_34515[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33391_34516 = state;
(statearr_33391_34516[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33392_34517 = state;
(statearr_33392_34517[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33384){
var G__33385 = cljs.core.first(seq33384);
var seq33384__$1 = cljs.core.next(seq33384);
var G__33386 = cljs.core.first(seq33384__$1);
var seq33384__$2 = cljs.core.next(seq33384__$1);
var G__33387 = cljs.core.first(seq33384__$2);
var seq33384__$3 = cljs.core.next(seq33384__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33385,G__33386,G__33387,seq33384__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33393 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33394){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33394 = meta33394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33395,meta33394__$1){
var self__ = this;
var _33395__$1 = this;
return (new cljs.core.async.t_cljs$core$async33393(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33394__$1));
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33395){
var self__ = this;
var _33395__$1 = this;
return self__.meta33394;
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33393.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33394","meta33394",512426551,null)], null);
}));

(cljs.core.async.t_cljs$core$async33393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33393");

(cljs.core.async.t_cljs$core$async33393.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33393.
 */
cljs.core.async.__GT_t_cljs$core$async33393 = (function cljs$core$async$__GT_t_cljs$core$async33393(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33394){
return (new cljs.core.async.t_cljs$core$async33393(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33394));
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
var m = (new cljs.core.async.t_cljs$core$async33393(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32605__auto___34518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33463){
var state_val_33464 = (state_33463[(1)]);
if((state_val_33464 === (7))){
var inst_33423 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
if(cljs.core.truth_(inst_33423)){
var statearr_33465_34519 = state_33463__$1;
(statearr_33465_34519[(1)] = (8));

} else {
var statearr_33466_34520 = state_33463__$1;
(statearr_33466_34520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (20))){
var inst_33416 = (state_33463[(7)]);
var state_33463__$1 = state_33463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33463__$1,(23),out,inst_33416);
} else {
if((state_val_33464 === (1))){
var inst_33399 = calc_state();
var inst_33400 = cljs.core.__destructure_map(inst_33399);
var inst_33401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33400,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33400,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33404 = inst_33399;
var state_33463__$1 = (function (){var statearr_33467 = state_33463;
(statearr_33467[(8)] = inst_33401);

(statearr_33467[(9)] = inst_33402);

(statearr_33467[(10)] = inst_33403);

(statearr_33467[(11)] = inst_33404);

return statearr_33467;
})();
var statearr_33468_34532 = state_33463__$1;
(statearr_33468_34532[(2)] = null);

(statearr_33468_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (24))){
var inst_33407 = (state_33463[(12)]);
var inst_33404 = inst_33407;
var state_33463__$1 = (function (){var statearr_33469 = state_33463;
(statearr_33469[(11)] = inst_33404);

return statearr_33469;
})();
var statearr_33470_34536 = state_33463__$1;
(statearr_33470_34536[(2)] = null);

(statearr_33470_34536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (4))){
var inst_33416 = (state_33463[(7)]);
var inst_33418 = (state_33463[(13)]);
var inst_33415 = (state_33463[(2)]);
var inst_33416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33415,(0),null);
var inst_33417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33415,(1),null);
var inst_33418__$1 = (inst_33416__$1 == null);
var state_33463__$1 = (function (){var statearr_33471 = state_33463;
(statearr_33471[(7)] = inst_33416__$1);

(statearr_33471[(14)] = inst_33417);

(statearr_33471[(13)] = inst_33418__$1);

return statearr_33471;
})();
if(cljs.core.truth_(inst_33418__$1)){
var statearr_33472_34540 = state_33463__$1;
(statearr_33472_34540[(1)] = (5));

} else {
var statearr_33473_34541 = state_33463__$1;
(statearr_33473_34541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (15))){
var inst_33408 = (state_33463[(15)]);
var inst_33437 = (state_33463[(16)]);
var inst_33437__$1 = cljs.core.empty_QMARK_(inst_33408);
var state_33463__$1 = (function (){var statearr_33474 = state_33463;
(statearr_33474[(16)] = inst_33437__$1);

return statearr_33474;
})();
if(inst_33437__$1){
var statearr_33475_34542 = state_33463__$1;
(statearr_33475_34542[(1)] = (17));

} else {
var statearr_33476_34543 = state_33463__$1;
(statearr_33476_34543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (21))){
var inst_33407 = (state_33463[(12)]);
var inst_33404 = inst_33407;
var state_33463__$1 = (function (){var statearr_33477 = state_33463;
(statearr_33477[(11)] = inst_33404);

return statearr_33477;
})();
var statearr_33478_34544 = state_33463__$1;
(statearr_33478_34544[(2)] = null);

(statearr_33478_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (13))){
var inst_33430 = (state_33463[(2)]);
var inst_33431 = calc_state();
var inst_33404 = inst_33431;
var state_33463__$1 = (function (){var statearr_33479 = state_33463;
(statearr_33479[(17)] = inst_33430);

(statearr_33479[(11)] = inst_33404);

return statearr_33479;
})();
var statearr_33480_34545 = state_33463__$1;
(statearr_33480_34545[(2)] = null);

(statearr_33480_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (22))){
var inst_33457 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33481_34547 = state_33463__$1;
(statearr_33481_34547[(2)] = inst_33457);

(statearr_33481_34547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (6))){
var inst_33417 = (state_33463[(14)]);
var inst_33421 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33417,change);
var state_33463__$1 = state_33463;
var statearr_33482_34548 = state_33463__$1;
(statearr_33482_34548[(2)] = inst_33421);

(statearr_33482_34548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (25))){
var state_33463__$1 = state_33463;
var statearr_33483_34549 = state_33463__$1;
(statearr_33483_34549[(2)] = null);

(statearr_33483_34549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (17))){
var inst_33409 = (state_33463[(18)]);
var inst_33417 = (state_33463[(14)]);
var inst_33439 = (inst_33409.cljs$core$IFn$_invoke$arity$1 ? inst_33409.cljs$core$IFn$_invoke$arity$1(inst_33417) : inst_33409.call(null,inst_33417));
var inst_33440 = cljs.core.not(inst_33439);
var state_33463__$1 = state_33463;
var statearr_33484_34553 = state_33463__$1;
(statearr_33484_34553[(2)] = inst_33440);

(statearr_33484_34553[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (3))){
var inst_33461 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33463__$1,inst_33461);
} else {
if((state_val_33464 === (12))){
var state_33463__$1 = state_33463;
var statearr_33485_34563 = state_33463__$1;
(statearr_33485_34563[(2)] = null);

(statearr_33485_34563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (2))){
var inst_33404 = (state_33463[(11)]);
var inst_33407 = (state_33463[(12)]);
var inst_33407__$1 = cljs.core.__destructure_map(inst_33404);
var inst_33408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33407__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33407__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33407__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33463__$1 = (function (){var statearr_33486 = state_33463;
(statearr_33486[(12)] = inst_33407__$1);

(statearr_33486[(15)] = inst_33408);

(statearr_33486[(18)] = inst_33409);

return statearr_33486;
})();
return cljs.core.async.ioc_alts_BANG_(state_33463__$1,(4),inst_33410);
} else {
if((state_val_33464 === (23))){
var inst_33448 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
if(cljs.core.truth_(inst_33448)){
var statearr_33487_34566 = state_33463__$1;
(statearr_33487_34566[(1)] = (24));

} else {
var statearr_33488_34567 = state_33463__$1;
(statearr_33488_34567[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (19))){
var inst_33443 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33489_34568 = state_33463__$1;
(statearr_33489_34568[(2)] = inst_33443);

(statearr_33489_34568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (11))){
var inst_33417 = (state_33463[(14)]);
var inst_33427 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33417);
var state_33463__$1 = state_33463;
var statearr_33490_34569 = state_33463__$1;
(statearr_33490_34569[(2)] = inst_33427);

(statearr_33490_34569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (9))){
var inst_33408 = (state_33463[(15)]);
var inst_33417 = (state_33463[(14)]);
var inst_33434 = (state_33463[(19)]);
var inst_33434__$1 = (inst_33408.cljs$core$IFn$_invoke$arity$1 ? inst_33408.cljs$core$IFn$_invoke$arity$1(inst_33417) : inst_33408.call(null,inst_33417));
var state_33463__$1 = (function (){var statearr_33491 = state_33463;
(statearr_33491[(19)] = inst_33434__$1);

return statearr_33491;
})();
if(cljs.core.truth_(inst_33434__$1)){
var statearr_33492_34570 = state_33463__$1;
(statearr_33492_34570[(1)] = (14));

} else {
var statearr_33493_34571 = state_33463__$1;
(statearr_33493_34571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (5))){
var inst_33418 = (state_33463[(13)]);
var state_33463__$1 = state_33463;
var statearr_33494_34573 = state_33463__$1;
(statearr_33494_34573[(2)] = inst_33418);

(statearr_33494_34573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (14))){
var inst_33434 = (state_33463[(19)]);
var state_33463__$1 = state_33463;
var statearr_33495_34575 = state_33463__$1;
(statearr_33495_34575[(2)] = inst_33434);

(statearr_33495_34575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (26))){
var inst_33453 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33496_34576 = state_33463__$1;
(statearr_33496_34576[(2)] = inst_33453);

(statearr_33496_34576[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (16))){
var inst_33445 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
if(cljs.core.truth_(inst_33445)){
var statearr_33497_34577 = state_33463__$1;
(statearr_33497_34577[(1)] = (20));

} else {
var statearr_33498_34578 = state_33463__$1;
(statearr_33498_34578[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (10))){
var inst_33459 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33499_34580 = state_33463__$1;
(statearr_33499_34580[(2)] = inst_33459);

(statearr_33499_34580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (18))){
var inst_33437 = (state_33463[(16)]);
var state_33463__$1 = state_33463;
var statearr_33500_34581 = state_33463__$1;
(statearr_33500_34581[(2)] = inst_33437);

(statearr_33500_34581[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (8))){
var inst_33416 = (state_33463[(7)]);
var inst_33425 = (inst_33416 == null);
var state_33463__$1 = state_33463;
if(cljs.core.truth_(inst_33425)){
var statearr_33501_34582 = state_33463__$1;
(statearr_33501_34582[(1)] = (11));

} else {
var statearr_33502_34583 = state_33463__$1;
(statearr_33502_34583[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32535__auto__ = null;
var cljs$core$async$mix_$_state_machine__32535__auto____0 = (function (){
var statearr_33503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33503[(0)] = cljs$core$async$mix_$_state_machine__32535__auto__);

(statearr_33503[(1)] = (1));

return statearr_33503;
});
var cljs$core$async$mix_$_state_machine__32535__auto____1 = (function (state_33463){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33463);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33504){var ex__32538__auto__ = e33504;
var statearr_33505_34584 = state_33463;
(statearr_33505_34584[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33463[(4)]))){
var statearr_33506_34585 = state_33463;
(statearr_33506_34585[(1)] = cljs.core.first((state_33463[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34586 = state_33463;
state_33463 = G__34586;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32535__auto__ = function(state_33463){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32535__auto____1.call(this,state_33463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32535__auto____0;
cljs$core$async$mix_$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32535__auto____1;
return cljs$core$async$mix_$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33507 = f__32606__auto__();
(statearr_33507[(6)] = c__32605__auto___34518);

return statearr_33507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34587 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34587(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34588 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34588(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34589 = (function() {
var G__34590 = null;
var G__34590__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34590__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34590 = function(p,v){
switch(arguments.length){
case 1:
return G__34590__1.call(this,p);
case 2:
return G__34590__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34590.cljs$core$IFn$_invoke$arity$1 = G__34590__1;
G__34590.cljs$core$IFn$_invoke$arity$2 = G__34590__2;
return G__34590;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33509 = arguments.length;
switch (G__33509) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34589(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34589(p,v);
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
cljs.core.async.t_cljs$core$async33513 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33514){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33514 = meta33514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33515,meta33514__$1){
var self__ = this;
var _33515__$1 = this;
return (new cljs.core.async.t_cljs$core$async33513(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33514__$1));
}));

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33515){
var self__ = this;
var _33515__$1 = this;
return self__.meta33514;
}));

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33513.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33514","meta33514",316655491,null)], null);
}));

(cljs.core.async.t_cljs$core$async33513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33513");

(cljs.core.async.t_cljs$core$async33513.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33513.
 */
cljs.core.async.__GT_t_cljs$core$async33513 = (function cljs$core$async$__GT_t_cljs$core$async33513(ch,topic_fn,buf_fn,mults,ensure_mult,meta33514){
return (new cljs.core.async.t_cljs$core$async33513(ch,topic_fn,buf_fn,mults,ensure_mult,meta33514));
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
var G__33512 = arguments.length;
switch (G__33512) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33510_SHARP_){
if(cljs.core.truth_((p1__33510_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33510_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33510_SHARP_.call(null,topic)))){
return p1__33510_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33510_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33513(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32605__auto___34593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33587){
var state_val_33588 = (state_33587[(1)]);
if((state_val_33588 === (7))){
var inst_33583 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33589_34594 = state_33587__$1;
(statearr_33589_34594[(2)] = inst_33583);

(statearr_33589_34594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (20))){
var state_33587__$1 = state_33587;
var statearr_33590_34596 = state_33587__$1;
(statearr_33590_34596[(2)] = null);

(statearr_33590_34596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (1))){
var state_33587__$1 = state_33587;
var statearr_33591_34598 = state_33587__$1;
(statearr_33591_34598[(2)] = null);

(statearr_33591_34598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (24))){
var inst_33566 = (state_33587[(7)]);
var inst_33575 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33566);
var state_33587__$1 = state_33587;
var statearr_33592_34600 = state_33587__$1;
(statearr_33592_34600[(2)] = inst_33575);

(statearr_33592_34600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (4))){
var inst_33518 = (state_33587[(8)]);
var inst_33518__$1 = (state_33587[(2)]);
var inst_33519 = (inst_33518__$1 == null);
var state_33587__$1 = (function (){var statearr_33593 = state_33587;
(statearr_33593[(8)] = inst_33518__$1);

return statearr_33593;
})();
if(cljs.core.truth_(inst_33519)){
var statearr_33594_34602 = state_33587__$1;
(statearr_33594_34602[(1)] = (5));

} else {
var statearr_33595_34603 = state_33587__$1;
(statearr_33595_34603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (15))){
var inst_33560 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33596_34604 = state_33587__$1;
(statearr_33596_34604[(2)] = inst_33560);

(statearr_33596_34604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (21))){
var inst_33580 = (state_33587[(2)]);
var state_33587__$1 = (function (){var statearr_33597 = state_33587;
(statearr_33597[(9)] = inst_33580);

return statearr_33597;
})();
var statearr_33598_34606 = state_33587__$1;
(statearr_33598_34606[(2)] = null);

(statearr_33598_34606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (13))){
var inst_33542 = (state_33587[(10)]);
var inst_33544 = cljs.core.chunked_seq_QMARK_(inst_33542);
var state_33587__$1 = state_33587;
if(inst_33544){
var statearr_33599_34608 = state_33587__$1;
(statearr_33599_34608[(1)] = (16));

} else {
var statearr_33600_34609 = state_33587__$1;
(statearr_33600_34609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (22))){
var inst_33572 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
if(cljs.core.truth_(inst_33572)){
var statearr_33601_34610 = state_33587__$1;
(statearr_33601_34610[(1)] = (23));

} else {
var statearr_33602_34612 = state_33587__$1;
(statearr_33602_34612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (6))){
var inst_33518 = (state_33587[(8)]);
var inst_33566 = (state_33587[(7)]);
var inst_33568 = (state_33587[(11)]);
var inst_33566__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33518) : topic_fn.call(null,inst_33518));
var inst_33567 = cljs.core.deref(mults);
var inst_33568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33567,inst_33566__$1);
var state_33587__$1 = (function (){var statearr_33603 = state_33587;
(statearr_33603[(7)] = inst_33566__$1);

(statearr_33603[(11)] = inst_33568__$1);

return statearr_33603;
})();
if(cljs.core.truth_(inst_33568__$1)){
var statearr_33604_34613 = state_33587__$1;
(statearr_33604_34613[(1)] = (19));

} else {
var statearr_33605_34614 = state_33587__$1;
(statearr_33605_34614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (25))){
var inst_33577 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33606_34615 = state_33587__$1;
(statearr_33606_34615[(2)] = inst_33577);

(statearr_33606_34615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (17))){
var inst_33542 = (state_33587[(10)]);
var inst_33551 = cljs.core.first(inst_33542);
var inst_33552 = cljs.core.async.muxch_STAR_(inst_33551);
var inst_33553 = cljs.core.async.close_BANG_(inst_33552);
var inst_33554 = cljs.core.next(inst_33542);
var inst_33528 = inst_33554;
var inst_33529 = null;
var inst_33530 = (0);
var inst_33531 = (0);
var state_33587__$1 = (function (){var statearr_33607 = state_33587;
(statearr_33607[(12)] = inst_33553);

(statearr_33607[(13)] = inst_33528);

(statearr_33607[(14)] = inst_33529);

(statearr_33607[(15)] = inst_33530);

(statearr_33607[(16)] = inst_33531);

return statearr_33607;
})();
var statearr_33608_34616 = state_33587__$1;
(statearr_33608_34616[(2)] = null);

(statearr_33608_34616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (3))){
var inst_33585 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33587__$1,inst_33585);
} else {
if((state_val_33588 === (12))){
var inst_33562 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33609_34618 = state_33587__$1;
(statearr_33609_34618[(2)] = inst_33562);

(statearr_33609_34618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (2))){
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33587__$1,(4),ch);
} else {
if((state_val_33588 === (23))){
var state_33587__$1 = state_33587;
var statearr_33610_34619 = state_33587__$1;
(statearr_33610_34619[(2)] = null);

(statearr_33610_34619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (19))){
var inst_33568 = (state_33587[(11)]);
var inst_33518 = (state_33587[(8)]);
var inst_33570 = cljs.core.async.muxch_STAR_(inst_33568);
var state_33587__$1 = state_33587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33587__$1,(22),inst_33570,inst_33518);
} else {
if((state_val_33588 === (11))){
var inst_33528 = (state_33587[(13)]);
var inst_33542 = (state_33587[(10)]);
var inst_33542__$1 = cljs.core.seq(inst_33528);
var state_33587__$1 = (function (){var statearr_33611 = state_33587;
(statearr_33611[(10)] = inst_33542__$1);

return statearr_33611;
})();
if(inst_33542__$1){
var statearr_33612_34621 = state_33587__$1;
(statearr_33612_34621[(1)] = (13));

} else {
var statearr_33613_34622 = state_33587__$1;
(statearr_33613_34622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (9))){
var inst_33564 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33614_34624 = state_33587__$1;
(statearr_33614_34624[(2)] = inst_33564);

(statearr_33614_34624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (5))){
var inst_33525 = cljs.core.deref(mults);
var inst_33526 = cljs.core.vals(inst_33525);
var inst_33527 = cljs.core.seq(inst_33526);
var inst_33528 = inst_33527;
var inst_33529 = null;
var inst_33530 = (0);
var inst_33531 = (0);
var state_33587__$1 = (function (){var statearr_33615 = state_33587;
(statearr_33615[(13)] = inst_33528);

(statearr_33615[(14)] = inst_33529);

(statearr_33615[(15)] = inst_33530);

(statearr_33615[(16)] = inst_33531);

return statearr_33615;
})();
var statearr_33616_34627 = state_33587__$1;
(statearr_33616_34627[(2)] = null);

(statearr_33616_34627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (14))){
var state_33587__$1 = state_33587;
var statearr_33620_34628 = state_33587__$1;
(statearr_33620_34628[(2)] = null);

(statearr_33620_34628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (16))){
var inst_33542 = (state_33587[(10)]);
var inst_33546 = cljs.core.chunk_first(inst_33542);
var inst_33547 = cljs.core.chunk_rest(inst_33542);
var inst_33548 = cljs.core.count(inst_33546);
var inst_33528 = inst_33547;
var inst_33529 = inst_33546;
var inst_33530 = inst_33548;
var inst_33531 = (0);
var state_33587__$1 = (function (){var statearr_33621 = state_33587;
(statearr_33621[(13)] = inst_33528);

(statearr_33621[(14)] = inst_33529);

(statearr_33621[(15)] = inst_33530);

(statearr_33621[(16)] = inst_33531);

return statearr_33621;
})();
var statearr_33622_34630 = state_33587__$1;
(statearr_33622_34630[(2)] = null);

(statearr_33622_34630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (10))){
var inst_33529 = (state_33587[(14)]);
var inst_33531 = (state_33587[(16)]);
var inst_33528 = (state_33587[(13)]);
var inst_33530 = (state_33587[(15)]);
var inst_33536 = cljs.core._nth(inst_33529,inst_33531);
var inst_33537 = cljs.core.async.muxch_STAR_(inst_33536);
var inst_33538 = cljs.core.async.close_BANG_(inst_33537);
var inst_33539 = (inst_33531 + (1));
var tmp33617 = inst_33528;
var tmp33618 = inst_33529;
var tmp33619 = inst_33530;
var inst_33528__$1 = tmp33617;
var inst_33529__$1 = tmp33618;
var inst_33530__$1 = tmp33619;
var inst_33531__$1 = inst_33539;
var state_33587__$1 = (function (){var statearr_33623 = state_33587;
(statearr_33623[(17)] = inst_33538);

(statearr_33623[(13)] = inst_33528__$1);

(statearr_33623[(14)] = inst_33529__$1);

(statearr_33623[(15)] = inst_33530__$1);

(statearr_33623[(16)] = inst_33531__$1);

return statearr_33623;
})();
var statearr_33624_34631 = state_33587__$1;
(statearr_33624_34631[(2)] = null);

(statearr_33624_34631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (18))){
var inst_33557 = (state_33587[(2)]);
var state_33587__$1 = state_33587;
var statearr_33625_34632 = state_33587__$1;
(statearr_33625_34632[(2)] = inst_33557);

(statearr_33625_34632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33588 === (8))){
var inst_33531 = (state_33587[(16)]);
var inst_33530 = (state_33587[(15)]);
var inst_33533 = (inst_33531 < inst_33530);
var inst_33534 = inst_33533;
var state_33587__$1 = state_33587;
if(cljs.core.truth_(inst_33534)){
var statearr_33626_34633 = state_33587__$1;
(statearr_33626_34633[(1)] = (10));

} else {
var statearr_33627_34634 = state_33587__$1;
(statearr_33627_34634[(1)] = (11));

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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33628[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33628[(1)] = (1));

return statearr_33628;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_33587){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33587);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33629){var ex__32538__auto__ = e33629;
var statearr_33630_34636 = state_33587;
(statearr_33630_34636[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33587[(4)]))){
var statearr_33631_34637 = state_33587;
(statearr_33631_34637[(1)] = cljs.core.first((state_33587[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_33587;
state_33587 = G__34638;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_33587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_33587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33632 = f__32606__auto__();
(statearr_33632[(6)] = c__32605__auto___34593);

return statearr_33632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
var G__33634 = arguments.length;
switch (G__33634) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__33636 = arguments.length;
switch (G__33636) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__33638 = arguments.length;
switch (G__33638) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__32605__auto___34649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33681){
var state_val_33682 = (state_33681[(1)]);
if((state_val_33682 === (7))){
var state_33681__$1 = state_33681;
var statearr_33683_34650 = state_33681__$1;
(statearr_33683_34650[(2)] = null);

(statearr_33683_34650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (1))){
var state_33681__$1 = state_33681;
var statearr_33684_34651 = state_33681__$1;
(statearr_33684_34651[(2)] = null);

(statearr_33684_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (4))){
var inst_33642 = (state_33681[(7)]);
var inst_33641 = (state_33681[(8)]);
var inst_33644 = (inst_33642 < inst_33641);
var state_33681__$1 = state_33681;
if(cljs.core.truth_(inst_33644)){
var statearr_33685_34652 = state_33681__$1;
(statearr_33685_34652[(1)] = (6));

} else {
var statearr_33686_34653 = state_33681__$1;
(statearr_33686_34653[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (15))){
var inst_33667 = (state_33681[(9)]);
var inst_33672 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33667);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33681__$1,(17),out,inst_33672);
} else {
if((state_val_33682 === (13))){
var inst_33667 = (state_33681[(9)]);
var inst_33667__$1 = (state_33681[(2)]);
var inst_33668 = cljs.core.some(cljs.core.nil_QMARK_,inst_33667__$1);
var state_33681__$1 = (function (){var statearr_33687 = state_33681;
(statearr_33687[(9)] = inst_33667__$1);

return statearr_33687;
})();
if(cljs.core.truth_(inst_33668)){
var statearr_33688_34654 = state_33681__$1;
(statearr_33688_34654[(1)] = (14));

} else {
var statearr_33689_34655 = state_33681__$1;
(statearr_33689_34655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (6))){
var state_33681__$1 = state_33681;
var statearr_33690_34656 = state_33681__$1;
(statearr_33690_34656[(2)] = null);

(statearr_33690_34656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (17))){
var inst_33674 = (state_33681[(2)]);
var state_33681__$1 = (function (){var statearr_33692 = state_33681;
(statearr_33692[(10)] = inst_33674);

return statearr_33692;
})();
var statearr_33693_34658 = state_33681__$1;
(statearr_33693_34658[(2)] = null);

(statearr_33693_34658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (3))){
var inst_33679 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33681__$1,inst_33679);
} else {
if((state_val_33682 === (12))){
var _ = (function (){var statearr_33694 = state_33681;
(statearr_33694[(4)] = cljs.core.rest((state_33681[(4)])));

return statearr_33694;
})();
var state_33681__$1 = state_33681;
var ex33691 = (state_33681__$1[(2)]);
var statearr_33695_34660 = state_33681__$1;
(statearr_33695_34660[(5)] = ex33691);


if((ex33691 instanceof Object)){
var statearr_33696_34661 = state_33681__$1;
(statearr_33696_34661[(1)] = (11));

(statearr_33696_34661[(5)] = null);

} else {
throw ex33691;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (2))){
var inst_33640 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33641 = cnt;
var inst_33642 = (0);
var state_33681__$1 = (function (){var statearr_33697 = state_33681;
(statearr_33697[(11)] = inst_33640);

(statearr_33697[(8)] = inst_33641);

(statearr_33697[(7)] = inst_33642);

return statearr_33697;
})();
var statearr_33698_34662 = state_33681__$1;
(statearr_33698_34662[(2)] = null);

(statearr_33698_34662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (11))){
var inst_33646 = (state_33681[(2)]);
var inst_33647 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33681__$1 = (function (){var statearr_33699 = state_33681;
(statearr_33699[(12)] = inst_33646);

return statearr_33699;
})();
var statearr_33700_34663 = state_33681__$1;
(statearr_33700_34663[(2)] = inst_33647);

(statearr_33700_34663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (9))){
var inst_33642 = (state_33681[(7)]);
var _ = (function (){var statearr_33701 = state_33681;
(statearr_33701[(4)] = cljs.core.cons((12),(state_33681[(4)])));

return statearr_33701;
})();
var inst_33653 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33642) : chs__$1.call(null,inst_33642));
var inst_33654 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33642) : done.call(null,inst_33642));
var inst_33655 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33653,inst_33654);
var ___$1 = (function (){var statearr_33702 = state_33681;
(statearr_33702[(4)] = cljs.core.rest((state_33681[(4)])));

return statearr_33702;
})();
var state_33681__$1 = state_33681;
var statearr_33703_34664 = state_33681__$1;
(statearr_33703_34664[(2)] = inst_33655);

(statearr_33703_34664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (5))){
var inst_33665 = (state_33681[(2)]);
var state_33681__$1 = (function (){var statearr_33704 = state_33681;
(statearr_33704[(13)] = inst_33665);

return statearr_33704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33681__$1,(13),dchan);
} else {
if((state_val_33682 === (14))){
var inst_33670 = cljs.core.async.close_BANG_(out);
var state_33681__$1 = state_33681;
var statearr_33705_34665 = state_33681__$1;
(statearr_33705_34665[(2)] = inst_33670);

(statearr_33705_34665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (16))){
var inst_33677 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33706_34666 = state_33681__$1;
(statearr_33706_34666[(2)] = inst_33677);

(statearr_33706_34666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (10))){
var inst_33642 = (state_33681[(7)]);
var inst_33658 = (state_33681[(2)]);
var inst_33659 = (inst_33642 + (1));
var inst_33642__$1 = inst_33659;
var state_33681__$1 = (function (){var statearr_33707 = state_33681;
(statearr_33707[(14)] = inst_33658);

(statearr_33707[(7)] = inst_33642__$1);

return statearr_33707;
})();
var statearr_33708_34667 = state_33681__$1;
(statearr_33708_34667[(2)] = null);

(statearr_33708_34667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33682 === (8))){
var inst_33663 = (state_33681[(2)]);
var state_33681__$1 = state_33681;
var statearr_33709_34668 = state_33681__$1;
(statearr_33709_34668[(2)] = inst_33663);

(statearr_33709_34668[(1)] = (5));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33710[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33710[(1)] = (1));

return statearr_33710;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_33681){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33681);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33711){var ex__32538__auto__ = e33711;
var statearr_33712_34669 = state_33681;
(statearr_33712_34669[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33681[(4)]))){
var statearr_33713_34670 = state_33681;
(statearr_33713_34670[(1)] = cljs.core.first((state_33681[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34671 = state_33681;
state_33681 = G__34671;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_33681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_33681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33714 = f__32606__auto__();
(statearr_33714[(6)] = c__32605__auto___34649);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
var G__33717 = arguments.length;
switch (G__33717) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32605__auto___34679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33749){
var state_val_33750 = (state_33749[(1)]);
if((state_val_33750 === (7))){
var inst_33728 = (state_33749[(7)]);
var inst_33729 = (state_33749[(8)]);
var inst_33728__$1 = (state_33749[(2)]);
var inst_33729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33728__$1,(0),null);
var inst_33730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33728__$1,(1),null);
var inst_33731 = (inst_33729__$1 == null);
var state_33749__$1 = (function (){var statearr_33751 = state_33749;
(statearr_33751[(7)] = inst_33728__$1);

(statearr_33751[(8)] = inst_33729__$1);

(statearr_33751[(9)] = inst_33730);

return statearr_33751;
})();
if(cljs.core.truth_(inst_33731)){
var statearr_33752_34680 = state_33749__$1;
(statearr_33752_34680[(1)] = (8));

} else {
var statearr_33753_34681 = state_33749__$1;
(statearr_33753_34681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (1))){
var inst_33718 = cljs.core.vec(chs);
var inst_33719 = inst_33718;
var state_33749__$1 = (function (){var statearr_33754 = state_33749;
(statearr_33754[(10)] = inst_33719);

return statearr_33754;
})();
var statearr_33755_34682 = state_33749__$1;
(statearr_33755_34682[(2)] = null);

(statearr_33755_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (4))){
var inst_33719 = (state_33749[(10)]);
var state_33749__$1 = state_33749;
return cljs.core.async.ioc_alts_BANG_(state_33749__$1,(7),inst_33719);
} else {
if((state_val_33750 === (6))){
var inst_33745 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
var statearr_33756_34683 = state_33749__$1;
(statearr_33756_34683[(2)] = inst_33745);

(statearr_33756_34683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (3))){
var inst_33747 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33749__$1,inst_33747);
} else {
if((state_val_33750 === (2))){
var inst_33719 = (state_33749[(10)]);
var inst_33721 = cljs.core.count(inst_33719);
var inst_33722 = (inst_33721 > (0));
var state_33749__$1 = state_33749;
if(cljs.core.truth_(inst_33722)){
var statearr_33758_34684 = state_33749__$1;
(statearr_33758_34684[(1)] = (4));

} else {
var statearr_33759_34685 = state_33749__$1;
(statearr_33759_34685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (11))){
var inst_33719 = (state_33749[(10)]);
var inst_33738 = (state_33749[(2)]);
var tmp33757 = inst_33719;
var inst_33719__$1 = tmp33757;
var state_33749__$1 = (function (){var statearr_33760 = state_33749;
(statearr_33760[(11)] = inst_33738);

(statearr_33760[(10)] = inst_33719__$1);

return statearr_33760;
})();
var statearr_33761_34686 = state_33749__$1;
(statearr_33761_34686[(2)] = null);

(statearr_33761_34686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (9))){
var inst_33729 = (state_33749[(8)]);
var state_33749__$1 = state_33749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33749__$1,(11),out,inst_33729);
} else {
if((state_val_33750 === (5))){
var inst_33743 = cljs.core.async.close_BANG_(out);
var state_33749__$1 = state_33749;
var statearr_33762_34687 = state_33749__$1;
(statearr_33762_34687[(2)] = inst_33743);

(statearr_33762_34687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (10))){
var inst_33741 = (state_33749[(2)]);
var state_33749__$1 = state_33749;
var statearr_33763_34688 = state_33749__$1;
(statearr_33763_34688[(2)] = inst_33741);

(statearr_33763_34688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33750 === (8))){
var inst_33719 = (state_33749[(10)]);
var inst_33728 = (state_33749[(7)]);
var inst_33729 = (state_33749[(8)]);
var inst_33730 = (state_33749[(9)]);
var inst_33733 = (function (){var cs = inst_33719;
var vec__33724 = inst_33728;
var v = inst_33729;
var c = inst_33730;
return (function (p1__33715_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33715_SHARP_);
});
})();
var inst_33734 = cljs.core.filterv(inst_33733,inst_33719);
var inst_33719__$1 = inst_33734;
var state_33749__$1 = (function (){var statearr_33764 = state_33749;
(statearr_33764[(10)] = inst_33719__$1);

return statearr_33764;
})();
var statearr_33765_34689 = state_33749__$1;
(statearr_33765_34689[(2)] = null);

(statearr_33765_34689[(1)] = (2));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33766[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33766[(1)] = (1));

return statearr_33766;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_33749){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33749);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33767){var ex__32538__auto__ = e33767;
var statearr_33768_34690 = state_33749;
(statearr_33768_34690[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33749[(4)]))){
var statearr_33769_34691 = state_33749;
(statearr_33769_34691[(1)] = cljs.core.first((state_33749[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34692 = state_33749;
state_33749 = G__34692;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_33749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_33749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33770 = f__32606__auto__();
(statearr_33770[(6)] = c__32605__auto___34679);

return statearr_33770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
var G__33772 = arguments.length;
switch (G__33772) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32605__auto___34700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33796){
var state_val_33797 = (state_33796[(1)]);
if((state_val_33797 === (7))){
var inst_33778 = (state_33796[(7)]);
var inst_33778__$1 = (state_33796[(2)]);
var inst_33779 = (inst_33778__$1 == null);
var inst_33780 = cljs.core.not(inst_33779);
var state_33796__$1 = (function (){var statearr_33798 = state_33796;
(statearr_33798[(7)] = inst_33778__$1);

return statearr_33798;
})();
if(inst_33780){
var statearr_33799_34701 = state_33796__$1;
(statearr_33799_34701[(1)] = (8));

} else {
var statearr_33800_34702 = state_33796__$1;
(statearr_33800_34702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (1))){
var inst_33773 = (0);
var state_33796__$1 = (function (){var statearr_33801 = state_33796;
(statearr_33801[(8)] = inst_33773);

return statearr_33801;
})();
var statearr_33802_34703 = state_33796__$1;
(statearr_33802_34703[(2)] = null);

(statearr_33802_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (4))){
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33796__$1,(7),ch);
} else {
if((state_val_33797 === (6))){
var inst_33791 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33803_34704 = state_33796__$1;
(statearr_33803_34704[(2)] = inst_33791);

(statearr_33803_34704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (3))){
var inst_33793 = (state_33796[(2)]);
var inst_33794 = cljs.core.async.close_BANG_(out);
var state_33796__$1 = (function (){var statearr_33804 = state_33796;
(statearr_33804[(9)] = inst_33793);

return statearr_33804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33796__$1,inst_33794);
} else {
if((state_val_33797 === (2))){
var inst_33773 = (state_33796[(8)]);
var inst_33775 = (inst_33773 < n);
var state_33796__$1 = state_33796;
if(cljs.core.truth_(inst_33775)){
var statearr_33805_34705 = state_33796__$1;
(statearr_33805_34705[(1)] = (4));

} else {
var statearr_33806_34706 = state_33796__$1;
(statearr_33806_34706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (11))){
var inst_33773 = (state_33796[(8)]);
var inst_33783 = (state_33796[(2)]);
var inst_33784 = (inst_33773 + (1));
var inst_33773__$1 = inst_33784;
var state_33796__$1 = (function (){var statearr_33807 = state_33796;
(statearr_33807[(10)] = inst_33783);

(statearr_33807[(8)] = inst_33773__$1);

return statearr_33807;
})();
var statearr_33808_34707 = state_33796__$1;
(statearr_33808_34707[(2)] = null);

(statearr_33808_34707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (9))){
var state_33796__$1 = state_33796;
var statearr_33809_34708 = state_33796__$1;
(statearr_33809_34708[(2)] = null);

(statearr_33809_34708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (5))){
var state_33796__$1 = state_33796;
var statearr_33810_34709 = state_33796__$1;
(statearr_33810_34709[(2)] = null);

(statearr_33810_34709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (10))){
var inst_33788 = (state_33796[(2)]);
var state_33796__$1 = state_33796;
var statearr_33811_34712 = state_33796__$1;
(statearr_33811_34712[(2)] = inst_33788);

(statearr_33811_34712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33797 === (8))){
var inst_33778 = (state_33796[(7)]);
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33796__$1,(11),out,inst_33778);
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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33812[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33812[(1)] = (1));

return statearr_33812;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_33796){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33796);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33813){var ex__32538__auto__ = e33813;
var statearr_33814_34713 = state_33796;
(statearr_33814_34713[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33796[(4)]))){
var statearr_33815_34714 = state_33796;
(statearr_33815_34714[(1)] = cljs.core.first((state_33796[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34715 = state_33796;
state_33796 = G__34715;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_33796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_33796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33816 = f__32606__auto__();
(statearr_33816[(6)] = c__32605__auto___34700);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
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
cljs.core.async.t_cljs$core$async33821 = (function (f,ch,meta33819,_,fn1,meta33822){
this.f = f;
this.ch = ch;
this.meta33819 = meta33819;
this._ = _;
this.fn1 = fn1;
this.meta33822 = meta33822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33823,meta33822__$1){
var self__ = this;
var _33823__$1 = this;
return (new cljs.core.async.t_cljs$core$async33821(self__.f,self__.ch,self__.meta33819,self__._,self__.fn1,meta33822__$1));
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33823){
var self__ = this;
var _33823__$1 = this;
return self__.meta33822;
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33817_SHARP_){
var G__33824 = (((p1__33817_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33817_SHARP_) : self__.f.call(null,p1__33817_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33824) : f1.call(null,G__33824));
});
}));

(cljs.core.async.t_cljs$core$async33821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33819","meta33819",-864166184,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33818","cljs.core.async/t_cljs$core$async33818",180292145,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33822","meta33822",334043475,null)], null);
}));

(cljs.core.async.t_cljs$core$async33821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33821");

(cljs.core.async.t_cljs$core$async33821.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33821.
 */
cljs.core.async.__GT_t_cljs$core$async33821 = (function cljs$core$async$__GT_t_cljs$core$async33821(f,ch,meta33819,_,fn1,meta33822){
return (new cljs.core.async.t_cljs$core$async33821(f,ch,meta33819,_,fn1,meta33822));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33818 = (function (f,ch,meta33819){
this.f = f;
this.ch = ch;
this.meta33819 = meta33819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33820,meta33819__$1){
var self__ = this;
var _33820__$1 = this;
return (new cljs.core.async.t_cljs$core$async33818(self__.f,self__.ch,meta33819__$1));
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33820){
var self__ = this;
var _33820__$1 = this;
return self__.meta33819;
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33821(self__.f,self__.ch,self__.meta33819,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33825 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33825) : self__.f.call(null,G__33825));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33819","meta33819",-864166184,null)], null);
}));

(cljs.core.async.t_cljs$core$async33818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33818");

(cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33818.
 */
cljs.core.async.__GT_t_cljs$core$async33818 = (function cljs$core$async$__GT_t_cljs$core$async33818(f,ch,meta33819){
return (new cljs.core.async.t_cljs$core$async33818(f,ch,meta33819));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33818(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33826 = (function (f,ch,meta33827){
this.f = f;
this.ch = ch;
this.meta33827 = meta33827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33828,meta33827__$1){
var self__ = this;
var _33828__$1 = this;
return (new cljs.core.async.t_cljs$core$async33826(self__.f,self__.ch,meta33827__$1));
}));

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33828){
var self__ = this;
var _33828__$1 = this;
return self__.meta33827;
}));

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33827","meta33827",309907925,null)], null);
}));

(cljs.core.async.t_cljs$core$async33826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33826");

(cljs.core.async.t_cljs$core$async33826.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33826.
 */
cljs.core.async.__GT_t_cljs$core$async33826 = (function cljs$core$async$__GT_t_cljs$core$async33826(f,ch,meta33827){
return (new cljs.core.async.t_cljs$core$async33826(f,ch,meta33827));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33829 = (function (p,ch,meta33830){
this.p = p;
this.ch = ch;
this.meta33830 = meta33830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33831,meta33830__$1){
var self__ = this;
var _33831__$1 = this;
return (new cljs.core.async.t_cljs$core$async33829(self__.p,self__.ch,meta33830__$1));
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33831){
var self__ = this;
var _33831__$1 = this;
return self__.meta33830;
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33830","meta33830",710139749,null)], null);
}));

(cljs.core.async.t_cljs$core$async33829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33829");

(cljs.core.async.t_cljs$core$async33829.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async33829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33829.
 */
cljs.core.async.__GT_t_cljs$core$async33829 = (function cljs$core$async$__GT_t_cljs$core$async33829(p,ch,meta33830){
return (new cljs.core.async.t_cljs$core$async33829(p,ch,meta33830));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33829(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33833 = arguments.length;
switch (G__33833) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32605__auto___34721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33854){
var state_val_33855 = (state_33854[(1)]);
if((state_val_33855 === (7))){
var inst_33850 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33856_34722 = state_33854__$1;
(statearr_33856_34722[(2)] = inst_33850);

(statearr_33856_34722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (1))){
var state_33854__$1 = state_33854;
var statearr_33857_34723 = state_33854__$1;
(statearr_33857_34723[(2)] = null);

(statearr_33857_34723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (4))){
var inst_33836 = (state_33854[(7)]);
var inst_33836__$1 = (state_33854[(2)]);
var inst_33837 = (inst_33836__$1 == null);
var state_33854__$1 = (function (){var statearr_33858 = state_33854;
(statearr_33858[(7)] = inst_33836__$1);

return statearr_33858;
})();
if(cljs.core.truth_(inst_33837)){
var statearr_33859_34724 = state_33854__$1;
(statearr_33859_34724[(1)] = (5));

} else {
var statearr_33860_34725 = state_33854__$1;
(statearr_33860_34725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (6))){
var inst_33836 = (state_33854[(7)]);
var inst_33841 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33836) : p.call(null,inst_33836));
var state_33854__$1 = state_33854;
if(cljs.core.truth_(inst_33841)){
var statearr_33861_34726 = state_33854__$1;
(statearr_33861_34726[(1)] = (8));

} else {
var statearr_33862_34727 = state_33854__$1;
(statearr_33862_34727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (3))){
var inst_33852 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33854__$1,inst_33852);
} else {
if((state_val_33855 === (2))){
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33854__$1,(4),ch);
} else {
if((state_val_33855 === (11))){
var inst_33844 = (state_33854[(2)]);
var state_33854__$1 = state_33854;
var statearr_33863_34728 = state_33854__$1;
(statearr_33863_34728[(2)] = inst_33844);

(statearr_33863_34728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (9))){
var state_33854__$1 = state_33854;
var statearr_33864_34730 = state_33854__$1;
(statearr_33864_34730[(2)] = null);

(statearr_33864_34730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (5))){
var inst_33839 = cljs.core.async.close_BANG_(out);
var state_33854__$1 = state_33854;
var statearr_33865_34731 = state_33854__$1;
(statearr_33865_34731[(2)] = inst_33839);

(statearr_33865_34731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (10))){
var inst_33847 = (state_33854[(2)]);
var state_33854__$1 = (function (){var statearr_33866 = state_33854;
(statearr_33866[(8)] = inst_33847);

return statearr_33866;
})();
var statearr_33867_34732 = state_33854__$1;
(statearr_33867_34732[(2)] = null);

(statearr_33867_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33855 === (8))){
var inst_33836 = (state_33854[(7)]);
var state_33854__$1 = state_33854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33854__$1,(11),out,inst_33836);
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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_33868 = [null,null,null,null,null,null,null,null,null];
(statearr_33868[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_33868[(1)] = (1));

return statearr_33868;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_33854){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33854);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33869){var ex__32538__auto__ = e33869;
var statearr_33870_34733 = state_33854;
(statearr_33870_34733[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33854[(4)]))){
var statearr_33871_34734 = state_33854;
(statearr_33871_34734[(1)] = cljs.core.first((state_33854[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34735 = state_33854;
state_33854 = G__34735;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_33854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_33854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33872 = f__32606__auto__();
(statearr_33872[(6)] = c__32605__auto___34721);

return statearr_33872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33874 = arguments.length;
switch (G__33874) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__32605__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_33936){
var state_val_33937 = (state_33936[(1)]);
if((state_val_33937 === (7))){
var inst_33932 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
var statearr_33938_34737 = state_33936__$1;
(statearr_33938_34737[(2)] = inst_33932);

(statearr_33938_34737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (20))){
var inst_33902 = (state_33936[(7)]);
var inst_33913 = (state_33936[(2)]);
var inst_33914 = cljs.core.next(inst_33902);
var inst_33888 = inst_33914;
var inst_33889 = null;
var inst_33890 = (0);
var inst_33891 = (0);
var state_33936__$1 = (function (){var statearr_33939 = state_33936;
(statearr_33939[(8)] = inst_33913);

(statearr_33939[(9)] = inst_33888);

(statearr_33939[(10)] = inst_33889);

(statearr_33939[(11)] = inst_33890);

(statearr_33939[(12)] = inst_33891);

return statearr_33939;
})();
var statearr_33940_34738 = state_33936__$1;
(statearr_33940_34738[(2)] = null);

(statearr_33940_34738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (1))){
var state_33936__$1 = state_33936;
var statearr_33941_34739 = state_33936__$1;
(statearr_33941_34739[(2)] = null);

(statearr_33941_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (4))){
var inst_33877 = (state_33936[(13)]);
var inst_33877__$1 = (state_33936[(2)]);
var inst_33878 = (inst_33877__$1 == null);
var state_33936__$1 = (function (){var statearr_33942 = state_33936;
(statearr_33942[(13)] = inst_33877__$1);

return statearr_33942;
})();
if(cljs.core.truth_(inst_33878)){
var statearr_33943_34740 = state_33936__$1;
(statearr_33943_34740[(1)] = (5));

} else {
var statearr_33944_34741 = state_33936__$1;
(statearr_33944_34741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (15))){
var state_33936__$1 = state_33936;
var statearr_33948_34742 = state_33936__$1;
(statearr_33948_34742[(2)] = null);

(statearr_33948_34742[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (21))){
var state_33936__$1 = state_33936;
var statearr_33949_34743 = state_33936__$1;
(statearr_33949_34743[(2)] = null);

(statearr_33949_34743[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (13))){
var inst_33891 = (state_33936[(12)]);
var inst_33888 = (state_33936[(9)]);
var inst_33889 = (state_33936[(10)]);
var inst_33890 = (state_33936[(11)]);
var inst_33898 = (state_33936[(2)]);
var inst_33899 = (inst_33891 + (1));
var tmp33945 = inst_33890;
var tmp33946 = inst_33888;
var tmp33947 = inst_33889;
var inst_33888__$1 = tmp33946;
var inst_33889__$1 = tmp33947;
var inst_33890__$1 = tmp33945;
var inst_33891__$1 = inst_33899;
var state_33936__$1 = (function (){var statearr_33950 = state_33936;
(statearr_33950[(14)] = inst_33898);

(statearr_33950[(9)] = inst_33888__$1);

(statearr_33950[(10)] = inst_33889__$1);

(statearr_33950[(11)] = inst_33890__$1);

(statearr_33950[(12)] = inst_33891__$1);

return statearr_33950;
})();
var statearr_33951_34751 = state_33936__$1;
(statearr_33951_34751[(2)] = null);

(statearr_33951_34751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (22))){
var state_33936__$1 = state_33936;
var statearr_33952_34752 = state_33936__$1;
(statearr_33952_34752[(2)] = null);

(statearr_33952_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (6))){
var inst_33877 = (state_33936[(13)]);
var inst_33886 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33877) : f.call(null,inst_33877));
var inst_33887 = cljs.core.seq(inst_33886);
var inst_33888 = inst_33887;
var inst_33889 = null;
var inst_33890 = (0);
var inst_33891 = (0);
var state_33936__$1 = (function (){var statearr_33953 = state_33936;
(statearr_33953[(9)] = inst_33888);

(statearr_33953[(10)] = inst_33889);

(statearr_33953[(11)] = inst_33890);

(statearr_33953[(12)] = inst_33891);

return statearr_33953;
})();
var statearr_33954_34753 = state_33936__$1;
(statearr_33954_34753[(2)] = null);

(statearr_33954_34753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (17))){
var inst_33902 = (state_33936[(7)]);
var inst_33906 = cljs.core.chunk_first(inst_33902);
var inst_33907 = cljs.core.chunk_rest(inst_33902);
var inst_33908 = cljs.core.count(inst_33906);
var inst_33888 = inst_33907;
var inst_33889 = inst_33906;
var inst_33890 = inst_33908;
var inst_33891 = (0);
var state_33936__$1 = (function (){var statearr_33955 = state_33936;
(statearr_33955[(9)] = inst_33888);

(statearr_33955[(10)] = inst_33889);

(statearr_33955[(11)] = inst_33890);

(statearr_33955[(12)] = inst_33891);

return statearr_33955;
})();
var statearr_33956_34754 = state_33936__$1;
(statearr_33956_34754[(2)] = null);

(statearr_33956_34754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (3))){
var inst_33934 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33936__$1,inst_33934);
} else {
if((state_val_33937 === (12))){
var inst_33922 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
var statearr_33957_34760 = state_33936__$1;
(statearr_33957_34760[(2)] = inst_33922);

(statearr_33957_34760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (2))){
var state_33936__$1 = state_33936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33936__$1,(4),in$);
} else {
if((state_val_33937 === (23))){
var inst_33930 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
var statearr_33958_34770 = state_33936__$1;
(statearr_33958_34770[(2)] = inst_33930);

(statearr_33958_34770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (19))){
var inst_33917 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
var statearr_33959_34771 = state_33936__$1;
(statearr_33959_34771[(2)] = inst_33917);

(statearr_33959_34771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (11))){
var inst_33888 = (state_33936[(9)]);
var inst_33902 = (state_33936[(7)]);
var inst_33902__$1 = cljs.core.seq(inst_33888);
var state_33936__$1 = (function (){var statearr_33960 = state_33936;
(statearr_33960[(7)] = inst_33902__$1);

return statearr_33960;
})();
if(inst_33902__$1){
var statearr_33961_34772 = state_33936__$1;
(statearr_33961_34772[(1)] = (14));

} else {
var statearr_33962_34773 = state_33936__$1;
(statearr_33962_34773[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (9))){
var inst_33924 = (state_33936[(2)]);
var inst_33925 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33936__$1 = (function (){var statearr_33963 = state_33936;
(statearr_33963[(15)] = inst_33924);

return statearr_33963;
})();
if(cljs.core.truth_(inst_33925)){
var statearr_33964_34774 = state_33936__$1;
(statearr_33964_34774[(1)] = (21));

} else {
var statearr_33965_34775 = state_33936__$1;
(statearr_33965_34775[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (5))){
var inst_33880 = cljs.core.async.close_BANG_(out);
var state_33936__$1 = state_33936;
var statearr_33966_34776 = state_33936__$1;
(statearr_33966_34776[(2)] = inst_33880);

(statearr_33966_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (14))){
var inst_33902 = (state_33936[(7)]);
var inst_33904 = cljs.core.chunked_seq_QMARK_(inst_33902);
var state_33936__$1 = state_33936;
if(inst_33904){
var statearr_33967_34777 = state_33936__$1;
(statearr_33967_34777[(1)] = (17));

} else {
var statearr_33968_34778 = state_33936__$1;
(statearr_33968_34778[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (16))){
var inst_33920 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
var statearr_33969_34779 = state_33936__$1;
(statearr_33969_34779[(2)] = inst_33920);

(statearr_33969_34779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (10))){
var inst_33889 = (state_33936[(10)]);
var inst_33891 = (state_33936[(12)]);
var inst_33896 = cljs.core._nth(inst_33889,inst_33891);
var state_33936__$1 = state_33936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33936__$1,(13),out,inst_33896);
} else {
if((state_val_33937 === (18))){
var inst_33902 = (state_33936[(7)]);
var inst_33911 = cljs.core.first(inst_33902);
var state_33936__$1 = state_33936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33936__$1,(20),out,inst_33911);
} else {
if((state_val_33937 === (8))){
var inst_33891 = (state_33936[(12)]);
var inst_33890 = (state_33936[(11)]);
var inst_33893 = (inst_33891 < inst_33890);
var inst_33894 = inst_33893;
var state_33936__$1 = state_33936;
if(cljs.core.truth_(inst_33894)){
var statearr_33970_34780 = state_33936__$1;
(statearr_33970_34780[(1)] = (10));

} else {
var statearr_33971_34781 = state_33936__$1;
(statearr_33971_34781[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32535__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32535__auto____0 = (function (){
var statearr_33972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33972[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32535__auto__);

(statearr_33972[(1)] = (1));

return statearr_33972;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32535__auto____1 = (function (state_33936){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_33936);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e33973){var ex__32538__auto__ = e33973;
var statearr_33974_34782 = state_33936;
(statearr_33974_34782[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_33936[(4)]))){
var statearr_33975_34783 = state_33936;
(statearr_33975_34783[(1)] = cljs.core.first((state_33936[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34784 = state_33936;
state_33936 = G__34784;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32535__auto__ = function(state_33936){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32535__auto____1.call(this,state_33936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32535__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32535__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_33976 = f__32606__auto__();
(statearr_33976[(6)] = c__32605__auto__);

return statearr_33976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));

return c__32605__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33978 = arguments.length;
switch (G__33978) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__33980 = arguments.length;
switch (G__33980) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__33982 = arguments.length;
switch (G__33982) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32605__auto___34808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_34006){
var state_val_34007 = (state_34006[(1)]);
if((state_val_34007 === (7))){
var inst_34001 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34008_34809 = state_34006__$1;
(statearr_34008_34809[(2)] = inst_34001);

(statearr_34008_34809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (1))){
var inst_33983 = null;
var state_34006__$1 = (function (){var statearr_34009 = state_34006;
(statearr_34009[(7)] = inst_33983);

return statearr_34009;
})();
var statearr_34010_34810 = state_34006__$1;
(statearr_34010_34810[(2)] = null);

(statearr_34010_34810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (4))){
var inst_33986 = (state_34006[(8)]);
var inst_33986__$1 = (state_34006[(2)]);
var inst_33987 = (inst_33986__$1 == null);
var inst_33988 = cljs.core.not(inst_33987);
var state_34006__$1 = (function (){var statearr_34011 = state_34006;
(statearr_34011[(8)] = inst_33986__$1);

return statearr_34011;
})();
if(inst_33988){
var statearr_34012_34811 = state_34006__$1;
(statearr_34012_34811[(1)] = (5));

} else {
var statearr_34013_34812 = state_34006__$1;
(statearr_34013_34812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (6))){
var state_34006__$1 = state_34006;
var statearr_34014_34813 = state_34006__$1;
(statearr_34014_34813[(2)] = null);

(statearr_34014_34813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (3))){
var inst_34003 = (state_34006[(2)]);
var inst_34004 = cljs.core.async.close_BANG_(out);
var state_34006__$1 = (function (){var statearr_34015 = state_34006;
(statearr_34015[(9)] = inst_34003);

return statearr_34015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34006__$1,inst_34004);
} else {
if((state_val_34007 === (2))){
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34006__$1,(4),ch);
} else {
if((state_val_34007 === (11))){
var inst_33986 = (state_34006[(8)]);
var inst_33995 = (state_34006[(2)]);
var inst_33983 = inst_33986;
var state_34006__$1 = (function (){var statearr_34016 = state_34006;
(statearr_34016[(10)] = inst_33995);

(statearr_34016[(7)] = inst_33983);

return statearr_34016;
})();
var statearr_34017_34814 = state_34006__$1;
(statearr_34017_34814[(2)] = null);

(statearr_34017_34814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (9))){
var inst_33986 = (state_34006[(8)]);
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34006__$1,(11),out,inst_33986);
} else {
if((state_val_34007 === (5))){
var inst_33986 = (state_34006[(8)]);
var inst_33983 = (state_34006[(7)]);
var inst_33990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33986,inst_33983);
var state_34006__$1 = state_34006;
if(inst_33990){
var statearr_34019_34815 = state_34006__$1;
(statearr_34019_34815[(1)] = (8));

} else {
var statearr_34020_34816 = state_34006__$1;
(statearr_34020_34816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (10))){
var inst_33998 = (state_34006[(2)]);
var state_34006__$1 = state_34006;
var statearr_34021_34817 = state_34006__$1;
(statearr_34021_34817[(2)] = inst_33998);

(statearr_34021_34817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34007 === (8))){
var inst_33983 = (state_34006[(7)]);
var tmp34018 = inst_33983;
var inst_33983__$1 = tmp34018;
var state_34006__$1 = (function (){var statearr_34022 = state_34006;
(statearr_34022[(7)] = inst_33983__$1);

return statearr_34022;
})();
var statearr_34023_34818 = state_34006__$1;
(statearr_34023_34818[(2)] = null);

(statearr_34023_34818[(1)] = (2));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34024[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_34006){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_34006);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e34025){var ex__32538__auto__ = e34025;
var statearr_34026_34819 = state_34006;
(statearr_34026_34819[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_34006[(4)]))){
var statearr_34027_34820 = state_34006;
(statearr_34027_34820[(1)] = cljs.core.first((state_34006[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34821 = state_34006;
state_34006 = G__34821;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_34006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_34006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_34028 = f__32606__auto__();
(statearr_34028[(6)] = c__32605__auto___34808);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34030 = arguments.length;
switch (G__34030) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32605__auto___34837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_34068){
var state_val_34069 = (state_34068[(1)]);
if((state_val_34069 === (7))){
var inst_34064 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34070_34838 = state_34068__$1;
(statearr_34070_34838[(2)] = inst_34064);

(statearr_34070_34838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (1))){
var inst_34031 = (new Array(n));
var inst_34032 = inst_34031;
var inst_34033 = (0);
var state_34068__$1 = (function (){var statearr_34071 = state_34068;
(statearr_34071[(7)] = inst_34032);

(statearr_34071[(8)] = inst_34033);

return statearr_34071;
})();
var statearr_34072_34839 = state_34068__$1;
(statearr_34072_34839[(2)] = null);

(statearr_34072_34839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (4))){
var inst_34036 = (state_34068[(9)]);
var inst_34036__$1 = (state_34068[(2)]);
var inst_34037 = (inst_34036__$1 == null);
var inst_34038 = cljs.core.not(inst_34037);
var state_34068__$1 = (function (){var statearr_34073 = state_34068;
(statearr_34073[(9)] = inst_34036__$1);

return statearr_34073;
})();
if(inst_34038){
var statearr_34074_34840 = state_34068__$1;
(statearr_34074_34840[(1)] = (5));

} else {
var statearr_34075_34841 = state_34068__$1;
(statearr_34075_34841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (15))){
var inst_34058 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34076_34842 = state_34068__$1;
(statearr_34076_34842[(2)] = inst_34058);

(statearr_34076_34842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (13))){
var state_34068__$1 = state_34068;
var statearr_34077_34843 = state_34068__$1;
(statearr_34077_34843[(2)] = null);

(statearr_34077_34843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (6))){
var inst_34033 = (state_34068[(8)]);
var inst_34054 = (inst_34033 > (0));
var state_34068__$1 = state_34068;
if(cljs.core.truth_(inst_34054)){
var statearr_34078_34844 = state_34068__$1;
(statearr_34078_34844[(1)] = (12));

} else {
var statearr_34079_34845 = state_34068__$1;
(statearr_34079_34845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (3))){
var inst_34066 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34068__$1,inst_34066);
} else {
if((state_val_34069 === (12))){
var inst_34032 = (state_34068[(7)]);
var inst_34056 = cljs.core.vec(inst_34032);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34068__$1,(15),out,inst_34056);
} else {
if((state_val_34069 === (2))){
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34068__$1,(4),ch);
} else {
if((state_val_34069 === (11))){
var inst_34048 = (state_34068[(2)]);
var inst_34049 = (new Array(n));
var inst_34032 = inst_34049;
var inst_34033 = (0);
var state_34068__$1 = (function (){var statearr_34080 = state_34068;
(statearr_34080[(10)] = inst_34048);

(statearr_34080[(7)] = inst_34032);

(statearr_34080[(8)] = inst_34033);

return statearr_34080;
})();
var statearr_34081_34846 = state_34068__$1;
(statearr_34081_34846[(2)] = null);

(statearr_34081_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (9))){
var inst_34032 = (state_34068[(7)]);
var inst_34046 = cljs.core.vec(inst_34032);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34068__$1,(11),out,inst_34046);
} else {
if((state_val_34069 === (5))){
var inst_34032 = (state_34068[(7)]);
var inst_34033 = (state_34068[(8)]);
var inst_34036 = (state_34068[(9)]);
var inst_34041 = (state_34068[(11)]);
var inst_34040 = (inst_34032[inst_34033] = inst_34036);
var inst_34041__$1 = (inst_34033 + (1));
var inst_34042 = (inst_34041__$1 < n);
var state_34068__$1 = (function (){var statearr_34082 = state_34068;
(statearr_34082[(12)] = inst_34040);

(statearr_34082[(11)] = inst_34041__$1);

return statearr_34082;
})();
if(cljs.core.truth_(inst_34042)){
var statearr_34083_34847 = state_34068__$1;
(statearr_34083_34847[(1)] = (8));

} else {
var statearr_34084_34848 = state_34068__$1;
(statearr_34084_34848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (14))){
var inst_34061 = (state_34068[(2)]);
var inst_34062 = cljs.core.async.close_BANG_(out);
var state_34068__$1 = (function (){var statearr_34086 = state_34068;
(statearr_34086[(13)] = inst_34061);

return statearr_34086;
})();
var statearr_34087_34849 = state_34068__$1;
(statearr_34087_34849[(2)] = inst_34062);

(statearr_34087_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (10))){
var inst_34052 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34088_34850 = state_34068__$1;
(statearr_34088_34850[(2)] = inst_34052);

(statearr_34088_34850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (8))){
var inst_34032 = (state_34068[(7)]);
var inst_34041 = (state_34068[(11)]);
var tmp34085 = inst_34032;
var inst_34032__$1 = tmp34085;
var inst_34033 = inst_34041;
var state_34068__$1 = (function (){var statearr_34089 = state_34068;
(statearr_34089[(7)] = inst_34032__$1);

(statearr_34089[(8)] = inst_34033);

return statearr_34089;
})();
var statearr_34090_34851 = state_34068__$1;
(statearr_34090_34851[(2)] = null);

(statearr_34090_34851[(1)] = (2));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_34091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34091[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_34091[(1)] = (1));

return statearr_34091;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_34068){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_34068);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e34092){var ex__32538__auto__ = e34092;
var statearr_34093_34860 = state_34068;
(statearr_34093_34860[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_34068[(4)]))){
var statearr_34094_34861 = state_34068;
(statearr_34094_34861[(1)] = cljs.core.first((state_34068[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34862 = state_34068;
state_34068 = G__34862;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_34068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_34068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_34095 = f__32606__auto__();
(statearr_34095[(6)] = c__32605__auto___34837);

return statearr_34095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34097 = arguments.length;
switch (G__34097) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32605__auto___34865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32606__auto__ = (function (){var switch__32534__auto__ = (function (state_34142){
var state_val_34143 = (state_34142[(1)]);
if((state_val_34143 === (7))){
var inst_34138 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
var statearr_34144_34866 = state_34142__$1;
(statearr_34144_34866[(2)] = inst_34138);

(statearr_34144_34866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (1))){
var inst_34098 = [];
var inst_34099 = inst_34098;
var inst_34100 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34142__$1 = (function (){var statearr_34145 = state_34142;
(statearr_34145[(7)] = inst_34099);

(statearr_34145[(8)] = inst_34100);

return statearr_34145;
})();
var statearr_34146_34867 = state_34142__$1;
(statearr_34146_34867[(2)] = null);

(statearr_34146_34867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (4))){
var inst_34103 = (state_34142[(9)]);
var inst_34103__$1 = (state_34142[(2)]);
var inst_34104 = (inst_34103__$1 == null);
var inst_34105 = cljs.core.not(inst_34104);
var state_34142__$1 = (function (){var statearr_34147 = state_34142;
(statearr_34147[(9)] = inst_34103__$1);

return statearr_34147;
})();
if(inst_34105){
var statearr_34148_34868 = state_34142__$1;
(statearr_34148_34868[(1)] = (5));

} else {
var statearr_34149_34869 = state_34142__$1;
(statearr_34149_34869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (15))){
var inst_34099 = (state_34142[(7)]);
var inst_34130 = cljs.core.vec(inst_34099);
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34142__$1,(18),out,inst_34130);
} else {
if((state_val_34143 === (13))){
var inst_34125 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
var statearr_34150_34870 = state_34142__$1;
(statearr_34150_34870[(2)] = inst_34125);

(statearr_34150_34870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (6))){
var inst_34099 = (state_34142[(7)]);
var inst_34127 = inst_34099.length;
var inst_34128 = (inst_34127 > (0));
var state_34142__$1 = state_34142;
if(cljs.core.truth_(inst_34128)){
var statearr_34151_34871 = state_34142__$1;
(statearr_34151_34871[(1)] = (15));

} else {
var statearr_34152_34872 = state_34142__$1;
(statearr_34152_34872[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (17))){
var inst_34135 = (state_34142[(2)]);
var inst_34136 = cljs.core.async.close_BANG_(out);
var state_34142__$1 = (function (){var statearr_34153 = state_34142;
(statearr_34153[(10)] = inst_34135);

return statearr_34153;
})();
var statearr_34154_34873 = state_34142__$1;
(statearr_34154_34873[(2)] = inst_34136);

(statearr_34154_34873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (3))){
var inst_34140 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34142__$1,inst_34140);
} else {
if((state_val_34143 === (12))){
var inst_34099 = (state_34142[(7)]);
var inst_34118 = cljs.core.vec(inst_34099);
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34142__$1,(14),out,inst_34118);
} else {
if((state_val_34143 === (2))){
var state_34142__$1 = state_34142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34142__$1,(4),ch);
} else {
if((state_val_34143 === (11))){
var inst_34099 = (state_34142[(7)]);
var inst_34103 = (state_34142[(9)]);
var inst_34107 = (state_34142[(11)]);
var inst_34115 = inst_34099.push(inst_34103);
var tmp34155 = inst_34099;
var inst_34099__$1 = tmp34155;
var inst_34100 = inst_34107;
var state_34142__$1 = (function (){var statearr_34156 = state_34142;
(statearr_34156[(12)] = inst_34115);

(statearr_34156[(7)] = inst_34099__$1);

(statearr_34156[(8)] = inst_34100);

return statearr_34156;
})();
var statearr_34157_34874 = state_34142__$1;
(statearr_34157_34874[(2)] = null);

(statearr_34157_34874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (9))){
var inst_34100 = (state_34142[(8)]);
var inst_34111 = cljs.core.keyword_identical_QMARK_(inst_34100,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34142__$1 = state_34142;
var statearr_34158_34875 = state_34142__$1;
(statearr_34158_34875[(2)] = inst_34111);

(statearr_34158_34875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (5))){
var inst_34103 = (state_34142[(9)]);
var inst_34107 = (state_34142[(11)]);
var inst_34100 = (state_34142[(8)]);
var inst_34108 = (state_34142[(13)]);
var inst_34107__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34103) : f.call(null,inst_34103));
var inst_34108__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34107__$1,inst_34100);
var state_34142__$1 = (function (){var statearr_34159 = state_34142;
(statearr_34159[(11)] = inst_34107__$1);

(statearr_34159[(13)] = inst_34108__$1);

return statearr_34159;
})();
if(inst_34108__$1){
var statearr_34160_34876 = state_34142__$1;
(statearr_34160_34876[(1)] = (8));

} else {
var statearr_34161_34877 = state_34142__$1;
(statearr_34161_34877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (14))){
var inst_34103 = (state_34142[(9)]);
var inst_34107 = (state_34142[(11)]);
var inst_34120 = (state_34142[(2)]);
var inst_34121 = [];
var inst_34122 = inst_34121.push(inst_34103);
var inst_34099 = inst_34121;
var inst_34100 = inst_34107;
var state_34142__$1 = (function (){var statearr_34162 = state_34142;
(statearr_34162[(14)] = inst_34120);

(statearr_34162[(15)] = inst_34122);

(statearr_34162[(7)] = inst_34099);

(statearr_34162[(8)] = inst_34100);

return statearr_34162;
})();
var statearr_34163_34878 = state_34142__$1;
(statearr_34163_34878[(2)] = null);

(statearr_34163_34878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (16))){
var state_34142__$1 = state_34142;
var statearr_34164_34879 = state_34142__$1;
(statearr_34164_34879[(2)] = null);

(statearr_34164_34879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (10))){
var inst_34113 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
if(cljs.core.truth_(inst_34113)){
var statearr_34165_34881 = state_34142__$1;
(statearr_34165_34881[(1)] = (11));

} else {
var statearr_34166_34882 = state_34142__$1;
(statearr_34166_34882[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (18))){
var inst_34132 = (state_34142[(2)]);
var state_34142__$1 = state_34142;
var statearr_34167_34883 = state_34142__$1;
(statearr_34167_34883[(2)] = inst_34132);

(statearr_34167_34883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34143 === (8))){
var inst_34108 = (state_34142[(13)]);
var state_34142__$1 = state_34142;
var statearr_34168_34884 = state_34142__$1;
(statearr_34168_34884[(2)] = inst_34108);

(statearr_34168_34884[(1)] = (10));


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
var cljs$core$async$state_machine__32535__auto__ = null;
var cljs$core$async$state_machine__32535__auto____0 = (function (){
var statearr_34169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34169[(0)] = cljs$core$async$state_machine__32535__auto__);

(statearr_34169[(1)] = (1));

return statearr_34169;
});
var cljs$core$async$state_machine__32535__auto____1 = (function (state_34142){
while(true){
var ret_value__32536__auto__ = (function (){try{while(true){
var result__32537__auto__ = switch__32534__auto__(state_34142);
if(cljs.core.keyword_identical_QMARK_(result__32537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32537__auto__;
}
break;
}
}catch (e34170){var ex__32538__auto__ = e34170;
var statearr_34171_34888 = state_34142;
(statearr_34171_34888[(2)] = ex__32538__auto__);


if(cljs.core.seq((state_34142[(4)]))){
var statearr_34172_34889 = state_34142;
(statearr_34172_34889[(1)] = cljs.core.first((state_34142[(4)])));

} else {
throw ex__32538__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34890 = state_34142;
state_34142 = G__34890;
continue;
} else {
return ret_value__32536__auto__;
}
break;
}
});
cljs$core$async$state_machine__32535__auto__ = function(state_34142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32535__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32535__auto____1.call(this,state_34142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32535__auto____0;
cljs$core$async$state_machine__32535__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32535__auto____1;
return cljs$core$async$state_machine__32535__auto__;
})()
})();
var state__32607__auto__ = (function (){var statearr_34173 = f__32606__auto__();
(statearr_34173[(6)] = c__32605__auto___34865);

return statearr_34173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32607__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
