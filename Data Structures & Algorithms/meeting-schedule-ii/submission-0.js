/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const arr = [];
        for (let interval of intervals) {

            arr.push({ time: interval.start, value: 1 }, { time: interval.end, value: -1 });
        }
        
        // sort asc by time
        // ties - sort desc by value
        arr.sort((a,b) => {
            const timeDiff = a.time - b.time;
            if (timeDiff === 0) {
                return b.value < 0 ? 1 : -1;
            }
            return timeDiff;
        });

        // find most rooms used at a single point
        let roomsUsed = 0;
        let maxRoomsNeeded = 0;
        for (let el of arr) {
            const { value } = el;
            roomsUsed += value;
            maxRoomsNeeded = Math.max(maxRoomsNeeded, roomsUsed);
        }
        return maxRoomsNeeded;
    }
}

/*
    looking for the most number of overlapping intervals at a single time stamp

    constaints
    - endi === startj is non overlapping

    brute force
    - sort input by start time
    - check times after i and see how many overlaps there are
    TC: O(n^2)

    sorting by start time may be helpful to closely group potential overlaps

    keep a counter of rooms currently 
    - loop from start to highest end value
    - can keep a map of end times with the number of rooms occupied with that end time
    - each loop check the current time, remove the number of meetings ending at the time and add a meeting if it is starting at the time, increment the current meeting if it starts
    TC: O(nlogn + R) n is intervals.length and R is range of start and end times
    SC: O(n) map to store meetings in progress

    how to optimize the loop over time?
    - we know all the relevant time values
    - can make an array of increment and decrement times
    - start times would have a value of +1 and end times would have a value of -1
    - can map the start and end times to a new array where arr[i] = { timestamp, start/end }
    - sort by timestamp - ties have end times going first
    - loop over that array to track rooms needed
    TC: O(nlogn)
    SC: o(n)

    [(0,40),(5,10),(15,20)]

    ----------
     ---
          -------
    time=0
    roomsUsed=1
 */