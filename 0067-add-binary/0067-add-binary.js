/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = '';
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let carry = 0;

    while (aIndex >= 0 || bIndex >= 0 || carry) {
        let sum = carry;

        if (aIndex >= 0) {
            sum += a[aIndex] === '1' ? 1 : 0;
            aIndex--;
        }

        if (bIndex >= 0) {
            sum += b[bIndex] === '1' ? 1 : 0;
            bIndex--;
        }

        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }

    return res;
};
