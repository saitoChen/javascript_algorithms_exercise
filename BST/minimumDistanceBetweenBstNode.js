// https://leetcode.cn/problems/minimum-distance-between-bst-nodes/

// 输入：root = [1,0,48,null,null,12,49]
// 输出：1

// 审题，二叉搜索树

const { BST, generatorBST } = require('./utils/index')

const list = [90,69,null,49,89,null,52]

const bst = new BST()

generatorBST(list,bst)

const root = bst.root

// 审题，不是相邻节点！！
// 思路，搜索树中序遍历的结果是顺序的
const minDiffInBST2 = (root) => {
    if (!root) return 0
    let min = +Infinity
    const deduct = (root) => {
        if (!root || root.val === null || (!root.left && !root.right)) return
        if (root.left && !root.right) {
            min = Math.min(min, root.val - root.left.val)
            deduct(root.left)
        }  
        if (root.right && !root.left) {
            min = Math.min(min, root.right.val - root.val)
            deduct(root.right)
        } 
        if (root.left && root.right) {
            min = Math.min( min, root.val - root.left.val, root.right.val - root.val ) 
            deduct(root.left)
            deduct(root.right)
        }
    }

   deduct(root)
   return min
}

const minDiffInBST = (root) => {
    // min为最小值，pre为前驱点的值
    let min = +Infinity, preNodeVal = -1
    const traverse = (root) => {
        if (root === null || root.val === null) return null
        traverse(root.left)
        if (preNodeVal === -1) {
            preNodeVal = root.val
        } else {
            min = Math.min(min, root.val - preNodeVal)
            preNodeVal = root.val 
        }
        traverse(root.right)
    }

    traverse(root) 
    return min
}


console.log(minDiffInBST(root))