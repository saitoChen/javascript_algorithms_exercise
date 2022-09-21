//https://leetcode.cn/problems/path-sum-ii/

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

const { Tree } = require('./utils/index')

const root = new Tree([1, 2]).generateTree()
const target = 1

const pathSum = (root, target) => {
    if (root === null || root.val === null) return []
    const result = []
    const traverse = (root, target, path) => {
        // 得到目标
        if (target - root.val === 0 && !root.left && !root.right) {
            path.push(root.val)
            result.push([...path])
        // 再添加这个节点就负值了
        } else {
            path.push(root.val)
            root.left && traverse(root.left, target - root.val, path)
            root.right && traverse(root.right, target - root.val, path)
        }
        // 回溯
        path.pop()        

    }

    traverse(root, target, [])

    return result
}

console.log(pathSum(root, target))