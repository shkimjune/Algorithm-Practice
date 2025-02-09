/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let result = n & 1;

    while(n > 1) {
        n = n >> 1;
        result += n & 1;
    }

    return result;
};