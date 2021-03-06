const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findkey = function(object, callback) {
  const key = Object.keys(object);
  for (let item of key) {
    if (callback(object[item])) {
      return item;
    }
  }
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const test1 = findkey(obj, x => x.stars === 2);
console.log(test1);

const test2 = findkey(obj, x => x.stars === 7);
console.log(test2);

const test3 = findkey(obj, x => x.stars === 't');
console.log(test3);

const test4 = findkey(obj, x => x.stars === 1);
console.log(test4);