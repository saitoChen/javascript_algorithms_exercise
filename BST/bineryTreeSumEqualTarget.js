/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-06 11:14:39
 * @Description: 
 */
// https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

// root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// [[5,4,11,2],[5,8,4,5]]

const { Tree } = require('./utils/index')

const list = [5,4,8,11,null,13,4,7,2,null,null,5,1]

const tree = new Tree(list).generateTree()

const pathSum = (root, target) => {
    if (!root) return []
    const result = []
    const path = []

    const collectionPath = (result, path, root, target) => {
        if (!root) return
        if (root && !root.left && !root.right) {
            if (root.val === target) {
                result.push([...path, root.val])
                // path.push(root.val)
                result.push([...path])
            }
            return
        }
        path.push(root.val)
        collectionPath(result, path, root.left, target - root.val)
        collectionPath(result, path, root.right, target - root.val)
        // path路径回溯
        path.pop()
    }

    collectionPath(result, path, root, target)

    return result
}

console.log(pathSum(tree, 22))