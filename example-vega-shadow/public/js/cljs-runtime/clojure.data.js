goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25016){
var vec__25020 = p__25016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25020,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25020,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25028 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25028,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25028,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25028,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25041 = arguments.length;
switch (G__25041) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25062_25168 = clojure.data.equality_partition;
var G__25063_25169 = "null";
var G__25064_25170 = ((function (G__25062_25168,G__25063_25169){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25062_25168,G__25063_25169))
;
goog.object.set(G__25062_25168,G__25063_25169,G__25064_25170);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25065_25172 = clojure.data.equality_partition;
var G__25066_25173 = "string";
var G__25067_25174 = ((function (G__25065_25172,G__25066_25173){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25065_25172,G__25066_25173))
;
goog.object.set(G__25065_25172,G__25066_25173,G__25067_25174);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25068_25177 = clojure.data.equality_partition;
var G__25069_25178 = "number";
var G__25070_25179 = ((function (G__25068_25177,G__25069_25178){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25068_25177,G__25069_25178))
;
goog.object.set(G__25068_25177,G__25069_25178,G__25070_25179);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25071_25180 = clojure.data.equality_partition;
var G__25072_25181 = "array";
var G__25073_25182 = ((function (G__25071_25180,G__25072_25181){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25071_25180,G__25072_25181))
;
goog.object.set(G__25071_25180,G__25072_25181,G__25073_25182);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25077_25184 = clojure.data.equality_partition;
var G__25078_25185 = "function";
var G__25079_25186 = ((function (G__25077_25184,G__25078_25185){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25077_25184,G__25078_25185))
;
goog.object.set(G__25077_25184,G__25078_25185,G__25079_25186);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25082_25187 = clojure.data.equality_partition;
var G__25083_25188 = "boolean";
var G__25084_25189 = ((function (G__25082_25187,G__25083_25188){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25082_25187,G__25083_25188))
;
goog.object.set(G__25082_25187,G__25083_25188,G__25084_25189);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25085_25190 = clojure.data.equality_partition;
var G__25086_25191 = "_";
var G__25087_25192 = ((function (G__25085_25190,G__25086_25191){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__25085_25190,G__25086_25191))
;
goog.object.set(G__25085_25190,G__25086_25191,G__25087_25192);
goog.object.set(clojure.data.Diff,"null",true);

var G__25096_25203 = clojure.data.diff_similar;
var G__25097_25204 = "null";
var G__25098_25205 = ((function (G__25096_25203,G__25097_25204){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25096_25203,G__25097_25204))
;
goog.object.set(G__25096_25203,G__25097_25204,G__25098_25205);

goog.object.set(clojure.data.Diff,"string",true);

var G__25102_25206 = clojure.data.diff_similar;
var G__25103_25207 = "string";
var G__25104_25208 = ((function (G__25102_25206,G__25103_25207){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25102_25206,G__25103_25207))
;
goog.object.set(G__25102_25206,G__25103_25207,G__25104_25208);

goog.object.set(clojure.data.Diff,"number",true);

var G__25109_25213 = clojure.data.diff_similar;
var G__25110_25214 = "number";
var G__25111_25215 = ((function (G__25109_25213,G__25110_25214){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25109_25213,G__25110_25214))
;
goog.object.set(G__25109_25213,G__25110_25214,G__25111_25215);

goog.object.set(clojure.data.Diff,"array",true);

var G__25123_25225 = clojure.data.diff_similar;
var G__25124_25226 = "array";
var G__25125_25227 = ((function (G__25123_25225,G__25124_25226){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25123_25225,G__25124_25226))
;
goog.object.set(G__25123_25225,G__25124_25226,G__25125_25227);

goog.object.set(clojure.data.Diff,"function",true);

var G__25127_25229 = clojure.data.diff_similar;
var G__25128_25230 = "function";
var G__25129_25231 = ((function (G__25127_25229,G__25128_25230){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25127_25229,G__25128_25230))
;
goog.object.set(G__25127_25229,G__25128_25230,G__25129_25231);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25131_25238 = clojure.data.diff_similar;
var G__25132_25239 = "boolean";
var G__25133_25240 = ((function (G__25131_25238,G__25132_25239){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25131_25238,G__25132_25239))
;
goog.object.set(G__25131_25238,G__25132_25239,G__25133_25240);

goog.object.set(clojure.data.Diff,"_",true);

var G__25138_25244 = clojure.data.diff_similar;
var G__25139_25245 = "_";
var G__25140_25246 = ((function (G__25138_25244,G__25139_25245){
return (function (a,b){
var fexpr__25144 = (function (){var G__25145 = clojure.data.equality_partition(a);
var G__25145__$1 = (((G__25145 instanceof cljs.core.Keyword))?G__25145.fqn:null);
switch (G__25145__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25145__$1)].join('')));

}
})();
return (fexpr__25144.cljs$core$IFn$_invoke$arity$2 ? fexpr__25144.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25144.call(null,a,b));
});})(G__25138_25244,G__25139_25245))
;
goog.object.set(G__25138_25244,G__25139_25245,G__25140_25246);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
