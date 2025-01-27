/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineMap = new Map();

    for (const char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
            return false;
        }
        magazineMap.set(char, magazineMap.get(char) - 1);
    }

    return true;
};