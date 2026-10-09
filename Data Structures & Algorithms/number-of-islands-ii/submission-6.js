class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @param {number[][]} positions
     * @return {number[]}
     */
    numIslands2(m, n, positions) {
        const R = m, C = n;
        const dirs = [[0,1], [1,0], [0,-1], [-1,0]];

        const UF = new UnionFind();
        const res = [];

        for (let [r,c] of positions) {
            const cellId = flatten(r,c,C);
            UF.add(cellId);

            for (let dir of dirs) {
                const nextRow = r + dir[0];
                const nextCol = c + dir[1];
                if (!isValidCell(nextRow, nextCol,R,C)) continue;
                const nbrId = flatten(nextRow, nextCol, C);
                if (UF.contains(nbrId)) {
                    UF.union(cellId, nbrId);
                }
            }

            res.push(UF.getDisjointSetsCount());
        }

        return res;
    }
}
function isValidCell(r,c,R,C) {
    return r >= 0 && r < R && c >= 0 && c < C;
}
function flatten(r,c,C) {
    return r * C + c;
}
class UnionFind {
    constructor() {
        // this.parents = [];
        // this.rank = [];
        // // could also use a hashmap which would prevent us from having to loop nxm
        // for (let n=0; n < size; n++) {
        //     this.parents.push(n);
        //     this.rank.push(0);
        // }
        this.parents = {};
        this.rank = {};
        this.groups = 0;
    }
    contains(n) {
        return this.parents[n] !== undefined;
    }
    add(n) {
        if (this.contains(n)) return;
        this.parents[n] = n;
        this.rank[n] = 1;
        this.groups++;
    }
    findParent(n) {
        if (n === this.parents[n]) return n;
        // path compression - reduce TC from O(logn) to ammortized O(1)
        // return this.parents[n] = this.findParent(this.parents[n]);

        // can also do this iteratively
        let curr = n;
        while (curr !== this.parents[curr]) {
            const p = this.parents[curr];
            this.parents[curr] = this.parents[p];
            curr = p;
        }
        return curr;
    }
    union(n1, n2) {
        const p1 = this.findParent(n1);
        const p2 = this.findParent(n2);
        if (p1 === p2) return;

        if (this.rank[p1] >= this.rank[p2]) {
            this.parents[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parents[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }

        this.groups--;
    }
    getDisjointSetsCount() {
        // const sets = new Set();
        // // find parents of each node and add to set
        // Object.keys(this.parents).forEach(n => sets.add(this.findParent(n)));
        // return sets.size;

        return this.groups;
    }
}

/*
    inputs:
    m x n grid
    positions - [r,c] pairs that turn water into land

    output:
    array of length p where p[i] is the number of islands after action positions[i]

    constraints: 
    - assuming actions in postions are all unique and not repeated IE seeing the same cell twice does not revert it back to land

    Brute force
    - create a matrix of all water
    - loop over positions and turn that cell to land
    - run dfs or bfs over the entire matrix each addition

    Union Find
    - create union find DS and hash set to track land cells
    - loop over positions
    - check if any neighboring cells are land - if so union them
    - add the number of unqiue parents after each iteration

    options
    - array of size mxn to track nodes
    - 
 */