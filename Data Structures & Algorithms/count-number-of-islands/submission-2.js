class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dirs = [[-1,0], [0,-1], [1,0], [0,1]];

        const UF = new UnionFind(ROWS*COLS);
        let islands = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] !== "1") {
                    continue;
                }

                islands++;
                for (let dir of dirs) {
                    const nextRow = r + dir[0];
                    const nextCol = c + dir[1];
                    if (
                        isValidCell(nextRow,nextCol,ROWS,COLS) && 
                        grid[nextRow][nextCol] === "1"
                    ) {
                        const mergeIslands = UF.union(
                            flatten(r,c,COLS), 
                            flatten(nextRow,nextCol,COLS)
                        );
                        if (mergeIslands) islands--;
                    }
                }
            }
        }
        return islands
    }
}
function isValidCell(r,c,R,C) {
    return r >= 0 && r < R && c >= 0 && c < C;
}
function flatten(r,c,C) { return r * C + c }
class UnionFind {
    constructor(size) {
        this.parents = [];
        this.rank = [];
        for (let i = 0; i < size; i++) {
            this.parents.push(i);
            this.rank.push(1);
        }
    }
    findParent(n) {
        if (n === this.parents[n]) return n;

        return this.parents[n] = this.findParent(this.parents[n]);
    }
    union(n1,n2) {
        const p1 = this.findParent(n1);
        const p2 = this.findParent(n2);

        if (p1 === p2) return false;

        if (this.rank[p1] >= this.rank[p2]) {
            this.rank[p1] += this.rank[p2];
            this.parents[p2] = p1;
        } else {
            this.rank[p2] += this.rank[p1];
            this.parents[p1] = p2;
        }

        return true;
    }
}
/**
 * Union Find
 * 
 * 
 */