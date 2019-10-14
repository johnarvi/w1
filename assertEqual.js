// test 1
// const sum = function(a, b) {
//   return a * b;
// }

// console.assert(sum(1, 2) === 3);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log('❌️❌️❌️Assertion Failed: ' + actual + ' !== ' + expected);
  } else {
    console.log('✔️ ✔️ ✔️ Assertion Passed: ' + actual + ' === ' + expected);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
