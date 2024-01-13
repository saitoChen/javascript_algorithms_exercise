/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-07 14:25:14
 * @Description: 
 */

const { Tree } = require('./utils')

const root = new Tree([6, 1, 3, 2, 4, 5, 7]).generateTree()

const bfs = (root) => {
    if (root === null) return
    const queue = [root]
    
    while (queue.length > 0) {
        const node = queue.pop()
        console.log(node.val)
        node.left && queue.unshift(node.left)
        node.right && queue.unshift(node.right)
    }
}

bfs(root)