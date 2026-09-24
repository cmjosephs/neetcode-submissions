class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // decreasing monotonic stack
        // add stack if the next value is less than the top
        // pop from stack while next value is greater than top
        // store the index in the stack - we need to calc j - i for days afterwards is hotter
        const res = new Array(temperatures.length).fill(0);
        const stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length && 
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                let j = stack.pop();
                res[j] = i - j;
            }

            stack.push(i);
        }
        return res;
    }
}
