// this map function takes in 2 arguments 1) array to map and 2) callback function
// should return the altered array

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

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

module.exports = map;