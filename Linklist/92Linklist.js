/*
 * @Author: chenjianfeng chenjianfeng93@163.com
 * @Date: 2024-03-23 22:26:36
 * @Description: 
 */
const { ListNode, LinkList } = require("./base/ListNode")

const list = LinkList([4, 2, 1, 3])
const list1 = LinkList([1,2, 4])
const list2 = LinkList([1,3,4])

var sortList = function (head) {
    // 思路：取链表的中点
    if (!head && !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let mid = getMidNode(dummy);
    // 需要切断两个链表
    let newStartNode = mid.next;
    mid.next = null;
    return mergeList(sortList(dummy.next), sortList(newStartNode));
  };
  
  const getMidNode = (dummy) => {
    let slow = dummy,
      fast = dummy;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  
  const mergeList = (list1, list2) => {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
      if (list1.val > list2.val) {
        cur.next = list2;
        list2 = list2.next;
      } else {
        cur.next = list1;
        list1 = list1.next;
      }
      cur = cur.next;
    }
    cur.next = list1 || list2;
  
    return dummy.next;
  };


sortList(list)