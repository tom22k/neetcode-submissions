class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        interface profitDay {
            day: number;
            profit: number;
        }

        let maxProfitPerDay: profitDay[] = [];
        for (let i = 0; i < prices.length; i++) {
            let profits: profitDay[] = [];

            for (let j = i + 1; j < prices.length; j++) {
                profits.push({
                    day: j,
                    profit: prices[j] - prices[i],
                });
            }

            if (profits.length > 0) {
                maxProfitPerDay.push({
                    day: i,
                    profit: profits.sort(
                        (a: profitDay, b: profitDay) => b.profit - a.profit
                    )[0].profit,
                });
            }
        }

        let maxProfit = 0;
        if (maxProfitPerDay.length > 0) {
            maxProfit = maxProfitPerDay.sort(
                (a: profitDay, b: profitDay) => b.profit - a.profit,
            )[0].profit;
        }

        return Math.max(0, maxProfit);
    }
}
