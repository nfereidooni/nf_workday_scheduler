// Step 1 - Current date is displayed at the top of the calendar

// Current Date

let currentDate = moment().format('dddd, MMMM Do');
console.log(currentDate)
document.getElementById("currentDay").innerHTML = currentDate



// Step 2 - Time blocks are colour coded to display past/present/future

// Current Hour

let currentHour = parseInt(moment().format("H"));
console.log(currentHour)

// All Hours

var hourList = [9,10,11,12,13,14,15,16,17]

// Colour Blocks Based on Current Hour

function timeColouring(){
    for (var i = 0; i < hourList.length; i++){
      if (hourList[i] < currentHour){
          document.querySelector(`#hour-${hourList[i]}`).classList.add("past")
      }
      else if (hourList[i] > currentHour){
          document.querySelector(`#hour-${hourList[i]}`).classList.add("future")
      }
      else {
          document.querySelector(`#hour-${hourList[i]}`).classList.add("present")
      }
    }
  }
  timeColouring()



// Step 3 - When text is entered and save is clicked, store information in local storage

// Save Event Function

function saveEvent(btnElement) {
    let num = btnElement.id.split("-")[1]
    let text = $('#hour-' + num).val()
    localStorage.setItem('#hour-' + num, text)
    let temp;
}

// Retrieve/Display Event Function
  
  function displayEvent() {
    for (let i = 0; i < hourList.length; i++){  
    document.querySelector(`#hour-${hourList[i]}`).value = localStorage.getItem(`#hour-${hourList[i]}`)
    }
  }
  displayEvent()
  

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
// - use jquery to grav hour in variable and store it into local storage
// - add an event listener for when save button is clicked
// - save this button in variable

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist