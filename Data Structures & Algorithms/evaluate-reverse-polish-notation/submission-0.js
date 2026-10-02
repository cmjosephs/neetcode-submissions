class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const ops = {
            '+': (a, b) => (a + b), 
            '-': (a, b) => (a - b), 
            '*': (a, b) => (a * b), 
            '/': (a, b) => (Math.trunc(a / b)),
        }
        const stack = [];

        for (let token of tokens) {
            if (ops[token] !== undefined) {
                // pop the last two - be careful of order
                // do operation
                // add to stack

                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[token](a, b));
            } else {
                stack.push(parseInt(token));
            }
        }

        return stack.pop();
    }
}

function executeOperation(a, b, op) {
    return 
}