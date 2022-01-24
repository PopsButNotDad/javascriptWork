class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//breadth first approach
const treeIncludesBreadth = (root, target) => {
    
    if(root === null) return false;

    const queue = [ root ];

    while (queue.length > 0){
        const current = queue.shift();

        if(current.val === target) return true;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);

    }

    return false
};

//depth first approach -- iterative
const treeIncludesDepth = (root, target) => {
    if(root === null) return false;

    const stack = [ root ];

    while (stack.length > 0){
        const current = stack.pop();

        if(current.val === target) return true;

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return false;
};

//depth first apprach -- recursive
const treeIncludes = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;

    return treeIncludes(root.left, target) || treeIncludes(root.right, target);

};


const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludes(a1, "e")); // -> true

const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");
const e2 = new Node("e");
const f2 = new Node("f");

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludes(a2, "a")); // -> true


const a3 = new Node("a");
const b3 = new Node("b");
const c3 = new Node("c");
const d3 = new Node("d");
const e3 = new Node("e");
const f3 = new Node("f");

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeIncludes(a3, "n")); // -> false

const a4 = new Node("a");
const b4 = new Node("b");
const c4 = new Node("c");
const d4 = new Node("d");
const e4 = new Node("e");
const f4 = new Node("f");
const g4 = new Node("g");
const h4 = new Node("h");

a4.left = b4;
a4.right = c4;
b4.left = d4;
b4.right = e4;
c4.right = f4;
e4.left = g4;
f4.right = h4;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludes(a4, "f")); // -> true

const a5 = new Node("a");
const b5 = new Node("b");
const c5 = new Node("c");
const d5 = new Node("d");
const e5 = new Node("e");
const f5 = new Node("f");
const g5 = new Node("g");
const h5 = new Node("h");

a5.left = b5;
a5.right = c5;
b5.left = d5;
b5.right = e5;
c5.right = f5;
e5.left = g5;
f5.right = h5;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(treeIncludes(a5, "p")); // -> false

console.log(treeIncludes(null, "b")); // -> false