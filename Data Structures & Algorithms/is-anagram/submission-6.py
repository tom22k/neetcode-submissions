class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        chars_s, chars_t = {}, {}

        if len(s) != len(t):
            return False

        for char in s:
            chars_s[char] = 1 + chars_s.get(char, 1)

        for char in t:
            chars_t[char] = 1 + chars_t.get(char, 1)

        for key in chars_s:
            if key not in chars_t or chars_s[key] != chars_t[key]:
                return False
            
        return True