/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];

    const getPermutations = (current, rest) => {
        if (rest.length === 0) {
            res.push(current);
            return;
        }

        for (let i=0; i<rest.length; i++) {
            getPermutations([...current, rest[i]], [...rest.slice(0,i), ...rest.slice(i+1)]);
        }
    }

    getPermutations([], nums);

    return res;
};