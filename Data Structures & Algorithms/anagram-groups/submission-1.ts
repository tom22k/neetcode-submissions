class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length < 2) {
            return [strs];
        }

        let hash: Map<string, string[]> = new Map();
        strs.forEach((s) => {
            const sortedS = s.split("").sort().join("");
            if (hash.has(sortedS)) {
                hash.set(sortedS, [...hash.get(sortedS), s]);
            } else {
                hash.set(sortedS, [s]);
            }
        });

        return Array.from(hash.values());
    }
}
