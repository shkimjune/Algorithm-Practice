/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let res = 0;
    let count = 32;

    while (count > 0) {
        count--;
        res *= 2;
        res += n & 1;
        n = n >> 1;
    }

    return res;    
};