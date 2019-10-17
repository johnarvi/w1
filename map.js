// this map function takes in 2 arguments 1) array to map and 2) callback function
// should return the altered array

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test 1
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// test 2
// const array1 = [1, 4, 9, 16]
// const map1 = array1.map(x => x * 2);
// assertArraysEqual(map1, [2, 8, 18, 32]);

// test 3
// const numbers = [1, 4, 9];
// const roots = numbers.map(num => Math.sqrt(num));
// assertArraysEqual(roots, [1, 2, 3]);