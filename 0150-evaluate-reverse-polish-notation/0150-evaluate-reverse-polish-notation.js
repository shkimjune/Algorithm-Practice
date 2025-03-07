/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    const getCalculation = (operator, integer1, integer2) => {
        if (operator === "+") return integer1 + integer2;
        else if (operator === "-") return integer1 - integer2;
        else if (operator === "*") return integer1 * integer2;
        return Math.trunc(integer1 / integer2);
    }

    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const num2 = stack.pop();
            const num = stack.pop();
            const result = getCalculation(token, num, num2);

            stack.push(result);
        }
    }

    return stack.pop();
};