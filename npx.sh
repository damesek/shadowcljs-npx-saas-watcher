#!/bin/sh

nohup npx sass --watch sass/main.scss:public/css/main.css & echo $!
