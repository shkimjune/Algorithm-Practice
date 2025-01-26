/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let leftVersion = 1;
        let rightVersion = n;

        while (leftVersion < rightVersion) {
            let midVersion = Math.floor((leftVersion + rightVersion) / 2);
            if (isBadVersion(midVersion)) {
                rightVersion = midVersion;
            } else {
                leftVersion = midVersion + 1;
            }
        }

        return leftVersion;
    };
};