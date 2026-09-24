class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const R = matrix.length, C = matrix[0].length;

        function isBefore(index) {
            const [r,c] = unflatten(index, C);
            return matrix[r][c] < target;
        }

        let lo = 0, hi = flatten(R-1, C-1, C);

        if (matrix[0][0] > target || matrix[R-1][C-1] < target) return false
        if (matrix[0][0] === target) return true

        while (lo < hi - 1) {
            let mid = Math.floor((hi + lo) / 2);

            if (isBefore(mid)) {
                lo = mid;
            } else {
                hi = mid;
            }
        }

        const [r,c] = unflatten(hi, C);
        return matrix[r][c] === target;
    }
}

function flatten(r, c, C) { 
    return r * C + c;
}
function unflatten(index, C) {
    return [Math.floor(index / C), index % C];
}