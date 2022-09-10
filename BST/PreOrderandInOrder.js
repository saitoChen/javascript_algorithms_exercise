/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-10 17:22:18
 * @Description: 
 */
// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// 构建出树

// 核心思路：
// 前序遍历的顺序是 中 -> 左 -> 右，所以前序遍历节点第一个节点是根节点
// 中序遍历的顺序是 左 -> 中 -> 右，所以在数组中找到根节点的索引，索引左边都是根节点的左子节点，右边都是根节点的右子节点
const { Node } = require('./utils/index')


const buildTree = (preorder, inorder) => {
    if (!preorder || preorder.length === 0) return null
    const root = new Node(preorder[0])
    const mid = inorder.indexOf(root.val)
    // preorder.slice(1, mid + 1) 
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return root
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
// console.log(buildTree([-1], [-1]))