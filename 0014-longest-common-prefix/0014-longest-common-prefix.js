/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonString = strs[0];

    for (const str of strs) {
        let newString = "";

        for (let i = 0; i < commonString.length; i++) {
            if (str[i] && commonString[i] === str[i]) {
                newString += str[i];
            } else {
                break;
            }
        }
        commonString = newString;
    }

    return commonString;
};