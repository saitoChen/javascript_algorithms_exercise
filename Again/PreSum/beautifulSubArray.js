// 1248
// [1, 1, 2, 1, 1] k = 3
// [2, 4, 6] k = 2

// [1, 1, 2, 1, 1]  -> nums[i] % 2 -> [1, 1, 0, 1, 1]

const numberOfSubarrays = (nums, k) => {
    let arr = []
    let presum = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i] % 2
    }
    const map = new Map()
    map.set(0, 1)
    for (let i = 0; i < arr.length; i++) {
        presum += arr[i]
        if (map.has(presum - k)) {
            count += map.get(presum - k)
        }
        if (map.has(presum)) {
            map.set(presum, map.get(presum) + 1)
        } else {
            map.set(presum, 1)
        }
    }
    return count
}

numberOfSubarrays([1, 1, 2, 1, 1], 3)