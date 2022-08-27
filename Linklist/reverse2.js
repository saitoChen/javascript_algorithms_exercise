/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-25 23:37:27
 */
// https://leetcode.cn/problems/reverse-linked-list-ii/

const  { LinkList, ListNode, print } = require('./base/ListNode')

// head = [1,2,3,4,5], left = 2, right = 4 -> [1,4,3,2,5]
// const head = LinkList([1,2,3,4,5])
const head = LinkList([3, 5])

// 思路：
// 找到要翻转的前置节点和最后节点


const reverseBetween = (head, left, right) => {
    if (!head) return head
    const hair = new ListNode()
    hair.next = head
    let cur = hair
    // for循环获得前置节点
    for(let i = 0; i < left - 1; i++) {
        cur = cur.next
    }
    let prevNode = cur
    for (j = 0; j < right - left + 1; j++) {
        cur = cur.next
    }
    let rightNode = cur
    let lastNodes = rightNode.next

    let firstNode = prevNode.next
    prevNode.next = null
    rightNode.next = null

    reverse(firstNode)

    firstNode.next = lastNodes
    prevNode.next = rightNode

    return hair.next
}

//                                     prevNode      rightNode lastNodes
// hair -> 1 -> 2 -> 3 -> 4 -> 5  hair -> 1 -> 2 <- 3 <- 4        5
//                                             -> null
const reverse = (head) => {
    let cur = head
    let prev = null
    while(cur) {
        let next = cur.next
        cur.next = prev

        prev = cur
        cur = next
    }

    return prev
}

print(reverseBetween(head, 1, 2))