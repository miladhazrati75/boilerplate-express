var express = require('express');
var app = express();
console.log("Hello World");
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
