// https://leetcode.cn/problems/reverse-nodes-in-k-group/solution/

const { ListNode, LinkList } = require("./base/ListNode")

const head = LinkList([1, 2, 3, 4, 5])


const reverseKGroup = (head, k) => {
    if (!head) return head
    // dummy为虚拟头节点
    let dummy = new ListNode()
    dummy.next = head
    let start = dummy
    let end = start.next
    let idx = 0
    // 开始遍历
    while(end) {
        idx++
        // idx为k的整数倍进行翻转
        if (idx % k === 0) {
            // 开始翻转
            start = reverse(start, end.next)
            end = start.next
        } else {
            // 非整数倍则移动end
            end = end.next
        }

    }
    return dummy.next
}

// 翻转链表
// 遍历的时候不能超过end节点

const reverse = (start, end) => {
    let [prev, cur] = [start, start.next]
    // first为头节点
    let first = start.next
    while (cur !== end) {
        let next = cur.next
        cur.next = prev

        prev = cur
        cur = next
    }
    //举例： 翻转成功后，链表为 start <- 1 <- 2 -> 3 -> 4 -> 5
    // 此时让first.next指向2, 1.next指向3 start -> 2 -> 1 -> 3 -> 4 -> 5
    start.next = prev
    first.next = cur

    return first

}

let newList = reverseKGroup(head, 2)
while (newList) {
    if (!newList) return
    console.log(newList)
    newList = newList.next
}