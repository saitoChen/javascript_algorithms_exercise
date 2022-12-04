// https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/

const { ListNode, LinkList } = require("./base/ListNode")

const head = LinkList([0])

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const sortedListToBST = function(head) {
  if (!head) return null
  const list = []
  let cur = head
  while(cur) {
    list.push(cur.val)
    cur = cur.next
  }
  
  return generateTree(0, list.length - 1, list)

};


const generateTree = (start, end, arr) => {
  if (start > end) return null

  const mid = Math.floor((start + end) / 2)
  const root = new TreeNode(arr[mid])

  root.left = generateTree(start, mid - 1, arr)
  root.right = generateTree(mid + 1, end, arr)
  
  return root
}

console.log(sortedListToBST(head))