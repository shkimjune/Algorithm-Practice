/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const squarePoint = points.map(([x, y]) => ({
        point: [x, y],
        distance: x ** 2 + y ** 2
    }));

    squarePoint.sort((a, b) => a.distance - b.distance);

    return squarePoint.slice(0, k).map(item => item.point);
};