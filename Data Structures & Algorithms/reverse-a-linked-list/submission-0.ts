/**
 * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let [prev, curr] = [null, head];

        while (curr) {
            const nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        return prev;
    }
}
