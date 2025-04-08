/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 0) {
        return "";
    }

    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < s.length; i++) {
        for (const j of [i, i + 1]) {
            let left = i;
            let right = j;

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            if (right - left - 1 > endIndex - startIndex) {
                startIndex = left + 1;
                endIndex = right - 1;
            }
        }
    }

    return s.slice(startIndex, endIndex + 1);
};
