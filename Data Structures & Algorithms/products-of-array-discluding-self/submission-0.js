class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = [];
        let p = 1;
        for (let i = 0; i < n; i++) {
            res.push(p);
            p *= nums[i];
        }

        p = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= p;
            p *= nums[i];
        }
        return res;
    }
}

/*
    cannot use division operator and must solve in O(n) time

    with division operator
    get the product and divide by nums[i] for each i

    brute force
    double loop thru input and omit i in the outer loop


    prefix sums (products)?

    [1,2,4,6]
     1 1 2 8
     48 24 6 1

    48 24 12 8


    two passes, no extra space (omitting output array)
    p=48
    [1,2,4,6]
     |
     48 24 12 8
 */