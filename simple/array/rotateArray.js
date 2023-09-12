// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    // 不能建新的
    // if (nums.length <= 1) return nums
    // let result = []
    // let j = nums.length
    // let count = k
    // while (count > 0) {
    //     result.unshift(nums[j - 1])
    //     count--
    //     j--
    // }
    // result.push(...nums.slice(0, j))
    // return result
    
    // 第一种方案：k %= nums.length 来获得翻转的位置
    // 核心思路就是先翻转数据，咱根据k的位置再进行翻转

    // const len = nums.length
    // const mid = k % len
    // reverseChange(nums, 0, len - 1)
    // reverseChange(nums, 0, mid - 1)
    // reverseChange(nums, mid, len - 1)
    // return nums


    // 第二种方案：核心还是k %= nums.length 来获得翻转的位置
    // 需要额外的空间
    const result = []
    const len = nums.length
    const mid = k % len

    let last = len - 1
    while (last > mid) {
        result.unshift(nums[last])
        last--
    }
    result.push(...nums.slice(0, mid + 1))
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i]
    }

    return nums

};

// 翻转数组函数
const reverseChange = (nums, start, end) => {
    while (start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]]
    }
}

console.log(rotate([1,2,3,4,5,6,7], 3))