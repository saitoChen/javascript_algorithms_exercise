/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-10-01 22:37:34
 * @Description: 
 */
// https://leetcode.cn/problems/number-of-good-leaf-nodes-pairs/

// Input: root = [1,2,3,null,4], distance = 3
// Output: 1
// Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.


// 这题有点儿恶心
const { Tree } = require('./utils/index')

// const list = [1,2,3,null,4]
const list = [1, 2, 3, 4, 5, 6, 7, null, 8, null, null, 9, 10]
const distance = 3

const root = new Tree(list).generateTree()

const countPairs = (root, distance) => {
    const convens = []
    const addOneCount = (nums) => {
        for (let i = 0; i < nums.length; i++) {
            nums[i] += 1
        }
        return nums
    }
    const recursive = (root) => {
        if (root === null || (!root.left && !root.right)) {
            return [0]
        }
        if (root.left && !root.right) {
            let nums = recursive(root.left)
            return addOneCount(nums)
        }
        if (root.right && !root.left) {
            let nums = recursive(root.right)
            return addOneCount(nums) 
        }
        let lnums = recursive(root.left)
        let rnums = recursive(root.right)
        convens.push([addOneCount(lnums), addOneCount(rnums)])
        return [...lnums, ...rnums]
    }

    recursive(root)
    let result = 0

    for (let arr of convens) {
        const [lnums, rnums] = arr
        for (let i = 0; i < lnums.length; i++) {
            for(let j = 0; j < rnums.length; j++) {
                if (lnums[i] + rnums[j] <= distance) {
                    result++
                }
            }
        }
    }
    return result
}

console.log(countPairs(root, distance))