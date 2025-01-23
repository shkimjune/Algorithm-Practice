/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) {
        return true;
    }

    const getDepth = (root) => {
        if (root === null) {
            return 0;
        }

        let leftDepth = getDepth(root.left);
        let rightDepth = getDepth(root.right);

        if (leftDepth === -1 || rightDepth === -1) {
            return -1;
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        }

        return Math.max(leftDepth, rightDepth) + 1;
    };

    if (getDepth(root) === -1) {
        return false;
    }

    return true;
};
