/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const ans = [];

    for (let i = 0; i <= n; i++) {
        let count = 0;
        let divisionValue = i;

        while (divisionValue >= 2) {
            const rest = divisionValue % 2;
            divisionValue = Math.floor(divisionValue / 2);

            count += rest;
        }

        count += divisionValue;
        ans.push(count);
    }

    return ans;
};