module.exports = {
  name: 'multilevelcomps',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/multilevelcomps',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
