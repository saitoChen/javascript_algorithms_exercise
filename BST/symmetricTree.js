// https://leetcode.cn/problems/symmetric-tree/

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

const { Tree } = require('./utils/index')

const root = new Tree([1,2,2,3,4,4,3]).generateTree()

// 思路，镜像点进行递归
const isSymmetric = (root) => {
    if (!root) return true
    const dfs = (leftRoot, rightRoot) => {
        if (leftRoot === null && rightRoot === null) return true
        if (!leftRoot || !rightRoot) return false
        if (leftRoot.val !== rightRoot.val) return false
        return dfs(leftRoot.left, rightRoot.right) && dfs(leftRoot.right, rightRoot.left)
    }

    return dfs(root.left, root.right)
}

console.log(isSymmetric(root))

// 思路2： BFS
const isSymmetric1 = (root) => {
    if (!root) return true
    const queue = [root]
    let res = true
    while(queue.length > 0) {
        const len = queue.length;
        if (len === 1) {
            const node = queue.pop()
            queue.push(node.left)
            queue.push(node.right)
            continue
        }
        for (let i = 0, j = len - 1; i !== j; i++, j-- ) {
            if (queue[i].val !== queue[j].val) {
                res = false
            }
            // 两端清除，并将他们的子节点添加到队列中
            let leftNode = queue.pop()
            queue.push(leftNode.left)
            let rightNode = queue.shift()
            queue.push(rightNode.right)
        }
    }
    return res
}

console.log(isSymmetric1(root))