//Write a function, addLists, that takes in the head of the two linked lists, each representing a number.
//The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means
//that the least significant digit of the number is the head. The function should return the head of a new linked
//list representing the sum of the input lists. The output lists should have its digits reversed as well.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const addLists = (head1, head2) => {
    // todo
  };

//   621
// + 354
// -----
//   975

const a10 = new Node(1);
const a20 = new Node(2);
const a30 = new Node(6);
a10.next = a20;
a20.next = a30;
// 1 -> 2 -> 6

const b10 = new Node(4);
const b20 = new Node(5);
const b30 = new Node(3);
b10.next = b20;
b20.next = b30;
// 4 -> 5 -> 3

console.log(addLists(a10, b10));
// 5 -> 7 -> 9



//  7541
// +  32
// -----
//  7573

const a01 = new Node(1);
const a02 = new Node(4);
const a03 = new Node(5);
const a04 = new Node(7);
a01.next = a02;
a02.next = a03;
a03.next = a04;
// 1 -> 4 -> 5 -> 7

const b01 = new Node(2);
const b02 = new Node(3);
b01.next = b02;
// 2 -> 3 

console.log(addLists(a01, b01));
// 3 -> 7 -> 5 -> 7



//   39
// + 47
// ----
//   86

const a11 = new Node(9);
const a21 = new Node(3);
a1.next = a21;
// 9 -> 3

const b11 = new Node(7);
const b21 = new Node(4);
b11.next = b21;
// 7 -> 4

console.log(addLists(a11, b11));
// 6 -> 8



//   89
// + 47
// ----
//  136

const a13 = new Node(9);
const a23 = new Node(8);
a13.next = a23;
// 9 -> 8

const b13 = new Node(7);
const b23 = new Node(4);
b13.next = b23;
// 7 -> 4

console.log(addLists(a13, b13));
// 6 -> 3 -> 1



//   999
//  +  6
//  ----
//  1005

const a31 = new Node(9);
const a32 = new Node(9);
const a33 = new Node(9);
a31.next = a32;
a32.next = a33;
// 9 -> 9 -> 9

const b31 = new Node(6);
// 6

console.log(addLists(a31, b31));
// 5 -> 0 -> 0 -> 1

