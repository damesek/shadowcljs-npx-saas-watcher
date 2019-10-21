goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._id[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._id["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._type[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._type["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._update[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4434__auto__.call(null,this$,update_fn));
} else {
var m__4431__auto__ = (shadow.object._update["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4431__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4434__auto__.call(null,this$,cause));
} else {
var m__4431__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4431__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__28257 = arguments.length;
switch (G__28257) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4131__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5720__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5720__auto__)){
var oid = temp__5720__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5720__auto__)){
var parent_id = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__28790 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__28790;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__28293_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__28293_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__28321 = arguments.length;
switch (G__28321) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__28349_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__28349_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__28363){
var map__28364 = p__28363;
var map__28364__$1 = (((((!((map__28364 == null))))?(((((map__28364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28364):map__28364);
var oref = map__28364__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28364__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__28368 = arguments.length;
switch (G__28368) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__28366_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__28366_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5718__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5718__auto__)){
var obj = temp__5718__auto__;
return obj;
} else {
var temp__5720__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__28797 = parent;
dom = G__28797;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28798 = arguments.length;
var i__4731__auto___28799 = (0);
while(true){
if((i__4731__auto___28799 < len__4730__auto___28798)){
args__4736__auto__.push((arguments[i__4731__auto___28799]));

var G__28800 = (i__4731__auto___28799 + (1));
i__4731__auto___28799 = G__28800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5720__auto__)){
var reactions_to_trigger = temp__5720__auto__;
var seq__28387 = cljs.core.seq(reactions_to_trigger);
var chunk__28388 = null;
var count__28389 = (0);
var i__28390 = (0);
while(true){
if((i__28390 < count__28389)){
var rfn = chunk__28388.cljs$core$IIndexed$_nth$arity$2(null,i__28390);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__28804 = seq__28387;
var G__28805 = chunk__28388;
var G__28806 = count__28389;
var G__28807 = (i__28390 + (1));
seq__28387 = G__28804;
chunk__28388 = G__28805;
count__28389 = G__28806;
i__28390 = G__28807;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__28387);
if(temp__5720__auto____$1){
var seq__28387__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28387__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28387__$1);
var G__28808 = cljs.core.chunk_rest(seq__28387__$1);
var G__28809 = c__4550__auto__;
var G__28810 = cljs.core.count(c__4550__auto__);
var G__28811 = (0);
seq__28387 = G__28808;
chunk__28388 = G__28809;
count__28389 = G__28810;
i__28390 = G__28811;
continue;
} else {
var rfn = cljs.core.first(seq__28387__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__28812 = cljs.core.next(seq__28387__$1);
var G__28813 = null;
var G__28814 = (0);
var G__28815 = (0);
seq__28387 = G__28812;
chunk__28388 = G__28813;
count__28389 = G__28814;
i__28390 = G__28815;
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
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq28383){
var G__28384 = cljs.core.first(seq28383);
var seq28383__$1 = cljs.core.next(seq28383);
var G__28385 = cljs.core.first(seq28383__$1);
var seq28383__$2 = cljs.core.next(seq28383__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28384,G__28385,seq28383__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__28433_28818 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__28434_28819 = null;
var count__28435_28820 = (0);
var i__28436_28821 = (0);
while(true){
if((i__28436_28821 < count__28435_28820)){
var child_28822 = chunk__28434_28819.cljs$core$IIndexed$_nth$arity$2(null,i__28436_28821);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_28822,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_28822,ev,notify_fn));


var G__28823 = seq__28433_28818;
var G__28824 = chunk__28434_28819;
var G__28825 = count__28435_28820;
var G__28826 = (i__28436_28821 + (1));
seq__28433_28818 = G__28823;
chunk__28434_28819 = G__28824;
count__28435_28820 = G__28825;
i__28436_28821 = G__28826;
continue;
} else {
var temp__5720__auto___28827 = cljs.core.seq(seq__28433_28818);
if(temp__5720__auto___28827){
var seq__28433_28828__$1 = temp__5720__auto___28827;
if(cljs.core.chunked_seq_QMARK_(seq__28433_28828__$1)){
var c__4550__auto___28829 = cljs.core.chunk_first(seq__28433_28828__$1);
var G__28830 = cljs.core.chunk_rest(seq__28433_28828__$1);
var G__28831 = c__4550__auto___28829;
var G__28832 = cljs.core.count(c__4550__auto___28829);
var G__28833 = (0);
seq__28433_28818 = G__28830;
chunk__28434_28819 = G__28831;
count__28435_28820 = G__28832;
i__28436_28821 = G__28833;
continue;
} else {
var child_28834 = cljs.core.first(seq__28433_28828__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_28834,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_28834,ev,notify_fn));


var G__28836 = cljs.core.next(seq__28433_28828__$1);
var G__28837 = null;
var G__28838 = (0);
var G__28839 = (0);
seq__28433_28818 = G__28836;
chunk__28434_28819 = G__28837;
count__28435_28820 = G__28838;
i__28436_28821 = G__28839;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28841 = arguments.length;
var i__4731__auto___28846 = (0);
while(true){
if((i__4731__auto___28846 < len__4730__auto___28841)){
args__4736__auto__.push((arguments[i__4731__auto___28846]));

var G__28847 = (i__4731__auto___28846 + (1));
i__4731__auto___28846 = G__28847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq28445){
var G__28446 = cljs.core.first(seq28445);
var seq28445__$1 = cljs.core.next(seq28445);
var G__28447 = cljs.core.first(seq28445__$1);
var seq28445__$2 = cljs.core.next(seq28445__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28446,G__28447,seq28445__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28854 = arguments.length;
var i__4731__auto___28855 = (0);
while(true){
if((i__4731__auto___28855 < len__4730__auto___28854)){
args__4736__auto__.push((arguments[i__4731__auto___28855]));

var G__28856 = (i__4731__auto___28855 + (1));
i__4731__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__28857 = shadow.object.get_parent(current);
current = G__28857;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq28461){
var G__28462 = cljs.core.first(seq28461);
var seq28461__$1 = cljs.core.next(seq28461);
var G__28463 = cljs.core.first(seq28461__$1);
var seq28461__$2 = cljs.core.next(seq28461__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28462,G__28463,seq28461__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28863 = arguments.length;
var i__4731__auto___28864 = (0);
while(true){
if((i__4731__auto___28864 < len__4730__auto___28863)){
args__4736__auto__.push((arguments[i__4731__auto___28864]));

var G__28865 = (i__4731__auto___28864 + (1));
i__4731__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq28464){
var G__28465 = cljs.core.first(seq28464);
var seq28464__$1 = cljs.core.next(seq28464);
var G__28466 = cljs.core.first(seq28464__$1);
var seq28464__$2 = cljs.core.next(seq28464__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28465,G__28466,seq28464__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5718__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5718__auto__)){
var custom_remove = temp__5718__auto__;
var G__28468 = this$;
var G__28469 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__28468,G__28469) : custom_remove.call(null,G__28468,G__28469));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__28471 = arguments.length;
switch (G__28471) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__28472 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__28473 = null;
var count__28474 = (0);
var i__28475 = (0);
while(true){
if((i__28475 < count__28474)){
var vec__28482 = chunk__28473.cljs$core$IIndexed$_nth$arity$2(null,i__28475);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28482,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28482,(1),null);
var ev_def = vec__28482;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_28905__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__28472,chunk__28473,count__28474,i__28475,vec__28482,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__28472,chunk__28473,count__28474,i__28475,vec__28482,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__28472,chunk__28473,count__28474,i__28475,handler_28905__$1,vec__28482,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_28905__$1.cljs$core$IFn$_invoke$arity$3 ? handler_28905__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_28905__$1.call(null,oref,e,el));
});})(seq__28472,chunk__28473,count__28474,i__28475,handler_28905__$1,vec__28482,ev,handler,ev_def))
);


var G__28910 = seq__28472;
var G__28911 = chunk__28473;
var G__28912 = count__28474;
var G__28913 = (i__28475 + (1));
seq__28472 = G__28910;
chunk__28473 = G__28911;
count__28474 = G__28912;
i__28475 = G__28913;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__28472);
if(temp__5720__auto__){
var seq__28472__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28472__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28472__$1);
var G__28917 = cljs.core.chunk_rest(seq__28472__$1);
var G__28918 = c__4550__auto__;
var G__28919 = cljs.core.count(c__4550__auto__);
var G__28920 = (0);
seq__28472 = G__28917;
chunk__28473 = G__28918;
count__28474 = G__28919;
i__28475 = G__28920;
continue;
} else {
var vec__28485 = cljs.core.first(seq__28472__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28485,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28485,(1),null);
var ev_def = vec__28485;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_28924__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__28472,chunk__28473,count__28474,i__28475,vec__28485,ev,handler,ev_def,seq__28472__$1,temp__5720__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__28472,chunk__28473,count__28474,i__28475,vec__28485,ev,handler,ev_def,seq__28472__$1,temp__5720__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__28472,chunk__28473,count__28474,i__28475,handler_28924__$1,vec__28485,ev,handler,ev_def,seq__28472__$1,temp__5720__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_28924__$1.cljs$core$IFn$_invoke$arity$3 ? handler_28924__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_28924__$1.call(null,oref,e,el));
});})(seq__28472,chunk__28473,count__28474,i__28475,handler_28924__$1,vec__28485,ev,handler,ev_def,seq__28472__$1,temp__5720__auto__))
);


var G__28925 = cljs.core.next(seq__28472__$1);
var G__28926 = null;
var G__28927 = (0);
var G__28928 = (0);
seq__28472 = G__28925;
chunk__28473 = G__28926;
count__28474 = G__28927;
i__28475 = G__28928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__28493){
var vec__28496 = p__28493;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28496,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28496,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = event;
if(cljs.core.truth_(and__4120__auto__)){
return handler;
} else {
return and__4120__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28941 = arguments.length;
var i__4731__auto___28942 = (0);
while(true){
if((i__4731__auto___28942 < len__4730__auto___28941)){
args__4736__auto__.push((arguments[i__4731__auto___28942]));

var G__28943 = (i__4731__auto___28942 + (1));
i__4731__auto___28942 = G__28943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e28535){if((e28535 instanceof Object)){
var e = e28535;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e28535;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq28514){
var G__28515 = cljs.core.first(seq28514);
var seq28514__$1 = cljs.core.next(seq28514);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28515,seq28514__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__28605 = arguments.length;
switch (G__28605) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__28614 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__28614) : shadow.dom.build.call(null,G__28614));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28627,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28638 = k28627;
var G__28638__$1 = (((G__28638 instanceof cljs.core.Keyword))?G__28638.fqn:null);
switch (G__28638__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28627,else__4388__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28639){
var vec__28640 = p__28639;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28640,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28640,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.object.Watch{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28626){
var self__ = this;
var G__28626__$1 = this;
return (new cljs.core.RecordIter((0),G__28626__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__28649 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__28649(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28628,other28629){
var self__ = this;
var this28628__$1 = this;
return (((!((other28629 == null)))) && ((this28628__$1.constructor === other28629.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28628__$1.key,other28629.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28628__$1.handler,other28629.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28628__$1.__extmap,other28629.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28626){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28650 = cljs.core.keyword_identical_QMARK_;
var expr__28651 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__28653 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__28654 = expr__28651;
return (pred__28650.cljs$core$IFn$_invoke$arity$2 ? pred__28650.cljs$core$IFn$_invoke$arity$2(G__28653,G__28654) : pred__28650.call(null,G__28653,G__28654));
})())){
return (new shadow.object.Watch(G__28626,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28655 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__28656 = expr__28651;
return (pred__28650.cljs$core$IFn$_invoke$arity$2 ? pred__28650.cljs$core$IFn$_invoke$arity$2(G__28655,G__28656) : pred__28650.call(null,G__28655,G__28656));
})())){
return (new shadow.object.Watch(self__.key,G__28626,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__28626),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28626){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__28626,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.object/Watch");
});

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__28634){
var extmap__4424__auto__ = (function (){var G__28657 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28634,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__28634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28657);
} else {
return G__28657;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__28634),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__28634),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__28658_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__28658_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__28659 = cljs.core.seq(self__.watches);
var chunk__28660 = null;
var count__28661 = (0);
var i__28662 = (0);
while(true){
if((i__28662 < count__28661)){
var map__28667 = chunk__28660.cljs$core$IIndexed$_nth$arity$2(null,i__28662);
var map__28667__$1 = (((((!((map__28667 == null))))?(((((map__28667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28667):map__28667);
var watch = map__28667__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28667__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28667__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__29033 = seq__28659;
var G__29034 = chunk__28660;
var G__29035 = count__28661;
var G__29036 = (i__28662 + (1));
seq__28659 = G__29033;
chunk__28660 = G__29034;
count__28661 = G__29035;
i__28662 = G__29036;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__28659);
if(temp__5720__auto__){
var seq__28659__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28659__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28659__$1);
var G__29037 = cljs.core.chunk_rest(seq__28659__$1);
var G__29038 = c__4550__auto__;
var G__29039 = cljs.core.count(c__4550__auto__);
var G__29040 = (0);
seq__28659 = G__29037;
chunk__28660 = G__29038;
count__28661 = G__29039;
i__28662 = G__29040;
continue;
} else {
var map__28669 = cljs.core.first(seq__28659__$1);
var map__28669__$1 = (((((!((map__28669 == null))))?(((((map__28669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28669):map__28669);
var watch = map__28669__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28669__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28669__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__29041 = cljs.core.next(seq__28659__$1);
var G__29042 = null;
var G__29043 = (0);
var G__29044 = (0);
seq__28659 = G__29041;
chunk__28660 = G__29042;
count__28661 = G__29043;
i__28662 = G__29044;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__28671_29045 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__28672_29046 = null;
var count__28673_29047 = (0);
var i__28674_29048 = (0);
while(true){
if((i__28674_29048 < count__28673_29047)){
var child_29049 = chunk__28672_29046.cljs$core$IIndexed$_nth$arity$2(null,i__28674_29048);
shadow.object._destroy_BANG_(child_29049,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__29050 = seq__28671_29045;
var G__29051 = chunk__28672_29046;
var G__29052 = count__28673_29047;
var G__29053 = (i__28674_29048 + (1));
seq__28671_29045 = G__29050;
chunk__28672_29046 = G__29051;
count__28673_29047 = G__29052;
i__28674_29048 = G__29053;
continue;
} else {
var temp__5720__auto___29054 = cljs.core.seq(seq__28671_29045);
if(temp__5720__auto___29054){
var seq__28671_29055__$1 = temp__5720__auto___29054;
if(cljs.core.chunked_seq_QMARK_(seq__28671_29055__$1)){
var c__4550__auto___29056 = cljs.core.chunk_first(seq__28671_29055__$1);
var G__29057 = cljs.core.chunk_rest(seq__28671_29055__$1);
var G__29058 = c__4550__auto___29056;
var G__29059 = cljs.core.count(c__4550__auto___29056);
var G__29060 = (0);
seq__28671_29045 = G__29057;
chunk__28672_29046 = G__29058;
count__28673_29047 = G__29059;
i__28674_29048 = G__29060;
continue;
} else {
var child_29061 = cljs.core.first(seq__28671_29055__$1);
shadow.object._destroy_BANG_(child_29061,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__29062 = cljs.core.next(seq__28671_29055__$1);
var G__29063 = null;
var G__29064 = (0);
var G__29065 = (0);
seq__28671_29045 = G__29062;
chunk__28672_29046 = G__29063;
count__28673_29047 = G__29064;
i__28674_29048 = G__29065;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_29066 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_29066 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_29066);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__28676 = arguments.length;
switch (G__28676) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__28678 = arguments.length;
switch (G__28678) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29074 = arguments.length;
var i__4731__auto___29075 = (0);
while(true){
if((i__4731__auto___29075 < len__4730__auto___29074)){
args__4736__auto__.push((arguments[i__4731__auto___29075]));

var G__29076 = (i__4731__auto___29075 + (1));
i__4731__auto___29075 = G__29076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_29080 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5718__auto___29081 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5718__auto___29081)){
var dom_29082 = temp__5718__auto___29081;
shadow.dom.set_data(dom_29082,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_29082,dom_events_29080);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_29082], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_29082], 0));
} else {
var temp__5720__auto___29083 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___29083)){
var dom_fn_29084 = temp__5720__auto___29083;
var dom_29085 = (function (){var G__28683 = (dom_fn_29084.cljs$core$IFn$_invoke$arity$2 ? dom_fn_29084.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_29084.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__28683) : shadow.dom.build.call(null,G__28683));
})();
shadow.dom.set_data(dom_29085,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_29085], 0));

shadow.object.bind_dom_events(oref,dom_29085,dom_events_29080);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_29085], 0));
} else {
}
}

var temp__5720__auto___29087 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___29087)){
var watches_29088 = temp__5720__auto___29087;
var seq__28684_29089 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_29088));
var chunk__28685_29090 = null;
var count__28686_29091 = (0);
var i__28687_29092 = (0);
while(true){
if((i__28687_29092 < count__28686_29091)){
var vec__28694_29093 = chunk__28685_29090.cljs$core$IIndexed$_nth$arity$2(null,i__28687_29092);
var attr_29094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28694_29093,(0),null);
var handler_29095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28694_29093,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_29094,((function (seq__28684_29089,chunk__28685_29090,count__28686_29091,i__28687_29092,vec__28694_29093,attr_29094,handler_29095,watches_29088,temp__5720__auto___29087,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_29095.cljs$core$IFn$_invoke$arity$3 ? handler_29095.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_29095.call(null,oref,old,new$));
});})(seq__28684_29089,chunk__28685_29090,count__28686_29091,i__28687_29092,vec__28694_29093,attr_29094,handler_29095,watches_29088,temp__5720__auto___29087,oid,parent,result_chan,odef,obj,oref))
);


var G__29096 = seq__28684_29089;
var G__29097 = chunk__28685_29090;
var G__29098 = count__28686_29091;
var G__29099 = (i__28687_29092 + (1));
seq__28684_29089 = G__29096;
chunk__28685_29090 = G__29097;
count__28686_29091 = G__29098;
i__28687_29092 = G__29099;
continue;
} else {
var temp__5720__auto___29100__$1 = cljs.core.seq(seq__28684_29089);
if(temp__5720__auto___29100__$1){
var seq__28684_29101__$1 = temp__5720__auto___29100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28684_29101__$1)){
var c__4550__auto___29102 = cljs.core.chunk_first(seq__28684_29101__$1);
var G__29103 = cljs.core.chunk_rest(seq__28684_29101__$1);
var G__29104 = c__4550__auto___29102;
var G__29105 = cljs.core.count(c__4550__auto___29102);
var G__29106 = (0);
seq__28684_29089 = G__29103;
chunk__28685_29090 = G__29104;
count__28686_29091 = G__29105;
i__28687_29092 = G__29106;
continue;
} else {
var vec__28697_29107 = cljs.core.first(seq__28684_29101__$1);
var attr_29108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28697_29107,(0),null);
var handler_29109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28697_29107,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_29108,((function (seq__28684_29089,chunk__28685_29090,count__28686_29091,i__28687_29092,vec__28697_29107,attr_29108,handler_29109,seq__28684_29101__$1,temp__5720__auto___29100__$1,watches_29088,temp__5720__auto___29087,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_29109.cljs$core$IFn$_invoke$arity$3 ? handler_29109.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_29109.call(null,oref,old,new$));
});})(seq__28684_29089,chunk__28685_29090,count__28686_29091,i__28687_29092,vec__28697_29107,attr_29108,handler_29109,seq__28684_29101__$1,temp__5720__auto___29100__$1,watches_29088,temp__5720__auto___29087,oid,parent,result_chan,odef,obj,oref))
);


var G__29113 = cljs.core.next(seq__28684_29101__$1);
var G__29114 = null;
var G__29115 = (0);
var G__29116 = (0);
seq__28684_29089 = G__29113;
chunk__28685_29090 = G__29114;
count__28686_29091 = G__29115;
i__28687_29092 = G__29116;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.create.cljs$lang$applyTo = (function (seq28680){
var G__28681 = cljs.core.first(seq28680);
var seq28680__$1 = cljs.core.next(seq28680);
var G__28682 = cljs.core.first(seq28680__$1);
var seq28680__$2 = cljs.core.next(seq28680__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28681,G__28682,seq28680__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__28702 = arguments.length;
switch (G__28702) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__28700_SHARP_){
var G__28703 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__28700_SHARP_) : node_gen.call(null,p1__28700_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__28703) : shadow.dom.build.call(null,G__28703));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__28704 = new_child;
var G__28705 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__28704,G__28705) : shadow.object.notify_down_BANG_.call(null,G__28704,G__28705));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__28706_29121 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__28707_29122 = null;
var count__28708_29123 = (0);
var i__28709_29124 = (0);
while(true){
if((i__28709_29124 < count__28708_29123)){
var obj_29125 = chunk__28707_29122.cljs$core$IIndexed$_nth$arity$2(null,i__28709_29124);
var obj_29126__$1 = shadow.object.get_from_dom(obj_29125);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_29126__$1);


var G__29127 = seq__28706_29121;
var G__29128 = chunk__28707_29122;
var G__29129 = count__28708_29123;
var G__29130 = (i__28709_29124 + (1));
seq__28706_29121 = G__29127;
chunk__28707_29122 = G__29128;
count__28708_29123 = G__29129;
i__28709_29124 = G__29130;
continue;
} else {
var temp__5720__auto___29131 = cljs.core.seq(seq__28706_29121);
if(temp__5720__auto___29131){
var seq__28706_29132__$1 = temp__5720__auto___29131;
if(cljs.core.chunked_seq_QMARK_(seq__28706_29132__$1)){
var c__4550__auto___29133 = cljs.core.chunk_first(seq__28706_29132__$1);
var G__29134 = cljs.core.chunk_rest(seq__28706_29132__$1);
var G__29135 = c__4550__auto___29133;
var G__29136 = cljs.core.count(c__4550__auto___29133);
var G__29137 = (0);
seq__28706_29121 = G__29134;
chunk__28707_29122 = G__29135;
count__28708_29123 = G__29136;
i__28709_29124 = G__29137;
continue;
} else {
var obj_29138 = cljs.core.first(seq__28706_29132__$1);
var obj_29139__$1 = shadow.object.get_from_dom(obj_29138);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_29139__$1);


var G__29140 = cljs.core.next(seq__28706_29132__$1);
var G__29141 = null;
var G__29142 = (0);
var G__29143 = (0);
seq__28706_29121 = G__29140;
chunk__28707_29122 = G__29141;
count__28708_29123 = G__29142;
i__28709_29124 = G__29143;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__28712 = arguments.length;
switch (G__28712) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__28710_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__28710_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__28713){
var vec__28714 = p__28713;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28714,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28714,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__28714,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__28714,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__28717_29151 = cljs.core.seq((function (){var G__28722 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__28722) : coll_transform.call(null,G__28722));
})());
var chunk__28718_29152 = null;
var count__28719_29153 = (0);
var i__28720_29154 = (0);
while(true){
if((i__28720_29154 < count__28719_29153)){
var item_29157 = chunk__28718_29152.cljs$core$IIndexed$_nth$arity$2(null,i__28720_29154);
shadow.object.dom_enter(coll_dom,make_item_fn(item_29157));


var G__29158 = seq__28717_29151;
var G__29159 = chunk__28718_29152;
var G__29160 = count__28719_29153;
var G__29161 = (i__28720_29154 + (1));
seq__28717_29151 = G__29158;
chunk__28718_29152 = G__29159;
count__28719_29153 = G__29160;
i__28720_29154 = G__29161;
continue;
} else {
var temp__5720__auto___29163 = cljs.core.seq(seq__28717_29151);
if(temp__5720__auto___29163){
var seq__28717_29165__$1 = temp__5720__auto___29163;
if(cljs.core.chunked_seq_QMARK_(seq__28717_29165__$1)){
var c__4550__auto___29166 = cljs.core.chunk_first(seq__28717_29165__$1);
var G__29167 = cljs.core.chunk_rest(seq__28717_29165__$1);
var G__29168 = c__4550__auto___29166;
var G__29169 = cljs.core.count(c__4550__auto___29166);
var G__29170 = (0);
seq__28717_29151 = G__29167;
chunk__28718_29152 = G__29168;
count__28719_29153 = G__29169;
i__28720_29154 = G__29170;
continue;
} else {
var item_29171 = cljs.core.first(seq__28717_29165__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_29171));


var G__29172 = cljs.core.next(seq__28717_29165__$1);
var G__29173 = null;
var G__29174 = (0);
var G__29175 = (0);
seq__28717_29151 = G__29172;
chunk__28718_29152 = G__29173;
count__28719_29153 = G__29174;
i__28720_29154 = G__29175;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4222__auto__ = count_new;
var y__4223__auto__ = count_children;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var n__4607__auto___29181 = count_children__$1;
var idx_29182 = (0);
while(true){
if((idx_29182 < n__4607__auto___29181)){
var cn_29184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_29182);
var cc_29185 = shadow.object.get_from_dom(cn_29184);
var ckey_29186 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_29185);
var cval_29187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_29185,item_key);
var vec__28723_29188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_29182);
var nkey_29189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28723_29188,(0),null);
var nval_29190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28723_29188,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_29186,nkey_29189)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_29187,nval_29190)))){
} else {
var new_obj_29194 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_29189,nval_29190], null));
shadow.dom.replace_node(cn_29184,new_obj_29194);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_29185);

