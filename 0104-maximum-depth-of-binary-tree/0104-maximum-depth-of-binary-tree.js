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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;

    const getMaxDepth = (root) => {
        if (root === null) {
            return 0;
        }

        const left = getMaxDepth(root.left);
        const right = getMaxDepth(root.right);

        depth = Math.max(left, right) + 1;

        return depth;
    };

    getMaxDepth(root);

    return depth;
};