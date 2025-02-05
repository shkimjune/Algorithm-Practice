/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolMap = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    let res = null;

    for (let i = 0; i < s.length - 1; i++) {
        if (symbolMap.get(s[i]) < symbolMap.get(s[i + 1])) {
            res -= symbolMap.get(s[i]);
        } else {
            res += symbolMap.get(s[i]);
        }
    }

    return res + symbolMap.get(s[s.length - 1]);
};