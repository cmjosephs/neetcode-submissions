class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0, r = arr.length - 1;

        if (x < arr[l]) {
            return arr.slice(0, k);
        }
        if (x > arr[r]) {
            arr.slice(k-1, arr.length);
        }

        while (r - l + 1 > k) {
            const diffL = Math.abs(arr[l] - x);
            const diffR = Math.abs(arr[r] - x);

            if (diffL > diffR) {
                l++;
            } else {
                r--;
            }
        }

        return arr.slice(l, r + 1);
    }
}

/*
    Inward pointers

    arr=[2,4,5,8]
    k=2
    x=6


    2 4 5 8
    4 2 1 2
      l
          r
 */