const TimeBlocksList = document.getElementById("TimeBlocksList");
const CurrentDateP = document.getElementById("CurrentDateP");

// Get Current Time and display it every second
function GetTime() {
    var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    CurrentDateP.innerHTML = CurrentDate;
    CurrentDateP.innerHTML = "Current date: " + CurrentDate;
}
setInterval(GetTime, 1000);

// Temporary timeblocks that need to be removed later
let timeblocks = [
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
    "8 pm",
    "9 pm"
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



// setInterval(GenerateTimeBlocks, 1000);

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

function UpdateTimeBlocks() {
    var GetCurrentHR = moment().format('h a');
    var CurrentHour = moment(GetCurrentHR, 'h a');
    var Descriptions = document.getElementsByClassName('description')
    
    for (var i = 0; i < Descriptions.length; i++) {
        var TimeBlock = moment(timeblocks[i], 'h a'); // 1pm
        if (CurrentHour.isSame(TimeBlock) === true) {
            Descriptions[i].classList.add('present')
            Descriptions[i].classList.remove('future')
            Descriptions[i].classList.remove('past')
        } else if (CurrentHour.isBefore(TimeBlock) === true) {
            Descriptions[i].classList.add('future')
            Descriptions[i].classList.remove('past')
            Descriptions[i].classList.remove('present')
        } else if (CurrentHour.isBefore(TimeBlock) === false) {
            Descriptions[i].classList.add('past')
            Descriptions[i].classList.remove('future')
            Descriptions[i].classList.remove('present')
        }
    }
} 

UpdateTimeBlocks()

setInterval(UpdateTimeBlocks, 10000);