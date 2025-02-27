/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const res = Array.from({ length: mat.length }, () => Array(mat[0].length).fill(-1));
    const queue = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                res[i][j] = 0;
            }
        }
    }

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const direction of directions) {
            const [dx, dy] = direction;
            const matx = x + dx;
            const maty = y + dy;

            if (matx >= 0 && matx < mat.length && maty >= 0 && maty < mat[0].length && res[matx][maty] === -1) {
                res[matx][maty] = res[x][y] + 1;
                queue.push([matx, maty]);
            }
        }
    }

    return res;
};