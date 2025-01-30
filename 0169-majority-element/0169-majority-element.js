/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countNums = {};
    let maxCountNum = 0;

    nums.forEach((num) => {
        countNums[num] = (countNums[num] || 0) + 1
    });

    for (const num in countNums) {
        if (maxCountNum === 0) {
            maxCountNum = Number(num);
        }
        
        maxCountNum = countNums[num] > countNums[maxCountNum] ? Number(num) : maxCountNum;
    }

    return maxCountNum;
};