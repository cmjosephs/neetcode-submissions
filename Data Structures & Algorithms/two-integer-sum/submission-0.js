class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffs = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diffs[diff] !== undefined) {
                return [diffs[diff], i];
            }

            diffs[nums[i]] = i;
        }
        return;
    }
}
