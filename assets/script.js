// This makes it so the javascript doesn't run until the html page is loaded
$(document).ready(function () {
  // Variable that allows me to loop through planner
  let planner = [
    {
      id: "0",
      hour: "09",
      time: "09",
      meridiem: "am",
      reminder: "",
    },
    {
      id: "1",
      hour: "10",
      time: "10",
      meridiem: "am",
      reminder: "",
    },
    {
      id: "2",
      hour: "11",
      time: "11",
      meridiem: "am",
      reminder: "",
    },
    {
      id: "3",
      hour: "12",
      time: "12",
      meridiem: "pm",
      reminder: "",
    },
    {
      id: "4",
      hour: "01",
      time: "13",
      meridiem: "pm",
      reminder: "",
    },
    {
      id: "5",
      hour: "02",
      time: "14",
      meridiem: "pm",
      reminder: "",
    },
    {
      id: "6",
      hour: "03",
      time: "15",
      meridiem: "pm",
      reminder: "",
    },
    {
      id: "7",
      hour: "04",
      time: "16",
      meridiem: "pm",
      reminder: "",
    },
    {
      id: "8",
      hour: "05",
      time: "17",
      meridiem: "pm",
      reminder: "",
    },
  ];

  // gets data for the header date
  function headerDate() {
    let currentHeaderDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentHeaderDate);
  }

  // saves data to localStorage
  function saveReminders() {
    localStorage.setItem("planner", JSON.stringify(planner));
  }

  // displays any text that the user has saved to localStorage
  function displayReminders() {
    planner.forEach(function (_thisHour) {
      $(`#${_thisHour.id}`).val(_thisHour.reminder);
    });
  }

  // Gets items from localStorage, then runs the saveReminders to save any new reminders, and also runs the displayReminders to show any existing
  function startScheduler() {
    let storedDay = JSON.parse(localStorage.getItem("planner"));

    if (storedDay) {
      planner = storedDay;
    }

    saveReminders();
    displayReminders();
  }

  // displays the current date on the header
  headerDate();

  // This changes the HTML to style the scheduler, one col for hours, one col for input, and one col for saving
  planner.forEach(function (thisHour) {
    // Creates the row that time cols go into
    let hourRow = $("<form>").attr({
      class: "row",
    });
    $(".container").append(hourRow);

    // Creates the cols for times
    let hourField = $("<div>")
      .text(`${thisHour.hour}${thisHour.meridiem}`)
      .attr({
        class: "col-md-2 hour",
      });

    // creates schdeduler data
    let hourPlan = $("<div>").attr({
      class: "col-md-9 description p-0",
    });
    let planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
      planData.attr({
        class: "past",
      });
    } else if (thisHour.time === moment().format("HH")) {
      planData.attr({
        class: "present",
      });
    } else if (thisHour.time > moment().format("HH")) {
      planData.attr({
        class: "future",
      });
    }

    // creates save button using save icon from font awesome
    let saveButton = $("<i class='far fa-save fa-lg'></i>");
    let savePlan = $("<button>").attr({
      class: "col-md-1 saveBtn",
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
  });

  // loads any existing localstorage data after components created
  startScheduler();

  // saves data to be used in localStorage
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let saveIndex = $(this)
      .siblings(".description")
      .children(".future")
      .attr("id");
    planner[saveIndex].reminder = $(this)
      .siblings(".description")
      .children(".future")
      .val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
  });
});
