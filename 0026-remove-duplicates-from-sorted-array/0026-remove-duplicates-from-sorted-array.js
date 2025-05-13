/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let uniqueIndex = 1;

    for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
        if (nums[currentIndex] !== nums[uniqueIndex - 1]) {
            nums[uniqueIndex] = nums[currentIndex];
            uniqueIndex++;
        }
    }

    return uniqueIndex;
};
