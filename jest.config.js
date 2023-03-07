/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    testEnvironment: 'jsdom',
    rootDir: './',
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.base.json'
            }
        ]
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    projects: [
        {
            displayName: 'Firebase DB Manager Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/firebase-db-manager/**/*.test.ts', '<rootDir>/packages/firebase-db-manager/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/firebase-db-manager/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Auth Screen Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-auth-screen/**/*.test.ts', '<rootDir>/packages/fractal-auth-screen/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-auth-screen/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Factal Charts Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-charts/**/*.test.ts', '<rootDir>/packages/fractal-charts/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-charts/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Examples Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-examples/**/*.test.ts', '<rootDir>/packages/fractal-examples/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-examples/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Firebase Auth Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-firebase-auth/**/*.test.ts', '<rootDir>/packages/fractal-firebase-auth/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-firebase-auth/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Media Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-media/**/*.test.ts', '<rootDir>/packages/fractal-media/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-media/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Messaging Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-messaging/**/*.test.ts', '<rootDir>/packages/fractal-messaging/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-messaging/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Navigation Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-navigation/**/*.test.ts', '<rootDir>/packages/fractal-navigation/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-navigation/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal Navigation Router Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: [
                '<rootDir>/packages/fractal-navigation-router/**/*.test.ts',
                '<rootDir>/packages/fractal-navigation-router/**/*.test.tsx'
            ],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-navigation-router/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Fractal UI Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/fractal-ui/**/*.test.ts', '<rootDir>/packages/fractal-ui/**/*.test.tsx'],
            testPathIgnorePatterns: ['<rootDir>/packages/fractal-ui/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        },
        {
            displayName: 'Size Class Package',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[tj]sx?$': [
                    'ts-jest',
                    {
                        tsconfig: '<rootDir>/tsconfig.base.json'
                    }
                ]
            },
            testMatch: ['<rootDir>/packages/size-class/**/*.test.ts'],
            testPathIgnorePatterns: ['<rootDir>/packages/size-class/dist'],
            setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
        }
    ]
};
