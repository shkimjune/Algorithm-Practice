/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            for (let j = i; j > 0; j--) {
                if (nums[j - 1] === 0) {
                    const temp = nums[j];
                    nums[j] = 0;
                    nums[j - 1] = temp;
                } else {
                    break;
                }
            }
        }
    }

    return nums;
};