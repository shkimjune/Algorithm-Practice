
var TimeMap = function () {
    this.timeMap = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.timeMap[key] === undefined) {
        this.timeMap[key] = [];
    }
    this.timeMap[key].push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (this.timeMap[key] === undefined) {
        return '';
    }

    let left = 0;
    let right = this.timeMap[key].length - 1;
    let res = '';

    while (left <= right) {
        const mid = ((left + right) / 2) | 0;

        if (this.timeMap[key][mid][1] <= timestamp) {
            res = this.timeMap[key][mid][0];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */