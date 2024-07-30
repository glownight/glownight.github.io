
import stringApi from "../src/leetcode/code/string.js";

test("reverse string", () => {
    expect(stringApi.reverseString("hello")).toBe("olleh");
});