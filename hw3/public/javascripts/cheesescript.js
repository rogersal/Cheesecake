
  $(document).ready(function(){
    $("button").click(function(){
      const rbs = document.querySelectorAll('input[name="Topping"]')
      let selected;
      for(const rb of rbs){
        if(rb.checked){
          selected = rb.value;
          break;
        }
      }
      $("form").hide();
      $("textarea").hide();
      $("p").hide();

      var vegan = $.trim($("#Inst").val());
      if(vegan == "vegan"){
        alert("Cheesecakes contain dairy :( ");
      }
      else{
        alert("Thank You!\nYour Order has been Placed: \n" + $("#quan").val() + " " + selected + " Cheesecake(s)");
    }
  });
});



