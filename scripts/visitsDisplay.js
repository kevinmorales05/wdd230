// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector("#visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.



function getDaysBetweenDates(date1, date2) {
	const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
	const diffInTime = date2.getTime() - date1.getTime();
	return Math.round(diffInTime / oneDay);
}

// Get the current date
const currentDate = new Date();
console.log(currentDate)

// Get the last visit date from localStorage
const lastVisitDateStr = localStorage.getItem('lastVisitDate');
const visitsStatus = document.querySelector('#visitsStatus');

if (lastVisitDateStr) {
	const lastVisitDate = new Date(lastVisitDateStr);
	const daysBetween = getDaysBetweenDates(lastVisitDate, currentDate);

	if (daysBetween < 1) {
		visitsStatus.textContent = 'Back so soon! Awesome!';
	} else if (daysBetween === 1) {
		visitsStatus.textContent = 'You last visited 1 day ago.';
	} else {
		visitsStatus.textContent = `You last visited ${daysBetween} days ago.`;
	}
} else {
	visitsStatus.textContent = 'Welcome! Let us know if you have any questions.';
}

// Store the current date as the last visit date in localStorage
localStorage.setItem('lastVisitDate', currentDate.toISOString());