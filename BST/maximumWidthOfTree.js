/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-19 21:33:45
 * @Description: 
 */
// https://leetcode.cn/problems/maximum-width-of-binary-tree/

// 输入：root = [1,3,2,5,3,null,9]
// 输出：4

// 思路： 直接BFS一把梭，比较每一层节点最右节点与最左节点的差值 + 1
// trick -> 给树编号，跟节点为i，那么左侧子节点就是2i，右侧子节点就是2i + 1
// 树有可能很大，需要使用bigInt

// 另外一题，巩固时再写 https://leetcode.cn/problems/print-binary-tree/

const { Tree } = require('./utils/index')

const root = new Tree([1,3,2,5,3,null,9]).generateTree()

const widthOfBinaryTree = (root) => {
    if (root === null) return null
    let max = -1
    const queue = [[root, 1n]]
    while (queue.length > 0) {
        let size = queue.length
        // 比较
        max = Math.max(max, Number(queue[queue.length - 1][1] - queue[0][1] + 1n))
        for (let i = 0; i < size; i++) {
            let [node, pos] = queue.shift()
            node.left && queue.push([node.left, 2n * pos])
            node.right && queue.push([node.right, 2n * pos + 1n])
        }
    }
    return max
}

console.log(widthOfBinaryTree(root))