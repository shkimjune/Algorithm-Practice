/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head) {
        return head;
    }

    let listLength = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        listLength++;
    }

    k = k % listLength;
    tail.next = head;

    let rotatedTail = head;

    for (let i = 0; i < listLength - 1 - k; i++) {
        rotatedTail = rotatedTail.next;
    }

    const rotatedList = rotatedTail.next;
    rotatedTail.next = null;

    return rotatedList;
};
