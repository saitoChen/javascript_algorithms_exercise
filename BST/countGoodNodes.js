// https://leetcode.cn/problems/count-good-nodes-in-binary-tree/

// 输入：root = [3,1,4,3,null,1,5]
// 输出：4

// 根节点 (3) 永远是个好节点。
// 节点 4 -> (3,4) 是路径中的最大值。
// 节点 5 -> (3,4,5) 是路径中的最大值。
// 节点 3 -> (3,1,3) 是路径中的最大值。

const { Tree } = require('./utils/index')

const root = new Tree([2,null,4,10,8,null,null,4]).generateTree()

const goodNodes = (root) => {
    if (root === null) return 0
    let count = 0
    const traverse = (root, max) => {
        if (root === null) return
        let tempMax = max
        if (root.val >= max) {
            count++
            tempMax = root.val
        }
        traverse(root.left, tempMax)
        traverse(root.right, tempMax)
    }

    traverse(root, root.val)
    return result
}


console.log(goodNodes(root))