//Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should
//insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0.
//The function should return the head of the resulting linked list. 

//Do this in place

//You may assume the input list is non-empty and the index is not greater than the length of the input list. 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
  
const insertNode = (head, value, index) => {

};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");

a1.next = b1;
b1.next = c1;
c1.next = d1;

// a -> b -> c -> d

insertNode(a1, 'v', 3);
// a -> b -> c -> v -> d

const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");

a2.next = b2;
b2.next = c2;
c2.next = d2;

// a -> b -> c -> d

insertNode(a2, 'm', 4);
// a -> b -> c -> d -> m

const a3 = new Node("a");
const b3 = new Node("b");

a3.next = b3;

// a -> b

insertNode(a3, 'z', 0);
// z -> a -> b 