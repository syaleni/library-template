const library = require('../build/library');

test('CJS require test', () => {
  expect(library.functions.sample()).toBe('This is a sample function');
});
