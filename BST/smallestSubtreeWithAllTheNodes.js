/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-01 00:02:34
 * @Description: 
 */
// https://leetcode.cn/problems/smallest-subtree-with-all-the-deepest-nodes/

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4]
// 输出：[2,7,4]

const { Tree }  = require('./utils/index')
// const list = [3,5,1,6,2,0,8,null,null,7,4]
const list = [3, 5, 1, 4, 8, null, null, 7]
const root = new Tree(list).generateTree()


const subtreeWithAllDeepest = (root) => {
    if (!root || root.val === null) return null

    const dfs = (root, deep) => {
        if (!root) return [root, deep]
        let [left, leftDeep] = dfs(root.left, deep + 1)
        let [right, rightDeep] = dfs(root.right, deep + 1)
        // 三种情况，一种是深度相同，那么直接返回当前节点就行了
        if (leftDeep === rightDeep) return [root, leftDeep]
        if (leftDeep > rightDeep) return [left, leftDeep]
        return [right, rightDeep]
    }

    return dfs(root, -1)[0]
}

console.log(subtreeWithAllDeepest(root))