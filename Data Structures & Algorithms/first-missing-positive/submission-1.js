class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
            // dont swap if out of range
            if (nums[i] < 1 && nums[i] > nums.length) {
                continue;
            }

            let swapIndex = nums[i] - 1;

            // dont swap if swap value is equal to num
            // dont swap if num is at correct place
            if (nums[i] === nums[swapIndex] || nums[i] === i + 1) continue;

            // swap while element is not equal to i + 1
            while (
                nums[i] !== i + 1 &&
                nums[i] !== nums[swapIndex] &&
                nums[i] > 0 && 
                nums[i] <= nums.length
            ) {
                swapIndex = nums[i] - 1;
                // if (nums[i] === nums[swapIndex]) break;
                [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1) return i + 1;
        }

        return nums.length + 1;
    }
}

/*
    want the smallest positive number not in nums

    answer is in range 1...n+1

    can loop over input and swap element -1 with the index

     0 1 2 3 4 5 6
    [1,2,3,4,5,6,1]
                 i

    [1,2,5,4,6,3,1]

    [-2,-1,0]
           i

    [1,2,4]
 */