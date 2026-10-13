class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        this.reflectVertical(matrix);
        this.transpose(matrix);
        return;
    }

    reflectVertical(matrix) {
        const R = matrix.length;
        for (let r = 0; r * 2 < R; r++) {
            [matrix[r], matrix[R-r-1]] = [matrix[R-r-1], matrix[r]];
        }
        return matrix;
    }

    transpose(matrix) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < r; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }
        return matrix;
    }
}
