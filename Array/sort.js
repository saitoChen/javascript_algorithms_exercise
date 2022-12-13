var sortArray = function(nums) {
  // return nums.sort((a, b) => a - b)
  // 快排
  const quickSort = (nums, start, end) => {
      if (start > end) return
      let pivot = nums[start]
      let i = start, j = end
      while(i !== j) {
          while(nums[i] <= pivot && i < j) {
              i++
          }
          
          while(nums[j] >= pivot && i < j ) {
              j--
          }

          if (i < j) {
              [nums[i], nums[j]] = [nums[j], nums[i]]
          }

      }

      nums[start] = nums[i]
      nums[i] = pivot

      quickSort(nums, start, i - 1)
      quickSort(nums, i + 1, end)

      return nums
  }

  return quickSort(nums, 0, nums.length - 1)
};


console.log(sortArray([5,2,3,1]))