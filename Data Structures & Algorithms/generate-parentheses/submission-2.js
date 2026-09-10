class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // n represents a valid pair of parenthesis
        // cannot return invalid pair
        // return string array of all possible combinations
        // n is between 1 and 7
        let result = [];

        // helper function that recursively builds a valid parenthesis string
        // args are remaining opening and closing brackets and current string
        // base case - 0 opening and closing -> add string to result

        function makeCombination(opening, closing, combo) {
            if (opening === 0 && closing === 0) {
                return result.push(combo);
            }

            // only closing and no opening left - only closing
            if (opening === 0) {
                makeCombination(opening, closing-1, combo + ")");
            } else if (opening < closing) {
                // less opening than closing - add closing and opening
                makeCombination(opening-1, closing, combo + "(")
                makeCombination(opening, closing-1, combo + ")")

            } else {
                // equal - add opening
                makeCombination(opening-1, closing, combo + "(")
            }
        }

        makeCombination(n, n, "");
        return result;
    }
}
