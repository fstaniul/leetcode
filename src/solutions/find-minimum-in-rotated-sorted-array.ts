/*
153. Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

function findMin(nums: number[]): number {
    const index = binarySearchPivot(nums);
    return nums[index];
}

function binarySearchPivot(nums: number[]): number {
    let start = 0;
    let end = nums.length;

    while (end - start > 1) {
        if (nums[start] < nums[end - 1]) return start;
        const mid = Math.floor((start / 2) + (end / 2));
        if (nums[mid - 1] > nums[mid]) return mid;
        if (nums[mid] > nums[start]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return start;
}

test('Example 1', () => {
    const nums = [3,4,5,1,2];
    expect(findMin(nums)).toEqual(1);
});