/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-27 21:59:48
 * @Description: 
 */
// 计算一下树的总和

const { Tree } = require('./utils/index')

const root = new Tree([1, 2, 3, 4, 5]).generateTree()

const sum = (root) => {
    if (root === null || root.val === null) return 0
    let l = sum(root.left)
    let r = sum(root.right)

    return root.val + l + r
}

console.log(sum(root))