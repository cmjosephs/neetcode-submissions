class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let res = 0;
        let l = 0, r = 0;
        while (r < s.length) {
            if (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            } else {
                seen.add(s[r]);
                r++;
                res = Math.max(res, seen.size); // r - l also would work
            }
        }

        return res;
    }
}
/*
    res=3
    set=[x z]
    zxyzxyz
        l
           r

    xxxx
    l
    r

    constraints
    - printable ascii chars - this is a finite amount
    - s can be very long
    - s is a string

    edge cases:
    - s could be length 0
    - entire string could contain no repeating characters

    brute force
    - use nested loops and create every substring
    - count the characters of each substring
    - if any substrings has a char count more than 1 then dont store that result

    sliding window with set
    - keep a set to store characters appearing in the current substring
    - start two pointer at the begining of the string - l & r
    - increment r if val at r is not in the set
    - add new character to set
    - if char at r is in the set, increment l and remove the character at l
    - store the longest length r - l as you move along

    - be careful with initializing the starting character 
        and potential cleanup work like 
    - be careful with removing characters 

 */