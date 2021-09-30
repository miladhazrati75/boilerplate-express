var express = require('express');
var app = express();
console.log("Hello World");
app.get("/",function(req,res,next){
console.log(`${req.method} ${req.path} - ${req.ip}`);
 next();
},function(req,res){
res.send("ok")
})
app.use("/public",express.static(__dirname+"/public"));
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
