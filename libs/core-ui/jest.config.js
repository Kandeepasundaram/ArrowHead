module.exports = {
  name: 'core-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/core-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
