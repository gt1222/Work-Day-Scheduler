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

$(".container").on("click", ".saveBtn", function(event){
    event.preventDefault();

    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();

    localStorage.setItem(time, task
    getInput();
});

// // saves input to local storage
// function saveInput() {
//     var task = document.querySelector(".description").value;
//     localStorage.setItem("task", task);
// }

// // gets input from local storate and create text content on screen
// function getInput() {
//     var getInput = localStorage.getItem("task");
//     description.textContent = getInput; 
// }
//save button so when I refresh the data stays on the screen and runs save input and get input



displayDate();
timeBlockColor();
getInput();
