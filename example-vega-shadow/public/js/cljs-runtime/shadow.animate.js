goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__28783){
var vec__28784 = p__28783;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28784,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28784,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4120__auto__ = delay;
if(cljs.core.truth_(and__4120__auto__)){
return (delay > (0));
} else {
return and__4120__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__27393__auto__ = (0);
while(true){
if((i__27393__auto__ < n__4607__auto__)){
var map__28816_29277 = (self__.items[i__27393__auto__]);
var map__28816_29278__$1 = (((((!((map__28816_29277 == null))))?(((((map__28816_29277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28816_29277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28816_29277):map__28816_29277);
var el_29279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28816_29278__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_29280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28816_29278__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_29279,from_29280);

var G__29281 = (i__27393__auto__ + (1));
i__27393__auto__ = G__29281;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__27393__auto__ = (0);
while(true){
if((i__27393__auto__ < n__4607__auto__)){
var map__28835_29282 = (self__.items[i__27393__auto__]);
var map__28835_29283__$1 = (((((!((map__28835_29282 == null))))?(((((map__28835_29282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28835_29282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28835_29282):map__28835_29282);
var el_29284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28835_29283__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_29285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28835_29283__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_29286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28835_29283__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_29285["transition"] = transition_29286);

goog.style.setStyle(el_29284,to_29285);

var G__29290 = (i__27393__auto__ + (1));
i__27393__auto__ = G__29290;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__27393__auto__ = (0);
while(true){
if((i__27393__auto__ < n__4607__auto__)){
var map__28843_29291 = (self__.items[i__27393__auto__]);
var map__28843_29292__$1 = (((((!((map__28843_29291 == null))))?(((((map__28843_29291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28843_29291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28843_29291):map__28843_29291);
var el_29293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28843_29292__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_29294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28843_29292__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_29294["transition"] = null);

goog.style.setStyle(el_29293,toggles_29294);

var G__29296 = (i__27393__auto__ + (1));
i__27393__auto__ = G__29296;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28859,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28866 = k28859;
var G__28866__$1 = (((G__28866 instanceof cljs.core.Keyword))?G__28866.fqn:null);
switch (G__28866__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28859,else__4388__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28869){
var vec__28870 = p__28869;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28870,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28870,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28858){
var self__ = this;
var G__28858__$1 = this;
return (new cljs.core.RecordIter((0),G__28858__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__28876 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__28876(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28860,other28861){
var self__ = this;
var this28860__$1 = this;
return (((!((other28861 == null)))) && ((this28860__$1.constructor === other28861.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28860__$1.el,other28861.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28860__$1.from,other28861.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28860__$1.to,other28861.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28860__$1.toggles,other28861.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28860__$1.transition,other28861.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28860__$1.__extmap,other28861.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28858){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28887 = cljs.core.keyword_identical_QMARK_;
var expr__28888 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__28890 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__28891 = expr__28888;
return (pred__28887.cljs$core$IFn$_invoke$arity$2 ? pred__28887.cljs$core$IFn$_invoke$arity$2(G__28890,G__28891) : pred__28887.call(null,G__28890,G__28891));
})())){
return (new shadow.animate.AnimationStep(G__28858,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28898 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__28899 = expr__28888;
return (pred__28887.cljs$core$IFn$_invoke$arity$2 ? pred__28887.cljs$core$IFn$_invoke$arity$2(G__28898,G__28899) : pred__28887.call(null,G__28898,G__28899));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__28858,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28900 = new cljs.core.Keyword(null,"to","to",192099007);
var G__28901 = expr__28888;
return (pred__28887.cljs$core$IFn$_invoke$arity$2 ? pred__28887.cljs$core$IFn$_invoke$arity$2(G__28900,G__28901) : pred__28887.call(null,G__28900,G__28901));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__28858,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28906 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__28907 = expr__28888;
return (pred__28887.cljs$core$IFn$_invoke$arity$2 ? pred__28887.cljs$core$IFn$_invoke$arity$2(G__28906,G__28907) : pred__28887.call(null,G__28906,G__28907));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__28858,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28908 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__28909 = expr__28888;
return (pred__28887.cljs$core$IFn$_invoke$arity$2 ? pred__28887.cljs$core$IFn$_invoke$arity$2(G__28908,G__28909) : pred__28887.call(null,G__28908,G__28909));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__28858,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__28858),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28858){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__28858,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__28862){
var extmap__4424__auto__ = (function (){var G__28933 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28862,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__28862)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28933);
} else {
return G__28933;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__28862),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__28862),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__28862),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__28862),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__28862),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$animate$setup_$_iter__28937(s__28938){
return (new cljs.core.LazySeq(null,(function (){
var s__28938__$1 = s__28938;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__28938__$1);
if(temp__5720__auto__){
var s__28938__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28938__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__28938__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__28940 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__28939 = (0);
while(true){
if((i__28939 < size__4522__auto__)){
var vec__28944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__28939);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28944,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28944,(1),null);
cljs.core.chunk_append(b__28940,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__29340 = (i__28939 + (1));
i__28939 = G__29340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28940),shadow$animate$setup_$_iter__28937(cljs.core.chunk_rest(s__28938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28940),null);
}
} else {
var vec__28960 = cljs.core.first(s__28938__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__28937(cljs.core.rest(s__28938__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__24903__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__24903__auto__){
return (function (){
var f__24904__auto__ = (function (){var switch__24631__auto__ = ((function (c__24903__auto__){
return (function (state_28984){
var state_val_28985 = (state_28984[(1)]);
if((state_val_28985 === (1))){
var inst_28978 = shadow.animate.get_duration(animator);
var inst_28979 = cljs.core.async.timeout(inst_28978);
var state_28984__$1 = state_28984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28984__$1,(2),inst_28979);
} else {
if((state_val_28985 === (2))){
var inst_28981 = (state_28984[(2)]);
var inst_28982 = shadow.animate.finish_BANG_(animator);
var state_28984__$1 = (function (){var statearr_28988 = state_28984;
(statearr_28988[(7)] = inst_28982);

(statearr_28988[(8)] = inst_28981);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28984__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__24903__auto__))
;
return ((function (switch__24631__auto__,c__24903__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__24632__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__24632__auto____0 = (function (){
var statearr_28989 = [null,null,null,null,null,null,null,null,null];
(statearr_28989[(0)] = shadow$animate$continue_BANG__$_state_machine__24632__auto__);

(statearr_28989[(1)] = (1));

return statearr_28989;
});
var shadow$animate$continue_BANG__$_state_machine__24632__auto____1 = (function (state_28984){
while(true){
var ret_value__24633__auto__ = (function (){try{while(true){
var result__24634__auto__ = switch__24631__auto__(state_28984);
if(cljs.core.keyword_identical_QMARK_(result__24634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24634__auto__;
}
break;
}
}catch (e28990){if((e28990 instanceof Object)){
var ex__24635__auto__ = e28990;
var statearr_28991_29346 = state_28984;
(statearr_28991_29346[(5)] = ex__24635__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24633__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29355 = state_28984;
state_28984 = G__29355;
continue;
} else {
return ret_value__24633__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__24632__auto__ = function(state_28984){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__24632__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__24632__auto____1.call(this,state_28984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__24632__auto____0;
shadow$animate$continue_BANG__$_state_machine__24632__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__24632__auto____1;
return shadow$animate$continue_BANG__$_state_machine__24632__auto__;
})()
;})(switch__24631__auto__,c__24903__auto__))
})();
var state__24905__auto__ = (function (){var statearr_28992 = (f__24904__auto__.cljs$core$IFn$_invoke$arity$0 ? f__24904__auto__.cljs$core$IFn$_invoke$arity$0() : f__24904__auto__.call(null));
(statearr_28992[(6)] = c__24903__auto__);

return statearr_28992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24905__auto__);
});})(c__24903__auto__))
);

return c__24903__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__28995 = arguments.length;
switch (G__28995) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate28996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate28996 = (function (attr,from,to,timing,delay,meta28997){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta28997 = meta28997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate28996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28998,meta28997__$1){
var self__ = this;
var _28998__$1 = this;
return (new shadow.animate.t_shadow$animate28996(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta28997__$1));
});

shadow.animate.t_shadow$animate28996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28998){
var self__ = this;
var _28998__$1 = this;
return self__.meta28997;
});

shadow.animate.t_shadow$animate28996.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate28996.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate28996.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate28996.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate28996.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate28996.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate28996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta28997","meta28997",325524718,null)], null);
});

shadow.animate.t_shadow$animate28996.cljs$lang$type = true;

shadow.animate.t_shadow$animate28996.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate28996";

shadow.animate.t_shadow$animate28996.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate28996");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate28996.
 */
shadow.animate.__GT_t_shadow$animate28996 = (function shadow$animate$__GT_t_shadow$animate28996(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta28997){
return (new shadow.animate.t_shadow$animate28996(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta28997));
});

}

return (new shadow.animate.t_shadow$animate28996(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate29026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate29026 = (function (attr,from,to,meta29027){
this.attr = attr;
this.from = from;
this.to = to;
this.meta29027 = meta29027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate29026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29028,meta29027__$1){
var self__ = this;
var _29028__$1 = this;
return (new shadow.animate.t_shadow$animate29026(self__.attr,self__.from,self__.to,meta29027__$1));
});

shadow.animate.t_shadow$animate29026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29028){
var self__ = this;
var _29028__$1 = this;
return self__.meta29027;
});

shadow.animate.t_shadow$animate29026.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate29026.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29026.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate29026.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate29026.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29026.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta29027","meta29027",1687394654,null)], null);
});

shadow.animate.t_shadow$animate29026.cljs$lang$type = true;

shadow.animate.t_shadow$animate29026.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate29026";

shadow.animate.t_shadow$animate29026.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate29026");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate29026.
 */
shadow.animate.__GT_t_shadow$animate29026 = (function shadow$animate$toggle_$___GT_t_shadow$animate29026(attr__$1,from__$1,to__$1,meta29027){
return (new shadow.animate.t_shadow$animate29026(attr__$1,from__$1,to__$1,meta29027));
});

}

return (new shadow.animate.t_shadow$animate29026(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__29068 = arguments.length;
switch (G__29068) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate29069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate29069 = (function (attrs,meta29070){
this.attrs = attrs;
this.meta29070 = meta29070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate29069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29071,meta29070__$1){
var self__ = this;
var _29071__$1 = this;
return (new shadow.animate.t_shadow$animate29069(self__.attrs,meta29070__$1));
});

shadow.animate.t_shadow$animate29069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29071){
var self__ = this;
var _29071__$1 = this;
return self__.meta29070;
});

shadow.animate.t_shadow$animate29069.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate29069.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29069.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate29069.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29069.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29069.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29070","meta29070",298008101,null)], null);
});

shadow.animate.t_shadow$animate29069.cljs$lang$type = true;

shadow.animate.t_shadow$animate29069.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate29069";

shadow.animate.t_shadow$animate29069.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate29069");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate29069.
 */
shadow.animate.__GT_t_shadow$animate29069 = (function shadow$animate$__GT_t_shadow$animate29069(attrs__$1,meta29070){
return (new shadow.animate.t_shadow$animate29069(attrs__$1,meta29070));
});

}

return (new shadow.animate.t_shadow$animate29069(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate29077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate29077 = (function (attr,meta29078){
this.attr = attr;
this.meta29078 = meta29078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate29077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29079,meta29078__$1){
var self__ = this;
var _29079__$1 = this;
return (new shadow.animate.t_shadow$animate29077(self__.attr,meta29078__$1));
});

shadow.animate.t_shadow$animate29077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29079){
var self__ = this;
var _29079__$1 = this;
return self__.meta29078;
});

shadow.animate.t_shadow$animate29077.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate29077.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29077.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29077.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate29077.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29077.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta29078","meta29078",242576089,null)], null);
});

shadow.animate.t_shadow$animate29077.cljs$lang$type = true;

shadow.animate.t_shadow$animate29077.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate29077";

shadow.animate.t_shadow$animate29077.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate29077");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate29077.
 */
shadow.animate.__GT_t_shadow$animate29077 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate29077(attr__$1,meta29078){
return (new shadow.animate.t_shadow$animate29077(attr__$1,meta29078));
});

}

return (new shadow.animate.t_shadow$animate29077(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29444 = arguments.length;
var i__4731__auto___29445 = (0);
while(true){
if((i__4731__auto___29445 < len__4730__auto___29444)){
args__4736__auto__.push((arguments[i__4731__auto___29445]));

var G__29450 = (i__4731__auto___29445 + (1));
i__4731__auto___29445 = G__29450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5718__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var adef = temp__5718__auto__;
var G__29453 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__29454 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__29455 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__29456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__29457 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__29458 = cljs.core.rest(transitions__$1);
to = G__29453;
from = G__29454;
toggles = G__29455;
timings = G__29456;
delays = G__29457;
transitions__$1 = G__29458;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate29118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate29118 = (function (transitions,to,from,toggles,timings,delays,temp__5718__auto__,meta29119){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5718__auto__ = temp__5718__auto__;
this.meta29119 = meta29119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate29118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_29120,meta29119__$1){
var self__ = this;
var _29120__$1 = this;
return (new shadow.animate.t_shadow$animate29118(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5718__auto__,meta29119__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_29120){
var self__ = this;
var _29120__$1 = this;
return self__.meta29119;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate29118.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"meta29119","meta29119",1566285429,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate29118.cljs$lang$type = true;

shadow.animate.t_shadow$animate29118.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate29118";

shadow.animate.t_shadow$animate29118.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate29118");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate29118.
 */
shadow.animate.__GT_t_shadow$animate29118 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function shadow$animate$__GT_t_shadow$animate29118(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5718__auto____$1,meta29119){
return (new shadow.animate.t_shadow$animate29118(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5718__auto____$1,meta29119));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

}

return (new shadow.animate.t_shadow$animate29118(transitions__$1,to,from,toggles,timings,delays,temp__5718__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq29086){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29086));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__29146 = arguments.length;
switch (G__29146) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__29148 = arguments.length;
switch (G__29148) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__29177 = arguments.length;
switch (G__29177) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate29191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate29191 = (function (from,to,timing,delay,meta29192){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta29192 = meta29192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate29191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29193,meta29192__$1){
var self__ = this;
var _29193__$1 = this;
return (new shadow.animate.t_shadow$animate29191(self__.from,self__.to,self__.timing,self__.delay,meta29192__$1));
});

shadow.animate.t_shadow$animate29191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29193){
var self__ = this;
var _29193__$1 = this;
return self__.meta29192;
});

shadow.animate.t_shadow$animate29191.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate29191.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate29191.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate29191.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate29191.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29191.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate29191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta29192","meta29192",1196159859,null)], null);
});

shadow.animate.t_shadow$animate29191.cljs$lang$type = true;

shadow.animate.t_shadow$animate29191.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate29191";

shadow.animate.t_shadow$animate29191.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate29191");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate29191.
 */
shadow.animate.__GT_t_shadow$animate29191 = (function shadow$animate$__GT_t_shadow$animate29191(from__$1,to__$1,timing__$1,delay__$1,meta29192){
return (new shadow.animate.t_shadow$animate29191(from__$1,to__$1,timing__$1,delay__$1,meta29192));
});

}

return (new shadow.animate.t_shadow$animate29191(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__29241 = arguments.length;
switch (G__29241) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate29258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate29258 = (function (from,to,timing,delay,meta29259){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta29259 = meta29259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate29258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29260,meta29259__$1){
var self__ = this;
var _29260__$1 = this;
return (new shadow.animate.t_shadow$animate29258(self__.from,self__.to,self__.timing,self__.delay,meta29259__$1));
});

shadow.animate.t_shadow$animate29258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29260){
var self__ = this;
var _29260__$1 = this;
return self__.meta29259;
});

shadow.animate.t_shadow$animate29258.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate29258.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate29258.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate29258.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate29258.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate29258.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate29258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta29259","meta29259",-1725860940,null)], null);
});

shadow.animate.t_shadow$animate29258.cljs$lang$type = true;

shadow.animate.t_shadow$animate29258.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate29258";

shadow.animate.t_shadow$animate29258.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate29258");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate29258.
 */
shadow.animate.__GT_t_shadow$animate29258 = (function shadow$animate$__GT_t_shadow$animate29258(from__$1,to__$1,timing__$1,delay__$1,meta29259){
return (new shadow.animate.t_shadow$animate29258(from__$1,to__$1,timing__$1,delay__$1,meta29259));
});

}

return (new shadow.animate.t_shadow$animate29258(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
