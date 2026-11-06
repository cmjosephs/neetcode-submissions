class MedianFinder {
    constructor() {
        this.upper = new MinPriorityQueue();
        this.lower = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // add val to correct half - upper if collections are empty
        if (this.upper.size() === 0 || num >= this.upper.front()) {
            this.upper.push(num);
        } else {
            this.lower.push(num);
        }

        // redistribute heap sizes
        if (this.lower.size() > this.upper.size()) {
            this.upper.push(this.lower.pop());
        } else if (this.upper.size() > this.lower.size() + 1) {
            this.lower.push(this.upper.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.upper.isEmpty() && this.lower.isEmpty()) return null;

        if (this.upper.size() === this.lower.size()) {
            return (this.upper.front() + this.lower.front()) / 2;
        }

        return this.upper.front();
    }
}

/*
    Use two heap to keep track of the median

    topHalf is a min heap and is bigger or equal to median

    bottomHalf is max heap and is smaller or equal to median

 */