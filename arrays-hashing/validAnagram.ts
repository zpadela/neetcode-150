export class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const countMap = new Map<string, number>();
        for (const element of s) {
            countMap.set(element, (countMap.get(element) || 0) + 1);
        }
        for (const element of t) {
            if (!countMap.has(element)) {
                return false;
            }
            if (countMap.get(element) === 0) {
                return false;
            }
            countMap.set(element, countMap.get(element)! - 1);
        }
        return true;
    }
}