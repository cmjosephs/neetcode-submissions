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
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let closest = root.val;

        function visit(node) {
            if (!node) return;

            const dist = Math.abs(target - node.val);

            if (dist < Math.abs(target - closest)) {
                closest = node.val;
            } else if (dist === closest) {
                closest = Math.min(closest, node.val);
            }

            if (target < node.val) {
                visit(node.left);
            } else if (target > node.val) {
                visit(node.right);
            }
            return
        }

        visit(root);
        return closest;
    }
}
