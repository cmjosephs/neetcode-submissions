class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {
        // sorted asc
        // unique elements
        // want the kth missing number - leftmost number is starting number

        // brute force
        // linear scan
        // keep a counter starting at start number and a k counter
        // increment it till you get to the next number in the array
        // move pointer to next number in array
        // repeat till you've incremented k times without skipping
        // O(n + k) 

        // prefix processing
        // map the count of missing numbers between each element
        // loop over that and subtract from k till k is less than 0
        // return the previous element plus remaining k
        // O(n)

        // binary search - need to know total number skipped up to this point
        // we can calculate this out -> nums[i] - nums[0] - i
        // check if k - skipped > 0 -> search till we get to the high value where this is true
        // return nums[i] + (k-skipped)
        // before section - skipped < k
        // after section - skipped >= k
        // TC: O(logn)

        function getSkippedNums(i) {
            return nums[i] - nums[0] - i;
        }
        function isBefore(mid) {
            const skipped = getSkippedNums(mid);
            return skipped < k;
        }

        let l = 0, r = nums.length-1;

        // edge case - last value is in before section - answer is after all values in array
        if (isBefore(r)) {
            return nums[r] + (k - getSkippedNums(r));
        }

        while (l < r - 1) {
            const mid = Math.floor((l + r) / 2);

            if (isBefore(mid)) {
                l = mid;
            } else {
                r = mid;
            }
        }

        return nums[l] + (k - getSkippedNums(l));

    }
}

/*
    k = 5
    
     0 1 2 3
    [4,7,9,10]
     0 2 3 3

    
 */