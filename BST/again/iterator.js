/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-18 21:42:45
 * @Description: 
 */
// 不使用递归和使用迭代来遍历节点

const { Tree } = require('../utils/index')

const root = new Tree([1, 2, 3, 4, 5, 6, 7]).generateTree()

const traverse = (root) => {
    if (!root) return null
    // white表示未访问过，grey表示已经访问过
    const white = 0, grey = 1
    const queue = [[root, white]]

    while(queue.length > 0) {
        const [node, color] = queue.pop()
        if (color === white) {
            // 该节点未访问过
            // 按照中序遍历进入队列
            node.right && queue.push([node.right, white])
            queue.push([node, grey])
            node.left && queue.push([node.left, white])
        } else {
            console.log(node.val)
        }
    }
}

traverse(root)