// https://leetcode.cn/problems/min-cost-climbing-stairs/


// 思路：使用dp
// dp数组定义：dp[i]是到达楼梯顶部的最小花费
// 递推公式：dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
// 初始化：问题容易出在这里，dp[0] = 0, dp[1] = 0; 题目描述爬的时候才会产生消费，可以从下标0或者下标1开始爬，因此dp[0] = 0, dp[1] = 0;
// 最关键的：因为要到顶点，所以遍历时需要越界，i <= costs.length
const minCostClimbingStairs = (costs) => {
    const dp = []
    dp[0] = 0
    dp[1] = 0
    for (let i = 2; i <= costs.length; i++) {
        dp[i] = Math.min((dp[i - 1] + costs[i - 1]), (dp[i - 2] + costs[i - 2]))
        console.log('i', dp[i])
    }

    return dp[dp.length - 1]

}


console.log(minCostClimbingStairs([10,15,20]))