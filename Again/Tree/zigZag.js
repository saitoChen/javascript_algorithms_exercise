/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-15 16:27:36
 * @Description: 
 */
// https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/



var longestZigZag = function(root) {
    let max = 0
    const dfs = (root, dir, deep) => {
        if (!root) return 0
        max = Math.max(max, deep)
        if (dir === -1) {
            dfs(root.left, -1, 1)
            dfs(root.right, 1, deep + 1)
        } else {
            dfs(root.left, -1, deep + 1)
            dfs(root.right, 1, 1)
        }
    }

    dfs(root, -1, 0)
    dfs(root, 1, 0)
    return max
};