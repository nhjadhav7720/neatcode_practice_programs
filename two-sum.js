// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let ch = target - nums[i]

            if(map.has(ch)) {
                return [i,nums.indexOf(ch)]
            }
            map.set(i, (map.get(i) || 0 ) + 1)
        }
    }
}
