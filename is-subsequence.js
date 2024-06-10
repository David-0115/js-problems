/**
 * Write a function called ***isSubsequence*** which takes in two strings and checks whether the characters in the first string
 *  form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string appear somewhere 
 * in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Constraints:
Time Complexity - O(N + M)
 */



function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++
        }

        if (i === str1.length) return true

        j++

    }

    return false

}

// module.exports = { isSubsequence }

/**
 * Explanation
Two-Pointer Approach:

Use two pointers i and j.
i tracks the position in str1.
j tracks the position in str2.
Traversing str2:

Iterate through str2 using j.
Each time a character in str2 matches the current character in str1 (i.e., str2[j] === str1[i]), increment i.
If i reaches the length of str1, it means all characters of str1 have been found in str2 in the correct order, so return true.
End of Loop:

If the loop finishes and i has not reached the end of str1, return false.
 */