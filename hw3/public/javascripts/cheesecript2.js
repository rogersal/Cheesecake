$(document).ready(function(){
    $("dropbtn").click(function(){
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