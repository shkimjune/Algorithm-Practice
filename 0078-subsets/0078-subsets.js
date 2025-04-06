/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [];

    const getSubsets = (startIndex, currentSubset) => {
        result.push([...currentSubset]);

        for (let i = startIndex; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            getSubsets(i + 1, currentSubset);
            currentSubset.pop();
        }
    };

    getSubsets(0, []);

    return result;
};
