/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-12-25 21:55:42
 * @Description: 
 */
// https://leetcode.cn/problems/house-robber/

// 思路：
// dp[i]是下标i中偷取的最高金额
// 递推公式：连续的房子会报警，所以递推公式是dp[i] = Math.max((dp[i - 2] + nums[i]), dp[i - 1])
// dp[i - 2] + nums[i]是因为如果偷i的话，那i - 1这个房子肯定不能偷；所以如果不偷i的话，就是取dp[i - 1]

const rob = (nums) => {
    const dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    const lastIdx = nums.length - 1
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max((dp[i - 2] + nums[i]), dp[i - 1])
    }

    return dp[lastIdx]
}
