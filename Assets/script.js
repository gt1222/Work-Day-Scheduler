var saveButton = document.querySelector(".saveBtn");

//displaying the current date
var currentDay = $("#currentDay");

function displayDate() {
    var today = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(today);
}

// function time-block to color code current hour, future hour and past hour
function timeBlockColor() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id"));

        if (hour === currentHour) {
            $(this).addClass("present");
        } else if (hour > currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    })
}

//local storage
// saveButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var task = 


// };

displayDate();
timeBlockColor()

