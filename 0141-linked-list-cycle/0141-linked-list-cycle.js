/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null) {
        return false;
    }
    
    let visitedNodes = new Set([head]);
    let currentNode = head;

    while (currentNode) {
        currentNode = currentNode.next;

        if (visitedNodes.has(currentNode)) {
            return true;
        }
        
        visitedNodes.add(currentNode);
    }

    return false;
};
