//Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return
//the length of the longest consecutive streak of the same value within the list.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0
    let prevVal = null;
    let currentNode = head;

    while(currentNode !== null){
        if(currentNode.val = prevVal){
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        if(currentStreak > maxStreak){
            maxStreak = currentStreak;
        }


        prevVal = currentNode.val;
        currentNode = currentNode.next;
    }

    return maxStreak;
};

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)); // 3

const a0 = new Node(3);
const b0 = new Node(3);
const c0 = new Node(3);
const d0 = new Node(3);
const e0 = new Node(9);
const f0 = new Node(9);

a0.next = b0;
b0.next = c0;
c0.next = d0;
d0.next = e0;
e0.next = f0;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

console.log(longestStreak(a0)); // 4

const a1 = new Node(9);
const b1 = new Node(9);
const c1 = new Node(1);
const d1 = new Node(9);
const e1 = new Node(9);
const f1 = new Node(9);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

console.log(longestStreak(a1)); // 3

const a2 = new Node(5);
const b2 = new Node(5);

a2.next = b2;

// 5 -> 5

console.log(longestStreak(a3)); // 2

const a3 = new Node(4);

// 4

console.log(longestStreak(a4)); // 1

console.log(longestStreak(null)); // 0

//Complexity 
    //n = number of nodes

    //Time: O( n )
    //Space: O( 1 )