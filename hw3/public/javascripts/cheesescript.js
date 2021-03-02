
$(document).ready(function(){
    $("button").click(function(){// looks at what the user chose
      const rbs = document.querySelectorAll('input[name="Topping"]')
      let selected;
      for(const rb of rbs){
        if(rb.checked){
          selected = rb.value;
          break;
        }
      }
      $("form").hide();//hides bottom of page items
      $("textarea").hide();
      $("p").hide();

      var vegan = $.trim($("#Inst").val());//check if vegan
      if(vegan == "vegan"){
        alert("Cheesecakes contain dairy :( ");
      }
      else{
        alert("Thank You!\nYour Order has been Placed: \n" + $("#quan").val() + " " + selected + " Cheesecake(s)");
    }
  });

// Vegan/ Order Submit function

//$(document).ready(function(){
  $("dropbtn").click(function(){
    const month = document.querySelectorAll('input[name="month"]')
    let monthSelected;
    for(const mon of month){
      if(month.checked){
        monthSelected = month.value;
        break;
      }
    }
    //post
    //Source: https://stackoverflow.com/questions/7838238/how-to-get-id-of-clicked-element-with-jquery/7838305
    //used for creating function that reacts upon button press
    $("#dropbtn").val() = monthSelected;
    newmonth = $(this).attr("id");
    $(".dropbtn").html(function(i,origText)
    {
    return newmonth;
    });

    //Source: https://codeforgeek.com/handle-get-post-request-express-4/
    $.post({ url: "/orders",
    success: function(data){
      change_orderinfo(data);
    }
    });
    });
//});
//Month selector function






function change_orderinfo(data) {
var cherry = data.data[0].quantity;
var choco = data.data[1].quantity;
var plain = data.data[2].quantity;
//Source: https://www.w3schools.com/jquery/html_text.asp#:~:text=The%20text()%20method%20sets,content%20of%20ALL%20matched%20elements.
$("#cherryorder").text(cherry + "Cherry");
$("#chocoorder").text(choco + "Chocolate");
$("#plainorder").text(plain + "Plain");

}


});