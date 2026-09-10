class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set();
        const streaks = {}; // { num: streak from min num in streak }
        for (let num of nums) {
            streaks[num] = 1;
        }

        let longest = 0;
        for (let num of nums) {
            if (seen.has(num)) {
                continue;
            }

            // follow chain to lowest number
            while (streaks[num-1] !== undefined) {
                num--;
            } 
            
            // follow chain to highest number, set streak, and increment streak
            while (streaks[num+1] !== undefined) {
                seen.add(num);
                streaks[num] += streaks[num-1] ?? 0;
                num++;
            }

            seen.add(num);
            streaks[num] += streaks[num-1] ?? 0;

            // we should be on the highest number in the streak now
            longest = Math.max(longest, streaks[num]);
        }

        return longest;
    }
}

/*
    sorting
    sort all elements and track the longest streak
    TC: nlogn
    SC: n


    elements do not have to be in order

    hashmap

    keep a map that has the value and the sequence count

    loop over input and add to hashmap with streak set to 0

    how do we properly increment the streak for each number

    check if num - 1 exists, go down the chain and calculate the 

    can keep a seen set to not go over numbers multiple times

    can track max seen

    could start at the min value in the array and just loop to the max

    TC: O(n + R)
    SC: O(n)
 */