//Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

//The function should return a boolean indicating whether or not is is possible to generate the targetSum using numbers
    //from the array

//You may use an element of the array as many times as needed. 

//You may assume that all input numbers are nonnegative.

const canSum = (target, numbers) => {
    const table = Array(target + 1).fill(false);

    table[0] = true;

    // original loop had i < = table.length but without checking out of bounds it will run forever and increase the
        //length. Changed to less than or equal to the target to stop that
    for(let i = 0; i <= target; i++){
        if(table[i] === true){
            for(let num of numbers){
                table[i + num] = true;
            }
        }
    }

    return table[target];

};


console.log(canSum(7, [2,3]));// true
console.log(canSum(7, [5,3,4,7]));// true
console.log(canSum(7, [2,4]));// false
console.log(canSum(8, [2,3,5]));// true
console.log(canSum(300, [7,14]));// false

//m = targetSum
//n = numbers.length

//time: O( mn )
//space: O( m )