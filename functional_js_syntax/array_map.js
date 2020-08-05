// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code
const end = start.map((item, i, arr) => {
  return arr.unshift(item);
});
console.log(end);

// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

// your code
const jobs = shipMates.map((item, i, arr) => {
  return `${item[1]}: ${item[0]}`;
})

// expected output: Array ["Captain: Mal", etc...]
console.log(jobs);

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code
const evenOdd = awayTeam.map((item, i, arr) => {
  let evenOrOdd = 'odd';
  if (i % 2 === 0) {
    evenOrOdd = 'even';
  } else {
    evenOrOdd = 'odd';
  }
  return `${item}: ${evenOrOdd}`;
})

// expected output: Array: ["Picard: even", "Riker: odd", etc...]
console.log(evenOdd);

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.
const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// your code
const multiDimArr = sci_fi_shows.map((item, i, arr) => {
  return [`${item}, ${i}`];
})

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]
console.log(multiDimArr);

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const sci_fi_shows = [1, 2, 3, 4]

// your code
const innerArr = function ()
const arrOfArrs = sci_fi_shows.map((item, i, arr) => {

})

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]
