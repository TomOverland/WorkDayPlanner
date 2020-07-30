let = myDay = [
    {
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: ""
    },
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        meridiem: "pm",
        reminder: ""
    }
];

//obtains current date for the header
function getHeaderDate() {
    let currentHeaderDate = moment().format('dddd, MMMM Do');
    $("currentDay").text(currentHeaderDate);
};

//displays information from localStorage
function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
};

//Checks if localStorage data exists
function init() {
    let storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();
};

getHeaderDate();

//generates the schedule body by changing html and css elements
myDay.forEach(function(thisHour) {
    //creates rows for the hours
    let hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);
    //Changes the time div
    let hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
        });
})
