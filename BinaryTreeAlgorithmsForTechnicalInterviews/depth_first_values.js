class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//iterative solution aka not recursive
//function takes a root object as an argument
const depthFirstValuesIterative = (root) => {
    //if the root given is equal to null then return an empty array
    if (root === null) return [];
    //stack can be made into array as long as you use .push and .pop to put and pull things off the stack
        //initialize the stack with the root node inside the stack
    const stack = [ root ];
    //result array to be returned at the end of the function
    const result = [];
    //while the stack has stuff inside of it do stuff
    while ( stack.length > 0 ){
        //set current to the removal of the object from the stack
        const current = stack.pop();
        result.push(current.val);
        //push things onto the stack || need to make sure that the left and right dont contain null values
            //push the right first then left cause left will be on top of stack after pushing , want to go left to right
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
};

//same as above but done recursively
const depthFirstValuesRecursive = (root) => {

    //base case, if the tree is empty return an empty array
    if (root === null) return [];

    let result = []

    const leftValues = depthFirstValuesRecursive(root.left); // [b, d, e]
    const rightValues = depthFirstValuesRecursive(root.right); //[c, f]

    //... operator unpacks the values inside the variables.
    result = [ root.val , ...leftValues, ...rightValues];

    return result;


};

const a1 = new Node('a');
const b1 = new Node('b');
const c1 = new Node('c');
const d1 = new Node('d');
const e1 = new Node('e');
const f1 = new Node('f');

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

//console.log(depthFirstValuesIterative(a1));
console.log(depthFirstValuesRecursive(a1));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']


const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d2 = new Node('d');
const e2 = new Node('e');
const f2 = new Node('f');
const g2 = new Node('g');

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

//console.log(depthFirstValuesIterative(a2)); 
console.log(depthFirstValuesRecursive(a2)); 
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']


const a3 = new Node('a');
//      a
//console.log(depthFirstValuesIterative(a3)); 
console.log(depthFirstValuesRecursive(a3)); 
//    -> ['a']


const a4 = new Node('a');
const b4 = new Node('b');
const c4 = new Node('c');
const d4 = new Node('d');
const e4 = new Node('e');

a4.right = b4;
b4.left = c4;
c4.right = d4;
d4.right = e4;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

//console.log(depthFirstValuesIterative(a4)); 
console.log(depthFirstValuesRecursive(a4)); 
//    -> ['a', 'b', 'c', 'd', 'e']

//console.log(depthFirstValuesIterative(null)); 
console.log(depthFirstValuesRecursive(null)); 
//    -> []
