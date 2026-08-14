class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsNeeded = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in numsNeeded:
                return [numsNeeded[diff], i]
            numsNeeded[n] = i

        return []