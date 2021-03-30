//<!-- Code brainstormed with Aidan Day and Noah LaFave-->
$(".MONTH").click(function(){
    updateMonth = $(this).attr('id');
    $("#monthButton").html(updateMonth);
    
    $.post("/orders",{ updateMonth: updateMonth }, function(data){
      
      console.log("client : " +data);
      var jsonOrder = JSON.parse(data);
      
      document.getElementById("order1").innerHTML = jsonOrder.o0.quantity + " " + jsonOrder.o0.topping;
      document.getElementById("order2").innerHTML = jsonOrder.o1.quantity + " " + jsonOrder.o1.topping;
      document.getElementById("order3").innerHTML = jsonOrder.o2.quantity + " " + jsonOrder.o2.topping;
      });
      
  });