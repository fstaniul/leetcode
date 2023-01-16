/*
74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

function searchMatrix(matrix: number[][], target: number): boolean {
    const row = binarySearch(matrix, target, (value, index, target) => {
        const lastIndex = value[index].length - 1;
        if (value[index][0] <= target && value[index][lastIndex] >= target) return 0;
        else if (value[index][0] > target) return -1;
        else return 1;
    });
    if (row === -1) return false;
    const column = binarySearch(matrix[row], target, (value, index, target) => target - value[index]);
    return column !== -1;
}

function binarySearch<T>(value: T[], target: number, is: (value: T[], index: number, target: number) => number): number {
    let start = 0;
    let end = value.length;

    while (end - start > 1) {
        const mid = Math.floor((start / 2) + (end / 2));
        const result = is(value, mid, target);
        if (result > 0) {
            start = mid + 1;
        } else if (result < 0)  {
            end = mid;
        } else {
            return mid;
        }
    }

    if (start >= value.length || start < 0) return -1;
    return is(value, start, target) === 0 ? start : -1;
}

test('Example 1', () => {
    const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    const target = 3

    expect(searchMatrix(matrix, target)).toBe(true);
});

test('Example 2', () => {
    const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
    const target = 13;

    expect(searchMatrix(matrix, target)).toBe(false);
});

test('Failing case', () => {
    const matrix = [[1], [3]];
    const target = 4;

    expect(searchMatrix(matrix, target)).toBe(false);
})
