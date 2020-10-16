// Step 1 - Current date is displayed at the top of the calendar

// Current Date

let currentDate = moment().format('dddd, MMMM Do');
console.log(currentDate)
document.getElementById("currentDay").innerHTML = currentDate

// Step 2 - Time blocks are colour coded to display past/present/future

// Current Hour

// let currentHour = parseInt(moment().format("H"));
// console.log(currentHour)
let currentHour = 11
console.log(currentHour)

// All Hours

var hourList = [9,10,11,12,13,14,15,16,17]

// Colour Blocks Based on Current Hour

function timeColouring(){
    for (var i = 0; i < hourList.length; i++){
      if (hourList[i] < currentHour){
          document.querySelector(`#hour${hourList[i]}`).classList.add("past")
      }
      else if (hourList[i] > currentHour){
          document.querySelector(`#hour${hourList[i]}`).classList.add("future")
      }
      else {
          document.querySelector(`#hour${hourList[i]}`).classList.add("present")
      }
    }
  }
  timeColouring()

// Step 3 - When text is entered and save is clicked, store information in localstorage

// Array for Events

let savedEvents = [];


function saveEvent() {}
// Store
localStorage.setItem("lastname", "Smith");
localStorage.setItem("lastname", "Smith");

//add an event listener for when save button is clicked
//save this button in variable
var saveButton = document.getElementById("save9");
saveButton.addEventListener("click", function() {
    // localStorage.setItem();
    // console.log($("hour9"))
} )
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// s1 current date is displayed at the top of the calendar
// - done
// s2 time blocks color code to display past/present/future
// - grab current hour with moment
// - start loop
    // - if hour is > timeblock, assign past id
    // - if hour is = timeblock, assign present id
    // - if hour is < timeblock, assign future id
// s3 when text is entered and save is clicked, store information in localstorage
// - localstorage set item (hour, event)
// use jquery to grav hour in variable and store it into local storage





// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist