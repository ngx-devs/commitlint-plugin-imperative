module.exports = {
  branches: ['main'],
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:']
        }
      }
    ],
    '@semantic-release/github',
    '@semantic-release/npm',
    '@semantic-release/git'
  ]
};
