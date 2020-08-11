// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two
const square = x => x ** 2;
const addTwo = (n, callback) => callback(n) + 2;
// Notice how we didn't pass the argument to the callback function
console.log(addTwo(2, square));
// This will return 6

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) =>
  `${title} ${first_name} ${last_name}`;

const greeting = (title, fName, lName, callback) =>
  `Hello, ${callback(fName, lName, title)}`;

console.log(greeting('Mr.', 'Robert', 'Crocker', createFullName));

// you might notice that this function is less than ideal - that's great! We'll talk about why next
