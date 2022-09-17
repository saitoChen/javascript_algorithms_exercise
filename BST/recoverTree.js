// https://leetcode.cn/problems/recover-binary-search-tree/

// 输入：root = [1,3,null,null,2]
// 输出：[3,1,null,null,2]

const { Tree } = require('./utils/index')

const list = [1,3,null,null,2]
const root = new Tree(list).generateTree()

// 核心逻辑
// 1. 找到要修改的点，存在两种情况，只需要换一个节点或者只需要换两个节点
// 2. 恢复树不需要换节点，换val值就行


const findSwap = (nums) => {
    let preNodeIndex = -1, postNodeIndex = -1
    for (let i = 0; i < nums.length; i++) {
        // 核心逻辑在这里
        // 存在两个节点交换位置，preNodeIndex是第一个要交换的节点；postNodeIndex是第二个要交换的节点；
        // 此时存在两种情况，第一种是两个挨着的节点要交换；第二种情况是两个不相邻的节点要交换，此时要交换的节点的前一个节点的i + 1和后一个节点的i
        if (nums[i + 1] < nums[i]) {
            postNodeIndex = i + 1
            if (preNodeIndex === -1) {
                preNodeIndex = i
            } else {
                break
            }
        }
    }
    return { preNodeVal: nums[preNodeIndex], postNodeVal: nums[postNodeIndex] }
}

const recover = (root, preNodeVal, postNodeVal) => {
    if (root !== null) {
        if (root.val === preNodeVal || root.val === postNodeVal) {
            root.val = root.val === preNodeVal ? postNodeVal : preNodeVal
        }
        recover(root.left, preNodeVal, postNodeVal)
        recover(root.right, preNodeVal, postNodeVal)
    }
}

const recoverTree = (root) => {
    const nums = []
    const inorder = (root) => {
        if (root === null || root.val === null) return null
        inorder(root.left, nums)
        nums.push(root.val)
        inorder(root.right, nums)
    }
    inorder(root)
    const { preNodeVal, postNodeVal } = findSwap(nums)
    recover(root, preNodeVal, postNodeVal)
}

recoverTree(root)

console.log(root)
