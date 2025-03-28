/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let minNumIndex = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minNumIndex]) {
                minNumIndex = j;
            }
        }

        if (minNumIndex !== i) {
            [nums[i], nums[minNumIndex]] = [nums[minNumIndex], nums[i]];
        }
    }

    return nums;
};