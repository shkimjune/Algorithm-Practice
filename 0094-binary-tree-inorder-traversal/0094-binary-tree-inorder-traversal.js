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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const visitInorder = (root) => {
        if (!root) {
            return;
        }

        visitInorder(root.left);
        result.push(root.val);
        visitInorder(root.right);
    }

    visitInorder(root);

    return result;
};
