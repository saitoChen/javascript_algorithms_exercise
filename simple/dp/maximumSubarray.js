/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-02 22:42:10
 * @Description: 
 */
// https://leetcode.cn/problems/maximum-subarray/description/

const maxSubArray = (nums) => {
    const dp = []
    // dp的初始化
    let sum = dp[0] = nums[0]
    debugger
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        sum = Math.max(sum, dp[i])
    }
    return sum
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])