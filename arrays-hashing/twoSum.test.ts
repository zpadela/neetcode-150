import { describe, it, expect } from "vitest";
import { Solution } from "./twoSum"; // add `export` to the class

const solution = new Solution();

describe("twoSum", () => {
    it.each([
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
    ])("$nums, $target -> $expected", ({ nums, target, expected }) => {
        expect(solution.twoSum(nums, target)).toEqual(expected);
    });
});
 
