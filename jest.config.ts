module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'  // Use ts-jest to process TS and TSX files
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',  // Map the @ alias to your project root
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/']
};