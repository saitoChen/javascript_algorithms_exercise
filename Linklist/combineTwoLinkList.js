/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-23 10:09:07
 * @Description: 
 */
// https://leetcode.cn/problems/merge-two-sorted-lists/

const { ListNode, LinkList } = require("./base/ListNode")

const list1 = LinkList([1, 2, 3, 4])
const list2 = LinkList([1, 2])

// objective [1, 1, 2, 2, 3, 4]

// 思路是创建一个虚拟头节点，依次穿两个list中相对小的节点

const mergeTwoLists = (list1, list2) => {
    let hair = new ListNode()
    let dummy = hair
    while (list1 && list2) {
        if (list1.val > list2.val) {
            dummy.next = list2
            list2 = list2.next
        } else {
            dummy.next = list1
            list1 = list1.next
        }
        dummy = dummy.next
    }
    if (list1) dummy.next = list1
    if (list2) dummy.next = list2

    return hair.next
}

console.log(mergeTwoLists(list1, list2))