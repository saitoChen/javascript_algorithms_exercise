// https://leetcode.cn/problems/validate-binary-search-tree/

// 输入：root = [2,1,3]
// 输出：true

const { BST, generatorBST } = require('./utils/index')

const list = [2,1,3]
const bst = new BST()

generatorBST(list,bst)

const root = bst.root
// 思路：搜索树的中序遍历是有序的
const isValidBST = (root) => {
    if (root === null) return true

    let result = true
    
    let pre = -Infinity

    const traverseCompare = (root) => {
        if (root === null) return
        traverseCompare(root.left, root.val)
        if (root.val <= pre) {
            result = false
            return
        }
        pre = root.val
        traverseCompare(root.right, root.val)
    }

    traverseCompare(root, -1000000)

    return result
}

console.log(isValidBST(root))