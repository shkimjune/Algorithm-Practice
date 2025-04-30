/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }

    const result = [];
    const telephoneMap = {
        2: 'abc', 
        3: 'def', 
        4: 'ghi', 
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8:'tuv',
        9: 'wxyz',
    }

    const getCombinations = (index, currentCombination) => {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        const letters = telephoneMap[digits[index]];

        for (const letter of letters) {
            getCombinations(index + 1, currentCombination + letter);
        }
    }

    getCombinations(0, "");

    return result;
};
