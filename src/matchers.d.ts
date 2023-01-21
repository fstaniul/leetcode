export {};

interface CustomMatchers<R = unknown> {
    toNotContainDuplicates(): R;
}

declare global {
    namespace Vi {
        interface Assertion extends CustomMatchers {}
        interface AsymmetricMatchersContaining extends CustomMatchers {}
    }
}
