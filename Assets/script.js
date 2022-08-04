 var currentDayEl = $("#currentDay");


 //displaying the current date
function displayDate() {
    var today = moment().format("dddd, MMMM Do YYYY");
    currentDayEl.text(today);
}
displayDate();

 