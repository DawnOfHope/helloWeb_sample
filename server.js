"use strict";

var express = require('express');
var bootstrap = require("express-bootstrap-service");
var app = express();
var port = 8081;

app.use(express.static(__dirname + '/app'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(function(req,res){
        res.sendFile(__dirname  +   '/app/index.html')
        });

app.listen(port,function(error){
        if(error){
            console.error(error)
        }else{
            console.info("Listening on port %s. Open up http://localhost:%s/",port, port)
           }
        })
