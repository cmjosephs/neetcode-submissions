class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let currSum = 0;
        let res = Infinity;
        let l = 0, r = 0;
        while (true) {
            // be careful of case target === 0 - not in constraint but good to discuss
            const shouldGrow = currSum < target || l === r;
            if (shouldGrow) {
                if (r === nums.length) break;
                currSum += nums[r];
                r++;
            } else {
                res = Math.min(res, r - l); // could move this afterwards
                currSum -= nums[l];
                l++;
            }

            // if (currSum >= target) res = Math.min(res, r - l);
        }

        // cleanup work?
        // if (currSum >= target) res = Math.min(res, r - l);

        return res === Infinity ? 0 : res;
    }
}

/*
    min length subarray whose sum is >= target

    mimimize sliding window
    track - sum

    canShrink -> sum >= target

    case -> end of the array but we need to shrink
    
    currSum=5
    [1,2,2]
     l
           r


 */