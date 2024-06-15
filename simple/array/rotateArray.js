<<<<<<< HEAD
/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-10 23:16:57
 * @Description: 
 */
// https://leetcode.cn/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    debugger
    // 第一个思路，反转，利用 K %= nums.length, 进行反转
    // let mid = k % nums.length
    // exchange(nums, 0, nums.length - 1)
    // exchange(nums, 0, mid - 1)
    // exchange(nums, mid, nums.length - 1)

    let n = nums.length, i = -1, a = new Int32Array(n)
    while (++i < n) a[(i + k) % n] = nums[i]
    while (i--) nums[i] = a[i]
};

var exchange = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
    
}

=======
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
    // 需要额外的空间,这个写法不对
    // const result = []
    // const len = nums.length
    // const mid = k % len

    // let last = len - 1
    // while (last > mid) {
    //     result.unshift(nums[last])
    //     last--
    // }
    // result.push(...nums.slice(0, mid + 1))
    // for (let i = 0; i < result.length; i++) {
    //     nums[i] = result[i]
    // }

    // return nums

    // 重写方案二
    let result = [], i = 0, len = nums.length
    while(i < len) {
        result[i % k] = nums[i]
        i++
    }

};

// 翻转数组函数
const reverseChange = (nums, start, end) => {
    while (start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]]
    }
}

>>>>>>> f3ec32639b2c14709efd5018d9aca5ceb72c7f8b
console.log(rotate([1,2,3,4,5,6,7], 3))