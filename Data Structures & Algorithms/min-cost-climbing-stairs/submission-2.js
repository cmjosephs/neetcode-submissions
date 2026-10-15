class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        let curr = 0;
        let prev = 0;

        for (let i = 2; i < n; i++) {
            const next = Math.min(curr + cost[i-1], prev + cost[i-2]);
            prev = curr;
            curr = next;
        }

        return Math.min(curr + cost[n-1], prev + cost[n-2]);
    }
}
