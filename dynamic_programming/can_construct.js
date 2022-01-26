//Write a function `canConstruct(target, wordbank)` that accepts a target string and an array of strings.

//The function should return a boolean indicating whether or not the `target` can be constructed by concatenating
    //elemends of the `wordbank` array.

//You may reuse the elements of the `wordbank` as many times as needed


const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank){
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true
            } 
        }
    }

    memo[target] = false;
    return false;
};


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
console.log(canConstruct('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); //false 

//brute force 
    //time: O( n^m * m )
    //space: O( m^2 )

//memoized
    //time: O( n * m^2 )
    //space: O( m^2 )