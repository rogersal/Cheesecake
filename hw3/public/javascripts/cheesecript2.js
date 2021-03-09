/** 
$(document).ready(function(){
    $(".dropbtn").click(function(){
      const month = document.querySelectorAll('input[name="month"]')
      let monthSelected;
      for(const mon of month){
        if(month.checked){
          monthSelected = month.value;
          break;
        }
      }
      $("#dropbtn").val() = monthSelected;
    });
  });
  //Month selector function
*/
eventHandler - function(){//Source: Peter Mohammadi
  $(document).ready(function(){
    $('#Place Order').click(vegone);
    $("a").click(monthClick)
  });
  function monthClick(){
    $(".dropbtn:first-child").html($(this).text());
    
    $.post('/orders',{month:$(this).text()},
      function (order, status) {
        var i = 0;
        while(i<3){
          var amount = order[i].quantity;
          var topping = order[i].topping;
          var ID = "order" + i;
  
          converted = JSON.stringify(amount + " " + topping);
          parse = JSON.parse(converted);
          document.getElementById(ID).innerHTML = parse;
          i++;
          //increment order
        }
      }
    )
  }}
$(function(){
    $("o").click(eventHandler);
  });
  

