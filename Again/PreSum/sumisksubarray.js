// 和为k的子数组
// nums = [1,1,1], k = 2  -> 2
// -> [0, 1, 2, 3]

const subarraySum = (nums, k) => {
    if (!nums) return 0
    let preSum = 0
    const map = new Map()
    map.set(0, 1)
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i]
        if (map.has(preSum - k)) {
            count+=map.get(preSum - k)

        }
        if (map.has(preSum)) {
            map.set(preSum, map.get(preSum) + 1)
        } else {
            map.set(preSum, 1)
        }
    }

    return count
}

console.log(subarraySum([1,1,1], 2))