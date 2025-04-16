module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'  // Transform TS and TSX files using ts-jest
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',  // Adjust your alias mapping as needed
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/']
};