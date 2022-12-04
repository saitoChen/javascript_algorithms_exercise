// https://leetcode.cn/problems/successor-lcci/

// 输入: root = [2,1,3], p = 1
// 输出: 2

const { BST, generatorBST } = require('./utils/index')

const bst = new BST()
const list = [2,1,3]

generatorBST(list,bst)

const root = bst.root

const inorderSuccessor = (root, p) => {
  if (!root) return null
    const result = []
    const dfs = (root) => {
        if (!root || root.val === null) return
        root.left && dfs(root.left)
        if (result[result.length - 1]) {
            result[result.length - 1]['newNext'] = root
        }
        result.push(root)
        root.right && dfs(root.right)
    }
    const res = result.filter(node => node.val === p)
    if (res.length > 0) {
        return res.newNext
    }
    return null
}