shadow.object.notify_tree_BANG_(new_obj_29194,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__29195 = (idx_29182 + (1));
idx_29182 = G__29195;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__28726_29196 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__28727_29197 = null;
var count__28728_29198 = (0);
var i__28729_29199 = (0);
while(true){
if((i__28729_29199 < count__28728_29198)){
var item_29201 = chunk__28727_29197.cljs$core$IIndexed$_nth$arity$2(null,i__28729_29199);
shadow.object.dom_enter(coll_dom,make_item_fn(item_29201));


var G__29202 = seq__28726_29196;
var G__29203 = chunk__28727_29197;
var G__29204 = count__28728_29198;
var G__29205 = (i__28729_29199 + (1));
seq__28726_29196 = G__29202;
chunk__28727_29197 = G__29203;
count__28728_29198 = G__29204;
i__28729_29199 = G__29205;
continue;
} else {
var temp__5720__auto___29206 = cljs.core.seq(seq__28726_29196);
if(temp__5720__auto___29206){
var seq__28726_29207__$1 = temp__5720__auto___29206;
if(cljs.core.chunked_seq_QMARK_(seq__28726_29207__$1)){
var c__4550__auto___29208 = cljs.core.chunk_first(seq__28726_29207__$1);
var G__29209 = cljs.core.chunk_rest(seq__28726_29207__$1);
var G__29210 = c__4550__auto___29208;
var G__29211 = cljs.core.count(c__4550__auto___29208);
var G__29212 = (0);
seq__28726_29196 = G__29209;
chunk__28727_29197 = G__29210;
count__28728_29198 = G__29211;
i__28729_29199 = G__29212;
continue;
} else {
var item_29213 = cljs.core.first(seq__28726_29207__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_29213));


var G__29214 = cljs.core.next(seq__28726_29207__$1);
var G__29215 = null;
var G__29216 = (0);
var G__29217 = (0);
seq__28726_29196 = G__29214;
chunk__28727_29197 = G__29215;
count__28728_29198 = G__29216;
i__28729_29199 = G__29217;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4120__auto__ = key;
if(cljs.core.truth_(and__4120__auto__)){
return path;
} else {
return and__4120__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__28730 = "inspect!";
var G__28731 = shadow.object._id(oref);
var G__28732 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__28733 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__28730,G__28731,G__28732,G__28733) : shadow.object.info.call(null,G__28730,G__28731,G__28732,G__28733));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__28734_29222 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__28735_29223 = null;
var count__28736_29224 = (0);
var i__28737_29225 = (0);
while(true){
if((i__28737_29225 < count__28736_29224)){
var vec__28752_29226 = chunk__28735_29223.cljs$core$IIndexed$_nth$arity$2(null,i__28737_29225);
var id_29227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28752_29226,(0),null);
var oref_29228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28752_29226,(1),null);
var G__28755_29229 = "dump";
var G__28756_29230 = id_29227;
var G__28757_29231 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_29228)], 0));
var G__28758_29232 = cljs.core.deref(shadow.object._data(oref_29228));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__28755_29229,G__28756_29230,G__28757_29231,G__28758_29232) : shadow.object.info.call(null,G__28755_29229,G__28756_29230,G__28757_29231,G__28758_29232));


