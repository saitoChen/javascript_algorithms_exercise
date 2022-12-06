// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

const nums = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  // 智障了，做过这道题
  let len = nums.length
  let cur = 1, next = 1
  while (next < len) {
    if (nums[next] !== nums[next - 1]) {
      nums[cur] = nums[next]
      cur++
    }
    next++
  }
  return cur
};

removeDuplicates(nums)