class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length < 2 || s.length > 1000) {
            return false;
        }
        if (s.length % 2 !== 0) {
            return false;
        }

        const bracketsHashMap: { [key: string]: string } = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        const openBrackets = Object.values(bracketsHashMap);

        const chars = s.split("");
        let brackets: string[] = [];
        for (let i = 0; i < chars.length; i++) {
            if (openBrackets.includes(chars[i])) {
                brackets.push(chars[i]);
                continue;
            }
            const openBracket = bracketsHashMap[chars[i]];
            if (brackets[brackets.length - 1] === openBracket) {
                brackets.pop();
                continue;
            }
            return false;
        }

        return brackets.length === 0;
    }
}
