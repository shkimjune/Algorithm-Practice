/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const backspacingStr = (string) => {
        while (true) {
            const backspaceIndex = string.indexOf("#");

            if (backspaceIndex === -1) {
                return string;
            }

            let newString = "";
            
            for (let i = 0; i < string.length; i++) {
                if (i !== backspaceIndex - 1 && i !== backspaceIndex) {
                    newString += string[i];
                }
            }

            string = newString;
        }
    };

    return backspacingStr(s) === backspacingStr(t);
};