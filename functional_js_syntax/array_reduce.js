// 1. Take this disjointed sentence and turn it into a single string
const text = [
  'The ships',
  'hung in the sky,',
  'much the way',
  'that bricks don`t',
];

// Your Code Here
const reducedText = text.reduce((accum, next) => `${accum} ${next}`);

// expected output: "The ships hung in the sky, much the way that bricks don't"
console.log(reducedText);

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
  {
    team: 'A',
    score: 20,
  },
  {
    team: 'B',
    score: 17,
  },
  {
    team: 'C',
    score: 23,
  },
  {
    team: 'D',
    score: 13,
  },
];

// Your Code Here
const winner = scores.reduce((accum, next) => {
  if (accum.score > next.score) {
    return accum;
  }
  return next;
});

// expected output: "C"
console.log(winner.team);

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
  {
    name: 'Serenity',
    speed: '4.2G',
  },
  {
    name: 'Cylon Raider',
    speed: '7.5G',
  },
  {
    name: 'Swordfish II',
    speed: '50G',
  },
  {
    name: 'Tie Fighters',
    speed: '4100G',
  },
];

// Your Code Here
const fastestShip = ships.reduce((accum, next) => {
  const accumSpeed = accum.speed.substring(0, accum.speed.length - 1);
  const nextSpeed = next.speed.substring(0, next.speed.length - 1);
  let greaterSpeed = 0;
  if (parseFloat(accumSpeed) > parseFloat(nextSpeed)) {
    greaterSpeed = accum;
  } else {
    greaterSpeed = next;
  }
  return greaterSpeed;
});

// Expected output: Tie Fighters
console.log(fastestShip.name);

console.log(7.5 > 50);
