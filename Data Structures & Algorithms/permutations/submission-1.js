class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        // let perm = [...nums];
        let perm = nums;

        function makePerm(i) {
            if (i === nums.length) {
                res.push([...perm]);
                return
            }

            for (let j = i; j < perm.length; j++) {
                // swap
                [perm[i], perm[j]] = [perm[j], perm[i]];
                // recurse
                makePerm(i+1);
                // unswap
                [perm[i], perm[j]] = [perm[j], perm[i]];
            }

            return;
        }

        makePerm(0);
        return res;
    }
}

/*
    backtracking
    space not optimized - have a seen set/array to skip used element

    space optimized
    theres a swapping trick for this one


    pass i in rec func
    loop from j=i to end and swap elements at j and i 

    i=0
    1 2 3

    i=1
    2
 */