const minimumIsland = (grid) => {

    const visited = new Set();

    //start off at positive infinity cause first time through no matter what you hit it will be smaller than infinity.
    let minSize = Infinity;

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            const size = exploreSize(grid, r, c, visited);
            if (size > 0 && size < minSize){
                minSize = size;
            }
        }
    }

    return minSize;
};

const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = (0 <= r && r < grid.length)
    const colInbounds = (0 <= c && c < grid[0].length)

    if (!rowInbounds || !colInbounds) return 0;

    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;

    if(visited.has(pos)) return 0;
    visited.add(pos);

    //initialize size variable at 1 cause already in a landmass
    let size = 1;
    size += exploreSize(grid, r-1, c, visited);
    size += exploreSize(grid, r+1, c, visited);
    size += exploreSize(grid, r, c-1, visited);
    size += exploreSize(grid, r, c+1, visited);

    return size;
}

const test0 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];
  
console.log(minimumIsland(test0)); // -> 2

const test1 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
];
  
console.log(minimumIsland(test1)); // -> 1

const test2 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
];
  
console.log(minimumIsland(test2)); // -> 9

const test3 = [
    ['W', 'W'],
    ['L', 'L'],
    ['W', 'W'],
    ['W', 'L']
];
  
console.log(minimumIsland(test3)); // -> 1