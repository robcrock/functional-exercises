/* eslint-disable no-param-reassign */
const greet = (name, greeting = 'Hello, ') => (greeting += name);

// this code could be problematic because greeting is in the global scope.
// We could not use the greeting a second time, because the greeting variable is changed to contain the name

console.log(greet('Arthur.'));
console.log(greet('Arthur.'));
// expected output:
//  Hello, Arthur.
//  Hello, Arthur.
