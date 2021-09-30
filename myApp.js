var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
console.log("Hello World");
app.use(function(req,res,next){
console.log(`${req.method} ${req.path} - ${req.ip}`);
 next();
})

app.use("/public",express.static(__dirname+"/public"));
app.get("/now",function(req,res,next){
req.time=new Date().toString();
 next();
},function(req,res){
 res.send({time:req.time})
})
app.get("/name",function(req,res){
res.send({name:`${req.query.first} ${req.query.last}`})
})
app.get("/json",function(req,res){
 if (process.env.MESSAGE_STYLE=="uppercase"){
 res.send({"message": "HELLO JSON"} );
 } else{
 res.send({"message": "Hello json"})
 }
})
app.get("/",function(req,res){
 res.sendFile(__dirname+"/views/index.html");
})


































 module.exports = app;
