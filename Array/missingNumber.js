// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

// [0,1,3] -> 2
// [0,1,2,3,4,5,6,7,9] -> 8
// 时间复杂度O(N)
const missingNumber1 = (nums) => {
    let count = 0
    if (count !== nums[0]) return count
    // 如果是缺最后一项
    if (nums.length !== nums[nums.length - 1]) return nums.length
    while(nums.length > 0) {
        const num = nums.shift()
        if (count !== num) {
            return count
        }
        count++
    }
}

// 时间复杂度O(logN)
// 有序查找可以锁定二分法
const missingNumber = (nums) => {
    let i = 0, j = nums.length - 1
    while(i <= j) {
        const mid = Math.floor((i + j) / 2)
        if (mid === nums[mid]) {
            i = mid + 1
        } else {
            j = mid - 1
        }
    }
    return i
}

console.log(missingNumber([0,1,2,3,4,5,6,7,8]))