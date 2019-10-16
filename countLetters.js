const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const counts = {};
  for (let letter of string) {
    if (letter !== ' ') { //could use the ascii method to ensure all 'letters' fall between asci code for lower case and upper case (charCodeAt and String.GetChar...)
      if (counts[letter]) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  } return counts;
};

console.log(countLetters("lighthouse in the house"));
/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/