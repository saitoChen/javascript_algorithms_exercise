/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-05-26 01:00:06
 * @Description: 
 */
// https://leetcode.cn/problems/QTMn0o/

const subarraySum = function(nums, k) {
    // [1, 1, 1]
    // [0, 1, 2, 3]

    // 方案一：会超时
    // const len = nums.length
    // const preSum = new Array(len + 1).fill(0)
    // for (let i = 1; i < preSum.length; i++) {
    //     preSum[i] = preSum[i - 1] + nums[i - 1]
    // }
    // let count = 0
    // for (let i = 1; i < preSum.length; i++) {
    //     for (let j = i; j < preSum.length; j++) {
    //         if (preSum[j] - preSum[i - 1] === k) {
    //             count++
    //         }
    //     }
    // }

    // return count

    // 方案二：使用map
    
};

console.log(subarraySum([1, 1, 1], 2))