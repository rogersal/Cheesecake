eventHandler - function(){


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
        var quan = $("#quan").val();
        $.post('/neworder',{topping: selected, quantity:quan},
        function (order, status) {
          //posts order
        });
        if(vegan == "vegan"){
          alert("Cheesecakes contain dairy :( ");
        }
        else{
          alert("Thank You!\nYour Order has been Placed: \n" + $("#quan").val() + " " + selected + " Cheesecake(s)");
      }
    });



  // Vegan/ Order Submit function




  });
}


/* POST users listing. */
router.post('/', function (req, res, next) {
    res.send(myOrder);
});
