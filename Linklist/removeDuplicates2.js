/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-24 09:54:20
 * @Description: 
 */
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/

const { ListNode, LinkList, print } = require("./base/ListNode")

const head = LinkList([1, 1, 2, 2, 2, 4, 4, 5])
// output [ 5 ]

const deleteDuplicates = (head) => {
    if (!head) return head
    const hair = new ListNode()
    hair.next = head
    let cur = hair
    while(cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let temp = cur.next.val
            while (cur.next && cur.next.val === temp) {
                // 不停的在修正cur.next
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return hair.next
}

print(deleteDuplicates(head))