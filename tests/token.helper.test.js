// tests/token.helper.test.js

const { sum } = require('../framework/helpers/token.helper.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});