class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dirs = [[0,1], [1,0], [0,-1], [-1,0]];

        const q = new Queue();
        let fresh = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                } else if (grid[r][c] === 2) {
                    q.enqueue([r,c]);
                }
            }
        }

        if (fresh === 0) return 0;

        let time = -1; // sets time to 0 on first pass
        while (!q.isEmpty()) {
            const size = q.size();
            time++;
            for (let n = 0; n < size; n++) {
                const [r,c] = q.dequeue();

                for (let [dirR, dirC] of dirs) {
                    const nextR = r + dirR, nextC = c + dirC;
                    if (isValid(nextR, nextC, ROWS, COLS) && grid[nextR][nextC] === 1) {
                        grid[nextR][nextC] = 2;
                        q.enqueue([nextR,nextC]);
                        fresh--;
                    }
                }
            }

        }

        return fresh === 0 ? time : -1;
    }
}

function isValid(r,c, ROWS, COLS) { 
    return r >= 0 && c >= 0 && r < ROWS && c < COLS;
}

/*
    BFS
    - add all rotten cells to queue
    - Add count of fresh fruit
    - level order bfs - turn nbr fruit rotten and decrement count
    - return if fresh fruit count is 0 or not
    TC: O(R*C)
    SC: O(R*C)

    what to init time to?
    ex) 1 rotten fruit only in the graph -> output would be 0

    edge cases:
    - only rotten fruits -> return 0
    - 0 fruits, only empty cells -> return 0
    - only fresh fruits
 */