class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a - b);
        let l = 0, r = people.length - 1;
        let boats = 0;
        while (l < r) {
            const weight = people[l] + people[r];
            if (weight > limit) {
                r--;
            } else {
                l++;
                r--;
            }
            boats++;
        }
        // account for final person - l == r
        if (l === r) boats++;

        return boats;
    }
}

/*
    boat carries at most 2 people at once if weight sum must be less than limit

    so boat can take at least 1 or at most 2 people

    assume boats only go 1 direction to save people

    each person fits in a boat people[i] <= limit

    only deal with 2 poeple at a time - two pointers?

    we want to pair heaviest people with lightest people for optimal loading- greedy


    sort the input
    two inward pointers
    if l + r is greater than limit, add to result and decrease r
    if its less than or equal, add to result and move both inward

    5 1 4 2, limit=6
    1 2 4 5
    l
          r

 */