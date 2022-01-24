class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//iterative solution
const getNodeValueIterative = (head, index) => {
    let current = head;
    let count = 0;
    while (current != null){
        if(count === index) return current.val;
        count++;
        current = current.next
    }
    return null;
};

//recursive solution
const getNodeValue = (head, index) => {
    if(head === null) return null;
    if(index === 0) return head.val;
    return getNodeValue(head.next, index - 1);
}; 

const a0 = new Node("a");
const b0 = new Node("b");
const c0 = new Node("c");
const d0 = new Node("d");

a0.next = b0;
b0.next = c0;
c0.next = d0;

// a -> b -> c -> d

console.log(getNodeValue(a0, 2)); // 'c'

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");

a1.next = b1;
b1.next = c1;
c1.next = d1;

// a -> b -> c -> d

console.log(getNodeValue(a1, 3)); // 'd'


const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");

a2.next = b2;
b2.next = c2;
c2.next = d2;

// a -> b -> c -> d

console.log(getNodeValue(a2, 7)); // null


const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

console.log(getNodeValue(node1, 0)); // 'banana'

const node10 = new Node("banana");
const node20 = new Node("mango");

node10.next = node20;

// banana -> mango

console.log(getNodeValue(node10, 1)); // 'mango'
