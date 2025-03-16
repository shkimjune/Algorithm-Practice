/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let minutes = 0;

    const changeRottenOrange = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
            return Infinity;
        }

        if (grid[row][col] === 2) {
            return 0;
        }

        grid[row][col] = 0;

        const right = changeRottenOrange(row, col + 1);
        const left = changeRottenOrange(row, col - 1);
        const down = changeRottenOrange(row + 1, col);
        const up = changeRottenOrange(row - 1, col);

        grid[row][col] = 1;
        const min = Math.min(right, left, down, up);
        const res = min === Infinity ? min : min + 1;

        return res;
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                minutes = Math.max(changeRottenOrange(row, col), minutes);
            }
        }
    }

    return minutes === Infinity ? -1 : minutes;
};