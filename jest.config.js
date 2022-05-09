const esModules = ['rehype-slug', 'hast-util-*', 'unist-util-*', 'react-markdown', 'space-separated-tokens', 'comma-separated-tokens', 'property-information', 'vfile', 'unified', 'bail', 'is-plain-obj', 'trough', 'remark-parse', 'remark-rehype', 'mdast-util-*', 'micromark', 'unist-builder', 'decode-named-character-reference'].join('|');

module.exports = {
  roots: ['<rootDir>', './'],
  "modulePaths": [
    "<rootDir>",
    "./",
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  // transformIgnorePatterns: [`/node_modules/(?!${esModules})`],

  transformIgnorePatterns: [`([/\\\\]node_modules[/\\\\].+\\.(ts|tsx))|(/node_modules/(?!${esModules}))`],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

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
