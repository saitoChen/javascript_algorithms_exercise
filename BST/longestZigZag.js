/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-08 15:32:46
 * @Description: 
 */
// https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/

// 输入：root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
// 输出：3
// 解释：蓝色节点为树中最长交错路径（右 -> 左 -> 右）。

// 输入：root = [1,1,1,null,1,null,null,1,1,null,1]
// 输出：4
// 解释：蓝色节点为树中最长交错路径（左 -> 右 -> 左 -> 右）。

const { Tree } = require('./utils/index')

const list = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
// 1,2,5, 1,3,6

const root = new Tree(list).generateTree()

const longestZigZag = (root) => {
    if (!root) return 0
    // 记录最大值的变量
    let max = 0
    const dfs = (root, dir, count) => {
        if (!root) return 0
        // 每走一步更新一次最大值
        max = Math.max(max, count)
        if (dir === -1) {
            // 此时需要向左子节点走，但你仍然可以向右子节点走，此时需要将count重新置为1
            dfs(root.left, 1, count+1)
            dfs(root.right, -1, 1)
        } else {
            dfs(root.right, -1, count+1)
            dfs(root.left, 1, 1)
        }
    }
    dfs(root, -1, 0)
    dfs(root, 1, 0)

    return max
}

console.log(longestZigZag(root))