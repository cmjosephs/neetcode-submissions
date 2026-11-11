class Solution {
    /**
     * @param {number} num
     * @return {number}
     */
    maximumSwap(num) {
        let digits = splitNumberToDigits(num)         
        // edge case - single digit number
        if (digits.length === 1) return num;

        const postfixMaxes = new Array(digits.length); // postfixMaxes[i] = [maxSeen, i]
        let maxSeen = [0, digits.length]; // init to outside array

        for (let i = digits.length - 1; i >= 0; i--) {
            postfixMaxes[i] = maxSeen;
            if (digits[i] > maxSeen[0]) {
                maxSeen = [digits[i], i];
            }
        }

        for (let i = 0; i < digits.length; i++) {
            if (postfixMaxes[i][0] > digits[i]) {
                const j = postfixMaxes[i][1];
                [digits[i], digits[j]] = [digits[j], digits[i]];
                break;
            }
        }
        return mergeNumArray(digits);
    }
}
function splitNumberToDigits(num) {
    return num.toString()
        .split('')
        .map(digit => parseInt(digit));
}
function mergeNumArray(arr) {
    return parseInt(arr.map(digit => digit.toString()).join(""));
}
/*
    find the largest number and its index to the right of each digit

    loop from left to right and swap the first digit that has a greater value to the right of it 

    preprocess the input 
    - json.stringify -> split -> map and parse ints
    - modulo each digit -> add to array -> divide by 10 -> repeat
 */