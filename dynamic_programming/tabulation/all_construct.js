//Write a function `allConstruct(target, wordBank)` that accepts a targetr string and an array of strings.

//The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating
    //elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs
        //the `target`

//You may reuse elements of `wordBank` as many times as needed.


const allConstruct = (target, wordbank) => {
    //.map makes it so the table is filled with individual arrays and not one array across the whole table
    const table = Array(target.length + 1)
    .fill()
    .map(() => []);

    table[0] = [[]];

    for(let i = 0; i <= target.length; i++){
        for(let word of wordbank){
            if(target.slice(i, i + word.length) === word){
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    };

    return table[target.length];

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

console.log(allConstruct('aaaaaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
])); // [] 


//Complexity
    //m = target.length
    //n = wordbank.length

    //Time: O( n^m )
    //Space: O( n^m )

