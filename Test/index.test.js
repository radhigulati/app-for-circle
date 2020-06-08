const sum = require("./index");
//const sub = require("./index");


test("adds 1 + 2 to equal 3", () => {
  expect(sum(7, 3)).toBe(10);
});
