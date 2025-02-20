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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) {
        return false;
    }

    const isSameTree = (rootNode, subNode) => {
        if (!rootNode || !subNode) {
            return rootNode === subNode;
        }

        if (rootNode.val !== subNode.val) {
            return false;
        }

        return isSameTree(rootNode.left, subNode.left) && isSameTree(rootNode.right, subNode.right);
    };

    if (isSameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};