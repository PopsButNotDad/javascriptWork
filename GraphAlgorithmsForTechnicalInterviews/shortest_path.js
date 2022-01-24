
//shortest path function takes edges, start node, and destination node as arguments
const shortestPath = (edges, src, dst) => {
    //create new set to track the visited nodes, make sure the source node starts inside the set
    const visited = new Set( [ src ] );
    //convert the edge list to an adjacency list (javascript object)
    const graph = convert(edges);
    //initialize the queue for the breadth first traversal with the source node and the distance at 0
    const queue = [
        [ src, 0 ]
    ];
    //while there are things in the queue
    while ( queue.length > 0 ){
        //take the stuff out of the queue and set it to some variables
        const [ node, distance ] = queue.shift();
        //if the current node is equal to the destination node return the distance variable
        if (node === dst) return distance;
        //iterate through the javascript object || this the breadth first traversal part
        for (let neighbor of graph[node]) {
            //if the neighbor hasnt been visited yet
            if(!visited.has(neighbor)){
                //mark the neighbor as being visited
                visited.add(neighbor);
                //add to the queue and increment the distance variable
                queue.push([neighbor, distance + 1]);
            } 
        }
    }
    // if the traversal completes return -1 as a value so we know there are no paths for the given nodes
    return -1
};

//conversion function for the edges array
const convert = (edges) => {
    //create the object / adjacency list
    const graph = {};
    //for every edge in the edges array
    for (let edge of edges){
        //set the edges pairs to a single edge
        const [ a , b ] = edge;
        //if the a node is not in the graph then set a as a key
        if(!(a in graph)) graph[a] = [];
        //if the b node is not in the graph then set b as a key 
        if(!(b in graph)) graph[b] = [];
        //push the b node as a neighbor/value into the a key
        graph[a].push(b);
        //push the a node as a neighbor/value in the b key
        graph[b].push(a);
    }
    //return the new object/adjacency list
    return graph;
};

const test0 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
const test1 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
const test2 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
const test3 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
const test4 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
  ];
const test5 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
  ];
const test6 = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
  ];
const test7 = [
    ['m', 'n'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'q'],
    ['t', 'o'],
    ['r', 'q'],
    ['r', 's']
  ];

console.log(shortestPath(test0, 'w', 'z')); // -> 2
console.log(shortestPath(test1, 'y', 'x')); // -> 1
console.log(shortestPath(test2, 'a', 'e')); // -> 3
console.log(shortestPath(test3, 'e', 'c')); // -> 2
console.log(shortestPath(test4, 'b', 'g')); // -> -1
console.log(shortestPath(test5, 'w', 'e')); // -> 1
console.log(shortestPath(test6, 'n', 'e')); // -> 2
console.log(shortestPath(test7, 'm', 's')); // -> 6