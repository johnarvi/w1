// const assertArraysEqual = function(arr1, arr2, expected) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✔️ ✔️ ✔️ Assertion Passed: ${eqArrays(arr1, arr2)} === ${expected}`);
//   } else {
//     console.log(`❌️❌️❌️Assertion Failed: ${eqArrays(arr1, arr2)} !== ${expected}`);
//   }
// };

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (typeof(arr1[i]) !== typeof(arr2[i]) || arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);