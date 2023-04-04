// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (l1, l2) {
  //Create a dummy node to begin the iteration
  const dummy = new ListNode(-1);
  //Point current to the dummy node
  let current = dummy;

  //While there are elements in l1 and l2
  while (l1 && l2) {
    //Check if the value of l1 is less or equal to value of l2
    if (l1.val <= l2.val) {
      //If that's the case, set the next node of current to l1
      current.next = l1;
      //move l1 to the next node;
      l1 = l1.next;
      //If the element in l2 is less than elemrnt in l1
    } else {
      //set the next node of current to l2
      current.next = l2;
      //move l2 to the next node
      l2 = l2.next;
    }
    //move current to the next node
    current = current.next;
  }

  //if l1 is null, set the next node of current to l2, and vice versa
  if (!l1) current.next = l2;
  if (!l2) current.next = l1;

  //return the next node of dummy
  return dummy.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
