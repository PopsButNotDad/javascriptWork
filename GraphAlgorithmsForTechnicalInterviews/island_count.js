
//function island count takes a grid as an argument
const islandCount = (grid) => {
    //create a new visited set to avoid cycles
    const visited = new Set();
    let count = 0;
    //for loop to iterate through the rows
    for (let r = 0; r < grid.length; r++){
        //for loop to iterate through each column in those rows
        for(let c = 0; c < grid[0].length; c++){
            //helper function that does the traversal and if the function returns true
            if(explore(grid, r, c, visited)){
                //increment the count of the islands traversed
                count++;
            }; 
        }
    }
    //return the final count
    return count;
};

////////////////////////////////////////////////////////////////
//THIS FUNCTION IS VERY COMMON WHEN IT COMES TO GRAPH PROBLEMS//
///////////////////////////////////////////////////////////////


//explore function takes a grid, a row, a column, and the visited set as arguments
const explore = (grid, r, c, visited) => {
    //boolean variable that checks if the row is inbounds of the grid || same is done for the column 
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    //if statement to not consider out of bounds position
    if (!rowInbounds || !colInbounds) return false;
    
    //check if that grid position is water || make sure to right the in bounds stuff before this cause it can cause an
        //out of bounds error if done the other way around.
    if(grid[r][c] === 'W') return false; 

    //set variable current position to string version of row and column cause of set weirdness
    const pos = r + ',' + c;
    //if the visited set has the position return false
    if (visited.has(pos)) return false;
    //add the position to the visited set
    visited.add(pos);
    

    //WANT TO LOOK BEFORE LEAP AKA CHECK THE OUT OF BOUNDS BEFORE DOING THIS STUFF

    //recursively call the explore function to run for every "neighbor"
    explore(grid, r-1, c, visited);

    explore(grid, r+1, c, visited);

    explore(grid, r, c-1, visited);

    explore(grid, r, c+1, visited);



    //return true when this is completed because it means we traversed an island and thus can count it
    return true;
};



const test0 = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ]; // 3
const test1 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ]; // 4
const test2 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
  ]; // 1
const test3 = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
  ]; // 0

console.log(islandCount(test0));
console.log(islandCount(test1));
console.log(islandCount(test2));
console.log(islandCount(test3));