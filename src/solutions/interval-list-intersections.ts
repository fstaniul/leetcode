/*
986. Interval List Intersections

You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
*/

function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let firstPointer = 0;
    let secondPointer = 0;

    const intersections: number[][] = [];

    while (firstPointer < firstList.length && secondPointer < secondList.length) {
        const [fs, fe] = firstList[firstPointer];
        const [ss, se] = secondList[secondPointer];

        const [is, ie] = [Math.max(fs, ss), Math.min(fe, se)];

        if (is <= ie) intersections.push([is, ie]);

        if (ie === fe || fe < se) firstPointer++;
        if (ie === se || se < fe) secondPointer++;
    }

    return intersections;
}