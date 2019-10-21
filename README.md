# Example dev setup run multiple npx/shell app watcher on shadow-cljs 
based on my mini Vega project.

Example code with mount:

```(ns-tools/set-refresh-dirs "src" "dev")

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
    :stop  ((process :stop :sass)) )```
    






