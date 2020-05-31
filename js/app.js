$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
        
    if ($('#code-yes').prop('checked')) {
      
      $("#question-two").show();
    
    } else {
      
      $("question-two").hide();

    }
  });

  $("form#form-two").submit(function(event) {
    event.preventDefault();

    if ($('#ordinary-dislike').prop('checked')) {
      
      $("#question-three").show();
    
    } else {
      
      $("#question-three").hide();
    
    }
  });
});