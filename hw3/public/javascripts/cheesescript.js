
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
});
// Vegan/ Order Submit function




