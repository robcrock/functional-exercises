// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
const goodAfternoonOrMorning = () => {
  const hour = new Date().getHours();

  const greeting = hour > 11 && hour < 19 ? 'good afternoon' : 'good morning';

  return greeting;
};

console.log(goodAfternoonOrMorning());

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------
const countDown = highestNum => {
  const countUp = [...Array(highestNum + 1).keys()];
  const countUpReversed = countUp.reverse();
  return countUpReversed;
};

console.log(countDown(10));
