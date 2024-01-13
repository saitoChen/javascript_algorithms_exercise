/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-14 14:03:30
 * @Description: 
 */
const { Tree } = require('./utils')

const root = new Tree([6, 1, 3, 2, 4, 5, 7]).generateTree()

const preorder = (root) => {
    if (!root) return
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}

console.log(preorder(root))