/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-11 14:26:26
 * @Description: 
 */
// https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
// 序列化树

// root = [1,2,3,null,null,4,5]
// -> [1,2,3,null,null,4,5]

const { Tree, Node } = require('./utils/index')

const list = [1,2,3,null,null,4,5]

const root = new Tree(list).generateTree()

const serialize = (root) => {
    if (!root) return []
    const queue = [root]
    const result = []

    while(queue.length) {
        const node = queue.shift()
        if (node) {
            result.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        }
    }

    return result
}

const data = serialize(root)

console.log(data)

const deserialize = (list) => {
    if (!list || list.length === 0) return null
    const root = new Node(list[0])
    const queue = [root]
    // 定义方向
    let oriention = -1
    for (let i = 1; i < list.length; i++) {
        const root = queue[queue.length - 1]
        if (root.val) {
            if (oriention === -1) {
                root.left = new Node(list[i])
                queue.unshift(root.left)
                // 换个方向
                oriention = 1
            } else {
                root.right = new Node(list[i])
                queue.unshift(root.right)
                // 换个方向
                oriention = -1
                // 将root从queue中去除，因为它的左右子节点已经填满了
                queue.pop()
            }
        }
    }
    return root
}

console.log(deserialize(data))