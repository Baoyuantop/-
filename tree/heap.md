### Heap

> Heap is a complete binary tree.
> The value of each node in the heap must be greater than or equal to or less than or equal to the value of each node in its subtree.
> Big top pile and small top pile.

#### Array storage

#### Main operation
- Insert an element
1. From bottom to top. Insert last and loop through the parents node and swap locations.
2. From top to bottom.
3. Time complexity is O(log n)

#### Heap sorting
> Mainly divided into two steps: build and sort.
##### build
1. In the beginning, only the element with the subscript 1 is included in the heap, and the element with the subscript 2 to n is inserted.
2. Compare and exchange locations from the first non-leaf node below.
3. Time complexity is O(n).

##### Sort
1. Put the top of the heap at the end of the array.
2. Rebuild the heap.
3. Continue with step 1 and repeat.
4. Time complexity is O(nlogn).
5. In situ sort.
6. Unstable.

#### Compared to fast sorting defects
1. Data has no local sequential access and is not friendly to CPU cache.
2. For the same data, the heap sorting algorithm has more data exchanges than the quick sort in the sorting process. 