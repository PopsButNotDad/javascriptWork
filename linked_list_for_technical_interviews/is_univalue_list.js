//Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should
//return a boolean indivating whether or not the linked list contains exactly one inque value.

//You may assume that the inpyut list is non-empty.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const isUnivalueList = (head) => {
    let current = head;
    while(current !== null && next !== null){
        if(current.val === head.val){
            current = current.next;
        } else {
            return false;
        }
    }
    return true;
};

const isUnivalueListRe = (head, prevVal = null) => {
    if(head === null) return true;
    if (prevVal !== null && head.val !== prevVal) return false;
    return isUnivalueListRe(head.next, head.val);
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true

const a0 = new Node(7);
const b0 = new Node(7);
const c0 = new Node(4);

a0.next = b0;
b0.next = c0;

// 7 -> 7 -> 4

console.log(isUnivalueList(a0)); // false

const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

console.log(isUnivalueList(u)); // true

const u0 = new Node(2);
const v0 = new Node(2);
const w0 = new Node(3);
const x0 = new Node(3);
const y0 = new Node(2);

u0.next = v0;
v0.next = w0;
w0.next = x0;
x0.next = y0;

// 2 -> 2 -> 3 -> 3 -> 2

console.log(isUnivalueList(u0)); // false

const z = new Node('z');

// z

console.log(isUnivalueList(z)); // true