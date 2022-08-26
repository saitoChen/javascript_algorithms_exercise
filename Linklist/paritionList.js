/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-24 23:22:33
 * @Description: partition list
 */
// https://leetcode.cn/problems/partition-list/

// [1, 4, 3, 4, 2, 5], x = 3
// [1, 2, 4, 3, 4, 5]

const { ListNode, LinkList, print } = require("./base/ListNode")

// const head = LinkList([1, 4, 3, 4, 2, 5])
const head = LinkList([1,4,3,2,5,2])

const partition = (head, x) => {
    if (!head) return head
    // 两个虚拟头small，large, 分别创建小于x和大于x的链表
    // start1，start2用来遍历
    let small = new ListNode()
    let large = new ListNode()
    let start1 = small
    let start2 = large
    // 遍历
    //             start1
    // small -> 1 -> 2
    // large -> 4 -> 3 -> 4 -> 5
    //                       start2
    while (head) {
        if (head.val < x) {
            start1.next = head
            start1 = start1.next
        } else {
            start2.next = head
            start2 = start2.next
        }
        head = head.next
    }
    // 切断联系，防止环的出现
    if (start1.next) start1.next = null
    if (start2.next) start2.next = null
    start1.next = large.next
    return small.next
}

print(partition(head, 3))