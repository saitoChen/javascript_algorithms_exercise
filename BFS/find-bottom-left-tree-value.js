// https://leetcode.cn/problems/find-bottom-left-tree-value/

const { BST, generatorBST } = require('./utils/index')

const list = [2,1,3]
let root = null
const bst = new BST(root)

generatorBST(list, bst)

const findBottomLeftValue = (root) => {
    if (!root) return root
    let result
    const stack = [root]
    while(stack.length) {
        let node = stack.shift()
        // 先插入右节点，表示从右往左遍历
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
        result = node.val
    }
    return result
};
console.log(bst.root)
const result = findBottomLeftValue(bst.root)
console.log(result)