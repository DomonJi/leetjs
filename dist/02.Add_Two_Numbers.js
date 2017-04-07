"use strict";

/**
 * Created by Domon on 17/4/7.
 */
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function addTwoNumbers(l1, l2) {
  var dummy = new ListNode(0),
      p = dummy;
  while ((dummy.val = ~~(dummy.val / 10)) || l1 || l2) {
    l1 && (dummy.val += l1.val, l1 = l1.next);
    l2 && (dummy.val += l2.val, l2 = l2.next);
    p = p.next = new ListNode(dummy.val % 10);
  }
  return dummy.next;
};