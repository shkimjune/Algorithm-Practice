/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answers = new Array(nums.length).fill(1);
    let left = 1;
    let right = 1;

    nums.forEach((num, index) => {
        answers[index] *= left;
        left *= num;
    });

    nums.forEach((num, index) => {
        answers[nums.length - index - 1] *= right;
        right *= nums[nums.length - index - 1];
    });
    
    return answers;
};