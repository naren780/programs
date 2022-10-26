document.getElementById("fullname").addEventListener("keypress",function (e) {
    if( e.which > 48 && e.keycode < 57 ){ return false; }
    
});

// $("#fullname").keypress(function (e) {
//     var mobileno = document.getElementById("mobile").value;
   
//     if(mobileno.length >= 10){return false;}

//     if(e.which == 31){return true}
//     else{
//         if( e.which < 48 || e.which > 57 ){ return false; }
//     }
// });