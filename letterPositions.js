const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  let letterIndices = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (letterIndices[sentence[i]]) {
        letterIndices[sentence[i]].push(i);
      } else {
        letterIndices[sentence[i]] = [];
        letterIndices[sentence[i]].push(i);
      }
    }
  } return letterIndices;
};

// const testResult = letterPositions('hello');

// assertArraysEqual(testResult["h"],[0]);
// assertArraysEqual(testResult["e"],[1]);
// assertArraysEqual(testResult["l"],[2,3]);
// console.log("Test result object", testResult);
// assertArraysEqual(testResult["o"],[4]);

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;