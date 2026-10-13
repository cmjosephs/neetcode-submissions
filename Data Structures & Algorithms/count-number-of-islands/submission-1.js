class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const R = grid.length, C = grid[0].length;
        const dirs = [[-1,0], [0,-1], [1,0], [0,1]];

        // could also "0" out visited cells
        const visited = new Set();
        let res = 0;
        function flatten(r,c,C) { return r * C + c }
        function isValidCell(r,c) {
            return r >= 0 && r < R && c >= 0 && c < C;
        }

        function dfs(r,c) {
            visited.add(flatten(r,c,C));

            for (let dir of dirs) {
                const nextRow = r + dir[0];
                const nextCol = c + dir[1];

                if (isValidCell(nextRow, nextCol) &&
                    grid[nextRow][nextCol] === "1" && 
                    !visited.has(flatten(nextRow,nextCol,C))
                ) {
                    dfs(nextRow,nextCol);
                }
            }
        }

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (grid[r][c] === "1" && !visited.has(flatten(r,c,C))) {
                    dfs(r,c);
                    res++;
                }
            }
        }

        return res;
    }
}


/*
    DFS
    - keep a seen set
    - loop over matrix
    - on any "1" not seen, increment result and dfs over connected land nodes
    - add to seen while traversing

    BFS
    - Same concept as DFS solution
    - Use queue to do BFS and add to seen set while incrementing result

    Union Find
    - Init a Union Find DS and loop over matrix
    - Check neighbors and union them together - can use grid flattening to id cells
    - count the number of unique parents afterwards
 */