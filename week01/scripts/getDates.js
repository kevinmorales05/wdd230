document.querySelector("#year").innerHTML = "2024";
const lastModified = document.querySelector("#lastModified");

// Long hand method ... building day and month names from built-in date methods.
const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
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
  "December",
];


var date = new Date();

var month = (date.getMonth() + 1);

month = (month < 10 ? "0" : "") + month;

var day = date.getDate();

day = (day < 10 ? "0" : "") + day;

var year = date.getFullYear();

lastModified.innerHTML = 'Last Modification: '+ month + "/" + day + "/" + year;

console.log('Date formatted ', lastModified.innerHTML);