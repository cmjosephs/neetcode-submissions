class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // // Counting sort
        // const MODIFIER = 1000;
        // const RANGE = 2000; // range is -1000 to 1000, add 1000 to map a number its index
        // const freqs = new Array(RANGE).fill(0);
        // for (let num of nums) {
        //     freqs[num + MODIFIER]++;
        // }
        // let curr = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     while (curr < RANGE && freqs[curr] === 0) {
        //         curr++;
        //     }
        //     nums[i] = curr - MODIFIER;
        //     freqs[curr]--;
        // }
        // return nums[nums.length - k];

        // Quickselect
        const n = nums.length;
        const target = n - k;
        function partition(arr, l, r) {
            let index = l;
            let pivot = arr[r];

            for (let j = l; j < r; j++) {
                if (arr[j] <= pivot) {
                    [arr[index], arr[j]] = [arr[j], arr[index]];
                    index++;
                }
            }
            [arr[index], arr[r]] = [arr[r], arr[index]];
            return index;
        } 
        let l = 0, r = n - 1;
        while (l <= r) {
            const partitionIndex = partition(nums, l, r);

            if (partitionIndex < target) {
                l = partitionIndex + 1;
            } else if (partitionIndex > target) {
                r = partitionIndex - 1;
            } else {
                return nums[partitionIndex];
            }
        }
    }
}

/*
    constraints:
    - input not sorted
    - any number from -1000 to 1000 - can use this property

    Sorting
    - sort the array and return val at n - k

    Heap
    - have a minHeap of size k
    - loop over input and add to heap if the value is greater than top of the heap
    - return top of the heap
    TC: O(nlogk)
    SC: O(k)

    Quickselect
    - run quickselect on the input while partition index is not equal to n - k
    - quickselect picks a pivot value and arranges the values in the array around the pivot
    - in place using pointers
    - case to consider - k=3, nums=[1,2,1,1,1,0]
    - answer lies in a series of duplicates
    TC: O(n) average case, O(n^2) worst case
    SC: O(1)

    1 2 1 1 1 0
    0 1 1 1 2 1 p=1,pi=5
        i
            l

    counting sort
    - since range of nums[i] is contrained, we can sort the input by counting the occurences of unique numbers
    - then rewrite the array or make a new array
    - then return n - k
    TC: O(n)
    SC: O(1) 
 */