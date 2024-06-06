const dayNameEl = document.getElementById("dayName");
const dayNumEl = document.getElementById("dayNum");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

// call on the date to let the code know what you want to work on
const date = new Date();
// convert the date to String
const monthName = date.toLocaleString("en", { month: "long" });
const dayName = date.toLocaleString("en", { weekday: "long" });

// importing the date to my HTML
monthEl.innerHTML = monthName;
dayNameEl.innerHTML = dayName;
yearEl.innerHTML = date.getFullYear();
dayNumEl.innerHTML = date.getDate();