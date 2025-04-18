/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const build = (preorder, inorder) => {
        if (inorder.length) {
            const inorderIndex = inorder.indexOf(preorder.shift());
            const root = new TreeNode(inorder[inorderIndex]);

            root.left = build(preorder, inorder.slice(0, inorderIndex));
            root.right = build(preorder, inorder.slice(inorderIndex + 1));

            return root;
        }

        return null;
    }

    return build(preorder, inorder);
};
