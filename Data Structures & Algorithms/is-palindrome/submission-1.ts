class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const onlyAlphaNumeric = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
        return onlyAlphaNumeric === onlyAlphaNumeric.split("").reverse().join("");
    }
}
