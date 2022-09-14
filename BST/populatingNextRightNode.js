/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-13 15:01:30
 * @Description: 
 */
// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/

// 输入：root = [1,2,3,4,5,6,7]
// 输出：[1,#,2,3,#,4,5,6,7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。

const { Tree } = require('./utils/index')

const list = [1,2,3,4,5,6,7]

const root = new Tree(list).generateTree()

const connect = (root) => {
    if (!root || !root.val) return root

    const queue = [root]

    while(queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            // 此时已经从队列中取出一个了
            if (i < len - 1) {
                node.next = queue[0]
            }
            
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
}

console.log(connect(root))