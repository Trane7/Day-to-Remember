var time = moment()


$("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm tt'));




$(document).ready( function() {
    colorChange ();
    renderText();
});


function colorChange () {
    
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);

$(".input").each(function () {
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);

    if (currentTime > scheduledTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (currentTime < scheduledTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    } else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
  });
}


var eventInput
var eventTime

$(".saveBtn").click(function() {
    eventInput = $(this).siblings(".input").val();
    console.log(eventInput);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventInput));

    colorChange ();
    renderText ();
})





function renderText () {   
    var saveEventInput5 = JSON.parse(localStorage.getItem("5:00 AM"));
    $("#5").val("");
    $("#5").val(saveEventInput5);

}