// https://leetcode.cn/problems/binary-tree-pruning/

// 输入：root = [1,null,0,0,1]
// 输出：[1,null,0,null,1]


// 思路，计算子树和是否为0，如果为0就将节点置为null

const { Tree, Node } = require('./utils/index')

const root = new Tree([0,null,0,0,0]).generateTree()


const pruneTree = (root) => {
    if (root === null) return null
    const head = new Node()
    head.left = root
    const dfs = (root) => {
        if (!root) return 0
        let l = dfs(root.left)
        let r = dfs(root.right)
        if (l === 0) root.left = null
        if (r === 0) root.right = null
        return root.val + l + r
    }
    dfs(root) 
    if (root.val === 0 && !root.left && !root.right) return null
    return head.left
} 

console.log(pruneTree(root))