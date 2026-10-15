class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const dirs = [[0,1],[1,0],[-1,0],[0,-1]];

        const visited = new Set(); // store flattened index of board cell
        function visit(r,c) {
            if (visited.has(flatten(r,c,COLS))) return;

            visited.add(flatten(r,c,COLS));

            for (let [dirR, dirC] of dirs) {
                const nextR = r + dirR, nextC = c + dirC;
                if (isValid(nextR,nextC,ROWS,COLS) 
                    && board[nextR][nextC] === "O"
                    // && !visited.has(flatten(nextR,nextC,COLS))
                ) {
                    visit(nextR,nextC);
                }
            }
        }

        // mark safe cells - run traversal on border cells
        // top and bottom rows
        for (let r of [0,ROWS-1]) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'O' && !visited.has(flatten(r,c,COLS))) {
                    visit(r,c);
                }
            }
        }
        // left and right columns
        for (let r = 0; r < ROWS; r++) {
            for (let c of [0,COLS-1]) {
                if (board[r][c] === 'O' && !visited.has(flatten(r,c,COLS))) {
                    visit(r,c);
                }
            }
        }
        // X out surrounded cells
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O" && !visited.has(flatten(r,c,COLS))) {
                    board[r][c] = 'X';
                }
            }
        }

        return
    }
}

function isValid(r,c,R,C) { return r >= 0 && c >= 0 && r < R && c < C }
function flatten(r,c,C) { return r * C + c }

/*
    O cells that are on the edge and connected to edge cells are safe
    other O cells should be X'd out

    BFS or DFS w 2 passes
    - do either traversal on O cells starting on the edge 
    - add these cells to a set - seen/visited/safe
    - pass two - X out all cells that are not in the set
    TC: O(R*C)
    SC: O(R*C) - seen set

 */