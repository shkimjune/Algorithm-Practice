/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const canBreak = Array(s.length + 1).fill(false);
    canBreak[0] = true;

    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            if (canBreak[start] && wordDict.includes(s.slice(start, end))) {
                canBreak[end] = true;
                break;
            }
        }
    }

    return canBreak[s.length];
};
