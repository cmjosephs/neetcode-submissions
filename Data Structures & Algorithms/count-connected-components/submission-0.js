class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // want the number of disjoint sets in the struct
        const UF = new UnionFind(n);
        for (let edge of edges) {
            UF.union(edge[0], edge[1]);
        }

        const sets = new Set();
        for (let i = 0; i < n; i++) {
            sets.add(UF.find(i));
        }

        return sets.size;
    }
}

class UnionFind {
    constructor(n) {
        this.parents = [];
        this.rank = [];
        for (let i = 0; i < n; i++) {
            this.parents.push(i);
            this.rank.push(1);
        }
    }
    find(n) {
        if (n === this.parents[n]) return n;

        return this.parents[n] = this.find(this.parents[n]);
    }

    union(n1,n2) {
        const p1 = this.find(n1);
        const p2 = this.find(n2);

        if (p1 === p2) return

        if (this.rank[p1] >= this.rank[p2]) {
            this.parents[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parents[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }

    }
}