class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        // two pointers - seeker and writer
        // writer writes the number character to the index when seeker lands on a different character
        // return the last index that was written to + 1

        let count = 0;
        let s = 0, w = 0;
        while (s < chars.length) {
            // s and w are on repeating chars
            if (chars[s] === chars[w]) {
                count++;
                s++;
                continue;
            }

            // s is on a new char - need to write the count to the array
            // if (count > 1) {
            //     const countStr = count.toString();
            //     for (let digit of countStr) {
            //         w++;
            //         chars[w] = digit;
            //     }
            // }
            w = writeCompressionCount(chars, w, count);
            // move writer to next write index and write new character
            w++;
            chars[w] = chars[s];
            count = 0;
        }

        // cleanup work - write counts to the array
        // check if we can modify loop condition to handle this work - cant do this as we need the last index of the compressed string
        // if (count > 1) {
        //     const countStr = count.toString();
        //     for (let digit of countStr) {
        //         w++;
        //         chars[w] = digit;
        //     }
        // }
        w = writeCompressionCount(chars, w, count);

        // return w index - verify off by 1 errors
        return w + 1;
    }
}

// writes count as string individual digist 
// returns last index that was written
function writeCompressionCount(arr, start, count) {
    let i = start;
    if (count > 1) {
        const countStr = count.toString();
        for (let digit of countStr) {
            arr[++i] = digit;
        }
    }
    return i;
}

/*
  on new character or at array end
  - increment w
  THEN if s-w > 1
  - write count characters

  keep counter instead of w-s to easier handle cleanup work 

  edge case - array ends on repeating characters - clean up work after loop

  a - count=1
  w
    s

  0 1 2 3 - count=3
  a 3 a
    w
        s

  a 3 b 2 b - count=2
        w
            s


  TC: O(n) 
    - looping over data input
    - parsing repeating character count to string - max length of n so would total TC n + n
  SC: O(?) 
    - does parseInt take up space?

 */