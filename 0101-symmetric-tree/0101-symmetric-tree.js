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
var isSymmetric = function (root) {
    const isMirror = (leftTree, rightTree) => {
        if ((!leftTree && rightTree)
            || (leftTree && !rightTree)
            || (leftTree && rightTree && leftTree.val !== rightTree.val)) {
            return false;
        }

        if (leftTree && rightTree) {
            return isMirror(leftTree.left, rightTree.right) && isMirror(leftTree.right, rightTree.left);
        }

        return true;
    };

    if (root === null) {
        return true;
    }

    return isMirror(root.left, root.right);
};