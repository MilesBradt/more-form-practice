$(document).ready(function() {
  $(".userInfo").submit(function(event) {
    var userName = $("input#userName").val();
    var userDescription = $("input#userDesc").val();
    var userDate = $("input#userDate").val();
    var userTimeStart = $("input#userTimeStart").val();
    var userTimeEnd = $("input#userTimeEnd").val();


    $(".added").fadeIn(600);
    $(".added").fadeOut(1);
    $(".display").fadeIn(600);
    $("#name").text(userName);
    $("#desc").text(userDescription);
    $("#date").text(userDate);
    $("#time-start").text(userTimeStart);
    $("#time-end").text(userTimeEnd);
    event.preventDefault();
  });
});
