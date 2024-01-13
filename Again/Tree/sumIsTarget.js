/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-11 14:17:42
 * @Description: 
 */
// root = [5, 4, 8, 11, null, 13, 4, 7, 2, 5, 1], targetSum = 22
// [[5,4,11,2],[5,8,4,5]]

const { Tree } = require('./utils')

const root = new Tree([5,4,8,11,null,13,4,7,2,null,null,null,null,5,1]).generateTree()

var pathTarget = function(root, target) {
    const result = []
    const path = []
    const sum = (result, path, root, target) => {
        if (!root) return
        if (root && !root.left && !root.right) {
            // 此时是叶子节点了，判断是否和target相等
            if (root.val === target) {
                path.push(root.val)
                result.push(path)
            }
            return
        }
        path.push(root.val)

        sum(result, path, root.left, target - (root.val || 0))
        sum(result, path, root.right, target - (root.val || 0))

        path.pop()
    }

    sum(result, path, root, target)
    return result
};

console.log(pathTarget(root, 22))