/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2022-08-17 00:01:19
 * @Description: ListNode instance
 */

// generate list node
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// array to linklist
const LinkList = (list) => {
    let head = new ListNode()
    let start = head

    const generateLinkList = (list) => {
        list.forEach(item => {
            head.next = new ListNode(item)
            head = head.next
        })
    }
    generateLinkList(list)
    start = start.next

    return start
}

// console linklist
const print = (linkList) => {
    while(linkList) {
        console.log('node ->', linkList, 'value ->', linkList.val)
        linkList = linkList.next
    }
}

// get center postion in linklist
const getListMid = (head) => {
    let slow = fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

module.exports = {
    ListNode,
    LinkList,
    print,
    getListMid
}