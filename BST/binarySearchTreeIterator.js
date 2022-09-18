// https://leetcode.cn/problems/binary-search-tree-iterator/solution/



/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.idx = 0
    this.arr = []
    this.inorder(root, this.arr)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[++this.idx]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (this.idx < this.arr.length) return true
    return false
};

BSTIterator.prototype.inorder = (root, arr) => {
    if (root === null || root.val === null) return
    this.inorder(root.left, arr)
    arr.push(root.val)
    this.inorder(root.right, arr)
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */