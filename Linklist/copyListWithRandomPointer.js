/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-28 12:09:31
 * @Description: 
 */
// https://leetcode.cn/problems/copy-list-with-random-pointer/

const  { LinkList, ListNode, print } = require('./base/ListNode')

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}; 

// [[1, 2], [2, 4], [2, 1], [4, 0], [5, 4]]
// 思路:
// 1. 是创建一个map，原节点当做key，用原节点的val创建新的Node当做节点值，遍历链表
// 2. 重置链表的指针指向head（或者再创建一个指向head的节点）
// 3. 重新遍历链表，由于遍历过一次，map中已有全量的节点key和全量的新复制的节点，直接通过map设置next和random节点即可

const List = (head) => {
    if (!head) return head
    let cur = head
    const map = new Map()
    while(cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    // 重置cur的位置
    cur = head
    while(cur) {
        map.get(cur).next = map.get(cur.next) || null
        map.get(cur).random = map.get(cur.random) || null
        cur = cur.next
    }
    // 新的节点头从map中找
    return map.get(head)
}