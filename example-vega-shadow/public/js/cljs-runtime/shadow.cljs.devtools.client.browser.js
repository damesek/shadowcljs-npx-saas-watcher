goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29774 = arguments.length;
var i__4731__auto___29775 = (0);
while(true){
if((i__4731__auto___29775 < len__4730__auto___29774)){
args__4736__auto__.push((arguments[i__4731__auto___29775]));

var G__29776 = (i__4731__auto___29775 + (1));
i__4731__auto___29775 = G__29776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq29548){
var G__29549 = cljs.core.first(seq29548);
var seq29548__$1 = cljs.core.next(seq29548);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29549,seq29548__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__29565){
var map__29566 = p__29565;
var map__29566__$1 = (((((!((map__29566 == null))))?(((((map__29566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29566):map__29566);
var src = map__29566__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29566__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29566__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__29568 = cljs.core.seq(sources);
var chunk__29569 = null;
var count__29570 = (0);
var i__29571 = (0);
while(true){
if((i__29571 < count__29570)){
var map__29576 = chunk__29569.cljs$core$IIndexed$_nth$arity$2(null,i__29571);
var map__29576__$1 = (((((!((map__29576 == null))))?(((((map__29576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29576):map__29576);
var src = map__29576__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29576__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29576__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29576__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29576__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__29780 = seq__29568;
var G__29781 = chunk__29569;
var G__29782 = count__29570;
var G__29783 = (i__29571 + (1));
seq__29568 = G__29780;
chunk__29569 = G__29781;
count__29570 = G__29782;
i__29571 = G__29783;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29568);
if(temp__5720__auto__){
var seq__29568__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29568__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29568__$1);
var G__29784 = cljs.core.chunk_rest(seq__29568__$1);
var G__29785 = c__4550__auto__;
var G__29786 = cljs.core.count(c__4550__auto__);
var G__29787 = (0);
seq__29568 = G__29784;
chunk__29569 = G__29785;
count__29570 = G__29786;
i__29571 = G__29787;
continue;
} else {
var map__29580 = cljs.core.first(seq__29568__$1);
var map__29580__$1 = (((((!((map__29580 == null))))?(((((map__29580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29580):map__29580);
var src = map__29580__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29580__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29580__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29580__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29580__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__29788 = cljs.core.next(seq__29568__$1);
var G__29789 = null;
var G__29790 = (0);
var G__29791 = (0);
seq__29568 = G__29788;
chunk__29569 = G__29789;
count__29570 = G__29790;
i__29571 = G__29791;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__29585 = cljs.core.seq(js_requires);
var chunk__29586 = null;
var count__29587 = (0);
var i__29588 = (0);
while(true){
if((i__29588 < count__29587)){
var js_ns = chunk__29586.cljs$core$IIndexed$_nth$arity$2(null,i__29588);
var require_str_29792 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29792);


var G__29793 = seq__29585;
var G__29794 = chunk__29586;
var G__29795 = count__29587;
var G__29796 = (i__29588 + (1));
seq__29585 = G__29793;
chunk__29586 = G__29794;
count__29587 = G__29795;
i__29588 = G__29796;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29585);
if(temp__5720__auto__){
var seq__29585__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29585__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29585__$1);
var G__29797 = cljs.core.chunk_rest(seq__29585__$1);
var G__29798 = c__4550__auto__;
var G__29799 = cljs.core.count(c__4550__auto__);
var G__29800 = (0);
seq__29585 = G__29797;
chunk__29586 = G__29798;
count__29587 = G__29799;
i__29588 = G__29800;
continue;
} else {
var js_ns = cljs.core.first(seq__29585__$1);
var require_str_29801 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_29801);


var G__29802 = cljs.core.next(seq__29585__$1);
var G__29803 = null;
var G__29804 = (0);
var G__29805 = (0);
seq__29585 = G__29802;
chunk__29586 = G__29803;
count__29587 = G__29804;
i__29588 = G__29805;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__29590 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__29590) : callback.call(null,G__29590));
} else {
var G__29591 = shadow.cljs.devtools.client.env.files_url();
var G__29592 = ((function (G__29591){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__29591))
;
var G__29593 = "POST";
var G__29594 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__29595 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__29591,G__29592,G__29593,G__29594,G__29595);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__29598){
var map__29599 = p__29598;
var map__29599__$1 = (((((!((map__29599 == null))))?(((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29599):map__29599);
var msg = map__29599__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29599__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29599__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29601 = info;
var map__29601__$1 = (((((!((map__29601 == null))))?(((((map__29601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29601):map__29601);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29601__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29601__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29604(s__29605){
return (new cljs.core.LazySeq(null,((function (map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info){
return (function (){
var s__29605__$1 = s__29605;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29605__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__29610 = cljs.core.first(xs__6277__auto__);
var map__29610__$1 = (((((!((map__29610 == null))))?(((((map__29610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29610):map__29610);
var src = map__29610__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29610__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29610__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__29605__$1,map__29610,map__29610__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29604_$_iter__29606(s__29607){
return (new cljs.core.LazySeq(null,((function (s__29605__$1,map__29610,map__29610__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info){
return (function (){
var s__29607__$1 = s__29607;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29607__$1);
if(temp__5720__auto____$1){
var s__29607__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29607__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29607__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29609 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29608 = (0);
while(true){
if((i__29608 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29608);
cljs.core.chunk_append(b__29609,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__29813 = (i__29608 + (1));
i__29608 = G__29813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29609),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29604_$_iter__29606(cljs.core.chunk_rest(s__29607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29609),null);
}
} else {
var warning = cljs.core.first(s__29607__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29604_$_iter__29606(cljs.core.rest(s__29607__$2)));
}
} else {
return null;
}
break;
}
});})(s__29605__$1,map__29610,map__29610__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info))
,null,null));
});})(s__29605__$1,map__29610,map__29610__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__29604(cljs.core.rest(s__29605__$1)));
} else {
var G__29814 = cljs.core.rest(s__29605__$1);
s__29605__$1 = G__29814;
continue;
}
} else {
var G__29815 = cljs.core.rest(s__29605__$1);
s__29605__$1 = G__29815;
continue;
}
} else {
return null;
}
break;
}
});})(map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info))
,null,null));
});})(map__29601,map__29601__$1,sources,compiled,map__29599,map__29599__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__29613_29816 = cljs.core.seq(warnings);
var chunk__29614_29817 = null;
var count__29615_29818 = (0);
var i__29616_29819 = (0);
while(true){
if((i__29616_29819 < count__29615_29818)){
var map__29623_29820 = chunk__29614_29817.cljs$core$IIndexed$_nth$arity$2(null,i__29616_29819);
var map__29623_29821__$1 = (((((!((map__29623_29820 == null))))?(((((map__29623_29820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29623_29820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29623_29820):map__29623_29820);
var w_29822 = map__29623_29821__$1;
var msg_29823__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29623_29821__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29623_29821__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29623_29821__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29623_29821__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29826)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29824),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29825),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29823__$1)].join(''));


var G__29827 = seq__29613_29816;
var G__29828 = chunk__29614_29817;
var G__29829 = count__29615_29818;
var G__29830 = (i__29616_29819 + (1));
seq__29613_29816 = G__29827;
chunk__29614_29817 = G__29828;
count__29615_29818 = G__29829;
i__29616_29819 = G__29830;
continue;
} else {
var temp__5720__auto___29832 = cljs.core.seq(seq__29613_29816);
if(temp__5720__auto___29832){
var seq__29613_29834__$1 = temp__5720__auto___29832;
if(cljs.core.chunked_seq_QMARK_(seq__29613_29834__$1)){
var c__4550__auto___29835 = cljs.core.chunk_first(seq__29613_29834__$1);
var G__29836 = cljs.core.chunk_rest(seq__29613_29834__$1);
var G__29837 = c__4550__auto___29835;
var G__29838 = cljs.core.count(c__4550__auto___29835);
var G__29839 = (0);
seq__29613_29816 = G__29836;
chunk__29614_29817 = G__29837;
count__29615_29818 = G__29838;
i__29616_29819 = G__29839;
continue;
} else {
var map__29625_29840 = cljs.core.first(seq__29613_29834__$1);
var map__29625_29841__$1 = (((((!((map__29625_29840 == null))))?(((((map__29625_29840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29625_29840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29625_29840):map__29625_29840);
var w_29842 = map__29625_29841__$1;
var msg_29843__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29625_29841__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_29844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29625_29841__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29625_29841__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_29846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29625_29841__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_29846)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_29844),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_29845),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_29843__$1)].join(''));


var G__29847 = cljs.core.next(seq__29613_29834__$1);
var G__29848 = null;
var G__29849 = (0);
var G__29850 = (0);
seq__29613_29816 = G__29847;
chunk__29614_29817 = G__29848;
count__29615_29818 = G__29849;
i__29616_29819 = G__29850;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info){
return (function (p__29627){
var map__29628 = p__29627;
var map__29628__$1 = (((((!((map__29628 == null))))?(((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29628):map__29628);
var src = map__29628__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29628__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29628__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info){
return (function (p__29630){
var map__29631 = p__29630;
var map__29631__$1 = (((((!((map__29631 == null))))?(((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29631):map__29631);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29631__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info){
return (function (p__29635){
var map__29636 = p__29635;
var map__29636__$1 = (((((!((map__29636 == null))))?(((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29636):map__29636);
var rc = map__29636__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29636__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info){
return (function (p1__29597_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__29597_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__29601,map__29601__$1,sources,compiled,warnings,map__29599,map__29599__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4120__auto__){
return rel_new;
} else {
return and__4120__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__29646){
var map__29647 = p__29646;
var map__29647__$1 = (((((!((map__29647 == null))))?(((((map__29647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29647):map__29647);
var msg = map__29647__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29647__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__29651 = cljs.core.seq(updates);
var chunk__29653 = null;
var count__29654 = (0);
var i__29655 = (0);
while(true){
if((i__29655 < count__29654)){
var path = chunk__29653.cljs$core$IIndexed$_nth$arity$2(null,i__29655);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29710_29858 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29713_29859 = null;
var count__29714_29860 = (0);
var i__29715_29861 = (0);
while(true){
if((i__29715_29861 < count__29714_29860)){
var node_29862 = chunk__29713_29859.cljs$core$IIndexed$_nth$arity$2(null,i__29715_29861);
var path_match_29863 = shadow.cljs.devtools.client.browser.match_paths(node_29862.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29863)){
var new_link_29864 = (function (){var G__29720 = node_29862.cloneNode(true);
G__29720.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29863),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29720;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29863], 0));

goog.dom.insertSiblingAfter(new_link_29864,node_29862);

goog.dom.removeNode(node_29862);


var G__29865 = seq__29710_29858;
var G__29866 = chunk__29713_29859;
var G__29867 = count__29714_29860;
var G__29868 = (i__29715_29861 + (1));
seq__29710_29858 = G__29865;
chunk__29713_29859 = G__29866;
count__29714_29860 = G__29867;
i__29715_29861 = G__29868;
continue;
} else {
var G__29869 = seq__29710_29858;
var G__29870 = chunk__29713_29859;
var G__29871 = count__29714_29860;
var G__29872 = (i__29715_29861 + (1));
seq__29710_29858 = G__29869;
chunk__29713_29859 = G__29870;
count__29714_29860 = G__29871;
i__29715_29861 = G__29872;
continue;
}
} else {
var temp__5720__auto___29873 = cljs.core.seq(seq__29710_29858);
if(temp__5720__auto___29873){
var seq__29710_29875__$1 = temp__5720__auto___29873;
if(cljs.core.chunked_seq_QMARK_(seq__29710_29875__$1)){
var c__4550__auto___29876 = cljs.core.chunk_first(seq__29710_29875__$1);
var G__29877 = cljs.core.chunk_rest(seq__29710_29875__$1);
var G__29878 = c__4550__auto___29876;
var G__29879 = cljs.core.count(c__4550__auto___29876);
var G__29880 = (0);
seq__29710_29858 = G__29877;
chunk__29713_29859 = G__29878;
count__29714_29860 = G__29879;
i__29715_29861 = G__29880;
continue;
} else {
var node_29881 = cljs.core.first(seq__29710_29875__$1);
var path_match_29882 = shadow.cljs.devtools.client.browser.match_paths(node_29881.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29882)){
var new_link_29883 = (function (){var G__29721 = node_29881.cloneNode(true);
G__29721.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29882),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29721;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29882], 0));

goog.dom.insertSiblingAfter(new_link_29883,node_29881);

goog.dom.removeNode(node_29881);


var G__29884 = cljs.core.next(seq__29710_29875__$1);
var G__29885 = null;
var G__29886 = (0);
var G__29887 = (0);
seq__29710_29858 = G__29884;
chunk__29713_29859 = G__29885;
count__29714_29860 = G__29886;
i__29715_29861 = G__29887;
continue;
} else {
var G__29888 = cljs.core.next(seq__29710_29875__$1);
var G__29889 = null;
var G__29890 = (0);
var G__29891 = (0);
seq__29710_29858 = G__29888;
chunk__29713_29859 = G__29889;
count__29714_29860 = G__29890;
i__29715_29861 = G__29891;
continue;
}
}
} else {
}
}
break;
}


var G__29892 = seq__29651;
var G__29893 = chunk__29653;
var G__29894 = count__29654;
var G__29895 = (i__29655 + (1));
seq__29651 = G__29892;
chunk__29653 = G__29893;
count__29654 = G__29894;
i__29655 = G__29895;
continue;
} else {
var G__29896 = seq__29651;
var G__29897 = chunk__29653;
var G__29898 = count__29654;
var G__29899 = (i__29655 + (1));
seq__29651 = G__29896;
chunk__29653 = G__29897;
count__29654 = G__29898;
i__29655 = G__29899;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__29651);
if(temp__5720__auto__){
var seq__29651__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29651__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29651__$1);
var G__29900 = cljs.core.chunk_rest(seq__29651__$1);
var G__29901 = c__4550__auto__;
var G__29902 = cljs.core.count(c__4550__auto__);
var G__29903 = (0);
seq__29651 = G__29900;
chunk__29653 = G__29901;
count__29654 = G__29902;
i__29655 = G__29903;
continue;
} else {
var path = cljs.core.first(seq__29651__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__29724_29904 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__29727_29905 = null;
var count__29728_29906 = (0);
var i__29729_29907 = (0);
while(true){
if((i__29729_29907 < count__29728_29906)){
var node_29908 = chunk__29727_29905.cljs$core$IIndexed$_nth$arity$2(null,i__29729_29907);
var path_match_29909 = shadow.cljs.devtools.client.browser.match_paths(node_29908.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29909)){
var new_link_29910 = (function (){var G__29734 = node_29908.cloneNode(true);
G__29734.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29909),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29734;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29909], 0));

goog.dom.insertSiblingAfter(new_link_29910,node_29908);

goog.dom.removeNode(node_29908);


var G__29911 = seq__29724_29904;
var G__29912 = chunk__29727_29905;
var G__29913 = count__29728_29906;
var G__29914 = (i__29729_29907 + (1));
seq__29724_29904 = G__29911;
chunk__29727_29905 = G__29912;
count__29728_29906 = G__29913;
i__29729_29907 = G__29914;
continue;
} else {
var G__29915 = seq__29724_29904;
var G__29916 = chunk__29727_29905;
var G__29917 = count__29728_29906;
var G__29918 = (i__29729_29907 + (1));
seq__29724_29904 = G__29915;
chunk__29727_29905 = G__29916;
count__29728_29906 = G__29917;
i__29729_29907 = G__29918;
continue;
}
} else {
var temp__5720__auto___29919__$1 = cljs.core.seq(seq__29724_29904);
if(temp__5720__auto___29919__$1){
var seq__29724_29920__$1 = temp__5720__auto___29919__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29724_29920__$1)){
var c__4550__auto___29921 = cljs.core.chunk_first(seq__29724_29920__$1);
var G__29922 = cljs.core.chunk_rest(seq__29724_29920__$1);
var G__29923 = c__4550__auto___29921;
var G__29924 = cljs.core.count(c__4550__auto___29921);
var G__29925 = (0);
seq__29724_29904 = G__29922;
chunk__29727_29905 = G__29923;
count__29728_29906 = G__29924;
i__29729_29907 = G__29925;
continue;
} else {
var node_29926 = cljs.core.first(seq__29724_29920__$1);
var path_match_29927 = shadow.cljs.devtools.client.browser.match_paths(node_29926.getAttribute("href"),path);
if(cljs.core.truth_(path_match_29927)){
var new_link_29929 = (function (){var G__29735 = node_29926.cloneNode(true);
G__29735.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_29927),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__29735;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_29927], 0));

goog.dom.insertSiblingAfter(new_link_29929,node_29926);

goog.dom.removeNode(node_29926);


var G__29930 = cljs.core.next(seq__29724_29920__$1);
var G__29931 = null;
var G__29932 = (0);
var G__29933 = (0);
seq__29724_29904 = G__29930;
chunk__29727_29905 = G__29931;
count__29728_29906 = G__29932;
i__29729_29907 = G__29933;
continue;
} else {
var G__29934 = cljs.core.next(seq__29724_29920__$1);
var G__29935 = null;
var G__29936 = (0);
var G__29937 = (0);
seq__29724_29904 = G__29934;
chunk__29727_29905 = G__29935;
count__29728_29906 = G__29936;
i__29729_29907 = G__29937;
continue;
}
}
} else {
}
}
break;
}


var G__29938 = cljs.core.next(seq__29651__$1);
var G__29939 = null;
var G__29940 = (0);
var G__29941 = (0);
seq__29651 = G__29938;
chunk__29653 = G__29939;
count__29654 = G__29940;
i__29655 = G__29941;
continue;
} else {
var G__29943 = cljs.core.next(seq__29651__$1);
var G__29944 = null;
var G__29945 = (0);
var G__29946 = (0);
seq__29651 = G__29943;
chunk__29653 = G__29944;
count__29654 = G__29945;
i__29655 = G__29946;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__29742){
var map__29743 = p__29742;
var map__29743__$1 = (((((!((map__29743 == null))))?(((((map__29743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29743):map__29743);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29743__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29743__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__29743,map__29743__$1,id,js){
return (function (){
return eval(js);
});})(map__29743,map__29743__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__29745){
var map__29746 = p__29745;
var map__29746__$1 = (((((!((map__29746 == null))))?(((((map__29746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29746):map__29746);
var msg = map__29746__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29746__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29746__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29746__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__29746,map__29746__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__29748){
var map__29749 = p__29748;
var map__29749__$1 = (((((!((map__29749 == null))))?(((((map__29749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29749):map__29749);
var src = map__29749__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29749__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__29746,map__29746__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__29746,map__29746__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__29746,map__29746__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__29751){
var map__29752 = p__29751;
var map__29752__$1 = (((((!((map__29752 == null))))?(((((map__29752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29752):map__29752);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29752__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29752__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__29752,map__29752__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__29752,map__29752__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__29754){
var map__29755 = p__29754;
var map__29755__$1 = (((((!((map__29755 == null))))?(((((map__29755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29755):map__29755);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29755__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29755__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__29757){
var map__29758 = p__29757;
var map__29758__$1 = (((((!((map__29758 == null))))?(((((map__29758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29758):map__29758);
var msg = map__29758__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29758__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__29760 = type;
var G__29760__$1 = (((G__29760 instanceof cljs.core.Keyword))?G__29760.fqn:null);
switch (G__29760__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__29761 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__29762 = ((function (G__29761){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__29761))
;
var G__29763 = "POST";
var G__29764 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__29765 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__29761,G__29762,G__29763,G__29764,G__29765);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e29770){var e = e29770;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___29950 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___29950)){
var s_29951 = temp__5720__auto___29950;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_29951.onclose = ((function (s_29951,temp__5720__auto___29950){
return (function (e){
return null;
});})(s_29951,temp__5720__auto___29950))
;

s_29951.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
