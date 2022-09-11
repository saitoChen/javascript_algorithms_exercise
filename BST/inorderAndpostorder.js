// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]


// 后续遍历的最后一位是根节点

const { Node } = require('./utils/index')

const buildTree = (inorder, postorder) => {
    if (!inorder || inorder.length === 0) return null
    const root = new Node(postorder[postorder.length - 1])
    const index = inorder.indexOf(root.val)

    // inorder取index的左边，也就是所有的左子树；postorder前进一步（抛去index，也就是root）
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    // inorder取index + 1,也就是所有的右子树；
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, -1))
    return root
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))