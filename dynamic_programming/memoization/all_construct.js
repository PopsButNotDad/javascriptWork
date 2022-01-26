//Write a function `allConstruct(target, wordBank)` that accepts a targetr string and an array of strings.

//The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating
    //elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs
        //the `target`

//You may reuse elements of `wordBank` as manu times as needed.

const allConstruct = (target, wordBank, memo ={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); 
//[
    //[ 'purp' , 'le' ]
    //[ 'p', 'ur', 'p', 'le' ]
//]

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); 
//[
    //[ 'ab', 'cd', 'ed' ]  
    //[ 'ab', 'c', 'def' ]
    //[ 'abc', 'def' ]
    //[ 'abcd', 'ef' ]
//]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); 
//[]

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); // [] 

//MEMOIZING THIS ISNT AS HELPFUL AS THE LAST PROBLEMS BECAUSE NONE OF THESE EXAMPLES ARE THE WORST CASE 
//THE WORST CASE WOULD BE HAVING TO DRAW OUT A MASSIVE SUB ARRAY BECAUSE IT REQUIRES WE RETURN ALL OF THE WAYS TO MAKE
    //THE TARGET
//NO MATTER THE WAY WE SHAKE IT THE RESULT WILL RETURN AN EXPONENTIAL RESULT


//m = target.length
//n = wordBank.length


    //time: O( n^m )
    //space: ( m )

