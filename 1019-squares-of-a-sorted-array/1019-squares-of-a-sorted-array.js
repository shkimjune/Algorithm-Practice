/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const length = nums.length;
    const res = new Array(length);
    let start = 0;
    let end = length - 1;

    for (let i = length - 1; i >= 0; i--) {
        if (Math.abs(nums[start]) >= Math.abs(nums[end])) {
            res[i] = nums[start] * nums[start];
            start++;
        } else {
            res[i] = nums[end] * nums[end];
            end--;
        }
    }

    return res;
};