var time = moment()
var eventInput
var eventTime

// date and time
$("#currentDay").text(moment().format('MMMM Do YYYY, HH:mm A'));



// changes the color of time blocks
$(document).ready( function() {
    colorChange ();
    renderText();
});


// when the time changes so does the time blocks
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

// save button to localStorage
$(".saveBtn").click(function() {
    eventInput = $(this).siblings(".input").val();
    console.log(eventInput);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventInput));

    colorChange ();
    renderText ();
})


// saves and displays users inputs
function renderText () {   
    var saveEventInput5 = JSON.parse(localStorage.getItem("5:00 AM"));
    $("#5").val("");
    $("#5").val(saveEventInput5)

    var saveEventInput6 = JSON.parse(localStorage.getItem("6:00 AM"));
    $("#6").val("");
    $("#6").val(saveEventInput6)

    var saveEventInput7 = JSON.parse(localStorage.getItem("7:00 AM"));
    $("#7").val("");
    $("#7").val(saveEventInput7)

    var saveEventInput8 = JSON.parse(localStorage.getItem("8:00 AM"));
    $("#8").val("");
    $("#8").val(saveEventInput8)

    var saveEventInput9 = JSON.parse(localStorage.getItem("9:00 AM"));
    $("#9").val("");
    $("#9").val(saveEventInput9)

    var saveEventInput10 = JSON.parse(localStorage.getItem("10:00 AM"));
    $("#10").val("");
    $("#10").val(saveEventInput10)

    var saveEventInput11 = JSON.parse(localStorage.getItem("11:00 AM"));
    $("#11").val("");
    $("#11").val(saveEventInput11)
    
    var saveEventInput12 = JSON.parse(localStorage.getItem("12:00 PM"));
    $("#12").val("");
    $("#12").val(saveEventInput12)

    var saveEventInput1 = JSON.parse(localStorage.getItem("1:00 PM"));
    $("#13").val("");
    $("#13").val(saveEventInput1)

    var saveEventInput2 = JSON.parse(localStorage.getItem("2:00 PM"));
    $("#14").val("");
    $("#14").val(saveEventInput2)

    var saveEventInput3 = JSON.parse(localStorage.getItem("3:00 PM"));
    $("#15").val("");
    $("#15").val(saveEventInput3)

    var saveEventInput4 = JSON.parse(localStorage.getItem("4:00 PM"));
    $("#16").val("");
    $("#16").val(saveEventInput4)

}