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
var isValidBST = function(root) {
    const checkTree = (node, min, max) => {
        if (!node) {
            return true;
        }

        if (node.val > min && node.val < max) {
            return checkTree(node.left, min, node.val) && checkTree(node.right, node.val, max);
        } else {
            return false;
        }
    };

    const min = Number.MIN_SAFE_INTEGER;
    const max = Number.MAX_SAFE_INTEGER;

    return checkTree(root, min, max);
};