// 翻转链表

const  {LinkList, ListNode} = require('./base/ListNode')

const start = LinkList([1, 2, 3, 4, 5])
const reverseList = function(head) {
    if (!head) return head
    let prev = null
    while(head) {
        let next = head.next
        head.next = prev

        prev = head
        head = next
    }
    return prev
};

let result = reverseList(start)

console.log('-------reverse------')
while(result) {
    console.log(result)
    result = result.next
}