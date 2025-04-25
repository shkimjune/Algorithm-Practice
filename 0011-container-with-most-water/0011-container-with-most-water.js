/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let maxAmount = 0;

    while (start < end) {
        const waterWidth = end - start;
        const waterHeight = Math.min(height[start], height[end]);

        maxAmount = Math.max(maxAmount, waterWidth * waterHeight);

        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxAmount;
};
