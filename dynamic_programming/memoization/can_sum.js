//Write a function `canSum(targetSum, numbers)` that takes in a target sum and an array of numbers as arguments.

//The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers
    //from the array

//You may use an element of the array as many times as needed.

//You may assume that all input numbers are nonnegative. 


const canSum = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers){
        const remainder = target - num;
        if (canSum(remainder, numbers, memo) === true){
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;

};

//TAKE THE BRUTE FORCE RETURN VALUES AND THAT IS WHAT IS PLACED IN THE HASH MAP VALUE SLOT AT THAT KEY

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));