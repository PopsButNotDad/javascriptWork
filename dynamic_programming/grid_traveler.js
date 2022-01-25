//Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the 
    //bottom right corner. You may only move down or right. 

//In how many ways can you travel to the goal on a grid with dimensions m*n? 

//Write a function `gridTraveler(m,n)` that calculates this.

//When dimensions are 1,1 then there is 1 way to traverse through the grid. (base case)
//When any dimenstion is 0 then there is 0 ways to traverse through the grid (base case)

const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[key] =  gridTraveler(m - 1, n, memo) + gridTraveler(m, n-1, memo);

    return memo[key];
};

console.log(gridTraveler(2,3));

console.log(gridTraveler(3,3));
console.log(gridTraveler(10,10));
console.log(gridTraveler(18,18));


//MEMOIZATION RECIPE
    //1. Make it work
        //CAN BE SLOW THAT'S OKAY
        //Visualize the problem as a tree
        //Implement the tree using recursion
            //leaves of the tree are basecase
        //Test it
    //2. Make it efficient
        //add a memo object (hashmap)
        //add a base case to return memo values
        //store return values into the memo


//LOOK FOR CORRECTNESS THEN MAKE IT EFFICIENT