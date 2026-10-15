class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const dp = new Array(n).fill(0);

        for (let i = 2; i < n; i++) {
            dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
        }

        return Math.min(dp[n-1] + cost[n-1], dp[n-2] + cost[n-2]);
    }
}

/*
    cost[i] is cost to leave that step and go to i + 1 or i + 2
    must start at index 0 or 1

    Bottom up
    - track min cost to reach that step

    DP array (can modify cost in place)
    - start at index 2
    - make dp[i] = dp[i-1] + cost[i-1] || dp[i-2] + cost[i-2]
    - return min of last 2 indices + cost[n-1] or cost[n-2]

           i
     0 1 2 3 4 5 6

    [0,0,1,2,2,3,3]

    [1,2,1,2,1,1,1]
 */