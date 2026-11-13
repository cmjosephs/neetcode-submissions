class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        function partition(l,r) {
            let index = l;
            const pivotPoint = points[r]; // should pick a random index, revisit later
            const pivot = getDistance(pivotPoint[0], pivotPoint[1]);

            for (let j = l; j < r; j++) {
                const point = points[j];
                const dist = getDistance(point[0], point[1]);

                if (dist <= pivot) {
                    [points[j], points[index]] = [points[index], points[j]];
                    index++;
                }
            }

            [points[index], points[r]] = [points[r], points[index]];
            return index;
        }

        let l = 0, r = points.length - 1;

        while (l < r) {
            const partitionIndex = partition(l, r);

            if (partitionIndex === k - 1) {
                return points.slice(0, k);
            } else if (partitionIndex < k - 1) {
                l = partitionIndex + 1;
            } else {
                r = partitionIndex - 1;
            }
        }

        return points.slice(0, k);
    }
}

function getDistance(x1, y1, x2=0, y2=0) {
    return Math.sqrt(((x1 - x2)**2) + ((y1 - y2) ** 2));
}

/*
    Quickselect

    run quickselect on points till partition index is k
    return first k elements

    TC: O()
    SC: O(k)


    partition

         l               
                    r
            k
        p

 */