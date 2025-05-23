/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    const leftSubTree = lowestCommonAncestor(root.left, p, q);
    const rightSubTree = lowestCommonAncestor(root.right, p, q);

    if (leftSubTree && rightSubTree) {
        return root;
    }

    return leftSubTree || rightSubTree;
};