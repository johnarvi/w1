const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const key = Object.keys(object);
  for (let item of key) {
    if (callback(object[item])) {
      return item;
    }
  }
};

// const obj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// const test1 = findKey(obj, x => x.stars === 2);
// console.log(test1);

// const test2 = findKey(obj, x => x.stars === 7);
// console.log(test2);

// const test3 = findKey(obj, x => x.stars === 't');
// console.log(test3);

// const test4 = findKey(obj, x => x.stars === 1);
// console.log(test4);

module.exports = findKey;