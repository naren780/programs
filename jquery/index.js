$("h1").css("color","red");
$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("button").mousedown(function(){
    $("button").text("clickme");
});

// focus focusin -focusout
$("input").focus(function(){
    $(this).css("background-color", "yellow");
});

// bulr
$("input").blur(function(){
    $("input").css("background-color",
    "red")
});

// hover
$("#para").hover(function(){
    $(this).hide();
},function(){
    $(this).show();
});

// select use in text area/text filed
$("#para1").select(function(){
    alert("your selcted text");
});


// change -input
$("#input").change(function(){
    alert("your text has been change");
})
//attribute change

$("a").attr("href","https://www.google.co.in");

//off()

$("#para2").off("click",function(){
    alert("heloo world");
});
// one  
  $(".para3").one("click",function(){
    $(this).css("color","blue")
  });

//   scorll
var i = 0;
$("div").on("scroll",function(){
    $("span").text(i=i+1)
});

$("#para4").click(function(){
    $(this).css("color","pink");
});

$("#para5").click(function(){
    $("#para4").slideToggle("slow");
     $("#para4").css("color","pink");

});

// stop

$("#para5").click(function(){
    $("#para4").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#para4").stop();
  });

// traversing
$("#stop").hover(function(){
  $("span").parent("div").css({"color":"red","border":"2px solid red"})
});

// filter
$("p").eq(-1).css("background-color", "yellow");


// body
$("#stop").focus(()=>{
  $("body").css("background-color","orange");
});

// img attribute


$("img").attr("src","feedbackBack.jpg");


// prepand
$("#button").click(function(){
    $("p").prepend("<b>hello world</b>");
});

