import { describe, it, expect } from "vitest";
import { Solution } from "./validAnagram"; // add `export` to the class
 
const solution = new Solution();
 
describe("isAnagram", () => {
    it.each([
        { s: "racecar", t: "carrace", expected: true },
        { s: "jar", t: "jam", expected: false },
        { s: "anagram", t: "nagaram", expected: true },
        { s: "rat", t: "car", expected: false },
        { s: "a", t: "a", expected: true },             // single char match
        { s: "a", t: "b", expected: false },            // single char mismatch
        { s: "a", t: "ab", expected: false },           // different lengths
        { s: "aab", t: "abb", expected: false },        // same letters, wrong counts
        { s: "aabbcc", t: "cbacba", expected: true },   // repeated letters
        { s: "abcdef", t: "fedcba", expected: true },   // fully reversed
        { s: "listen", t: "listen", expected: true },   // identical strings
    ])("$s, $t -> $expected", ({ s, t, expected }) => {
        expect(solution.isAnagram(s, t)).toBe(expected);
    });
});
 