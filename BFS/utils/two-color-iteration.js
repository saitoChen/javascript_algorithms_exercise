/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-05 11:03:14
 * @Description: 
 */
// 双色打印法，不适用递归，使用迭代的方式遍历二叉树
// 性能好，不使用调用栈，自己模拟stack

const { BST, generatorBST } = require('./index')

const list = [3, 1, 5, 2, 7]
let root = null
const bst = new BST(root)

generatorBST(list, bst)

const inorderTraversalByDoubleColor = (root) => {
    let [WHITE, GREY] = [0, 1]
    const result = []
    const stack = [[WHITE, root]]
    while(stack.length) {
        let [color, node] = stack.pop()
        if (!node) continue
        if (color === WHITE) {
            stack.push([WHITE, node.left])
            stack.push([GREY, node])
            stack.push([WHITE, node.right])
        } else {
            result.push(node)
        }
    }
    return result
}

const result = inorderTraversalByDoubleColor(bst.root)
console.log(result)