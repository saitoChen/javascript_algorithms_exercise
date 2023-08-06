/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-07-30 21:35:59
 * @Description: 
 */
// https://leetcode.cn/problems/merge-two-sorted-lists/

const  {LinkList, ListNode} = require('../../Linklist/base/ListNode.js')

const mergeTwoLists = (list1, list2) => {
    // 创建一个新的链表
    const hair = new LinkList()
    const dummy = hair 

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
    if (list1) {
        dummy.next = list1
    } 
    if (list2) {
        dummy.next = list2
    }
    return hair.next
};


const list1 = new LinkList([1,2,4])
const list2 = new LinkList([1,3,4])
mergeTwoLists(list1, list2)