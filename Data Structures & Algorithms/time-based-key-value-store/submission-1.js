class TimeMap {
    constructor() {
        this.keyStore = new Map();
        /*
            Map {
                size

                set
                get
                has
                delete
                clear
                keys
                values
                entries
            }
        
         */
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        const arr = this.keyStore.get(key);
        // New as of 2026 0 getOrInsert
        // const arr = this.keyStore.getOrInsert(key, []);
        arr.push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const NOT_FOUND = "";
        const arr = this.keyStore.get(key) ?? []; // arr[i] = [value, timestamp]
        function isBefore(i) {
            return arr[i][1] < timestamp;
        }
        let l = 0, r = arr.length - 1;

        // edge cases
        // console.log(arr);
        if (arr.length === 0) return NOT_FOUND
        if (timestamp < arr[l][1]) return NOT_FOUND; // l in after region
        if (timestamp === arr[l][1]) return arr[l][0]; // l in after region
        if (timestamp > arr[r][1]) return arr[r][0]; // r in before region
        
        while (l < r - 1) {
            const mid = Math.floor((r+l)/2);
            if (isBefore(mid)) {
                l = mid;
            } else {
                r = mid;
            }
        }
        return arr[r][1] === timestamp ? arr[r][0] : arr[l][0];
    }
}
