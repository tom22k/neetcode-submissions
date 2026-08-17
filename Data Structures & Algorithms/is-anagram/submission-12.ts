class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        const sortString = (str: string) => str.split("").sort().join("");
        return sortString(s) === sortString(t);
    }
}
