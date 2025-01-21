/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const startPixelColor = image[sr][sc];
    const rowMax = image.length - 1;
    const colMax = image[0].length - 1;
    const pixels = [[sr, sc]];
    const checkedPixels = new Set();

    const getNeighboringPixels = (row, col) => {
        const neighboringPixels = [];

        if (!checkedPixels.has(`${row}${col}`)) {
            checkedPixels.add(`${row}${col}`);

            for (let i = -1; i < 2; i += 2) {
                const checkRow = row + i;
                const checkCol = col + i;

                if (checkRow >= 0 && checkRow <= rowMax) {
                    neighboringPixels.push([checkRow, col]);
                }

                if (checkCol >= 0 && checkCol <= colMax) {
                    neighboringPixels.push([row, checkCol]);
                }
            }
        }

        return neighboringPixels;
    }

    while (pixels.length > 0) {
        pixels.slice().forEach(([row, col]) => {
            if (image[row][col] === startPixelColor) {
                pixels.push(...getNeighboringPixels(row, col));

                if (image[row][col] !== color) {
                    image[row][col] = color;
                }
            }

            pixels.shift();
        });
    }

    return image;
};
