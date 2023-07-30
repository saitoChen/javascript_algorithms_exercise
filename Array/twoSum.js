// https://leetcode.cn/problems/two-sum/

const twoSum = (nums, target) => {
    debugger
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    debugger
    for (let i = 0; i < nums.length; i++) {
        const temp = target - nums[i]
        console.log(map.get(temp))
        if (map.get(temp) !== i && map.get(temp) > -1) {
            return [i, map.get(temp)]
        }
    }
    return null
}

twoSum([3,2,4], 6)