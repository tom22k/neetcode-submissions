class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        return Number(n).toString(2).split("").filter(m => m === "1").length;
    }
}
