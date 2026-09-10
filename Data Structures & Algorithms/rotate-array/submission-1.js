class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k %= nums.length;
        nums.reverse();
        reverseInRange(nums, 0, k - 1);
        reverseInRange(nums, k, nums.length - 1);
        return nums;
    }
}

function reverseInRange(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++, r--;
    }
    return arr;
}

/*
    get the true k value - k % n
    IE n=4, k=5 is the same as k=1

    reverse entire array

    reverse elements 0 to k
    reverse k to n 
 */