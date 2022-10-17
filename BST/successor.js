// https://leetcode.cn/problems/successor-lcci/

// root = [2,1,3], p = 1
// -> 2

const { BST, generatorBST, Node } = require('./utils/index')

const bst = new BST()
const list = [2, 1, 5, null, null, 4, 7]

generatorBST(list,bst)

const root = bst.root
const p = new Node(5, new Node(4, null, null), new Node(7, null, null))

// 思路1，中序遍历，然后记录每个节点的后置节点，再遍历一次
const inorderSuccessor1 = (root, p) => {
    if (!root) return null
    const inorder = []
    let prev = null
    let res = null
    const dfs = (root, prev) => {
        if (!root && root.val === null) return
        root.left && dfs(root.left)
        if (prev === p) {
            res = root
        }
        prev = root
        root.right && dfs(root.right)
    }

    dfs(root, null)
    return res
}

// 思路2. 利用搜索树的特性
// 1. 如果p存在右子树，则求p右子树的最小节点
// 2. 如果p不存在右子树
//    -> 否则要去找比p大的最小节点
const inorderSuccessor = (root, p) => {
    if (!root || root.val === null) return null
    // 如果p节点存在右子树
    if (p.right) {
        let cur = p.right
        while(cur) {
            if (cur.left) {
                cur = cur.left
            }else {
                break
            }
        }
        return cur
    }
    if (!p.right) {
        let result = null
        let cur = root
        while (cur) {
            if (cur.val > p.val) {
                if (!result) result = cur
                result = cur.val < result.val ? cur : result
                cur = cur.left
            } else {
                cur = cur.right
            }
        }
        return result
    }

}

console.log(inorderSuccessor(root, p))