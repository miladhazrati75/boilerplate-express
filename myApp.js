var express = require('express');
var app = express();
console.log("Hello World");
app.use("/public",express.static(__dirname+"/public"));
app.get("/json",function(req,res){
 res.send(process.env.MESSAGE_STYLE=="uppercase"?{"message": "HELLO JSON"}:{"message": "Hello json"} );
})
app.get("/",function(req,res){
 res.sendFile(__dirname+"/views/index.html");
})


































 module.exports = app;
