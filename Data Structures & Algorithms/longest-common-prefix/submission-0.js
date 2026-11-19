class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const m = Math.max(...strs.map((str) => str.length));
        const prefixBuilder = [];

        for (let i = 0; i < m; i++) {
            const char = strs[0][i];
            // check all strings have same prefix char
            for (let str of strs) {
                if (i >= str.length || str[i] !== char) {
                    return prefixBuilder.join("");
                }
            }
            
            // char is good -> add to builder
            prefixBuilder.push(strs[0][i]);
        }

        return prefixBuilder.join("");
    }
}

/*
    keep a pointer that loops starting at 0

    loop over all strings in strs
    check that all have the same character
    if not then return the substring from 0 to i


    TC: O(m + n * m) - n is input length and m is length of longest string in m
    SC: O(m) - prefix builder array and output string
 */