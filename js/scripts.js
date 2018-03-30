// USER INTERFACE
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var english = $("input#numbers").val();
    var result = "";
    var num = parseInt(english);
    if (num %3==0) {
      result = "I'm sorry, Dave. I'm afraid I can't do that.";
    }else if (english.search("1") != -1) {
      result = "Boop! . . .";
    } else if (english.search("0") != -1) {
    result = "Beep! . . .";
    }else {
      result = num;
    }
    alert(result);
  });
})
