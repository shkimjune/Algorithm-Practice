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
    
    let nextNode = head;

    while (nextNode && nextNode.next) {
        head = head.next;
        nextNode = nextNode.next.next;

        if (head === nextNode) {
            return true;
        }
    }

    return false;
};
