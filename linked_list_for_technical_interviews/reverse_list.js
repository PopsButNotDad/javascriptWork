class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//iterative solution
const reverseListIterative = (head) => {
    let current = head;
    let prev = null;
    while (current != null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

//recursive solution
//CAN ADD NULL ARGUMENTS INTO FUNCTION AND IT WILL BE CONSIDERED DEFAULT
    //IF NOTHING IS PASSED THROUGH IT WILL DEFAULT TO THE ONE GIVEN ON INITIALIZATION
const reverseList = (head, prev = null) => {
    //IF HEAD IS NULL AKA IF WE HAVE REACHED THE END OF OUR LINKED LIST THEN RETURN PREV
    if(head === null) return prev;
    //MAKES SURE TO GRAB A REFERENCE TO THE NEXT NODE
    const next = head.next;
    //FUNCTION RETURNS A NODE IN THE NEW LINKED LIST
    return reverseList(next, head);
};



const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(reverseList(a)); // f -> e -> d -> c -> b -> a


const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(reverseList(x)); // y -> x

const p = new Node("p");

// p

console.log(reverseList(p)); // p

