// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join();
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [])
        }
        map.get(sortedStr).push(str)
    }
    return [...map.values()]
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"])) // [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(groupAnagrams(["x"])) // [["x"]]
console.log(groupAnagrams([""])) // [[""]]