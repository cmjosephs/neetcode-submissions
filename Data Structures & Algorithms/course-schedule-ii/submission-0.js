class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = [];
        const inDegrees = [];
        for (let i = 0; i < numCourses; i++) {
            graph.push([]);
            inDegrees.push(0);
        }

        for (let [course, prereq] of prerequisites) {
            graph[prereq].push(course);
            inDegrees[course]++;
        }

        const courseOrder = [];
        const q = new Queue();
        inDegrees.forEach((inDegree, course) => inDegree === 0 && q.push(course));

        while (!q.isEmpty()) {
            const course = q.pop();
            for (let nxt of graph[course]) {
                inDegrees[nxt]--;
                if (inDegrees[nxt] === 0) q.push(nxt);
            }
            courseOrder.push(course);
        }
        return courseOrder.length === numCourses ? courseOrder : [];
     }
}

/*
    top sort

 */