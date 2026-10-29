class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a,b) => a-b);
        let maxFreq = 1; // init to 1 as input array is has at least 1 element
        let windowSum = 0;
        let l = 0, r = 0;
        while (r < nums.length) {
            if (l === r) {
                windowSum += nums[r];
                r++;
                continue;
            } 

            // get compare value
            const thres = nums[r] * (r - l);
            if (thres - windowSum <= k) {
                // possible answer
                maxFreq = Math.max(maxFreq, r - l + 1);
                // open window
                windowSum += nums[r];
                r++;
            } else {
                windowSum -= nums[l];
                l++;
            }
        }
        return maxFreq;
    }
}

/*
    Sliding window - maximum window

    sort the input asc - can only increment values smaller then another number 
    bump a frequency

    store sum of the elements in the window
    compare windowSum to next value times window size
    if windowSum minus that is less than k, that is a possible answer and open window
    if is over then shrink window

    nums[r] * size - windowSum <= k
        13       1       8         5
            13
    possibleAnswer=2
    [1,4,8,13]
         l
           r
 */