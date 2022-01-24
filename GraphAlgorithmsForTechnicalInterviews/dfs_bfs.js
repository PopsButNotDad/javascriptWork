

//depth first print function takes a graph and source node as an argument
const depthFirstPrint = (graph, source) => {
    //initialize the stack with the source node as the starting point
    const stack = [ source ];

    //while the stack array length is greater than 0 then do stuff
    while ( stack.length > 0 ) {
        //.pop() means remove the last item of the array || or the 'top' of the stack
        const current = stack.pop();
        //console log the current node && this print statement is written right after something is popped. thing that is popped is exactly what is printed.
        
        console.log(current + ' not recursive');
        //for of loop iterates through order of array
        for (let neighbor of graph[current]) {
            //push the neighbors into the stack
            stack.push(neighbor)
        }
    }

};

//same as above but using recursion || no explicit base case because implicit base case is in the 'stack' below.
const depthFirstPrintRecursion = (graph, source) => {
    //console log the starting node 
    console.log(source + ' recursive');
    //for loop of neighbors of source node
    for (let neighbor of graph[source]){
        //make recursive call for every neighbor in the array
        depthFirstPrintRecursion(graph, neighbor);
    }
};

//breadth first traversal is almost always iterative cause recursion often involves stack and Breadth First uses Queue

//breadth first function takes a graph and a source node as argument
const breadthFirstPrint = (graph, source) => {
    //create the queue and place the source node inside the array
    const queue = [ source ];
    //while loop that executes as long as the queue has things inside it
    while ( queue.length > 0 ) {
        //removes the front of the array and saves it to the variable current. 
        current = queue.shift();
        //console log the current node
        console.log(current + ' breadth first');
        //for loop of the neighbors from the current node
        for (let neighbor of graph[current]){
            //push the neighbors into the queue from the back
            queue.push(neighbor);
        }
    }
};

//notice structure of the breadth first and depth first non recursion is almost identical
    //DFT is pop then push 
    //BFT is shift then push 


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};


depthFirstPrint(graph, 'a'); //abdfce

depthFirstPrintRecursion(graph, 'a') //acebdf

breadthFirstPrint(graph, 'a') // acbedf