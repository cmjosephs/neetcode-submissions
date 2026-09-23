class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // can sort each string by character and use that as a key in a hashmap

        // can serialize the strings into frequency counts and then use the letter and frequency mapping as the key
        // only 26 letters so this is more optimal than sorting the string

        const groups = {};

        for (let s of strs) {
            // get char freqs
            const freqs = new Array(26).fill(0);
            for (let c of s) {
                const i = c.charCodeAt(0) - "a".charCodeAt(0);
                freqs[i]++;
            }

            // get key
            const key = freqsToKey(freqs);
            

            if (!groups[key]) groups[key] = [];
            groups[key].push(s);
        }

        return Object.values(groups);
    }
}

function freqsToKey(freqs) {
    const keyBuilder = [];
    for (let i = 0; i < freqs.length; i++) {
        const charCode = i + 'a'.charCodeAt(0);
        const char = String.fromCharCode(charCode);
        keyBuilder.push(`${char}${freqs[i]}`);
    }
    return keyBuilder.join("");
}