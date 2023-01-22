/*
82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    head = new ListNode(NaN, head)
    let curr: ListNode | null = head;
    while (curr) {
        const next = curr.next;

        if (next !== null && next.next !== null && next.val === next.next.val) {
            let check = next.next;
            while (check !== null && check.val === next.val) check = check.next;
            curr.next = check;
        } else {
            curr = curr.next;
        }
    }

    return head.next;
}

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
