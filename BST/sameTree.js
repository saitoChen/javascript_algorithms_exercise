// https://leetcode.cn/problems/same-tree/

const { Tree } = require('./utils/index')

const p = new Tree([]).generateTree()
const q = new Tree([]).generateTree()


const isSameTree = (p, q) => {
    if (!p || !q) return false
    if (!p.val && !q) return true
    const queueP = [p]
    const queueQ = [q]
    let result = true
    while(queueP.length > 0 && queueQ.length > 0) {
        const nodeP = queueP.shift()
        const nodeQ = queueQ.shift()

        if (nodeP.val !== nodeQ.val) {
            return false
        }

        if ((!nodeP.left && nodeQ.left) || (nodeP.left && !nodeQ.left)) return false
        if ((!nodeP.right && nodeQ.right) || (nodeP.right && !nodeQ.right)) return false 

        if (nodeP.left) {
            queueP.push(nodeP.left)
        }
        if (nodeP.right) {
            queueP.push(nodeP.right)
        }
        if (nodeQ.left) {
            queueQ.push(nodeQ.left)
        }
        if (nodeQ.right) {
            queueQ.push(nodeQ.right)
        }

    }
    if (queueP.length === 0 && queueQ.length === 0) return true

};

console.log(isSameTree(p, q))