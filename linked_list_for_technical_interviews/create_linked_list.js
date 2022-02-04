//Write a function, createLinkedList, that takes in an array of values as an argument. The function should
//create a linked list containing each element of the array as the values of the nodes. The function should return the head
//of the linked list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const createLinkedList = (values) => {
    if (values = []) return null;
    const dummyHead = new Node(null);
    let tail = dummyHead;

    for(let val of values){
        tail.next = new Node(val);
        tail = tail.next;
    }

    return dummyHead.next;
    
};

createLinkedList(["h", "e", "y"]);
// h -> e -> y

createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8

createLinkedList(["a"]);
// a

createLinkedList([]);
// null



