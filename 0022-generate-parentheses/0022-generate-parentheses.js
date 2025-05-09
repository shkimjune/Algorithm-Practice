/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    const backtrack = (openCount, closeCount, currentString) => {
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        if (openCount < n) {
            backtrack(openCount + 1, closeCount, currentString + "(");
        }

        if (closeCount < openCount) {
            backtrack(openCount, closeCount + 1, currentString + ")");
        }
    };

    backtrack(0, 0, "");

    return result;
};
