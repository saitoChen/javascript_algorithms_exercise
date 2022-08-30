/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-30 09:58:54
 * @Description: 
 */
// https://leetcode.cn/problems/sort-list/

// [4,2,1,3] -> [1,2,3,4]

const { ListNode, LinkList, print, getListMid } = require("./base/ListNode")

const head = LinkList([4,2,1,3])

// 思路 -> 由于是链表不是数组，不适合使用快排，使用归并排序

const sortList = (head) => {
    if (!head || !head.next) return head

    const hair = new ListNode()
    hair.next = head
    let mid = getListMid(hair)

    // 获取第二段链表的起点
    let start2 = mid.next
    // 切断两个链表
    mid.next = null

    // 现在还剩两个链表分别是 ->  hair.next 和 start2
    return mergeList(sortList(hair.next), sortList(start2))
};

const mergeList = (list1, list2) => {
    const head = new ListNode()
    let cur = head
    while(list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2
            list2 = list2.next
        } else {
            cur.next = list1
            list1 = list1.next
        }
        cur = cur.next
    }
    cur.next = list1 || list2
    return head.next
}

print(sortList(head))