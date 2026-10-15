class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (nums.length < 3) {
            return Math.max(...nums);
        }

        for (let i = 2; i < nums.length; i++) {
            const prev = nums[i-2], prevprev = i-3 >= 0 ? nums[i-3] : 0;
            nums[i] = nums[i] + Math.max(prev, prevprev);
        }

        return Math.max(nums[n-1], nums[n-2]);
    }
}

/*
    can rob from i - 2 or i - 3
    [2,9,8, 3, 6]
         10 12 16


 */