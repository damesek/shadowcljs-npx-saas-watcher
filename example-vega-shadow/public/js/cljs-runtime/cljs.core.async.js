goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25011 = arguments.length;
switch (G__25011) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25017 = (function (f,blockable,meta25018){
this.f = f;
this.blockable = blockable;
this.meta25018 = meta25018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25019,meta25018__$1){
var self__ = this;
var _25019__$1 = this;
return (new cljs.core.async.t_cljs$core$async25017(self__.f,self__.blockable,meta25018__$1));
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25019){
var self__ = this;
var _25019__$1 = this;
return self__.meta25018;
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25018","meta25018",-1953058659,null)], null);
});

cljs.core.async.t_cljs$core$async25017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25017";

cljs.core.async.t_cljs$core$async25017.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25017");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25017.
 */
cljs.core.async.__GT_t_cljs$core$async25017 = (function cljs$core$async$__GT_t_cljs$core$async25017(f__$1,blockable__$1,meta25018){
return (new cljs.core.async.t_cljs$core$async25017(f__$1,blockable__$1,meta25018));
});

}

return (new cljs.core.async.t_cljs$core$async25017(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__25044 = arguments.length;
switch (G__25044) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25057 = arguments.length;
switch (G__25057) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__25061 = arguments.length;
switch (G__25061) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_27356 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27356) : fn1.call(null,val_27356));
} else {
cljs.core.async.impl.dispatch.run(((function (val_27356,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27356) : fn1.call(null,val_27356));
});})(val_27356,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__25081 = arguments.length;
switch (G__25081) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___27369 = n;
var x_27371 = (0);
while(true){
if((x_27371 < n__4607__auto___27369)){
(a[x_27371] = (0));

var G__27372 = (x_27371 + (1));
x_27371 = G__27372;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__27374 = (i + (1));
i = G__27374;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25118 = (function (flag,meta25119){
this.flag = flag;
this.meta25119 = meta25119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25120,meta25119__$1){
var self__ = this;
var _25120__$1 = this;
return (new cljs.core.async.t_cljs$core$async25118(self__.flag,meta25119__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25120){
var self__ = this;
var _25120__$1 = this;
return self__.meta25119;
});})(flag))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25118.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25119","meta25119",1234265872,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25118";

cljs.core.async.t_cljs$core$async25118.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25118");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25118.
 */
cljs.core.async.__GT_t_cljs$core$async25118 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25118(flag__$1,meta25119){
return (new cljs.core.async.t_cljs$core$async25118(flag__$1,meta25119));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25118(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25146 = (function (flag,cb,meta25147){
this.flag = flag;
this.cb = cb;
this.meta25147 = meta25147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25148,meta25147__$1){
var self__ = this;
var _25148__$1 = this;
return (new cljs.core.async.t_cljs$core$async25146(self__.flag,self__.cb,meta25147__$1));
});

cljs.core.async.t_cljs$core$async25146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25148){
var self__ = this;
var _25148__$1 = this;
return self__.meta25147;
});

cljs.core.async.t_cljs$core$async25146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async25146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25147","meta25147",-194461920,null)], null);
});

cljs.core.async.t_cljs$core$async25146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25146";

cljs.core.async.t_cljs$core$async25146.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25146");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25146.
 */
cljs.core.async.__GT_t_cljs$core$async25146 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25146(flag__$1,cb__$1,meta25147){
return (new cljs.core.async.t_cljs$core$async25146(flag__$1,cb__$1,meta25147));
});

}

