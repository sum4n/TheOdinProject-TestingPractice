import caesarCipher from "./caesarCipher";

test("hello becomes ifmmp", () => {
  expect(caesarCipher("hello", 1)).toMatch("ifmmp");
});

test("abcd become bcde", () => {
  expect(caesarCipher("abcd", 1)).toMatch("bcde");
});

test("'I love You!' beomes 'M pszi Csy!'", () => {
  expect(caesarCipher("I love You!", 4)).toMatch("M pszi Csy!");
});
