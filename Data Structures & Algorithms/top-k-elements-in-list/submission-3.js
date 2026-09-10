class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const set = new Set();
        const freqs = {};
        for (let num of nums) {
            freqs[num] = (freqs[num] ?? 0) + 1;
            set.add(num);
        }

        const arr = [...set]; // this is a unqiue values array
        const n = arr.length;
        const target = n - k;
        // console.log(arr, freqs);

        let l = 0, r = n - 1;
        while (l < r) { // verify this condition
            const pivotIndex = partition(arr, l, r, freqs);
            console.log(arr);
            if (pivotIndex < target) {
                l = pivotIndex + 1;
            } else if (pivotIndex > target) {
                r = pivotIndex - 1;
            } else {
                // array is now partitioned with the k most freqent elements on the right
                return arr.slice(pivotIndex, n);
            }
        }
        // l and r are equal and are on the target index
        return arr.slice(l, n);
    }
}

function getRandomIndexInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function partition(arr, l, r, freqs) {
    const randomIndex = getRandomIndexInRange(l, r);
    console.log(randomIndex);
    const pivot = arr[randomIndex];
    [arr[randomIndex], arr[r]] = [arr[r], arr[randomIndex]]; // put pivot at the end of the section so we can safely write over the section

    let index = l;
    for (let j = l; j < r; j++) {
        const num = arr[j];
        if (freqs[num] < freqs[pivot]) {
            [arr[j], arr[index]] = [arr[index], arr[j]];
            index++;
        }
    }
    [arr[index], arr[r]] = [arr[r], arr[index]];
    return index;
}

/*
 0 1 2
 1 2 3
 l
     r
     p

k=2, m=3, target=1
    k most frequent elements in the array
    only 1 answer - no ties

    can create a frequency hashmap - needed regardless

    Sorting
    sort the elements by frequency into an array
    return the top k elements

    TC: nlogn
    SC: n

    heap
    keep a minHeap of size k
    loop over elements
    add to heap if frequency is greater than or equal to top of heap
    ignore if freq is lower than top
    TC: O(nlogk)

    quickselect
    change input to unique array
    run quickselect on it
    partition till pivot index is equal to m - k - 1 IE n=1, k=1, we want value at indices 0 to 1
    run quickselect on correct half, this gives us average O(n) time
    TC: O(n) average - O(n^2) worst case
    SC: O(n)
 */