class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0];
        let maxProfit = 0;

        prices.slice(1).forEach((price) => {
            minPrice = Math.min(minPrice, price);
            const profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        });

        return maxProfit;
    }
}
