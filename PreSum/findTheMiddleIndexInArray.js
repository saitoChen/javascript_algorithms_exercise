/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-05-25 14:26:59
 * @Description: 
 */
// https://leetcode.cn/problems/find-the-middle-index-in-array/

const findMiddleIndex = function(nums) {
    const len = nums.length
    const preSum = new Array(len + 1).fill('')
    let total = 0
    preSum[0] = 0
    for (let i = 1; i < preSum.length; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1]
        // 求总和
        total += nums[i - 1]
    }
    let result = -1
    for (let i = 1; i < preSum.length; i++) {
        if (total - nums[i - 1] - preSum[i - 1] === preSum[i - 1]) {
            return i
        }
    } 
    return -1
 };

console.log(findMiddleIndex([2,3,-1,8,4]))
//    [2, 3,-1, 8, 4]
// [0, 2, 5, 4, 12, 16]
// preSum[i] = preSum[i - 1] + nums[i - 1]
// preSum[6] = preSum[5] + nums[5] = preSum[4] + nums[4] + nums[5] = preSum[3] + nums[3] + nums[4] + nums[5]
// preSum[6] - preSum[3] = nums[3] + nums[4] + nums[5]


