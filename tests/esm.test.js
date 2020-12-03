import * as library from '../build/library.js';

test('ESM import test', () => {
  expect(library.functions.sample()).toBe('This is a sample function');
});
