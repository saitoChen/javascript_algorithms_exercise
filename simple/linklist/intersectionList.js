/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-08-03 22:29:58
 * @Description: 
 */
// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/
// 这道题在本地的问题是，相交的点内存地址不一样，还是去leecode上做吧


const  {LinkList, ListNode} = require('../../Linklist/base/ListNode.js')
const intersectionList = (headA, headB) => {
    if (headA === null || headB == null) return null 
    let cur1 = headA, cur2 = headB
    debugger
    while (cur1.val !== cur2.val) {
        if (cur1.next) {
            cur1 = cur1.next
        } else {
            cur1 = headB
        }
        if (cur2.next) {
            cur2 = cur2.next
        } else {
            cur2 = headA
        }
    }
    return cur1
}

const list1 = LinkList([4,1,8,4,5])
    
const list2 = LinkList([5,6,1,8,4,5])

console.log(intersectionList(list1, list2))