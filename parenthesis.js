// Valid Parentheses

// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:

// Input: s = "[]"

// Output: true
// Example 2:

// Input: s = "([{}])"

// Output: true
// Example 3:

// Input: s = "[(])"

// Output: false


//******************************************************** */
// function isValid(s) {
//     const map = {
//         ")": "(",
//         "]": "[",
//         "}": "{",
//     };
//     let stack = [];

//     for (let ch of s) {
//         if (ch === "(" || ch === "[" || ch === "{") {
//             stack.push(ch);
//         } else {
//             if (stack.length === 0) {
//                 return false;
//             }
//             const top = stack.pop();
//             if (top !== map[ch]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

//******************************************************** */

function isValid(s) {
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    const stack = [];
    const keys = Object.keys(pairs);
    for (const c of s) {
        if (keys.includes(c)) {
            stack.push(c);
            continue;
        }

        if (pairs[stack.pop()] !== c) {
            return false;
        }
    }

    return stack.length == 0;
}

console.log(isValid("[]")); // true
console.log(isValid("([{}])")); // true
console.log(isValid("[(])")); // false       