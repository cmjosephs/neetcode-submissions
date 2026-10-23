class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
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

        let coursesTaken = 0;
        const q = new Queue();
        inDegrees.forEach((inDegree,course) => {
            if (inDegree === 0) q.push(course);
        });

        while (!q.isEmpty()) {
            const course = q.pop();
            for (let nxt of graph[course]) {
                inDegrees[nxt]--;
                if (inDegrees[nxt] === 0) q.push(nxt);
            }
            coursesTaken++;
        }

        return coursesTaken === numCourses;
    }

}

/*
    top sort

    generate an adajcency list
    make inDegrees list - count of incoming edges to node
    init a q and add all nodes with 0 inDegrees to q
    loop while there are items in the q
    pop course from q
    loop over toCourses (course is a prereq of toCourse)
    if toCourse has inDegrees == 0 then all prereqs have been satisfied

 */