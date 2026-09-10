class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        function isBefore(mid, l) {
            return nums[mid] > nums[l];
        }

        let l = 0, r = nums.length - 1;
        if (nums.length === 1 || nums[l] < nums[r]) return nums[l];

        while (l < r - 1) {
            const mid = l + Math.floor((r - l) / 2);

            if (isBefore(mid, l)) {
                l = mid;
            } else {
                r = mid;
            }
        }

        return nums[r];
    }
}

/*

    input has some kind of order - rotated
    want the minimum value in the array

    search halves
    - 1 half is sorted asc
    - 2 half is rotated

    answer is always in rotated section unless rotated n times

    edge case
    array is in sorted order - return val at index 0

             m
    [3,4,5,6,1,2]
           l
             r

         m
    [4,5,0,1,2,3]
     l
         r

    r should be the first value after the sorted section
    before l - sorted
    after  r - rotated
    final r will contain the 
 */