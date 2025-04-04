/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const result = [];
    let nextIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            while (nextIndex < s.length) {
                if (s[nextIndex] === ' ') {
                    nextIndex++;
                } else {
                    break;
                }
            }

            i = nextIndex;
            if (s[i] === '-' || s[i] === '+') {
                result.push(s[i]);
                i++;
            }
        }

        if (isNaN(s[i]) || s[i] === ' ') {
            break;
        } else {
            result.push(s[i]);
        }
    }

    const output = Number(result.join(''));

    if (!output) {
        return 0;
    }

    if (output < -(2 ** 31)) {
        return -(2 ** 31);
    } else if (output > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }

    return output;
};
