/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroup = new Map();

    strs.forEach((word) => {
        const sortedKey = word.split("").sort().join("");

        if (anagramGroup.has(sortedKey) === false) {
            anagramGroup.set(sortedKey, []);
        }

        anagramGroup.get(sortedKey).push(word);
    });

    const answer = [...anagramGroup.values()];
    
    return answer;
};
