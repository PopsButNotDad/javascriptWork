const test0=[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const testGraph0 = {
    i: ['j','k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o'],
};

const test1=[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const test2=[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const test3=[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const test4=[
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];



const test5=[
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

const test6=[
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

const test7=[
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

const test8=[
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

const test9=[
    ['s', 'r'],
    ['t', 'q'],
    ['q', 'r'],
];


//can do either breadth first or depth first traversal

//this one is depth first
//undirected path function takes an edges array and two nodes
const undirectedPathDepth = (edges, nodeA, nodeB) => {
    //use helper function to create adjacent path object to then traverse through
    const graph = buildGraph(edges);

    // sets in O(1) time can add something to set and check something within the set [need to look up the set documentation]
    return hasPath(graph, nodeA, nodeB, new Set());


};

//depth first function has path takes graph, source, and destination as arguments
const hasPath = (graph, src, dst, visited) => {
    //if the source is equal to the destination return true
    if ( src === dst ) return true;
    //if the source node has been visited. [need to look up the has documentation]
    if (visited.has(src)) return false;

    visited.add(src);

    //iterate through all the neighbors of that node within the graph object
    for (let neighbor of graph[src]){
        //recursive call to do all the neighbors of the nodes || visited needs to be gloabl for entire traversal
        if (hasPath(graph, neighbor, dst, visited) === true){
            //pass the true up above
            return true;
        }
    }
    //if loop finishes and nothing matches return false
    return false;
};

//helper function to create adjacent path object
//function buildGraph takes edges array 
const buildGraph = (edges) => {

    //create the empty object
    const graph = {};

    //iterate through all edges in the edges array
    
    for (let edge of edges) {
        //single edge is a pair, array of those pairs equals 1 edge
        const [ a, b ] = edge;

        //initialize the ndoes via keys of the graph object
        //if the a key is not in the graph then set it to an empty array within the object && same for b
        if(!( a in graph )) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        //once the keys are in the object then you can add the neighbors via the edges
        graph[a].push(b);
        //undirected graph so have to do to both neighbors as the path can be traversed either way
        graph[b].push(a);

    }

    return graph;
};


console.log(undirectedPathDepth(test0, 'j', 'm')); // true
console.log(undirectedPathDepth(test1, 'm', 'j')); // true
console.log(undirectedPathDepth(test2, 'l', 'j')); // true
console.log(undirectedPathDepth(test3, 'k', 'o')); // false
console.log(undirectedPathDepth(test4, 'i', 'o')); // false
console.log(undirectedPathDepth(test5, 'a', 'b')); // true
console.log(undirectedPathDepth(test6, 'a', 'c')); // true
console.log(undirectedPathDepth(test7, 'r', 't')); // true
console.log(undirectedPathDepth(test8, 'r', 'b')); // false
console.log(undirectedPathDepth(test9, 'r', 't')); // true