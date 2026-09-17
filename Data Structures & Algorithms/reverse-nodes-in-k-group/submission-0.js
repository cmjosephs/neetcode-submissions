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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        // set up previous node
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;
        
        while (true) {
            // get kth node - last node of group
            let kth = groupPrev;
            for (let i = 0; i < k; i++)  {
                if (kth) kth = kth.next;
            }
            // check kth node is in bounds
            if (!kth) break;

            // store node after group
            const groupNext = kth.next;

            // reverse section
            let node = groupPrev.next;
            // let prev = groupPrev; // wrong
            let prev = kth.next; // this is our 'null' value that the new tail points to
            while (node !== groupNext) { // terminate after section is reversed -
                const next = node.next;
                node.next = prev;
                prev= node;
                node = next;
            }

            // reset section
            const tmp = groupPrev.next;
            groupPrev.next = kth; // kth is the last node of the section and previous node of the next section
            groupPrev = tmp
        
        }

        return dummy.next;
    }
}
