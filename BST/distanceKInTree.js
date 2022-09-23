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

    // 使用dfs
    // 直接来吧

    const findDist = (node, from, dist, k) => {
        if (node === null || node.val === null) return
        if (dist === k) {
            result.push(node.val)
            return
        }
        // 如果访问过这个节点，就不递归了
        node.left !== from && findDist(node.left, node, dist + 1, k)
        node.right !== from && findDist(node.right, node, dist + 1, k)
        parentMap.get(node.val) !== from && findDist(parentMap.get(node.val), node, dist + 1, k)
    }

    findDist(target, null, 0, k)
   
    return result

}

console.log(distanceK(root, target, 2))
