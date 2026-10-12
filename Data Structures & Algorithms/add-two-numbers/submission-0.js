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
        // input comes reversed digits
        // return reversed digits LL

        // edge case - sum creates a new digit
        // 9 + 9 => 18

        // edge case - n1 < n2 or vice versa
        // 100 + 1

        // creating a new LL
        // use a dummy node to track the output
        // keep an overflow variable for edge case where a new digit is added
        // add the values from each LL node, update the flag if needed
        // create new node
        // append node to output list
        // cleanup - may need to carry a value over and add remaining digits

        // TC: O(n1 + n2) 
        // SC: O(n1 + n2) - new list output EX) 999 + 2 = 1001


        /*
            carryOver = T
            999  -> 9 9 9 1
            99   -> 9 9 
            1098 -> 8 9 0

            9
            9
            8 1
         */

        const dummy = new ListNode();
        let n = dummy;
        let carryOver = false;
        while (l1 && l2) {
            let digit = l1.val + l2.val;

            if (carryOver) {
                digit++;
                carryOver = false;
            };

            if (digit > 9) {
                carryOver = true;
                digit -= 10;
            }

            n.next = new ListNode(digit);
            n = n.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        // cleanup
        let l = l1 ? l1 : l2;
        while (l) {
            let digit = l.val;

            if (carryOver) {
                digit++;
                carryOver = false;
            };

            if (digit > 9) {
                carryOver = true;
                digit -= 10;
            }

            n.next = new ListNode(digit);
            n = n.next;
            l = l.next;
        }

        // Final node(s) have a carryOver
        if (carryOver) n.next = new ListNode(1);

        return dummy.next;
    }
}
