//Write a function `countContruct(target, wordBank)` that accepts a target string and an array of strings.

//The function should return the numbers of ways that the `target` can be constructed by concatenating elements of the
    //`wordBank` array.

//You may reuse elements of `wordBank` as many times as needed.

const countConstruct = (target, wordbank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i < target.length; i++){
        for (let word of wordbank){
            if(target.slice(i, i+ word.length) === word){
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
};




console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); // 0




//Complexity
    //m = target
    //n = wordbank.length

    //time: O( m^2 * n)
    //space: O( m )