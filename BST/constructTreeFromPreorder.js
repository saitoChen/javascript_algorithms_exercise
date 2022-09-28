// https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal/

// 输入：preorder = [8,5,1,7,10,12]
// 输出：[8,5,10,1,7,null,12]

// 思路：前序遍历第一个元素是根节点，且是二叉搜索树

const { Tree, Node } = require('./utils/index')

const preorder = [8,5,1,7,10,12]

const bstFromPreorder = (preorder) => {
    if (preorder === null || preorder.length === 0) return null

    const traverse = (start, end) => {
        // 注意两种边界情况
        if (start > end) return null
        if (start === end) return new Node(preorder[start])

        // 条件是中序遍历，找到大于根节点的点，这个点左侧都是左节点，右侧都是右节点
        const root = new Node(preorder[start])
        let mid = -1
        for (let i = start + 1; i < end + 1; i++) {
            if (preorder[i] > root.val) {
                mid = i
                break
            }
        }
        if (mid === -1) { 
            root.left = traverse(start + 1, end)
        } else {
            root.left = traverse(start + 1, mid - 1)
            root.right = traverse(mid, end)
        }

        return root
    }

    return traverse(0, preorder.length - 1)
}

console.log(bstFromPreorder(preorder))