class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]); // sort asc by start time
        const merged = [];
        merged.push(intervals[0]);
        for (let [start, end] of intervals) {
            // pop last merged interval
            const [lastStart, lastEnd] = merged.pop();

            if (start > lastEnd) { // non overlapping
                merged.push([lastStart, lastEnd], [start, end]);
            } else {
                merged.push([Math.min(start, lastStart), Math.max(end, lastEnd)]);
            }

        }

        return merged;
    }
}

/*
    ---- 
         ------
    
    --------
     ----

    ----
      ----- 


 */