class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const mem = {};

        function climb(i) {
            if (i < 2) return 0;

            if (mem[i]) return mem[i];

            return mem[i] = Math.min(climb(i-1) + cost[i-1], climb(i-2) + cost[i-2]);
        }

        return climb(cost.length);
    }
}

/* 
    cost to reach i is min of climb(i-1) and climb(i-2)

   0 1 2 3 4 5 6 7
  [1,2,1,2,1,1,1]        

                            7
                6                       5
            5
        4
    3       2
 2    1
1 0

    cost get to that index
    mem = {
        0: 0
        1: 0
        2: 1
    }

 */