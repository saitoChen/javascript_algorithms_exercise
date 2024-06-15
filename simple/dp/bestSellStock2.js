// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150

var maxProfit = function(prices) {
    // 先试试贪心，每次循环的正利润
    debugger
    let sum = 0, len = prices.length
    let i = 0
    while(i < len) {
        let buy = prices[i]
        for (let j = i; j < len; j++) {
            if (prices[j] - buy > 0) {
                sum+= prices[j] - buy
                i = j
                break
            }
        }
    }
    return sum
};

console.log(maxProfit([1,2,3,4,5]))