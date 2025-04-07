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
var rightSideView = function (root) {
    if (root === null) {
        return [];
    }

    const result = [];
    let currentNodes = [root];

    while (currentNodes.length > 0) {
        const currentNodesLength = currentNodes.length;
        const nextNodes = [];

        for (let i = 0; i < currentNodesLength; i++) {
            const node = currentNodes.shift();

            if (i === currentNodesLength - 1) {
                result.push(node.val);
            }

            if (node.left) {
                nextNodes.push(node.left);
            }

            if (node.right) {
                nextNodes.push(node.right);
            }
        }

        currentNodes = nextNodes;
    }

    return result;
};
