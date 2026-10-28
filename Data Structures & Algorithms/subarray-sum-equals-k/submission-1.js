class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const seen = { 0: 1 };
        let res = 0;
        let prefixSum = 0;
        for (let num of nums) {
            // can we chop off some prefix of the current sum to get k?
            prefixSum += num;
            const diff = prefixSum - k;
            if (seen[diff] !== undefined) {
                res += seen[diff];
            } 
            seen[prefixSum] = (seen[prefixSum] ?? 0) + 1;
        }
        return res;
    }
}

/*
    seen map 0 edge case accounts for an empty subarray being chopped off
    IE the whole subarray sum equals k 

    k=3
    1 -1 1 1 1 1 
               |

    prefixSum=4
    diff=1
    seen= {
        0: 2
        1: 2
        2: 1
        3: 1
    }
    res=4

 */