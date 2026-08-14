class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counters = {
        }
        for n in nums:
            if (n not in counters):
                counters[n] = 0
            counters[n] += 1
            if (counters[n] > 1):
                return True
        return False