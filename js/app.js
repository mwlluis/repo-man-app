// Business logic for determining character


// User Interface Logic

$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
        
    if ($('#code-yes').prop('checked')) {
      
      $("#question-two").show();
    
    } else if ($('#cosmos').prop('checked')) {

      $("#question-miller-one").show();

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

  $("form#form-three").submit(function(event) {
    event.preventDefault();

    if ($('#commission-agree').prop('checked')) {

      $("#question-four").show();

    } else {

      $("question-four").hide();

    }
  });

  $("form#form-four").submit(function(event) {
    event.preventDefault();
    
    if ( $('#code-yes').prop('checked') && $('#ordinary-dislike').prop('checked') 
    && $('#commission-agree').prop('checked') && $('#goes-down-here').prop('checked') ) {

      // $(location).attr('href', './links/bud.html');
      window.open('./links/bud.html', "_blank");

    } else {
      
      console.log("it didn't work");
    }
    
  });
 
});