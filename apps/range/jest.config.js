module.exports = {
  name: 'range',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/range',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
