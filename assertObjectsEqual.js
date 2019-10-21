const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// // preliminary testing
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);

// // 2nd test
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);

// var word = new String('hello');

module.exports = assertObjectsEqual;