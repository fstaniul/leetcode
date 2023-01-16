/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

function searchRange(nums: number[], target: number): number[] {
    const low = binarySearch(nums, target, true);
    if (low === -1) return [-1, -1];
    const high = binarySearch(nums, target, false);
    return [low, high];
}

function binarySearch(nums: number[], target: number, low: boolean): number {
    if (nums.length === 0) return -1;

    let start = 0;
    let end = nums.length;

    while (end - start > 1) {
        const mid = Math.floor(start / 2 + end / 2);
        const midValue = nums[mid];

        if (midValue < target || (!low && midValue === target && mid < nums.length - 1 && nums[mid + 1] === target)) {
            start = mid + 1;
        } else if (nums[mid] > target || (low && midValue === target && mid > 0 && nums[mid - 1] === target)) {
            end = mid;
        } else if (midValue === target) {
            return mid;
        }
    }

    return nums[start] === target ? start : -1;
}

test('searchRange', () => {
    expect(searchRange([10, 10, 10], 10)).toEqual([0, 2]);
    expect(searchRange([10, 10, 10, 10], 10)).toEqual([0, 3]);
    expect(searchRange([1, 10, 11], 10)).toEqual([1, 1]);
    expect(searchRange([1, 10, 10, 11], 10)).toEqual([1, 2]);
    expect(searchRange([1, 10, 10, 11], 11)).toEqual([3, 3]);
    expect(searchRange([1, 10, 10, 11], 1)).toEqual([0, 0]);
    expect(searchRange([1, 10, 10, 11], 5)).toEqual([-1, -1]);
});
