const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// COMMON MATCHERS
test("two plus two if four", () => {
  expect(2 + 2).toBe(4);
});

test("object assigment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// TRUTHINESS
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// NUMBERS
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);  // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // this will work
});

// STRINGS
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// ARRAY AND ITERABLES
const shopList = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];

test("the shopping list has milk on it", () => {
  expect(shopList).toContain("milk");
  expect(new Set(shopList)).toContain("milk");
});

// EXCEPTIONS
function compileAndroidCode() {
  throw new Error("you are using wrong JDK!");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  // expect(() => compileAndroidCode()).toThrow(/^you are using wrong JDK$/); // test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using wrong JDK!$/); // test pass
});
