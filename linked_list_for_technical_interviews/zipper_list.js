class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//ITERATIVE SOLUTION
const zipperListsIterative = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    

    while (current1 != null && current2 != null){
        if( count % 2 === 0 ){
            tail.next = current2;
            current2 = current2.next;

        } else {
            tail.next = current1;
            current1 = current1.next;
        }

        tail = tail.next;

        count++;
    }

    if(current1 != null) tail.next = current1;
    if(current2 != null) tail.next = current2;

    return head1;
};

//RECURSIVE SOLUTION
const zipperLists = (head1, head2) => {
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;

    head2.next = zipperLists(next1, next2);

    return head1;
};



const a0 = new Node("a");
const b0 = new Node("b");
const c0 = new Node("c");
a0.next = b0;
b0.next = c0;
// a -> b -> c

const x0 = new Node("x");
const y0 = new Node("y");
const z0 = new Node("z");
x0.next = y0;
y0.next = z0;
// x -> y -> z

console.log(zipperLists(a0, x0));
// a -> x -> b -> y -> c -> z



const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");
a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;
// a -> b -> c -> d -> e -> f

const x1 = new Node("x");
const y1 = new Node("y");
const z1 = new Node("z");
x1.next = y1;
y1.next = z1;
// x -> y -> z

console.log(zipperLists(a1, x1));
// a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one1 = new Node(1);
const two1 = new Node(2);
const three1 = new Node(3);
const four1 = new Node(4);
one1.next = two1;
two1.next = three1;
three1.next = four1;
// 1 -> 2 -> 3 -> 4

console.log(zipperLists(s, one1));
// s -> 1 -> t -> 2 -> 3 -> 4

const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

console.log(zipperLists(w, one));
// w -> 1 -> 2 -> 3

const one0 = new Node(1);
const two0 = new Node(2);
const three0 = new Node(3);
one0.next = two0;
two0.next = three0;
// 1 -> 2 -> 3 

const w0 = new Node("w");
// w

console.log(zipperLists(one0, w0));
// 1 -> w -> 2 -> 3