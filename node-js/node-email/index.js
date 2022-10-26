var nodemailer =require("nodemailer");
var transpoter =nodemailer.createTransport({
     service:"gmail",
     auth:{
         user:"narennarendra780@gmail.com",
         password:"password"
     }
})
var option ={
    from:"narennarendra780@gmail.com",
    to:"devakalyan1010@gmail.com",
    subject:"this is texting email",
    text:"hello kalyan"
}
transpoter.sendMail(option,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("email is sent"+info.response);
    }
})