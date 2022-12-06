/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-12-02 00:16:44
 * @Description: 
 */
// https://leetcode.cn/problems/subarray-sums-divisible-by-k/

const nums = [4,5,0,-2,-3,1]
const k = 5

// 考虑负数的场景 (nums % k + k) % k

const subarraysDivByK = (nums, k) => {
    const map = {0: 1}
    let prevSumK = 0

}

