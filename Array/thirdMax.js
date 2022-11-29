/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-11-01 16:28:31
 * @Description: 
 */

// n^2
const thirdMax = (nums) => {
    if (nums.length < 3) return Math.max(...nums)
    const copy = [...nums]
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy.length - i - 1; j++) {
            if (copy[j] < copy[j + 1]) {
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]]
            }
        }
    }
    const list = []
    while (copy.length > 0) {
        let max = copy.shift()
        if (list.indexOf(max) === -1) {
            list.push(max)
        }
        if (list.length === 3) break
    }

    if (list.length < 3) return Math.max(...nums)

    return list[list.length - 1]
}

// console.log(thirdMax([3, 2, 2, 2, 2]))

// nlogn
const thirdMax2 = (nums) => {
    if (nums.length < 3) return Math.max(...nums)
    nums.sort((a, b) => b - a)
    for (let i = 1, diff = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            diff++
        }
        if (diff === 3) return nums[i]
    }
    return Math.max(...nums) 
}

console.log(thirdMax2([3, 2, 2, 2, 2]))