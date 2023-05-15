import calculator from "../code/calculator";

test("2 + 3 equals 5", () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test("6 + 4 equals 10", () => {
  expect(calculator.add(6, 4)).toBe(10);
});

test("5 - 5 equals 0", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

test("8 - 3 equals 5", () => {
  expect(calculator.subtract(8, 3)).toBe(5);
});

test("6 / 2 equals 3", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("5 / 2 equals 2.5", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("3 x 8 equals 24", () => {
  expect(calculator.multiply(3, 8)).toBe(24);
});

test("2 x 3 equals 6", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
