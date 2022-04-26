module.exports = {
  roots: ['<rootDir>', './'],
  "modulePaths": [
    "<rootDir>",
    "./",
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/tests/__mocks__/fileMock.js',
    // replicate path mappings as in tsconfig.json
    // '^~lib/(.*)$': '<rootDir>/lib/$1',
    "^~components/$": "<rootDir>/components/$1",
  },
  // required setup files, mocks
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
};
