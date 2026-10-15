class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length, COLS = grid[0].length;
        const dirs = [[0,1],[1,0],[-1,0],[0,-1]];

        // is in bound and not a water cell
        function isValid(r,c) { return r >= 0 && c >= 0 && r < ROWS && c < COLS && grid[r][c] !== -1 }
        function getKey(r,c) { return r + ',' + c }

        const distances = {};
        const q = new Queue();
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.enqueue([r,c]);
                    distances[getKey(r,c)] = 0;
                }
            }
        }

        while (!q.isEmpty()) {
            const [r,c] = q.dequeue();
            const key = getKey(r,c);
            grid[r][c] = distances[key];

            for (let [dirR, dirC] of dirs) {
                const nextR = r + dirR, nextC = c + dirC;
                const nextKey = getKey(nextR,nextC);

                if (isValid(nextR, nextC) && distances[nextKey] === undefined) {
                    distances[nextKey] = distances[key] + 1;
                    q.enqueue([nextR, nextC]);
                }
            }
        }
    }
}

/*
    BFS w distances map (distance map may be optional)
    - add all cells with val 0 to queue and add to distance map { cell: distance=0 }
    - run BFS with the starting cells with treasure chests 
    - mark cell value as value in distance map - could also check min value in surround nbrs with values > -1
    - add nbr to queue and distance map { nbr: distance + 1 }

 */