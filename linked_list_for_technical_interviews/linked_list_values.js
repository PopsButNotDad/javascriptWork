class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

//BASES FOR ALMOST ALL LINKED LIST TRAVERSAL CODE -- ITERATIVE SOLUTION
const printLinkedListIterative = (head) => {
    //set the current variable to the head of the linked list
    let current = head;
    //while the current variable is not equal to null do stuff
    while(current != null){
        console.log(current.val);
        //set the current to the next node
        current = current.next;
    }
};


//RECURSIVE SOLUTION HERE
//use head here because by logic of the linked list each node is the head of their own linked list
    //except the null node at the end
const printLinkedList = (head) => {
    //if the head node ever equals null then stop the function
    if(head === null) return;
    //console.log the value
    console.log(head.val);
    //then recursively run the function again on the next node in the list
    printLinkedList(head.next);
};

printLinkedList(a);