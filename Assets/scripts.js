const TimeBlocksList = document.getElementById("TimeBlocksList");
const CurrentDateP = document.getElementById("CurrentDateP");

// Get Current Time and display it every second
function GetTime() {
    var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    CurrentDateP.innerHTML = CurrentDate;
    CurrentDateP.innerHTML = "Current date: " + CurrentDate;
}
setInterval(GetTime, 1000);



// Get Current Time and display it every second
function GetHour() {
    var CurrentHour = moment().format('h a');
    console.log(CurrentHour);
}
setInterval(GetHour, 1000);


// Temporary timeblocks that need to be removed later
var timeblocks = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
]

GetHour()
GenerateTimeBlocks();

function GenerateTimeBlocks() {
    TimeBlocksList.innerHTML = "";

    for (var i = 0; i < timeblocks.length; i++) {
        // Change this to timeblocks you get from moment.js
        var RowHour = timeblocks[i];

        var row = document.createElement("div");
        row.classList.add("row");
        TimeBlocksList.appendChild(row);

        var hour = document.createElement("div");
        hour.innerHTML = RowHour;
        hour.classList.add("hour");
        row.appendChild(hour);

        var textarea = document.createElement("textarea");
        textarea.placeholder = "Enter your text here";
        // Add if statement here
        textarea.classList.add("past");
        row.appendChild(textarea);

        var saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("saveBtn");
        // Event listner does not work for some reason!
        // saveBtn.addEventListener("click", alert("The index is: " + i + ". The hour is: " + RowHour));
        row.appendChild(saveBtn);
    }
}