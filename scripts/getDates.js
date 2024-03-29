document.querySelector("#year").innerHTML = "2023";
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
const d = new Date();
// const dayName = daynames[d.getDay()];
// const monthName = months[d.getMonth()];
// const year = d.getFullYear();
lastModified.innerHTML = `Last Modification: ${d.getDay()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

// console.log('year ', year)
// console.log('month', d.getMonth());
// console.log('day', d.getDay());
// console.log('month', d.getMonth());
// console.log('hour', d.getHours());
// console.log('hour', d.getMinutes());
// console.log('hour complete', d.getSeconds());

// const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// document.querySelector("#date2").textContent = fulldate;

// document.querySelector('#date').textContent = fullDate;
