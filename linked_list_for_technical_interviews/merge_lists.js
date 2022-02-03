//Write a function, mergeLists, that takes in pointers to the heads of the two sorted linked lists. The function should
//merge the linked two lists together into single sorted linked list. The function should return a pointer to the head
//of the merged linked lists. 

//Do this in place, by mutating the original Nodes.

//You may assume that both input lists are non-empty and contain increasing sorted numbers.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
  
const mergeLists = (head1, head2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;

    let current1 = head1;
    let current2 = head2;

    while(current1 !== null && current2 !== null){
        if(current1.val < current2.val){
            tail.next = current1;
            current1 = current1.next;
        } else{
            tail.next = current2;
            current2 = current2.next;
        }

        tail = tail.next;
    }

    if(current1 === null){
        tail.next = current2;
    }

    if(current2 === null){
        tail.next = current1;
    }

    return dummyHead.next;
};

const mergeListsRe = (head1, head2) => {
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    if(head1.val < head2.val){
        head1.next = mergeListsRe(head1.next, head2);
        return head1;
    } else {
        head2.next = mergeListsRe(head1, head2.next);
        return head2;
    }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

console.log(mergeLists(a, q));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 

const a0 = new Node(5);
const b0 = new Node(7);
const c0 = new Node(10);
const d0 = new Node(12);
const e0 = new Node(20);
const f0 = new Node(28);
a0.next = b0;
b0.next = c0;
c0.next = d0;
d0.next = e0;
e0.next = f0;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q0 = new Node(1);
const r0 = new Node(8);
const s0 = new Node(9);
const t0 = new Node(10);
q0.next = r0;
r0.next = s0;
s0.next = t0;
// 1 -> 8 -> 9 -> 10

console.log(mergeLists(a0, q0));
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28 

const h1 = new Node(30);
// 30

const p1 = new Node(15);
const q1 = new Node(67);
p1.next = q1;
// 15 -> 67

console.log(mergeLists(h1, p1));
// 15 -> 30 -> 67




