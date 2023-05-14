import capitalize from "./capitalize";

test("hello to become Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("welcome to become Welcome", () => {
  expect(capitalize("welcome")).toBe("Welcome");
});
