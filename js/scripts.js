// USER INTERFACE
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var english = $("input#numbers").val();
    var result = "";
    var num = parseInt(english);
    if (english.search("0") != -1) {
      result = "Beep! . . .";
    }else if (english.search("1") != -1) {
      result = "Boop! . . .";
    } else if (num %3==0) {
      result = "I'm sorry, Dave. I'm afraid I can't do that.";
    }else {
      result = num;

    }
    // }else if (inputEnglish===%3){
    // return "I'm sorry, Dave. I'm afraid I can't do that."(inputEnglish);
    // var output = return;
    alert(result);
  });
})
