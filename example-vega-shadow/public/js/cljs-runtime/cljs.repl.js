goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22242){
var map__22244 = p__22242;
var map__22244__$1 = (((((!((map__22244 == null))))?(((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22244):map__22244);
var m = map__22244__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22246_22448 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22247_22449 = null;
var count__22248_22450 = (0);
var i__22249_22451 = (0);
while(true){
if((i__22249_22451 < count__22248_22450)){
var f_22452 = chunk__22247_22449.cljs$core$IIndexed$_nth$arity$2(null,i__22249_22451);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22452], 0));


var G__22453 = seq__22246_22448;
var G__22454 = chunk__22247_22449;
var G__22455 = count__22248_22450;
var G__22456 = (i__22249_22451 + (1));
seq__22246_22448 = G__22453;
chunk__22247_22449 = G__22454;
count__22248_22450 = G__22455;
i__22249_22451 = G__22456;
continue;
} else {
var temp__5720__auto___22457 = cljs.core.seq(seq__22246_22448);
if(temp__5720__auto___22457){
var seq__22246_22458__$1 = temp__5720__auto___22457;
if(cljs.core.chunked_seq_QMARK_(seq__22246_22458__$1)){
var c__4550__auto___22459 = cljs.core.chunk_first(seq__22246_22458__$1);
var G__22460 = cljs.core.chunk_rest(seq__22246_22458__$1);
var G__22461 = c__4550__auto___22459;
var G__22462 = cljs.core.count(c__4550__auto___22459);
var G__22463 = (0);
seq__22246_22448 = G__22460;
chunk__22247_22449 = G__22461;
count__22248_22450 = G__22462;
i__22249_22451 = G__22463;
continue;
} else {
var f_22464 = cljs.core.first(seq__22246_22458__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_22464], 0));


var G__22465 = cljs.core.next(seq__22246_22458__$1);
var G__22466 = null;
var G__22467 = (0);
var G__22468 = (0);
seq__22246_22448 = G__22465;
chunk__22247_22449 = G__22466;
count__22248_22450 = G__22467;
i__22249_22451 = G__22468;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22485 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_22485], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_22485)))?cljs.core.second(arglists_22485):arglists_22485)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22259_22489 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22260_22490 = null;
var count__22261_22491 = (0);
var i__22262_22492 = (0);
while(true){
if((i__22262_22492 < count__22261_22491)){
var vec__22278_22493 = chunk__22260_22490.cljs$core$IIndexed$_nth$arity$2(null,i__22262_22492);
var name_22494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22278_22493,(0),null);
var map__22281_22495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22278_22493,(1),null);
var map__22281_22496__$1 = (((((!((map__22281_22495 == null))))?(((((map__22281_22495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22281_22495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22281_22495):map__22281_22495);
var doc_22497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22281_22496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22281_22496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22494], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22498], 0));

if(cljs.core.truth_(doc_22497)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22497], 0));
} else {
}


var G__22501 = seq__22259_22489;
var G__22502 = chunk__22260_22490;
var G__22503 = count__22261_22491;
var G__22504 = (i__22262_22492 + (1));
seq__22259_22489 = G__22501;
chunk__22260_22490 = G__22502;
count__22261_22491 = G__22503;
i__22262_22492 = G__22504;
continue;
} else {
var temp__5720__auto___22505 = cljs.core.seq(seq__22259_22489);
if(temp__5720__auto___22505){
var seq__22259_22506__$1 = temp__5720__auto___22505;
if(cljs.core.chunked_seq_QMARK_(seq__22259_22506__$1)){
var c__4550__auto___22507 = cljs.core.chunk_first(seq__22259_22506__$1);
var G__22508 = cljs.core.chunk_rest(seq__22259_22506__$1);
var G__22509 = c__4550__auto___22507;
var G__22510 = cljs.core.count(c__4550__auto___22507);
var G__22511 = (0);
seq__22259_22489 = G__22508;
chunk__22260_22490 = G__22509;
count__22261_22491 = G__22510;
i__22262_22492 = G__22511;
continue;
} else {
var vec__22286_22513 = cljs.core.first(seq__22259_22506__$1);
var name_22514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22286_22513,(0),null);
var map__22289_22515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22286_22513,(1),null);
var map__22289_22516__$1 = (((((!((map__22289_22515 == null))))?(((((map__22289_22515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22289_22515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22289_22515):map__22289_22515);
var doc_22517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22289_22516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22289_22516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_22514], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_22518], 0));

if(cljs.core.truth_(doc_22517)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_22517], 0));
} else {
}


var G__22523 = cljs.core.next(seq__22259_22506__$1);
var G__22524 = null;
var G__22525 = (0);
var G__22526 = (0);
seq__22259_22489 = G__22523;
chunk__22260_22490 = G__22524;
count__22261_22491 = G__22525;
i__22262_22492 = G__22526;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22296 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22297 = null;
var count__22298 = (0);
var i__22299 = (0);
while(true){
if((i__22299 < count__22298)){
var role = chunk__22297.cljs$core$IIndexed$_nth$arity$2(null,i__22299);
var temp__5720__auto___22529__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22529__$1)){
var spec_22530 = temp__5720__auto___22529__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22530)], 0));
} else {
}


