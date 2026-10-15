class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const mem = {};

        function climb(stairs) {
            if (stairs <= 2) {
                return stairs;
            }

            if (mem[stairs] !== undefined) return mem[stairs];

            return mem[stairs] =  climb(stairs - 1) + climb(stairs - 2);
        }
        
        return climb(n);
    }
}
