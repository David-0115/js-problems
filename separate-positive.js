/**
 * ### **separatePositive**

Write a function called ***separatePositive*** which accepts an array of non-zero integers. 
Separate the positive integers to the left and the negative integers to the right. 
The positive numbers and negative numbers need not be in sorted order. 
The problem should be done in place (in other words, do not build a copy of the input array).

**Constraints**

Time Complexity: O(N)
 */


function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Move the left pointer until a negative number is found
        while (left < right && arr[left] > 0) {
            left++;
        }
        // Move the right pointer until a positive number is found
        while (left < right && arr[right] < 0) {
            right--;
        }
        // Swap the positive and negative numbers
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
}

// module.exports = { separatePositive }

//[2, -1, -3, 6, -8, 10]

