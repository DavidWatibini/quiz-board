//Busisness logic//

function calcScore(){
    var myScore = 0;
    $(".calc:checked").each(function(){
        myScore+=parseInt($(this).val(),10);
    });
    $("input[name=sum]").val(myScore)
}
$().ready(function(){
    $(".calc").change(function(){
        calcScore()
    });
});
//user interface logic//

$(document).ready(function() {
  $("#show").click(function() {
    $(".container").show();
    $(".login").hide();
  });
});

$(document).ready(function(){
    $("#show").click(function(){
        $(".container").animate({
            left: '40px',
            opacity:0.9

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

//function result() {
  //var sides = [];
  //sides.push(document.getElementById("full-names").value);
  //sides.push(document.getElementById("email-address").value);
  //var [a, b] = sides;
  //var display = document.getElementById("display");

  //if (a.length === 0 || b.length === 0 || c.length === 0) {
    //alert("Please fill in all fields");
    //confirm("Click on help for more information")
  //}
