goog.provide('starter.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('vega_charts.vega');
vega_charts.vega.log("hello");
starter.core.group_data = (function starter$core$group_data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19647 = arguments.length;
var i__4731__auto___19648 = (0);
while(true){
if((i__4731__auto___19648 < len__4730__auto___19647)){
args__4736__auto__.push((arguments[i__4731__auto___19648]));

var G__19649 = (i__4731__auto___19648 + (1));
i__4731__auto___19648 = G__19649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return starter.core.group_data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

starter.core.group_data.cljs$core$IFn$_invoke$arity$variadic = (function (names){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function starter$core$iter__19643(s__19644){
return (new cljs.core.LazySeq(null,(function (){
var s__19644__$1 = s__19644;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19644__$1);
if(temp__5720__auto__){
var s__19644__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19644__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19644__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19646 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19645 = (0);
while(true){
if((i__19645 < size__4522__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19645);
cljs.core.chunk_append(b__19646,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__19645,n,c__4521__auto__,size__4522__auto__,b__19646,s__19644__$2,temp__5720__auto__){
return (function (i,y){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"col","col",-1959363084),n], null);
});})(i__19645,n,c__4521__auto__,size__4522__auto__,b__19646,s__19644__$2,temp__5720__auto__))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (i__19645,n,c__4521__auto__,size__4522__auto__,b__19646,s__19644__$2,temp__5720__auto__){
return (function (){
return cljs.core.rand_int((100));
});})(i__19645,n,c__4521__auto__,size__4522__auto__,b__19646,s__19644__$2,temp__5720__auto__))
))));

var G__19650 = (i__19645 + (1));
i__19645 = G__19650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19646),starter$core$iter__19643(cljs.core.chunk_rest(s__19644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19646),null);
}
} else {
var n = cljs.core.first(s__19644__$2);
return cljs.core.cons(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (n,s__19644__$2,temp__5720__auto__){
return (function (i,y){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"col","col",-1959363084),n], null);
});})(n,s__19644__$2,temp__5720__auto__))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (n,s__19644__$2,temp__5720__auto__){
return (function (){
return cljs.core.rand_int((100));
});})(n,s__19644__$2,temp__5720__auto__))
))),starter$core$iter__19643(cljs.core.rest(s__19644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(names);
})());
});

starter.core.group_data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
starter.core.group_data.cljs$lang$applyTo = (function (seq19642){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19642));
});

starter.core.line_plot = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"$schema","$schema",1635092088),"https://vega.github.io/schema/vega-lite/v3.4.json",new cljs.core.Keyword(null,"description","description",-1428560544),"A simple line chart with embedded data.",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),starter.core.group_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["off","error","update","run"], 0))], null),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"x",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gridOpacity","gridOpacity",-1736819227),(0)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"y",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"title","title",636505583),""], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),0.7], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"col",new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"type","type",1174270348),"nominal",new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"orient","orient",1933743565),"none",new cljs.core.Keyword(null,"legendX","legendX",1263648690),(50),new cljs.core.Keyword(null,"legendY","legendY",676107902),(285),new cljs.core.Keyword(null,"direction","direction",-633359395),"horizontal",new cljs.core.Keyword(null,"offset","offset",296498311),(5)], null)], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),(270),new cljs.core.Keyword(null,"heigth","heigth",914329217),(150),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(3),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filled","filled",1908725116),true,new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"y",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),"sum",new cljs.core.Keyword(null,"title","title",636505583),""], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),"col",new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"type","type",1174270348),"nominal"], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),(270),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"bar"], null)], null)], null)], null);
starter.core.line_plotter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(starter.core.line_plot));
starter.core.app = (function starter$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),"Example of Vega Charts with Shadow-cljs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vega_charts.vega.vega_lite,cljs.core.deref(starter.core.line_plotter)], null)], null);
});
starter.core.stop = (function starter$core$stop(){
return console.log("Stopping...");
});
starter.core.start = (function starter$core$start(){
console.log("Starting...");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [starter.core.app], null),document.getElementById("app"));
});
starter.core.init = (function starter$core$init(){
return starter.core.start();
});
goog.exportSymbol('starter.core.init', starter.core.init);

//# sourceMappingURL=starter.core.js.map
