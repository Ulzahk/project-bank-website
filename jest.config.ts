import { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{s,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/index.ts',
    '!**/index.tsx',
    '!**/_app.tsx',
    '!**/_document.tsx'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svgTransform.js',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@images(.*)$': '<rootDir>/public/assets/images$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
  },
  testPathIgnorePatterns: ['node_modules', '.next', 'public'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};

export default config;