$(document).ready(function(){
      $('.slider').bxSlider();
});

function expandfullscreenmenu(action){ //param: 'open', 'close', or empty to toggle menu state
  var togglebox = document.getElementById("togglebox")
  var newstate = (action == 'open')? true : (action == 'close')? false : !togglebox.checked
  togglebox.checked = newstate
}
