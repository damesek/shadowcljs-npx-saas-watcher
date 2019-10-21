(ns vega-charts.core
  (:require [reagent.core :as r]
            [vega-charts.views :as views]))

(defn ^:dev/after-load start
  []
  (r/render-component [views/app]
                      (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))
