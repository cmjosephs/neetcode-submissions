class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const mem = {};
        function visit(i) {
            if (i >= nums.length) return 0;

            if (mem[i]) return mem[i];

            // rob -> have to go i + 2
            const max = Math.max(nums[i] + visit(i+2), visit(i+1));

            return mem[i] = max;
            
        }

        return visit(0);
    }
}

/*
    choices each index
    - skip the house - return max(i-1, i-2)
    - rob the house - return nums[i] + max(i-2, i-3)
     0 1 2 3 4
    [2,9,8,3,6] -> 16
     

                            0

            1                               2




 */



