class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // want the slowest eating rate k so that all bananas can be finished in h hours
        // cannot eat from separate piles in the same hour

        // guess and check binary search
        // search for an eating speed
        // need to set upper and lower bounds

        // if h is piles.length then eating speed is max in piles - high k & upper bound (low time)
        // if h is greater than the sum of piles than 1 is k - low k & lower bound (lots of time)

        // binary search
        // after - high k, always valid answer
        // isBefore - eating speed is always too slow
        // want lowest 'after value

        // TC: O(p * logn) p is length of piles and n is range 0 to max(...piles)

        function timeToEatPiles(k) {
            let time = 0;
            for (let pile of piles) {
                time += Math.ceil(pile/k);
            }
            return time;
        }
        // double check the condition on this
        // timeTaken > h - eating too slow and need to increase rate k
        function isBefore(k) {
            const timeTaken = timeToEatPiles(k);
            return timeTaken > h;
        }

        let hi = Math.max(...piles);
        let lo = 1;

        // edge case
        // lo is a valid answer
        if (!isBefore(lo)) return lo;

        while (lo < hi - 1) {
            let rate = Math.floor((hi + lo)/2);

            if (isBefore(rate)) {
                lo = rate;
            } else {
                hi = rate;
            }
        }

        return hi;
    }
}
