/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-06 21:41:27
 * @Description: traversal
 */

const { Tree } = require('./utils')

const arr = [3, 1, 4, 6, 7, 5, 2]

const root = new Tree(arr).generateTree()

const inorderTraversal = (root) => {
    const White = 0, Grey = 1
    const res = []
    const stack = [[White, root]]

    while (stack.length > 0) {
        const [color, node] = stack.pop()
        if (!node) continue
        if (color === White) {
            // 遍历的顺序是左，中，右，所以是中序遍历
            stack.push([White, node.right])
            stack.push([Grey, node])
            stack.push([White, node.left])
        } else {
            console.log(node)
            res.push(node)
        }
    }
    return res
}

console.log(inorderTraversal(root))