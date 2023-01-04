// https://leetcode.cn/problems/longest-common-subsequence/solution/

//最长公共子序列


// 思路：
// dp[i][j]指的是字符串text1截止到i和字符串text2截止到j的最长公共子序列的长度
// 递推：当text1[i - 1] === text2[j - 1]时有 -> dp[i][j] = dp[i - 1][j - 1] + 1
//      当text1[i - 1] !== text2[j - 1]时有 -> dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
const longestCommonSubsequence = (text1, text2) => {
    const len1 = text1.length, len2 = text2.length
    // 取len1+1,len2+1的原因是要甩出i - 1, j - 1的量
    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i] == text2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
            console.log('i ->', i, 'j ->', j, 'dp->', dp[i][j])
        }
    }
    return dp[len1][len2]
}

console.log(longestCommonSubsequence('abc', 'def'))