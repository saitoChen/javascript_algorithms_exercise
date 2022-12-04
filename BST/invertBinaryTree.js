/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-09 08:37:41
 * @Description: 
 */
// https://leetcode.cn/problems/invert-binary-tree/


// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

const { Tree } = require('./utils/index')

const root = new Tree([4,1,null,2,null,3]).generateTree()

const invertTree = (root) => {
    if (!root) return null
    const queue = [root]
    while(queue.length > 0) {
        const node = queue.shift()
        const left = node && node.left
        const right = node && node.right
        if (node) {
            node.right = left 
            node.left = right
        }
        node && queue.push(node.left)
        node && queue.push(node.right)
    }
    return root
}

console.log(invertTree(root))