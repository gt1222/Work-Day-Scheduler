//displaying the current date from moment.js
var currentDay = $("#currentDay");

function displayDate() {
    var today = moment().format("dddd, MMMM Do YYYY");
    currentDay.text(today);
    console.log(today);
}

// function time-block to color code current hour, future hour and past hour
function timeBlockColor() {
    var currentHour = moment().hour();
    console.log(currentHour);

    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id"));
        // console.log(this);

        if (hour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");

        } else if (hour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

        }
    })
}

//to get info from local storage I loop through each time and get the input value and render to page
function getInput() {
    $(".hour").each(function() {
        var time = $(this).text();
        // console.log(time)
        var getInput = localStorage.getItem(time);
        // console.log(getInput);

        if(getInput !== null) {
            $(this).siblings(".description").val(getInput);
        };
    });
}

//when the save button is clicked, the key and value are saved to local storage so time and the task
$(".container").on("click", ".saveBtn", function(event) {
    event.preventDefault()

    var time = $(this).siblings(".hour").text()
    var task = $(this).siblings(".description").val()

    localStorage.setItem(time, task)
    getInput();
});

//call functions so it would run
displayDate();
timeBlockColor();
getInput();
