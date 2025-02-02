/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    const linkedListArray = [];
    let nextList = head;
    let middleNode = null;

    while (nextList) {
        linkedListArray.push(nextList.val);
        nextList = nextList.next;
    }

    if (linkedListArray.length % 2 === 0) {
        middleNode = (linkedListArray.length / 2) + 1;
    } else {
        middleNode = Math.ceil(linkedListArray.length / 2);
    }

    const middleNodes = linkedListArray.slice(middleNode - 1);
    const res = new ListNode(middleNodes.shift());
    let newList = res;

    middleNodes.forEach((value) => {
        newList.next = new ListNode(value);
        newList = newList.next;
    });

    return res;
};