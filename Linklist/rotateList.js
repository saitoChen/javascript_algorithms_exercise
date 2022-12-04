// https://leetcode.cn/problems/rotate-list/

const { ListNode, LinkList, print } = require("./base/ListNode")

const head = LinkList([1, 2])

// 思路：先做个环
const rotateRight = (head, k) => {
  if (!head || !head.next) return head
  if (k === 0) return head
  let dummy = new ListNode()
  dummy.next = head
  let len = 1
  let cur = dummy.next
  let last = dummy.next
  while (last.next) {
    last = last.next
    len++
  }

  // 建立环
  last.next = head
  let i = 1
  while(i < len - k%len) {
    cur = cur.next
    i++
  }


  let temp = cur.next

  dummy.next = temp
  cur.next = null

  return dummy.next
}

print(rotateRight(head, 1))
// rotateRight(head, 4)