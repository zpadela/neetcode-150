export class Solution {
    twoSum(nums: number[], target: number): number[] {
        let seen = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (seen.has(complement)) {
                return [seen.get(complement)!, i];
            }
            seen.set(nums[i], i);
        }
        throw new Error("No two sum solution");
    }
}