// https://leetcode.cn/problems/all-nodes-distance-k-in-binary-tree/solution/


// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// 输出：[7,4,1]

// 核心思路：使用dfs，先生成一个map，里面存放值和它父节点的映射

const { Tree, Node } = require('./utils/index')

const root = new Tree([3,5,1,6,2,0,8,null,null,7,4]).generateTree()
const target = new Node(5)

const distanceK = (root, target, k) => {
    const parentMap = new Map()
    
    const traverse = (root, pNode) => {
        if (root === null) return
        parentMap.set(root.val, pNode)

        traverse(root.left, root)
        traverse(root.right, root)
    }

    traverse(root, null)

    const result = []
    let dist = 0

    // 使用BFS
    // 创建队列
    const queue = [root]
    // 用来记录节点是否访问过
    const visited = new Set()
    visited.add(target.val)
    while(queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()

            if (dist === k) {
                result.push(node.val)
            }

            const parent = parentMap.get(node.val)
            if (parent !== null && !visited.has(parent.val)) {
                queue.push(parent)
                visited.add(parent.val)
            }
            if (node.left !== null && !visited.has(node.left.val)) {
                queue.push(node.left)
                visited.add(node.left.val)
            }
            if (node.right !== null && !visited.has(node.right.val)) {
                queue.push(node.right)
                visited.add(node.right.val)
            }
        }

        dist++
    }
    return root

}

console.log(distanceK(root, target, 2))
