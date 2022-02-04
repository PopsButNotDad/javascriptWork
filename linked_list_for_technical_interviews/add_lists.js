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
    const dummyHead = new Node(null);
    let tail = dummyhead;
    let carry = 0;
    let current1 = head1;
    let current2 = head2;

    while(current1 !== null || current2 !== null || carry === 1){
        const val1 = current1 === null ? 0 : current1.val;
        const val2 = current2 === null ? 0 : current2.val;

        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        const digit = sum % 10;

        if(current1 !== null)current1 = current1.next;
            
        if(current2 !== null)current2 = current2.next;
        

        tail.next = new Node(digit);
        tail = tail.next;

    }
    
    return dummyHead.next;

};

const addListsRe = (head1, head2, carry = 0) => {
    if(head1 === null && head2 === null && carry === 0) return null;
    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;
    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    const resultNode = new Node(digit);


    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;
    resultNode.next = addListsRe(next1, next2, nextCarry);

    return resultNode;

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

