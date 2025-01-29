/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const countLetters = new Map();
    let palindromeLength = 0;
    let hasOdd = false;

    for (const letter of s) {
        countLetters.set(letter, (countLetters.get(letter) || 0) + 1);
    }

    countLetters.forEach((value) => {
        if (value % 2 === 0) {
            palindromeLength += value;
        } else {
            palindromeLength += value - 1;
            hasOdd = true;
        }
    });

    return hasOdd ? palindromeLength + 1 : palindromeLength;
};
