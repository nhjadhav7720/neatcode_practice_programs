// Products of Array Except Self

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
// Constraints:

// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20


function productExceptSelf(nums) {
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        let product = arrproduct([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)]);
        stack.push(product);
    }
    return stack;
}

function arrproduct(arr) {
    const result = arr.reduce((acc, curr) => acc * curr, 1);
    return result;
}

console.log(productExceptSelf([1, 2, 4, 6])); // Output: [48, 24, 12, 8]
console.log(productExceptSelf([-1, 0, 1, 2, 3])); // Output: [0, -6, 0, 0, 0]
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]


function productExceptSelf(nums) {
    const pre = new Array(nums.length).fill(0);
    const pos = new Array(nums.length).fill(0);
    let curr = 1;
    for (let i = 0; i < nums.length; i++) {
        pre[i] = curr;
        curr *= nums[i];
    }

    curr = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        pos[i] = curr * pre[i];
        curr *= nums[i];

    }
    return pos;
}