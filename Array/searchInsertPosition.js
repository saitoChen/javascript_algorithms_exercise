// https://leetcode.cn/problems/search-insert-position/submissions/

var searchInsert = function(nums, target) {
  let start = 0, end = nums.length - 1
  let mid 
  while(start <= end) {
      mid = start + Math.floor((end - start) / 2)
      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] < target) {
          start = mid + 1
      } else if (nums[mid] > target) {
          end = mid - 1
      }
  }

  return end + 1
};

console.log(searchInsert([1, 3, 5, 4, 7, 9, 10, 6], 7))