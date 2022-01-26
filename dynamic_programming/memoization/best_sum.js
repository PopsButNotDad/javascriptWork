//Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments. 

//The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum

//If there is a tie for the shortest combination, you may return any one of the shortest.

const bestSum = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;
    let shortestCombination = null;
    for (let num of numbers){
        const remainder = target - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if(remainderCombination !== null){
            const combination = [...remainderCombination, num];
            //if the combination is shorter than the current shortest, update it
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }
    memo[target] = shortestCombination;
    return shortestCombination;
};

console.log(bestSum(7, [5,3,4,7]));

console.log(bestSum(8, [2,3,5]));

console.log(bestSum(8, [1,4,5]));

console.log(bestSum(100, [1,2,5,25]));


//FOR IN = INDEXES 
//FOR OF = ACTUAL VALUES 

//brute force
    //time: O( n^m * m )
    //space: O( m ^ 2 )

//memoized
    //time: O( m^2 * n )
    //space: O( m^2 )