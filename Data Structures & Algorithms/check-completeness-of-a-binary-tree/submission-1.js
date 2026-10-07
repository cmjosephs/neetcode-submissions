/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isCompleteTree(root) {
        // BFS
        // always add children
        // set a flag that checks if the tree should have ended on first null node
        // if theres another node after a null node then return false

        const q = new Queue();
        q.push(root);

        let hasEnded = false;

        while (!q.isEmpty()) {
            const node = q.pop();

            if (hasEnded && node !== null) return false;

            if (node === null) {
                hasEnded = true;
            } else {
                q.push(node.left);
                q.push(node.right);
            }
        }

        return true;
    }
}

// class QueueNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this._size = 0;
//   }

//   empty() {
//     return !this.head;
//   }

//   size() {
//     return this._size;
//   }

//   push(val) {
//     const newNode = new QueueNode(val);
//     if (this.tail) {
//       this.tail.next = newNode;
//     }

//     this.tail = newNode;
//     if (!this.head) {
//       this.head = newNode;
//     }
//     this._size++;
//   }

//   pop() {
//     if (this.empty()) {
//       throw new Error("empty queue");
//     }
//     const val = this.head.val;
//     this.head = this.head.next;
//     if (!this.head) {
//       this.tail = null;
//     }
//     this._size--;
//     return val;
//   }
// }