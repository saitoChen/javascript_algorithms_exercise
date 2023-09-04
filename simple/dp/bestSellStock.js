/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-17 22:13:52
 * @Description: 
 */
const maxProfit = prices => {
    const len = prices.length
    if (len === 0) return 0
    const dp = Array.from(new Array(len), () => new Array(2))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }
    return dp[len - 1][0]
};

// dp[i][0] 不持有 dp[i - 1][0], dp[i - 1][1] + prices(i)
// dp[i][1] 持有 dp[i - 1][1], dp[i - 1][0] - prices(i) => 因为只能买一次，所有可以简化成dp[i - 1][0] - prices(i - 1) --> -prices(i -1)

console.log(maxProfit([7,1,5,3,6,4]))