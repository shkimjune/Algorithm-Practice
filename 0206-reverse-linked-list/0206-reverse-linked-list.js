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
var reverseList = function (head) {
    if (head === null) {
        return head;
    }
    
    const listValues = [];
    let currentList = head;

    while (currentList !== null) {
        listValues.push(currentList.val);
        currentList = currentList.next;
    }

    let reversedListHead = new ListNode(listValues.pop());
    let newList = reversedListHead;
    
    while(listValues.length > 0) {
        newList.next = new ListNode(listValues.pop());
        newList = newList.next;
    }

    return reversedListHead;
};