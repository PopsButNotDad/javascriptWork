
//largest component function takes a graph as an input 
const largestComponent = (graph) => {
    //initialize variable to return 
    let longest = 0;
    //want to mark visited to avoid cycles, using set allows for O(1) time 
    const visited = new Set();
    //for every node in the graph (every parameter of the object)
    for (let node in graph){
        //run the depth first traversal and return the size of the component
        const size = exploreSize(graph, node, visited);
        //if the size is greater than the longest set the longest to the size
        if (size > longest) longest = size;
    }
    //return the longest
    return longest;

};

//explore size is a depth first recursive traversal that takes a graph, node, and visited arguments
const exploreSize = (graph, node, visited) => {
    //if the node has been visited return nothing || note the similar type as the function above, want to return a number
    if(visited.has(node)) return 0;
    //add the node to the visited set
    visited.add(node);
    //initialize a size variable that is equivalent to the starting node
    let size = 1;
    //for loop of every neighbor node to the starting node
    for(let neighbor of graph[node]){
        //rerun the function with every neighbor node of each node and increment the size variable
        size += exploreSize(graph, neighbor, visited);
    }
    //return the size variable
    return size;

};

//for disconnected components need to have not just the traversal function but also an iterative function 
    //cause the traversal function won't touch all the disconnected components without forcefully hopping to a new 
        //component


console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
})); // -> 4

console.log(largestComponent({  
    1: ['2'],
    2: ['1','8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
})); // -> 6

console.log(largestComponent({
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
})); // -> 5

console.log(largestComponent({})); // -> 0

console.log(largestComponent({
    0: ['4','7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
  })); // -> 3