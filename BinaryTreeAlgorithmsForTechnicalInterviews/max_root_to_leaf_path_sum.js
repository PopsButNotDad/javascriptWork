class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root) => {
    if(root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChildPathSum;

};

const a0 = new Node(3);
const b0 = new Node(11);
const c0 = new Node(4);
const d0 = new Node(4);
const e0 = new Node(-2);
const f0 = new Node(1);

a0.left = b0;
a0.right = c0;
b0.left = d0;
b0.right = e0;
c0.right = f0;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(maxPathSum(a0)); // -> 18

const a1 = new Node(5);
const b1 = new Node(11);
const c1 = new Node(54);
const d1 = new Node(20);
const e1 = new Node(15);
const f1 = new Node(1);
const g1 = new Node(3);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
e1.left = f1;
e1.right = g1;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

console.log(maxPathSum(a1)); // -> 59

const a2 = new Node(-1);
const b2 = new Node(-6);
const c2 = new Node(-5);
const d2 = new Node(-3);
const e2 = new Node(0);
const f2 = new Node(-13);
const g2 = new Node(-1);
const h2 = new Node(-2);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

console.log(maxPathSum(a2)); // -> -8

const a = new Node(42);

//        42

console.log(maxPathSum(a)); // -> 42