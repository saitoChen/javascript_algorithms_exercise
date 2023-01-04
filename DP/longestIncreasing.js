// https://leetcode.cn/problems/longest-increasing-subsequence/
// 这题是最长递增子序列

// 思路
// dp[i]指的是处在nums[i]时的最长递增子序列
// 递推公式：当dp[i] > dp[j]时，dp[i] = Math.max(dp[j] + 1, dp[i])
// dp[j] + 1 加一是因为要算上nums[i]
// 初始化：dp[i] = 1
const lengthOfLIS = (nums) => {
    const dp = new Array(nums.length).fill(1)
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        // i = 1是要留出身位给j提供比较
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max, dp[i])
    }

    return max
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))