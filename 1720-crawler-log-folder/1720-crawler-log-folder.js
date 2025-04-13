/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let fileDepth = 0;

    logs.forEach((log) => {
        if (log === "../") {
            if (fileDepth > 0) {
                fileDepth--;
            }
        } else if (log !== "./") {
            fileDepth++;
        }
    });

    return fileDepth;
};
