/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-25 23:56:07
 * @Description: 
 */
// https://leetcode.cn/problems/palindrome-linked-list/

const  {LinkList, ListNode, print} = require('./base/ListNode')

// 判断是否是回文 [1, 2, 3, 2, 1] -> true
const head = LinkList([1, 2, 2, 1])
// hair -> 1 -> 2 -> 3 -> 2 -> 1 


// 1. 最low的办法，遍历一边链表，把链表的值存在一个数组中，再去遍历链表和数组的值是否相等O(N^2)
// 我人傻了，都存在数组里了，直接用数组的双指针判断是回文就好了，O(N)
// 2. 这里使用的是快慢指针，找到中点，翻转其中的一半，再遍历
// 3. 看了leecode，有个利用call stack的递归能够O(1)实现，绝了https://leetcode.cn/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-leetcode-solution/

const isPalindrome = (head) => {
    if (!head) return false
    let hair = new ListNode()
    hair.next = head
    let slow = fast = hair
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let end = fast ? fast.next : fast
    const reverseStart = reverse(slow.next, end)

    let result = true
    let cur = reverseStart
    while (cur) {
        if (head.val !== cur.val) {
            result = false
        }
        cur = cur.next
        head = head.next
    }
    return result
}

//                slow     fast
// 1. hair -> 1 -> 2 -> 2 -> 1
//               prev
//                 1 ->  
// 2. hair -> 1 -> 2 -> 2 -> null


const reverse = (start, end) => {
    let cur = start, prev = null
    while (cur !== end) {
        let next = cur.next
        cur.next = prev

        prev = cur
        cur = next
    }
    return prev
}

console.log(isPalindrome(head))