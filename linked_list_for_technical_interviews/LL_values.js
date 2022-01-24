class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


//iterative solution
const linkedListValuesIterative = (head) => {

    // if (head === null) return [];
    let current = head;
    let result = [];
    while(current != null){
        result.push(current.val);
        current = current.next
    }
    return result;
};

//RECURSIVE SOLUTION DONE WITH TWO FUNCTIONS
const linkedListValues = (head) => {
    let result = [];
    fillValues(head, result);
    return result;
};

//WANT TO SPLIT IT UP SO THAT THE RECURSION DOESN'T CREATE MULTIPLE ARRAYS
const fillValues = (head, result) => {
    if (head === null) return;
    result.push(head.val);
    fillValues(head.next, result);

};



const a0 = new Node("a");
const b0 = new Node("b");
const c0 = new Node("c");
const d0 = new Node("d");

a0.next = b0;
b0.next = c0;
c0.next = d0;

// a -> b -> c -> d

console.log(linkedListValues(a0)); // -> [ 'a', 'b', 'c', 'd' ]


const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(linkedListValues(x)); // -> [ 'x', 'y' ]

const q = new Node("q");

// q

console.log(linkedListValues(q)); // -> [ 'q' ]

console.log(linkedListValues(null)); // -> [ ]



