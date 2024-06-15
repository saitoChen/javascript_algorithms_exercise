// 974
// [4,5,0,-2,-3,1] k = 5

// 根据题目转化
// (presum[j + 1] - presum[i]) % k = 0 ->  核心： presum[j +  1] % k === presum[i] % k

// 处理负数的% -> (a % k + k) % k

const subarraysDivByK = (nums, k) => {
    let presum = 0, count = 0
    const map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        presum += nums[i]
        const mod = (presum % k + k) % k
        if (map.has(mod)) {
            count += map.get(mod)
        }
        if (map.has(mod)) {
            map.set(mod, map.get(mod) + 1)
        } else {
            map.set(mod, 1)
        }
    }
    return count
}

console.log(subarraysDivByK([-1, 2, 9], 2))