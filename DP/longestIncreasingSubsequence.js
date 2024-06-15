/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-05-19 23:24:44
 * @Description: 
 */
// https://leetcode.cn/problems/longest-increasing-subsequence/

// 动态规划
// dp[i] 表示最长递增子序列的长度
// 如果有nums[j] < nums[i] -> dp[i] = Math.max(dp[j] + 1, dp[i])

const lengthOfLIS = (nums) => {
    const len = nums.length
    const dp = new Array(len).fill(1)
    dp[0] = 1
    for(let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]) 
            }
        }
    }
    let result = 1
    for (let i = 0; i < len; i++) {
        result = Math.max(result, dp[i])
    }
    return result
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))