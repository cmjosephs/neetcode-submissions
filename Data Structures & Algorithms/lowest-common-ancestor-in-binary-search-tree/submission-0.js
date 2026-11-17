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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {

        // Returns null or node
        function visit(node) {
            if (!node) return null;
            
            let left = visit(node.left);
            let right = visit(node.right);

            if (node === p || node === q) {
                return node
            }

            if (left && right) {
                return node;
            }

            if (left) {
                return left;
            }

            if (right) {
                return right;
            }

            return null;
        }

        return visit(root);
    }
}

/*
    DFS
    - Check if left subtree has a target node
    - Check if right subtree has a target node
    - Check if current node is a target node
    - Decide first node that both target are found in - lca


    base cases
    - node is null -> return 
 */