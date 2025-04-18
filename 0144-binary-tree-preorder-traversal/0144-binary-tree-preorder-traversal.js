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
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const visitStack = [root];

    while(visitStack.length > 0) {
        const currentNode = visitStack.pop();
        result.push(currentNode.val);

        if (currentNode.right) {
            visitStack.push(currentNode.right);
        }

        if (currentNode.left) {
            visitStack.push(currentNode.left);

        }
    }

    return result;
};
