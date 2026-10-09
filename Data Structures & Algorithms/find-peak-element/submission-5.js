class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        function isBefore(m, l, r) {
            if (nums[m-1] < nums[m] && nums[m] > nums[m+1]) {
                return false;
            } else if (nums[m-1] > nums[m] && nums[m] < nums[m+1]) {
                return true;
            } else if (nums[m] < nums[m+1]) {
                return true;
            } else { // nums[m-1] < m
                return false;
            }
        }

        let l = 0, r = nums.length - 1;

        // edge case
        if (nums.length === 1) return 0;
        if (nums[0] > nums[1]) return 0;
        // l is only peak

        while (l < r - 1) {
            const mid = Math.floor((l+r)/2);

            if (isBefore(mid, l, r)) {
                l = mid;
            } else {
                r = mid;
            }
        }

        return r;
    }
}

/*
    peakIndices=5
              m
    0 1 2 3 4 5 6      
    1,0,1,3,4,3,6
              l
                r

        m
    1 2 3 1
      l
          r

    constraints:
    - no consecutive repeating numbers

    edge cases
    val at start or end of input is a peak element
    input is length == 1

    linear scan
    TC: O(n)

    binary search
    how to determine which half contains peak?
    may need to check neighbors of midpoint - can always do this if we handle edge cases before
    need to compare vals at l,r,mid,mid-1,mid+1
    check if mid is a peak

    if mid is lower or equal than both l and r - pick mid+1 or mid-1 of whichever is greater than mid - guaranteed to have a peak

    mid greater than both - either side contains peak

    l or r is higher than mid
    mid > l - left side peak - put this condition first - transition case for return we return val at r
    mid < r - right side has peak
    before
    - mid > l and mid > r => mid-1 > mid
    - mid > r

    after - guaranteed to contain peak
    first r in after region should be peak IE final r after searching
    - mid > l and mid > r => mid+1 > mid
    - mid < l



*/
