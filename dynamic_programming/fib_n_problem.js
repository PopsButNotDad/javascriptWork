//Write a function `fib(b)` that takes in a number as an argument. 
    //The fucntion should return the n-th number of the fibonacci sequence

//The 1st and 2nd number of the sequence is 1.
    //To generate the next number of the sequence, we sum the previous two.

//fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

// const fib = (n) => {
//     if(n <= 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(6)); // -> 8
// console.log(fib(7)); // -> 13
// console.log(fib(8)); // -> 21


//IN FIB(7) HAVE TO CALCULATE FIB(B) TWICE,
    //MUST BREAK DOWN AND THEN BUILD BACK UP INSTEAD OF USING ALGORITHM ABOVE || ABOVE ALGORITHM HAS 
        //EXPONENTIAL TIME COMPLEXITY.

//MEMOIZATION 
    //memo = reminder for myself 
    //store duplicate sub problems to access later on for the answer 
    //HASH MAP EQUIVALENT IN PROGRAMMING LANGUAGE OF CHOICE 
        //IN JS IT IS A JAVASCRIPT OBJECT

//JS OBJECT, KEYS WILL BE ARG TO FUNCTION && VALUE WILL BE RETURN VALUE

//the memo portion of this states that if I were to call the function without a second argument value 
    //it will just use the default given on definittion
const fib1 = (n, memo = {}) => {
    //if n is already in the memo object then return the value at n key
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    //THE KEY YOU USE TO ACCESS IS ALWAYS JUST WHAT THE ARGUMENT IS
        //STORE THE CALCULATIONS IN THE 'HASH MAP' / OBJECT AT THE N KEY FOR ACCESS LATER ON.
            //WANT TO MAKE SURE TO PASS THE MEMO BACK INTO THE RECURSIVE CALLS
    memo[n] = fib1(n - 1, memo) + fib1(n - 2, memo);
    return memo[n];
};

console.log(fib1(6)); // -> 8
console.log(fib1(7)); // -> 13
console.log(fib1(8)); // -> 21
console.log(fib1(50)); // -> 12586269025


