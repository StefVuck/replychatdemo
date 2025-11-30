// Unit tests for core functions

test('should return correct output for function A', () => {
  expect(functionA(input)).toBe(expectedOutput);
});

test('should handle errors for function B', () => {
  expect(() => functionB(invalidInput)).toThrow(Error);
});
