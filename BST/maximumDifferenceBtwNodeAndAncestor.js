// https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/

// 输入：root = [8,3,10,1,6,null,14,null,null,4,7,13]
// 输出：7
// 解释： 
// 我们有大量的节点与其祖先的差值，其中一些如下：
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// 在所有可能的差值中，最大值 7 由 |8 - 1| = 7 得出。

const { Tree } = require('./utils/index')

const root = new Tree([8,3,10,1,6,null,14,null,null,4,7,13]).generateTree()

const maxAncestorDiff = (root) => {
    if (!root) return null
    const dfs = (root, low, high) => {
        if (!root) {
            return high - low
        }
        return Math.max(dfs(root.left, Math.min(root.val, low), Math.max(root.val, high)), dfs(root.right, Math.min(root.val, low), Math.max(root.val, high)))
    }

    return dfs(root, Infinity, -Infinity)

}

console.log(maxAncestorDiff(root))