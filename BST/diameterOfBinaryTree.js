/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-10 11:04:19
 * @Description: 
 */
// https://leetcode.cn/problems/diameter-of-binary-tree/

// input [1, 2, 3, 4 ,5]
// output 3 -> [4, 2, 1, 3] / [5, 2, 1, 3]

const { Tree } = require('./utils/index')

const root = new Tree([1, 2, 3, 4 ,5]).generateTree()

// 思路，使用递归，先求出经过的节点的最大值
const diameterOfBinaryTree = (root) => {
    let max = 0
    const dfs = (root) => {
        if (!root || root.val === null) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)

        // left + right 只是深度之和，如果是算节点值还需要加上父节点， 所以 + 1
        max = Math.max(max, left + right + 1)

        return Math.max(left, right) + 1
    }
    dfs(root)

    return max - 1
}

console.log(diameterOfBinaryTree(root))