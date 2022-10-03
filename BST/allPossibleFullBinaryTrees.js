/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-02 23:04:14
 * @Description: 
 */
// https://leetcode.cn/problems/all-possible-full-binary-trees/description/

// 输入：n = 7
// 输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]

const { Node } = require('./utils/index')

const count = 7

const allPossibleFBT = (n) => {
    const dfs = (n) => {
        // 偶数肯定不会是full binery tree
        // 为0也不行
        if (n % 2 === 0 || n === 0) return []
        // 如果n为1说明有1个节点，直接创建节点return
        if (n === 1) return [new Node(0)]
        const res = []
        for (let i = 0; i < n; i++) {
            const leftNum = i, rightNum = n - i - 1
            const left = dfs(leftNum)
            const right = dfs(rightNum)

            if (left && right) {
                for (let l of left) {
                    for (let r of right) {
                        const root = new Node(0)
                        root.left = l
                        root.right = r

                        res.push(root)
                    }
                }
            }
        }

        return res

    }

    return dfs(n)
}

console.log(allPossibleFBT(count))