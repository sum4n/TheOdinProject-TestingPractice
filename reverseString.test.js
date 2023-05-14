import reverseString from "./reverseString";

test("hello become olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("god becomes dog", () => {
  expect(reverseString("god")).toBe("dog");
});
