import analyzeArray from "../code/analyzeArray";

test("object assignment 1", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("object assignment 2", () => {
  const obj = analyzeArray([1, 2, 3, 4, 5]);
  expect(obj).toEqual({ average: 3, min: 1, max: 5, length: 5 });
});
