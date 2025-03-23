/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    const res = [];
    let mergedInterval = intervals[0];

    intervals.forEach((interval) => {
        if (mergedInterval[1] >= interval[0]) {
            mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
        } else {
            res.push(mergedInterval);
            mergedInterval = interval;
        }
    });

    res.push(mergedInterval);

    return res;
};