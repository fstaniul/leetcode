import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        include: ['src/solutions/*.ts', 'src/**/*.test.ts', 'src/**/*.spec.ts'],
    },
});
