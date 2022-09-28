/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-26 14:14:00
 * @Description: 2进制计算
 */
// https://leetcode.cn/problems/sum-of-root-to-leaf-binary-numbers/


// 输入：root = [1,0,1,0,1,0,1]
// 输出：22
// 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

const { Tree } = require('./utils/index')

const root = new Tree([1,0,1,0,1,0,1]).generateTree()
console.log(root)
const sumRootToLeaf = (root) => {
    if (root === null) return 0
    const result = []
    const traverse = (root, str) => {
        if (root === null || root.val === null) return
        str += String(root.val)
        if (root.val !== null && !root.left && !root.right) {
            result.push(str)
            // 回溯
            str = str.slice(0, -1)
            return
        }
        traverse(root.left, str)
        traverse(root.right, str)
    }

    traverse(root, '')
    const sum = result.reduce((prev, cur) => {
        return prev + parseInt(cur, 2)
    }, 0) 
    
    return sum
}

console.log(sumRootToLeaf(root))
