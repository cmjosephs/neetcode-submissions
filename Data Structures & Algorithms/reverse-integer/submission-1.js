class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const isNegative = x < 0;
        if (isNegative) x *= -1;
        let res = 0;
        while (x > 0) {
            let digit = x % 10;
            res *= 10;
            res += digit;
            x -= digit;
            x /= 10;
            if (res > 2**31-1) return 0;
        }
        return isNegative ? res * -1 : res;
    }
}
