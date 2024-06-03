/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-04-16 21:28:11
 * @Description: 
 */
// https://leetcode.cn/problems/valid-parentheses/

const isValid = (s) => {
    if (!s) return false
    const stack = []
    const map = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    const leftBarckets = Object.values(map)
    const arr = [...s]
    while (arr.length > 0) {
        const left = arr.shift()
        if (leftBarckets.indexOf(left) > -1) {
            stack.push(left)
            continue
        } 
        // 此时两个括号没匹配上
        if (map[left] !== stack[stack.length - 1]) return false
        // 此时只有右括号没有左括号
        if (stack.length == 0) return false
        if (map[left] === stack[stack.length - 1]) {
            stack.pop()
            continue
        }
    }
    // 说明有多余的括号
    if (stack.length > 0) return false
    return true
}

isValid("()")