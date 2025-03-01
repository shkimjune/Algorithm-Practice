/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let left = 0;
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }

        charMap.set(s[right], right);

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};