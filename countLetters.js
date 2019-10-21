const assertEqual = require('./assertEqual');

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

module.exports = countLetters;