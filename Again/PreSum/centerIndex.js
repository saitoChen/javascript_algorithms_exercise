// nums = [1, 7, 3, 6, 5, 6] 输出：3
// 724


const pivotIndex = (nums) => {
    let preSum = 0
    let sum = 0
    const len = nums.length
    for (let i = 0; i < len; i++) {
        sum += nums[i]
    } 
    for (let i = 0; i <len; i++) {
        if(preSum === sum - preSum - nums[i]) return i
        preSum += nums[i]

    }

    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))