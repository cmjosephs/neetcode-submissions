class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const counts = new Array(3).fill(0);
        for (let num of nums) {
            counts[num]++;
        }

        let color = 0;
        for (let i = 0; i < nums.length; i++) {
            while (counts[color] === 0) color++;
            nums[i] = color;
            counts[color]--;
        }
        return nums;
    }
}
