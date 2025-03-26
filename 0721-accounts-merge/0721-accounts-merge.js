/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const graph = {};
    const nameDict = {};
    const res = [];
    const visited = new Set();

    accounts.forEach((account) => {
        const name = account[0];

        for (let i = 1; i < account.length; i++) {
            if (!graph[account[i]]) {
                graph[account[i]] = new Set();
            }

            nameDict[account[i]] = name;

            if (i !== 1) {
                graph[account[1]].add(account[i]);
                graph[account[i]].add(account[1]);
            }
        }
    });

    const findConnectedEmails = (key) => {
        visited.add(key);

        const emails = [key];
        graph[key].forEach((email) => {
            if (!visited.has(email)) {
                emails.push(...findConnectedEmails(email));
            }
        });

        return emails;
    }

    for (const key in graph) {
        if (!visited.has(key)) {
            const temp = findConnectedEmails(key);

            temp.sort();
            temp.unshift(nameDict[temp[0]]);
            res.push(temp);
        }
    }

    return res;
};