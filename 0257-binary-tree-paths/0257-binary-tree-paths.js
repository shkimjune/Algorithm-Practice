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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];

    const visitTree = (node, path) => {
        if (!node) {
            return;
        }

        path.push(node.val.toString());

        if (!node.left && !node.right) {
            result.push(path.join("->"));
        } else {
            visitTree(node.left, [...path]);
            visitTree(node.right, [...path]);
        }
    }
    
    visitTree(root, []);

    return result;
};
