/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-23 22:27:45
 * @Description: remove duplicates form sorted list
 */
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

const { ListNode, LinkList } = require("./base/ListNode")

const head = LinkList([1, 1, 2, 2, 2, 4, 4, 5])
// 输出 [ 1, 2, 4, 5]

const deleteDuplicates = (head) => {
    if (!head) return head
    let hair = new ListNode()
    hair.next = head
    let cur = hair.next
    while (cur) {
        if (cur.next && cur.next.val === cur.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return hair.next
}

let result = deleteDuplicates(head)
while(result) {
    console.log(result)
    result = result.next
}