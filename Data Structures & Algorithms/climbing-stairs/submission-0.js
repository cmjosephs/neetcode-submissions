class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 1) return n;
        let curr = 2;
        let prev = 1;

        for (let i = 2; i < n; i++) {
            const next = curr + prev;
            prev = curr;
            curr = next;
        }
        return curr;
    }
}
/*

    0 1 2 3 4 5 6
    0 1 2 3 5

    reaching 3
    1 1 1
    1 2
    2 1

    4
    1 1 1 1
    1 1 2
    1 2 1
    2 1 1
    2 2
 */