$(document).ready(function(){
      $('.slider').bxSlider();
});

function expandfullscreenmenu(action){ //param: 'open', 'close', or empty to toggle menu state
  var togglebox = document.getElementById("togglebox")
  var newstate = (action == 'open')? true : (action == 'close')? false : !togglebox.checked
  togglebox.checked = newstate
}

jQuery(function($){
   $("#phone1").mask("9(999) 999-9999");
$("#phone2").mask("9(999) 999-9999");
$("#phone3").mask("9(999) 999-9999");
$("#phone4").mask("9(999) 999-9999");
$("#phone5").mask("9(999) 999-9999");
   });
