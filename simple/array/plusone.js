/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-05 12:06:11
 * @Description: 
 */
// https://leetcode.cn/problems/plus-one/description/

const plusOne = (digits) => {
    // 处理[9]这种情况
    if (digits.length === 1 && digits[0] === 9) {
        digits[0] = 0
        digits.unshift(1)
        return digits
    }
    debugger
    const last = digits.length - 1
    if (digits[last] < 9) {
        // 小于9的话直接+1
        digits[last] = digits[last] + 1
        return digits
    } else {
        digits[last] = 0

        return [...plusOne(digits.slice(0, last)), digits[last]]
    }
}

console.log(plusOne([9,9,9]))