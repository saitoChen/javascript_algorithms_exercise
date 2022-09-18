// https://leetcode.cn/problems/binary-tree-inorder-traversal/

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

const { Tree } = require('./utils/index')

const root = new Tree([1,null,2,3]).generateTree()

const inorderTraversal = (root) => {
    if (root === null || root.val === null) return []
    const nums = []
    root.left && nums.push(...inorderTraversal(root.left))
    nums.push(root.val)
    root.right  && nums.push(...inorderTraversal(root.right))
    return nums
};

console.log(inorderTraversal(root))