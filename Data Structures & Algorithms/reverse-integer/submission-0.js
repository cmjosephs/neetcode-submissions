class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        // reverse the input integer 
        // if it falls outside 32 bit range then return 0

        // string reversal
        // store negative in variable -> we want number we are working with to be positive
            // can store with 1 or -1
        // reverse the string
            // use built in language method or reverse loop over string and build new string
        // parse to integer
        // multiple by negative multiplier if needed
        // check boundary and return result
        let isNeg = 1;
        if (x < 0) {
            isNeg = -1;
            x *= -1;
        }
        let reversed = parseInt(JSON.stringify(x).split("").reverse().join(""));
        reversed *= isNeg;
        return -(2**31) < reversed && reversed < (2**31) - 1 ? reversed : 0;


        // math
        // store negative state in var, same as ^
        // create a reversed var at 0
        // while x > 0
            // subtract from x while not % 10
                // then add that value to reversed
            // divide x by 10
            // multiply reversed by 10
        // mulitply by negative 
        // check boundary and return result

    }
}
