/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-11 20:03:03
 * @Description: 
 */
// https://leetcode.cn/problems/maximum-binary-tree/

// 输入：nums = [3,2,1,6,0,5]
// 最大值的右侧
// 输出：[6,3,5,null,2,0,null,null,1]

const { Node } = require('./utils/index')

const list = [3,2,1,6,0,5]

const constructMaximumBinaryTree = (nums) => {
    if (!nums || nums.length === 0) return null
    const max = Math.max(...nums)
    const index = nums.indexOf(max)
    const root = new Node(max)

    root.left = constructMaximumBinaryTree(nums.slice(0, index))
    root.right = constructMaximumBinaryTree(nums.slice(index + 1))

    return root
}

console.log(constructMaximumBinaryTree(list))