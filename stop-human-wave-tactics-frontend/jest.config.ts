import nextJest from "next/jest"

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],

    // If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
    // you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
    // The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
    // For example:

    collectCoverage: true,
    // on node 14.x coverage provider v8 offers good speed and more or less good report
    coverageProvider: 'v8',
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!<rootDir>/out/**',
        '!<rootDir>/.next/**',
        '!<rootDir>/*.config.js',
        '!<rootDir>/coverage/**',
    ],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

        // Handle module aliases
        '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)