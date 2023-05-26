//- Необходимо реализовать метод разворота связного списка (двухсвязного или односвязного на выбор). (можно провериться тут : https://leetcode.com/problems/reverse-linked-list/)

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}
