/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-02-20 15:21:40
 * @Description: 
 */
// https://leetcode.cn/problems/subarray-sum-equals-k/solution/

/* 
 [1,1,1]
 2
 [1,2,3]
 3
*/

const arr = [1, 1, 1]
const k = 2

const preSum = (nums, k) => {
    const map = new Map()
    // 处理nums[0] + nums[1] +...nums[i] 正好等于 k的场景
    map.set(0, 1)
    let pre = 0, count = 0
    for (let num of nums) {
        pre += num
        if (map.has(pre - k)) {
            count += map.get(pre - k)
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1)
        } else {
            map.set(pre, 1)
        }
    }

    return count

}

console.log(preSum(arr, k))