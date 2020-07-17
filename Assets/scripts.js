const TimeBlocksList = document.getElementById("TimeBlocksList");
const CurrentDateP = document.getElementById("CurrentDateP");

// Get Current Time and display it every second
function GetTime() {
    var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    CurrentDateP.innerHTML = CurrentDate;
    CurrentDateP.innerHTML = "Current date: " + CurrentDate;

    var CurrentHour = moment().format('h a');
}
setInterval(GetTime, 1000);

// Temporary timeblocks that need to be removed later
let timeblocks = [
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

GenerateTimeBlocks();

function GenerateTimeBlocks() {
    TimeBlocksList.innerHTML = "";

    for (var i = 0; i < timeblocks.length; i++) {
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
        textarea.setAttribute("class", "description");
        textarea.setAttribute("id", i);
        row.appendChild(textarea);

        var saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("saveBtn");
        saveBtn.setAttribute("value", i);
        row.appendChild(saveBtn);
    }
}

$(document).on('click','.saveBtn',function(){
    var SaveBtnValue = $(this).val();
    var desctiption = document.getElementById(SaveBtnValue).value;
    localStorage.setItem(SaveBtnValue, desctiption);
});

function GetStoredNotes() {
    for (var i = 0; i < timeblocks.length; i++) {
        var GetStoreNotes = localStorage.getItem(i);
        var TextAreas = document.getElementById(i);
        TextAreas.innerText = GetStoreNotes;
    }
}

GetStoredNotes();