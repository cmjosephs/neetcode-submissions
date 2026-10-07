class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);

        const res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            let l = i + 1, r = nums.length - 1;

            // duplicate i values
            if (i > 0 && nums[i] === nums[i-1]) continue;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    // duplicate l values
                    while (l < r && nums[l] === nums[l-1]) l++;
                }
            }

            while (i < nums.length - 1 && nums[i] === nums[i+1]) {
                i++;
            }
        }

        return res;
    }
}
