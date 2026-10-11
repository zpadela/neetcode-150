import { describe, it, expect } from "vitest";
import { Solution } from "./groupAnagrams"; // add `export` to the class
 
const solution = new Solution();
 
// Group order and word order within a group don't matter, so sort both.
const normalize = (groups: string[][]) =>
    groups.map((g) => [...g].sort()).sort((a, b) => a.join().localeCompare(b.join()));
 
describe("groupAnagrams", () => {
    it.each([
        { strs: ["act", "pots", "tops", "cat", "stop", "hat"], expected: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]] },
        { strs: ["x"], expected: [["x"]] },
        { strs: [""], expected: [[""]] },                                     // empty string
        { strs: ["", ""], expected: [["", ""]] },                             // empty strings group together
        { strs: ["abc", "abc"], expected: [["abc", "abc"]] },                 // exact duplicates
        { strs: ["aab", "abb"], expected: [["aab"], ["abb"]] },               // same letters, different counts
        { strs: ["abc", "def", "ghi"], expected: [["abc"], ["def"], ["ghi"]] }, // no anagrams
    ])("$strs -> $expected", ({ strs, expected }) => {
        expect(normalize(solution.groupAnagrams(strs))).toEqual(normalize(expected));
    });
});
 