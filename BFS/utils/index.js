/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-09-02 10:55:37
 * @Description: 
 */
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left || null
        this.right = right || null
    }
}

// 根节点
let root = null 

class BST {
    constructor() {}
    insert(val) {
        const newNode = new Node(val)
        if (!root) {
            root = newNode
        } else {
            this.insertNode(root, newNode)
        }
    }
    insertNode(root, node) {
        if (root.value > node.value) {
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

const NodeList = [1, 2, 3, null, 4, 6, 7]
const bst = new BST()

NodeList.forEach(value => {
    bst.insert(value)
})

console.log(root)