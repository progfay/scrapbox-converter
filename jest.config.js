module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testMatch: [
    '**/tests/**/*.test.(ts|tsx)'
  ]
}
