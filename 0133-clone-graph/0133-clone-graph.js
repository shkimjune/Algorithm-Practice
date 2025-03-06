/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) {
        return null;
    }

    const visited = new Map();
    const queue = [node];
    visited.set(node, new Node(node.val));

    while (queue.length > 0) {
        const currentNode = queue.shift();

        for (const neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }

            visited.get(currentNode).neighbors.push(visited.get(neighbor)); 
        }
    }

    return visited.get(node);
};