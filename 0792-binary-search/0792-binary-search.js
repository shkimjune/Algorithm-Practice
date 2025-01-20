/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex < endIndex) {
        const mid = Math.floor((startIndex + endIndex) / 2);

        if (nums[mid] < target) {
            startIndex = mid + 1;
        } else {
            endIndex = mid;
        }
    }

    if (nums[startIndex] === target) {
        return startIndex;
    } else {
        return -1;
    }
};
