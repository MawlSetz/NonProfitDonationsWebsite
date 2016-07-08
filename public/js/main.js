
$(document).ready(function(){
  $("#button").click(function() {
      $('html, body').animate({
          scrollTop: $("#donate").offset().top
      }, 2000);
  });
});