return (new cljs.core.async.t_cljs$core$async25146(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25163_SHARP_){
var G__25166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25163_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25166) : fret.call(null,G__25166));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25164_SHARP_){
var G__25167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25164_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25167) : fret.call(null,G__25167));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27399 = (i + (1));
i = G__27399;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___27407 = arguments.length;
var i__4731__auto___27408 = (0);
while(true){
if((i__4731__auto___27408 < len__4730__auto___27407)){
args__4736__auto__.push((arguments[i__4731__auto___27408]));

var G__27410 = (i__4731__auto___27408 + (1));
i__4731__auto___27408 = G__27410;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25195){
var map__25196 = p__25195;
var map__25196__$1 = (((((!((map__25196 == null))))?(((((map__25196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25196):map__25196);
var opts = map__25196__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25175){
var G__25176 = cljs.core.first(seq25175);
var seq25175__$1 = cljs.core.next(seq25175);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25176,seq25175__$1);
});

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
var G__25247 = arguments.length;
switch (G__25247) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24903__auto___27420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27420){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27420){
return (function (state_25300){
var state_val_25302 = (state_25300[(1)]);
if((state_val_25302 === (7))){
var inst_25296 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
var statearr_25306_27423 = state_25300__$1;
(statearr_25306_27423[(2)] = inst_25296);

(statearr_25306_27423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (1))){
var state_25300__$1 = state_25300;
var statearr_25307_27425 = state_25300__$1;
(statearr_25307_27425[(2)] = null);

(statearr_25307_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (4))){
var inst_25270 = (state_25300[(7)]);
var inst_25270__$1 = (state_25300[(2)]);
var inst_25280 = (inst_25270__$1 == null);
var state_25300__$1 = (function (){var statearr_25310 = state_25300;
(statearr_25310[(7)] = inst_25270__$1);

return statearr_25310;
})();
if(cljs.core.truth_(inst_25280)){
var statearr_25311_27427 = state_25300__$1;
(statearr_25311_27427[(1)] = (5));

} else {
var statearr_25312_27428 = state_25300__$1;
(statearr_25312_27428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (13))){
var state_25300__$1 = state_25300;
var statearr_25315_27429 = state_25300__$1;
(statearr_25315_27429[(2)] = null);

(statearr_25315_27429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (6))){
var inst_25270 = (state_25300[(7)]);
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25300__$1,(11),to,inst_25270);
} else {
if((state_val_25302 === (3))){
var inst_25298 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25300__$1,inst_25298);
} else {
if((state_val_25302 === (12))){
var state_25300__$1 = state_25300;
var statearr_25323_27430 = state_25300__$1;
(statearr_25323_27430[(2)] = null);

(statearr_25323_27430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (2))){
var state_25300__$1 = state_25300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25300__$1,(4),from);
} else {
if((state_val_25302 === (11))){
var inst_25289 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
if(cljs.core.truth_(inst_25289)){
var statearr_25326_27434 = state_25300__$1;
(statearr_25326_27434[(1)] = (12));

} else {
var statearr_25328_27435 = state_25300__$1;
(statearr_25328_27435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (9))){
var state_25300__$1 = state_25300;
var statearr_25329_27437 = state_25300__$1;
(statearr_25329_27437[(2)] = null);

(statearr_25329_27437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (5))){
var state_25300__$1 = state_25300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25330_27438 = state_25300__$1;
(statearr_25330_27438[(1)] = (8));

} else {
var statearr_25331_27439 = state_25300__$1;
(statearr_25331_27439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (14))){
var inst_25294 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
var statearr_25334_27440 = state_25300__$1;
(statearr_25334_27440[(2)] = inst_25294);

(statearr_25334_27440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (10))){
var inst_25286 = (state_25300[(2)]);
var state_25300__$1 = state_25300;
var statearr_25337_27441 = state_25300__$1;
(statearr_25337_27441[(2)] = inst_25286);

(statearr_25337_27441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (8))){
var inst_25283 = cljs.core.async.close_BANG_(to);
var state_25300__$1 = state_25300;
var statearr_25338_27442 = state_25300__$1;
(statearr_25338_27442[(2)] = inst_25283);

(statearr_25338_27442[(1)] = (10));


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
});})(c__24903__auto___27420))
;
return ((function (switch__24631__auto__,c__24903__auto___27420){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_25339 = [null,null,null,null,null,null,null,null];
(statearr_25339[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_25339[(1)] = (1));

return statearr_25339;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_25300){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25300);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25340){if((e25340 instanceof Object)){
var ex__24635__auto__ = e25340;
var statearr_25341_27454 = state_25300;
(statearr_25341_27454[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27458 = state_25300;
state_25300 = G__27458;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_25300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_25300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27420))
})();
var state__24905__auto__ = (function (){var statearr_25342 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25342[(6)] = c__24903__auto___27420);

return statearr_25342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27420))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__25345){
var vec__25346 = p__25345;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(1),null);
var job = vec__25346;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24903__auto___27463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27463,res,vec__25346,v,p,job,jobs,results){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27463,res,vec__25346,v,p,job,jobs,results){
return (function (state_25363){
var state_val_25364 = (state_25363[(1)]);
if((state_val_25364 === (1))){
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25363__$1,(2),res,v);
} else {
if((state_val_25364 === (2))){
var inst_25360 = (state_25363[(2)]);
var inst_25361 = cljs.core.async.close_BANG_(res);
var state_25363__$1 = (function (){var statearr_25369 = state_25363;
(statearr_25369[(7)] = inst_25360);

return statearr_25369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25363__$1,inst_25361);
} else {
return null;
}
}
});})(c__24903__auto___27463,res,vec__25346,v,p,job,jobs,results))
;
return ((function (switch__24631__auto__,c__24903__auto___27463,res,vec__25346,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0 = (function (){
var statearr_25375 = [null,null,null,null,null,null,null,null];
(statearr_25375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__);

(statearr_25375[(1)] = (1));

return statearr_25375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1 = (function (state_25363){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25363);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25377){if((e25377 instanceof Object)){
var ex__24635__auto__ = e25377;
var statearr_25378_27464 = state_25363;
(statearr_25378_27464[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27465 = state_25363;
state_25363 = G__27465;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = function(state_25363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1.call(this,state_25363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27463,res,vec__25346,v,p,job,jobs,results))
})();
var state__24905__auto__ = (function (){var statearr_25379 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25379[(6)] = c__24903__auto___27463);

return statearr_25379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27463,res,vec__25346,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25380){
var vec__25381 = p__25380;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25381,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25381,(1),null);
var job = vec__25381;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___27466 = n;
var __27467 = (0);
while(true){
if((__27467 < n__4607__auto___27466)){
var G__25390_27468 = type;
var G__25390_27469__$1 = (((G__25390_27468 instanceof cljs.core.Keyword))?G__25390_27468.fqn:null);
switch (G__25390_27469__$1) {
case "compute":
var c__24903__auto___27471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27467,c__24903__auto___27471,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (__27467,c__24903__auto___27471,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async){
return (function (state_25404){
var state_val_25405 = (state_25404[(1)]);
if((state_val_25405 === (1))){
var state_25404__$1 = state_25404;
var statearr_25406_27472 = state_25404__$1;
(statearr_25406_27472[(2)] = null);

(statearr_25406_27472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (2))){
var state_25404__$1 = state_25404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25404__$1,(4),jobs);
} else {
if((state_val_25405 === (3))){
var inst_25402 = (state_25404[(2)]);
var state_25404__$1 = state_25404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25404__$1,inst_25402);
} else {
if((state_val_25405 === (4))){
var inst_25394 = (state_25404[(2)]);
var inst_25395 = process(inst_25394);
var state_25404__$1 = state_25404;
if(cljs.core.truth_(inst_25395)){
var statearr_25408_27473 = state_25404__$1;
(statearr_25408_27473[(1)] = (5));

} else {
var statearr_25409_27474 = state_25404__$1;
(statearr_25409_27474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (5))){
var state_25404__$1 = state_25404;
var statearr_25410_27475 = state_25404__$1;
(statearr_25410_27475[(2)] = null);

(statearr_25410_27475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (6))){
var state_25404__$1 = state_25404;
var statearr_25411_27482 = state_25404__$1;
(statearr_25411_27482[(2)] = null);

(statearr_25411_27482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25405 === (7))){
var inst_25400 = (state_25404[(2)]);
var state_25404__$1 = state_25404;
var statearr_25413_27483 = state_25404__$1;
(statearr_25413_27483[(2)] = inst_25400);

(statearr_25413_27483[(1)] = (3));


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
});})(__27467,c__24903__auto___27471,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async))
;
return ((function (__27467,switch__24631__auto__,c__24903__auto___27471,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0 = (function (){
var statearr_25414 = [null,null,null,null,null,null,null];
(statearr_25414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__);

(statearr_25414[(1)] = (1));

return statearr_25414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1 = (function (state_25404){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25404);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25416){if((e25416 instanceof Object)){
var ex__24635__auto__ = e25416;
var statearr_25417_27486 = state_25404;
(statearr_25417_27486[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27487 = state_25404;
state_25404 = G__27487;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = function(state_25404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1.call(this,state_25404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__;
})()
;})(__27467,switch__24631__auto__,c__24903__auto___27471,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async))
})();
var state__24905__auto__ = (function (){var statearr_25418 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25418[(6)] = c__24903__auto___27471);

return statearr_25418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(__27467,c__24903__auto___27471,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async))
);


break;
case "async":
var c__24903__auto___27489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27467,c__24903__auto___27489,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (__27467,c__24903__auto___27489,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25433_27490 = state_25431__$1;
(statearr_25433_27490[(2)] = null);

(statearr_25433_27490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (2))){
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25431__$1,(4),jobs);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (4))){
var inst_25421 = (state_25431[(2)]);
var inst_25422 = async(inst_25421);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25422)){
var statearr_25435_27491 = state_25431__$1;
(statearr_25435_27491[(1)] = (5));

} else {
var statearr_25436_27492 = state_25431__$1;
(statearr_25436_27492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var state_25431__$1 = state_25431;
var statearr_25437_27493 = state_25431__$1;
(statearr_25437_27493[(2)] = null);

(statearr_25437_27493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var state_25431__$1 = state_25431;
var statearr_25439_27496 = state_25431__$1;
(statearr_25439_27496[(2)] = null);

(statearr_25439_27496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (7))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25440_27498 = state_25431__$1;
(statearr_25440_27498[(2)] = inst_25427);

(statearr_25440_27498[(1)] = (3));


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
});})(__27467,c__24903__auto___27489,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async))
;
return ((function (__27467,switch__24631__auto__,c__24903__auto___27489,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0 = (function (){
var statearr_25441 = [null,null,null,null,null,null,null];
(statearr_25441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__);

(statearr_25441[(1)] = (1));

return statearr_25441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1 = (function (state_25431){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25431);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25442){if((e25442 instanceof Object)){
var ex__24635__auto__ = e25442;
var statearr_25443_27501 = state_25431;
(statearr_25443_27501[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27502 = state_25431;
state_25431 = G__27502;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__;
})()
;})(__27467,switch__24631__auto__,c__24903__auto___27489,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async))
})();
var state__24905__auto__ = (function (){var statearr_25445 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25445[(6)] = c__24903__auto___27489);

return statearr_25445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(__27467,c__24903__auto___27489,G__25390_27468,G__25390_27469__$1,n__4607__auto___27466,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25390_27469__$1)].join('')));

}

var G__27507 = (__27467 + (1));
__27467 = G__27507;
continue;
} else {
}
break;
}

var c__24903__auto___27508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27508,jobs,results,process,async){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27508,jobs,results,process,async){
return (function (state_25467){
var state_val_25468 = (state_25467[(1)]);
if((state_val_25468 === (7))){
var inst_25463 = (state_25467[(2)]);
var state_25467__$1 = state_25467;
var statearr_25470_27510 = state_25467__$1;
(statearr_25470_27510[(2)] = inst_25463);

(statearr_25470_27510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (1))){
var state_25467__$1 = state_25467;
var statearr_25471_27511 = state_25467__$1;
(statearr_25471_27511[(2)] = null);

(statearr_25471_27511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (4))){
var inst_25448 = (state_25467[(7)]);
var inst_25448__$1 = (state_25467[(2)]);
var inst_25449 = (inst_25448__$1 == null);
var state_25467__$1 = (function (){var statearr_25472 = state_25467;
(statearr_25472[(7)] = inst_25448__$1);

return statearr_25472;
})();
if(cljs.core.truth_(inst_25449)){
var statearr_25473_27512 = state_25467__$1;
(statearr_25473_27512[(1)] = (5));

} else {
var statearr_25474_27513 = state_25467__$1;
(statearr_25474_27513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (6))){
var inst_25448 = (state_25467[(7)]);
var inst_25453 = (state_25467[(8)]);
var inst_25453__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25455 = [inst_25448,inst_25453__$1];
var inst_25456 = (new cljs.core.PersistentVector(null,2,(5),inst_25454,inst_25455,null));
var state_25467__$1 = (function (){var statearr_25475 = state_25467;
(statearr_25475[(8)] = inst_25453__$1);

return statearr_25475;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25467__$1,(8),jobs,inst_25456);
} else {
if((state_val_25468 === (3))){
var inst_25465 = (state_25467[(2)]);
var state_25467__$1 = state_25467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25467__$1,inst_25465);
} else {
if((state_val_25468 === (2))){
var state_25467__$1 = state_25467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25467__$1,(4),from);
} else {
if((state_val_25468 === (9))){
var inst_25460 = (state_25467[(2)]);
var state_25467__$1 = (function (){var statearr_25477 = state_25467;
(statearr_25477[(9)] = inst_25460);

return statearr_25477;
})();
var statearr_25478_27516 = state_25467__$1;
(statearr_25478_27516[(2)] = null);

(statearr_25478_27516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (5))){
var inst_25451 = cljs.core.async.close_BANG_(jobs);
var state_25467__$1 = state_25467;
var statearr_25479_27517 = state_25467__$1;
(statearr_25479_27517[(2)] = inst_25451);

(statearr_25479_27517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25468 === (8))){
var inst_25453 = (state_25467[(8)]);
var inst_25458 = (state_25467[(2)]);
var state_25467__$1 = (function (){var statearr_25480 = state_25467;
(statearr_25480[(10)] = inst_25458);

return statearr_25480;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25467__$1,(9),results,inst_25453);
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
});})(c__24903__auto___27508,jobs,results,process,async))
;
return ((function (switch__24631__auto__,c__24903__auto___27508,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0 = (function (){
var statearr_25481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__);

(statearr_25481[(1)] = (1));

return statearr_25481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1 = (function (state_25467){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25467);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object)){
var ex__24635__auto__ = e25482;
var statearr_25483_27520 = state_25467;
(statearr_25483_27520[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27521 = state_25467;
state_25467 = G__27521;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = function(state_25467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1.call(this,state_25467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27508,jobs,results,process,async))
})();
var state__24905__auto__ = (function (){var statearr_25484 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25484[(6)] = c__24903__auto___27508);

return statearr_25484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27508,jobs,results,process,async))
);


var c__24903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto__,jobs,results,process,async){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto__,jobs,results,process,async){
return (function (state_25524){
var state_val_25525 = (state_25524[(1)]);
if((state_val_25525 === (7))){
var inst_25520 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25526_27523 = state_25524__$1;
(statearr_25526_27523[(2)] = inst_25520);

(statearr_25526_27523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (20))){
var state_25524__$1 = state_25524;
var statearr_25527_27525 = state_25524__$1;
(statearr_25527_27525[(2)] = null);

(statearr_25527_27525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (1))){
var state_25524__$1 = state_25524;
var statearr_25528_27526 = state_25524__$1;
(statearr_25528_27526[(2)] = null);

(statearr_25528_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (4))){
var inst_25488 = (state_25524[(7)]);
var inst_25488__$1 = (state_25524[(2)]);
var inst_25489 = (inst_25488__$1 == null);
var state_25524__$1 = (function (){var statearr_25529 = state_25524;
(statearr_25529[(7)] = inst_25488__$1);

return statearr_25529;
})();
if(cljs.core.truth_(inst_25489)){
var statearr_25530_27527 = state_25524__$1;
(statearr_25530_27527[(1)] = (5));

} else {
var statearr_25531_27528 = state_25524__$1;
(statearr_25531_27528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (15))){
var inst_25502 = (state_25524[(8)]);
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25524__$1,(18),to,inst_25502);
} else {
if((state_val_25525 === (21))){
var inst_25515 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25532_27529 = state_25524__$1;
(statearr_25532_27529[(2)] = inst_25515);

(statearr_25532_27529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (13))){
var inst_25517 = (state_25524[(2)]);
var state_25524__$1 = (function (){var statearr_25533 = state_25524;
(statearr_25533[(9)] = inst_25517);

return statearr_25533;
})();
var statearr_25534_27530 = state_25524__$1;
(statearr_25534_27530[(2)] = null);

(statearr_25534_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (6))){
var inst_25488 = (state_25524[(7)]);
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25524__$1,(11),inst_25488);
} else {
if((state_val_25525 === (17))){
var inst_25510 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
if(cljs.core.truth_(inst_25510)){
var statearr_25537_27531 = state_25524__$1;
(statearr_25537_27531[(1)] = (19));

} else {
var statearr_25538_27532 = state_25524__$1;
(statearr_25538_27532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (3))){
var inst_25522 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25524__$1,inst_25522);
} else {
if((state_val_25525 === (12))){
var inst_25499 = (state_25524[(10)]);
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25524__$1,(14),inst_25499);
} else {
if((state_val_25525 === (2))){
var state_25524__$1 = state_25524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25524__$1,(4),results);
} else {
if((state_val_25525 === (19))){
var state_25524__$1 = state_25524;
var statearr_25539_27535 = state_25524__$1;
(statearr_25539_27535[(2)] = null);

(statearr_25539_27535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (11))){
var inst_25499 = (state_25524[(2)]);
var state_25524__$1 = (function (){var statearr_25540 = state_25524;
(statearr_25540[(10)] = inst_25499);

return statearr_25540;
})();
var statearr_25541_27538 = state_25524__$1;
(statearr_25541_27538[(2)] = null);

(statearr_25541_27538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (9))){
var state_25524__$1 = state_25524;
var statearr_25542_27539 = state_25524__$1;
(statearr_25542_27539[(2)] = null);

(statearr_25542_27539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (5))){
var state_25524__$1 = state_25524;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25543_27542 = state_25524__$1;
(statearr_25543_27542[(1)] = (8));

} else {
var statearr_25544_27543 = state_25524__$1;
(statearr_25544_27543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (14))){
var inst_25502 = (state_25524[(8)]);
var inst_25504 = (state_25524[(11)]);
var inst_25502__$1 = (state_25524[(2)]);
var inst_25503 = (inst_25502__$1 == null);
var inst_25504__$1 = cljs.core.not(inst_25503);
var state_25524__$1 = (function (){var statearr_25548 = state_25524;
(statearr_25548[(8)] = inst_25502__$1);

(statearr_25548[(11)] = inst_25504__$1);

return statearr_25548;
})();
if(inst_25504__$1){
var statearr_25549_27544 = state_25524__$1;
(statearr_25549_27544[(1)] = (15));

} else {
var statearr_25550_27545 = state_25524__$1;
(statearr_25550_27545[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (16))){
var inst_25504 = (state_25524[(11)]);
var state_25524__$1 = state_25524;
var statearr_25552_27546 = state_25524__$1;
(statearr_25552_27546[(2)] = inst_25504);

(statearr_25552_27546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (10))){
var inst_25496 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25553_27549 = state_25524__$1;
(statearr_25553_27549[(2)] = inst_25496);

(statearr_25553_27549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (18))){
var inst_25507 = (state_25524[(2)]);
var state_25524__$1 = state_25524;
var statearr_25554_27550 = state_25524__$1;
(statearr_25554_27550[(2)] = inst_25507);

(statearr_25554_27550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25525 === (8))){
var inst_25492 = cljs.core.async.close_BANG_(to);
var state_25524__$1 = state_25524;
var statearr_25555_27551 = state_25524__$1;
(statearr_25555_27551[(2)] = inst_25492);

(statearr_25555_27551[(1)] = (10));


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
});})(c__24903__auto__,jobs,results,process,async))
;
return ((function (switch__24631__auto__,c__24903__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0 = (function (){
var statearr_25556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__);

(statearr_25556[(1)] = (1));

return statearr_25556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1 = (function (state_25524){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25524);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25557){if((e25557 instanceof Object)){
var ex__24635__auto__ = e25557;
var statearr_25559_27555 = state_25524;
(statearr_25559_27555[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27557 = state_25524;
state_25524 = G__27557;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__ = function(state_25524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1.call(this,state_25524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24632__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto__,jobs,results,process,async))
})();
var state__24905__auto__ = (function (){var statearr_25561 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25561[(6)] = c__24903__auto__);

return statearr_25561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto__,jobs,results,process,async))
);

return c__24903__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25563 = arguments.length;
switch (G__25563) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__25573 = arguments.length;
switch (G__25573) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__25575 = arguments.length;
switch (G__25575) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24903__auto___27564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27564,tc,fc){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27564,tc,fc){
return (function (state_25606){
var state_val_25607 = (state_25606[(1)]);
if((state_val_25607 === (7))){
var inst_25599 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25610_27565 = state_25606__$1;
(statearr_25610_27565[(2)] = inst_25599);

(statearr_25610_27565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (1))){
var state_25606__$1 = state_25606;
var statearr_25612_27566 = state_25606__$1;
(statearr_25612_27566[(2)] = null);

(statearr_25612_27566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (4))){
var inst_25579 = (state_25606[(7)]);
var inst_25579__$1 = (state_25606[(2)]);
var inst_25580 = (inst_25579__$1 == null);
var state_25606__$1 = (function (){var statearr_25616 = state_25606;
(statearr_25616[(7)] = inst_25579__$1);

return statearr_25616;
})();
if(cljs.core.truth_(inst_25580)){
var statearr_25618_27571 = state_25606__$1;
(statearr_25618_27571[(1)] = (5));

} else {
var statearr_25619_27572 = state_25606__$1;
(statearr_25619_27572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (13))){
var state_25606__$1 = state_25606;
var statearr_25621_27573 = state_25606__$1;
(statearr_25621_27573[(2)] = null);

(statearr_25621_27573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (6))){
var inst_25579 = (state_25606[(7)]);
var inst_25585 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25579) : p.call(null,inst_25579));
var state_25606__$1 = state_25606;
if(cljs.core.truth_(inst_25585)){
var statearr_25623_27577 = state_25606__$1;
(statearr_25623_27577[(1)] = (9));

} else {
var statearr_25624_27578 = state_25606__$1;
(statearr_25624_27578[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (3))){
var inst_25604 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25606__$1,inst_25604);
} else {
if((state_val_25607 === (12))){
var state_25606__$1 = state_25606;
var statearr_25625_27579 = state_25606__$1;
(statearr_25625_27579[(2)] = null);

(statearr_25625_27579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (2))){
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25606__$1,(4),ch);
} else {
if((state_val_25607 === (11))){
var inst_25579 = (state_25606[(7)]);
var inst_25589 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25606__$1,(8),inst_25589,inst_25579);
} else {
if((state_val_25607 === (9))){
var state_25606__$1 = state_25606;
var statearr_25631_27583 = state_25606__$1;
(statearr_25631_27583[(2)] = tc);

(statearr_25631_27583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (5))){
var inst_25582 = cljs.core.async.close_BANG_(tc);
var inst_25583 = cljs.core.async.close_BANG_(fc);
var state_25606__$1 = (function (){var statearr_25633 = state_25606;
(statearr_25633[(8)] = inst_25582);

return statearr_25633;
})();
var statearr_25639_27584 = state_25606__$1;
(statearr_25639_27584[(2)] = inst_25583);

(statearr_25639_27584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (14))){
var inst_25596 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25641_27585 = state_25606__$1;
(statearr_25641_27585[(2)] = inst_25596);

(statearr_25641_27585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (10))){
var state_25606__$1 = state_25606;
var statearr_25644_27586 = state_25606__$1;
(statearr_25644_27586[(2)] = fc);

(statearr_25644_27586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (8))){
var inst_25591 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
if(cljs.core.truth_(inst_25591)){
var statearr_25648_27590 = state_25606__$1;
(statearr_25648_27590[(1)] = (12));

} else {
var statearr_25649_27591 = state_25606__$1;
(statearr_25649_27591[(1)] = (13));

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
});})(c__24903__auto___27564,tc,fc))
;
return ((function (switch__24631__auto__,c__24903__auto___27564,tc,fc){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_25653 = [null,null,null,null,null,null,null,null,null];
(statearr_25653[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_25653[(1)] = (1));

return statearr_25653;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_25606){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25606);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25655){if((e25655 instanceof Object)){
var ex__24635__auto__ = e25655;
var statearr_25656_27592 = state_25606;
(statearr_25656_27592[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_25606;
state_25606 = G__27596;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_25606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_25606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27564,tc,fc))
})();
var state__24905__auto__ = (function (){var statearr_25659 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25659[(6)] = c__24903__auto___27564);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27564,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto__){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto__){
return (function (state_25691){
var state_val_25692 = (state_25691[(1)]);
if((state_val_25692 === (7))){
var inst_25687 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25694_27598 = state_25691__$1;
(statearr_25694_27598[(2)] = inst_25687);

(statearr_25694_27598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (1))){
var inst_25671 = init;
var state_25691__$1 = (function (){var statearr_25697 = state_25691;
(statearr_25697[(7)] = inst_25671);

return statearr_25697;
})();
var statearr_25698_27600 = state_25691__$1;
(statearr_25698_27600[(2)] = null);

(statearr_25698_27600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (4))){
var inst_25674 = (state_25691[(8)]);
var inst_25674__$1 = (state_25691[(2)]);
var inst_25675 = (inst_25674__$1 == null);
var state_25691__$1 = (function (){var statearr_25701 = state_25691;
(statearr_25701[(8)] = inst_25674__$1);

return statearr_25701;
})();
if(cljs.core.truth_(inst_25675)){
var statearr_25702_27601 = state_25691__$1;
(statearr_25702_27601[(1)] = (5));

} else {
var statearr_25703_27602 = state_25691__$1;
(statearr_25703_27602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (6))){
var inst_25674 = (state_25691[(8)]);
var inst_25678 = (state_25691[(9)]);
var inst_25671 = (state_25691[(7)]);
var inst_25678__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25671,inst_25674) : f.call(null,inst_25671,inst_25674));
var inst_25679 = cljs.core.reduced_QMARK_(inst_25678__$1);
var state_25691__$1 = (function (){var statearr_25707 = state_25691;
(statearr_25707[(9)] = inst_25678__$1);

return statearr_25707;
})();
if(inst_25679){
var statearr_25711_27606 = state_25691__$1;
(statearr_25711_27606[(1)] = (8));

} else {
var statearr_25712_27607 = state_25691__$1;
(statearr_25712_27607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (3))){
var inst_25689 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25691__$1,inst_25689);
} else {
if((state_val_25692 === (2))){
var state_25691__$1 = state_25691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25691__$1,(4),ch);
} else {
if((state_val_25692 === (9))){
var inst_25678 = (state_25691[(9)]);
var inst_25671 = inst_25678;
var state_25691__$1 = (function (){var statearr_25714 = state_25691;
(statearr_25714[(7)] = inst_25671);

return statearr_25714;
})();
var statearr_25715_27611 = state_25691__$1;
(statearr_25715_27611[(2)] = null);

(statearr_25715_27611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (5))){
var inst_25671 = (state_25691[(7)]);
var state_25691__$1 = state_25691;
var statearr_25716_27612 = state_25691__$1;
(statearr_25716_27612[(2)] = inst_25671);

(statearr_25716_27612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (10))){
var inst_25685 = (state_25691[(2)]);
var state_25691__$1 = state_25691;
var statearr_25717_27613 = state_25691__$1;
(statearr_25717_27613[(2)] = inst_25685);

(statearr_25717_27613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25692 === (8))){
var inst_25678 = (state_25691[(9)]);
var inst_25681 = cljs.core.deref(inst_25678);
var state_25691__$1 = state_25691;
var statearr_25718_27618 = state_25691__$1;
(statearr_25718_27618[(2)] = inst_25681);

(statearr_25718_27618[(1)] = (10));


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
});})(c__24903__auto__))
;
return ((function (switch__24631__auto__,c__24903__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24632__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24632__auto____0 = (function (){
var statearr_25719 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25719[(0)] = cljs$core$async$reduce_$_state_machine__24632__auto__);

(statearr_25719[(1)] = (1));

return statearr_25719;
});
var cljs$core$async$reduce_$_state_machine__24632__auto____1 = (function (state_25691){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25691);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25720){if((e25720 instanceof Object)){
var ex__24635__auto__ = e25720;
var statearr_25721_27622 = state_25691;
(statearr_25721_27622[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27626 = state_25691;
state_25691 = G__27626;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24632__auto__ = function(state_25691){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24632__auto____1.call(this,state_25691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24632__auto____0;
cljs$core$async$reduce_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24632__auto____1;
return cljs$core$async$reduce_$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto__))
})();
var state__24905__auto__ = (function (){var statearr_25722 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25722[(6)] = c__24903__auto__);

return statearr_25722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto__))
);

return c__24903__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto__,f__$1){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto__,f__$1){
return (function (state_25734){
var state_val_25735 = (state_25734[(1)]);
if((state_val_25735 === (1))){
var inst_25729 = cljs.core.async.reduce(f__$1,init,ch);
var state_25734__$1 = state_25734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25734__$1,(2),inst_25729);
} else {
if((state_val_25735 === (2))){
var inst_25731 = (state_25734[(2)]);
var inst_25732 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25731) : f__$1.call(null,inst_25731));
var state_25734__$1 = state_25734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25734__$1,inst_25732);
} else {
return null;
}
}
});})(c__24903__auto__,f__$1))
;
return ((function (switch__24631__auto__,c__24903__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24632__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24632__auto____0 = (function (){
var statearr_25748 = [null,null,null,null,null,null,null];
(statearr_25748[(0)] = cljs$core$async$transduce_$_state_machine__24632__auto__);

(statearr_25748[(1)] = (1));

return statearr_25748;
});
var cljs$core$async$transduce_$_state_machine__24632__auto____1 = (function (state_25734){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25734);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25753){if((e25753 instanceof Object)){
var ex__24635__auto__ = e25753;
var statearr_25758_27633 = state_25734;
(statearr_25758_27633[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27634 = state_25734;
state_25734 = G__27634;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24632__auto__ = function(state_25734){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24632__auto____1.call(this,state_25734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24632__auto____0;
cljs$core$async$transduce_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24632__auto____1;
return cljs$core$async$transduce_$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto__,f__$1))
})();
var state__24905__auto__ = (function (){var statearr_25759 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25759[(6)] = c__24903__auto__);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto__,f__$1))
);

return c__24903__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25761 = arguments.length;
switch (G__25761) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto__){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto__){
return (function (state_25789){
var state_val_25790 = (state_25789[(1)]);
if((state_val_25790 === (7))){
var inst_25771 = (state_25789[(2)]);
var state_25789__$1 = state_25789;
var statearr_25796_27649 = state_25789__$1;
(statearr_25796_27649[(2)] = inst_25771);

(statearr_25796_27649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (1))){
var inst_25765 = cljs.core.seq(coll);
var inst_25766 = inst_25765;
var state_25789__$1 = (function (){var statearr_25797 = state_25789;
(statearr_25797[(7)] = inst_25766);

return statearr_25797;
})();
var statearr_25799_27653 = state_25789__$1;
(statearr_25799_27653[(2)] = null);

(statearr_25799_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (4))){
var inst_25766 = (state_25789[(7)]);
var inst_25769 = cljs.core.first(inst_25766);
var state_25789__$1 = state_25789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25789__$1,(7),ch,inst_25769);
} else {
if((state_val_25790 === (13))){
var inst_25783 = (state_25789[(2)]);
var state_25789__$1 = state_25789;
var statearr_25800_27660 = state_25789__$1;
(statearr_25800_27660[(2)] = inst_25783);

(statearr_25800_27660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (6))){
var inst_25774 = (state_25789[(2)]);
var state_25789__$1 = state_25789;
if(cljs.core.truth_(inst_25774)){
var statearr_25805_27661 = state_25789__$1;
(statearr_25805_27661[(1)] = (8));

} else {
var statearr_25806_27662 = state_25789__$1;
(statearr_25806_27662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (3))){
var inst_25787 = (state_25789[(2)]);
var state_25789__$1 = state_25789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25789__$1,inst_25787);
} else {
if((state_val_25790 === (12))){
var state_25789__$1 = state_25789;
var statearr_25831_27663 = state_25789__$1;
(statearr_25831_27663[(2)] = null);

(statearr_25831_27663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (2))){
var inst_25766 = (state_25789[(7)]);
var state_25789__$1 = state_25789;
if(cljs.core.truth_(inst_25766)){
var statearr_25832_27667 = state_25789__$1;
(statearr_25832_27667[(1)] = (4));

} else {
var statearr_25833_27671 = state_25789__$1;
(statearr_25833_27671[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (11))){
var inst_25780 = cljs.core.async.close_BANG_(ch);
var state_25789__$1 = state_25789;
var statearr_25834_27672 = state_25789__$1;
(statearr_25834_27672[(2)] = inst_25780);

(statearr_25834_27672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (9))){
var state_25789__$1 = state_25789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25835_27673 = state_25789__$1;
(statearr_25835_27673[(1)] = (11));

} else {
var statearr_25836_27674 = state_25789__$1;
(statearr_25836_27674[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (5))){
var inst_25766 = (state_25789[(7)]);
var state_25789__$1 = state_25789;
var statearr_25841_27675 = state_25789__$1;
(statearr_25841_27675[(2)] = inst_25766);

(statearr_25841_27675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (10))){
var inst_25785 = (state_25789[(2)]);
var state_25789__$1 = state_25789;
var statearr_25846_27676 = state_25789__$1;
(statearr_25846_27676[(2)] = inst_25785);

(statearr_25846_27676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25790 === (8))){
var inst_25766 = (state_25789[(7)]);
var inst_25776 = cljs.core.next(inst_25766);
var inst_25766__$1 = inst_25776;
var state_25789__$1 = (function (){var statearr_25851 = state_25789;
(statearr_25851[(7)] = inst_25766__$1);

return statearr_25851;
})();
var statearr_25852_27677 = state_25789__$1;
(statearr_25852_27677[(2)] = null);

(statearr_25852_27677[(1)] = (2));


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
});})(c__24903__auto__))
;
return ((function (switch__24631__auto__,c__24903__auto__){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_25853 = [null,null,null,null,null,null,null,null];
(statearr_25853[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_25853[(1)] = (1));

return statearr_25853;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_25789){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_25789);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e25860){if((e25860 instanceof Object)){
var ex__24635__auto__ = e25860;
var statearr_25861_27679 = state_25789;
(statearr_25861_27679[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27680 = state_25789;
state_25789 = G__27680;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_25789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_25789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto__))
})();
var state__24905__auto__ = (function (){var statearr_25865 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_25865[(6)] = c__24903__auto__);

return statearr_25865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto__))
);

return c__24903__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25887 = (function (ch,cs,meta25888){
this.ch = ch;
this.cs = cs;
this.meta25888 = meta25888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25889,meta25888__$1){
var self__ = this;
var _25889__$1 = this;
return (new cljs.core.async.t_cljs$core$async25887(self__.ch,self__.cs,meta25888__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25889){
var self__ = this;
var _25889__$1 = this;
return self__.meta25888;
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25888","meta25888",-440717989,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25887";

cljs.core.async.t_cljs$core$async25887.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async25887");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25887.
 */
cljs.core.async.__GT_t_cljs$core$async25887 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25887(ch__$1,cs__$1,meta25888){
return (new cljs.core.async.t_cljs$core$async25887(ch__$1,cs__$1,meta25888));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25887(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24903__auto___27686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27686,cs,m,dchan,dctr,done){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27686,cs,m,dchan,dctr,done){
return (function (state_26046){
var state_val_26047 = (state_26046[(1)]);
if((state_val_26047 === (7))){
var inst_26042 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26048_27687 = state_26046__$1;
(statearr_26048_27687[(2)] = inst_26042);

(statearr_26048_27687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (20))){
var inst_25940 = (state_26046[(7)]);
var inst_25952 = cljs.core.first(inst_25940);
var inst_25955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25952,(0),null);
var inst_25956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25952,(1),null);
var state_26046__$1 = (function (){var statearr_26049 = state_26046;
(statearr_26049[(8)] = inst_25955);

return statearr_26049;
})();
if(cljs.core.truth_(inst_25956)){
var statearr_26050_27692 = state_26046__$1;
(statearr_26050_27692[(1)] = (22));

} else {
var statearr_26051_27693 = state_26046__$1;
(statearr_26051_27693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (27))){
var inst_25991 = (state_26046[(9)]);
var inst_25984 = (state_26046[(10)]);
var inst_25986 = (state_26046[(11)]);
var inst_25906 = (state_26046[(12)]);
var inst_25991__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25984,inst_25986);
var inst_25992 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25991__$1,inst_25906,done);
var state_26046__$1 = (function (){var statearr_26052 = state_26046;
(statearr_26052[(9)] = inst_25991__$1);

return statearr_26052;
})();
if(cljs.core.truth_(inst_25992)){
var statearr_26053_27695 = state_26046__$1;
(statearr_26053_27695[(1)] = (30));

} else {
var statearr_26054_27696 = state_26046__$1;
(statearr_26054_27696[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (1))){
var state_26046__$1 = state_26046;
var statearr_26059_27698 = state_26046__$1;
(statearr_26059_27698[(2)] = null);

(statearr_26059_27698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (24))){
var inst_25940 = (state_26046[(7)]);
var inst_25961 = (state_26046[(2)]);
var inst_25962 = cljs.core.next(inst_25940);
var inst_25915 = inst_25962;
var inst_25916 = null;
var inst_25917 = (0);
var inst_25918 = (0);
var state_26046__$1 = (function (){var statearr_26060 = state_26046;
(statearr_26060[(13)] = inst_25961);

(statearr_26060[(14)] = inst_25917);

(statearr_26060[(15)] = inst_25918);

(statearr_26060[(16)] = inst_25916);

(statearr_26060[(17)] = inst_25915);

return statearr_26060;
})();
var statearr_26065_27699 = state_26046__$1;
(statearr_26065_27699[(2)] = null);

(statearr_26065_27699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (39))){
var state_26046__$1 = state_26046;
var statearr_26069_27700 = state_26046__$1;
(statearr_26069_27700[(2)] = null);

(statearr_26069_27700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (4))){
var inst_25906 = (state_26046[(12)]);
var inst_25906__$1 = (state_26046[(2)]);
var inst_25907 = (inst_25906__$1 == null);
var state_26046__$1 = (function (){var statearr_26070 = state_26046;
(statearr_26070[(12)] = inst_25906__$1);

return statearr_26070;
})();
if(cljs.core.truth_(inst_25907)){
var statearr_26071_27701 = state_26046__$1;
(statearr_26071_27701[(1)] = (5));

} else {
var statearr_26072_27702 = state_26046__$1;
(statearr_26072_27702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (15))){
var inst_25917 = (state_26046[(14)]);
var inst_25918 = (state_26046[(15)]);
var inst_25916 = (state_26046[(16)]);
var inst_25915 = (state_26046[(17)]);
var inst_25936 = (state_26046[(2)]);
var inst_25937 = (inst_25918 + (1));
var tmp26066 = inst_25917;
var tmp26067 = inst_25916;
var tmp26068 = inst_25915;
var inst_25915__$1 = tmp26068;
var inst_25916__$1 = tmp26067;
var inst_25917__$1 = tmp26066;
var inst_25918__$1 = inst_25937;
var state_26046__$1 = (function (){var statearr_26073 = state_26046;
(statearr_26073[(14)] = inst_25917__$1);

(statearr_26073[(18)] = inst_25936);

(statearr_26073[(15)] = inst_25918__$1);

(statearr_26073[(16)] = inst_25916__$1);

(statearr_26073[(17)] = inst_25915__$1);

return statearr_26073;
})();
var statearr_26074_27703 = state_26046__$1;
(statearr_26074_27703[(2)] = null);

(statearr_26074_27703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (21))){
var inst_25965 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26078_27704 = state_26046__$1;
(statearr_26078_27704[(2)] = inst_25965);

(statearr_26078_27704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (31))){
var inst_25991 = (state_26046[(9)]);
var inst_25995 = done(null);
var inst_25996 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25991);
var state_26046__$1 = (function (){var statearr_26079 = state_26046;
(statearr_26079[(19)] = inst_25995);

return statearr_26079;
})();
var statearr_26080_27709 = state_26046__$1;
(statearr_26080_27709[(2)] = inst_25996);

(statearr_26080_27709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (32))){
var inst_25983 = (state_26046[(20)]);
var inst_25984 = (state_26046[(10)]);
var inst_25985 = (state_26046[(21)]);
var inst_25986 = (state_26046[(11)]);
var inst_25998 = (state_26046[(2)]);
var inst_25999 = (inst_25986 + (1));
var tmp26075 = inst_25983;
var tmp26076 = inst_25984;
var tmp26077 = inst_25985;
var inst_25983__$1 = tmp26075;
var inst_25984__$1 = tmp26076;
var inst_25985__$1 = tmp26077;
var inst_25986__$1 = inst_25999;
var state_26046__$1 = (function (){var statearr_26081 = state_26046;
(statearr_26081[(20)] = inst_25983__$1);

(statearr_26081[(10)] = inst_25984__$1);

(statearr_26081[(21)] = inst_25985__$1);

(statearr_26081[(11)] = inst_25986__$1);

(statearr_26081[(22)] = inst_25998);

return statearr_26081;
})();
var statearr_26082_27712 = state_26046__$1;
(statearr_26082_27712[(2)] = null);

(statearr_26082_27712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (40))){
var inst_26014 = (state_26046[(23)]);
var inst_26018 = done(null);
var inst_26019 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26014);
var state_26046__$1 = (function (){var statearr_26083 = state_26046;
(statearr_26083[(24)] = inst_26018);

return statearr_26083;
})();
var statearr_26084_27715 = state_26046__$1;
(statearr_26084_27715[(2)] = inst_26019);

(statearr_26084_27715[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (33))){
var inst_26005 = (state_26046[(25)]);
var inst_26007 = cljs.core.chunked_seq_QMARK_(inst_26005);
var state_26046__$1 = state_26046;
if(inst_26007){
var statearr_26085_27716 = state_26046__$1;
(statearr_26085_27716[(1)] = (36));

} else {
var statearr_26086_27717 = state_26046__$1;
(statearr_26086_27717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (13))){
var inst_25930 = (state_26046[(26)]);
var inst_25933 = cljs.core.async.close_BANG_(inst_25930);
var state_26046__$1 = state_26046;
var statearr_26087_27718 = state_26046__$1;
(statearr_26087_27718[(2)] = inst_25933);

(statearr_26087_27718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (22))){
var inst_25955 = (state_26046[(8)]);
var inst_25958 = cljs.core.async.close_BANG_(inst_25955);
var state_26046__$1 = state_26046;
var statearr_26088_27726 = state_26046__$1;
(statearr_26088_27726[(2)] = inst_25958);

(statearr_26088_27726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (36))){
var inst_26005 = (state_26046[(25)]);
var inst_26009 = cljs.core.chunk_first(inst_26005);
var inst_26010 = cljs.core.chunk_rest(inst_26005);
var inst_26011 = cljs.core.count(inst_26009);
var inst_25983 = inst_26010;
var inst_25984 = inst_26009;
var inst_25985 = inst_26011;
var inst_25986 = (0);
var state_26046__$1 = (function (){var statearr_26092 = state_26046;
(statearr_26092[(20)] = inst_25983);

(statearr_26092[(10)] = inst_25984);

(statearr_26092[(21)] = inst_25985);

(statearr_26092[(11)] = inst_25986);

return statearr_26092;
})();
var statearr_26093_27733 = state_26046__$1;
(statearr_26093_27733[(2)] = null);

(statearr_26093_27733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (41))){
var inst_26005 = (state_26046[(25)]);
var inst_26021 = (state_26046[(2)]);
var inst_26022 = cljs.core.next(inst_26005);
var inst_25983 = inst_26022;
var inst_25984 = null;
var inst_25985 = (0);
var inst_25986 = (0);
var state_26046__$1 = (function (){var statearr_26094 = state_26046;
(statearr_26094[(20)] = inst_25983);

(statearr_26094[(10)] = inst_25984);

(statearr_26094[(21)] = inst_25985);

(statearr_26094[(11)] = inst_25986);

(statearr_26094[(27)] = inst_26021);

return statearr_26094;
})();
var statearr_26096_27734 = state_26046__$1;
(statearr_26096_27734[(2)] = null);

(statearr_26096_27734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (43))){
var state_26046__$1 = state_26046;
var statearr_26097_27735 = state_26046__$1;
(statearr_26097_27735[(2)] = null);

(statearr_26097_27735[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (29))){
var inst_26030 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26098_27736 = state_26046__$1;
(statearr_26098_27736[(2)] = inst_26030);

(statearr_26098_27736[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (44))){
var inst_26039 = (state_26046[(2)]);
var state_26046__$1 = (function (){var statearr_26099 = state_26046;
(statearr_26099[(28)] = inst_26039);

return statearr_26099;
})();
var statearr_26100_27737 = state_26046__$1;
(statearr_26100_27737[(2)] = null);

(statearr_26100_27737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (6))){
var inst_25975 = (state_26046[(29)]);
var inst_25974 = cljs.core.deref(cs);
var inst_25975__$1 = cljs.core.keys(inst_25974);
var inst_25976 = cljs.core.count(inst_25975__$1);
var inst_25977 = cljs.core.reset_BANG_(dctr,inst_25976);
var inst_25982 = cljs.core.seq(inst_25975__$1);
var inst_25983 = inst_25982;
var inst_25984 = null;
var inst_25985 = (0);
var inst_25986 = (0);
var state_26046__$1 = (function (){var statearr_26101 = state_26046;
(statearr_26101[(20)] = inst_25983);

(statearr_26101[(10)] = inst_25984);

(statearr_26101[(21)] = inst_25985);

(statearr_26101[(11)] = inst_25986);

(statearr_26101[(30)] = inst_25977);

(statearr_26101[(29)] = inst_25975__$1);

return statearr_26101;
})();
var statearr_26102_27738 = state_26046__$1;
(statearr_26102_27738[(2)] = null);

(statearr_26102_27738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (28))){
var inst_25983 = (state_26046[(20)]);
var inst_26005 = (state_26046[(25)]);
var inst_26005__$1 = cljs.core.seq(inst_25983);
var state_26046__$1 = (function (){var statearr_26103 = state_26046;
(statearr_26103[(25)] = inst_26005__$1);

return statearr_26103;
})();
if(inst_26005__$1){
var statearr_26104_27739 = state_26046__$1;
(statearr_26104_27739[(1)] = (33));

} else {
var statearr_26105_27740 = state_26046__$1;
(statearr_26105_27740[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (25))){
var inst_25985 = (state_26046[(21)]);
var inst_25986 = (state_26046[(11)]);
var inst_25988 = (inst_25986 < inst_25985);
var inst_25989 = inst_25988;
var state_26046__$1 = state_26046;
if(cljs.core.truth_(inst_25989)){
var statearr_26107_27741 = state_26046__$1;
(statearr_26107_27741[(1)] = (27));

} else {
var statearr_26108_27748 = state_26046__$1;
(statearr_26108_27748[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (34))){
var state_26046__$1 = state_26046;
var statearr_26114_27749 = state_26046__$1;
(statearr_26114_27749[(2)] = null);

(statearr_26114_27749[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (17))){
var state_26046__$1 = state_26046;
var statearr_26115_27750 = state_26046__$1;
(statearr_26115_27750[(2)] = null);

(statearr_26115_27750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (3))){
var inst_26044 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26046__$1,inst_26044);
} else {
if((state_val_26047 === (12))){
var inst_25970 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26116_27751 = state_26046__$1;
(statearr_26116_27751[(2)] = inst_25970);

(statearr_26116_27751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (2))){
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26046__$1,(4),ch);
} else {
if((state_val_26047 === (23))){
var state_26046__$1 = state_26046;
var statearr_26117_27752 = state_26046__$1;
(statearr_26117_27752[(2)] = null);

(statearr_26117_27752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (35))){
var inst_26028 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26124_27753 = state_26046__$1;
(statearr_26124_27753[(2)] = inst_26028);

(statearr_26124_27753[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (19))){
var inst_25940 = (state_26046[(7)]);
var inst_25944 = cljs.core.chunk_first(inst_25940);
var inst_25945 = cljs.core.chunk_rest(inst_25940);
var inst_25946 = cljs.core.count(inst_25944);
var inst_25915 = inst_25945;
var inst_25916 = inst_25944;
var inst_25917 = inst_25946;
var inst_25918 = (0);
var state_26046__$1 = (function (){var statearr_26125 = state_26046;
(statearr_26125[(14)] = inst_25917);

(statearr_26125[(15)] = inst_25918);

(statearr_26125[(16)] = inst_25916);

(statearr_26125[(17)] = inst_25915);

return statearr_26125;
})();
var statearr_26126_27754 = state_26046__$1;
(statearr_26126_27754[(2)] = null);

(statearr_26126_27754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (11))){
var inst_25940 = (state_26046[(7)]);
var inst_25915 = (state_26046[(17)]);
var inst_25940__$1 = cljs.core.seq(inst_25915);
var state_26046__$1 = (function (){var statearr_26128 = state_26046;
(statearr_26128[(7)] = inst_25940__$1);

return statearr_26128;
})();
if(inst_25940__$1){
var statearr_26130_27755 = state_26046__$1;
(statearr_26130_27755[(1)] = (16));

} else {
var statearr_26131_27756 = state_26046__$1;
(statearr_26131_27756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (9))){
var inst_25972 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26136_27757 = state_26046__$1;
(statearr_26136_27757[(2)] = inst_25972);

(statearr_26136_27757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (5))){
var inst_25913 = cljs.core.deref(cs);
var inst_25914 = cljs.core.seq(inst_25913);
var inst_25915 = inst_25914;
var inst_25916 = null;
var inst_25917 = (0);
var inst_25918 = (0);
var state_26046__$1 = (function (){var statearr_26137 = state_26046;
(statearr_26137[(14)] = inst_25917);

(statearr_26137[(15)] = inst_25918);

(statearr_26137[(16)] = inst_25916);

(statearr_26137[(17)] = inst_25915);

return statearr_26137;
})();
var statearr_26139_27764 = state_26046__$1;
(statearr_26139_27764[(2)] = null);

(statearr_26139_27764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (14))){
var state_26046__$1 = state_26046;
var statearr_26140_27765 = state_26046__$1;
(statearr_26140_27765[(2)] = null);

(statearr_26140_27765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (45))){
var inst_26036 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26141_27766 = state_26046__$1;
(statearr_26141_27766[(2)] = inst_26036);

(statearr_26141_27766[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (26))){
var inst_25975 = (state_26046[(29)]);
var inst_26032 = (state_26046[(2)]);
var inst_26033 = cljs.core.seq(inst_25975);
var state_26046__$1 = (function (){var statearr_26143 = state_26046;
(statearr_26143[(31)] = inst_26032);

return statearr_26143;
})();
if(inst_26033){
var statearr_26144_27767 = state_26046__$1;
(statearr_26144_27767[(1)] = (42));

} else {
var statearr_26145_27768 = state_26046__$1;
(statearr_26145_27768[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (16))){
var inst_25940 = (state_26046[(7)]);
var inst_25942 = cljs.core.chunked_seq_QMARK_(inst_25940);
var state_26046__$1 = state_26046;
if(inst_25942){
var statearr_26146_27769 = state_26046__$1;
(statearr_26146_27769[(1)] = (19));

} else {
var statearr_26147_27770 = state_26046__$1;
(statearr_26147_27770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (38))){
var inst_26025 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26149_27771 = state_26046__$1;
(statearr_26149_27771[(2)] = inst_26025);

(statearr_26149_27771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (30))){
var state_26046__$1 = state_26046;
var statearr_26150_27772 = state_26046__$1;
(statearr_26150_27772[(2)] = null);

(statearr_26150_27772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (10))){
var inst_25918 = (state_26046[(15)]);
var inst_25916 = (state_26046[(16)]);
var inst_25929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25916,inst_25918);
var inst_25930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25929,(0),null);
var inst_25931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25929,(1),null);
var state_26046__$1 = (function (){var statearr_26151 = state_26046;
(statearr_26151[(26)] = inst_25930);

return statearr_26151;
})();
if(cljs.core.truth_(inst_25931)){
var statearr_26152_27773 = state_26046__$1;
(statearr_26152_27773[(1)] = (13));

} else {
var statearr_26156_27774 = state_26046__$1;
(statearr_26156_27774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (18))){
var inst_25968 = (state_26046[(2)]);
var state_26046__$1 = state_26046;
var statearr_26159_27781 = state_26046__$1;
(statearr_26159_27781[(2)] = inst_25968);

(statearr_26159_27781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (42))){
var state_26046__$1 = state_26046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26046__$1,(45),dchan);
} else {
if((state_val_26047 === (37))){
var inst_26005 = (state_26046[(25)]);
var inst_26014 = (state_26046[(23)]);
var inst_25906 = (state_26046[(12)]);
var inst_26014__$1 = cljs.core.first(inst_26005);
var inst_26015 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26014__$1,inst_25906,done);
var state_26046__$1 = (function (){var statearr_26161 = state_26046;
(statearr_26161[(23)] = inst_26014__$1);

return statearr_26161;
})();
if(cljs.core.truth_(inst_26015)){
var statearr_26162_27782 = state_26046__$1;
(statearr_26162_27782[(1)] = (39));

} else {
var statearr_26163_27783 = state_26046__$1;
(statearr_26163_27783[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26047 === (8))){
var inst_25917 = (state_26046[(14)]);
var inst_25918 = (state_26046[(15)]);
var inst_25920 = (inst_25918 < inst_25917);
var inst_25921 = inst_25920;
var state_26046__$1 = state_26046;
if(cljs.core.truth_(inst_25921)){
var statearr_26164_27784 = state_26046__$1;
(statearr_26164_27784[(1)] = (10));

} else {
var statearr_26165_27785 = state_26046__$1;
(statearr_26165_27785[(1)] = (11));

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
});})(c__24903__auto___27686,cs,m,dchan,dctr,done))
;
return ((function (switch__24631__auto__,c__24903__auto___27686,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24632__auto__ = null;
var cljs$core$async$mult_$_state_machine__24632__auto____0 = (function (){
var statearr_26167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26167[(0)] = cljs$core$async$mult_$_state_machine__24632__auto__);

(statearr_26167[(1)] = (1));

return statearr_26167;
});
var cljs$core$async$mult_$_state_machine__24632__auto____1 = (function (state_26046){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_26046);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e26168){if((e26168 instanceof Object)){
var ex__24635__auto__ = e26168;
var statearr_26169_27786 = state_26046;
(statearr_26169_27786[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27787 = state_26046;
state_26046 = G__27787;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24632__auto__ = function(state_26046){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24632__auto____1.call(this,state_26046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24632__auto____0;
cljs$core$async$mult_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24632__auto____1;
return cljs$core$async$mult_$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27686,cs,m,dchan,dctr,done))
})();
var state__24905__auto__ = (function (){var statearr_26173 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_26173[(6)] = c__24903__auto___27686);

return statearr_26173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27686,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26175 = arguments.length;
switch (G__26175) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27790 = arguments.length;
var i__4731__auto___27791 = (0);
while(true){
if((i__4731__auto___27791 < len__4730__auto___27790)){
args__4736__auto__.push((arguments[i__4731__auto___27791]));

var G__27792 = (i__4731__auto___27791 + (1));
i__4731__auto___27791 = G__27792;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26255){
var map__26256 = p__26255;
var map__26256__$1 = (((((!((map__26256 == null))))?(((((map__26256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26256):map__26256);
var opts = map__26256__$1;
var statearr_26258_27798 = state;
(statearr_26258_27798[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__26256,map__26256__$1,opts){
return (function (val){
var statearr_26262_27799 = state;
(statearr_26262_27799[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26256,map__26256__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26263_27800 = state;
(statearr_26263_27800[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26251){
var G__26252 = cljs.core.first(seq26251);
var seq26251__$1 = cljs.core.next(seq26251);
var G__26253 = cljs.core.first(seq26251__$1);
var seq26251__$2 = cljs.core.next(seq26251__$1);
var G__26254 = cljs.core.first(seq26251__$2);
var seq26251__$3 = cljs.core.next(seq26251__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26252,G__26253,G__26254,seq26251__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26270 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26271){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26271 = meta26271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26272,meta26271__$1){
var self__ = this;
var _26272__$1 = this;
return (new cljs.core.async.t_cljs$core$async26270(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26271__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26272){
var self__ = this;
var _26272__$1 = this;
return self__.meta26271;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26271","meta26271",-699135602,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26270";

cljs.core.async.t_cljs$core$async26270.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26270");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26270.
 */
cljs.core.async.__GT_t_cljs$core$async26270 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26270(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26271){
return (new cljs.core.async.t_cljs$core$async26270(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26271));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26270(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24903__auto___27807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26378){
var state_val_26379 = (state_26378[(1)]);
if((state_val_26379 === (7))){
var inst_26291 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26381_27810 = state_26378__$1;
(statearr_26381_27810[(2)] = inst_26291);

(statearr_26381_27810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (20))){
var inst_26303 = (state_26378[(7)]);
var state_26378__$1 = state_26378;
var statearr_26382_27811 = state_26378__$1;
(statearr_26382_27811[(2)] = inst_26303);

(statearr_26382_27811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (27))){
var state_26378__$1 = state_26378;
var statearr_26383_27812 = state_26378__$1;
(statearr_26383_27812[(2)] = null);

(statearr_26383_27812[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (1))){
var inst_26278 = (state_26378[(8)]);
var inst_26278__$1 = calc_state();
var inst_26280 = (inst_26278__$1 == null);
var inst_26281 = cljs.core.not(inst_26280);
var state_26378__$1 = (function (){var statearr_26384 = state_26378;
(statearr_26384[(8)] = inst_26278__$1);

return statearr_26384;
})();
if(inst_26281){
var statearr_26385_27813 = state_26378__$1;
(statearr_26385_27813[(1)] = (2));

} else {
var statearr_26386_27814 = state_26378__$1;
(statearr_26386_27814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (24))){
var inst_26328 = (state_26378[(9)]);
var inst_26352 = (state_26378[(10)]);
var inst_26337 = (state_26378[(11)]);
var inst_26352__$1 = (inst_26328.cljs$core$IFn$_invoke$arity$1 ? inst_26328.cljs$core$IFn$_invoke$arity$1(inst_26337) : inst_26328.call(null,inst_26337));
var state_26378__$1 = (function (){var statearr_26387 = state_26378;
(statearr_26387[(10)] = inst_26352__$1);

return statearr_26387;
})();
if(cljs.core.truth_(inst_26352__$1)){
var statearr_26388_27815 = state_26378__$1;
(statearr_26388_27815[(1)] = (29));

} else {
var statearr_26389_27816 = state_26378__$1;
(statearr_26389_27816[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (4))){
var inst_26294 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26294)){
var statearr_26390_27817 = state_26378__$1;
(statearr_26390_27817[(1)] = (8));

} else {
var statearr_26391_27818 = state_26378__$1;
(statearr_26391_27818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (15))){
var inst_26321 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26321)){
var statearr_26392_27819 = state_26378__$1;
(statearr_26392_27819[(1)] = (19));

} else {
var statearr_26393_27820 = state_26378__$1;
(statearr_26393_27820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (21))){
var inst_26327 = (state_26378[(12)]);
var inst_26327__$1 = (state_26378[(2)]);
var inst_26328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26327__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26327__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26327__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26378__$1 = (function (){var statearr_26394 = state_26378;
(statearr_26394[(9)] = inst_26328);

(statearr_26394[(12)] = inst_26327__$1);

(statearr_26394[(13)] = inst_26329);

return statearr_26394;
})();
return cljs.core.async.ioc_alts_BANG_(state_26378__$1,(22),inst_26330);
} else {
if((state_val_26379 === (31))){
var inst_26360 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26360)){
var statearr_26395_27821 = state_26378__$1;
(statearr_26395_27821[(1)] = (32));

} else {
var statearr_26396_27822 = state_26378__$1;
(statearr_26396_27822[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (32))){
var inst_26336 = (state_26378[(14)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26378__$1,(35),out,inst_26336);
} else {
if((state_val_26379 === (33))){
var inst_26327 = (state_26378[(12)]);
var inst_26303 = inst_26327;
var state_26378__$1 = (function (){var statearr_26397 = state_26378;
(statearr_26397[(7)] = inst_26303);

return statearr_26397;
})();
var statearr_26398_27823 = state_26378__$1;
(statearr_26398_27823[(2)] = null);

(statearr_26398_27823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (13))){
var inst_26303 = (state_26378[(7)]);
var inst_26310 = inst_26303.cljs$lang$protocol_mask$partition0$;
var inst_26311 = (inst_26310 & (64));
var inst_26312 = inst_26303.cljs$core$ISeq$;
var inst_26313 = (cljs.core.PROTOCOL_SENTINEL === inst_26312);
var inst_26314 = ((inst_26311) || (inst_26313));
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26314)){
var statearr_26399_27825 = state_26378__$1;
(statearr_26399_27825[(1)] = (16));

} else {
var statearr_26400_27826 = state_26378__$1;
(statearr_26400_27826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (22))){
var inst_26336 = (state_26378[(14)]);
var inst_26337 = (state_26378[(11)]);
var inst_26335 = (state_26378[(2)]);
var inst_26336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26335,(0),null);
var inst_26337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26335,(1),null);
var inst_26338 = (inst_26336__$1 == null);
var inst_26339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26337__$1,change);
var inst_26340 = ((inst_26338) || (inst_26339));
var state_26378__$1 = (function (){var statearr_26401 = state_26378;
(statearr_26401[(14)] = inst_26336__$1);

(statearr_26401[(11)] = inst_26337__$1);

return statearr_26401;
})();
if(cljs.core.truth_(inst_26340)){
var statearr_26402_27831 = state_26378__$1;
(statearr_26402_27831[(1)] = (23));

} else {
var statearr_26403_27832 = state_26378__$1;
(statearr_26403_27832[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (36))){
var inst_26327 = (state_26378[(12)]);
var inst_26303 = inst_26327;
var state_26378__$1 = (function (){var statearr_26404 = state_26378;
(statearr_26404[(7)] = inst_26303);

return statearr_26404;
})();
var statearr_26405_27833 = state_26378__$1;
(statearr_26405_27833[(2)] = null);

(statearr_26405_27833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (29))){
var inst_26352 = (state_26378[(10)]);
var state_26378__$1 = state_26378;
var statearr_26406_27834 = state_26378__$1;
(statearr_26406_27834[(2)] = inst_26352);

(statearr_26406_27834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (6))){
var state_26378__$1 = state_26378;
var statearr_26407_27835 = state_26378__$1;
(statearr_26407_27835[(2)] = false);

(statearr_26407_27835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (28))){
var inst_26348 = (state_26378[(2)]);
var inst_26349 = calc_state();
var inst_26303 = inst_26349;
var state_26378__$1 = (function (){var statearr_26408 = state_26378;
(statearr_26408[(15)] = inst_26348);

(statearr_26408[(7)] = inst_26303);

return statearr_26408;
})();
var statearr_26409_27836 = state_26378__$1;
(statearr_26409_27836[(2)] = null);

(statearr_26409_27836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (25))){
var inst_26374 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26410_27837 = state_26378__$1;
(statearr_26410_27837[(2)] = inst_26374);

(statearr_26410_27837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (34))){
var inst_26372 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26411_27838 = state_26378__$1;
(statearr_26411_27838[(2)] = inst_26372);

(statearr_26411_27838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (17))){
var state_26378__$1 = state_26378;
var statearr_26412_27839 = state_26378__$1;
(statearr_26412_27839[(2)] = false);

(statearr_26412_27839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (3))){
var state_26378__$1 = state_26378;
var statearr_26413_27840 = state_26378__$1;
(statearr_26413_27840[(2)] = false);

(statearr_26413_27840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (12))){
var inst_26376 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26378__$1,inst_26376);
} else {
if((state_val_26379 === (2))){
var inst_26278 = (state_26378[(8)]);
var inst_26283 = inst_26278.cljs$lang$protocol_mask$partition0$;
var inst_26284 = (inst_26283 & (64));
var inst_26285 = inst_26278.cljs$core$ISeq$;
var inst_26286 = (cljs.core.PROTOCOL_SENTINEL === inst_26285);
var inst_26287 = ((inst_26284) || (inst_26286));
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26287)){
var statearr_26415_27841 = state_26378__$1;
(statearr_26415_27841[(1)] = (5));

} else {
var statearr_26416_27842 = state_26378__$1;
(statearr_26416_27842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (23))){
var inst_26336 = (state_26378[(14)]);
var inst_26343 = (inst_26336 == null);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26343)){
var statearr_26417_27847 = state_26378__$1;
(statearr_26417_27847[(1)] = (26));

} else {
var statearr_26418_27848 = state_26378__$1;
(statearr_26418_27848[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (35))){
var inst_26363 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26363)){
var statearr_26419_27852 = state_26378__$1;
(statearr_26419_27852[(1)] = (36));

} else {
var statearr_26420_27853 = state_26378__$1;
(statearr_26420_27853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (19))){
var inst_26303 = (state_26378[(7)]);
var inst_26324 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26303);
var state_26378__$1 = state_26378;
var statearr_26421_27857 = state_26378__$1;
(statearr_26421_27857[(2)] = inst_26324);

(statearr_26421_27857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (11))){
var inst_26303 = (state_26378[(7)]);
var inst_26307 = (inst_26303 == null);
var inst_26308 = cljs.core.not(inst_26307);
var state_26378__$1 = state_26378;
if(inst_26308){
var statearr_26422_27858 = state_26378__$1;
(statearr_26422_27858[(1)] = (13));

} else {
var statearr_26423_27862 = state_26378__$1;
(statearr_26423_27862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (9))){
var inst_26278 = (state_26378[(8)]);
var state_26378__$1 = state_26378;
var statearr_26424_27863 = state_26378__$1;
(statearr_26424_27863[(2)] = inst_26278);

(statearr_26424_27863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (5))){
var state_26378__$1 = state_26378;
var statearr_26425_27864 = state_26378__$1;
(statearr_26425_27864[(2)] = true);

(statearr_26425_27864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (14))){
var state_26378__$1 = state_26378;
var statearr_26426_27865 = state_26378__$1;
(statearr_26426_27865[(2)] = false);

(statearr_26426_27865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (26))){
var inst_26337 = (state_26378[(11)]);
var inst_26345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26337);
var state_26378__$1 = state_26378;
var statearr_26428_27866 = state_26378__$1;
(statearr_26428_27866[(2)] = inst_26345);

(statearr_26428_27866[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (16))){
var state_26378__$1 = state_26378;
var statearr_26430_27870 = state_26378__$1;
(statearr_26430_27870[(2)] = true);

(statearr_26430_27870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (38))){
var inst_26368 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26431_27871 = state_26378__$1;
(statearr_26431_27871[(2)] = inst_26368);

(statearr_26431_27871[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (30))){
var inst_26328 = (state_26378[(9)]);
var inst_26329 = (state_26378[(13)]);
var inst_26337 = (state_26378[(11)]);
var inst_26355 = cljs.core.empty_QMARK_(inst_26328);
var inst_26356 = (inst_26329.cljs$core$IFn$_invoke$arity$1 ? inst_26329.cljs$core$IFn$_invoke$arity$1(inst_26337) : inst_26329.call(null,inst_26337));
var inst_26357 = cljs.core.not(inst_26356);
var inst_26358 = ((inst_26355) && (inst_26357));
var state_26378__$1 = state_26378;
var statearr_26432_27876 = state_26378__$1;
(statearr_26432_27876[(2)] = inst_26358);

(statearr_26432_27876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (10))){
var inst_26278 = (state_26378[(8)]);
var inst_26299 = (state_26378[(2)]);
var inst_26300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26299,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26299,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26299,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26303 = inst_26278;
var state_26378__$1 = (function (){var statearr_26433 = state_26378;
(statearr_26433[(16)] = inst_26301);

(statearr_26433[(7)] = inst_26303);

(statearr_26433[(17)] = inst_26300);

(statearr_26433[(18)] = inst_26302);

return statearr_26433;
})();
var statearr_26434_27877 = state_26378__$1;
(statearr_26434_27877[(2)] = null);

(statearr_26434_27877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (18))){
var inst_26318 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26435_27880 = state_26378__$1;
(statearr_26435_27880[(2)] = inst_26318);

(statearr_26435_27880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (37))){
var state_26378__$1 = state_26378;
var statearr_26436_27881 = state_26378__$1;
(statearr_26436_27881[(2)] = null);

(statearr_26436_27881[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (8))){
var inst_26278 = (state_26378[(8)]);
var inst_26296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26278);
var state_26378__$1 = state_26378;
var statearr_26437_27883 = state_26378__$1;
(statearr_26437_27883[(2)] = inst_26296);

(statearr_26437_27883[(1)] = (10));


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
});})(c__24903__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24631__auto__,c__24903__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24632__auto__ = null;
var cljs$core$async$mix_$_state_machine__24632__auto____0 = (function (){
var statearr_26438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26438[(0)] = cljs$core$async$mix_$_state_machine__24632__auto__);

(statearr_26438[(1)] = (1));

return statearr_26438;
});
var cljs$core$async$mix_$_state_machine__24632__auto____1 = (function (state_26378){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_26378);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e26447){if((e26447 instanceof Object)){
var ex__24635__auto__ = e26447;
var statearr_26452_27885 = state_26378;
(statearr_26452_27885[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27886 = state_26378;
state_26378 = G__27886;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24632__auto__ = function(state_26378){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24632__auto____1.call(this,state_26378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24632__auto____0;
cljs$core$async$mix_$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24632__auto____1;
return cljs$core$async$mix_$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24905__auto__ = (function (){var statearr_26457 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_26457[(6)] = c__24903__auto___27807);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26484 = arguments.length;
switch (G__26484) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__26492 = arguments.length;
switch (G__26492) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__26485_SHARP_){
if(cljs.core.truth_((p1__26485_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26485_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26485_SHARP_.call(null,topic)))){
return p1__26485_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26485_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26505 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26506){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26506 = meta26506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26507,meta26506__$1){
var self__ = this;
var _26507__$1 = this;
return (new cljs.core.async.t_cljs$core$async26505(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26506__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26507){
var self__ = this;
var _26507__$1 = this;
return self__.meta26506;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26506","meta26506",-222803701,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26505";

cljs.core.async.t_cljs$core$async26505.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async26505");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26505.
 */
cljs.core.async.__GT_t_cljs$core$async26505 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26505(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26506){
return (new cljs.core.async.t_cljs$core$async26505(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26506));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26505(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24903__auto___27907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27907,mults,ensure_mult,p){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27907,mults,ensure_mult,p){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26607 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26617_27909 = state_26612__$1;
(statearr_26617_27909[(2)] = inst_26607);

(statearr_26617_27909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (20))){
var state_26612__$1 = state_26612;
var statearr_26619_27913 = state_26612__$1;
(statearr_26619_27913[(2)] = null);

(statearr_26619_27913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26621_27914 = state_26612__$1;
(statearr_26621_27914[(2)] = null);

(statearr_26621_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (24))){
var inst_26586 = (state_26612[(7)]);
var inst_26595 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26586);
var state_26612__$1 = state_26612;
var statearr_26624_27915 = state_26612__$1;
(statearr_26624_27915[(2)] = inst_26595);

(statearr_26624_27915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26534 = (state_26612[(8)]);
var inst_26534__$1 = (state_26612[(2)]);
var inst_26536 = (inst_26534__$1 == null);
var state_26612__$1 = (function (){var statearr_26628 = state_26612;
(statearr_26628[(8)] = inst_26534__$1);

return statearr_26628;
})();
if(cljs.core.truth_(inst_26536)){
var statearr_26629_27916 = state_26612__$1;
(statearr_26629_27916[(1)] = (5));

} else {
var statearr_26630_27917 = state_26612__$1;
(statearr_26630_27917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (15))){
var inst_26580 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26633_27918 = state_26612__$1;
(statearr_26633_27918[(2)] = inst_26580);

(statearr_26633_27918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (21))){
var inst_26600 = (state_26612[(2)]);
var state_26612__$1 = (function (){var statearr_26636 = state_26612;
(statearr_26636[(9)] = inst_26600);

return statearr_26636;
})();
var statearr_26638_27919 = state_26612__$1;
(statearr_26638_27919[(2)] = null);

(statearr_26638_27919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (13))){
var inst_26562 = (state_26612[(10)]);
var inst_26564 = cljs.core.chunked_seq_QMARK_(inst_26562);
var state_26612__$1 = state_26612;
if(inst_26564){
var statearr_26641_27920 = state_26612__$1;
(statearr_26641_27920[(1)] = (16));

} else {
var statearr_26642_27921 = state_26612__$1;
(statearr_26642_27921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (22))){
var inst_26592 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26592)){
var statearr_26646_27922 = state_26612__$1;
(statearr_26646_27922[(1)] = (23));

} else {
var statearr_26648_27923 = state_26612__$1;
(statearr_26648_27923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26588 = (state_26612[(11)]);
var inst_26586 = (state_26612[(7)]);
var inst_26534 = (state_26612[(8)]);
var inst_26586__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26534) : topic_fn.call(null,inst_26534));
var inst_26587 = cljs.core.deref(mults);
var inst_26588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26587,inst_26586__$1);
var state_26612__$1 = (function (){var statearr_26654 = state_26612;
(statearr_26654[(11)] = inst_26588__$1);

(statearr_26654[(7)] = inst_26586__$1);

return statearr_26654;
})();
if(cljs.core.truth_(inst_26588__$1)){
var statearr_26656_27925 = state_26612__$1;
(statearr_26656_27925[(1)] = (19));

} else {
var statearr_26658_27926 = state_26612__$1;
(statearr_26658_27926[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (25))){
var inst_26597 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26660_27927 = state_26612__$1;
(statearr_26660_27927[(2)] = inst_26597);

(statearr_26660_27927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (17))){
var inst_26562 = (state_26612[(10)]);
var inst_26571 = cljs.core.first(inst_26562);
var inst_26572 = cljs.core.async.muxch_STAR_(inst_26571);
var inst_26573 = cljs.core.async.close_BANG_(inst_26572);
var inst_26574 = cljs.core.next(inst_26562);
var inst_26546 = inst_26574;
var inst_26547 = null;
var inst_26548 = (0);
var inst_26549 = (0);
var state_26612__$1 = (function (){var statearr_26663 = state_26612;
(statearr_26663[(12)] = inst_26573);

(statearr_26663[(13)] = inst_26547);

(statearr_26663[(14)] = inst_26549);

(statearr_26663[(15)] = inst_26548);

(statearr_26663[(16)] = inst_26546);

return statearr_26663;
})();
var statearr_26664_27928 = state_26612__$1;
(statearr_26664_27928[(2)] = null);

(statearr_26664_27928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (3))){
var inst_26609 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26612__$1,inst_26609);
} else {
if((state_val_26613 === (12))){
var inst_26582 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26665_27929 = state_26612__$1;
(statearr_26665_27929[(2)] = inst_26582);

(statearr_26665_27929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26612__$1,(4),ch);
} else {
if((state_val_26613 === (23))){
var state_26612__$1 = state_26612;
var statearr_26666_27930 = state_26612__$1;
(statearr_26666_27930[(2)] = null);

(statearr_26666_27930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (19))){
var inst_26588 = (state_26612[(11)]);
var inst_26534 = (state_26612[(8)]);
var inst_26590 = cljs.core.async.muxch_STAR_(inst_26588);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26612__$1,(22),inst_26590,inst_26534);
} else {
if((state_val_26613 === (11))){
var inst_26562 = (state_26612[(10)]);
var inst_26546 = (state_26612[(16)]);
var inst_26562__$1 = cljs.core.seq(inst_26546);
var state_26612__$1 = (function (){var statearr_26670 = state_26612;
(statearr_26670[(10)] = inst_26562__$1);

return statearr_26670;
})();
if(inst_26562__$1){
var statearr_26671_27938 = state_26612__$1;
(statearr_26671_27938[(1)] = (13));

} else {
var statearr_26672_27939 = state_26612__$1;
(statearr_26672_27939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (9))){
var inst_26584 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26677_27940 = state_26612__$1;
(statearr_26677_27940[(2)] = inst_26584);

(statearr_26677_27940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26542 = cljs.core.deref(mults);
var inst_26543 = cljs.core.vals(inst_26542);
var inst_26544 = cljs.core.seq(inst_26543);
var inst_26546 = inst_26544;
var inst_26547 = null;
var inst_26548 = (0);
var inst_26549 = (0);
var state_26612__$1 = (function (){var statearr_26681 = state_26612;
(statearr_26681[(13)] = inst_26547);

(statearr_26681[(14)] = inst_26549);

(statearr_26681[(15)] = inst_26548);

(statearr_26681[(16)] = inst_26546);

return statearr_26681;
})();
var statearr_26684_27941 = state_26612__$1;
(statearr_26684_27941[(2)] = null);

(statearr_26684_27941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (14))){
var state_26612__$1 = state_26612;
var statearr_26689_27942 = state_26612__$1;
(statearr_26689_27942[(2)] = null);

(statearr_26689_27942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (16))){
var inst_26562 = (state_26612[(10)]);
var inst_26566 = cljs.core.chunk_first(inst_26562);
var inst_26567 = cljs.core.chunk_rest(inst_26562);
var inst_26568 = cljs.core.count(inst_26566);
var inst_26546 = inst_26567;
var inst_26547 = inst_26566;
var inst_26548 = inst_26568;
var inst_26549 = (0);
var state_26612__$1 = (function (){var statearr_26693 = state_26612;
(statearr_26693[(13)] = inst_26547);

(statearr_26693[(14)] = inst_26549);

(statearr_26693[(15)] = inst_26548);

(statearr_26693[(16)] = inst_26546);

return statearr_26693;
})();
var statearr_26694_27943 = state_26612__$1;
(statearr_26694_27943[(2)] = null);

(statearr_26694_27943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (10))){
var inst_26547 = (state_26612[(13)]);
var inst_26549 = (state_26612[(14)]);
var inst_26548 = (state_26612[(15)]);
var inst_26546 = (state_26612[(16)]);
var inst_26556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26547,inst_26549);
var inst_26557 = cljs.core.async.muxch_STAR_(inst_26556);
var inst_26558 = cljs.core.async.close_BANG_(inst_26557);
var inst_26559 = (inst_26549 + (1));
var tmp26685 = inst_26547;
var tmp26686 = inst_26548;
var tmp26687 = inst_26546;
var inst_26546__$1 = tmp26687;
var inst_26547__$1 = tmp26685;
var inst_26548__$1 = tmp26686;
var inst_26549__$1 = inst_26559;
var state_26612__$1 = (function (){var statearr_26698 = state_26612;
(statearr_26698[(17)] = inst_26558);

(statearr_26698[(13)] = inst_26547__$1);

(statearr_26698[(14)] = inst_26549__$1);

(statearr_26698[(15)] = inst_26548__$1);

(statearr_26698[(16)] = inst_26546__$1);

return statearr_26698;
})();
var statearr_26703_27944 = state_26612__$1;
(statearr_26703_27944[(2)] = null);

(statearr_26703_27944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (18))){
var inst_26577 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26706_27945 = state_26612__$1;
(statearr_26706_27945[(2)] = inst_26577);

(statearr_26706_27945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (8))){
var inst_26549 = (state_26612[(14)]);
var inst_26548 = (state_26612[(15)]);
var inst_26552 = (inst_26549 < inst_26548);
var inst_26554 = inst_26552;
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26554)){
var statearr_26711_27947 = state_26612__$1;
(statearr_26711_27947[(1)] = (10));

} else {
var statearr_26712_27948 = state_26612__$1;
(statearr_26712_27948[(1)] = (11));

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
});})(c__24903__auto___27907,mults,ensure_mult,p))
;
return ((function (switch__24631__auto__,c__24903__auto___27907,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_26713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26713[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_26713[(1)] = (1));

return statearr_26713;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_26612){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_26612);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e26716){if((e26716 instanceof Object)){
var ex__24635__auto__ = e26716;
var statearr_26717_27950 = state_26612;
(statearr_26717_27950[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27951 = state_26612;
state_26612 = G__27951;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27907,mults,ensure_mult,p))
})();
var state__24905__auto__ = (function (){var statearr_26723 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_26723[(6)] = c__24903__auto___27907);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27907,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26733 = arguments.length;
switch (G__26733) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__26750 = arguments.length;
switch (G__26750) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__26766 = arguments.length;
switch (G__26766) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__24903__auto___27963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26819){
var state_val_26820 = (state_26819[(1)]);
if((state_val_26820 === (7))){
var state_26819__$1 = state_26819;
var statearr_26824_27965 = state_26819__$1;
(statearr_26824_27965[(2)] = null);

(statearr_26824_27965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (1))){
var state_26819__$1 = state_26819;
var statearr_26828_27969 = state_26819__$1;
(statearr_26828_27969[(2)] = null);

(statearr_26828_27969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (4))){
var inst_26771 = (state_26819[(7)]);
var inst_26773 = (inst_26771 < cnt);
var state_26819__$1 = state_26819;
if(cljs.core.truth_(inst_26773)){
var statearr_26830_27970 = state_26819__$1;
(statearr_26830_27970[(1)] = (6));

} else {
var statearr_26831_27971 = state_26819__$1;
(statearr_26831_27971[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (15))){
var inst_26815 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
var statearr_26832_27972 = state_26819__$1;
(statearr_26832_27972[(2)] = inst_26815);

(statearr_26832_27972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (13))){
var inst_26808 = cljs.core.async.close_BANG_(out);
var state_26819__$1 = state_26819;
var statearr_26833_27973 = state_26819__$1;
(statearr_26833_27973[(2)] = inst_26808);

(statearr_26833_27973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (6))){
var state_26819__$1 = state_26819;
var statearr_26836_27974 = state_26819__$1;
(statearr_26836_27974[(2)] = null);

(statearr_26836_27974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (3))){
var inst_26817 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26819__$1,inst_26817);
} else {
if((state_val_26820 === (12))){
var inst_26805 = (state_26819[(8)]);
var inst_26805__$1 = (state_26819[(2)]);
var inst_26806 = cljs.core.some(cljs.core.nil_QMARK_,inst_26805__$1);
var state_26819__$1 = (function (){var statearr_26837 = state_26819;
(statearr_26837[(8)] = inst_26805__$1);

return statearr_26837;
})();
if(cljs.core.truth_(inst_26806)){
var statearr_26843_27975 = state_26819__$1;
(statearr_26843_27975[(1)] = (13));

} else {
var statearr_26848_27976 = state_26819__$1;
(statearr_26848_27976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (2))){
var inst_26770 = cljs.core.reset_BANG_(dctr,cnt);
var inst_26771 = (0);
var state_26819__$1 = (function (){var statearr_26854 = state_26819;
(statearr_26854[(9)] = inst_26770);

(statearr_26854[(7)] = inst_26771);

return statearr_26854;
})();
var statearr_26855_27977 = state_26819__$1;
(statearr_26855_27977[(2)] = null);

(statearr_26855_27977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (11))){
var inst_26771 = (state_26819[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26819,(10),Object,null,(9));
var inst_26790 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26771) : chs__$1.call(null,inst_26771));
var inst_26791 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26771) : done.call(null,inst_26771));
var inst_26792 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26790,inst_26791);
var state_26819__$1 = state_26819;
var statearr_26865_27978 = state_26819__$1;
(statearr_26865_27978[(2)] = inst_26792);


cljs.core.async.impl.ioc_helpers.process_exception(state_26819__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (9))){
var inst_26771 = (state_26819[(7)]);
var inst_26794 = (state_26819[(2)]);
var inst_26795 = (inst_26771 + (1));
var inst_26771__$1 = inst_26795;
var state_26819__$1 = (function (){var statearr_26872 = state_26819;
(statearr_26872[(7)] = inst_26771__$1);

(statearr_26872[(10)] = inst_26794);

return statearr_26872;
})();
var statearr_26873_27980 = state_26819__$1;
(statearr_26873_27980[(2)] = null);

(statearr_26873_27980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (5))){
var inst_26803 = (state_26819[(2)]);
var state_26819__$1 = (function (){var statearr_26874 = state_26819;
(statearr_26874[(11)] = inst_26803);

return statearr_26874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26819__$1,(12),dchan);
} else {
if((state_val_26820 === (14))){
var inst_26805 = (state_26819[(8)]);
var inst_26810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26805);
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26819__$1,(16),out,inst_26810);
} else {
if((state_val_26820 === (16))){
var inst_26812 = (state_26819[(2)]);
var state_26819__$1 = (function (){var statearr_26875 = state_26819;
(statearr_26875[(12)] = inst_26812);

return statearr_26875;
})();
var statearr_26876_27981 = state_26819__$1;
(statearr_26876_27981[(2)] = null);

(statearr_26876_27981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (10))){
var inst_26783 = (state_26819[(2)]);
var inst_26784 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26819__$1 = (function (){var statearr_26878 = state_26819;
(statearr_26878[(13)] = inst_26783);

return statearr_26878;
})();
var statearr_26879_27982 = state_26819__$1;
(statearr_26879_27982[(2)] = inst_26784);


cljs.core.async.impl.ioc_helpers.process_exception(state_26819__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (8))){
var inst_26801 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
var statearr_26880_27983 = state_26819__$1;
(statearr_26880_27983[(2)] = inst_26801);

(statearr_26880_27983[(1)] = (5));


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
});})(c__24903__auto___27963,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24631__auto__,c__24903__auto___27963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_26884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26884[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_26884[(1)] = (1));

return statearr_26884;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_26819){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_26819);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e26889){if((e26889 instanceof Object)){
var ex__24635__auto__ = e26889;
var statearr_26894_27989 = state_26819;
(statearr_26894_27989[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_26819;
state_26819 = G__27992;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_26819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_26819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27963,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24905__auto__ = (function (){var statearr_26899 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_26899[(6)] = c__24903__auto___27963);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27963,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26903 = arguments.length;
switch (G__26903) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24903__auto___27994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___27994,out){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___27994,out){
return (function (state_26935){
var state_val_26936 = (state_26935[(1)]);
if((state_val_26936 === (7))){
var inst_26914 = (state_26935[(7)]);
var inst_26915 = (state_26935[(8)]);
var inst_26914__$1 = (state_26935[(2)]);
var inst_26915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26914__$1,(0),null);
var inst_26916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26914__$1,(1),null);
var inst_26917 = (inst_26915__$1 == null);
var state_26935__$1 = (function (){var statearr_26937 = state_26935;
(statearr_26937[(9)] = inst_26916);

(statearr_26937[(7)] = inst_26914__$1);

(statearr_26937[(8)] = inst_26915__$1);

return statearr_26937;
})();
if(cljs.core.truth_(inst_26917)){
var statearr_26938_27995 = state_26935__$1;
(statearr_26938_27995[(1)] = (8));

} else {
var statearr_26939_27996 = state_26935__$1;
(statearr_26939_27996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (1))){
var inst_26904 = cljs.core.vec(chs);
var inst_26905 = inst_26904;
var state_26935__$1 = (function (){var statearr_26940 = state_26935;
(statearr_26940[(10)] = inst_26905);

return statearr_26940;
})();
var statearr_26941_27997 = state_26935__$1;
(statearr_26941_27997[(2)] = null);

(statearr_26941_27997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (4))){
var inst_26905 = (state_26935[(10)]);
var state_26935__$1 = state_26935;
return cljs.core.async.ioc_alts_BANG_(state_26935__$1,(7),inst_26905);
} else {
if((state_val_26936 === (6))){
var inst_26931 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
var statearr_26942_27998 = state_26935__$1;
(statearr_26942_27998[(2)] = inst_26931);

(statearr_26942_27998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (3))){
var inst_26933 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26935__$1,inst_26933);
} else {
if((state_val_26936 === (2))){
var inst_26905 = (state_26935[(10)]);
var inst_26907 = cljs.core.count(inst_26905);
var inst_26908 = (inst_26907 > (0));
var state_26935__$1 = state_26935;
if(cljs.core.truth_(inst_26908)){
var statearr_26944_28000 = state_26935__$1;
(statearr_26944_28000[(1)] = (4));

} else {
var statearr_26945_28001 = state_26935__$1;
(statearr_26945_28001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (11))){
var inst_26905 = (state_26935[(10)]);
var inst_26924 = (state_26935[(2)]);
var tmp26943 = inst_26905;
var inst_26905__$1 = tmp26943;
var state_26935__$1 = (function (){var statearr_26946 = state_26935;
(statearr_26946[(11)] = inst_26924);

(statearr_26946[(10)] = inst_26905__$1);

return statearr_26946;
})();
var statearr_26947_28002 = state_26935__$1;
(statearr_26947_28002[(2)] = null);

(statearr_26947_28002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (9))){
var inst_26915 = (state_26935[(8)]);
var state_26935__$1 = state_26935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26935__$1,(11),out,inst_26915);
} else {
if((state_val_26936 === (5))){
var inst_26929 = cljs.core.async.close_BANG_(out);
var state_26935__$1 = state_26935;
var statearr_26948_28003 = state_26935__$1;
(statearr_26948_28003[(2)] = inst_26929);

(statearr_26948_28003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (10))){
var inst_26927 = (state_26935[(2)]);
var state_26935__$1 = state_26935;
var statearr_26949_28004 = state_26935__$1;
(statearr_26949_28004[(2)] = inst_26927);

(statearr_26949_28004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26936 === (8))){
var inst_26916 = (state_26935[(9)]);
var inst_26914 = (state_26935[(7)]);
var inst_26915 = (state_26935[(8)]);
var inst_26905 = (state_26935[(10)]);
var inst_26919 = (function (){var cs = inst_26905;
var vec__26910 = inst_26914;
var v = inst_26915;
var c = inst_26916;
return ((function (cs,vec__26910,v,c,inst_26916,inst_26914,inst_26915,inst_26905,state_val_26936,c__24903__auto___27994,out){
return (function (p1__26900_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26900_SHARP_);
});
;})(cs,vec__26910,v,c,inst_26916,inst_26914,inst_26915,inst_26905,state_val_26936,c__24903__auto___27994,out))
})();
var inst_26920 = cljs.core.filterv(inst_26919,inst_26905);
var inst_26905__$1 = inst_26920;
var state_26935__$1 = (function (){var statearr_26950 = state_26935;
(statearr_26950[(10)] = inst_26905__$1);

return statearr_26950;
})();
var statearr_26951_28006 = state_26935__$1;
(statearr_26951_28006[(2)] = null);

(statearr_26951_28006[(1)] = (2));


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
});})(c__24903__auto___27994,out))
;
return ((function (switch__24631__auto__,c__24903__auto___27994,out){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_26952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26952[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_26952[(1)] = (1));

return statearr_26952;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_26935){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_26935);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e26953){if((e26953 instanceof Object)){
var ex__24635__auto__ = e26953;
var statearr_26954_28007 = state_26935;
(statearr_26954_28007[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28008 = state_26935;
state_26935 = G__28008;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_26935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_26935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___27994,out))
})();
var state__24905__auto__ = (function (){var statearr_26955 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_26955[(6)] = c__24903__auto___27994);

return statearr_26955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___27994,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__26957 = arguments.length;
switch (G__26957) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24903__auto___28010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___28010,out){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___28010,out){
return (function (state_26981){
var state_val_26982 = (state_26981[(1)]);
if((state_val_26982 === (7))){
var inst_26963 = (state_26981[(7)]);
var inst_26963__$1 = (state_26981[(2)]);
var inst_26964 = (inst_26963__$1 == null);
var inst_26965 = cljs.core.not(inst_26964);
var state_26981__$1 = (function (){var statearr_26983 = state_26981;
(statearr_26983[(7)] = inst_26963__$1);

return statearr_26983;
})();
if(inst_26965){
var statearr_26984_28011 = state_26981__$1;
(statearr_26984_28011[(1)] = (8));

} else {
var statearr_26985_28012 = state_26981__$1;
(statearr_26985_28012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (1))){
var inst_26958 = (0);
var state_26981__$1 = (function (){var statearr_26986 = state_26981;
(statearr_26986[(8)] = inst_26958);

return statearr_26986;
})();
var statearr_26987_28017 = state_26981__$1;
(statearr_26987_28017[(2)] = null);

(statearr_26987_28017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (4))){
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26981__$1,(7),ch);
} else {
if((state_val_26982 === (6))){
var inst_26976 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
var statearr_26988_28018 = state_26981__$1;
(statearr_26988_28018[(2)] = inst_26976);

(statearr_26988_28018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (3))){
var inst_26978 = (state_26981[(2)]);
var inst_26979 = cljs.core.async.close_BANG_(out);
var state_26981__$1 = (function (){var statearr_26989 = state_26981;
(statearr_26989[(9)] = inst_26978);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26981__$1,inst_26979);
} else {
if((state_val_26982 === (2))){
var inst_26958 = (state_26981[(8)]);
var inst_26960 = (inst_26958 < n);
var state_26981__$1 = state_26981;
if(cljs.core.truth_(inst_26960)){
var statearr_26990_28023 = state_26981__$1;
(statearr_26990_28023[(1)] = (4));

} else {
var statearr_26991_28024 = state_26981__$1;
(statearr_26991_28024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (11))){
var inst_26958 = (state_26981[(8)]);
var inst_26968 = (state_26981[(2)]);
var inst_26969 = (inst_26958 + (1));
var inst_26958__$1 = inst_26969;
var state_26981__$1 = (function (){var statearr_26992 = state_26981;
(statearr_26992[(10)] = inst_26968);

(statearr_26992[(8)] = inst_26958__$1);

return statearr_26992;
})();
var statearr_26993_28026 = state_26981__$1;
(statearr_26993_28026[(2)] = null);

(statearr_26993_28026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (9))){
var state_26981__$1 = state_26981;
var statearr_26994_28027 = state_26981__$1;
(statearr_26994_28027[(2)] = null);

(statearr_26994_28027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (5))){
var state_26981__$1 = state_26981;
var statearr_26995_28029 = state_26981__$1;
(statearr_26995_28029[(2)] = null);

(statearr_26995_28029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (10))){
var inst_26973 = (state_26981[(2)]);
var state_26981__$1 = state_26981;
var statearr_26996_28030 = state_26981__$1;
(statearr_26996_28030[(2)] = inst_26973);

(statearr_26996_28030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26982 === (8))){
var inst_26963 = (state_26981[(7)]);
var state_26981__$1 = state_26981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26981__$1,(11),out,inst_26963);
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
});})(c__24903__auto___28010,out))
;
return ((function (switch__24631__auto__,c__24903__auto___28010,out){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_26997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26997[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_26997[(1)] = (1));

return statearr_26997;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_26981){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_26981);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e26998){if((e26998 instanceof Object)){
var ex__24635__auto__ = e26998;
var statearr_26999_28031 = state_26981;
(statearr_26999_28031[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28032 = state_26981;
state_26981 = G__28032;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_26981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_26981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___28010,out))
})();
var state__24905__auto__ = (function (){var statearr_27000 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_27000[(6)] = c__24903__auto___28010);

return statearr_27000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___28010,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27002 = (function (f,ch,meta27003){
this.f = f;
this.ch = ch;
this.meta27003 = meta27003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27004,meta27003__$1){
var self__ = this;
var _27004__$1 = this;
return (new cljs.core.async.t_cljs$core$async27002(self__.f,self__.ch,meta27003__$1));
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27004){
var self__ = this;
var _27004__$1 = this;
return self__.meta27003;
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27005 = (function (f,ch,meta27003,_,fn1,meta27006){
this.f = f;
this.ch = ch;
this.meta27003 = meta27003;
this._ = _;
this.fn1 = fn1;
this.meta27006 = meta27006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27007,meta27006__$1){
var self__ = this;
var _27007__$1 = this;
return (new cljs.core.async.t_cljs$core$async27005(self__.f,self__.ch,self__.meta27003,self__._,self__.fn1,meta27006__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27007){
var self__ = this;
var _27007__$1 = this;
return self__.meta27006;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27001_SHARP_){
var G__27008 = (((p1__27001_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__27001_SHARP_) : self__.f.call(null,p1__27001_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27008) : f1.call(null,G__27008));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27005.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27003","meta27003",2004421822,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27002","cljs.core.async/t_cljs$core$async27002",137465285,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27006","meta27006",-424430676,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27005";

cljs.core.async.t_cljs$core$async27005.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27005");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27005.
 */
cljs.core.async.__GT_t_cljs$core$async27005 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27005(f__$1,ch__$1,meta27003__$1,___$2,fn1__$1,meta27006){
return (new cljs.core.async.t_cljs$core$async27005(f__$1,ch__$1,meta27003__$1,___$2,fn1__$1,meta27006));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27005(self__.f,self__.ch,self__.meta27003,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27009 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27009) : self__.f.call(null,G__27009));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27003","meta27003",2004421822,null)], null);
});

cljs.core.async.t_cljs$core$async27002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27002";

cljs.core.async.t_cljs$core$async27002.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27002");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27002.
 */
cljs.core.async.__GT_t_cljs$core$async27002 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27002(f__$1,ch__$1,meta27003){
return (new cljs.core.async.t_cljs$core$async27002(f__$1,ch__$1,meta27003));
});

}

return (new cljs.core.async.t_cljs$core$async27002(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27010 = (function (f,ch,meta27011){
this.f = f;
this.ch = ch;
this.meta27011 = meta27011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27012,meta27011__$1){
var self__ = this;
var _27012__$1 = this;
return (new cljs.core.async.t_cljs$core$async27010(self__.f,self__.ch,meta27011__$1));
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27012){
var self__ = this;
var _27012__$1 = this;
return self__.meta27011;
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async27010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27011","meta27011",-1143005826,null)], null);
});

cljs.core.async.t_cljs$core$async27010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27010";

cljs.core.async.t_cljs$core$async27010.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27010");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27010.
 */
cljs.core.async.__GT_t_cljs$core$async27010 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27010(f__$1,ch__$1,meta27011){
return (new cljs.core.async.t_cljs$core$async27010(f__$1,ch__$1,meta27011));
});

}

return (new cljs.core.async.t_cljs$core$async27010(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27013 = (function (p,ch,meta27014){
this.p = p;
this.ch = ch;
this.meta27014 = meta27014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27015,meta27014__$1){
var self__ = this;
var _27015__$1 = this;
return (new cljs.core.async.t_cljs$core$async27013(self__.p,self__.ch,meta27014__$1));
});

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27015){
var self__ = this;
var _27015__$1 = this;
return self__.meta27014;
});

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27014","meta27014",2098441046,null)], null);
});

cljs.core.async.t_cljs$core$async27013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27013";

cljs.core.async.t_cljs$core$async27013.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27013");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27013.
 */
cljs.core.async.__GT_t_cljs$core$async27013 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27013(p__$1,ch__$1,meta27014){
return (new cljs.core.async.t_cljs$core$async27013(p__$1,ch__$1,meta27014));
});

}

return (new cljs.core.async.t_cljs$core$async27013(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27017 = arguments.length;
switch (G__27017) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24903__auto___28051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___28051,out){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___28051,out){
return (function (state_27038){
var state_val_27039 = (state_27038[(1)]);
if((state_val_27039 === (7))){
var inst_27034 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27040_28055 = state_27038__$1;
(statearr_27040_28055[(2)] = inst_27034);

(statearr_27040_28055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (1))){
var state_27038__$1 = state_27038;
var statearr_27041_28056 = state_27038__$1;
(statearr_27041_28056[(2)] = null);

(statearr_27041_28056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (4))){
var inst_27020 = (state_27038[(7)]);
var inst_27020__$1 = (state_27038[(2)]);
var inst_27021 = (inst_27020__$1 == null);
var state_27038__$1 = (function (){var statearr_27042 = state_27038;
(statearr_27042[(7)] = inst_27020__$1);

return statearr_27042;
})();
if(cljs.core.truth_(inst_27021)){
var statearr_27043_28057 = state_27038__$1;
(statearr_27043_28057[(1)] = (5));

} else {
var statearr_27044_28061 = state_27038__$1;
(statearr_27044_28061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (6))){
var inst_27020 = (state_27038[(7)]);
var inst_27025 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27020) : p.call(null,inst_27020));
var state_27038__$1 = state_27038;
if(cljs.core.truth_(inst_27025)){
var statearr_27045_28062 = state_27038__$1;
(statearr_27045_28062[(1)] = (8));

} else {
var statearr_27046_28063 = state_27038__$1;
(statearr_27046_28063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (3))){
var inst_27036 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27038__$1,inst_27036);
} else {
if((state_val_27039 === (2))){
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27038__$1,(4),ch);
} else {
if((state_val_27039 === (11))){
var inst_27028 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27047_28064 = state_27038__$1;
(statearr_27047_28064[(2)] = inst_27028);

(statearr_27047_28064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (9))){
var state_27038__$1 = state_27038;
var statearr_27048_28068 = state_27038__$1;
(statearr_27048_28068[(2)] = null);

(statearr_27048_28068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (5))){
var inst_27023 = cljs.core.async.close_BANG_(out);
var state_27038__$1 = state_27038;
var statearr_27049_28069 = state_27038__$1;
(statearr_27049_28069[(2)] = inst_27023);

(statearr_27049_28069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (10))){
var inst_27031 = (state_27038[(2)]);
var state_27038__$1 = (function (){var statearr_27050 = state_27038;
(statearr_27050[(8)] = inst_27031);

return statearr_27050;
})();
var statearr_27051_28070 = state_27038__$1;
(statearr_27051_28070[(2)] = null);

(statearr_27051_28070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (8))){
var inst_27020 = (state_27038[(7)]);
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27038__$1,(11),out,inst_27020);
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
});})(c__24903__auto___28051,out))
;
return ((function (switch__24631__auto__,c__24903__auto___28051,out){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_27052 = [null,null,null,null,null,null,null,null,null];
(statearr_27052[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_27052[(1)] = (1));

return statearr_27052;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_27038){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_27038);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e27053){if((e27053 instanceof Object)){
var ex__24635__auto__ = e27053;
var statearr_27054_28072 = state_27038;
(statearr_27054_28072[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28073 = state_27038;
state_27038 = G__28073;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_27038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_27038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___28051,out))
})();
var state__24905__auto__ = (function (){var statearr_27055 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_27055[(6)] = c__24903__auto___28051);

return statearr_27055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___28051,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27057 = arguments.length;
switch (G__27057) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto__){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto__){
return (function (state_27119){
var state_val_27120 = (state_27119[(1)]);
if((state_val_27120 === (7))){
var inst_27115 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27121_28084 = state_27119__$1;
(statearr_27121_28084[(2)] = inst_27115);

(statearr_27121_28084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (20))){
var inst_27085 = (state_27119[(7)]);
var inst_27096 = (state_27119[(2)]);
var inst_27097 = cljs.core.next(inst_27085);
var inst_27071 = inst_27097;
var inst_27072 = null;
var inst_27073 = (0);
var inst_27074 = (0);
var state_27119__$1 = (function (){var statearr_27122 = state_27119;
(statearr_27122[(8)] = inst_27073);

(statearr_27122[(9)] = inst_27074);

(statearr_27122[(10)] = inst_27071);

(statearr_27122[(11)] = inst_27096);

(statearr_27122[(12)] = inst_27072);

return statearr_27122;
})();
var statearr_27123_28085 = state_27119__$1;
(statearr_27123_28085[(2)] = null);

(statearr_27123_28085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (1))){
var state_27119__$1 = state_27119;
var statearr_27124_28086 = state_27119__$1;
(statearr_27124_28086[(2)] = null);

(statearr_27124_28086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (4))){
var inst_27060 = (state_27119[(13)]);
var inst_27060__$1 = (state_27119[(2)]);
var inst_27061 = (inst_27060__$1 == null);
var state_27119__$1 = (function (){var statearr_27125 = state_27119;
(statearr_27125[(13)] = inst_27060__$1);

return statearr_27125;
})();
if(cljs.core.truth_(inst_27061)){
var statearr_27126_28093 = state_27119__$1;
(statearr_27126_28093[(1)] = (5));

} else {
var statearr_27127_28094 = state_27119__$1;
(statearr_27127_28094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (15))){
var state_27119__$1 = state_27119;
var statearr_27131_28095 = state_27119__$1;
(statearr_27131_28095[(2)] = null);

(statearr_27131_28095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (21))){
var state_27119__$1 = state_27119;
var statearr_27132_28096 = state_27119__$1;
(statearr_27132_28096[(2)] = null);

(statearr_27132_28096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (13))){
var inst_27073 = (state_27119[(8)]);
var inst_27074 = (state_27119[(9)]);
var inst_27071 = (state_27119[(10)]);
var inst_27072 = (state_27119[(12)]);
var inst_27081 = (state_27119[(2)]);
var inst_27082 = (inst_27074 + (1));
var tmp27128 = inst_27073;
var tmp27129 = inst_27071;
var tmp27130 = inst_27072;
var inst_27071__$1 = tmp27129;
var inst_27072__$1 = tmp27130;
var inst_27073__$1 = tmp27128;
var inst_27074__$1 = inst_27082;
var state_27119__$1 = (function (){var statearr_27133 = state_27119;
(statearr_27133[(8)] = inst_27073__$1);

(statearr_27133[(9)] = inst_27074__$1);

(statearr_27133[(10)] = inst_27071__$1);

(statearr_27133[(14)] = inst_27081);

(statearr_27133[(12)] = inst_27072__$1);

return statearr_27133;
})();
var statearr_27134_28097 = state_27119__$1;
(statearr_27134_28097[(2)] = null);

(statearr_27134_28097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (22))){
var state_27119__$1 = state_27119;
var statearr_27135_28098 = state_27119__$1;
(statearr_27135_28098[(2)] = null);

(statearr_27135_28098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (6))){
var inst_27060 = (state_27119[(13)]);
var inst_27069 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27060) : f.call(null,inst_27060));
var inst_27070 = cljs.core.seq(inst_27069);
var inst_27071 = inst_27070;
var inst_27072 = null;
var inst_27073 = (0);
var inst_27074 = (0);
var state_27119__$1 = (function (){var statearr_27136 = state_27119;
(statearr_27136[(8)] = inst_27073);

(statearr_27136[(9)] = inst_27074);

(statearr_27136[(10)] = inst_27071);

(statearr_27136[(12)] = inst_27072);

return statearr_27136;
})();
var statearr_27137_28099 = state_27119__$1;
(statearr_27137_28099[(2)] = null);

(statearr_27137_28099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (17))){
var inst_27085 = (state_27119[(7)]);
var inst_27089 = cljs.core.chunk_first(inst_27085);
var inst_27090 = cljs.core.chunk_rest(inst_27085);
var inst_27091 = cljs.core.count(inst_27089);
var inst_27071 = inst_27090;
var inst_27072 = inst_27089;
var inst_27073 = inst_27091;
var inst_27074 = (0);
var state_27119__$1 = (function (){var statearr_27138 = state_27119;
(statearr_27138[(8)] = inst_27073);

(statearr_27138[(9)] = inst_27074);

(statearr_27138[(10)] = inst_27071);

(statearr_27138[(12)] = inst_27072);

return statearr_27138;
})();
var statearr_27139_28100 = state_27119__$1;
(statearr_27139_28100[(2)] = null);

(statearr_27139_28100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (3))){
var inst_27117 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27119__$1,inst_27117);
} else {
if((state_val_27120 === (12))){
var inst_27105 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27140_28101 = state_27119__$1;
(statearr_27140_28101[(2)] = inst_27105);

(statearr_27140_28101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (2))){
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27119__$1,(4),in$);
} else {
if((state_val_27120 === (23))){
var inst_27113 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27141_28108 = state_27119__$1;
(statearr_27141_28108[(2)] = inst_27113);

(statearr_27141_28108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (19))){
var inst_27100 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27142_28109 = state_27119__$1;
(statearr_27142_28109[(2)] = inst_27100);

(statearr_27142_28109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (11))){
var inst_27071 = (state_27119[(10)]);
var inst_27085 = (state_27119[(7)]);
var inst_27085__$1 = cljs.core.seq(inst_27071);
var state_27119__$1 = (function (){var statearr_27143 = state_27119;
(statearr_27143[(7)] = inst_27085__$1);

return statearr_27143;
})();
if(inst_27085__$1){
var statearr_27144_28110 = state_27119__$1;
(statearr_27144_28110[(1)] = (14));

} else {
var statearr_27145_28111 = state_27119__$1;
(statearr_27145_28111[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (9))){
var inst_27107 = (state_27119[(2)]);
var inst_27108 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27119__$1 = (function (){var statearr_27146 = state_27119;
(statearr_27146[(15)] = inst_27107);

return statearr_27146;
})();
if(cljs.core.truth_(inst_27108)){
var statearr_27147_28112 = state_27119__$1;
(statearr_27147_28112[(1)] = (21));

} else {
var statearr_27148_28113 = state_27119__$1;
(statearr_27148_28113[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (5))){
var inst_27063 = cljs.core.async.close_BANG_(out);
var state_27119__$1 = state_27119;
var statearr_27149_28114 = state_27119__$1;
(statearr_27149_28114[(2)] = inst_27063);

(statearr_27149_28114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (14))){
var inst_27085 = (state_27119[(7)]);
var inst_27087 = cljs.core.chunked_seq_QMARK_(inst_27085);
var state_27119__$1 = state_27119;
if(inst_27087){
var statearr_27150_28115 = state_27119__$1;
(statearr_27150_28115[(1)] = (17));

} else {
var statearr_27151_28116 = state_27119__$1;
(statearr_27151_28116[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (16))){
var inst_27103 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27152_28117 = state_27119__$1;
(statearr_27152_28117[(2)] = inst_27103);

(statearr_27152_28117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (10))){
var inst_27074 = (state_27119[(9)]);
var inst_27072 = (state_27119[(12)]);
var inst_27079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27072,inst_27074);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27119__$1,(13),out,inst_27079);
} else {
if((state_val_27120 === (18))){
var inst_27085 = (state_27119[(7)]);
var inst_27094 = cljs.core.first(inst_27085);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27119__$1,(20),out,inst_27094);
} else {
if((state_val_27120 === (8))){
var inst_27073 = (state_27119[(8)]);
var inst_27074 = (state_27119[(9)]);
var inst_27076 = (inst_27074 < inst_27073);
var inst_27077 = inst_27076;
var state_27119__$1 = state_27119;
if(cljs.core.truth_(inst_27077)){
var statearr_27153_28124 = state_27119__$1;
(statearr_27153_28124[(1)] = (10));

} else {
var statearr_27154_28125 = state_27119__$1;
(statearr_27154_28125[(1)] = (11));

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
});})(c__24903__auto__))
;
return ((function (switch__24631__auto__,c__24903__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24632__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24632__auto____0 = (function (){
var statearr_27155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27155[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24632__auto__);

(statearr_27155[(1)] = (1));

return statearr_27155;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24632__auto____1 = (function (state_27119){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_27119);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e27156){if((e27156 instanceof Object)){
var ex__24635__auto__ = e27156;
var statearr_27157_28126 = state_27119;
(statearr_27157_28126[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28127 = state_27119;
state_27119 = G__28127;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24632__auto__ = function(state_27119){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24632__auto____1.call(this,state_27119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24632__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24632__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto__))
})();
var state__24905__auto__ = (function (){var statearr_27158 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_27158[(6)] = c__24903__auto__);

return statearr_27158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto__))
);

return c__24903__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27160 = arguments.length;
switch (G__27160) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27162 = arguments.length;
switch (G__27162) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27164 = arguments.length;
switch (G__27164) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24903__auto___28137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___28137,out){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___28137,out){
return (function (state_27188){
var state_val_27189 = (state_27188[(1)]);
if((state_val_27189 === (7))){
var inst_27183 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27190_28141 = state_27188__$1;
(statearr_27190_28141[(2)] = inst_27183);

(statearr_27190_28141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (1))){
var inst_27165 = null;
var state_27188__$1 = (function (){var statearr_27191 = state_27188;
(statearr_27191[(7)] = inst_27165);

return statearr_27191;
})();
var statearr_27192_28142 = state_27188__$1;
(statearr_27192_28142[(2)] = null);

(statearr_27192_28142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (4))){
var inst_27168 = (state_27188[(8)]);
var inst_27168__$1 = (state_27188[(2)]);
var inst_27169 = (inst_27168__$1 == null);
var inst_27170 = cljs.core.not(inst_27169);
var state_27188__$1 = (function (){var statearr_27193 = state_27188;
(statearr_27193[(8)] = inst_27168__$1);

return statearr_27193;
})();
if(inst_27170){
var statearr_27194_28143 = state_27188__$1;
(statearr_27194_28143[(1)] = (5));

} else {
var statearr_27195_28144 = state_27188__$1;
(statearr_27195_28144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (6))){
var state_27188__$1 = state_27188;
var statearr_27196_28148 = state_27188__$1;
(statearr_27196_28148[(2)] = null);

(statearr_27196_28148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (3))){
var inst_27185 = (state_27188[(2)]);
var inst_27186 = cljs.core.async.close_BANG_(out);
var state_27188__$1 = (function (){var statearr_27197 = state_27188;
(statearr_27197[(9)] = inst_27185);

return statearr_27197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27188__$1,inst_27186);
} else {
if((state_val_27189 === (2))){
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27188__$1,(4),ch);
} else {
if((state_val_27189 === (11))){
var inst_27168 = (state_27188[(8)]);
var inst_27177 = (state_27188[(2)]);
var inst_27165 = inst_27168;
var state_27188__$1 = (function (){var statearr_27198 = state_27188;
(statearr_27198[(7)] = inst_27165);

(statearr_27198[(10)] = inst_27177);

return statearr_27198;
})();
var statearr_27199_28151 = state_27188__$1;
(statearr_27199_28151[(2)] = null);

(statearr_27199_28151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (9))){
var inst_27168 = (state_27188[(8)]);
var state_27188__$1 = state_27188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27188__$1,(11),out,inst_27168);
} else {
if((state_val_27189 === (5))){
var inst_27168 = (state_27188[(8)]);
var inst_27165 = (state_27188[(7)]);
var inst_27172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27168,inst_27165);
var state_27188__$1 = state_27188;
if(inst_27172){
var statearr_27201_28152 = state_27188__$1;
(statearr_27201_28152[(1)] = (8));

} else {
var statearr_27202_28153 = state_27188__$1;
(statearr_27202_28153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (10))){
var inst_27180 = (state_27188[(2)]);
var state_27188__$1 = state_27188;
var statearr_27203_28154 = state_27188__$1;
(statearr_27203_28154[(2)] = inst_27180);

(statearr_27203_28154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27189 === (8))){
var inst_27165 = (state_27188[(7)]);
var tmp27200 = inst_27165;
var inst_27165__$1 = tmp27200;
var state_27188__$1 = (function (){var statearr_27204 = state_27188;
(statearr_27204[(7)] = inst_27165__$1);

return statearr_27204;
})();
var statearr_27205_28155 = state_27188__$1;
(statearr_27205_28155[(2)] = null);

(statearr_27205_28155[(1)] = (2));


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
});})(c__24903__auto___28137,out))
;
return ((function (switch__24631__auto__,c__24903__auto___28137,out){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_27206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27206[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_27206[(1)] = (1));

return statearr_27206;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_27188){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_27188);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e27207){if((e27207 instanceof Object)){
var ex__24635__auto__ = e27207;
var statearr_27208_28158 = state_27188;
(statearr_27208_28158[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28159 = state_27188;
state_27188 = G__28159;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_27188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_27188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___28137,out))
})();
var state__24905__auto__ = (function (){var statearr_27209 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_27209[(6)] = c__24903__auto___28137);

return statearr_27209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___28137,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27211 = arguments.length;
switch (G__27211) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24903__auto___28161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___28161,out){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___28161,out){
return (function (state_27249){
var state_val_27250 = (state_27249[(1)]);
if((state_val_27250 === (7))){
var inst_27245 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27251_28162 = state_27249__$1;
(statearr_27251_28162[(2)] = inst_27245);

(statearr_27251_28162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (1))){
var inst_27212 = (new Array(n));
var inst_27213 = inst_27212;
var inst_27214 = (0);
var state_27249__$1 = (function (){var statearr_27252 = state_27249;
(statearr_27252[(7)] = inst_27213);

(statearr_27252[(8)] = inst_27214);

return statearr_27252;
})();
var statearr_27253_28166 = state_27249__$1;
(statearr_27253_28166[(2)] = null);

(statearr_27253_28166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (4))){
var inst_27217 = (state_27249[(9)]);
var inst_27217__$1 = (state_27249[(2)]);
var inst_27218 = (inst_27217__$1 == null);
var inst_27219 = cljs.core.not(inst_27218);
var state_27249__$1 = (function (){var statearr_27254 = state_27249;
(statearr_27254[(9)] = inst_27217__$1);

return statearr_27254;
})();
if(inst_27219){
var statearr_27255_28173 = state_27249__$1;
(statearr_27255_28173[(1)] = (5));

} else {
var statearr_27256_28174 = state_27249__$1;
(statearr_27256_28174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (15))){
var inst_27239 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27257_28175 = state_27249__$1;
(statearr_27257_28175[(2)] = inst_27239);

(statearr_27257_28175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (13))){
var state_27249__$1 = state_27249;
var statearr_27258_28176 = state_27249__$1;
(statearr_27258_28176[(2)] = null);

(statearr_27258_28176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (6))){
var inst_27214 = (state_27249[(8)]);
var inst_27235 = (inst_27214 > (0));
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27235)){
var statearr_27259_28177 = state_27249__$1;
(statearr_27259_28177[(1)] = (12));

} else {
var statearr_27260_28179 = state_27249__$1;
(statearr_27260_28179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (3))){
var inst_27247 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27249__$1,inst_27247);
} else {
if((state_val_27250 === (12))){
var inst_27213 = (state_27249[(7)]);
var inst_27237 = cljs.core.vec(inst_27213);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27249__$1,(15),out,inst_27237);
} else {
if((state_val_27250 === (2))){
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27249__$1,(4),ch);
} else {
if((state_val_27250 === (11))){
var inst_27229 = (state_27249[(2)]);
var inst_27230 = (new Array(n));
var inst_27213 = inst_27230;
var inst_27214 = (0);
var state_27249__$1 = (function (){var statearr_27261 = state_27249;
(statearr_27261[(7)] = inst_27213);

(statearr_27261[(10)] = inst_27229);

(statearr_27261[(8)] = inst_27214);

return statearr_27261;
})();
var statearr_27262_28183 = state_27249__$1;
(statearr_27262_28183[(2)] = null);

(statearr_27262_28183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (9))){
var inst_27213 = (state_27249[(7)]);
var inst_27227 = cljs.core.vec(inst_27213);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27249__$1,(11),out,inst_27227);
} else {
if((state_val_27250 === (5))){
var inst_27217 = (state_27249[(9)]);
var inst_27213 = (state_27249[(7)]);
var inst_27222 = (state_27249[(11)]);
var inst_27214 = (state_27249[(8)]);
var inst_27221 = (inst_27213[inst_27214] = inst_27217);
var inst_27222__$1 = (inst_27214 + (1));
var inst_27223 = (inst_27222__$1 < n);
var state_27249__$1 = (function (){var statearr_27263 = state_27249;
(statearr_27263[(12)] = inst_27221);

(statearr_27263[(11)] = inst_27222__$1);

return statearr_27263;
})();
if(cljs.core.truth_(inst_27223)){
var statearr_27264_28185 = state_27249__$1;
(statearr_27264_28185[(1)] = (8));

} else {
var statearr_27265_28186 = state_27249__$1;
(statearr_27265_28186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (14))){
var inst_27242 = (state_27249[(2)]);
var inst_27243 = cljs.core.async.close_BANG_(out);
var state_27249__$1 = (function (){var statearr_27267 = state_27249;
(statearr_27267[(13)] = inst_27242);

return statearr_27267;
})();
var statearr_27268_28187 = state_27249__$1;
(statearr_27268_28187[(2)] = inst_27243);

(statearr_27268_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (10))){
var inst_27233 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27269_28188 = state_27249__$1;
(statearr_27269_28188[(2)] = inst_27233);

(statearr_27269_28188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (8))){
var inst_27213 = (state_27249[(7)]);
var inst_27222 = (state_27249[(11)]);
var tmp27266 = inst_27213;
var inst_27213__$1 = tmp27266;
var inst_27214 = inst_27222;
var state_27249__$1 = (function (){var statearr_27270 = state_27249;
(statearr_27270[(7)] = inst_27213__$1);

(statearr_27270[(8)] = inst_27214);

return statearr_27270;
})();
var statearr_27271_28189 = state_27249__$1;
(statearr_27271_28189[(2)] = null);

(statearr_27271_28189[(1)] = (2));


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
});})(c__24903__auto___28161,out))
;
return ((function (switch__24631__auto__,c__24903__auto___28161,out){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_27272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27272[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_27272[(1)] = (1));

return statearr_27272;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_27249){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_27249);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e27273){if((e27273 instanceof Object)){
var ex__24635__auto__ = e27273;
var statearr_27274_28190 = state_27249;
(statearr_27274_28190[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28191 = state_27249;
state_27249 = G__28191;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_27249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_27249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___28161,out))
})();
var state__24905__auto__ = (function (){var statearr_27275 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_27275[(6)] = c__24903__auto___28161);

return statearr_27275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___28161,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27277 = arguments.length;
switch (G__27277) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24903__auto___28193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___28193,out){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___28193,out){
return (function (state_27319){
var state_val_27320 = (state_27319[(1)]);
if((state_val_27320 === (7))){
var inst_27315 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27321_28194 = state_27319__$1;
(statearr_27321_28194[(2)] = inst_27315);

(statearr_27321_28194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (1))){
var inst_27278 = [];
var inst_27279 = inst_27278;
var inst_27280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27319__$1 = (function (){var statearr_27322 = state_27319;
(statearr_27322[(7)] = inst_27279);

(statearr_27322[(8)] = inst_27280);

return statearr_27322;
})();
var statearr_27323_28195 = state_27319__$1;
(statearr_27323_28195[(2)] = null);

(statearr_27323_28195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (4))){
var inst_27283 = (state_27319[(9)]);
var inst_27283__$1 = (state_27319[(2)]);
var inst_27284 = (inst_27283__$1 == null);
var inst_27285 = cljs.core.not(inst_27284);
var state_27319__$1 = (function (){var statearr_27324 = state_27319;
(statearr_27324[(9)] = inst_27283__$1);

return statearr_27324;
})();
if(inst_27285){
var statearr_27325_28196 = state_27319__$1;
(statearr_27325_28196[(1)] = (5));

} else {
var statearr_27326_28197 = state_27319__$1;
(statearr_27326_28197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (15))){
var inst_27309 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27327_28199 = state_27319__$1;
(statearr_27327_28199[(2)] = inst_27309);

(statearr_27327_28199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (13))){
var state_27319__$1 = state_27319;
var statearr_27328_28200 = state_27319__$1;
(statearr_27328_28200[(2)] = null);

(statearr_27328_28200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (6))){
var inst_27279 = (state_27319[(7)]);
var inst_27304 = inst_27279.length;
var inst_27305 = (inst_27304 > (0));
var state_27319__$1 = state_27319;
if(cljs.core.truth_(inst_27305)){
var statearr_27329_28202 = state_27319__$1;
(statearr_27329_28202[(1)] = (12));

} else {
var statearr_27330_28203 = state_27319__$1;
(statearr_27330_28203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (3))){
var inst_27317 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27319__$1,inst_27317);
} else {
if((state_val_27320 === (12))){
var inst_27279 = (state_27319[(7)]);
var inst_27307 = cljs.core.vec(inst_27279);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27319__$1,(15),out,inst_27307);
} else {
if((state_val_27320 === (2))){
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27319__$1,(4),ch);
} else {
if((state_val_27320 === (11))){
var inst_27283 = (state_27319[(9)]);
var inst_27287 = (state_27319[(10)]);
var inst_27297 = (state_27319[(2)]);
var inst_27298 = [];
var inst_27299 = inst_27298.push(inst_27283);
var inst_27279 = inst_27298;
var inst_27280 = inst_27287;
var state_27319__$1 = (function (){var statearr_27331 = state_27319;
(statearr_27331[(11)] = inst_27297);

(statearr_27331[(12)] = inst_27299);

(statearr_27331[(7)] = inst_27279);

(statearr_27331[(8)] = inst_27280);

return statearr_27331;
})();
var statearr_27332_28206 = state_27319__$1;
(statearr_27332_28206[(2)] = null);

(statearr_27332_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (9))){
var inst_27279 = (state_27319[(7)]);
var inst_27295 = cljs.core.vec(inst_27279);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27319__$1,(11),out,inst_27295);
} else {
if((state_val_27320 === (5))){
var inst_27283 = (state_27319[(9)]);
var inst_27287 = (state_27319[(10)]);
var inst_27280 = (state_27319[(8)]);
var inst_27287__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27283) : f.call(null,inst_27283));
var inst_27288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27287__$1,inst_27280);
var inst_27289 = cljs.core.keyword_identical_QMARK_(inst_27280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27290 = ((inst_27288) || (inst_27289));
var state_27319__$1 = (function (){var statearr_27333 = state_27319;
(statearr_27333[(10)] = inst_27287__$1);

return statearr_27333;
})();
if(cljs.core.truth_(inst_27290)){
var statearr_27334_28208 = state_27319__$1;
(statearr_27334_28208[(1)] = (8));

} else {
var statearr_27335_28209 = state_27319__$1;
(statearr_27335_28209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (14))){
var inst_27312 = (state_27319[(2)]);
var inst_27313 = cljs.core.async.close_BANG_(out);
var state_27319__$1 = (function (){var statearr_27337 = state_27319;
(statearr_27337[(13)] = inst_27312);

return statearr_27337;
})();
var statearr_27338_28210 = state_27319__$1;
(statearr_27338_28210[(2)] = inst_27313);

(statearr_27338_28210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (10))){
var inst_27302 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27339_28212 = state_27319__$1;
(statearr_27339_28212[(2)] = inst_27302);

(statearr_27339_28212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (8))){
var inst_27283 = (state_27319[(9)]);
var inst_27287 = (state_27319[(10)]);
var inst_27279 = (state_27319[(7)]);
var inst_27292 = inst_27279.push(inst_27283);
var tmp27336 = inst_27279;
var inst_27279__$1 = tmp27336;
var inst_27280 = inst_27287;
var state_27319__$1 = (function (){var statearr_27340 = state_27319;
(statearr_27340[(14)] = inst_27292);

(statearr_27340[(7)] = inst_27279__$1);

(statearr_27340[(8)] = inst_27280);

return statearr_27340;
})();
var statearr_27341_28213 = state_27319__$1;
(statearr_27341_28213[(2)] = null);

(statearr_27341_28213[(1)] = (2));


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
});})(c__24903__auto___28193,out))
;
return ((function (switch__24631__auto__,c__24903__auto___28193,out){
return (function() {
var cljs$core$async$state_machine__24632__auto__ = null;
var cljs$core$async$state_machine__24632__auto____0 = (function (){
var statearr_27342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27342[(0)] = cljs$core$async$state_machine__24632__auto__);

(statearr_27342[(1)] = (1));

return statearr_27342;
});
var cljs$core$async$state_machine__24632__auto____1 = (function (state_27319){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_27319);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e27343){if((e27343 instanceof Object)){
var ex__24635__auto__ = e27343;
var statearr_27344_28214 = state_27319;
(statearr_27344_28214[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28215 = state_27319;
state_27319 = G__28215;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
cljs$core$async$state_machine__24632__auto__ = function(state_27319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24632__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24632__auto____1.call(this,state_27319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24632__auto____0;
cljs$core$async$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24632__auto____1;
return cljs$core$async$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___28193,out))
})();
var state__24905__auto__ = (function (){var statearr_27345 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_27345[(6)] = c__24903__auto___28193);

return statearr_27345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___28193,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
