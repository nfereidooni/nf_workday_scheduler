// Current Date


let currentDate = moment().format('dddd, MMMM Do');
console.log(currentDate)
document.getElementById("currentDay").innerHTML = currentDate

// Current Hour

let currentHour = parseInt(moment().format("H"));
console.log(currentHour)

// Array for Events

let savedEvents = [];

