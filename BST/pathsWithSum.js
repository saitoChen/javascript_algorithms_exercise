/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-23 22:25:35
 * @Description: 
 */
// https://leetcode.cn/problems/paths-with-sum-lcci/

// input: [5, 4, 8, 11, null, 13, 4, 7, 2, 5, 1]
// output: 3 ---> [5, 4, 11, 2] [5, 8, 4, 5] [4, 11, 7]

const { Tree } = require('./utils/index')

// 注意身体，是从任意节点不是根节点，不要使用回溯

const root = new Tree([5, 4, 8, 11, 13, 4, 7, 2, 5, 1]).generateTree()

const result = []

const pathSum = (root, sum) => {
    if (root === null || root.val === null) return 0
    let result = traverseSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)

    return result
}

const traverseSum = (root, sum) => {
    let res = 0
    if (root === null || root.val === null) return 0
    if (root.val === sum) {
        res++
    }
    res += root.left ? traverseSum(root.left, sum - root.val) : 0
    res += root.right ? traverseSum(root.right, sum - root.val) : 0

    return res
}

console.log(pathSum(root, 22))