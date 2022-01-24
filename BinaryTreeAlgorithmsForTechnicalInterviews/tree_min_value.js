class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//breadth first || TECHNICALLY O(N^2) SOLUTION BECAUSE OF HOW THE .SHIFT() FUNCTION WORKS. 
    //AKA VERY BAD, LEARN RECURSION
const treeMinValueBreadth = (root) => {

    const queue = [ root ];

    let minValue = Infinity;

    while (queue.length > 0){
        const current = queue.shift();

        if (current.val < minValue) minValue = current.val;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return minValue;
};
//depth first -- iterative
const treeMinValueDepth = (root) => {

    const stack = [ root ];

    let minValue = Infinity;

    while(stack.length > 0) {
        const current = stack.pop();

        if (current.val < minValue) minValue = current.val;

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return minValue;
};

//depth first -- recursive
const treeMinValue = (root) => {
    if (root === null) return Infinity;

    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
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

console.log(treeMinValue(a0)); // -> -2

const a1 = new Node(5);
const b1 = new Node(11);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(14);
const f1 = new Node(12);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

console.log(treeMinValue(a1)); // -> 3

const a2 = new Node(-1);
const b2 = new Node(-6);
const c2 = new Node(-5);
const d2 = new Node(-3);
const e2 = new Node(-4);
const f2 = new Node(-13);
const g2 = new Node(-2);
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
// -3   -4   -13
//     /       \
//    -2       -2

console.log(treeMinValue(a2)); // -> -13

const a3 = new Node(42);

//        42

console.log(treeMinValue(a3)); // -> 42