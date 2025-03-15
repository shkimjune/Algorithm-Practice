/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0) {
        return 0;
    }

    let landCount = 0;

    const visitGrid = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0") {
            return;
        }

        grid[row][col] = "0";
        visitGrid(row + 1, col);
        visitGrid(row - 1, col);
        visitGrid(row, col + 1);
        visitGrid(row, col - 1);
    };

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                landCount++;
                visitGrid(row, col);
            }
        }
    }

    return landCount;
};