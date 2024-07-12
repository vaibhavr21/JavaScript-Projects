let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");
let ampmContainer = document.querySelector(".ampm"); // added a new container for AM/PM

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;  //  0 : 45 : 10  -> 00 : 45 : 10 
}

function updateClock() {
    const today = new Date();
    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];

    let hours = today.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12; // convert to 12-hour format
    hours = hours === 0 ? 12 : hours; // 0 becomes 12
    hours = formatTime(hours);

    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = ` <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;   

    hoursContainer.textContent = hours + " : ";
    minutesContainer.textContent = minutes + " :";
    secondsContainer.textContent = seconds;
    ampmContainer.textContent = ampm; // display AM/PM
}

setInterval(updateClock, 1000);