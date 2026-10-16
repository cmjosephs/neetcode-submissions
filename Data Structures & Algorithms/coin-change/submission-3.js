class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) return 0;

        const n = amount + 1;
        const dp = new Array(n).fill(-1);
        dp[0] = 0;

        for (let i = 1; i < n; i++) {

            // search for fewest combos + if possible
            let minPrevIndex;
            for (let coin of coins) {
                const prevIndex = i - coin;
                
                // cases
                if (prevIndex < 0) { // out of bounds
                    continue;
                } else if (prevIndex === 0) {
                    minPrevIndex = 0; // prev value is 0
                } else if (dp[prevIndex] === -1) { // prev value cannot be made
                    continue;
                } else if (minPrevIndex === undefined || dp[prevIndex] <= dp[minPrevIndex]) {
                    minPrevIndex = prevIndex;
                    
                }

            }
            
            if (minPrevIndex !== undefined) {
                dp[i] = dp[minPrevIndex] + 1;
            } 
        }

        return dp[amount];
    }
}

/*
    Bottom up DP

    coins=[1,3,4], amount=6

    check amount - coin in dp array
    if i < 0 -> assume prev is 0
    if you can make amount, dp[i] = min(...prevs) + 1
    return value at final index - greater than 0 , if 0 then return -1

                      i
    0  1  2  3  4  5  6
    0  1. 2  1  1  2  2

    want:
    0  1. 2. 1. 1. 2. 2

    coins=[2,4], amount=6

    0  1  2  3  4  5
    0 -1 -1 -1 -1 -1


 */