/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-01-22 11:14:52
 * @Description: 
 */
// max width
// https://leetcode.cn/problems/maximum-width-of-binary-tree/submissions/372127971/
const { Tree } = require('./utils')

const nums = [1, 2, 3, 4, 5, null, 6]
const root = new Tree(nums).generateTree()

const widthOfBinaryTree = (root) => {
    if (!root) return 0
    const queue = [[root, 1n]]
    let max = -Infinity
    while (queue.length) {
        const len = queue.length
        max = Math.max(max, Number(queue[queue.length - 1][1] - queue[0][1] + 1n))
        for (let i = 0; i < len; i++) {
            const nodeInfo = queue.pop()
            nodeInfo[0].right && queue.unshift([nodeInfo[0].right, nodeInfo[1] * 2n + 1n])
            nodeInfo[0].left && queue.unshift([nodeInfo[0].left, nodeInfo[1] * 2n])
        }
    }
    return max
}




console.log(widthOfBinaryTree(root))