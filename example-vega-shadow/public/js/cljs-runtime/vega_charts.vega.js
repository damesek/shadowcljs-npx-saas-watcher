goog.provide('vega_charts.vega');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$vega$build$vega_node=shadow.js.require("module$node_modules$vega$build$vega_node", {});
var module$node_modules$vega_lite$build$vega_lite=shadow.js.require("module$node_modules$vega_lite$build$vega_lite", {});
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
var module$node_modules$vega_tooltip$build$vega_tooltip=shadow.js.require("module$node_modules$vega_tooltip$build$vega_tooltip", {});
vega_charts.vega.log = (function vega_charts$vega$log(a_thing){
return console.log(a_thing);
});
vega_charts.vega.parse_vl_spec = (function vega_charts$vega$parse_vl_spec(spec,elem){
if(cljs.core.truth_(spec)){
var opts = ({"mode": "vega-lite", "renderer": "canvas", "actions": false});
return module$node_modules$vega_embed$build$vega_embed(elem,spec,opts).then(((function (opts){
return (function (res){
return module$node_modules$vega_tooltip$build$vega_tooltip.vl(res.view,spec);
});})(opts))
).catch(((function (opts){
return (function (err){
return vega_charts.vega.log(err);
});})(opts))
);
} else {
return null;
}
});
/**
 * Reagent component that renders vega-lite.
 */
vega_charts.vega.vega_lite = (function vega_charts$vega$vega_lite(spec){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega-lite",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return vega_charts.vega.parse_vl_spec(spec,reagent.core.dom_node(this$));
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__19638){
var vec__19639 = p__19638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(0),null);
var new_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(1),null);
return vega_charts.vega.parse_vl_spec(new_spec,reagent.core.dom_node(this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (spec__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#vis","div#vis",730109291)], null);
})], null));
});

//# sourceMappingURL=vega_charts.vega.js.map
