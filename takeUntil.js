const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

// takes a slice of the array with elements taken from the beginning until  callback/predicate returns a truthy value

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};


// //test 1
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// // console.log(results1);

// console.log('---');

// //test 2
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // console.log(results2);
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;