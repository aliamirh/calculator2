$(document).ready(function(){
  var number1;
  var number2;



  $("#add").click(function(){
    $("#result").html("<h1>Your result:</h1>");
     number1 = parseInt($("#number1").val());
     number2 = parseInt($("#number2").val());
     var result = number1 + number2;
     $("#result").append(result);




  });
  $("#subtract").click(function(){
    $("#result").html("<h1>Your result:</h1>");
    number1 = parseInt($("#number1").val());
    number2 = parseInt($("#number2").val());
    var result = number1 - number2;
    $("#result").append(result);


  });
  $("#divide").click(function(){
    $("#result").html("<h1>Your result:</h1>");
    number1 = parseInt($("#number1").val());
    number2 = parseInt($("#number2").val());
    var result = number1 / number2;
    $("#result").append(result);




  });
  $("#multiply").click(function(){
    $("#result").html("<h1>Your result:</h1>");
    number1 = parseInt($("#number1").val());
    number2 = parseInt($("#number2").val());
    var result = number1 * number2;
    $("#result").append(result);



  });





  //event.preventDefault();
});
