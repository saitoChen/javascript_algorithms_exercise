// https://leetcode.cn/problems/symmetric-tree/

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

const { Tree } = require('./utils/index')

const root = new Tree([1,2,2,3,4,4,3]).generateTree()

// 思路，镜像点进行递归
const isSymmetric = (root) => {
    if (!root) return true
    const dfs = (leftRoot, rightRoot) => {
        if (leftRoot === null && rightRoot === null) return true
        if (!leftRoot || !rightRoot) return false
        if (leftRoot.val !== rightRoot.val) return false
        return dfs(leftRoot.left, rightRoot.right) && dfs(leftRoot.right, rightRoot.left)
    }

    return dfs(root.left, root.right)
}

console.log(isSymmetric(root))

