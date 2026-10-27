/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (!root) return root;
        const q = new Queue();
        q.push(root);
        while (!q.isEmpty()) {
            const size = q.size();
            for (let n = 0; n < size; n++) {
                const node = q.pop();
                if (n < size - 1) {
                    // set node.next to the top of the queue
                    node.next = q.front();
                }
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }
        return root;
    }
}

/*
    Level order BFS

 */