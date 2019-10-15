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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const inArray = function(number, array) {
  return array.indexOf(number) > -1;
};

const without = function(source, itemsToRemove) {
  let output = source;
  for (let j = 0; j < itemsToRemove.length; j++) {
    if (inArray(itemsToRemove[j], output)) {
      output.splice(output.indexOf(itemsToRemove[j]), 1);
    }
  } return output;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
//console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
const words = ["hello", "world", "lighthouse"];

without(["hello", "world", "lighthouse"], ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
