/*
33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

function search(nums: number[], target: number): number {
    const pivot = binarySearchPivot(nums);
    return rotatedBinarySearch(nums, target, pivot);
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

function rotatedBinarySearch(nums: number[], target: number, pivot: number): number {
    let start = pivot;
    let end = pivot + nums.length;

    while (end - start > 1) {
        const mid = Math.floor((start / 2) + (end / 2));
        const midValue = nums[mid % nums.length];
        if (midValue < target) {
            start = mid + 1;
        } else if (midValue > target) {
            end = mid;
        } else {
            return mid % nums.length;
        }
    }

    return nums[start % nums.length] === target ? start % nums.length : -1;
}

test('Example 1 pivot', () => {
    expect(binarySearchPivot([4, 5, 6, 7, 0, 1, 2])).toEqual(4);
    expect(binarySearchPivot([1, 2, 4, 5, 6, 7, 0])).toEqual(6);
    expect(binarySearchPivot([0, 1, 2, 4, 5, 6, 7])).toEqual(0);
})

test('Example 1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
});

test('Example 2', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
});

test('Example 3', () => {
    expect(search([1], 0)).toEqual(-1);
});
