var saveButton = document.querySelector(".saveBtn");

//displaying the current date
var currentDay = $("#currentDay");

function displayDate() {
    var today = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(today);
}

// function time-block to color code current hour, future hour and past hour
function timeBlockColor() {
    var hour = moment().hour();

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour === hour) {
            $(this).addClass("present");
        } else if (currentHour > hour) {
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

