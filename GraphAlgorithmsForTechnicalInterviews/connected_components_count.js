//can use either breadth first or depth first
//must also use some sort of iterative counting and a count variable
//while iterating through connected components must also mark the nodes as visited to avoid cycles


//function takes graph as argument
const connectedComponentsCount = (graph) => {
    //variable for counting the connected components
    let count = 0;
    //new set for the visited variable || used to prevent cycles
    const visited = new Set();
    //since given javascript object want to use word 'in' here
    for (let node in graph){
        //depth first traversal from start node as far as possible if the function returns true then increment the count
        if (explore(graph, node, visited) === true){
            count += 1;
        }
    }

    console.log(count);
};


//doing depth first traversal recursively
const explore = (graph, current, visited) => {
    //if the current node as been visited return false
    if (visited.has(String(current))) return false;

    //if the node has not been visited yet mark it as such
    visited.add(String(current));

    //for each neighbor in the current object array
    for (let neighbor of graph[current]){
        //recursively run through it again
        explore(graph, neighbor, visited);
    }

    //only after all the neighbor calls from the for loop above execute will the function return true. 
    return true;
};

// const exploreB = (graph, current, visited) => {
//     const queue = [ current ];

//     if (visited.has(String(current))) return false;

//     visited.add(String(current));

//     while ( queue.length > 0 ) {
//         current = queue.shift();

//         for (let neighbor of graph[current]){
//             queue.push(neighbor)
//         }

//     }

//     return true;
// };


connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}); // 2

connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
}); // 1

connectedComponentsCount({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}); // 3

connectedComponentsCount({}); // 0

connectedComponentsCount({
    0: [4,7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
}); // 5

