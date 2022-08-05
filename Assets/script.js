var saveButton = document.querySelector(".saveBtn");
var description = document.querySelector(".description");

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
        console.log(this);

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


//local storage
// function saveInput() {
//     var taskInput = {
//         task: description.value,
//     };
//     localStorage.setItem("taskInput", JSON.stringify(taskInput));
//     description.textContent = taskInput
// }

// saveButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var task = document.querySelector(".description").value;
//     localStorage.setItem("task", task);
//     taskEntered();
// });


// var task = localStorage.getItem("task");
// description.textContent = task;

// saveButton.addEventListener("click", function(event) {
//     event.preventDefault(),

//     task = document.querySelector(".description");

//     localStorage.setItem("task", description)
// })

// 
// function saveInput () {
//     var task = document.querySelector(".description").value;
//     localStorage.setItem("task", task);
// }

// saveButton.addEventListener("click", function(event){
//     event.preventDefault();
//     saveInput();
// })

displayDate();
timeBlockColor()

