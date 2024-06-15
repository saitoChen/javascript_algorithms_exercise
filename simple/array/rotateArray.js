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

console.log(rotate([1,2,3,4,5,6,7], 3))