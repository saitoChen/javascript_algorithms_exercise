/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-04-17 21:57:07
 * @Description: 
 */
// https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/

// 栈可以实现最近相关性
const evalRPN = (tokens) => {
    if (!tokens) return 0
    const stack = []
    const operators = ['+', '-', '*', '/']
    const arr = [...tokens]
    if (arr.length === 1 ) return arr[0]
    let res = 0
    while (arr.length) {
        const left = arr.shift()
        if (!operators.includes(left)) {
            stack.push(left)
            continue
        } else {
            const val1 = stack.pop()
            const val2 = stack.pop()
            const result = res = cal(Number(val1), Number(val2), left)
            stack.push(result)
        }
        
    }
    return res
}

const cal = (val1, val2, token) => {
    if (token === '+') {
        return val1 + val2
    }
    if (token === '-') {
        return val2 - val1
    }
    if (token === '*') {
        return val1 * val2
    }
    if (token === '/') {
        return (val2 / val1) | 0
    }
    return 0
}

console.log(evalRPN(["4","13","5","/","+"]))

// ["2","1","+","3","*"]
// ["4","13","5","/","+"]
// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]