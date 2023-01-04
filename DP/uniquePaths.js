// https://leetcode.cn/problems/unique-paths/


// 思路
// dp[i][j]表示在m,n的网格中，走到i，j的位置上时有dp[i][j]条不同的路径
// 递推公式：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

const uniquePaths = (m,n) => {
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <=n; j++) {
            if (i === 1 || j === 1) {
                dp[i][j] = 1
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m][n]
}

console.log(uniquePaths(3, 7))