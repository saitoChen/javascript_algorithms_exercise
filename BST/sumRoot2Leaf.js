/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-24 21:31:27
 * @Description: 
 */
// https://leetcode.cn/problems/sum-root-to-leaf-numbers/

// 输入：root = [1,2,3], [4,9,0,5,1]
// 输出：25, 1026

const { Tree } = require('./utils/index')

const root = new Tree([4,9,0,5,1]).generateTree()

const sumNumbers = (root) => {
    if (root === null || root.val === null) return
    const result = []
    const traverseString = (root, str) => {
        if (root === null) return
        str = str + String(root.val)
        if (root && !root.left && !root.right) {
            result.push(str)
            // 回溯
            str = str.slice(0, -1)
            return
        }
        traverseString(root.left, str)
        traverseString(root.right, str)
    }

    traverseString(root, '')

    return result.reduce((prev, cur) => Number(prev) + Number(cur), 0)
}

console.log(sumNumbers(root))