const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// //console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
// const words = ["hello", "world", "lighthouse"];

// without(["hello", "world", "lighthouse"], ["lighthouse"]);

// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;