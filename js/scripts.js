// USER INTERFACE
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var english = parseInt($("input#numbers").val());
    var result = "";
    if (english===0) {
      result = "Beep! . . .";
    }else if (english===1){
      result = "Boop! . . .";
    }
    // }else if (inputEnglish===%3){
    // return "I'm sorry, Dave. I'm afraid I can't do that."(inputEnglish);
    // var output = return;
    alert(result);
  });
})
