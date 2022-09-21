// https://leetcode.cn/problems/binary-tree-maximum-path-sum/solution/

// 输入：root = [-10,9,20,null,null,15,7]
// 输出：42

// case: [5,4,8,11,null,13,4,7,2,null,null,null,1]


const { Tree } = require('./utils/index')

const root = new Tree([5,4,8,11,null,13,4,7,2,null,null,null,1]).generateTree()


const maxPathSum = (root) => {
    if (root === null) return 0
    let max = -Infinity
    const calculateMax = (root) => {
        if (root === null || root.val === null) return 0

        let leftTotal = Math.max(calculateMax(root.left), 0)
        let rightTotal = Math.max(calculateMax(root.right), 0)

        let tempMax = root.val + leftTotal + rightTotal

        max = Math.max(max, tempMax)

        return root.val + Math.max(leftTotal, rightTotal)
    }

    calculateMax(root)

    return max
}

console.log(maxPathSum(root))