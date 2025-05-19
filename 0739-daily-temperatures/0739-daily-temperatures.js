/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const result = [];
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (temperatures[i] > temperatures[stack[stack.length - 1]] && stack.length > 0) {
            const lastIndex = stack.pop();
            result[lastIndex] = i - lastIndex;
        }

        stack.push(i);
        result.push(0);
    }

    return result;
};
