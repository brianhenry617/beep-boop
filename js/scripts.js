// USER INTERFACE
$(document).ready(function() {
  $("form#inputEnglish").submit(function(event) {
    event.preventDefault();
    var english = $("input#inputEnglish").val();
    english = english.toUpperCase();
});
});
    $("#result").show();
        $("#output").text(output);
        //hides result with click
        $("#inputEnglish").click(function(){
            $("#beepBoop").fadeOut("slow");

          });
