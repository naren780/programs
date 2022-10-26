var express = require("express");
var app = express();
app.get("/",(req,res)=>{
    res.send("<h1>hello<h1>")
});
app.listen(9898,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server running");
    }
});