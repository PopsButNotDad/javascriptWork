class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//iterative solution
const linkedListFindIterative = (head, target) => {
    let current = head;

    if(head === null) return false;


    while(current != null){
        if(current.val === target) return true;

        current = current.next;
    }

    return false;
};

//recursive solution
const linkedListFind = (head, target) => {
    
    if(head === null) return false;

    if(head.val === target) return true;

    return linkedListFind(head.next, target);    


};



const a0 = new Node("a");
const b0 = new Node("b");
const c0 = new Node("c");
const d0 = new Node("d");

a0.next = b0;
b0.next = c0;
c0.next = d0;

// a -> b -> c -> d

console.log(linkedListFind(a0, "c")); // true

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");

a1.next = b1;
b1.next = c1;
c1.next = d1;

// a -> b -> c -> d

console.log(linkedListFind(a1, "q")); // false

const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

console.log(linkedListFind(node1, "jason")); // true

const node10 = new Node(42);

// 42

console.log(linkedListFind(node10, 42)); // true

const node11 = new Node(42);

// 42

console.log(linkedListFind(node11, 100)); // false