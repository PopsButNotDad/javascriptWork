class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//breadth first approach
const treeSumBreadth = (root) => {
    if(root === null) return 0;

    let total = 0;

    const queue = [ root ];

    while (queue.length > 0){
        const current = queue.shift();
        total = total + current.val;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return total
};

//depth first -- iterative
const treeSumDepth = (root) => {
    if (root === null) return 0;

    let total = 0;

    const stack = [ root ];

    while (stack.length > 0){
        const current = stack.pop();

        total = total + current.val;

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return total;

};

//depth first -- recursion
const treeSum = (root) => {
    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
    
};


const a1 = new Node(3);
const b1 = new Node(11);
const c1 = new Node(4);
const d1 = new Node(4);
const e1 = new Node(-2);
const f1 = new Node(1);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a1)); // -> 21

const a2 = new Node(1);
const b2 = new Node(6);
const c2 = new Node(0);
const d2 = new Node(3);
const e2 = new Node(-6);
const f2 = new Node(2);
const g2 = new Node(2);
const h2 = new Node(2);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

console.log(treeSum(a2)); // -> 10

console.log(treeSum(null)); // -> 0