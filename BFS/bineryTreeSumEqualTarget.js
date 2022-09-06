/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-06 11:14:39
 * @Description: 
 */
// https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

// root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// [[5,4,11,2],[5,8,4,5]]

const { BST, generatorBST } = require('./utils/index')

const list = [5,4,8,11,null,13,4,7,2,null,null,5,1]
const targetSum = 22

let root = null
const bst = new BST(root)

generatorBST(list, bst)

const pathSum = (root, target) => {
    if (!root) return root
    // result -> 存放路径结果的合计
    // path -> 当前路径
    const result = [], path = []
    const collectPath = (result, path, root, target) => {
        if (!root) return
        if (root && !root.left && !root.right) {
            if (target === root.val) {
                result.push([...path])
            }
            return
        }
        path.push(root.val)
        collectPath(result, path, root.left, target - root.val)
        collectPath(result, path, root.right, target - root.val)
        // 进行回溯
        path.pop()
    }
    collectPath(result, path, root, target)
    return result
}

const result = pathSum(bst.root, 22)
console.log(result)