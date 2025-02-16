/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    const remainderArray = [];
    let num = x;
    let palindrome = 0;

    while (num > 0) {
        remainderArray.push(Math.floor(num % 10));
        num = Math.floor(num / 10);
    }

    for (let i = 0; i < remainderArray.length; i++) {
        palindrome += remainderArray[i] * 10 ** (remainderArray.length - 1 - i);
    }

    return palindrome === x;
};