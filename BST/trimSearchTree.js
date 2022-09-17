// https://leetcode.cn/problems/trim-a-binary-search-tree/

// 输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
// 输出：[3,2,null,1]

// 输入：root = [1,0,2], low = 1, high = 2
// 输出：[1,null,2]

// BST创建搜索树
const { BST, generatorBST } = require('./utils/index')

const bst = new BST()
const list = [3,1,4,null,2]

generatorBST(list,bst)

const root = bst.root

// 方案一：超时了，但我感觉思路对，但是核心的判断逻辑不好
const trimBST1 = (root, low, high) => {
    if (!root || root.val === null) return null
    while (root && (root.val > high || root.val < low)) {
        root = deleteNode(root)
    }
    if (root && root.left) {
        root.left = trimBST(root.left, low, high)
    }
    if (root && root.right) {
        root.right = trimBST(root.right, low, high)
    }

    return root
}

const deleteNode = (node) => {
    if (!node.left && !node.right) {
        return null
    }
    if (!node.left) {
        return node.right
    }
    if (!node.right) {
        return node.left
    }
    if (node.left && node.right) {
        const min = getMidNode(node.right)
        node.right = deleteNode(node.right)

        min.left = node.left
        min.right = node.right

        return min
    }
}

const getMidNode = (root) => {
    let cur = root
    while (cur.left) {
        cur = cur.left
    }
    return cur
}


// 方案二：直接用递归
// 核心：如果节点的值小于low，那么它的左子节点一定小于low；反之
const trimBST = (root, low, high) => {
    if (!root) return null
    if (root.val < low) {
        return trimBST(root.right, low, high)
    } else if (root.val > high) {
        return trimBST(root.left, low, high)
    } else {
        root.left = trimBST(root.left, low, high)
        root.right = trimBST(root.right, low, high)
        return root
    }
}

console.log(trimBST(root, 1, 2))