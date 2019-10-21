goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29394__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29395__i = 0, G__29395__a = new Array(arguments.length -  0);
while (G__29395__i < G__29395__a.length) {G__29395__a[G__29395__i] = arguments[G__29395__i + 0]; ++G__29395__i;}
  args = new cljs.core.IndexedSeq(G__29395__a,0,null);
} 
return G__29394__delegate.call(this,args);};
G__29394.cljs$lang$maxFixedArity = 0;
G__29394.cljs$lang$applyTo = (function (arglist__29397){
var args = cljs.core.seq(arglist__29397);
return G__29394__delegate(args);
});
G__29394.cljs$core$IFn$_invoke$arity$variadic = G__29394__delegate;
return G__29394;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29398__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29399__i = 0, G__29399__a = new Array(arguments.length -  0);
while (G__29399__i < G__29399__a.length) {G__29399__a[G__29399__i] = arguments[G__29399__i + 0]; ++G__29399__i;}
  args = new cljs.core.IndexedSeq(G__29399__a,0,null);
} 
return G__29398__delegate.call(this,args);};
G__29398.cljs$lang$maxFixedArity = 0;
G__29398.cljs$lang$applyTo = (function (arglist__29400){
var args = cljs.core.seq(arglist__29400);
return G__29398__delegate(args);
});
G__29398.cljs$core$IFn$_invoke$arity$variadic = G__29398__delegate;
return G__29398;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
