/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-18 16:24:16
 * @Description: 
 */
// https://leetcode.cn/problems/count-complete-tree-nodes/

// 输入：root = [1,2,3,4,5,6]
// 输出：6


const { Tree } = require('./utils/index')

const root = new Tree([1,2,3,4,5,6]).generateTree()

const countNodes1 = (root) => {
    if (root === null || root.val === null) return 0
    let count = 0
    count += countNodes(root.left)
    count++
    count += countNodes(root.right)
    return count
}


// 利用满二叉树的特性 https://www.bilibili.com/video/BV1eW4y1B7pD?vd_source=fdf1caf6b8f4fdf8f4e0aae3619caee8
// 思路：
// 1. 满二叉树节点的数量是 2 << h -1，所以递归去计算满二叉树的节点就行了
// 2. 二叉树是满二叉树的判断方法是，根节点到左侧子节点的深度和到右侧子节点的深度相同

const countNodes = (root) => {
    if (root === null || root.val === null) return 0
    let leftNode = root.left, rightNode = root.right
    let leftIndex = 0, rightIndex = 0

    while (leftNode) {
        leftNode = leftNode.left
        leftIndex++
    }
    while (rightNode) {
        rightNode = rightNode.right
        rightIndex++
    }
    // 如果是满二叉树的话直接套用公式
    // 2 << leftIndex - 1 -> Math.pow(2, leftIndex + 1) - 1  -> 因为leftIndex从0开始累加的
    if (leftIndex === rightIndex) return (2 << leftIndex) - 1
    let leftNum = countNodes(root.left)
    let rightNum = countNodes(root.right)

    return leftNum + rightNum + 1
}

console.log(countNodes(root))