class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // loop intervals
        // while the interval end is less than the new interval start, add it to the result
        // when we encounter an overlapping interval, merge the current interval with the newInterval
        // repeat this till next interval is not overlapping

        // add remaining intervals
        const res = [];
        let i = 0;
        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }

        while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
            i++;
        }

        res.push(newInterval, ...intervals.slice(i));
        return res;
    }
}
