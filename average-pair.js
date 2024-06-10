/**
 * ### **averagePair**

Write a function called ***averagePair***. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

**Constraints**:

Time Complexity: O(N)
 */
function average(num1, num2) {
    return (num1 + num2) / 2
}

function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = average(arr[left], arr[right])

        if (avg === target) return true;
        if (avg > target) {
            right--
        } else {
            left++
        }
    }
    return false;
}


// module.exports = { averagePair, average }
// //[2,4,6,8]    8
