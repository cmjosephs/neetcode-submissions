class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let windowMax = 0;
        let l = 0, r = 0;
        while (r < prices.length) {
            if (l === r || prices[r] >= windowMax) {
                windowMax = prices[r];
                r++;
            } else { // value is less than windowMax
                profit += windowMax - prices[l];
                l = r;
                windowMax = 0;
            }   
        }

        // cleanup - should sell on the last day
        profit += windowMax - prices[l];

        return profit;
    }
}

/*
    sliding window 
    keep track of max value found in window
    l is the buy value
    move r when value is greater than windowMax
    once you see a value less than window max, cash in and reset pointers

    loop cases
    - l and r are same
    - canGrow window -> value is greater than window max

    watch out for cleanup case where array is all asc

    profit=7
    windowMax=4
    [7,1,5,3,6,4]
               l
                 r
    
    profit=0
    windowmax=5
    1 2 3 4 5
    l
              r

 */