//Busisness logic//

function calcScore() {
  var myScore = 0;
  $(".calc:checked").each(function() {
    myScore += parseInt($(this).val(), 10);
  });
  $("input[name=sum]").val(myScore)
}
$().ready(function() {
  $(".calc").change(function() {
    calcScore()
  });
});

function reset() {
  location.reload();
}
//user interface logic//

$(document).ready(function() {
  $("#show").click(function() {
    $(".container").show();
    $(".login").hide();
  });
});

$(document).ready(function() {
  $("#show").click(function() {
    $(".container").animate({
      left: '40px',
      opacity: 0.9

    });
  });
});

$(document).ready(function() {
  $("#showTest p").click(function() {
    $(".questions").show();
    $("questions").slideUp()
  });
});

$(document).ready(function() {
  $("#myScore").click(function() {
    $(".questions").hide();
    $("#showTest").hide();
    $(".myScore").show();
  });
});
