/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // Your code here
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const [year, month, day] = date.split("/");
  const monthName = months[parseInt(month) - 1];
  const intDay = parseInt(day);
  let dayName = "";
  if (intDay === 1) {
    dayName = "1st";
  } else if (intDay === 2) {
    dayName = "2nd";
  } else if (intDay === 3) {
    dayName = "3rd";
  } else {
    dayName = `${intDay}th`;
  }

  return `${monthName} ${dayName}, ${year}`
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
