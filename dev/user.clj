(ns user
  (:require [clojure.tools.namespace.repl :as ns-tools]
            [clojure.pprint :refer [pprint]]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.core.async :as async
             :refer [>! <! >!! <!! go chan buffer close! alts!!]]
            
            [shadow.cljs.devtools.api :as cljs]
            [shadow.cljs.devtools.server :as shadow]
            [clojure.java.shell :refer [sh]]

            [mount.core :as mount])
   (:import
    (java.io File OutputStreamWriter)
    (java.lang ProcessBuilder$Redirect)
    (java.util List)))

(ns-tools/set-refresh-dirs "src" "dev")

(def stdout nil)
(def stderr nil)

#_(mount/defstate sass-server
  :start (future (sh "bash" "-c" "nohup npx sass --watch sass/main.scss:public/css/main.css & echo $! > pid.txt"))
  :stop (sh "bash" "-c" (str "kill " (clojure.string/trim (slurp "pid.txt")))))

(def p (atom {}))

(defn process [cmd proc & [shell-cmd]]
  ;npx sass --watch sass/main.scss:public/css/main.css
  (let [stdout nil
        stderr nil]
    (case cmd
      :start (fn []  (swap! p assoc proc (-> (ProcessBuilder. ^List ["bash" "-c" shell-cmd])
                                             (.redirectOutput (if stdout (ProcessBuilder$Redirect/to stdout) ProcessBuilder$Redirect/INHERIT))
                                             (.redirectError (if stderr (ProcessBuilder$Redirect/to stderr) ProcessBuilder$Redirect/INHERIT))
                                             (.start))))
      :stop (fn [] (.destroy (@p proc)))
      :wait (fn [] 
              (.waitFor (@p proc))
              (.exitValue (@p proc))))))
    

(mount/defstate sass-process    
    :start ((process :start :sass "npx sass --watch sass/main.scss:public/css/main.css"))
    :stop  ((process :stop :sass)) )

(mount/defstate shadow-cljs-server
  :start (shadow/start!)
  :stop (shadow/stop!))


(mount/defstate cljs-app-watcher
  :start (cljs/watch :app)
  :stop (cljs/stop-worker :app))

; Start components won't be reloaded on (reset)
(def start-components [#'shadow-cljs-server
                       #'cljs-app-watcher
                       #'sass-process])

; Reset components are stopped and started between code reloading
(def reset-components [#'shadow-cljs-server
                       #'cljs-app-watcher])

(def stop-components [#'shadow-cljs-server
                      #'cljs-app-watcher
                      #'sass-process])


#_(def stop-sass 
  [#'sass-process])


(defn start 
  []
  (mount/start start-components)
  (mount/start reset-components)
  :ready)

(defn stop []
  (mount/stop stop-components)
  :stop)


(defn reset []
  (stop)
  (ns-tools/refresh :after 'user/start)
  :reset)

