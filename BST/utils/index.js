/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-02 10:55:37
 * @Description: 
 */
class Node {
    constructor(value, left, right) {
        this.val = value
        this.left = left || null
        this.right = right || null
    }
}

class BST {
    constructor(root) {
        this.root = root
    }
    insert(val) {
        if (val !== null) {
            const newNode = new Node(val)
            if (!this.root) {
                this.root = newNode
            } else {
                this.insertNode(this.root, newNode)
            }
        }
    }
    insertNode(root, node) {
        if (root.val > node.val) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
}

class Tree {
    constructor(list) {
        this.queue = []
        this.list = list
        this.root = null
        this.initQueue()
    }

    initQueue() {
        this.root = new Node(this.list[0])
        this.queue.unshift(this.root)
    }

    generateTree() {
        let oriention = -1
        for (let i = 1; i < this.list.length; i++) {
            let node = this.queue[this.queue.length - 1]
            if (node.val || node.val === 0) {
                if (oriention === -1) {
                    node.left = new Node(this.list[i])
                    this.queue.unshift(node.left)
                    oriention = 1
                } else {
                    node.right = new Node(this.list[i])
                    this.queue.unshift(node.right)
                    oriention = -1
                    // 此时需要弹出队列的最后一项，因为它的左子节点和右子节点都遍历完毕了
                    this.queue.pop()
                }
            } else {
                // 回溯一次遍历
                i--
                // 此时需要弹出队列的最后一项，因为它的左子节点和右子节点都遍历完毕了
                this.queue.pop()
            }
        }
        return this.root
    }
}

const generatorBST = (list, bst) => {
    list.forEach(node => {
        bst.insert(node)
    })
}


module.exports = {
    Node,
    BST,
    generatorBST,
    Tree
}