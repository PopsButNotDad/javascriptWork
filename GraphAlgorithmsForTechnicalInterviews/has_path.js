const test0 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const test1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const test2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const test3 ={
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [], 
};

const test4 = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [], 
}

//can use either depth first or breadth first

//hasPath function takes graph, source node, and destination node as arguments. 
    //recursion solution
const hasPathDepthFirst = (graph, src, dst) => {
    //if source is equal to destination return true as there is a path between those
    if (src === dst) return true;

    //keys into graph using source nodes and returns the array of neighbors
    for (let neighbor of graph[src]){
        //call recursive function using the same graph and destination but using the neighbor as the new input
            //returns boolean, if the neighbor has a path to the destination then we know the source does as well
                //if the function returns true
        if (hasPath(graph, neighbor, dst) === true){
            //return the true up the ladder
            return true;
        } //no else statement cause it will stop and not run through all the neighbors
    } 

    //returning false happens outside the for loop because if the for loop runs through all neighbors and there isnt a path only then will it be false.
    return false;
};

//cannot be recursive
//breadth first function takes a graph, source, and destination as arguments
const hasPathBreadthFirst = (graph, src, dst) => {
    //create the queue for the breadth first traversal
    const queue = [ src ];

    //always want to shift then push in breadth first

    //while there is stuff in the queue array then do stuff
    while ( queue.length > 0 ) {
        //set current to the removed item of the queue
        const current = queue.shift();
        //if the current is equal to the destination then return true || typicall want to do the checking immediately after the shifting
        if ( current === dst ) return true;
        //create for loop of every neighbor of the current
        for (let neighbor of graph[current]) {
            //push the neighbor into the queue
            queue.push(neighbor);
        }
    }
    //only after loop as completed and there isnt a pathway return false
    return false; 
}

console.log(hasPathBreadthFirst(test0, 'f', 'k')); //true
console.log(hasPathBreadthFirst(test1, 'f', 'j')); //false
console.log(hasPathBreadthFirst(test2, 'i', 'h')); //true
console.log(hasPathBreadthFirst(test3, 'v', 'w')); //true
console.log(hasPathBreadthFirst(test4, 'v', 'z')); //false