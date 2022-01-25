//Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the 
    //bottom right corner. You may only move down or right. 

//In how many ways can you travel to the goal on a grid with dimensions m*n? 

//Write a function `gridTraveler(m,n)` that calculates this.

//When dimensions are 1,1 then there is 1 way to traverse through the grid. (base case)
//When any dimenstion is 0 then there is 0 ways to traverse through the grid (base case)

const gridTraveler = (m, n) => {
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    const down = gridTraveler(m - 1, n);
    const right = gridTraveler(m, n-1);

    return down + right;
}

//console.log(gridTraveler(10, 10));

console.log(gridTraveler(2,3));

console.log(gridTraveler(4,4));

