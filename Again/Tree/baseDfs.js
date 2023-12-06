/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-06 22:41:29
 * @Description: dfs
 */
const { Tree } = require('./utils')

const root = new Tree([6, 1, 3, 2, 4, 5, 7]).generateTree()

// 前序
const dfs = (root) => {
    if (root === null) return
    console.log(root.val)
    dfs(root.left)
    dfs(root.right)
}

console.log(dfs(root))