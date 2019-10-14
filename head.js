
const head = function(arr) {
  return arr[0];
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  }
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
