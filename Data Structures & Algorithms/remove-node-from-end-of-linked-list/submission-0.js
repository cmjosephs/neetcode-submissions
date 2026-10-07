/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);

        let node = dummy;
        let i = 0; 
        while (node.next && i < n) {
            node = node.next;
            i++;
        }

        let slow = dummy;
        while (node.next) {
            node = node.next;
            slow = slow.next;
        }
        
        slow.next = slow.next.next;

        return dummy.next;
    }
}
// d 1 2 3 4 5 , n=2
//           n
//         s