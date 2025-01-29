/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const countLetters = new Map();
    let palindromeLength = 0;

    for(const letter of s) {
        countLetters.set(letter, (countLetters.get(letter) || 0) + 1);
    }

    let longestOddLetter = '';

    countLetters.forEach((value, key) => {
        if (value % 2 === 0) {
            palindromeLength += value;
        } else {
            palindromeLength += value - 1;

            if (longestOddLetter === '' || 
                countLetters.get(key) > countLetters.get(longestOddLetter)) {
                longestOddLetter = key;
            }
        }
    });

    return longestOddLetter === '' ? palindromeLength
        : palindromeLength + 1;
};