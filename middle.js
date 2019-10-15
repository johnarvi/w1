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

const middle = function(array) {
  let mid = [];
  let mid1 = (array.length / 2) - 1;
  let mid2 = array.length / 2;
  if (array.length < 3) {
    return mid = [];
  } else if (array.length % 2 === 0) {
    mid.push(array[mid1]);
    mid.push(array[mid2]);
  } else {
    mid.push((array[Math.ceil(mid1)]));
  } return mid;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
