/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalTank = 0;
    let startStation = 0;
    let currentTank = 0;

    for (let i = 0; i < gas.length; i++) {
        const remainingGas = gas[i] - cost[i];

        totalTank += remainingGas;
        currentTank += remainingGas;

        if (currentTank < 0) {
            currentTank = 0;
            startStation = i + 1;
        }
    }

    return totalTank < 0 ? -1 : startStation;
};
