# Example dev setup run multiple npx/shell app watcher on shadow-cljs 
based on my mini Vega project.

Mini example code with mount how to run sass watcher:

```

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
    






