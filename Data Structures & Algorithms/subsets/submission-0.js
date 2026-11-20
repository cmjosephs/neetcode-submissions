class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const subset = [];
        
        function makeSubset(i) {
            if (i === nums.length) {
                res.push([...subset]);
                return;
            }

            makeSubset(i+1);

            subset.push(nums[i]);
            makeSubset(i+1);
            subset.pop();

            return;
        }

        makeSubset(0);
        return res;
    }
}

/*
    Decision tree branching
    - add the number to the subset or skip it

 */