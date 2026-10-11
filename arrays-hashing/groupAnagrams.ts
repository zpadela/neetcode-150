export class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        for (const word of strs) {
            const counts = new Array(26).fill(0);
            for (const ch of word) {
                counts[ch.charCodeAt(0) - 97]++;
            }
            const key = counts.join(",");
            if (anagrams.has(key)) {
                anagrams.get(key)!.push(word);
            } else {
                anagrams.set(key, [word]);
            }
        }
        return Array.from(anagrams.values());
    }
}