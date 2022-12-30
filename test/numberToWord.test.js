const { testCases } = require("../lib/constant");
const numberToWord = require("./../lib/numberToWord");

test("Converts Numbers to Words", () => {
  testCases.forEach(([number, expected]) => {
    const result = numberToWord(number);
    expect(result).toBe(expected);
  });
});
