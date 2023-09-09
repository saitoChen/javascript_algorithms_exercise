/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-12 21:23:44
 * @Description: 
 */
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/

const maxDepth = (root) => {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}