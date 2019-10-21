goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__27476 = coll;
var G__27477 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__27476,G__27477) : shadow.dom.lazy_native_coll_seq.call(null,G__27476,G__27477));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__27509 = arguments.length;
switch (G__27509) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__27515 = arguments.length;
switch (G__27515) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__27519 = arguments.length;
switch (G__27519) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__27524 = arguments.length;
switch (G__27524) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__27534 = arguments.length;
switch (G__27534) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__27536 = document;
var G__27537 = shadow.dom.dom_node(el);
return goog.dom.contains(G__27536,G__27537);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__27540 = shadow.dom.dom_node(parent);
var G__27541 = shadow.dom.dom_node(el);
return goog.dom.contains(G__27540,G__27541);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__27547 = shadow.dom.dom_node(el);
var G__27548 = cls;
return goog.dom.classlist.add(G__27547,G__27548);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__27552 = shadow.dom.dom_node(el);
var G__27553 = cls;
return goog.dom.classlist.remove(G__27552,G__27553);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__27556 = arguments.length;
switch (G__27556) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__27558 = shadow.dom.dom_node(el);
var G__27559 = cls;
return goog.dom.classlist.toggle(G__27558,G__27559);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e27562){if((e27562 instanceof Object)){
var e = e27562;
return console.log("didnt support attachEvent",el,e);
} else {
throw e27562;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__27567 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__27568 = null;
var count__27569 = (0);
var i__27570 = (0);
while(true){
if((i__27570 < count__27569)){
var el = chunk__27568.cljs$core$IIndexed$_nth$arity$2(null,i__27570);
var handler_28216__$1 = ((function (seq__27567,chunk__27568,count__27569,i__27570,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__27567,chunk__27568,count__27569,i__27570,el))
;
var G__27587_28217 = el;
var G__27588_28218 = cljs.core.name(ev);
var G__27589_28219 = handler_28216__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27587_28217,G__27588_28218,G__27589_28219) : shadow.dom.dom_listen.call(null,G__27587_28217,G__27588_28218,G__27589_28219));


var G__28220 = seq__27567;
var G__28221 = chunk__27568;
var G__28222 = count__27569;
var G__28223 = (i__27570 + (1));
seq__27567 = G__28220;
chunk__27568 = G__28221;
count__27569 = G__28222;
i__27570 = G__28223;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27567);
if(temp__5720__auto__){
var seq__27567__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27567__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27567__$1);
var G__28224 = cljs.core.chunk_rest(seq__27567__$1);
var G__28225 = c__4550__auto__;
var G__28226 = cljs.core.count(c__4550__auto__);
var G__28227 = (0);
seq__27567 = G__28224;
chunk__27568 = G__28225;
count__27569 = G__28226;
i__27570 = G__28227;
continue;
} else {
var el = cljs.core.first(seq__27567__$1);
var handler_28228__$1 = ((function (seq__27567,chunk__27568,count__27569,i__27570,el,seq__27567__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__27567,chunk__27568,count__27569,i__27570,el,seq__27567__$1,temp__5720__auto__))
;
var G__27593_28229 = el;
var G__27594_28230 = cljs.core.name(ev);
var G__27595_28231 = handler_28228__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27593_28229,G__27594_28230,G__27595_28231) : shadow.dom.dom_listen.call(null,G__27593_28229,G__27594_28230,G__27595_28231));


var G__28232 = cljs.core.next(seq__27567__$1);
var G__28233 = null;
var G__28234 = (0);
var G__28235 = (0);
seq__27567 = G__28232;
chunk__27568 = G__28233;
count__27569 = G__28234;
i__27570 = G__28235;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__27599 = arguments.length;
switch (G__27599) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__27603 = shadow.dom.dom_node(el);
var G__27604 = cljs.core.name(ev);
var G__27605 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__27603,G__27604,G__27605) : shadow.dom.dom_listen.call(null,G__27603,G__27604,G__27605));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__27608 = shadow.dom.dom_node(el);
var G__27609 = cljs.core.name(ev);
var G__27610 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__27608,G__27609,G__27610) : shadow.dom.dom_listen_remove.call(null,G__27608,G__27609,G__27610));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__27614 = cljs.core.seq(events);
var chunk__27615 = null;
var count__27616 = (0);
var i__27617 = (0);
while(true){
if((i__27617 < count__27616)){
var vec__27627 = chunk__27615.cljs$core$IIndexed$_nth$arity$2(null,i__27617);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27627,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28237 = seq__27614;
var G__28238 = chunk__27615;
var G__28239 = count__27616;
var G__28240 = (i__27617 + (1));
seq__27614 = G__28237;
chunk__27615 = G__28238;
count__27616 = G__28239;
i__27617 = G__28240;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27614);
if(temp__5720__auto__){
var seq__27614__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27614__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27614__$1);
var G__28241 = cljs.core.chunk_rest(seq__27614__$1);
var G__28242 = c__4550__auto__;
var G__28243 = cljs.core.count(c__4550__auto__);
var G__28244 = (0);
seq__27614 = G__28241;
chunk__27615 = G__28242;
count__27616 = G__28243;
i__27617 = G__28244;
continue;
} else {
var vec__27630 = cljs.core.first(seq__27614__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27630,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__28245 = cljs.core.next(seq__27614__$1);
var G__28246 = null;
var G__28247 = (0);
var G__28248 = (0);
seq__27614 = G__28245;
chunk__27615 = G__28246;
count__27616 = G__28247;
i__27617 = G__28248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__27635 = cljs.core.seq(styles);
var chunk__27636 = null;
var count__27637 = (0);
var i__27638 = (0);
while(true){
if((i__27638 < count__27637)){
var vec__27654 = chunk__27636.cljs$core$IIndexed$_nth$arity$2(null,i__27638);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27654,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27654,(1),null);
var G__27657_28249 = dom;
var G__27658_28250 = cljs.core.name(k);
var G__27659_28251 = (((v == null))?"":v);
goog.style.setStyle(G__27657_28249,G__27658_28250,G__27659_28251);


var G__28253 = seq__27635;
var G__28254 = chunk__27636;
var G__28255 = count__27637;
var G__28256 = (i__27638 + (1));
seq__27635 = G__28253;
chunk__27636 = G__28254;
count__27637 = G__28255;
i__27638 = G__28256;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27635);
if(temp__5720__auto__){
var seq__27635__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27635__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27635__$1);
var G__28258 = cljs.core.chunk_rest(seq__27635__$1);
var G__28259 = c__4550__auto__;
var G__28260 = cljs.core.count(c__4550__auto__);
var G__28261 = (0);
seq__27635 = G__28258;
chunk__27636 = G__28259;
count__27637 = G__28260;
i__27638 = G__28261;
continue;
} else {
var vec__27664 = cljs.core.first(seq__27635__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27664,(1),null);
var G__27668_28262 = dom;
var G__27669_28263 = cljs.core.name(k);
var G__27670_28264 = (((v == null))?"":v);
goog.style.setStyle(G__27668_28262,G__27669_28263,G__27670_28264);


var G__28265 = cljs.core.next(seq__27635__$1);
var G__28266 = null;
var G__28267 = (0);
var G__28268 = (0);
seq__27635 = G__28265;
chunk__27636 = G__28266;
count__27637 = G__28267;
i__27638 = G__28268;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__27678_28269 = key;
var G__27678_28270__$1 = (((G__27678_28269 instanceof cljs.core.Keyword))?G__27678_28269.fqn:null);
switch (G__27678_28270__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_28272 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_28272,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_28272,"aria-");
}
})())){
el.setAttribute(ks_28272,value);
} else {
(el[ks_28272] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__27681 = shadow.dom.dom_node(el);
var G__27682 = cls;
return goog.dom.classlist.contains(G__27681,G__27682);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__27683){
var map__27684 = p__27683;
var map__27684__$1 = (((((!((map__27684 == null))))?(((((map__27684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27684):map__27684);
var props = map__27684__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27684__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__27688 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27688,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27688,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27688,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__27691 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__27691,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__27691;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__27697 = arguments.length;
switch (G__27697) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__27705){
var vec__27706 = p__27705;
var seq__27707 = cljs.core.seq(vec__27706);
var first__27708 = cljs.core.first(seq__27707);
var seq__27707__$1 = cljs.core.next(seq__27707);
var nn = first__27708;
var first__27708__$1 = cljs.core.first(seq__27707__$1);
var seq__27707__$2 = cljs.core.next(seq__27707__$1);
var np = first__27708__$1;
var nc = seq__27707__$2;
var node = vec__27706;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27710 = nn;
var G__27711 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27710,G__27711) : create_fn.call(null,G__27710,G__27711));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27713 = nn;
var G__27714 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27713,G__27714) : create_fn.call(null,G__27713,G__27714));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__27719 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27719,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27719,(1),null);
var seq__27722_28278 = cljs.core.seq(node_children);
var chunk__27723_28279 = null;
var count__27724_28280 = (0);
var i__27725_28281 = (0);
while(true){
if((i__27725_28281 < count__27724_28280)){
var child_struct_28282 = chunk__27723_28279.cljs$core$IIndexed$_nth$arity$2(null,i__27725_28281);
var children_28283 = shadow.dom.dom_node(child_struct_28282);
if(cljs.core.seq_QMARK_(children_28283)){
var seq__27758_28284 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28283));
var chunk__27760_28285 = null;
var count__27761_28286 = (0);
var i__27762_28287 = (0);
while(true){
if((i__27762_28287 < count__27761_28286)){
var child_28288 = chunk__27760_28285.cljs$core$IIndexed$_nth$arity$2(null,i__27762_28287);
if(cljs.core.truth_(child_28288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28288);


var G__28289 = seq__27758_28284;
var G__28290 = chunk__27760_28285;
var G__28291 = count__27761_28286;
var G__28292 = (i__27762_28287 + (1));
seq__27758_28284 = G__28289;
chunk__27760_28285 = G__28290;
count__27761_28286 = G__28291;
i__27762_28287 = G__28292;
continue;
} else {
var G__28294 = seq__27758_28284;
var G__28295 = chunk__27760_28285;
var G__28296 = count__27761_28286;
var G__28297 = (i__27762_28287 + (1));
seq__27758_28284 = G__28294;
chunk__27760_28285 = G__28295;
count__27761_28286 = G__28296;
i__27762_28287 = G__28297;
continue;
}
} else {
var temp__5720__auto___28298 = cljs.core.seq(seq__27758_28284);
if(temp__5720__auto___28298){
var seq__27758_28299__$1 = temp__5720__auto___28298;
if(cljs.core.chunked_seq_QMARK_(seq__27758_28299__$1)){
var c__4550__auto___28300 = cljs.core.chunk_first(seq__27758_28299__$1);
var G__28301 = cljs.core.chunk_rest(seq__27758_28299__$1);
var G__28302 = c__4550__auto___28300;
var G__28303 = cljs.core.count(c__4550__auto___28300);
var G__28304 = (0);
seq__27758_28284 = G__28301;
chunk__27760_28285 = G__28302;
count__27761_28286 = G__28303;
i__27762_28287 = G__28304;
continue;
} else {
var child_28305 = cljs.core.first(seq__27758_28299__$1);
if(cljs.core.truth_(child_28305)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28305);


var G__28306 = cljs.core.next(seq__27758_28299__$1);
var G__28307 = null;
var G__28308 = (0);
var G__28309 = (0);
seq__27758_28284 = G__28306;
chunk__27760_28285 = G__28307;
count__27761_28286 = G__28308;
i__27762_28287 = G__28309;
continue;
} else {
var G__28310 = cljs.core.next(seq__27758_28299__$1);
var G__28311 = null;
var G__28312 = (0);
var G__28313 = (0);
seq__27758_28284 = G__28310;
chunk__27760_28285 = G__28311;
count__27761_28286 = G__28312;
i__27762_28287 = G__28313;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28283);
}


var G__28315 = seq__27722_28278;
var G__28316 = chunk__27723_28279;
var G__28317 = count__27724_28280;
var G__28318 = (i__27725_28281 + (1));
seq__27722_28278 = G__28315;
chunk__27723_28279 = G__28316;
count__27724_28280 = G__28317;
i__27725_28281 = G__28318;
continue;
} else {
var temp__5720__auto___28319 = cljs.core.seq(seq__27722_28278);
if(temp__5720__auto___28319){
var seq__27722_28320__$1 = temp__5720__auto___28319;
if(cljs.core.chunked_seq_QMARK_(seq__27722_28320__$1)){
var c__4550__auto___28322 = cljs.core.chunk_first(seq__27722_28320__$1);
var G__28323 = cljs.core.chunk_rest(seq__27722_28320__$1);
var G__28324 = c__4550__auto___28322;
var G__28325 = cljs.core.count(c__4550__auto___28322);
var G__28326 = (0);
seq__27722_28278 = G__28323;
chunk__27723_28279 = G__28324;
count__27724_28280 = G__28325;
i__27725_28281 = G__28326;
continue;
} else {
var child_struct_28327 = cljs.core.first(seq__27722_28320__$1);
var children_28328 = shadow.dom.dom_node(child_struct_28327);
if(cljs.core.seq_QMARK_(children_28328)){
var seq__27775_28329 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_28328));
var chunk__27777_28330 = null;
var count__27778_28331 = (0);
var i__27779_28332 = (0);
while(true){
if((i__27779_28332 < count__27778_28331)){
var child_28333 = chunk__27777_28330.cljs$core$IIndexed$_nth$arity$2(null,i__27779_28332);
if(cljs.core.truth_(child_28333)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28333);


var G__28334 = seq__27775_28329;
var G__28335 = chunk__27777_28330;
var G__28336 = count__27778_28331;
var G__28337 = (i__27779_28332 + (1));
seq__27775_28329 = G__28334;
chunk__27777_28330 = G__28335;
count__27778_28331 = G__28336;
i__27779_28332 = G__28337;
continue;
} else {
var G__28338 = seq__27775_28329;
var G__28339 = chunk__27777_28330;
var G__28340 = count__27778_28331;
var G__28341 = (i__27779_28332 + (1));
seq__27775_28329 = G__28338;
chunk__27777_28330 = G__28339;
count__27778_28331 = G__28340;
i__27779_28332 = G__28341;
continue;
}
} else {
var temp__5720__auto___28342__$1 = cljs.core.seq(seq__27775_28329);
if(temp__5720__auto___28342__$1){
var seq__27775_28343__$1 = temp__5720__auto___28342__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27775_28343__$1)){
var c__4550__auto___28344 = cljs.core.chunk_first(seq__27775_28343__$1);
var G__28345 = cljs.core.chunk_rest(seq__27775_28343__$1);
var G__28346 = c__4550__auto___28344;
var G__28347 = cljs.core.count(c__4550__auto___28344);
var G__28348 = (0);
seq__27775_28329 = G__28345;
chunk__27777_28330 = G__28346;
count__27778_28331 = G__28347;
i__27779_28332 = G__28348;
continue;
} else {
var child_28350 = cljs.core.first(seq__27775_28343__$1);
if(cljs.core.truth_(child_28350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_28350);


var G__28351 = cljs.core.next(seq__27775_28343__$1);
var G__28352 = null;
var G__28353 = (0);
var G__28354 = (0);
seq__27775_28329 = G__28351;
chunk__27777_28330 = G__28352;
count__27778_28331 = G__28353;
i__27779_28332 = G__28354;
continue;
} else {
var G__28355 = cljs.core.next(seq__27775_28343__$1);
var G__28356 = null;
var G__28357 = (0);
var G__28358 = (0);
seq__27775_28329 = G__28355;
chunk__27777_28330 = G__28356;
count__27778_28331 = G__28357;
i__27779_28332 = G__28358;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_28328);
}


var G__28359 = cljs.core.next(seq__27722_28320__$1);
var G__28360 = null;
var G__28361 = (0);
var G__28362 = (0);
seq__27722_28278 = G__28359;
chunk__27723_28279 = G__28360;
count__27724_28280 = G__28361;
i__27725_28281 = G__28362;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__27789 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__27789);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__27794 = cljs.core.seq(node);
var chunk__27795 = null;
var count__27796 = (0);
var i__27797 = (0);
while(true){
if((i__27797 < count__27796)){
var n = chunk__27795.cljs$core$IIndexed$_nth$arity$2(null,i__27797);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28369 = seq__27794;
var G__28370 = chunk__27795;
var G__28371 = count__27796;
var G__28372 = (i__27797 + (1));
seq__27794 = G__28369;
chunk__27795 = G__28370;
count__27796 = G__28371;
i__27797 = G__28372;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27794);
if(temp__5720__auto__){
var seq__27794__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27794__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27794__$1);
var G__28373 = cljs.core.chunk_rest(seq__27794__$1);
var G__28374 = c__4550__auto__;
var G__28375 = cljs.core.count(c__4550__auto__);
var G__28376 = (0);
seq__27794 = G__28373;
chunk__27795 = G__28374;
count__27796 = G__28375;
i__27797 = G__28376;
continue;
} else {
var n = cljs.core.first(seq__27794__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__28377 = cljs.core.next(seq__27794__$1);
var G__28378 = null;
var G__28379 = (0);
var G__28380 = (0);
seq__27794 = G__28377;
chunk__27795 = G__28378;
count__27796 = G__28379;
i__27797 = G__28380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__27801 = shadow.dom.dom_node(new$);
var G__27802 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__27801,G__27802);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__27804 = arguments.length;
switch (G__27804) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__27806 = arguments.length;
switch (G__27806) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__27809 = arguments.length;
switch (G__27809) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28391 = arguments.length;
var i__4731__auto___28392 = (0);
while(true){
if((i__4731__auto___28392 < len__4730__auto___28391)){
args__4736__auto__.push((arguments[i__4731__auto___28392]));

var G__28393 = (i__4731__auto___28392 + (1));
i__4731__auto___28392 = G__28393;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__27827_28394 = cljs.core.seq(nodes);
var chunk__27828_28395 = null;
var count__27829_28396 = (0);
var i__27830_28397 = (0);
while(true){
if((i__27830_28397 < count__27829_28396)){
var node_28398 = chunk__27828_28395.cljs$core$IIndexed$_nth$arity$2(null,i__27830_28397);
fragment.appendChild(shadow.dom._to_dom(node_28398));


var G__28399 = seq__27827_28394;
var G__28400 = chunk__27828_28395;
var G__28401 = count__27829_28396;
var G__28402 = (i__27830_28397 + (1));
seq__27827_28394 = G__28399;
chunk__27828_28395 = G__28400;
count__27829_28396 = G__28401;
i__27830_28397 = G__28402;
continue;
} else {
var temp__5720__auto___28403 = cljs.core.seq(seq__27827_28394);
if(temp__5720__auto___28403){
var seq__27827_28404__$1 = temp__5720__auto___28403;
if(cljs.core.chunked_seq_QMARK_(seq__27827_28404__$1)){
var c__4550__auto___28405 = cljs.core.chunk_first(seq__27827_28404__$1);
var G__28406 = cljs.core.chunk_rest(seq__27827_28404__$1);
var G__28407 = c__4550__auto___28405;
var G__28408 = cljs.core.count(c__4550__auto___28405);
var G__28409 = (0);
seq__27827_28394 = G__28406;
chunk__27828_28395 = G__28407;
count__27829_28396 = G__28408;
i__27830_28397 = G__28409;
continue;
} else {
var node_28410 = cljs.core.first(seq__27827_28404__$1);
fragment.appendChild(shadow.dom._to_dom(node_28410));


var G__28411 = cljs.core.next(seq__27827_28404__$1);
var G__28412 = null;
var G__28413 = (0);
var G__28414 = (0);
seq__27827_28394 = G__28411;
chunk__27828_28395 = G__28412;
count__27829_28396 = G__28413;
i__27830_28397 = G__28414;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq27824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27824));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27843_28415 = cljs.core.seq(scripts);
var chunk__27844_28416 = null;
var count__27845_28417 = (0);
var i__27846_28418 = (0);
while(true){
if((i__27846_28418 < count__27845_28417)){
var vec__27859_28419 = chunk__27844_28416.cljs$core$IIndexed$_nth$arity$2(null,i__27846_28418);
var script_tag_28420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859_28419,(0),null);
var script_body_28421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859_28419,(1),null);
eval(script_body_28421);


var G__28422 = seq__27843_28415;
var G__28423 = chunk__27844_28416;
var G__28424 = count__27845_28417;
var G__28425 = (i__27846_28418 + (1));
seq__27843_28415 = G__28422;
chunk__27844_28416 = G__28423;
count__27845_28417 = G__28424;
i__27846_28418 = G__28425;
continue;
} else {
var temp__5720__auto___28426 = cljs.core.seq(seq__27843_28415);
if(temp__5720__auto___28426){
var seq__27843_28427__$1 = temp__5720__auto___28426;
if(cljs.core.chunked_seq_QMARK_(seq__27843_28427__$1)){
var c__4550__auto___28428 = cljs.core.chunk_first(seq__27843_28427__$1);
var G__28429 = cljs.core.chunk_rest(seq__27843_28427__$1);
var G__28430 = c__4550__auto___28428;
var G__28431 = cljs.core.count(c__4550__auto___28428);
var G__28432 = (0);
seq__27843_28415 = G__28429;
chunk__27844_28416 = G__28430;
count__27845_28417 = G__28431;
i__27846_28418 = G__28432;
continue;
} else {
var vec__27867_28437 = cljs.core.first(seq__27843_28427__$1);
var script_tag_28438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27867_28437,(0),null);
var script_body_28439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27867_28437,(1),null);
eval(script_body_28439);


var G__28440 = cljs.core.next(seq__27843_28427__$1);
var G__28441 = null;
var G__28442 = (0);
var G__28443 = (0);
seq__27843_28415 = G__28440;
chunk__27844_28416 = G__28441;
count__27845_28417 = G__28442;
i__27846_28418 = G__28443;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__27872){
var vec__27873 = p__27872;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__27878 = shadow.dom.dom_node(el);
var G__27879 = cls;
return goog.dom.getAncestorByClass(G__27878,G__27879);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__27884 = arguments.length;
switch (G__27884) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__27887 = shadow.dom.dom_node(el);
var G__27888 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__27887,G__27888);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__27889 = shadow.dom.dom_node(el);
var G__27890 = cljs.core.name(tag);
var G__27891 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__27889,G__27890,G__27891);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__27892 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__27892);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__27893 = shadow.dom.dom_node(dom);
var G__27894 = value;
return goog.dom.forms.setValue(G__27893,G__27894);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__27896 = cljs.core.seq(style_keys);
var chunk__27897 = null;
var count__27898 = (0);
var i__27899 = (0);
while(true){
if((i__27899 < count__27898)){
var it = chunk__27897.cljs$core$IIndexed$_nth$arity$2(null,i__27899);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28448 = seq__27896;
var G__28449 = chunk__27897;
var G__28450 = count__27898;
var G__28451 = (i__27899 + (1));
seq__27896 = G__28448;
chunk__27897 = G__28449;
count__27898 = G__28450;
i__27899 = G__28451;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27896);
if(temp__5720__auto__){
var seq__27896__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27896__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27896__$1);
var G__28452 = cljs.core.chunk_rest(seq__27896__$1);
var G__28453 = c__4550__auto__;
var G__28454 = cljs.core.count(c__4550__auto__);
var G__28455 = (0);
seq__27896 = G__28452;
chunk__27897 = G__28453;
count__27898 = G__28454;
i__27899 = G__28455;
continue;
} else {
var it = cljs.core.first(seq__27896__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__28456 = cljs.core.next(seq__27896__$1);
var G__28457 = null;
var G__28458 = (0);
var G__28459 = (0);
seq__27896 = G__28456;
chunk__27897 = G__28457;
count__27898 = G__28458;
i__27899 = G__28459;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27902,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27906 = k27902;
var G__27906__$1 = (((G__27906 instanceof cljs.core.Keyword))?G__27906.fqn:null);
switch (G__27906__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27902,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27908){
var vec__27910 = p__27908;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27901){
var self__ = this;
var G__27901__$1 = this;
return (new cljs.core.RecordIter((0),G__27901__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27924 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27924(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27903,other27904){
var self__ = this;
var this27903__$1 = this;
return (((!((other27904 == null)))) && ((this27903__$1.constructor === other27904.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.x,other27904.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.y,other27904.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27903__$1.__extmap,other27904.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27901){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27931 = cljs.core.keyword_identical_QMARK_;
var expr__27932 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27934 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__27935 = expr__27932;
return (pred__27931.cljs$core$IFn$_invoke$arity$2 ? pred__27931.cljs$core$IFn$_invoke$arity$2(G__27934,G__27935) : pred__27931.call(null,G__27934,G__27935));
})())){
return (new shadow.dom.Coordinate(G__27901,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27936 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__27937 = expr__27932;
return (pred__27931.cljs$core$IFn$_invoke$arity$2 ? pred__27931.cljs$core$IFn$_invoke$arity$2(G__27936,G__27937) : pred__27931.call(null,G__27936,G__27937));
})())){
return (new shadow.dom.Coordinate(self__.x,G__27901,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27901),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27901){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27901,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27905){
var extmap__4424__auto__ = (function (){var G__27946 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27905,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27905)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27946);
} else {
return G__27946;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27905),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27905),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__27949 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__27949);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__27952 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__27952);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__27954 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__27954);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k27956,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__27962 = k27956;
var G__27962__$1 = (((G__27962 instanceof cljs.core.Keyword))?G__27962.fqn:null);
switch (G__27962__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27956,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__27964){
var vec__27966 = p__27964;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27966,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27966,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27955){
var self__ = this;
var G__27955__$1 = this;
return (new cljs.core.RecordIter((0),G__27955__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__27979 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__27979(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27957,other27958){
var self__ = this;
var this27957__$1 = this;
return (((!((other27958 == null)))) && ((this27957__$1.constructor === other27958.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27957__$1.w,other27958.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27957__$1.h,other27958.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27957__$1.__extmap,other27958.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__27955){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__27984 = cljs.core.keyword_identical_QMARK_;
var expr__27985 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__27987 = new cljs.core.Keyword(null,"w","w",354169001);
var G__27988 = expr__27985;
return (pred__27984.cljs$core$IFn$_invoke$arity$2 ? pred__27984.cljs$core$IFn$_invoke$arity$2(G__27987,G__27988) : pred__27984.call(null,G__27987,G__27988));
})())){
return (new shadow.dom.Size(G__27955,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27990 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__27991 = expr__27985;
return (pred__27984.cljs$core$IFn$_invoke$arity$2 ? pred__27984.cljs$core$IFn$_invoke$arity$2(G__27990,G__27991) : pred__27984.call(null,G__27990,G__27991));
})())){
return (new shadow.dom.Size(self__.w,G__27955,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__27955),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__27955){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27955,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27959){
var extmap__4424__auto__ = (function (){var G__27999 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27959,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27959)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27999);
} else {
return G__27999;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27959),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27959),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__28005 = shadow.dom.dom_node(el);
return goog.style.getSize(G__28005);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__28488 = (i + (1));
var G__28489 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__28488;
ret = G__28489;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28019){
var vec__28020 = p__28019;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28020,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28028 = arguments.length;
switch (G__28028) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__28033_28491 = new_node;
var G__28034_28492 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__28033_28491,G__28034_28492);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__28035_28494 = new_node;
var G__28036_28495 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__28035_28494,G__28036_28495);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__28499 = ps;
var G__28500 = (i + (1));
el__$1 = G__28499;
i = G__28500;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__28037 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__28037);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__28038 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__28038);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__28039 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__28039);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28040 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28040,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28043_28501 = cljs.core.seq(props);
var chunk__28044_28502 = null;
var count__28045_28503 = (0);
var i__28046_28504 = (0);
while(true){
if((i__28046_28504 < count__28045_28503)){
var vec__28058_28505 = chunk__28044_28502.cljs$core$IIndexed$_nth$arity$2(null,i__28046_28504);
var k_28506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28058_28505,(0),null);
var v_28507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28058_28505,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_28506);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28506),v_28507);


var G__28508 = seq__28043_28501;
var G__28509 = chunk__28044_28502;
var G__28510 = count__28045_28503;
var G__28511 = (i__28046_28504 + (1));
seq__28043_28501 = G__28508;
chunk__28044_28502 = G__28509;
count__28045_28503 = G__28510;
i__28046_28504 = G__28511;
continue;
} else {
var temp__5720__auto___28512 = cljs.core.seq(seq__28043_28501);
if(temp__5720__auto___28512){
var seq__28043_28513__$1 = temp__5720__auto___28512;
if(cljs.core.chunked_seq_QMARK_(seq__28043_28513__$1)){
var c__4550__auto___28516 = cljs.core.chunk_first(seq__28043_28513__$1);
var G__28517 = cljs.core.chunk_rest(seq__28043_28513__$1);
var G__28518 = c__4550__auto___28516;
var G__28519 = cljs.core.count(c__4550__auto___28516);
var G__28520 = (0);
seq__28043_28501 = G__28517;
chunk__28044_28502 = G__28518;
count__28045_28503 = G__28519;
i__28046_28504 = G__28520;
continue;
} else {
var vec__28065_28521 = cljs.core.first(seq__28043_28513__$1);
var k_28522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28521,(0),null);
var v_28523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28521,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_28522);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_28522),v_28523);


var G__28524 = cljs.core.next(seq__28043_28513__$1);
var G__28525 = null;
var G__28526 = (0);
var G__28527 = (0);
seq__28043_28501 = G__28524;
chunk__28044_28502 = G__28525;
count__28045_28503 = G__28526;
i__28046_28504 = G__28527;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__28075 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28075,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28075,(1),null);
var seq__28078_28528 = cljs.core.seq(node_children);
var chunk__28080_28529 = null;
var count__28081_28530 = (0);
var i__28082_28531 = (0);
while(true){
if((i__28082_28531 < count__28081_28530)){
var child_struct_28532 = chunk__28080_28529.cljs$core$IIndexed$_nth$arity$2(null,i__28082_28531);
if((!((child_struct_28532 == null)))){
if(typeof child_struct_28532 === 'string'){
var text_28533 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_28533),child_struct_28532].join(''));
} else {
var children_28534 = shadow.dom.svg_node(child_struct_28532);
if(cljs.core.seq_QMARK_(children_28534)){
var seq__28118_28536 = cljs.core.seq(children_28534);
var chunk__28120_28537 = null;
var count__28121_28538 = (0);
var i__28122_28539 = (0);
while(true){
if((i__28122_28539 < count__28121_28538)){
var child_28540 = chunk__28120_28537.cljs$core$IIndexed$_nth$arity$2(null,i__28122_28539);
if(cljs.core.truth_(child_28540)){
node.appendChild(child_28540);


var G__28541 = seq__28118_28536;
var G__28542 = chunk__28120_28537;
var G__28543 = count__28121_28538;
var G__28544 = (i__28122_28539 + (1));
seq__28118_28536 = G__28541;
chunk__28120_28537 = G__28542;
count__28121_28538 = G__28543;
i__28122_28539 = G__28544;
continue;
} else {
var G__28545 = seq__28118_28536;
var G__28546 = chunk__28120_28537;
var G__28547 = count__28121_28538;
var G__28548 = (i__28122_28539 + (1));
seq__28118_28536 = G__28545;
chunk__28120_28537 = G__28546;
count__28121_28538 = G__28547;
i__28122_28539 = G__28548;
continue;
}
} else {
var temp__5720__auto___28549 = cljs.core.seq(seq__28118_28536);
if(temp__5720__auto___28549){
var seq__28118_28550__$1 = temp__5720__auto___28549;
if(cljs.core.chunked_seq_QMARK_(seq__28118_28550__$1)){
var c__4550__auto___28551 = cljs.core.chunk_first(seq__28118_28550__$1);
var G__28552 = cljs.core.chunk_rest(seq__28118_28550__$1);
var G__28553 = c__4550__auto___28551;
var G__28554 = cljs.core.count(c__4550__auto___28551);
var G__28555 = (0);
seq__28118_28536 = G__28552;
chunk__28120_28537 = G__28553;
count__28121_28538 = G__28554;
i__28122_28539 = G__28555;
continue;
} else {
var child_28556 = cljs.core.first(seq__28118_28550__$1);
if(cljs.core.truth_(child_28556)){
node.appendChild(child_28556);


var G__28557 = cljs.core.next(seq__28118_28550__$1);
var G__28558 = null;
var G__28559 = (0);
var G__28560 = (0);
seq__28118_28536 = G__28557;
chunk__28120_28537 = G__28558;
count__28121_28538 = G__28559;
i__28122_28539 = G__28560;
continue;
} else {
var G__28561 = cljs.core.next(seq__28118_28550__$1);
var G__28562 = null;
var G__28563 = (0);
var G__28564 = (0);
seq__28118_28536 = G__28561;
chunk__28120_28537 = G__28562;
count__28121_28538 = G__28563;
i__28122_28539 = G__28564;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_28534);
}
}


var G__28565 = seq__28078_28528;
var G__28566 = chunk__28080_28529;
var G__28567 = count__28081_28530;
var G__28568 = (i__28082_28531 + (1));
seq__28078_28528 = G__28565;
chunk__28080_28529 = G__28566;
count__28081_28530 = G__28567;
i__28082_28531 = G__28568;
continue;
} else {
var G__28569 = seq__28078_28528;
var G__28570 = chunk__28080_28529;
var G__28571 = count__28081_28530;
var G__28572 = (i__28082_28531 + (1));
seq__28078_28528 = G__28569;
chunk__28080_28529 = G__28570;
count__28081_28530 = G__28571;
i__28082_28531 = G__28572;
continue;
}
} else {
var temp__5720__auto___28573 = cljs.core.seq(seq__28078_28528);
if(temp__5720__auto___28573){
var seq__28078_28574__$1 = temp__5720__auto___28573;
if(cljs.core.chunked_seq_QMARK_(seq__28078_28574__$1)){
var c__4550__auto___28575 = cljs.core.chunk_first(seq__28078_28574__$1);
var G__28576 = cljs.core.chunk_rest(seq__28078_28574__$1);
var G__28577 = c__4550__auto___28575;
var G__28578 = cljs.core.count(c__4550__auto___28575);
var G__28579 = (0);
seq__28078_28528 = G__28576;
chunk__28080_28529 = G__28577;
count__28081_28530 = G__28578;
i__28082_28531 = G__28579;
continue;
} else {
var child_struct_28580 = cljs.core.first(seq__28078_28574__$1);
if((!((child_struct_28580 == null)))){
if(typeof child_struct_28580 === 'string'){
var text_28581 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_28581),child_struct_28580].join(''));
} else {
var children_28582 = shadow.dom.svg_node(child_struct_28580);
if(cljs.core.seq_QMARK_(children_28582)){
var seq__28129_28583 = cljs.core.seq(children_28582);
var chunk__28131_28584 = null;
var count__28132_28585 = (0);
var i__28133_28586 = (0);
while(true){
if((i__28133_28586 < count__28132_28585)){
var child_28587 = chunk__28131_28584.cljs$core$IIndexed$_nth$arity$2(null,i__28133_28586);
if(cljs.core.truth_(child_28587)){
node.appendChild(child_28587);


var G__28589 = seq__28129_28583;
var G__28590 = chunk__28131_28584;
var G__28591 = count__28132_28585;
var G__28592 = (i__28133_28586 + (1));
seq__28129_28583 = G__28589;
chunk__28131_28584 = G__28590;
count__28132_28585 = G__28591;
i__28133_28586 = G__28592;
continue;
} else {
var G__28593 = seq__28129_28583;
var G__28594 = chunk__28131_28584;
var G__28595 = count__28132_28585;
var G__28596 = (i__28133_28586 + (1));
seq__28129_28583 = G__28593;
chunk__28131_28584 = G__28594;
count__28132_28585 = G__28595;
i__28133_28586 = G__28596;
continue;
}
} else {
var temp__5720__auto___28597__$1 = cljs.core.seq(seq__28129_28583);
if(temp__5720__auto___28597__$1){
var seq__28129_28598__$1 = temp__5720__auto___28597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28129_28598__$1)){
var c__4550__auto___28599 = cljs.core.chunk_first(seq__28129_28598__$1);
var G__28600 = cljs.core.chunk_rest(seq__28129_28598__$1);
var G__28601 = c__4550__auto___28599;
var G__28602 = cljs.core.count(c__4550__auto___28599);
var G__28603 = (0);
seq__28129_28583 = G__28600;
chunk__28131_28584 = G__28601;
count__28132_28585 = G__28602;
i__28133_28586 = G__28603;
continue;
} else {
var child_28604 = cljs.core.first(seq__28129_28598__$1);
if(cljs.core.truth_(child_28604)){
node.appendChild(child_28604);


var G__28606 = cljs.core.next(seq__28129_28598__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__28129_28583 = G__28606;
chunk__28131_28584 = G__28607;
count__28132_28585 = G__28608;
i__28133_28586 = G__28609;
continue;
} else {
var G__28610 = cljs.core.next(seq__28129_28598__$1);
var G__28611 = null;
var G__28612 = (0);
var G__28613 = (0);
seq__28129_28583 = G__28610;
chunk__28131_28584 = G__28611;
count__28132_28585 = G__28612;
i__28133_28586 = G__28613;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_28582);
}
}


var G__28615 = cljs.core.next(seq__28078_28574__$1);
var G__28616 = null;
var G__28617 = (0);
var G__28618 = (0);
seq__28078_28528 = G__28615;
chunk__28080_28529 = G__28616;
count__28081_28530 = G__28617;
i__28082_28531 = G__28618;
continue;
} else {
var G__28619 = cljs.core.next(seq__28078_28574__$1);
var G__28620 = null;
var G__28621 = (0);
var G__28622 = (0);
seq__28078_28528 = G__28619;
chunk__28080_28529 = G__28620;
count__28081_28530 = G__28621;
i__28082_28531 = G__28622;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__28138_28623 = shadow.dom._to_svg;
var G__28139_28624 = "string";
var G__28140_28625 = ((function (G__28138_28623,G__28139_28624){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__28138_28623,G__28139_28624))
;
goog.object.set(G__28138_28623,G__28139_28624,G__28140_28625);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__28145_28630 = shadow.dom._to_svg;
var G__28146_28631 = "null";
var G__28147_28632 = ((function (G__28145_28630,G__28146_28631){
return (function (_){
return null;
});})(G__28145_28630,G__28146_28631))
;
goog.object.set(G__28145_28630,G__28146_28631,G__28147_28632);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28633 = arguments.length;
var i__4731__auto___28635 = (0);
while(true){
if((i__4731__auto___28635 < len__4730__auto___28633)){
args__4736__auto__.push((arguments[i__4731__auto___28635]));

var G__28636 = (i__4731__auto___28635 + (1));
i__4731__auto___28635 = G__28636;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq28149){
var G__28150 = cljs.core.first(seq28149);
var seq28149__$1 = cljs.core.next(seq28149);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28150,seq28149__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__28157 = arguments.length;
switch (G__28157) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__28163_28643 = shadow.dom.dom_node(el);
var G__28164_28644 = cljs.core.name(event);
var G__28165_28645 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28163_28643,G__28164_28644,G__28165_28645) : shadow.dom.dom_listen.call(null,G__28163_28643,G__28164_28644,G__28165_28645));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__24903__auto___28646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto___28646,buf,chan,event_fn){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto___28646,buf,chan,event_fn){
return (function (state_28171){
var state_val_28172 = (state_28171[(1)]);
if((state_val_28172 === (1))){
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28171__$1,(2),once_or_cleanup);
} else {
if((state_val_28172 === (2))){
var inst_28168 = (state_28171[(2)]);
var inst_28169 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_28171__$1 = (function (){var statearr_28178 = state_28171;
(statearr_28178[(7)] = inst_28168);

return statearr_28178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28171__$1,inst_28169);
} else {
return null;
}
}
});})(c__24903__auto___28646,buf,chan,event_fn))
;
return ((function (switch__24631__auto__,c__24903__auto___28646,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__24632__auto__ = null;
var shadow$dom$state_machine__24632__auto____0 = (function (){
var statearr_28180 = [null,null,null,null,null,null,null,null];
(statearr_28180[(0)] = shadow$dom$state_machine__24632__auto__);

(statearr_28180[(1)] = (1));

return statearr_28180;
});
var shadow$dom$state_machine__24632__auto____1 = (function (state_28171){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_28171);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e28181){if((e28181 instanceof Object)){
var ex__24635__auto__ = e28181;
var statearr_28182_28647 = state_28171;
(statearr_28182_28647[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28648 = state_28171;
state_28171 = G__28648;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
shadow$dom$state_machine__24632__auto__ = function(state_28171){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__24632__auto____0.call(this);
case 1:
return shadow$dom$state_machine__24632__auto____1.call(this,state_28171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__24632__auto____0;
shadow$dom$state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__24632__auto____1;
return shadow$dom$state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto___28646,buf,chan,event_fn))
})();
var state__24905__auto__ = (function (){var statearr_28184 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_28184[(6)] = c__24903__auto___28646);

return statearr_28184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto___28646,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
