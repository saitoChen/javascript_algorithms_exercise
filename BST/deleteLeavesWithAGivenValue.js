// https://leetcode.cn/problems/delete-leaves-with-a-given-value/

// 输入：root = [1,2,3,2,null,2,4], target = 2
// 输出：[1,null,3,null,4]

// 思路，使用虚拟头，因为有可能头节点也被删除，注意头节点被删除的边界情况

const { Tree, Node } = require('./utils/index')

const root = new Tree([1,2,3,2,null,2,4]).generateTree()
const target = 2

const removeLeafNodes = (root, target) => {
    if (root === null || root.val === null) return null
    const dfs = (root, parent, isLeft = true) => {
        if (root === null || root.val === null) return null
        root.left && dfs(root.left, root, true)
        root.right && dfs(root.right, root, false)
        if (root.val === target && parent && !root.left && !root.right) {
            if (isLeft) {
                parent.left = null
            } else {
                parent.right = null
            }
        }
    }
    const head = new Node()
    head.left = root
    dfs(root, head)

    return head.left
}

console.log(removeLeafNodes(root, target))