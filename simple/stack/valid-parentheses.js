/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-07-29 00:18:12
 * @Description: 
 */
const isValid = (s) => {
    if (s.length === 1) return false 
    const stack = []
    const map = {
        ']': '[',
        ')': '(',
        '}': '{'
    }
    const leftList = Object.values(map)
    const sArray = [...s]
    debugger
    while (sArray.length > 0) {
        let liter = sArray.shift()
        if (leftList.indexOf(liter) > -1) {
            stack.push(liter)
            continue
        } else {
            if (stack.length === 0) return false
            if (map[liter] !== stack[stack.length - 1]) return false
            if (map[liter] === stack[stack.length - 1]) {
                stack.pop()
                continue
            }
        }
    }
    if (stack.length > 0) return false
    return true
};

isValid("{[]}")