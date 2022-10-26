var express =require("express");
var app=express();
const url="https://dog.ceo/api/breeds/image/random"
app.get("/",(req,res)=>{
    res.send("hello world ");
    res.end();
})
app.post("/",(request,responce)=>{
    request(url);
})
app.listen(5454,(err,data)=>{
    if(err){
    console.log(err)
    }
    else{
        console.log("server is running.......")
    }
})
