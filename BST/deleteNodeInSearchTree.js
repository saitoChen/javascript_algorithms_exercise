// https://leetcode.cn/problems/delete-node-in-a-bst/

// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]

// BST创建搜索树
const { BST, generatorBST } = require('./utils/index')

const bst = new BST()
const list = [5,3,6,2,4,null,7]

generatorBST(list,bst)

const root = bst.root

// 方法一：思路是对的，但是细节处理有问题
const deleteNode = (root, key) => {
    if (!root || !root.val) return null
    let target = null
    let parent = null
    const dfs = (root) => {
        if (!root || target) return
        root.left && dfs(root.left)
        root.right && dfs(root.right)
        if (root.val === key) {
            target = root
            return
        }
        if (target && (root.left && root.left.val === target.val || root.right && root.right.val === target.val)) {
            parent = root
        }
    }
    // 递归寻找key
    dfs(root)

    // 如果没有找到，直接返回root
    if (!target) return root

    let node = deleteMethod(parent, target)

    const result = node || root

    return result
};

const deleteMethod = (parent, target) => {
    if (!parent) {
        // 根节点被删除
        target.right.left = target.left
        return target.right
    }
    const isLeftNode = parent.left && parent.left.val === target.val

    // target为左侧的叶子节点
    if (!target.left && !target.right && isLeftNode) {
        parent.left = null
        return
    }
    // target为右侧的叶子节点
    if (!target.left && !target.right && !isLeftNode) {
        parent.right = null
        return
    }

    // target只存在一个子节点的情况
    if (target.left && !target.right) {
        if (isLeftNode) {
            parent.left = target.left
        } else {
            parent.right = target.left
        }
        return
    }

    if (!target.left && target.right) {
        if (isLeftNode) {
            parent.left = target.right
        } else {
            parent.right = target.right
        }
        return
    }

    // target存在两个节点的情况
    if (target.left && target.right) {
        const {subParent, node} = getMin(target.right, target)
        node.left = target.left
        node.right = target.right.right ? target.right : null
        // 解除最小值和它父节点的关系
        subParent.left = null
        if (isLeftNode) {
            parent.left = node
        } else {
            parent.right = node
        }
        return
    }

}

// 寻找当前节点右子节点下的最小值
const getMin = (curNode, root) => {
    if (!curNode.left && !curNode.right) return { subParent: root, node: curNode }
    let node = curNode
    let subParent = null
    while (node.left) {
        if (node.left.left === null) {
            subParent = node
        }
        node = node.left
    }
    return {subParent, node}
}


// 方法二：直接递归吧

const deleteNode1 = (root, key) => {
    if (!root) return null

    if (root.val > key) {
        root.left = deleteNode1(root.left, key)
        return root
    }

    if (root.val < key) {
        root.right = deleteNode1(root.right, key)
        return root
    }

    if (root.val === key) {
        if (!root.left && !root.right) {
            return null
        }
        if (!root.right) {
            return root.left
        }
        if (!root.left) {
            return root.right
        }
        if (root.left && root.right) {
            const min = getMinNode(root.right)
            const temp = deleteNode1(root.right, min.val)

            min.left = root.left
            min.right = temp
            return min
        }
    }
    return root
}

const getMinNode = (root) => {
    let cur = root
    while(cur.left) {
        cur = cur.left
    }
    return cur
}

console.log(deleteMethod1(root, 5))