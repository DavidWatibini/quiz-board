function calcscore(){
    var score = 0;
    $(".calc:checked").each(function(){
        score+=parseInt($(this).val(),10);
    });
    $("input[name=sum]").val(score)
}
$().ready(function(){
    $(".calc").change(function(){
        calcscore()
    });
});

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
  $("#show-test p").click(function() {
    $(".questions").show();
    $("questions").slideup()
  });
});
