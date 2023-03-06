/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node'
};

// rootDir: './',
// transform: {
//     '^.+\\.ts?$': 'ts-jest'
// },
// projects: [
//     {
//         displayName: 'Fractal UI Package',
//         testEnvironment: 'node',
//         transform: {
//             '^.+\\.ts?$': 'ts-jest'
//         },
//         testMatch: ['<rootDir>/packages/fractal-ui/**/*.test.ts'],
//         testPathIgnorePatterns: ['<rootDir>/packages/fractal-ui/dist']
//     }
// ]
