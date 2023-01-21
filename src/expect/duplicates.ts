import _ from 'lodash';

expect.extend({
    toNotContainDuplicates(received: any) {
        if (!Array.isArray(received)) {
            return {
                message: () => `expected ${received} to be an array`,
                pass: false,
            }
        }

        const unique = _.uniqWith(received, _.isEqual);

        return {
            pass: received.length === unique.length,
            message: () => `expected ${received} to not contain duplicates`,
            actual: received,
            expected: unique,
        };
    }
});