var G__22531 = seq__22296;
var G__22532 = chunk__22297;
var G__22533 = count__22298;
var G__22534 = (i__22299 + (1));
seq__22296 = G__22531;
chunk__22297 = G__22532;
count__22298 = G__22533;
i__22299 = G__22534;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__22296);
if(temp__5720__auto____$1){
var seq__22296__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22296__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__22296__$1);
var G__22535 = cljs.core.chunk_rest(seq__22296__$1);
var G__22536 = c__4550__auto__;
var G__22537 = cljs.core.count(c__4550__auto__);
var G__22538 = (0);
seq__22296 = G__22535;
chunk__22297 = G__22536;
count__22298 = G__22537;
i__22299 = G__22538;
continue;
} else {
var role = cljs.core.first(seq__22296__$1);
var temp__5720__auto___22539__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22539__$2)){
var spec_22540 = temp__5720__auto___22539__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_22540)], 0));
} else {
}


var G__22541 = cljs.core.next(seq__22296__$1);
var G__22542 = null;
var G__22543 = (0);
var G__22544 = (0);
seq__22296 = G__22541;
chunk__22297 = G__22542;
count__22298 = G__22543;
i__22299 = G__22544;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__22551 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__22552 = cljs.core.ex_cause(t);
via = G__22551;
t = G__22552;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__22340 = datafied_throwable;
var map__22340__$1 = (((((!((map__22340 == null))))?(((((map__22340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22340):map__22340);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22340__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22341 = cljs.core.last(via);
var map__22341__$1 = (((((!((map__22341 == null))))?(((((map__22341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22341):map__22341);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22341__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22341__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22341__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22342 = data;
var map__22342__$1 = (((((!((map__22342 == null))))?(((((map__22342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22342):map__22342);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22349 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__22349__$1 = (((((!((map__22349 == null))))?(((((map__22349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22349):map__22349);
var top_data = map__22349__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22349__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__22355 = phase;
var G__22355__$1 = (((G__22355 instanceof cljs.core.Keyword))?G__22355.fqn:null);
switch (G__22355__$1) {
case "read-source":
var map__22358 = data;
var map__22358__$1 = (((((!((map__22358 == null))))?(((((map__22358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22358):map__22358);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22358__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22358__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22365 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__22365__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22365,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22365);
var G__22365__$2 = (cljs.core.truth_((function (){var fexpr__22366 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22366.cljs$core$IFn$_invoke$arity$1 ? fexpr__22366.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22366.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22365__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22365__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22365__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22367 = top_data;
var G__22367__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22367,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22367);
var G__22367__$2 = (cljs.core.truth_((function (){var fexpr__22368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22368.cljs$core$IFn$_invoke$arity$1 ? fexpr__22368.cljs$core$IFn$_invoke$arity$1(source) : fexpr__22368.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22367__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22367__$1);
var G__22367__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22367__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22367__$2);
var G__22367__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22367__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22367__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22367__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22367__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22370 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22370,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22370,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22370,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22370,(3),null);
var G__22375 = top_data;
var G__22375__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22375,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22375);
var G__22375__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22375__$1);
var G__22375__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22375__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22375__$2);
var G__22375__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22375__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22375__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22375__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22375__$4;
}

break;
case "execution":
var vec__22378 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__22378,source__$1,method,file,line,G__22355,G__22355__$1,map__22340,map__22340__$1,via,trace,phase,map__22341,map__22341__$1,type,message,data,map__22342,map__22342__$1,problems,fn,caller,map__22349,map__22349__$1,top_data,source){
return (function (p1__22339_SHARP_){
var or__4131__auto__ = (p1__22339_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__22383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__22383.cljs$core$IFn$_invoke$arity$1 ? fexpr__22383.cljs$core$IFn$_invoke$arity$1(p1__22339_SHARP_) : fexpr__22383.call(null,p1__22339_SHARP_));
}
});})(vec__22378,source__$1,method,file,line,G__22355,G__22355__$1,map__22340,map__22340__$1,via,trace,phase,map__22341,map__22341__$1,type,message,data,map__22342,map__22342__$1,problems,fn,caller,map__22349,map__22349__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__22384 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22384__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22384,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22384);
var G__22384__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22384__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22384__$1);
var G__22384__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22384__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22384__$2);
var G__22384__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22384__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22384__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22384__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22384__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22355__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22391){
var map__22392 = p__22391;
var map__22392__$1 = (((((!((map__22392 == null))))?(((((map__22392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22392):map__22392);
var triage_data = map__22392__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22392__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22402 = phase;
var G__22402__$1 = (((G__22402 instanceof cljs.core.Keyword))?G__22402.fqn:null);
switch (G__22402__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__22403 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__22404 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22405 = loc;
var G__22406 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22407_22595 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22408_22596 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22409_22597 = true;
var _STAR_print_fn_STAR__temp_val__22410_22598 = ((function (_STAR_print_newline_STAR__orig_val__22407_22595,_STAR_print_fn_STAR__orig_val__22408_22596,_STAR_print_newline_STAR__temp_val__22409_22597,sb__4661__auto__,G__22403,G__22404,G__22405,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22407_22595,_STAR_print_fn_STAR__orig_val__22408_22596,_STAR_print_newline_STAR__temp_val__22409_22597,sb__4661__auto__,G__22403,G__22404,G__22405,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22409_22597;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22410_22598;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22407_22595,_STAR_print_fn_STAR__orig_val__22408_22596,_STAR_print_newline_STAR__temp_val__22409_22597,_STAR_print_fn_STAR__temp_val__22410_22598,sb__4661__auto__,G__22403,G__22404,G__22405,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__22407_22595,_STAR_print_fn_STAR__orig_val__22408_22596,_STAR_print_newline_STAR__temp_val__22409_22597,_STAR_print_fn_STAR__temp_val__22410_22598,sb__4661__auto__,G__22403,G__22404,G__22405,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22389_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22389_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22407_22595,_STAR_print_fn_STAR__orig_val__22408_22596,_STAR_print_newline_STAR__temp_val__22409_22597,_STAR_print_fn_STAR__temp_val__22410_22598,sb__4661__auto__,G__22403,G__22404,G__22405,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22407_22595,_STAR_print_fn_STAR__orig_val__22408_22596,_STAR_print_newline_STAR__temp_val__22409_22597,_STAR_print_fn_STAR__temp_val__22410_22598,sb__4661__auto__,G__22403,G__22404,G__22405,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22408_22596;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22407_22595;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22403,G__22404,G__22405,G__22406) : format.call(null,G__22403,G__22404,G__22405,G__22406));

break;
case "macroexpansion":
var G__22416 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__22417 = cause_type;
var G__22418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22419 = loc;
var G__22420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22416,G__22417,G__22418,G__22419,G__22420) : format.call(null,G__22416,G__22417,G__22418,G__22419,G__22420));

break;
case "compile-syntax-check":
var G__22421 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__22422 = cause_type;
var G__22423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22424 = loc;
var G__22425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22421,G__22422,G__22423,G__22424,G__22425) : format.call(null,G__22421,G__22422,G__22423,G__22424,G__22425));

break;
case "compilation":
var G__22428 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__22429 = cause_type;
var G__22430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22431 = loc;
var G__22432 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22428,G__22429,G__22430,G__22431,G__22432) : format.call(null,G__22428,G__22429,G__22430,G__22431,G__22432));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__22434 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__22435 = symbol;
var G__22436 = loc;
var G__22437 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22439_22615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22440_22616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22441_22617 = true;
var _STAR_print_fn_STAR__temp_val__22442_22618 = ((function (_STAR_print_newline_STAR__orig_val__22439_22615,_STAR_print_fn_STAR__orig_val__22440_22616,_STAR_print_newline_STAR__temp_val__22441_22617,sb__4661__auto__,G__22434,G__22435,G__22436,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22439_22615,_STAR_print_fn_STAR__orig_val__22440_22616,_STAR_print_newline_STAR__temp_val__22441_22617,sb__4661__auto__,G__22434,G__22435,G__22436,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22441_22617;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22442_22618;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22439_22615,_STAR_print_fn_STAR__orig_val__22440_22616,_STAR_print_newline_STAR__temp_val__22441_22617,_STAR_print_fn_STAR__temp_val__22442_22618,sb__4661__auto__,G__22434,G__22435,G__22436,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__22439_22615,_STAR_print_fn_STAR__orig_val__22440_22616,_STAR_print_newline_STAR__temp_val__22441_22617,_STAR_print_fn_STAR__temp_val__22442_22618,sb__4661__auto__,G__22434,G__22435,G__22436,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22390_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__22390_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22439_22615,_STAR_print_fn_STAR__orig_val__22440_22616,_STAR_print_newline_STAR__temp_val__22441_22617,_STAR_print_fn_STAR__temp_val__22442_22618,sb__4661__auto__,G__22434,G__22435,G__22436,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22439_22615,_STAR_print_fn_STAR__orig_val__22440_22616,_STAR_print_newline_STAR__temp_val__22441_22617,_STAR_print_fn_STAR__temp_val__22442_22618,sb__4661__auto__,G__22434,G__22435,G__22436,G__22402,G__22402__$1,loc,class_name,simple_class,cause_type,format,map__22392,map__22392__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22440_22616;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22439_22615;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__22434,G__22435,G__22436,G__22437) : format.call(null,G__22434,G__22435,G__22436,G__22437));
} else {
var G__22443 = "Execution error%s at %s(%s).\n%s\n";
var G__22444 = cause_type;
var G__22445 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__22446 = loc;
var G__22447 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__22443,G__22444,G__22445,G__22446,G__22447) : format.call(null,G__22443,G__22444,G__22445,G__22446,G__22447));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22402__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
