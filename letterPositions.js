const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (typeof(arr1[i]) !== typeof(arr2[i]) || arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

const testResult = letterPositions('hello');

assertArraysEqual(testResult["h"],[0]);
assertArraysEqual(testResult["e"],[1]);
assertArraysEqual(testResult["l"],[2,3]);
console.log("Test result object", testResult);
assertArraysEqual(testResult["o"],[4]);

assertArraysEqual(letterPositions("hello").e, [1]);

