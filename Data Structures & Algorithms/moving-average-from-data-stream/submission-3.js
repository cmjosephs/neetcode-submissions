class MovingAverage {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size;
        this.currentSum = 0;
        this.q = new Queue();
    }

    /**
     * @param {number} val
     * @return {number}
     */
    next(val) {
        if (this.q.size() === this.size) {
            this.currentSum -= this.q.pop();
        }

        this.currentSum += val;
        this.q.push(val);

        return this.currentSum / this.q.size();
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size);
 * var param_1 = obj.next(val);
 */

/*

    1
    1 10
    1 10 3
    1 10 3 5

    1
    1 11
    1 11 14
    1 11 14 

    only need to track the sum of the last k elements

    if current size is less than k than just add to sum
    if its at k, then subtract the left value of the window and add the new value 

    can use a sliding window and unbounded dynamic array
    TC: next() - O(1)
    SC: O(n) - n is the number of calls to next()

    Queue
    - store current sum
    - if q size < k, add to sum and push to queue
    - if q size == k, pop from queue, popped from size and add val
    TC: next() - O(1)
    SC: O(k)

 */