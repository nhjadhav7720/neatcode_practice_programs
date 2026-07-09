// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

function topKFrequent(nums, k) {
    const map = new Map();

    // Count frequency
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Sort by frequency
    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((item) => item[0]);
}


console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // Output: [3, 2]
console.log(topKFrequent([7, 7], 1)); // Output: [7]
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequent([1], 1)); // Output: [1]
