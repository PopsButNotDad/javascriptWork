class Node {
	constructor(val) {
		this.val = val;
    	this.left = null;
    	this.right = null;
  }
}


const breadthFirstValues = (root) => {

	if(root === null) return [];

	const queue = [ root ];

	const result = [];

	while (queue.length > 0){
		current = queue.shift();
		result.push(current.val);

		if(current.left) queue.push(current.left);
		if(current.right) queue.push(current.right);
	}

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

console.log(breadthFirstValues(a1)); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']


const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d2 = new Node('d');
const e2 = new Node('e');
const f2 = new Node('f');
const g2 = new Node('g');
const h2= new Node('h');

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(breadthFirstValues(a2)); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const a3 = new Node('a');
const b3 = new Node('b');
const c3 = new Node('c');
const d3 = new Node('d');
const e3 = new Node('e');
const x3 = new Node('x');

a3.right = b3;
b3.left = c3;
c3.left = x3;
c3.right = d3;
d3.right = e3;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

console.log(breadthFirstValues(a3)); 
//    -> ['a', 'b', 'c', 'x', 'd', 'e']

console.log(breadthFirstValues(null)); 
//    -> []