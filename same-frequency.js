/**
 * ### **sameFrequency**

Write a function called ***sameFrequency***. Given two positive integers, 
find out if the two numbers have the same frequency of digits.
 */

function freqMap(num) {
    const map = new Map();
    const strNum = String(num)
    for (let digit of strNum) {
        let count = map.get(digit) || 0
        map.set(digit, count + 1)
    }
    return map
}

function sameFrequency(num1, num2) {
    const num1Map = freqMap(num1);
    const num2Map = freqMap(num2);
    if (num1Map.size !== num2Map.size) return false;

    for (let num of num1Map.keys()) {
        if (!num2Map.get(num) || num1Map.get(num) !== num2Map.get(num)) return false;
    }
    return true;
}

// module.exports = { sameFrequency }
