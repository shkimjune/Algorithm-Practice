/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let numberArray = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        numberArray[nums[i]] = nums[i];
    }
    
    if (numberArray.indexOf(-1) === -1) {
        return nums.length;
    }
    
    return numberArray.indexOf(-1);
};