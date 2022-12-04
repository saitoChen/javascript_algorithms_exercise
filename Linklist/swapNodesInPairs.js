//https://leetcode.cn/problems/swap-nodes-in-pairs/

const { ListNode, LinkList, print } = require("./base/ListNode")

const head = LinkList([1])

var swapPairs = function(head) {
  if (!head || !head.next)  return head
  let cur = head, next = cur
  const dummy = new ListNode()
  dummy.next = head
  let prev = dummy
  while(cur && cur.next) {
    next = cur.next
    swapTwoNode(prev, cur, next)
    prev = cur
    cur = cur.next
    next = cur
  }

  return dummy.next
};


const swapTwoNode = (prev, cur, next) => {
  let temp = next.next
  prev.next = next
  next.next = cur
  cur.next = temp
}

print(swapPairs(head))