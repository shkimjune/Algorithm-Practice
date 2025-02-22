/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currentMax = nums[0];
    let total = 0;

    nums.forEach((num) => {
        if (total < 0) {
            total = 0;
        }

        total += num;
        currentMax = Math.max(currentMax, total);
    });
    
    return currentMax;
};
