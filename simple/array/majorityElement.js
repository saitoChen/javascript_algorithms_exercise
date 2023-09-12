// https://leetcode.cn/problems/majority-element/solutions/146074/duo-shu-yuan-su-by-leetcode-solution/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function(nums) {
    // 找众数，最简单的就是排序/2
    // nums.sort((a, b) => a - b)
    // return nums[nums.length >> 1]

    // 投票算法
    let count = 0, target = null
    for (let num of nums) {
        if (count === 0) {
            target = num
        }
        count += target === num ? 1 : -1
    }

    return target
};