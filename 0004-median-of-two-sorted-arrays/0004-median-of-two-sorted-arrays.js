/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;

    if (totalLength % 2 === 1) {
        return findElement(nums1, nums2, Math.floor(totalLength / 2) + 1);
    } else {
        const mid1 = findElement(nums1, nums2, totalLength / 2);
        const mid2 = findElement(nums1, nums2, totalLength / 2 + 1);

        return (mid1 + mid2) / 2;
    }

    function findElement(arr1, arr2, k) {
        const length1 = arr1.length;
        const length2 = arr2.length;

        if (length1 > length2) {
            return findElement(arr2, arr1, k);
        }

        if (length1 === 0) {
            return arr2[k - 1];
        }

        if (k === 1) {
            return Math.min(arr1[0], arr2[0]);
        }

        let discardCount1 = Math.min(Math.floor(k / 2), length1);
        let discardCount2 = k - discardCount1;

        if (arr1[discardCount1 - 1] < arr2[discardCount2 - 1]) {
            return findElement(arr1.slice(discardCount1), arr2, k - discardCount1);
        } else if (arr1[discardCount1 - 1] > arr2[discardCount2 - 1]) {
            return findElement(arr1, arr2.slice(discardCount2), k - discardCount2);
        }
        
        return arr1[discardCount1 - 1];
    }
};
