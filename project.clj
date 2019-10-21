(defproject org.clojars.baader/vega-charts "0.3.1"
  :description "Vega Charts for Shadow-cljs projects"
  :url "https://github.com/damesek/vega-charts-shadow-cljs"
  :license {:name "EPL-1.0"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [thheller/shadow-cljs "2.8.3"]
                 [mount "0.1.11"]
                 [org.clojure/core.async "0.4.500"]
                 [clj-ssh "0.5.14"]
                 ;; Frontend
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.3"]]
  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js" "node_modules"]

  :plugins [[lein-shell "0.5.0"]]
  ;:repositories [["jitpack" "https://jitpack.io"]]  

  :aliases {"js-watch"     ["run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "js-build"     ["run" "-m" "shadow.cljs.devtools.cli" "release" "app"]
            "css-build"    ["run" "-m" "garden-gnome.compile"]
            "yarn-install" ["shell" "yarn" "install"]}

  :deploy-repositories {"releases" {:url "https://repo.clojars.org" :sign-releases false}}

  :profiles {:dev     {:repl-options {:init-ns user
                                      :timeout 120000}
                       :source-paths ["dev"]
                       :dependencies [[org.clojure/tools.namespace "0.2.11"]]
                       :prep-tasks   ["yarn-install"]}

             :uberjar {:aot         :all
                       :omit-source true
                       :prep-tasks  ["yarn-install" "compile" "js-build"]}})
