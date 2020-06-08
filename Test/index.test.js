const sum = require("./index");
//const sub = require("./index");


test("adds 1 + 2 to equal 3", () => {
  expect(sum(7, 3)).toBe(10);
});

test("subtracts 5 + 4 to equal 1", () => {
  expect(sum(5, 4)).toBe(9);
});
