// https://leetcode.cn/problems/binary-subarrays-with-sum/
var numSubarraysWithSum = function(nums, goal) {
    if (nums.length === 0) return 0
    let count = 0
    let preSum = 0
    const map = new Map()
    map.set(0, 1)
    // 总的preSum - goal的值的个数，就是结果
    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i]
        if (map.has(preSum - goal)) {
            count += map.get(preSum - goal)
        }
        if (map.has(preSum)) {
            map.set(preSum, map.get(preSum) + 1)
        }
        if (!map.has(preSum)) {
            map.set(preSum, 1)
        }
    }
    return count
};

console.log(numSubarraysWithSum([0,1,1,1,1]))