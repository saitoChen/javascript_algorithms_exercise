<<<<<<< HEAD
/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-12-06 23:21:00
 * @Description: 
 */
var sortArray = function(nums) {
    
    quickSort(nums, 0, nums.length - 1)

    return nums
};

const quickSort = (nums, left, right) => {
    if (left > right) return
    const mid = portition(nums, left, right)

    quickSort(nums, left, mid - 1)
    quickSort(nums, mid + 1, right)
}

const portition = (nums, left, right) => {
    const pivot = nums[left]
    let i = left, j = right
    while (i < j) {
        while (nums[j] >= pivot && i < j) {
            j--
        }
        while (nums[i] <= pivot && i < j) {
            i++
        }

        if (i < j) {
            swap(nums, i, j)
        }
    }
    swap(nums, left, i)

    return i
}

const swap = (nums, i, j) => {
    return [nums[i], nums[j]] = [nums[j], nums[i]]
}

=======
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


>>>>>>> ca399f5d77d34ba401b28a5b856968c6df67efef
console.log(sortArray([5,2,3,1]))