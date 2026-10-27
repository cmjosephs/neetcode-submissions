class RandomizedSet {
    constructor() {
        this.arr = [];
        this.map = {};
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map[val] !== undefined) return false;

        const i = this.arr.length;
        this.map[val] = i;
        this.arr.push(val);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (this.map[val] === undefined) return false;

        // locate value and its index
        const removeIndex = this.map[val];
        const lastIndex = this.arr.length - 1;
        const lastVal = this.arr[lastIndex];

        // swap with last element in array
        [this.arr[removeIndex], this.arr[lastIndex]] = [this.arr[lastIndex], this.arr[removeIndex]];

        // update swapped elements index in map
        this.map[lastVal] = removeIndex;

        const toDelete = this.arr.pop();

        delete this.map[toDelete]

        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const i = this.getRandomIndex();
        return this.arr[i];
    }

    getRandomIndex() {
        return Math.floor(Math.random() * this.arr.length);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


/*
    constraints
    - each method should work in O(1) time
    - getRandom will be called on a non empty set
    - any neg or pos int value

    getRandom
    - put values in an array 
    - randomly generate an index in the range
    - return the value at that index

     0  1. 2. 3
    [a, b, c, d]

    insert
    - integrate these methods to work with getRandom's array
    - use a hashmap O(1) lookup time
    - push value to end of getRandom array
    - hashmap - { key[insertVal]: value[indexInArray] }

    delete
    - insertions and deletions in the middle of the array are O(n) ops
    - swap item with element at the end of the array
    - update the index of the swapped items
    - delete the last item

 */