//Container One Box One Select
$("#container-one-box-one").click(function(){
  $("#container-one-box-one").css({
    "background": "red",
    "color" : "black"
  });  
  $("#container-one-box-two").css({
    "background": "black",
    "color": "red"
  })
});

//Container One Box Two Select
$("#container-one-box-two").click(function(){
  $("#container-one-box-one").css({
    "background": "black",
    "color": "red"
  });
  $("#container-one-box-two").css({
    "background": "red",
    "color": "black"
  })
});

//Container Two Div Reset
$("#container-two-div").click(function(){
  $("#container-one-box-one").css({
    "background": "white",
    "color": "black"
  });
  $("h2").html(":) <-- change back");
  ;
  $("#container-one-box-two").css({
    "background": "white",
    "color": "black"
  })
});
