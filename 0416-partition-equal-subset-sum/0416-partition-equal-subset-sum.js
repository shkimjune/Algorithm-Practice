/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);

    if (total % 2 !== 0) {
        return false;
    }

    const target = total / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            if (dp[i]) {
                continue;
            }

            if (dp[i - num]) {
                dp[i] = true;
            }

            if (dp[target]) {
                return true;
            }
        }
    }

    return false;
};