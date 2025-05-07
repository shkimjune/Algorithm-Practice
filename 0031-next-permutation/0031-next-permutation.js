/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let pivotIndex = nums.length - 2;

    while (pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex + 1]) {
        pivotIndex--;
    }

    if (pivotIndex >= 0) {
        let swapIndex = nums.length - 1;

        while (nums[swapIndex] <= nums[pivotIndex]) {
            swapIndex--;
        }

        [nums[pivotIndex], nums[swapIndex]] = [nums[swapIndex], nums[pivotIndex]];
    }

    let start = pivotIndex + 1;
    let end = nums.length - 1;

    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};
