function backspaceCompare(s: string, t: string): boolean {
    let si = s.length - 1,
        sSkip = 0;
    let ti = t.length - 1,
        tSkip = 0;

    while (si >= 0 || ti >= 0) {
        if (s[si] === '#') {
            si--;
            sSkip++;
            continue;
        }

        if (t[ti] === '#') {
            ti--;
            tSkip++;
            continue;
        }

        if (si >= 0 && sSkip > 0) {
            si--;
            sSkip--;
            continue;
        }

        if (ti >= 0 && tSkip > 0) {
            ti--;
            tSkip--;
            continue;
        }

        if ((si >= 0 && ti >= 0) && s[si] === t[ti]) {
            ti--;
            si--;
            continue;
        } else {
            return false;
        }
    }

    return true;
}

test.each([
    ["ab#c", "ad#c", true],
    ["ab##", "c#d#", true],
    ["a#c", "b", false],
    ['', 'abas####', true],
])('%s == %s is %s', (s, t, result) => {
    expect(backspaceCompare(s, t)).toEqual(result);
});