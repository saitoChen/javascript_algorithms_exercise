/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2023-12-19 16:34:45
 * @Description: 
 */
// copy new Tree


class TreeNode {
    constructor(value, left, right) {
        this.val = value
        this.left = left || null
        this.right = right || null
    }
}

class Tree {
    constructor(list) {
        this.list = list
        this.root = new TreeNode(this.list[0])
        this.queue = [this.root]
        this.initTree()
    }
    initTree() {
        let dir = -1
        for (let i = 1; i < this.list.length; i++) {
            const node = this.queue[this.queue.length - 1]
            if (node) {
                if (dir === -1) {
                    node.left = String(this.list[i]) ? new TreeNode(this.list[i]) : null
                    this.queue.unshift(node.left)
                    dir = 1
                } else {
                    node.right = String(this.list[i]) ? new TreeNode(this.list[i]) : null
                    this.queue.unshift(node.right)
                    dir = -1
                    this.queue.pop()
                }
            } else {
                this.queue.pop()
                i--
            }
        }
        return this.root
    }
}

const list = [1, 2, 3, 4, 5, 6]
console.log(new Tree(list))