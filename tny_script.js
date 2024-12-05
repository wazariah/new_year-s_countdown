"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Azariah
   Date: 11/4/2024

*/

// Call the function to run the and display the countdown clock 
runClock();
setInterval("runClock()", 1000);

// Function to create and run the countdown clock 
function runClock() {
// Variable to store the current date and time
let currentDay = new Date();
let dateStr = currentDay.toLocaleDateString();
let timeStr = currentDay.toLocaleTimeString();

// Display the current date and time 
document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

// Calculate the days until the next January 1st
let newYear = new Date("January 1, 2018");
let nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
let daysLeft = (newYear - currentDay)/(1000*60*60*24);
// Calculate the hours left in the current day 
let hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
// Calculate the minutes and seconds left in the current hour
let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
let secsLeft = (minsLeft - Math.floor(minsLeft))*60;

// Display the time left until New Year's Eve
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}