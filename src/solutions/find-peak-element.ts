/*
162. Find Peak Element

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
*/

function findPeakElement(nums: number[]): number {
    let start = 0;
    let end = nums.length;

    while (end - start > 1) {
        const mid = Math.floor((start / 2) + (end / 2));
        const isPeak = (mid === 0 || nums[mid - 1] < nums[mid]) && (mid === nums.length - 1 || nums[mid] > nums[mid + 1]);

        if (isPeak) return mid;
        if (nums[mid] < nums[mid + 1]) start = mid + 1;
        else end = mid;
    }

    return start;
}

test('Example 1', () => {
    const nums = [1,2,3,1];
    expect(findPeakElement(nums)).toEqual(2);
});

test('Example 2', () => {
    const nums = [1,2,1,3,5,6,4];
    expect(findPeakElement(nums)).toEqual(5);
});

test('Example 3', () => {
    const nums = [1,2];
    expect(findPeakElement(nums)).toEqual(1);
});