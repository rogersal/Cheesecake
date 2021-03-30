//Author NoahLaFave from HW3, Functions to send posts for an order for use in HW 5
function veganFunction() {
    alert("Cheese cake is dairy idk maybe try and avoid cheese");
    return;
  }
  
  function orderFunction() {
    var notes = document.getElementById("Text").value;
    if ( notes.includes("vegan") ){
      veganFunction();
    }
    else{
    
    if( document.getElementById("Plain").checked ) {
     var type = "plain";
    }
    else if ( document.getElementById("Chocolate").checked ){
     var type = "chocolate";
    }
    else if ( document.getElementById("Cherry").checked ){
     var type = "cherry";
    }
    else{
     alert("please select a type"); 
     return;
    }
  
    var quant = document.getElementById("amount").value
      $("#form1").hide()
      $("#order").hide();
    document.getElementById("postText").innerHTML = "Order has been placed. <br>Order: " + quant + " " + type + " Cheesecake";
    


    $.post('/neworder',{type: type, quant:quant, notes:notes},
    function (order, status) {
      //posts order
    });
    





  }//end else

}//end funct