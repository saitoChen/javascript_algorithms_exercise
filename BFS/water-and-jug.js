/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-04 12:59:33
 * @Description: 
 */
// https://leetcode.cn/problems/water-and-jug-problem/

// 输入: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4 -> true
// 输入: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5 -> false

const canMeasureWater = (x, y, t) => {
    // 从初始的[0, 0]开始，[0, 0]表示x,y两个水壶都是空的
    // 栈用来存储每种水的情况
    const stack = [[0, 0]]
    const seen = new Set()

    while(stack.length) {
        const [removeX, removeY] = stack.pop()
        if (removeX === t || removeY === t || removeX + removeY === t) {
            return true
        }
        // 是否记录过这种水壶状态
        if (seen.has(`${removeX}-${removeY}`)) {
            continue
        }
        // 添加记录
        seen.add(`${removeX}-${removeY}`)
        // 灌满x壶
        stack.push([x, removeY])
        // 灌满y壶
        stack.push([removeX, y])
        // x壶倒空
        stack.push([0, removeY])
        // y壶倒空
        stack.push([removeX, 0])
        // 将x壶水倒入y壶，直到y壶满或者x壶空
        stack.push([removeX - Math.min(removeX, y - removeY), removeY + Math.min(removeX, y - removeY)])
        // 将y壶水倒入x壶，直到x壶满或者y壶空
        stack.push([removeX + Math.min(x - removeX, removeY), removeY - Math.min(removeY, x - removeX)])
    }
    return false
}

console.log(canMeasureWater(3, 5 ,4))