class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new PriorityQueue(
            (a,b) => getDistance(b[0], b[1]) - getDistance(a[0], a[1])
        );

        for (let point of points) {
            if (maxHeap.size() < k) {
                maxHeap.push(point);
                continue;
            }

            const heapPoint = maxHeap.front();
            const heapDist = getDistance(heapPoint[0], heapPoint[1]);
            const dist = getDistance(point[0], point[1]);

            if (dist < heapDist) {
                maxHeap.pop();
                maxHeap.push(point);
            }
        }

        return maxHeap.toArray();
    }
}

function getDistance(x1, y1, x2=0, y2=0) {
    return Math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2));
}

/*
    Heap

    keep a max heap of size k
    loop over points and calculate distance
    if distance is less than top of heap, pop from heap and add new value
    always add to empty heap

    TC: O(nlogk)
    SC: O(k)

 */