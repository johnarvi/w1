const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  let arrTail = arr.slice(1);
  return arrTail;
};

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 'Labs');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const words = ["Yo Yo"];
//const words = [];
// console.log(tail(words));
//assertEqual(words.length, 3);
