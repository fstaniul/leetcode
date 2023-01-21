/*
15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    const triplets: [number, number, number][] = [];

    // basic cases
    if (nums.length < 3) return triplets;
    if (nums[0] > 0) return triplets
    if (nums[nums.length - 1] < 0) return triplets;

    for (let fixed = 0; fixed < nums.length - 2; fixed++) {
        if (nums[fixed] > 0) break;
        if (fixed > 0 && nums[fixed] === nums[fixed - 1]) continue; // ignore same starting number

        let low = fixed + 1;
        let high = nums.length - 1;
        while (low < high) {
            const sum = nums[fixed] + nums[low] + nums[high];
            if (sum > 0) {
                high--;
            } else if (sum < 0) {
                low++
            } else {
                triplets.push([nums[fixed], nums[low], nums[high]]);

                let last_low = nums[low];
                while (low < high && nums[low] === last_low) low++;

                let last_high = nums[high];
                while (low < high && nums[high] === last_high) high--;
            }
        }
    }

    return triplets;
}

test('Example 1', () => {
    const nums = [-1,0,1,2,-1,-4];
    expect(threeSum(nums)).toEqual(deepContaining([[-1, -1, 2], [-1, 0, 1]]));
});

test('Example 2', () => {
    const nums = [0,1,1]
    expect(threeSum(nums)).toEqual([]);
});

test('Example 3', () => {
    const nums = [0,0,0]
    expect(threeSum(nums)).toEqual([[0,0,0]]);
});

test('Example 4', () => {
    const nums = [0,0,0,0]
    expect(threeSum(nums)).toEqual([[0,0,0]]);
});

test('Example 4', () => {
    const nums = [0,0,0,0,0]
    expect(threeSum(nums)).toEqual([[0,0,0]]);
});

test('Example 5', () => {
    const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
    const res = threeSum(nums);

    expect(res).toEqual(deepContaining([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]));
    expect(res.map(s => s.sort())).toNotContainDuplicates();
});

function deepContaining(arr: number[][]) {
    return expect.arrayContaining(arr.map(item => expect.arrayContaining(item)));
}

export default threeSum;
