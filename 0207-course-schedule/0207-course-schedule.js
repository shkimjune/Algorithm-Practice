/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let inDegree = Array(numCourses).fill(0);
    const courses = [];
    let count = 0;

    for (const [first, second] of prerequisites) {
        graph[second].push(first);
        inDegree[first]++;
    }

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            courses.push(i);
        }
    }

    while (courses.length > 0) {
        let currentCourse = courses.shift();
        count++;

        for (let next of graph[currentCourse]) {
            inDegree[next]--;

            if (inDegree[next] === 0) {
                courses.push(next);
            }
        }
    }

    return count === numCourses;
};