class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1;
        let trapped = 0;
        let maxL = 0, maxR = 0;
        while (l <= r) {
            const heightL = height[l], heightR = height[r];
            if (maxL <= maxR) {
                trapped += Math.max(maxL - heightL, 0);
                maxL = Math.max(maxL, heightL)
                l++;
            } else {
                trapped += Math.max(maxR - heightR, 0);
                maxR = Math.max(maxR, heightR);
                r--;
            }
        }
        return trapped;
    }
}

/* 
    we want the total amount of water that can be trapped in the bars

    prefixes (sums)
    [0,2,0,3,1,0,1,3,2,1]
     0 0 2 2 3 3 3 3 3 3
     3 3 3 3 3 3 3 2 1 0

     0 0 2 2 3 3 3 2 1 0
    [0,2,0,3,1,0,1,3,2,1]
     0 - 2 - 2 3 2 - - -

     minBorder - height and is greater than 0
                     

    TC: O(n) 
    SC: O(n)


    space optimized
    We fill up water at pointer l or r depending on the lowest barrier we've seen on either side
    can set l and r pointers on the outsides and can track their max values to their outside
    inward pointers

    take the minimum of maxL or maxR and subtract from min of height at l or r

    move the pointer in whichever has a lower maxX (maxL or maxR)
    want to move the lower boundary bc the higher boundary *could* contain more water 

    1 3 1 2 -> 1
    l
          r


    [0,2,0,3,1,0,1,3,2,1]
                 l
                 r
     0 - 2 - 2 3 2 - - -

    maxL=3
    maxR=3

    trapped = 9
*/