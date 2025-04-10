/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const total = (m - 1) + (n - 1);
    const rightSteps = n - 1;
    let result = 1;

    for (let i = 1; i <= rightSteps; i++) {
        result = result * (total - rightSteps + i) / i;
    }

    return result;
};
