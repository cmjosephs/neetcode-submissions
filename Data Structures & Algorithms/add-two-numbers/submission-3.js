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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // Recursion
        function add(n1,n2,carry) {
            if (!n1 && !n2) {
                if (carry) {
                    return new ListNode(1);
                }
                return null;
            } 

            const d1 = n1?.val ?? 0;
            const d2 = n2?.val ?? 0;
            const carryDigit = carry ? 1 : 0;

            let digit = d1 + d2 + carryDigit;

            
            if (digit < 10) {
                carry = false;
            } else {
                digit -= 10;
                carry = true;
            }

            const n = new ListNode(digit);
            n.next = add(n1?.next, n2?.next, carry);

            return n;
        }
        return add(l1,l2,0);
    }
}
