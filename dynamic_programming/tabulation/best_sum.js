//Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

//The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum

//If there is a tie for the shortest combination, you may return any one of the shortest


const bestSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);

    table[0] = [];

    for (let i = 0 ; i <= target ; i++){
        if(table[i] !== null){
            for(let num of numbers){
                const combination = [ ...table[i], num];
                //if this current combination is shorter than what is already stored
                if(!table[i + num] || table[i + num].length > combination.length){
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[target];
};



console.log(bestSum(7, [5, 3, 4, 7]));// [7]
console.log(bestSum(8, [2, 3, 5]));// [3, 5]
console.log(bestSum(8, [1, 4, 5]));// [4, 4]
console.log(bestSum(100, [1, 2, 5, 25]));// [25, 25, 25, 25]


//Complexity
    // m = targetSum
    // n = numbers.length

    // Time: O( m^2 * n )
    // Space: O( m^2 )