/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-01-22 10:20:26
 * @Description: 
 */
// https://leetcode.cn/problems/count-complete-tree-nodes/
const { Tree } = require('./utils')

const nums = [1, 2, 3, 4, 5, 6]
const root = new Tree(nums).generateTree()

const countNodes = (root) => {
    if (!root) return 0;
    let count = 0
    count += countNodes(root.left)
    count++
    count += countNodes(root.right)
    return count
    // if (!root) return 0
    // let leftH = 0, rightH = 0
    // let cur = root
    // while (cur.left) {
    //     cur = cur.left
    //     leftH++
    // }
    // cur = root
    // while (cur.right) {
    //     cur = cur.right
    //     rightH++
    // }
    // if (leftH === rightH) {
    //     return 2 ** (leftH + 1) - 1
    // }

    // return 1 + countNodes(root.left) + countNodes(root.right)
}

console.log(countNodes(root))

// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.