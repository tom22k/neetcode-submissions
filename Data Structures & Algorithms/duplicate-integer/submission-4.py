class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        counters = {}
        for n in nums:
            counters[n] = 1 + counters.get(n, 0)
            if (counters[n] >= 2):
                return True
        return False