/**
 * ### **constructNote**

Write a function called ***constructNote***, which accepts two strings, a message and some letters. 
The function should return ***true*** if the message can be built with the letters that you are given; otherwise, 
it should return ***false***.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
 */

function charMap(str) {
    const charMap = new Map()

    for (let char of str) {
        let charCount = charMap.get(char) || 0
        charMap.set(char, charCount + 1)
    }

    return charMap
}

function constructNote(msg, letters) {
    if (letters === "") return false;
    const msgMap = charMap(msg);
    const letterMap = charMap(letters)

    for (let char of msgMap.keys()) {
        if (!letterMap.get(char) || letterMap.get(char) < msgMap.get(char)) return false;
    }
    return true;
}

// module.exports = { constructNote, charMap }