/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];

    const checkSum = (currentNums, sum, last) => {
        if (sum === target) {
            res.push(currentNums);
            return;
        }

        for (let i = last; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                checkSum([...currentNums, candidates[i]], sum + candidates[i], i);
            }
        }
    };

    candidates.sort((a, b) => a - b);
    checkSum([], 0, 0);

    return res;
};