var G__29234 = seq__28734_29222;
var G__29235 = chunk__28735_29223;
var G__29236 = count__28736_29224;
var G__29237 = (i__28737_29225 + (1));
seq__28734_29222 = G__29234;
chunk__28735_29223 = G__29235;
count__28736_29224 = G__29236;
i__28737_29225 = G__29237;
continue;
} else {
var temp__5720__auto___29239 = cljs.core.seq(seq__28734_29222);
if(temp__5720__auto___29239){
var seq__28734_29240__$1 = temp__5720__auto___29239;
if(cljs.core.chunked_seq_QMARK_(seq__28734_29240__$1)){
var c__4550__auto___29242 = cljs.core.chunk_first(seq__28734_29240__$1);
var G__29243 = cljs.core.chunk_rest(seq__28734_29240__$1);
var G__29244 = c__4550__auto___29242;
var G__29245 = cljs.core.count(c__4550__auto___29242);
var G__29246 = (0);
seq__28734_29222 = G__29243;
chunk__28735_29223 = G__29244;
count__28736_29224 = G__29245;
i__28737_29225 = G__29246;
continue;
} else {
var vec__28759_29247 = cljs.core.first(seq__28734_29240__$1);
var id_29248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28759_29247,(0),null);
var oref_29249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28759_29247,(1),null);
var G__28762_29250 = "dump";
var G__28763_29251 = id_29248;
var G__28764_29252 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_29249)], 0));
var G__28765_29253 = cljs.core.deref(shadow.object._data(oref_29249));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__28762_29250,G__28763_29251,G__28764_29252,G__28765_29253) : shadow.object.info.call(null,G__28762_29250,G__28763_29251,G__28764_29252,G__28765_29253));


var G__29254 = cljs.core.next(seq__28734_29240__$1);
var G__29255 = null;
var G__29256 = (0);
var G__29257 = (0);
seq__28734_29222 = G__29254;
chunk__28735_29223 = G__29255;
count__28736_29224 = G__29256;
i__28737_29225 = G__29257;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
