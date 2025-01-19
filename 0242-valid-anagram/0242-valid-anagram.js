/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const consistOfS = new Map();

    for (const char of s) {
        if (consistOfS.has(char)) {
            const count = consistOfS.get(char);
            consistOfS.set(char, count + 1);
        } else {
            consistOfS.set(char, 1);
        }
    }

    for (const char of t) {
        if (consistOfS.has(char)) {
            const count = consistOfS.get(char);

            if (count === 0) {
                return false;
            }

            consistOfS.set(char, count - 1);
        } else {
            return false;
        }
    }

    for (const [key, value] of consistOfS) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
};
