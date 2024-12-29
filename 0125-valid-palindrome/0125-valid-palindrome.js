/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const nonSpaces = s.split(' ').join(' ');

  if (nonSpaces.length === 0) {
      return true;
  }

  const filterStrings = [];

  for (const word of nonSpaces.toLowerCase()) {
      if ((word.charCodeAt() < 97 || word.charCodeAt() > 122) &&
      (word.charCodeAt() < 48 || word.charCodeAt() > 57)) {
          filterStrings.push(word);
      }
  }

  const onlyAlphabetArray = nonSpaces.toLowerCase().split('').map((word) => {
      if (!filterStrings.includes(word)) {
          return word
      }
  }).filter((e) => e !== undefined);

  for (let i = 0; i < Math.floor(onlyAlphabetArray.length/2); i++) {
      if (onlyAlphabetArray[i] !== onlyAlphabetArray[onlyAlphabetArray.length - 1 - i]) {
          return false;
      }
  }

  return true;
};
