// https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof/

// 求二叉树的深度

const { Tree } = require('./utils/index')

const root = new Tree([3,9,20,null,null,15,7]).generateTree()

// 思路：使用BFS啊
const maxDepth = (root) => {
    if (!root || root.val === null) return 0
    let deep = 0
    const queue = [root]
    while (queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        
        deep++
    }

    return deep
}

console.log(maxDepth(root))