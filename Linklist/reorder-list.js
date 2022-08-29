/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-29 15:26:55
 * @Description: 
 */
// https://leetcode.cn/problems/reorder-list/

const  { LinkList, ListNode, print } = require('./base/ListNode')

// [1, 2, 3, 4, 5] -> [1, 5, 2, 4, 3]
// 思路：
// 1. 复制另一个链表并翻转，然后两个链表的头节点依次互相拼接，知道遍历完成，最后中间切一刀得出结果

// 测试用例1
// const head = LinkList([1, 2, 3, 4, 5])

// 测试用例2
const head = LinkList([1,2,3,4])

const reorderList = (head) => {
    if (!head) return head
    const hair = new ListNode()
    hair.next = head
    let cur = head
    const reverseNode = reverse(copyList(cur))
    let reverseCur = reverseNode

    while (cur) {
        let next = cur.next
        let reverseNext = reverseCur.next
        cur.next = reverseCur
        reverseCur.next = next
        cur = next
        reverseCur = reverseNext
    }

    let slow = fast = hair.next
    let index = 1
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        index++
    }
    console.log('index ->', index)
    if (index % 2 === 0) {
        slow.next = null
    } else {
        slow.val = null
        slow.next = null
    }

    return hair.next
}


const copyList = (head) => {
    if (!head) return head
    let cur = head
    let node = new ListNode()
    let hair = node
    while(cur) {
        node.next = new ListNode(cur.val)
        node = node.next
        cur = cur.next
    }
    return hair.next
}

const reverse = (head) => {
    if (!head) return head
    let cur = head
    let prev = null
    while (cur) {
        let next = cur.next
        cur.next = prev

        prev = cur
        cur = next
    }
    return prev
}

console.log('==============')
print(reorderList(head))