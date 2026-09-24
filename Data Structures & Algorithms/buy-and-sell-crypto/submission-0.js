class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minSeen = prices[0];
        for (let i = 1; i < prices.length; i++) {
            minSeen = Math.min(minSeen, prices[i]);
            profit = Math.max(profit, prices[i] - minSeen);
        }
        return profit;
    }
}
