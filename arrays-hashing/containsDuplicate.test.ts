import { describe, it, expect } from "vitest";
import { Solution } from "./containsDuplicate"; // add `export` to the class

const solution = new Solution();

describe("hasDuplicate", () => {
    it.each([
        { nums: [1, 2, 3, 3], expected: true },
        { nums: [1, 2, 3, 4], expected: false },
        { nums: [], expected: false },              // empty
        { nums: [7], expected: false },             // single element
        { nums: [5, 5], expected: true },           // smallest duplicate case
        { nums: [-1, 0, -1], expected: true },      // negatives
        { nums: [1, 2, 3, 4, 1], expected: true },  // duplicate far apart
    ])("$nums -> $expected", ({ nums, expected }) => {
        expect(solution.hasDuplicate(nums)).toBe(expected);
    });
});