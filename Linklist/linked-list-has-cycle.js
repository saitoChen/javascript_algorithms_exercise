/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-28 21:35:45
 * @Description: 
 */
// https://leetcode.cn/problems/linked-list-cycle/

// [3,2,0,-4], pos = 1 -> true
// 思路是快慢指针，慢指针每次走一格，快指针每次走两格，如果快指针最后为null，则没有环，如果最后两格指针相遇，则有环

const hasCycle = (head) => {
    if (!head) return false
    let slow = fast = head
    let result = false
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            result = true
        }
    }
    return result
}